"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { useInfiniteScroll } from "@workspace/ui/hooks/use-infinite-scroll";
import { InfiniteScrollTrigger } from "@workspace/ui/components/infinite-scroll-trigger";
import { usePaginatedQuery } from "convex/react";

import { api } from "@workspace/backend/_generated/api";
import type { PublicFile } from "@workspace/backend/private/files";
import { Button } from "@workspace/ui/components/button";
import {
  FileIcon,
  MoreHorizontalIcon,
  PlusIcon,
  TrashIcon,
} from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";
import { UploadDialog } from "../components/upload-dialog";
import { useState } from "react";
import { DeleteFileDialog } from "../components/delete-file-dialog";

export const FilesView = () => {

  const files = usePaginatedQuery(
    api.private.files.list,
    {  },
    { initialNumItems: 10 }
  );

  const {
    topElementRef,
    handleLoadMore,
    canLoadMore,
    isLoadingFirstPage,
    isLoadingMore,
  } = useInfiniteScroll({
    status: files.status,
    loadMore: files.loadMore,
    loadSize: 10,
  });

  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [deleteDialogOpen, setdeleteDialogOpen] = useState(false);

  const [selectedFile, setSelectedFile] = useState<PublicFile | null>(null);
  const handleDeleteClick = (file: PublicFile) => {
    setSelectedFile(file);
    setdeleteDialogOpen(true);
  };

  const handleFileDeleted = () => {
    setSelectedFile(null);
  };
  return (
    <>
      <DeleteFileDialog
        onOpenChange={setdeleteDialogOpen}
        open={deleteDialogOpen}
        file={selectedFile}
        onDeleted={handleFileDeleted}
      />
      <UploadDialog
        onOpenChange={setUploadDialogOpen}
        open={uploadDialogOpen}
      />
      <div className="flex min-h-screen bg-muted p-8">
        <div className="mx-auto w-full max-w-3xl ">
          <div className="space-y-2 ">
            <h1 className="text-2xl md:text-4xl">Knowledge Base</h1>
            <p className="text-muted-foreground">
              Upload and manage documents for the AI assistant
            </p>
          </div>
          <div className="mt-8 rounded-lg border bg-background">
            <div className="flex items-center justify-end border-b px-6 py-4">
              <Button onClick={() => setUploadDialogOpen(true)}>
                <PlusIcon />
                Add new
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="px-6 py-4 font-medium">Name</TableHead>
                  <TableHead className="px-6 py-4 font-medium">Type</TableHead>
                  <TableHead className="px-6 py-4 font-medium">Size</TableHead>
                  <TableHead className="px-6 py-4 font-medium">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(() => {
                  if (isLoadingFirstPage) {
                    return (
                      <TableRow>
                        <TableCell colSpan={4} className="h-24 text-center">
                          Loading files...
                        </TableCell>
                      </TableRow>
                    );
                  }
                  if (files.results.length === 0) {
                    return (
                      <TableRow>
                        <TableCell colSpan={4} className="h-24 text-center">
                          No files found.
                        </TableCell>
                      </TableRow>
                    );
                  }
                  return files.results.map((file: PublicFile) => (
                    <TableRow key={file.id} className="hover:bg-muted/50">
                      <TableCell className="px-6 py-4 ">
                        <FileIcon />
                        <div className="flex items-center gap-3">
                          {file.name}
                        </div>
                      </TableCell>
                      <TableCell className="px-6 py-4 ">
                        <Badge className="uppercase" variant={"outline"}>
                          {file.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="px-6 py-4 text-muted-foreground">
                        {file.size}
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              className="size-8 p-0"
                              size={"sm"}
                              variant={"ghost"}
                            >
                              <MoreHorizontalIcon />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {/* can add download later*/}
                            <DropdownMenuItem
                              onClick={() => handleDeleteClick(file)}
                              className="text-destructive"
                            >
                              <TrashIcon className="mr-2 size-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ));
                })()}
              </TableBody>
            </Table>
            {!isLoadingFirstPage && files.results.length > 0 && (
              <div className="border-t">
                <InfiniteScrollTrigger
                  ref={topElementRef}
                  onLoadMore={handleLoadMore}
                  canLoadMore={canLoadMore}
                  isLoadingMore={isLoadingMore}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default FilesView;
