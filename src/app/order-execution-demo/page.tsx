import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import OrderDemo from "./OrderDemo";
export const metadata = pageMetadata({title:"Order Execution Demo",description:"Explore a Human + AI order execution workflow with synthetic evidence, human approval and a value verification ledger.",path:"/order-execution-demo"});
export default function Page(){return <><PageHero eyebrow="Interactive process simulation" title="One order. Four functions. One accountable decision." subtitle="Follow Order → Engineering → Procurement → Shipment, from an early risk signal to an approved action and a verified outcome."/><OrderDemo/></>;}
