import type { Metadata } from "next";
import { RevenueAgentDemo } from "./RevenueAgentDemo";

export const metadata: Metadata = {
  title: "Lead-to-Revenue Automation Demo | RightSense",
  description:
    "Synthetic reference demo showing how a WhatsApp enquiry can be captured, qualified, assigned, synchronized to CRM and converted into a scheduled sales action.",
};

export default function RevenueAgentDemoPage() {
  return <RevenueAgentDemo />;
}
