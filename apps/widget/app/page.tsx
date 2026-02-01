import { WidgetView } from "@/modules/widget/ui/views/widget-view";

const Page = () => {
  const organizationId = process.env.ORGANISATION_ID!

  return <WidgetView  organizationId={organizationId}/>;
};

export default Page;
