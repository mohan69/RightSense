import { PageHero } from "@/components/sections/PageHero";
import { ProcessRedesignSection } from "@/components/sections/ProcessRedesignSection";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({title:"Manufacturing Process Redesign Use Cases",description:"Six practical Human + AI workflows for orders, proposals, engineering, procurement, management and plant operations.",path:"/manufacturing-use-cases"});
export default function Page(){return <><PageHero eyebrow="Manufacturing use cases" title="Six places to redesign the work" subtitle="Illustrative process designs to explore with your team. Outcomes and targets are agreed from your baseline; these are not customer case studies or promised results."/><ProcessRedesignSection/></>;}
