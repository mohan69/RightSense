import { PageHero } from "@/components/sections/PageHero";
import { ProcessRedesignSection } from "@/components/sections/ProcessRedesignSection";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({title:"Manufacturing and EPC AI Use Cases",description:"Two concrete, illustrative use cases for valve and pump proposal flow and EPC project delivery, each with ROI assumptions and measurable KPIs.",path:"/manufacturing-use-cases"});
export default function Page(){return <><PageHero eyebrow="Manufacturing and EPC use cases" title="Two measurable places to start" subtitle="Illustrative process designs for valve and pump proposal flow and EPC project delivery. Assumptions are explicit; results and targets must be established from each client's baseline."/><ProcessRedesignSection/></>;}
