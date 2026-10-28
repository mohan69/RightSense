# ConfirmIQ pilot and launch pack

This pack supports a bounded customer validation of ConfirmIQ as **assisted trade capture and validation**. It is a pilot plan, not a report of completed results.

## Pilot boundary

Before testing, agree with the customer:

- One confirmation-to-trade workflow, participating reviewers and a named business owner.
- Representative trade confirmation and contract document formats from marketers, brokers and traders, with customer-approved redaction and handling.
- A frozen set of expected trade fields and the customer's generic or test-environment schema.
- Read-only source access and a non-production destination. No production booking or autonomous approval.
- Access, retention, deletion, reviewer roles and audit requirements.
- Baseline method and acceptance gates, set with the customer before the sample is processed.

Include routine cases and useful edge cases such as alternate layouts, amendments, missing fields, conflicting terms, units/currencies and low-quality scans where they occur in the customer's workflow. Keep a separately adjudicated expected-value record for each sample. Record the source version and any reviewer corrections.

## Measures

| Measure | Definition | Evidence |
| --- | --- | --- |
| Field extraction accuracy | Correct extracted values divided by adjudicated fields evaluated; report by field and overall, and show the sample size. | Adjudicated expected values compared with the first-pass extracted output before human correction. |
| Exception rate | Confirmations with at least one human-review exception divided by confirmations processed. Break out missing, conflicting, low-confidence and non-material exceptions. | Exception queue and reviewer resolution log. |
| Review time | Active reviewer minutes from assignment through resolution and approval; report median and P90. | Timestamped review events, excluding documented pauses. |
| Test handoff success | Approved records accepted by the agreed test schema divided by approved records submitted. | Validation output and test-environment acknowledgement. |

Do not set a success threshold from synthetic demo data. Agree target values after reviewing the baseline and the business cost of errors, exceptions and manual review. Report results with denominators and sample size; do not generalize beyond the formats and workflow tested.

## Short exception-resolution demo (about 6 minutes)

1. State that the sample confirmation is synthetic and that mapping is generic.
2. Show the source document and extracted candidate trade fields together.
3. Open one missing or conflicting field and point to the source evidence.
4. Have the reviewer correct or confirm the field and record the resolution.
5. Show human approval and the resulting structured trade record.
6. Demonstrate schema validation or a controlled handoff to a CTRM test environment only if that connection is actually configured; otherwise show the generic output and label the integration as unconnected.
7. Close with the four pilot measures and ask to agree a redacted sample, schema and test owner.

## LinkedIn clarification draft

ConfirmIQ is a RightSense Technologies product for assisted trade capture and validation. It helps turn trade documents from marketers, brokers and traders into structured, CTRM-ready trade data, with exceptions reviewed and approved by people before handoff.

Advaitha is the consulting and transformation practice of RightSense Technologies. It supports the operating architecture, control model and adoption approach around commodity trading workflows. RightSense owns and develops ConfirmIQ.

The current demonstration uses synthetic sample data and generic CTRM mapping. A customer pilot will validate extraction accuracy, exception handling, review time and test-environment handoff.

For a product walkthrough or pilot conversation, contact RightSense at contact@rightsense.in.

*Draft for review; not published or scheduled.*
