// Generated CCAR-P Mock Test question bank: 330 questions across 6 sets.
// Source: https://certlab.me/exam/anthropic-claude-certified-architect-professional-ccar-p
// Retrieved: 2026-10-26. IDs are prefixed with MOCK to keep this bank separate from the 113-question original set.
const CCAR_QUESTIONS = [
  {
    "id": "MOCK-001",
    "set": 1,
    "number": 1,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A research laboratory wants to reduce median sample-intake time. Process data shows that most elapsed time comes from an overnight instrument-availability synchronization, while technicians separately interpret free-form submission notes. Existing chain-of-custody rules and sample-acceptance approvals work as intended. Which proposal best translates the actual business problem into a Claude-based solution?<\/p>",
    "options": {
      "A": "<p>Fix instrument freshness in the laboratory system, pilot Claude for note extraction and routing, retain chain-of-custody controls, and measure synchronization delay separately from technician intake time.<\/p>",
      "B": "<p>Keep the overnight synchronization, use Claude to infer likely instrument availability from submission notes, retain sample-acceptance approvals, and measure total intake time plus escalation rate.<\/p>",
      "C": "<p>Fix instrument freshness, keep manual note interpretation, and use Claude only to rewrite acceptance notifications, measuring notification clarity and total sample-intake time.<\/p>",
      "D": "<p>Keep the overnight synchronization, let Claude reconcile notes with historical instrument schedules, retain acceptance approvals, and measure extraction confidence alongside total sample-intake time.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Một giải pháp dùng Claude phải xuất phát từ vấn đề kinh doanh đã được đo lường, không nên cố gán mọi nguyên nhân chậm trễ cho mô hình. Hệ thống phòng thí nghiệm cần xử lý nút thắt lớn nhất là dữ liệu thiết bị không được cập nhật kịp thời; Claude chỉ nên hỗ trợ phần đọc hiểu và xử lý ghi chú. Đo riêng từng phần sẽ cho biết giải pháp kết hợp có thực sự cải thiện thời gian tiếp nhận mẫu hay không.<\/p>"
  },
  {
    "id": "MOCK-002",
    "set": 1,
    "number": 2,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A commercial-insurance sponsor requests an “autonomous Claude agent” for renewal submissions. The process combines narrative emails and forms, current policy rules, system-of-record eligibility data, and reviewer judgment. A six-week pilot must reduce review time without increasing material omissions. Which solution definition best represents the business problem?<\/p>",
    "options": {
      "A": "<p>Have Claude interpret submissions and decide eligibility, use the policy system only to record results, let reviewers sample completed cases, and track review time plus omission rate.<\/p>",
      "B": "<p>Have Claude extract submission facts and flag gaps against approved policy; keep eligibility in current systems, route ambiguous cases to reviewers, and gate on time and omission thresholds.<\/p>",
      "C": "<p>Use deterministic templates to extract every submission field, have Claude approve exceptions to policy rules, send incomplete cases to reviewers, and track review time plus omission rate.<\/p>",
      "D": "<p>Have Claude summarize submissions from approved sources, keep all comparisons and eligibility checks manual, and gate the pilot on summary readability, review time, and model cost.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Phương án tốt nhất biến yêu cầu công nghệ chung chung thành một quy trình có phạm vi và trách nhiệm rõ ràng. Claude trích xuất thông tin và phát hiện dữ liệu còn thiếu; hệ thống hiện tại vẫn quyết định điều kiện hợp lệ; người đánh giá xử lý trường hợp chưa rõ. Thử nghiệm phải đạt cả mục tiêu về tốc độ lẫn tỷ lệ bỏ sót.<\/p>"
  },
  {
    "id": "MOCK-003",
    "set": 1,
    "number": 3,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A customer-success leader asks for Claude to summarize account calls and “take care of follow-up.” Follow-up may include drafting an email, updating CRM fields, or proposing a contract change that requires approval. The leader wants a proposal next week, but has not defined acceptable quality. Which TWO artifacts should the architect produce before selecting an architecture? Choose 2.<\/p>",
    "options": {
      "A": "<p>A responsibility map separating Claude’s interpretation and drafting work, existing-system validation and recording, and human approval decisions.<\/p>",
      "B": "<p>A preferred-model declaration based on the architect’s prior projects, with other models considered only if the pilot fails.<\/p>",
      "C": "<p>A multi-agent topology assigning one agent to summaries, one to CRM updates, and one to contract decisions.<\/p>",
      "D": "<p>A measurable acceptance set covering summary fidelity, action-item recall, unauthorized-change rate, latency, and cost on representative calls.<\/p>",
      "E": "<p>A prompt library containing several tones for follow-up emails, treated as the complete set of solution requirements.<\/p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "<p>Trước khi chọn kiến trúc, cần làm rõ cụm từ ‘xử lý việc theo dõi’ thành các trách nhiệm và kết quả có thể đo được. Bản đồ trách nhiệm giúp tách việc diễn giải, cập nhật hệ thống và phê duyệt. Bộ tiêu chí nghiệm thu giúp kiểm tra chất lượng, hành động trái phép, độ trễ và chi phí. Việc chọn mô hình, cấu trúc agent hay prompt chỉ nên thực hiện sau đó.<\/p>"
  },
  {
    "id": "MOCK-004",
    "set": 1,
    "number": 4,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A procurement team reviews narrative vendor questionnaires against current security policies and vendor-master data. It wants faster first-pass analysis, but risk thresholds must be enforced consistently and a procurement officer must accept residual risk. Which division of work is most appropriate?<\/p>",
    "options": {
      "A": "<p>Let Claude interpret the questionnaires, retrieve any needed vendor facts from memory, and update the vendor’s final risk tier when its explanation is confident.<\/p>",
      "B": "<p>Use deterministic rules to summarize narrative responses, while Claude executes risk thresholds and approves exceptions expressed in natural language.<\/p>",
      "C": "<p>Use Claude to analyze narrative responses and draft cited findings; use existing systems for current vendor facts and threshold enforcement; have the procurement officer decide residual-risk acceptance.<\/p>",
      "D": "<p>Create independent agents to vote on each vendor, omit system integrations for the pilot, and measure agreement among agents as the primary business outcome.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Bài toán có ba nhóm trách nhiệm riêng. Claude phù hợp với việc đọc hiểu và tổng hợp nội dung bảng câu hỏi dạng tự do. Hệ thống hiện có phải tiếp tục là nguồn chính xác cho dữ liệu nhà cung cấp và các ngưỡng cố định. Nhân viên thu mua vẫn là người chấp nhận rủi ro còn lại. Các phương án khác phân công sai trách nhiệm hoặc dùng chỉ số nội bộ của mô hình thay cho kết quả kinh doanh.<\/p>"
  },
  {
    "id": "MOCK-005",
    "set": 1,
    "number": 5,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A software company wants Claude to reduce the time spent drafting technical-support replies. Replies must use approved support content, preserve company tone, avoid unsupported troubleshooting steps, meet a four-second p95 latency target, and stay within a per-case cost budget. Which proposal best translates these requirements into a solution?<\/p>",
    "options": {
      "A": "<p>Let Claude answer from its general context, have agents review a daily sample, and select the pilot if average drafting time and per-case cost improve.<\/p>",
      "B": "<p>Use fixed response templates without connecting approved support content, ask Claude only to adjust tone, have agents resolve unmatched cases, and gate on unsupported-step rate, latency, and cost.<\/p>",
      "C": "<p>Let a Claude agent search public troubleshooting sites and update the support knowledge base, have agents approve replies only on complaints, and gate on tone, latency, and cost.<\/p>",
      "D": "<p>Have Claude draft from retrieved approved content, route unsupported cases to agents, keep knowledge changes outside the model, and gate on grounded quality, tone, p95 latency, and cost.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Giải pháp đầy đủ không chỉ dừng ở việc tạo bộ đánh giá. Claude phải soạn nội dung dựa trên nguồn đã được phê duyệt, tuân thủ quản trị tri thức, có phương án chuyển tiếp khi không đủ dữ liệu và đo cả chất lượng lẫn hiệu quả vận hành. Các lựa chọn khác dùng ngữ cảnh thiếu căn cứ, mẫu không phù hợp, nguồn chưa được duyệt hoặc chỉ kiểm tra sau khi lỗi đã xảy ra.<\/p>"
  },
  {
    "id": "MOCK-006",
    "set": 1,
    "number": 6,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A finance team wants Claude to accelerate employee-expense intake. Most fields and policy checks are already structured, but exception justifications are free text. The current policy and cost-center record must be available before a claim can proceed; otherwise the case must return to finance for missing information. Which TWO statements best define the Claude solution scope? Choose 2.<\/p>",
    "options": {
      "A": "<p>Send every structured field and policy calculation to Claude so one generative step owns the complete expense-intake decision.<\/p>",
      "B": "<p>Send exception narratives to Claude to classify the reason and draft a policy-grounded request for required evidence.<\/p>",
      "C": "<p>Let Claude infer a missing cost center from prior claims so the case can continue without the current record.<\/p>",
      "D": "<p>Cache policy monthly, let Claude submit exceptions resembling approved claims, and return only novel cases to finance.<\/p>",
      "E": "<p>Keep structured validation in the expense system and return claims to finance whenever current policy or cost-center data is unavailable.<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "<p>Không cần dùng Claude để thay thế toàn bộ quy trình chi phí vốn đã có cấu trúc. Claude chỉ nên đọc các ngoại lệ dạng văn bản tự do và soạn yêu cầu bổ sung bằng chứng dựa trên dữ liệu có căn cứ. Hệ thống chi phí vẫn thực hiện kiểm tra và phải dừng khi thiếu chính sách hoặc mã trung tâm chi phí chính thức. Các phương án khác mở rộng AI quá mức, tự suy đoán dữ liệu còn thiếu hoặc bỏ qua bước dự phòng bắt buộc.<\/p>"
  },
  {
    "id": "MOCK-007",
    "set": 1,
    "number": 7,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A product team wants to reduce weekly feedback-review time. Claude may classify comments into a fixed taxonomy and draft themes, but roadmap decisions remain with the product manager and every theme must trace to original comments. The team also values predictable latency and low cost. Which solution definition best fits?<\/p>",
    "options": {
      "A": "<p>Use Claude for classification and theme drafts, retain source links in the intake system, keep roadmap decisions with the product manager, and measure classification quality, review time, latency, and cost.<\/p>",
      "B": "<p>Use Claude for classification and theme drafts, let it revise the taxonomy when confidence is low, keep roadmap decisions with the product manager, and measure review time, latency, and cost.<\/p>",
      "C": "<p>Use keyword rules for classification, ask Claude only to polish the theme summary, preserve source links, keep roadmap decisions with the product manager, and measure review time, latency, and cost.<\/p>",
      "D": "<p>Use Claude for classification and theme drafts, discard individual source links after aggregation, keep roadmap decisions with the product manager, and measure classification quality, review time, latency, and cost.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Phương án đúng giao việc phân loại và soạn thảo cho Claude, nhưng vẫn giữ quyền quyết định lộ trình sản phẩm cho quản lý sản phẩm và lưu khả năng truy vết trong hệ thống tiếp nhận. Hiệu quả phải được đo ở cả cấp tác vụ và vận hành. Các lựa chọn khác tự ý thay đổi hệ thống phân loại, dùng quy tắc cứng cho bài toán ngôn ngữ hoặc làm mất liên kết đến nguồn.<\/p>"
  },
  {
    "id": "MOCK-008",
    "set": 1,
    "number": 8,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An enterprise renewals team needs a daily account brief using current CRM, ticket, and contract data. Flagged accounts can contain conflicting evidence that must remain visible, pricing changes require human approval, and the pilot has strict quality, latency, and cost limits. Which solution boundary best addresses the complete problem?<\/p>",
    "options": {
      "A": "<p>Give Claude a weekly consolidated export, require citations in each brief, let it select the most credible value when sources conflict, keep pricing approval with humans, and gate on quality, latency, and cost.<\/p>",
      "B": "<p>Connect the current sources read-only, have Claude produce an attributed brief that preserves conflicting evidence, keep pricing changes in the existing human-approved process, and gate the pilot on quality, latency, and cost.<\/p>",
      "C": "<p>Connect the current sources read-only, have Claude choose one value for every conflict and produce the brief, keep pricing approval with humans, and gate the pilot on quality, latency, and cost.<\/p>",
      "D": "<p>Connect the current sources, use deterministic rules to suppress flagged accounts from the daily brief, send those accounts to manual research, and gate only the routine path on latency and cost.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Ranh giới giải pháp đầy đủ phải có dữ liệu hiện hành từ nguồn chính thức, phần tổng hợp vẫn thể hiện các bằng chứng mâu thuẫn, quy trình định giá có con người phê duyệt và các ngưỡng về chất lượng, độ trễ, chi phí. Các phương án khác dùng dữ liệu cũ, để mô hình tự giải quyết xung đột bắt buộc hoặc loại bỏ trường hợp khó khỏi phạm vi đánh giá.<\/p>"
  },
  {
    "id": "MOCK-009",
    "set": 1,
    "number": 9,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A manufacturer wants Claude to draft findings from unstructured quality-incident reports. Every finding must be grounded in the current procedure, and the incident commander retains the line-stop decision. Which TWO elements define the solution boundary? Choose 2.<\/p>",
    "options": {
      "A": "<p>Have Claude draft grounded findings while the incident commander retains the line-stop decision.<\/p>",
      "B": "<p>Let a grounded finding stop the line automatically and ask the commander to review it at shift end.<\/p>",
      "C": "<p>Retrieve the approved procedure, attach its source to the draft, and mark unsupported findings for commander review.<\/p>",
      "D": "<p>Keep the commander as decision owner but let Claude use its general knowledge when the procedure is missing.<\/p>",
      "E": "<p>Choose the most capable model first and define grounding behavior after users try the pilot.<\/p>"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "<p>Lựa chọn A giao cho Claude việc soạn thảo có căn cứ nhưng vẫn giữ quyền dừng dây chuyền cho người chỉ huy. Lựa chọn C quy định rõ quy trình đã phê duyệt và cách xử lý khi không đủ căn cứ. Tự động hành động, dựa vào kiến thức chung không có quy trình hỗ trợ hoặc chọn mô hình trước khi xác định bài toán đều vi phạm các ranh giới đã nêu.<\/p>"
  },
  {
    "id": "MOCK-010",
    "set": 1,
    "number": 10,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A global account team requests an autonomous assistant for policy questions and customer-record updates. Answers must cite approved knowledge, updates require current CRM state and scoped authorization, material changes need human approval, and the first release has quality, latency, and monthly cost targets. Regional workflows are not yet fully documented. Which proposal is the strongest starting point?<\/p>",
    "options": {
      "A": "<p>Document regional assumptions during a broad pilot, ground policy answers, use one shared CRM role for proposed updates, require weekly human review, and gate the release on adoption, latency, and cost.<\/p>",
      "B": "<p>Document regional policies, ground answers in approved content, use periodic CRM exports for updates, let Claude commit non-material changes, and gate the release on quality, latency, and cost.<\/p>",
      "C": "<p>Document regional workflows and assumptions, pilot grounded answers with narrowly scoped CRM tools, enforce authorization and material-change approval outside Claude, and expand scope only after quality, latency, and cost gates pass.<\/p>",
      "D": "<p>Document regional workflows, keep all CRM changes manual, answer from approved static policy files, and expand after answer-accuracy and latency gates pass within the monthly budget.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Yêu cầu này bao gồm quy trình khu vực chưa rõ, công việc tri thức cần căn cứ, thao tác trên hệ thống trực tiếp, phân quyền, phê duyệt của con người và nhiều mục tiêu vận hành. Phương án tốt nhất ghi rõ các giả định, quản lý công cụ và phê duyệt ở ngoài Claude, đồng thời chỉ mở rộng khi có bằng chứng. Các lựa chọn khác cấp quyền quá rộng, dùng dữ liệu cũ, đánh giá quá muộn hoặc thiếu hỗ trợ cập nhật trạng thái hiện tại.<\/p>"
  },
  {
    "id": "MOCK-011",
    "set": 1,
    "number": 11,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A warranty-intake service receives a customer&#39;s narrative and device serial number. Coverage must come from the current warranty system, the case platform requires validated JSON for the next step, and the team wants resolved-case outcomes to improve future releases. Which end-to-end architecture best meets these requirements?<\/p>",
    "options": {
      "A": "<p>Validate the intake; retrieve current coverage through an application-executed client tool; produce and validate case-schema JSON; and send reviewed coverage and routing outcomes to task-specific evaluations.<\/p>",
      "B": "<p>Validate serial format, use a nightly coverage snapshot, produce and validate case-schema JSON, archive versioned traces, and evaluate reviewed routing outcomes without a live coverage lookup.<\/p>",
      "C": "<p>Validate the intake and fetch live coverage, but publish a free-text route through a parser and evaluate only cases that customers reopen.<\/p>",
      "D": "<p>Validate the intake, request live coverage, treat the tool_use block as the coverage result, publish schema-valid routing JSON, and track handling time.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Kiến trúc đầy đủ phải nối liền mọi ranh giới: đầu vào được kiểm tra, dữ liệu phạm vi bảo hiểm hiện tại được trả về đúng hợp đồng công cụ phía máy khách, đầu ra đúng schema và được ứng dụng xác thực, cùng kết quả thực tế đã được đánh giá để bổ sung vào bộ kiểm thử. Các lựa chọn khác phụ thuộc vào dữ liệu cũ, hợp đồng đầu ra yếu, nhầm yêu cầu gọi công cụ với kết quả hoặc thiếu vòng phản hồi.<\/p>"
  },
  {
    "id": "MOCK-012",
    "set": 1,
    "number": 12,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A store-replenishment assistant interprets manager notes and may call an internal ordering API. The API has side effects, transient failures occur, and staff must not be told that stock was ordered until the system confirms it. Which processing and output design is best?<\/p>",
    "options": {
      "A": "<p>Validate notes, have an authorized worker submit the order, notify staff when submission starts, and reconcile rejected orders from the inventory system afterward.<\/p>",
      "B": "<p>Define a client tool and authorize retries, but persist its tool_use request as a confirmed order before the ordering API returns.<\/p>",
      "C": "<p>Let the application execute the client tool and notify only after success, preserve confirmed orders for review, but keep tool errors outside the Claude loop for staff to resolve manually.<\/p>",
      "D": "<p>Define a client tool; have the application authorize and execute it, return success or error as tool_result, handle the next stop explicitly, and notify only after confirmation.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Với client tool, Claude chỉ yêu cầu thao tác; ứng dụng mới chịu trách nhiệm cấp quyền, thực thi và trả kết quả. Kiến trúc phải phân biệt yêu cầu với thành công đã được xác nhận, đưa lỗi trở lại vòng xử lý và chỉ thông báo cho người dùng sau khi kiểm chứng tác động. Các thiết kế khác thông báo hoặc lưu trạng thái quá sớm, hiểu sai `tool_use` hay không xử lý tiếp lỗi trong vòng lặp.<\/p>"
  },
  {
    "id": "MOCK-013",
    "set": 1,
    "number": 13,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A maintenance-recommendation service performs well on its original evaluation set, but production reviews show repeated misses on rare fault codes. Which TWO additions best close the end-to-end feedback loop without treating unverified edits as ground truth? Choose 2.<\/p>",
    "options": {
      "A": "<p>Record the input, relevant tool or retrieval evidence, output, version, and reviewed technician disposition; curate verified failures, including rare codes, into the evaluation set.<\/p>",
      "B": "<p>Define task-specific gates for recommendation accuracy, escalation rate, and latency, and rerun normal and edge-case evaluations before releasing changes.<\/p>",
      "C": "<p>Copy every technician edit into the system prompt each night and treat it as a correct label unless another technician objects.<\/p>",
      "D": "<p>Add an autonomous critic to every production request and ship whenever the critic agrees with the first response.<\/p>",
      "E": "<p>Optimize token cost against the original evaluation set and assume rare-code accuracy will improve with a cheaper prompt.<\/p>"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "<p>Một vòng phản hồi tốt cần cả bằng chứng thực tế có thể truy nguyên và tiêu chí phát hành có thể kiểm thử. Trace có phiên bản cùng kết luận đã được rà soát cho biết lỗi nằm ở đâu; các ca hiếm được tuyển chọn và bộ tiêu chí nhiều chiều cho biết phiên bản mới có tăng độ chính xác mà không làm mức chuyển cấp hoặc độ trễ vượt giới hạn hay không. Chỉnh sửa thô, sự đồng thuận của critic hoặc chỉ tối ưu chi phí không đủ làm bằng chứng.<\/p>"
  },
  {
    "id": "MOCK-014",
    "set": 1,
    "number": 14,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A logistics platform needs Claude to return parcel-classification JSON. The downstream service requires fixed fields and types, while valid route codes and maximum weights differ by tenant configuration. Which output layer is most robust?<\/p>",
    "options": {
      "A": "<p>Use output_config.format for fixed fields, publish schema-valid records without checking tenant route or weight rules, and evaluate parsing success.<\/p>",
      "B": "<p>Use output_config.format for fixed fields, validate tenant-specific route and weight rules in the application, and evaluate both parsing and routing accuracy.<\/p>",
      "C": "<p>Use strict tool input as the parcel record, validate its JSON shape in the application, and publish it without checking tenant-specific rules.<\/p>",
      "D": "<p>Use structured output and tenant-rule validation, but treat every accepted record as factually correct and evaluate only parse success.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Structured output phù hợp với hợp đồng JSON ổn định ở hệ thống phía sau, nhưng cấu hình riêng của từng khách hàng vẫn phải do ứng dụng quản lý. Ứng dụng cần kiểm tra các quy tắc động trước khi xuất bản; lớp phản hồi phải đo độ chính xác của việc định tuyến chứ không chỉ kiểm tra JSON có parse được hay không. Cấu trúc hợp lệ không đồng nghĩa với nội dung đúng sự thật.<\/p>"
  },
  {
    "id": "MOCK-015",
    "set": 1,
    "number": 15,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A factory maintenance assistant receives a technician note and a provenance-bearing sensor snapshot assembled by the data platform. Stale or missing readings require clarification, every work order requires technician approval, and the service is judged on false urgent recommendations and latency. Which architecture best connects the stages?<\/p>",
    "options": {
      "A": "<p>Validate snapshot provenance, let Claude estimate missing readings, create a structured draft for approval, route low-confidence drafts to a second technician, and evaluate urgency errors and latency.<\/p>",
      "B": "<p>Validate snapshot freshness, create a structured draft, automatically open high-confidence urgent orders, and ask technicians to reverse errors before evaluation.<\/p>",
      "C": "<p>Assemble the note and current snapshot, route stale or missing readings to clarification, create a structured draft, require approval, and evaluate urgency errors and latency.<\/p>",
      "D": "<p>Validate snapshot freshness, route incomplete inputs to manual review, create a free-text draft for approval, and evaluate only median response time.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Lớp đầu vào phải giữ thông tin nguồn gốc và quyết định về độ mới của dữ liệu do nền tảng dữ liệu quản lý; không được yêu cầu Claude tự đoán giá trị còn thiếu. Khi bằng chứng chưa đủ, lớp xử lý phải yêu cầu làm rõ. Đầu ra vẫn cần có cấu trúc, được kỹ thuật viên phê duyệt và được đánh giá cả về cảnh báo sai lẫn độ trễ.<\/p>"
  },
  {
    "id": "MOCK-016",
    "set": 1,
    "number": 16,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A media network coordinates studio and equipment reservations through client tools. Changes must be authorized and idempotent, tool failures must not become confirmations, the final production plan has a fixed schema, and production failures must improve later releases. Which THREE requirements belong in the design? Choose 3.<\/p>",
    "options": {
      "A": "<p>Continue while stop_reason is tool_use, execute each requested client tool, return its matching tool_result, and explicitly handle every other stop reason.<\/p>",
      "B": "<p>Enforce authorization and idempotency, but show a booking as confirmed when Claude emits tool_use while the application completes the request asynchronously.<\/p>",
      "C": "<p>Enforce authorization and idempotency before each change, then return either the confirmed reservation or an explicit execution error to Claude.<\/p>",
      "D": "<p>Drive the tool loop and validate the final plan schema, but publish a plan without checking its reservations against the latest returned availability.<\/p>",
      "E": "<p>Validate the final schema and reservation rules, then curate sanitized traces with confirmed outcomes into representative edge-case evaluations.<\/p>",
      "F": "<p>Bound retries and escalate failures, but resume the previously approved plan after recovery without retrieving availability again.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "<p>Thiết kế đầu-cuối cần có vòng lặp client tool, cơ chế phân quyền và chống thực thi trùng do ứng dụng quản lý, kết quả hoặc lỗi rõ ràng, cùng lớp xác thực cuối dựa trên kết quả đã được xác nhận. Các lựa chọn khác xác nhận quá sớm, bỏ qua kiểm tra nghiệp vụ hiện tại hoặc tiếp tục bằng trạng thái cũ sau khi khôi phục.<\/p>"
  },
  {
    "id": "MOCK-017",
    "set": 1,
    "number": 17,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>Editors create a weekly digest from a fixed set of approved documents. The service has no external data lookup or side effects, needs a predictable JSON layout, and receives monthly factual-accuracy decisions from editors. Which end-to-end design is the best starting point?<\/p>",
    "options": {
      "A": "<p>Send approved content in a bounded request, use structured output for the digest schema, validate it in the application, and evaluate sampled editor decisions.<\/p>",
      "B": "<p>Use an autonomous agent with web and file tools, validate its JSON, and evaluate editor decisions, even though newly found sources are outside the fixed approved set.<\/p>",
      "C": "<p>Summarize each document in separate calls, aggregate into validated JSON, and evaluate fluency without checking factual alignment to the approved sources.<\/p>",
      "D": "<p>Encode the digest through a strict client-tool schema, validate the shape, and publish it without connecting editor decisions to evaluations.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Nội dung đã được phê duyệt và tác vụ không cần tác động ra bên ngoài hay tra cứu thêm, vì vậy một yêu cầu giới hạn là phương án đơn giản và đủ dùng. Structured output tạo hợp đồng cho hệ thống sau; ứng dụng kiểm tra dữ liệu trước khi tích hợp; các quyết định của biên tập viên được lấy mẫu để tạo vòng phản hồi về độ chính xác. Các lựa chọn khác thêm công cụ không cần thiết hoặc không đánh giá độ trung thực của nội dung.<\/p>"
  },
  {
    "id": "MOCK-018",
    "set": 1,
    "number": 18,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An enterprise entitlement assistant interprets access requests, must read current roles and contracts, and can propose changes. Privileged changes require manager approval; the identity platform is the only system allowed to execute updates; every result must be auditable and parseable. Which architecture is best?<\/p>",
    "options": {
      "A": "<p>Retrieve current state, generate a structured proposal, obtain manager approval, write the entitlement into the assistant&#39;s own store, then synchronize it to the identity platform and read back the result for audit.<\/p>",
      "B": "<p>Retrieve current state with read-only tools, generate a structured proposal, enforce scoped approval, let the identity platform execute, then read back state and persist request, approval, result, and reconciliation.<\/p>",
      "C": "<p>Generate from cached state, obtain manager approval, retrieve current state immediately before execution, and apply the original proposal without renewed review when the state differs.<\/p>",
      "D": "<p>Retrieve current state, create a structured proposal, enforce scoped approval, execute through the identity platform, and store the request and approval without reconciling the resulting state.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Quy trình cấp quyền cần lấy trạng thái hiện tại từ nguồn chính thức, tạo đề xuất có cấu trúc, xin phê duyệt trước khi nền tảng danh tính thực thi và đối chiếu lại sau khi ghi. Lưu yêu cầu, quyết định phê duyệt, kết quả thực thi và trạng thái đọc lại giúp toàn bộ quá trình có thể kiểm toán. Các phương án khác cập nhật ngoài hệ thống thực thi duy nhất, dùng lại phê duyệt sau khi trạng thái đã đổi hoặc không chứng minh được kết quả thực tế.<\/p>"
  },
  {
    "id": "MOCK-019",
    "set": 1,
    "number": 19,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A document-extraction service produces schema-valid JSON, but corrections to amounts and effective dates are not linked to the source input or output version. The team cannot tell whether releases improve the full pipeline. Which TWO additions best connect the output layer to a reliable feedback layer? Choose 2.<\/p>",
    "options": {
      "A": "<p>Have the application store a linked trace containing the input reference, model and output version, extracted fields, field-validation results, and verified corrections.<\/p>",
      "B": "<p>Curate those traces into representative edge-case evaluations and gate releases on field accuracy, correction rate, and operational latency.<\/p>",
      "C": "<p>Track field accuracy and correction totals only as monthly aggregates, without retaining which input and output version produced each error.<\/p>",
      "D": "<p>Append every customer correction to future prompts as ground truth without verification or linkage to the producing version.<\/p>",
      "E": "<p>Rerun JSON schema validation on corrected records and use the pass rate as evidence that semantic extraction improved.<\/p>"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "<p>Lớp đầu ra chỉ trở thành phản hồi hữu ích khi bản sửa đã xác minh có thể truy ngược về đầu vào nguồn và đúng phiên bản đã sinh. Những trace này cần được tuyển chọn thành các trường hợp đại diện rồi đánh giá bằng cả tiêu chí chất lượng ngữ nghĩa và vận hành. Chỉ đếm tổng, tự sửa prompt khi chưa xác minh hoặc lặp lại kiểm tra schema không cho biết khả năng trích xuất có tốt lên hay không.<\/p>"
  },
  {
    "id": "MOCK-020",
    "set": 1,
    "number": 20,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An incident-response assistant reads current ownership and runbooks through client tools and may execute a destructive action only after on-call approval. A tool outage can make state and prior approval stale; recovery behavior and post-incident learning are required. Which design is best?<\/p>",
    "options": {
      "A": "<p>Produce validated JSON from current tools and obtain approval, but after an outage resume the approved action against cached state and record the eventual result.<\/p>",
      "B": "<p>Pause on an outage and refetch current state after recovery, but execute a changed remediation under the approval granted for the earlier proposal.<\/p>",
      "C": "<p>Stop safely on the first tool failure, preserve the case and audit record for responders to restart manually, and report the outage, but keep the failure outside subsequent evaluation cases.<\/p>",
      "D": "<p>Pause and escalate without executing; after recovery refetch state, regenerate any changed proposal, require fresh approval, execute through the application, and add the verified outage outcome to evaluations.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Quy trình khôi phục an toàn không được dùng lại trạng thái hay phê duyệt có thể đã lỗi thời sau sự cố. Ứng dụng phải tạm dừng và chuyển cấp, lấy lại trạng thái mới nhất, tạo lại đề xuất nếu có thay đổi và xin phê duyệt mới trước thao tác phá huỷ. Ghi nhận kết quả sự cố đã xác minh giúp hoàn tất vòng học hỏi sau sự cố.<\/p>"
  },
  {
    "id": "MOCK-021",
    "set": 1,
    "number": 21,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A compatibility service processes third-party release notes. It must first extract package names and version ranges, the application must reject records with missing or invalid version syntax, and only validated data may enter a second call that assigns a migration-impact rationale. The stages are fixed, auditability matters, and sequential latency is acceptable. Which pattern is the best fit?<\/p>",
    "options": {
      "A": "<p>Use one augmented LLM call that always returns extracted dependencies and an impact rationale, then have the application inspect version syntax afterward.<\/p>",
      "B": "<p>Use an autonomous agent that decides which extraction, validation, and assessment stages to run for each release note.<\/p>",
      "C": "<p>Use prompt chaining: dependency extraction, a programmatic version-syntax gate, then impact assessment from the accepted record.<\/p>",
      "D": "<p>Run dependency extraction and impact assessment in parallel, then compare their outputs after both finish.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Chỉ được đánh giá tác động phía sau sau khi phiên bản trích xuất vượt qua kiểm tra của ứng dụng. Prompt chaining giữ đúng quan hệ phụ thuộc này và cho thấy rõ điểm bị từ chối. Gộp chung hoặc chạy song song sẽ đánh giá tác động quá sớm; dùng agent lại tạo thêm quyền điều phối động cho một quy trình vốn đã biết trước các bước.<\/p>"
  },
  {
    "id": "MOCK-022",
    "set": 1,
    "number": 22,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A research archive ingests microscopy images, audio interviews, and tabular sensor files. Modality detection is reliable for most inputs, each modality needs different preprocessing and prompts, and unknown or hybrid inputs must not enter an incompatible pipeline. Which TWO design choices best fit?<\/p>",
    "options": {
      "A": "<p>Detect the modality, then route high-confidence inputs to the corresponding specialized processing path.<\/p>",
      "B": "<p>Let an autonomous agent invent a new modality and processing sequence separately for every file.<\/p>",
      "C": "<p>Quarantine low-confidence or hybrid inputs for explicit fallback handling before any specialized path runs.<\/p>",
      "D": "<p>Run every modality pipeline for each file and retain whichever output contains the most extracted fields.<\/p>"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "<p>Routing phù hợp vì từng loại dữ liệu đầu vào có thể nhận diện sẽ cần một quy trình chuyên biệt khác nhau. Tệp có độ tin cậy cao được đưa vào pipeline tương ứng; tệp không rõ hoặc kết hợp nhiều loại phải có nhánh dự phòng rõ ràng. Tự tạo đường xử lý hoặc chọn kết quả theo kích thước đầu ra không chứng minh được tính tương thích.<\/p>"
  },
  {
    "id": "MOCK-023",
    "set": 1,
    "number": 23,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An internal policy assistant must answer from the latest employee handbook, cite the supplied passages, return one read-only response under a tight latency target, and perform no follow-up actions. Which architecture is the best starting point?<\/p>",
    "options": {
      "A": "<p>Use a fixed prompt chain that drafts first, retrieves handbook passages second, and attaches citations last.<\/p>",
      "B": "<p>Use an autonomous search agent that continues retrieving until it decides it has enough evidence, without an iteration limit.<\/p>",
      "C": "<p>Use a routing workflow that assigns each question to a separate policy-writing agent.<\/p>",
      "D": "<p>Use one augmented LLM call supplied with retrieved current handbook passages and explicit citation instructions.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Tác vụ cần ngữ cảnh nội bộ mới nhất nhưng chỉ tạo một phản hồi giới hạn và không có vòng hành động. Vì vậy, augmented LLM có retrieval là mẫu kiến trúc đơn giản và đủ dùng nhất. Các lựa chọn khác truy xuất quá muộn, thêm quyền tự chủ không giới hạn hoặc thêm routing dù không có các nhóm đầu vào riêng biệt.<\/p>"
  },
  {
    "id": "MOCK-024",
    "set": 1,
    "number": 24,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A portfolio review must assess financial exposure, data-handling risk, and operational readiness from the same proposal. The three assessments do not depend on one another, all must finish within a strict latency target, and the application can combine structured findings. Which pattern is the best fit?<\/p>",
    "options": {
      "A": "<p>Run three focused reviews concurrently and aggregate their structured findings into one decision packet.<\/p>",
      "B": "<p>Chain the three reviews so each assessment receives and extends the preceding assessment.<\/p>",
      "C": "<p>Route each proposal to only one of the three review specialties based on its dominant risk.<\/p>",
      "D": "<p>Let an autonomous agent decide which review dimensions to perform and stop when it considers coverage sufficient.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Đây là dạng parallel sectioning: các phần phân tích bắt buộc đã biết trước, độc lập với nhau và có thể được tổng hợp bằng chương trình. Chaining làm chậm mục tiêu độ trễ; routing có thể bỏ sót chiều phân tích bắt buộc; còn agent tự chủ khiến phạm vi cần bao phủ trở nên khó chắc chắn.<\/p>"
  },
  {
    "id": "MOCK-025",
    "set": 1,
    "number": 25,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A publisher investigates royalty-allocation discrepancies. The useful sequence of contract clauses, usage-ledger entries, and payment records cannot be predicted, and each query must follow fresh evidence. Tools are read-only; corrections require finance approval and application execution, and missing evidence or a query limit must stop or escalate the work. Which architecture is best?<\/p>",
    "options": {
      "A": "<p>Use a fixed chain that always reads contracts, then usage ledgers, then payments, and stops if any source is unavailable.<\/p>",
      "B": "<p>Use an orchestrator that assigns the same three analyses to workers once, then synthesizes their reports without further evidence queries.<\/p>",
      "C": "<p>Use an agent that follows fresh evidence and edits the royalty ledger whenever its confidence exceeds a prompt-defined threshold.<\/p>",
      "D": "<p>Use a bounded read-only agent guided by fresh evidence, with explicit stop or escalation limits and finance-approved corrections executed by the application.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Số lần tra cứu và chuỗi bằng chứng thay đổi theo từng sai lệch, nên agent điều hướng theo kết quả phù hợp hơn một luồng cố định. Quyền tự chủ vẫn phải có giới hạn: thiếu bằng chứng hoặc vượt số truy vấn thì dừng hay chuyển cấp; mọi điều chỉnh tài chính phải chờ phê duyệt. Các phương án khác làm mất tính thích ứng, khả năng tiếp tục thu thập bằng chứng hoặc ranh giới trách nhiệm.<\/p>"
  },
  {
    "id": "MOCK-026",
    "set": 1,
    "number": 26,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A program drafts data-migration cutover plans for varied legacy systems. A stable rubric measures rollback completeness, owner coverage, and downtime limits; targeted critique has improved drafts in trials. Plans must ship by a deadline, exhausted refinement must be visible, and no model may approve or execute a cutover. Which THREE design choices best fit?<\/p>",
    "options": {
      "A": "<p>Separate generation from evaluation and require the evaluator to return feedback tied to the stable rubric.<\/p>",
      "B": "<p>Allow the evaluator to redefine passing criteria after each draft based on the prose style it prefers.<\/p>",
      "C": "<p>Revise until rubric thresholds are met or a maximum iteration count is reached, then expose remaining gaps.<\/p>",
      "D": "<p>Replace the evaluator with an autonomous agent that may add tools and execute migration steps while refining the plan.<\/p>",
      "E": "<p>Keep release outside the refinement loop so a human or application approves the plan after reviewing rubric evidence.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "<p>Khi tiêu chí đã rõ và việc phản biện đã chứng minh có ích, mô hình evaluator–optimizer là phù hợp. Phản hồi phải gắn với rubric, có điều kiện kết thúc đo được, giới hạn số vòng, hiển thị vấn đề chưa giải quyết và vẫn cần phê duyệt bên ngoài. Thay đổi tiêu chí giữa chừng làm mất khả năng đo lường; dùng agent có quyền thực thi sẽ tạo thêm quyền tự chủ không cần thiết.<\/p>"
  },
  {
    "id": "MOCK-027",
    "set": 1,
    "number": 27,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A site-decommissioning assessment receives different equipment lists, contracts, and environmental records for every site. The required specialist analyses cannot be known until the packet is inspected; once identified, they can run independently, and a unified recommendation is needed. Which pattern is the best fit?<\/p>",
    "options": {
      "A": "<p>Predefine workers for every possible specialty and run all of them for every site packet.<\/p>",
      "B": "<p>Use a prompt chain that always performs contract, equipment, and environmental review in the same order.<\/p>",
      "C": "<p>Use an orchestrator to identify packet-specific subanalyses, delegate them to focused workers, and synthesize their findings.<\/p>",
      "D": "<p>Use an autonomous agent that both commissions analyses and approves the final decommissioning action.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Điểm quan trọng là các tác vụ con thay đổi theo từng đầu vào nên không thể xác định sẵn. Orchestrator có thể quyết định cần phân tích gì, giao cho các worker thực hiện rồi tổng hợp thành khuyến nghị. Worker hoặc chuỗi bước cố định đều giả định trước tác vụ; trao quyền phê duyệt cuối cho hệ thống lại vượt quá thẩm quyền được phép.<\/p>"
  },
  {
    "id": "MOCK-028",
    "set": 1,
    "number": 28,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An archive must decide whether two damaged catalog records describe the same artifact. A single model judgment is unstable on rare ambiguous pairs, several independent attempts are affordable, and low agreement must trigger human review. Which pattern is the best fit?<\/p>",
    "options": {
      "A": "<p>Route each record pair to one specialist prompt based on the collection that supplied the older record.<\/p>",
      "B": "<p>Run several independent assessments, aggregate them with a defined agreement threshold, and abstain to human review when agreement is low.<\/p>",
      "C": "<p>Chain a first judgment into later calls that are instructed to justify and refine that same conclusion.<\/p>",
      "D": "<p>Let an agent repeat the assessment until it produces the same answer twice, then treat repetition as consensus.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Tình huống này cần dạng voting của parallelization: nhiều lần đánh giá độc lập, quy tắc tổng hợp rõ ràng và quyền không kết luận khi độ tin cậy chưa đủ. Routing vẫn chỉ tạo một phán đoán; chaining làm giảm tính độc lập; lặp nhiều lần nhưng không có ngưỡng đồng thuận cụ thể không tạo ra kết quả đáng tin cậy.<\/p>"
  },
  {
    "id": "MOCK-029",
    "set": 1,
    "number": 29,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A grant-application acknowledgment process always validates applicant, program, and deadline fields, looks up requirements in an approved program matrix, generates applicant-specific next-step instructions, and waits for a program officer&#39;s approval before delivery. The path is stable, auditability is required, measured quality meets target, and extra latency has no demonstrated benefit. Which architecture is best?<\/p>",
    "options": {
      "A": "<p>Use an autonomous agent that chooses which field checks, program rules, and processing order to apply to each application.<\/p>",
      "B": "<p>Use orchestrator-workers so a model invents and delegates a new set of acknowledgment checks for every application.<\/p>",
      "C": "<p>Add an evaluator-optimizer loop that rewrites next-step instructions until an evaluator prefers the prose, without a measured release threshold.<\/p>",
      "D": "<p>Use a predefined workflow with deterministic field validation and program lookup, one bounded instruction-generation call, and an explicit officer-approval gate.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Workflow định trước phù hợp vì các bước kiểm tra, tra cứu chương trình, tạo nội dung và phê duyệt đều đã biết. Kiểm tra xác định giúp quy trình dễ kiểm toán, lần gọi LLM có giới hạn dùng để cá nhân hóa bước tiếp theo, còn cán bộ chương trình vẫn phê duyệt. Phân rã động, quyền tự chủ hoặc viết lại không được đo lường chỉ làm tăng độ phức tạp.<\/p>"
  },
  {
    "id": "MOCK-030",
    "set": 1,
    "number": 30,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A hospital operations team reviews discharge readiness across six wards. Each ward has high-volume clinical notes, medication events, and care-coordination records that are irrelevant to other wards. A single agent loses focus when all records accumulate, while the operations lead needs one prioritized barrier-resolution queue. Which architecture best addresses the demonstrated constraint?<\/p>",
    "options": {
      "A": "<p>Assign each ward to a context-isolated review agent with a common barrier schema, then have a coordinator prioritize the hospital-wide resolution queue.<\/p>",
      "B": "<p>Keep one agent, retrieve all ward records into one conversation, and ask it to assess every patient before prioritizing barriers.<\/p>",
      "C": "<p>Create sequential extraction, clinical-review, coordination-review, and prioritization agents that pass all six wards at every handoff.<\/p>",
      "D": "<p>Launch several agents over the undivided hospital dataset and adopt the first resolution queue that finishes after a format check.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Vấn đề chính là ngữ cảnh bị nhiễu khi gom nhiều hồ sơ khoa có dung lượng lớn nhưng độc lập. Mỗi agent theo khoa có thể giữ đúng ngữ cảnh để xác định rào cản xuất viện đã được ghi nhận và trả về một gói dữ liệu giới hạn. Coordinator sau đó so sánh mức khẩn cấp, quan hệ phụ thuộc và công sức vận hành giữa các khoa.<\/p>"
  },
  {
    "id": "MOCK-031",
    "set": 1,
    "number": 31,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A retailer generates accessibility descriptions for product images through a stable pipeline: load approved product attributes, make one bounded Claude call, reject prohibited claims with deterministic rules, enforce length and format, and publish. Evaluation shows the pipeline meets its quality target. Which design is most appropriate?<\/p>",
    "options": {
      "A": "<p>Create attribute, vision, drafting, policy, and publishing agents that negotiate the processing order for every product.<\/p>",
      "B": "<p>Keep the predefined pipeline and deterministic gates; add agents only if evaluation identifies a constraint the workflow cannot meet.<\/p>",
      "C": "<p>Replace the deterministic claim and format checks with several agents, publishing whenever a simple majority accepts the description.<\/p>",
      "D": "<p>Use an autonomous coordinator that may omit attribute loading or deterministic checks when it predicts they will add latency.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Kiến trúc đa agent không mặc nhiên tốt hơn. Pipeline mô tả sản phẩm có đường đi rõ ràng, kiểm soát xuất bản bằng quy tắc và một lần sinh nội dung giới hạn vốn đã đạt mục tiêu chất lượng. Workflow định trước vì vậy dễ dự đoán và bảo trì hơn. Chỉ nên thêm agent khi đánh giá chỉ ra hạn chế cụ thể mà thiết kế đơn giản không giải quyết được.<\/p>"
  },
  {
    "id": "MOCK-032",
    "set": 1,
    "number": 32,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A due-diligence service must investigate ownership, litigation, cybersecurity, and market evidence in parallel. Each area has distinct sources, and the final report must state coverage gaps and preserve citations. Which TWO design choices best support reliable multi-agent orchestration?<\/p>",
    "options": {
      "A": "<p>Give each evidence area a worker with bounded context, a clear output schema, and area-specific tools.<\/p>",
      "B": "<p>Let all workers edit one shared conclusion continuously without ownership boundaries or conflict handling.<\/p>",
      "C": "<p>Split planning, searching, citation capture, and writing into separate sequential agents for every evidence area.<\/p>",
      "D": "<p>Have the coordinator check required areas, reconcile conflicts, and label missing evidence before synthesis.<\/p>",
      "E": "<p>Pass every worker&#39;s full source corpus and entire reasoning transcript to every other worker before they begin.<\/p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "<p>Nên phân rã theo từng vùng bằng chứng vì mỗi vùng có nguồn riêng và có thể điều tra độc lập. Mỗi worker cần ngữ cảnh, công cụ và hợp đồng đầu ra tập trung. Coordinator phải kiểm tra độ bao phủ, xử lý mâu thuẫn, giữ trích dẫn và nêu rõ khoảng trống. Dùng kết luận chung có thể bị sửa, chuyển giao tuần tự theo vai trò hoặc chia sẻ toàn bộ transcript sẽ làm giảm tính cô lập và khả năng truy nguồn.<\/p>"
  },
  {
    "id": "MOCK-033",
    "set": 1,
    "number": 33,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An agricultural cooperative assistant controls irrigation zones, reconciles cold-storage inventory, and validates supplier invoices. A single agent now sees many similarly named actions and increasingly invokes the wrong system. The domains have clean ownership boundaries, but drought-response requests can require one coordinated plan. What is the best redesign?<\/p>",
    "options": {
      "A": "<p>Keep every action on one agent and expand descriptions, while requiring the agent to reconsider its first system choice.<\/p>",
      "B": "<p>Give three agents every cooperative action, run them in parallel, and use whichever complete drought plan arrives first.<\/p>",
      "C": "<p>Create irrigation, storage, and invoice specialists with focused actions, and use a coordinator with explicit handoff contracts to combine drought-response work.<\/p>",
      "D": "<p>Remove system actions from the assistant and generate instructions for staff to perform every irrigation, storage, and invoice change manually.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Lỗi đã đo được xuất phát từ việc nhiều thao tác tương tự nằm trong các hệ thống hợp tác nhưng tách biệt. Agent chuyên môn giúp thu hẹp tập hành động và giữ hướng dẫn đúng với trách nhiệm tưới tiêu, lưu trữ hoặc tài chính. Coordinator định tuyến yêu cầu một lĩnh vực và kết hợp hệ quả cho kế hoạch hạn hán. Sao chép mọi quyền cho mọi agent không giải quyết được ranh giới trách nhiệm.<\/p>"
  },
  {
    "id": "MOCK-034",
    "set": 1,
    "number": 34,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An agent produces an emergency-evacuation plan from facility records. An independent verifier is required, but earlier verifiers sampled only the busiest floor and approved plans that omitted remote zones or violated blocked-route constraints. Which orchestration design best addresses this failure?<\/p>",
    "options": {
      "A": "<p>Give a verifier the plan, explicit criteria, and authoritative facility records; require structured evidence for every zone and prohibited route before release.<\/p>",
      "B": "<p>Give an independent verifier the plan and criteria, but permit it to validate the highest-occupancy zones and extrapolate the result to the rest.<\/p>",
      "C": "<p>Require every zone to receive structured pass/fail evidence, but let the verifier derive all reference facts from the generated plan itself.<\/p>",
      "D": "<p>Assign one verifier route reachability and another occupancy and assistance coverage, but release as soon as either complementary verifier passes.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Xác minh là ranh giới đa agent hợp lý vì verifier có thể đánh giá kế hoạch hoàn chỉnh theo tiêu chí rõ ràng mà không cần kế thừa quá trình suy nghĩ của generator. Hợp đồng phải yêu cầu hồ sơ chính thức, đủ mọi khu vực, các trường hợp tuyến bị cấm và bằng chứng có cấu trúc trước khi phát hành. Lấy mẫu hoặc phát hành trước khi xác minh xong vẫn để lại khoảng trống quan trọng.<\/p>"
  },
  {
    "id": "MOCK-035",
    "set": 1,
    "number": 35,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>Two agents collect technical and commercial evidence for a decision. The commercial worker sometimes times out, and the final answer must not appear complete when required evidence is missing. Which TWO controls address that risk?<\/p>",
    "options": {
      "A": "<p>Retry a timed-out worker indefinitely before the coordinator may return any result.<\/p>",
      "B": "<p>Set a timeout for each worker and return an explicit failure marker to the coordinator.<\/p>",
      "C": "<p>Let the coordinator invent a commercial conclusion when the worker times out and label the synthesis complete.<\/p>",
      "D": "<p>Record which workers ran, but omit failed areas from the final answer to keep it concise.<\/p>",
      "E": "<p>Require both evidence areas and label the missing area when one worker fails instead of presenting a complete synthesis.<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "<p>Lựa chọn B giới hạn worker bị lỗi và công khai trạng thái của nó. Lựa chọn E ngăn coordinator trình bày bản tổng hợp hai khu vực là hoàn chỉnh khi còn thiếu một kết quả. Thử lại vô hạn, tự tạo bằng chứng hoặc âm thầm bỏ qua đều không đáp ứng ranh giới an toàn này.<\/p>"
  },
  {
    "id": "MOCK-036",
    "set": 1,
    "number": 36,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A consulting firm must assemble a merger-transition dossier with a labor-obligation annex and a facility-hazard annex. The source collections are large and disjoint, loading both into one agent has reduced accuracy, and a fixed dossier manifest defines identifiers and cross-references. Both annexes are due in parallel. Earlier researcher→writer→checker handoffs lost context. Which decomposition is best?<\/p>",
    "options": {
      "A": "<p>Retain researcher, writer, and checker agents for both annexes, but require longer summaries at every phase boundary.<\/p>",
      "B": "<p>Assign one agent each annex from source analysis through validation, use the manifest as the interface, and verify cross-references when the coordinator assembles the dossier.<\/p>",
      "C": "<p>Let both agents edit both annexes and the manifest concurrently, then resolve identifier and cross-reference conflicts after drafting.<\/p>",
      "D": "<p>Keep one agent, retrieve one annex at a time, and compact between annexes to avoid coordination overhead despite the measured accuracy loss and parallel deadline.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Phân rã hiệu quả phải theo ranh giới ngữ cảnh, không phải chức danh. Hai phụ lục dùng nguồn tách biệt và manifest cố định; tình huống cũng cho thấy chất lượng giảm khi trộn ngữ cảnh và có hạn chót phù hợp chạy song song. Mỗi agent nên phụ trách trọn vẹn một phụ lục, còn coordinator kiểm tra mã manifest và tham chiếu chéo khi ghép.<\/p>"
  },
  {
    "id": "MOCK-037",
    "set": 1,
    "number": 37,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A video-captioning service delegates independent language packages to workers. After a coordinator restart, every package is currently recomputed, including work that had completed before the failure. Which coordinator-worker design best makes the fan-out resumable?<\/p>",
    "options": {
      "A": "<p>Keep completion status only in coordinator memory and reconstruct prior results from non-authoritative, best-effort worker logs after restart.<\/p>",
      "B": "<p>Serialize all language workers and assign a new task identifier after every restart so previous identifiers cannot be reused.<\/p>",
      "C": "<p>Give each language package a stable logical task ID, durably commit its completion state, and replay only tasks without committed completion after recovery.<\/p>",
      "D": "<p>After restart, rerun every language package twice and retain a delivery only when both new executions match exactly.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Fan-out có thể tiếp tục sau sự cố cần mã định danh tác vụ logic ổn định và trạng thái hoàn tất đã commit bền vững. Khi khôi phục, coordinator tái sử dụng gói đã xong và chỉ giao lại phần chưa có xác nhận hoàn tất. Theo dõi trong bộ nhớ, dùng log không bảo đảm, tạo mã mới hoặc tính lại tất cả sẽ không nhận diện và tận dụng được công việc đã hoàn thành.<\/p>"
  },
  {
    "id": "MOCK-038",
    "set": 1,
    "number": 38,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>An enterprise configures a Managed Agents service with procurement, facilities, and finance specialists. The session vault contains credentials used across the service, while each specialist has different responsibilities and systems. Which THREE configuration choices best preserve focused capabilities and predictable cross-agent handoffs?<\/p>",
    "options": {
      "A": "<p>Declare only the tools and MCP servers required by each specialist&#39;s responsibility.<\/p>",
      "B": "<p>Use the session vault for credentials and expose every connected server to every specialist, relying on prompts alone to prevent out-of-domain calls.<\/p>",
      "C": "<p>Pin specialist versions in the coordinator roster and update the coordinator deliberately when a newer agent configuration should be adopted.<\/p>",
      "D": "<p>Define bounded task payloads, but assume worker context and tool results automatically appear in the coordinator thread, so workers return no explicit result.<\/p>",
      "E": "<p>Have the coordinator send a bounded task and receive a bounded result containing only the context needed for the cross-domain request.<\/p>",
      "F": "<p>Use identical self-copies with the complete toolset and provide domain-specific task instructions per call to avoid maintaining versioned specialist configurations.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "<p>Ranh giới managed agent phải được khai báo rõ. Mỗi specialist tự khai báo tool và MCP server dù thông tin đăng nhập được cấp ở cấp phiên. Danh sách của coordinator phải cố định phiên bản agent và chỉ nhận thay đổi cấu hình có chủ đích. Việc trao đổi giữa agent cần payload tác vụ và kết quả giới hạn vì ngữ cảnh và năng lực không tự động được chia sẻ.<\/p>"
  },
  {
    "id": "MOCK-039",
    "set": 1,
    "number": 39,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A policy team has selected a predefined workflow for converting approved standards into employee instructions. First, one authoritative obligation ledger with stable identifiers must be established. Business-unit control mappings can then proceed independently, but drafting must wait until mapping coverage and conflicts are resolved. Which decomposition plan best preserves these dependencies while using safe concurrency?<\/p>",
    "options": {
      "A": "<p>Divide the source by page, have each worker create its own obligations, mappings, and instructions, then merge outputs that share a heading.<\/p>",
      "B": "<p>Start one worker per business unit before the obligation ledger is stable, let each infer its own identifiers, then reconcile missing and duplicate obligations after the instructions are drafted.<\/p>",
      "C": "<p>Keep extraction, mapping, drafting, and traceability in one unconstrained call because any dependency makes intermediate decomposition unsafe.<\/p>",
      "D": "<p>Create and validate the obligation ledger, fan out bounded unit mappings, join them through coverage and conflict gates, then draft and trace-check the instructions.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Việc phân rã phải theo đồ thị phụ thuộc, không chọn cực đoan hoàn toàn tuần tự hoặc hoàn toàn song song. Sổ nghĩa vụ đã xác thực là điều kiện chung. Sau đó có thể fan-out việc ánh xạ đơn vị kinh doanh theo cùng schema, nhưng phải có join gate kiểm tra độ bao phủ và giải quyết xung đột trước khi soạn thảo. Cuối cùng mới kiểm tra khả năng truy vết trên tài liệu đã ghép.<\/p>"
  },
  {
    "id": "MOCK-040",
    "set": 1,
    "number": 40,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A food manufacturer already uses a router for batch records from three production lines. A record header normally identifies the line reliably, but corrupted headers occur. Each line has a different schema and approved hazard checks, while downstream analytics require one normalized batch-release record. Which routing boundary is best?<\/p>",
    "options": {
      "A": "<p>Validate the header, route a confident record to its line-specific validation workflow, quarantine uncertain records, and normalize accepted outputs to the common release schema.<\/p>",
      "B": "<p>Route by anomaly severity so records with similar warning counts share a workflow even when their line schemas and hazard rules differ.<\/p>",
      "C": "<p>Send every record to all three line workflows, archive the slower results, and accept the first output whose fields can be converted to the common release schema.<\/p>",
      "D": "<p>Route confident records by line but pass each workflow&#39;s native result directly to analytics, adding normalization only after consumers report incompatibilities.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Sau khi chọn routing, cần thiết kế kỹ ranh giới phân loại, cách xử lý độ không chắc chắn và hợp đồng đầu ra chung. Dây chuyền sản xuất quyết định cả schema lẫn kiểm tra nguy cơ nên là khóa định tuyến phù hợp. Header lỗi phải được cách ly hoặc đưa cho người xem xét, không được đoán. Kết quả thành công cần được chuẩn hóa trước khi chuyển sang analytics.<\/p>"
  },
  {
    "id": "MOCK-041",
    "set": 1,
    "number": 41,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A publisher freezes a magazine-issue revision. Citation review, image-rights clearance, and print-layout preflight use different authoritative inputs and tools and can proceed independently. Publication requires every mandated review, and failure evidence must preserve the exact issue and source revisions. Which TWO decomposition choices best satisfy the publication contract?<\/p>",
    "options": {
      "A": "<p>Split each review into separate preparation, analysis, and reporting agents that hand the evolving issue context forward at every phase.<\/p>",
      "B": "<p>Give each review one worker that owns input verification through evidence capture against the same immutable issue revision and pinned source snapshots.<\/p>",
      "C": "<p>Allow a review worker to revise the shared issue when it finds a failure and let the remaining reviews continue on whichever revision they hold.<\/p>",
      "D": "<p>Run three workers on the entire issue and authorize publication when two independently report overall success.<\/p>",
      "E": "<p>Use a join barrier that records each required review&#39;s status and evidence revision, blocking publication on missing or failed results.<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "<p>Đơn vị độc lập là các lượt rà soát bắt buộc trước xuất bản, không phải các vai trò chuẩn bị, phân tích và báo cáo. Mỗi worker giữ ngữ cảnh rà soát riêng nhưng dùng cùng bản issue bất biến và nguồn chính thức đã cố định. Join barrier phải nhận đủ mọi lượt rà soát và chặn khi có kết quả thiếu hoặc lỗi. Quyết định theo đa số không đáp ứng yêu cầu phải hoàn tất tất cả.<\/p>"
  },
  {
    "id": "MOCK-042",
    "set": 1,
    "number": 42,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A publisher has selected an orchestrator for preparing a tabletop-game expansion. Playtest reports and the component manifest can reveal an unpredictable mix of rule conflicts, component-count changes, illustration-license gaps, and localization effects. Some changes have prerequisites, and every completed package must update a master release specification. Which subtask-generation contract should the orchestrator use?<\/p>",
    "options": {
      "A": "<p>Create one open-ended worker per specialty, let workers spawn any follow-up work, and have all of them edit the release specification directly.<\/p>",
      "B": "<p>Build a dependency graph of bounded artifact-centered tasks with an owner, prerequisites, success criteria, and result schema; schedule ready tasks and replan from returned evidence.<\/p>",
      "C": "<p>Always divide expansion work into discovery, design, production, and review agents, passing the complete project history through each phase regardless of the discovered issue.<\/p>",
      "D": "<p>Create one independent task for every playtest comment and mark it complete when its local note is written, even if it changes another package&#39;s prerequisite.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Orchestrator phân rã động vẫn cần hợp đồng tác vụ rõ ràng. Tác vụ xoay quanh artifact phải nêu chủ sở hữu, điều kiện tiên quyết, tiêu chí thành công và kết quả giới hạn. Đồ thị phụ thuộc giúp coordinator chỉ lên lịch phần đã sẵn sàng, cập nhật đặc tả chính và điều chỉnh tác vụ bị ảnh hưởng khi bằng chứng thay đổi.<\/p>"
  },
  {
    "id": "MOCK-043",
    "set": 1,
    "number": 43,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A hospital is redesigning a chemotherapy-day schedule. Chair capacity, nurse certification, drug preparation timing, and patient-specific sequencing constrain one another. Separate scheduling agents currently revise their own plans after every change, producing oscillation and missed dependencies. An authoritative constraint set and a complete schedule validator are available. Which redesign best addresses the failure?<\/p>",
    "options": {
      "A": "<p>Keep four specialist agents with independent plans, increase synchronization frequency until a deadline, and require each agent to republish its full resource assumptions after every proposed adjustment.<\/p>",
      "B": "<p>Freeze the first specialist plan that satisfies its local constraints, reserve its resources, and require later specialists to adapt without reopening the earlier allocation.<\/p>",
      "C": "<p>Keep the coupled scheduling decisions in one context owner using the authoritative constraints, then pass the complete schedule to an independent black-box validator before release.<\/p>",
      "D": "<p>Partition work by morning and afternoon shifts, although patients, nurses, chairs, and drug preparations can cross the boundary, and reconcile overlaps after publication.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Các biến lập lịch dùng chung trạng thái và cần liên tục suy luận qua nhiều ràng buộc; chia chúng cho nhiều chủ sở hữu sẽ gây mất phối hợp và dao động. Một chủ ngữ cảnh nên tối ưu toàn bộ kế hoạch theo tập ràng buộc chính thức. Việc xác minh hộp đen hoàn chỉnh có thể tách riêng vì verifier chỉ cần kiểm tra artifact cuối và các điều kiện cấm.<\/p>"
  },
  {
    "id": "MOCK-044",
    "set": 1,
    "number": 44,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A transit agency already uses a bounded generator-evaluator loop for disruption messages. Inputs include authoritative station closures and times, a required passenger action, and channel-specific character limits. Current failures include both invalid facts and semantically unclear actions. How should evaluation work be decomposed inside the loop?<\/p>",
    "options": {
      "A": "<p>Use one model evaluator to score facts, length, and action clarity subjectively, average those dimensions into one value, then revise whenever its overall confidence falls below a threshold.<\/p>",
      "B": "<p>Use deterministic validators for station identifiers, times, and length, then release whenever those checks pass without assessing whether the required action is understandable.<\/p>",
      "C": "<p>Let fact and clarity evaluators edit the draft concurrently, then give the generator their merged comments without criterion identifiers or conflict handling.<\/p>",
      "D": "<p>Run deterministic validators for exact constraints and a rubric-based evaluator for action clarity; return criterion-labeled defects and require the combined gate to pass within the attempt limit.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Vòng lặp nên tách đánh giá theo bản chất yêu cầu. Mã ga, thời gian và giới hạn ký tự có thể kiểm tra bằng chương trình; mức dễ hiểu của hướng dẫn hành khách cần đánh giá ngữ nghĩa theo rubric. Phản hồi gắn nhãn tiêu chí giúp generator sửa đúng lỗi; cổng đạt tổng hợp và giới hạn số lần bảo đảm quy trình kết thúc.<\/p>"
  },
  {
    "id": "MOCK-045",
    "set": 1,
    "number": 45,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A museum is moving six galleries to a temporary site. Each gallery has distinct object and handling records, but the assembled move must share a freight elevator, climate-controlled vehicles, and staging windows. Leadership also requires an independent rehearsal covering every gallery and an elevator-outage case. Which THREE decomposition choices should the architect adopt?<\/p>",
    "options": {
      "A": "<p>Give each gallery one worker that owns its inventory-to-move packet under a common handoff schema.<\/p>",
      "B": "<p>Split every gallery into cataloging, packing, and scheduling agents, transferring the full object history between roles before each decision.<\/p>",
      "C": "<p>Let gallery workers reserve shared elevators, vehicles, and staging slots directly, then reconcile collisions after loading begins.<\/p>",
      "D": "<p>Have the coordinator reconcile shared-resource capacity, inter-gallery dependencies, and staging order before issuing the assembled move plan.<\/p>",
      "E": "<p>Generate several complete move plans and select the first one that meets the move date without comparing gallery coverage or resource-failure behavior.<\/p>",
      "F": "<p>Give an independent verifier the assembled plan, authoritative constraints, all-gallery criteria, and the required elevator-outage rehearsal before approval.<\/p>"
    },
    "answer": [
      "A",
      "D",
      "F"
    ],
    "explanation": "<p>Mỗi phòng trưng bày là một ranh giới ngữ cảnh độc lập, nên một worker có thể xử lý trọn gói theo schema chung. Coordinator phải dung hòa thang máy hàng, xe kiểm soát khí hậu, khung giờ bố trí và phụ thuộc để tạo một kế hoạch khả thi. Verifier độc lập sau đó kiểm thử mọi phòng và tình huống thang máy hỏng theo ràng buộc chính thức.<\/p>"
  },
  {
    "id": "MOCK-046",
    "set": 1,
    "number": 46,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An online marketplace has selected a bounded agent to investigate suspected coordinated return fraud. New clues from transaction logs, device links, and policy records determine which inquiry is useful next. The agent may not change account state, must justify its findings, and must stop on sufficient evidence, an explicit gap, or an iteration limit. Which internal decomposition is best?<\/p>",
    "options": {
      "A": "<p>Maintain a hypothesis-evidence graph, create bounded probe tasks for unresolved claims, update the graph only from tool results, and return supported findings plus unresolved gaps at a stopping condition.<\/p>",
      "B": "<p>Run a fixed exhaustive chain that retrieves every available record for every suspected account before evaluating whether each source is relevant.<\/p>",
      "C": "<p>Assign one worker to each data tool with the full investigation transcript, ask every worker for an independent conclusion, then accept the hypothesis supported by the largest number of summaries.<\/p>",
      "D": "<p>Choose one fraud category from the first anomaly, execute only that category&#39;s checklist, and prohibit replanning when later evidence contradicts the initial route.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Sau khi chọn agent, đơn vị phân rã hữu ích là một lần thăm dò bằng chứng gắn với giả thuyết chưa được giải quyết, không phải từng công cụ hay danh sách bước cố định. Kết quả công cụ là dữ liệu thực để cập nhật đồ thị giả thuyết–bằng chứng và chọn bước thăm dò tiếp theo. Kết quả cuối phải tách điều đã chứng minh khỏi khoảng trống và dừng theo giới hạn rõ ràng.<\/p>"
  },
  {
    "id": "MOCK-047",
    "set": 1,
    "number": 47,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A retailer maintains one merchandising taxonomy for apparel, homeware, and electronics. Category teams need distinct detailed work, but they share attribute definitions, parent-child relationships, and stable term identifiers. Direct edits to the taxonomy have caused duplicate identifiers and stale relationships. Which decomposition best preserves specialist work without uncontrolled shared state?<\/p>",
    "options": {
      "A": "<p>Give every category team a private copy of the complete taxonomy and attribute catalog, allow independent finalization, and merge conflicting identifiers, definitions, and relationships immediately before quarterly publication.<\/p>",
      "B": "<p>Pass the entire taxonomy sequentially from apparel to homeware to electronics, letting each team overwrite earlier definitions when its own category model requires a change.<\/p>",
      "C": "<p>Have a taxonomy steward own the versioned term and relationship registry; delegate bounded category tasks against a named snapshot, then serialize accepted proposals and reissue stale tasks.<\/p>",
      "D": "<p>Let all category teams edit the shared taxonomy directly, but require more frequent synchronization messages and a final vote when two edits conflict.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Các nhóm danh mục có công việc chuyên môn tách biệt nhưng dùng chung mã, định nghĩa và quan hệ. Một taxonomy steward phải sở hữu registry chính thức có phiên bản. Nhóm nhận tác vụ gắn với snapshot cụ thể và trả đề xuất kèm phiên bản gốc; steward tuần tự hóa cập nhật được duyệt và cấp lại tác vụ đã cũ.<\/p>"
  },
  {
    "id": "MOCK-048",
    "set": 1,
    "number": 48,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A retailer summarizes high-volume replenishment exceptions for store planners. Most records are straightforward, but a small ambiguous subset requires stronger reasoning. The business target combines a p95 response SLA, a maximum cost per accepted summary, and a verified field-accuracy threshold. Which model architecture should the team evaluate first?<\/p>",
    "options": {
      "A": "<p>Evaluate an efficient model on actual records, accept outputs that pass the accuracy contract, and escalate only ambiguous or failed cases to a more capable model.<\/p>",
      "B": "<p>Use the most capable available model for every record, add a full reasoning review even for approved templates, and treat the resulting cost or latency as unavoidable because some cases are ambiguous.<\/p>",
      "C": "<p>Use the least expensive model for every record and lower the field-accuracy threshold until the cost ceiling is met.<\/p>",
      "D": "<p>Select a model from published benchmark rankings alone and estimate production latency and acceptance without testing the retailer&#39;s prompts and records.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Chọn mô hình phải cân bằng năng lực, tốc độ và chi phí bằng đánh giá trên dữ liệu thật của ứng dụng. Vì đa số hồ sơ đơn giản, luồng phổ biến ưu tiên hiệu quả là giả thuyết khởi đầu hợp lý chứ chưa phải kết luận. Nhóm phải kiểm thử prompt và hồ sơ thực, bảo đảm độ chính xác trường dữ liệu rồi chỉ chuyển ca khó sang mô hình mạnh hơn.<\/p>"
  },
  {
    "id": "MOCK-049",
    "set": 1,
    "number": 49,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An engineering advisory service answers repeated project questions using a large, approved standards handbook, a stable system instruction, and unchanged tool definitions. Only the project facts and question vary. Input processing dominates both latency and cost, and requests arrive in active bursts. Which prompt design best supports the stated objective?<\/p>",
    "options": {
      "A": "<p>Place project-specific facts before the handbook and cache everything through the project question so the longest possible prefix is stored.<\/p>",
      "B": "<p>Place stable tools, system instructions, and handbook content in a consistent prefix through a cache breakpoint, then append project-specific facts and the question.<\/p>",
      "C": "<p>Create a separate cache entry for every sentence in the handbook and choose sentence caches after Claude has generated the answer.<\/p>",
      "D": "<p>Cache only the short project question and resend the full stable handbook after it on every request.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Prompt caching tái sử dụng phần tiền tố hoàn toàn giống nhau. Tool, system instruction và nội dung sổ tay ổn định nên được đặt theo thứ tự nhất quán trước breakpoint; dữ liệu dự án thay đổi và câu hỏi đặt phía sau. Khi lưu lượng đến theo đợt, cache có khả năng được dùng lại nhưng vẫn phải đo cache read/write, độ trễ và chi phí.<\/p>"
  },
  {
    "id": "MOCK-050",
    "set": 1,
    "number": 50,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A design studio&#39;s monthly Claude spend increased after it added research, concept, and revision workflows. Output volume also increased, but leadership cannot tell which workflow creates accepted client work or misses its turnaround SLA. Which TWO measurement changes are prerequisites for a defensible architecture decision?<\/p>",
    "options": {
      "A": "<p>Map each workflow to a controlled workspace or internal deployment identifier, group API reports by supported workspace and configuration dimensions, and join them to that mapping.<\/p>",
      "B": "<p>Track only the organization&#39;s total monthly bill and reduce the largest prompt file whenever the bill rises.<\/p>",
      "C": "<p>Use output-token count as the acceptance metric because longer responses necessarily provide more client value.<\/p>",
      "D": "<p>Join attributed usage and cost with accepted-deliverable rate, revision burden, and SLA attainment for the same workflow period.<\/p>",
      "E": "<p>Replace every workflow with the lowest-cost model before collecting outcome baselines, then declare any spend reduction successful.<\/p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "<p>Dữ liệu sử dụng và chi phí chỉ hỗ trợ quyết định khi truy được về đúng workflow và cấu hình, rồi được so sánh với kết quả kinh doanh và SLA trong cùng giai đoạn. Hóa đơn tăng có thể do tăng trưởng có giá trị hoặc do lãng phí; tổng chi phí không phân biệt được hai trường hợp. Cắt prompt hay hạ cấp mô hình trước khi có baseline sẽ làm mất bằng chứng cần thiết.<\/p>"
  },
  {
    "id": "MOCK-051",
    "set": 1,
    "number": 51,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A campaign-analytics product has two promised deliverables from the same daily data. Deterministic analytics produces verified anomaly metrics, and evaluation shows a faster model summarizes them within five seconds without missing the anomaly threshold. Strategists also need a causal memo within thirty minutes; only a stronger model meets its interaction-analysis rubric, and the budget supports that model only for the memo. Which architecture best aligns the deliverables?<\/p>",
    "options": {
      "A": "<p>Use the validated metrics and faster model for both deliverables, add a disclaimer that causal interactions may be incomplete, and keep the list and memo within five seconds.<\/p>",
      "B": "<p>Start the stronger model synchronously for both deliverables, show its first detected anomaly within five seconds, and reuse the completed response as the causal memo.<\/p>",
      "C": "<p>Produce the anomaly list from validated metrics and an evaluated fast summary, then run the capability-first causal memo asynchronously with linked data provenance and its own acceptance gate.<\/p>",
      "D": "<p>Run both models concurrently for both deliverables, publish the faster anomaly list, and select the causal memo by whichever model reports higher confidence.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Tình huống có hai sản phẩm khác nhau, không phải một yêu cầu cần dùng chung một mô hình. Luồng tương tác có thể kết hợp số liệu đã xác thực với bản tóm tắt nhanh đã qua đánh giá; bản ghi nhớ nhân quả có thể dùng mô hình mạnh hơn với SLA dài hơn và cổng chất lượng riêng. Cả hai vẫn phải giữ nguồn gốc dữ liệu.<\/p>"
  },
  {
    "id": "MOCK-052",
    "set": 1,
    "number": 52,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A university facilities team uses planner, analyst, writer, and reviewer agents for standardized monthly energy-variance narratives. A controlled comparison with a bounded single-call design and the same deterministic arithmetic checks shows identical approval and correction rates, three times the cost, and a missed p95 turnaround SLA. No tested segment benefits from the extra roles. What should the architect do?<\/p>",
    "options": {
      "A": "<p>Keep the multi-agent path and redefine approval to reward the number of internal perspectives, even though facilities staff do not use them.<\/p>",
      "B": "<p>Remove only the writer agent, retain the planner-to-analyst and reviewer handoffs, and assume one fewer role will restore both cost and latency without another controlled comparison or rollback threshold.<\/p>",
      "C": "<p>Run the four agents concurrently on every narrative and publish the first output that passes the arithmetic checks.<\/p>",
      "D": "<p>Retire the multi-agent path, adopt the validated bounded design with its deterministic checks, and monitor the same approval, correction, cost, and turnaround measures with a rollback threshold.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Các vai trò bổ sung không tạo lợi ích đo được nhưng làm tăng đáng kể chi phí và thời gian. Vì vậy nên loại bỏ phần phức tạp không hiệu quả, giữ kiểm soát số học xác định và tiếp tục theo dõi cùng chỉ số kết quả, SLA cùng ngưỡng rollback sau triển khai.<\/p>"
  },
  {
    "id": "MOCK-053",
    "set": 1,
    "number": 53,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A benefits platform serves several employers. Every request includes a large common instruction set and shared plan catalog, followed by an employer policy block and member-specific facts. Employer policies change independently, requests arrive in bursts, and a stale policy must never be applied. Which TWO prompt-caching choices best balance correctness, latency, and cost?<\/p>",
    "options": {
      "A": "<p>Place member facts before all shared content and use one cache breakpoint after the full request so requests from different members can reuse it.<\/p>",
      "B": "<p>Keep the common tools, instructions, and catalog in a stable prefix, then place a versioned employer-policy segment before member-specific content with deliberate breakpoints.<\/p>",
      "C": "<p>After a policy update, continue sending the previous policy prefix with a short correction in the member-specific suffix until the cached prefix expires.<\/p>",
      "D": "<p>Default every employer policy segment to the one-hour TTL based on catalog size, without measuring whether requests repeat during that hour.<\/p>",
      "E": "<p>Version policy content, monitor cache reads and writes plus hit latency, and select breakpoints and TTLs from each layer&#39;s change and reuse pattern.<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "<p>Kiến trúc có hai lớp tái sử dụng và một phần riêng theo yêu cầu. Tool, hướng dẫn và catalog chung tạo tiền tố ổn định đầu tiên; chính sách có phiên bản của chủ lao động tạo đoạn tái sử dụng tiếp theo; dữ liệu thành viên nằm ở phần động. Khi chính sách đổi phải đổi tiền tố ngay và dùng số liệu cache thực tế để chọn breakpoint, TTL.<\/p>"
  },
  {
    "id": "MOCK-054",
    "set": 1,
    "number": 54,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A custom furniture maker sends build packets to the shop floor from approved drawings, material substitutions, and finish samples. A token-minimizing design retrieves only the latest change note. It meets the inference budget but misses joinery and finish dependencies, causing manual rework and a late production start. Evaluation shows targeted retrieval of relevant records raises input cost but lowers total cost per accepted packet and meets the start-time SLA. Which decision best aligns with business value?<\/p>",
    "options": {
      "A": "<p>Keep the latest-change-note design because API input cost is the only architecture cost that can be measured consistently.<\/p>",
      "B": "<p>Use targeted relevant retrieval and govern the design by accepted-packet cost, dependency coverage, and production start SLA rather than input tokens alone.<\/p>",
      "C": "<p>Attach the complete unfiltered project history to every prompt so no possible detail is excluded, regardless of latency or relevance.<\/p>",
      "D": "<p>Upgrade the model for the latest-change-note prompt and assume stronger reasoning can reconstruct drawing, material, and finish facts that were never provided.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Giá trị kinh doanh là gói build đúng hạn và được chấp nhận, không phải số token API đầu vào thấp nhất. Retrieval có mục tiêu giúp bao phủ phụ thuộc, giảm làm lại, đạt SLA khởi động và giảm tổng chi phí cho mỗi gói được duyệt. Gửi toàn bộ lịch sử không tương đương truy xuất đúng dữ liệu; đổi mô hình cũng không thể bù thông tin bị bỏ sót.<\/p>"
  },
  {
    "id": "MOCK-055",
    "set": 1,
    "number": 55,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A marketplace runs one Claude platform for two paths: an interactive listing assistant that sellers abandon when response time is high, and a nightly catalog-quality audit whose value depends on completed coverage by morning. Leadership wants lower spend without reducing accepted listings or audit findings. Which THREE actions best support a value-aligned redesign?<\/p>",
    "options": {
      "A": "<p>Define path-specific success criteria and SLAs, including seller acceptance and tail latency for the interactive path and completed coverage and findings for the nightly path.<\/p>",
      "B": "<p>Adopt one organization-wide average-latency target and optimize both paths until that average falls, regardless of abandonment or morning completion.<\/p>",
      "C": "<p>Evaluate supported model and effort settings separately for each path, and apply caching only where measured prefix reuse makes it applicable.<\/p>",
      "D": "<p>Move both paths to the lowest-cost configuration immediately and treat lower spend as success unless users file complaints.<\/p>",
      "E": "<p>Use the same cache breakpoint and TTL for both paths because the nightly audit has repeated catalog context, without confirming reuse in the interactive prefix.<\/p>",
      "F": "<p>Compare candidate configurations for each path on actual data and retain only those that meet that path&#39;s outcome, SLA, and spend targets together.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "F"
    ],
    "explanation": "<p>Các luồng khác nhau về giá trị, thời gian và tải công việc nên cần hợp đồng kết quả, SLA, cấu hình và bộ đánh giá riêng. Mô hình và effort phải được kiểm thử trên từng tải; caching chỉ áp dụng khi có tiền tố tái sử dụng và nhịp yêu cầu phù hợp. Dùng một số trung bình hoặc một cấu hình chung có thể cải thiện chỉ số cục bộ nhưng phá cam kết thực tế.<\/p>"
  },
  {
    "id": "MOCK-056",
    "set": 1,
    "number": 56,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A board-report service enabled a one-hour prompt cache for a large governance manual. Reports are requested only once every several hours, the manual changes monthly, and monitoring shows frequent cache writes but almost no reads. The cache write premium increased cost without improving the p95 completion time. What is the best response?<\/p>",
    "options": {
      "A": "<p>Keep the one-hour cache and add more breakpoints throughout the manual so each report writes additional reusable segments.<\/p>",
      "B": "<p>Move report-specific data into the cached prefix so each cache entry contains everything needed for the next request.<\/p>",
      "C": "<p>Ignore cache reads and compare only total input tokens and manual stability, because unchanged content is assumed to guarantee that caching will eventually become economical across reporting cycles.<\/p>",
      "D": "<p>Reassess caching from observed timing and read/write cost; disable it for this path unless its access pattern changes enough to create reuse within a supported TTL.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Prompt caching chỉ có lợi khi tiền tố được đọc lại đủ nhiều trong TTL hỗ trợ để bù chi phí ghi cache. Sổ tay ổn định nhưng khoảng cách giữa các yêu cầu gần như không tạo cache read. Cần so sánh TTL và nhịp truy cập bằng số liệu read/write, độ trễ, chi phí; nếu điều kiện không đổi thì nên tắt cache cho luồng này.<\/p>"
  },
  {
    "id": "MOCK-057",
    "set": 1,
    "number": 57,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A payroll provider&#39;s current Claude model passes its explanation rubric, p95 SLA, edge-case set, and production budget. Before a scheduled release, a newly available candidate advertises lower latency and price, but the provider has not tested it with actual payroll prompts or data. Which decision best protects the release while evaluating the opportunity?<\/p>",
    "options": {
      "A": "<p>Keep the qualified current model for the release and evaluate the candidate on the same actual prompts, data, edge cases, quality, latency, and cost criteria before switching.<\/p>",
      "B": "<p>Switch before the release because lower advertised latency and price are sufficient evidence when the model comes from the same provider.<\/p>",
      "C": "<p>Replace the current edge-case set with the candidate&#39;s public benchmark so both models can be compared on a larger dataset.<\/p>",
      "D": "<p>Run one demonstration prompt against the candidate and switch if its answer is faster, deferring quality and cost measurement until after release.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Chỉ nên đổi mô hình dựa trên bằng chứng ứng dụng có thể so sánh. Mô hình hiện tại đã đạt các cổng chất lượng, trường hợp biên, độ trễ và ngân sách; ứng viên mới mới chỉ có tuyên bố quảng bá. Hãy giữ lựa chọn phát hành hiện tại và kiểm thử ứng viên bằng đúng prompt, dữ liệu và tiêu chí trước khi quyết định.<\/p>"
  },
  {
    "id": "MOCK-058",
    "set": 1,
    "number": 58,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A game studio uses Claude to convert approved narrative briefs into quest specifications with branching state, prerequisite, and continuity rules. Two efficient candidates pass style checks but fail the studio&#39;s dependency-consistency gate. A capability-leading candidate passes all gates, the job runs offline, and its measured cost is within the release budget. Which model decision is justified?<\/p>",
    "options": {
      "A": "<p>Release an efficient candidate and ask designers to repair broken prerequisites after generation because its style already passes.<\/p>",
      "B": "<p>Select the capability-leading candidate for release, preserve the dependency-consistency evaluation, and test any later supported efficiency changes against the same gate.<\/p>",
      "C": "<p>Select the efficient candidate with the fewest generated tokens because shorter quest specifications are less likely to contain continuity defects.<\/p>",
      "D": "<p>Combine sections from both failed efficient candidates and accept the result when their style scores agree, without rerunning dependency checks.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Quyết định phát hành phải theo cổng đánh giá của studio, không chỉ dựa vào giá, token hoặc phong cách. Hai mô hình tiết kiệm đều trượt tiêu chí nhất quán phụ thuộc; mô hình mạnh nhất đạt mọi cổng và vẫn trong ngân sách batch offline nên phù hợp. Mọi tối ưu sau này cũng phải vượt cùng bộ tiêu chí.<\/p>"
  },
  {
    "id": "MOCK-059",
    "set": 1,
    "number": 59,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A mortgage-servicing team must select a Claude model for drafting customer explanations. Leaders disagree because one candidate is cheaper, another is faster, and a third scores highest on a general benchmark. Which TWO actions are prerequisites for a defensible selection?<\/p>",
    "options": {
      "A": "<p>Define required capabilities, a response-quality rubric, the p95 response target, and the development and production budget before comparing candidates.<\/p>",
      "B": "<p>Adopt the model with the highest public benchmark score and infer that it will also meet the servicing team&#39;s latency and tone requirements.<\/p>",
      "C": "<p>Choose the model with the lowest input-token price and treat any later editing work as outside the model-selection decision.<\/p>",
      "D": "<p>Evaluate candidates with actual prompts and representative data, including edge cases, and compare quality, latency, and cost against the defined criteria.<\/p>",
      "E": "<p>Let each developer use a preferred model during the pilot and select the one that receives the fewest informal complaints.<\/p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "<p>Chọn mô hình có cơ sở cần xác định rõ tiêu chí năng lực, tốc độ, chi phí và effort rồi kiểm thử prompt, dữ liệu và ca biên thực tế. Benchmark công khai hay đơn giá chỉ giúp lập danh sách ứng viên, không chứng minh chất lượng, độ trễ đuôi hay tổng chi phí của workflow. Kết luận phải dựa trên bộ đánh giá riêng và mục tiêu đo được.<\/p>"
  },
  {
    "id": "MOCK-060",
    "set": 1,
    "number": 60,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A coding agent uses a high-capability Claude model and passes repository-specific correctness and security evaluations. It narrowly misses a p95 latency target and its cost per merged change is above budget. The same model supports an effort control, and a lower setting passes the same evaluations while meeting both operational targets. A smaller model has not yet been tested on security edge cases. What should the team do?<\/p>",
    "options": {
      "A": "<p>Move immediately to the untested smaller model because changing model families always reduces cost more than tuning effort.<\/p>",
      "B": "<p>Keep the current effort unchanged because any reduction in reasoning effort necessarily invalidates the earlier correctness evaluation.<\/p>",
      "C": "<p>Adopt the evaluated lower effort setting for the current model, monitor the same gates and SLAs, and test the smaller model separately before any later switch.<\/p>",
      "D": "<p>Raise effort to maximize intelligence and offset the additional latency by excluding slow runs from the p95 calculation.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Điều chỉnh effort có thể đổi mức thông minh lấy độ trễ và chi phí ngay trong cùng mô hình, đôi khi phù hợp hơn đổi model. Ở đây effort thấp đã vượt bộ kiểm thử chính xác và bảo mật của repository, đồng thời đạt p95 và chi phí; có thể triển khai với cùng giám sát. Mô hình nhỏ hơn vẫn phải vượt ca biên bảo mật trước.<\/p>"
  },
  {
    "id": "MOCK-061",
    "set": 1,
    "number": 61,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A multilingual travel service evaluates three Claude models on its live-chat prompts. Model P has the highest average answer score but exceeds both the p95 response SLA and budget. Model Q meets the quality threshold in every tested language and edge-case group, the p95 SLA, and budget. Model R is fastest and cheapest but fails the disruption-handling rubric. Which model should the team select for this release?<\/p>",
    "options": {
      "A": "<p>Select Model P because the highest average quality score should override latency and cost once it is statistically significant.<\/p>",
      "B": "<p>Select Model R because speed and cost are directly observable, while failed disruption cases can be handled after launch.<\/p>",
      "C": "<p>Select Model P for half of requests and Model R for the rest without defining routing criteria, then judge success from the combined average.<\/p>",
      "D": "<p>Select Model Q because application-specific evaluation shows it satisfies the required capability, edge-case, speed, and cost criteria together.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Mô hình Claude phù hợp phải đồng thời đáp ứng năng lực, tốc độ và chi phí. Chất lượng trung bình cao không bù được việc trượt p95 và ngân sách; rẻ và nhanh cũng không bù được rubric gián đoạn thất bại. Model Q là ứng viên duy nhất vượt toàn bộ cổng trên prompt, nhóm ngôn ngữ và ca biên thực tế.<\/p>"
  },
  {
    "id": "MOCK-062",
    "set": 1,
    "number": 62,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A publisher uses a capability-leading Claude model to extract structured metadata from routine manuscripts. A controlled evaluation shows that an efficient model matches the required field accuracy and edge-case threshold, reduces p95 latency, and lowers cost per accepted record by 60%. Which decision best follows the results?<\/p>",
    "options": {
      "A": "<p>Select the evaluated efficient model because it meets the same quality and edge-case gates while improving the measured latency and accepted-record cost.<\/p>",
      "B": "<p>Keep the capability-leading model indefinitely because a stronger model should be preferred even when measured outcomes are equivalent.<\/p>",
      "C": "<p>Switch to an even cheaper untested model because the first downgrade succeeded and therefore further downgrades will also preserve accuracy.<\/p>",
      "D": "<p>Adopt the efficient model and remove the accuracy checks so the lower-cost path is not delayed by validation.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Mô hình hiệu quả là lựa chọn hợp lý khi kiểm thử đúng use case chứng minh nó đạt chất lượng và ca biên trong khi cải thiện tốc độ, chi phí. Dữ liệu hiện có đã chứng minh điều đó cho ứng viên được đánh giá. Danh tiếng model, kết quả của ứng viên khác hoặc bỏ cổng kiểm thử không thay thế được bằng chứng này.<\/p>"
  },
  {
    "id": "MOCK-063",
    "set": 1,
    "number": 63,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A bank is evaluating replacements for a Claude model used to draft credit-review narratives. Candidate X improves the overall rubric average but regresses on a rare, high-loss collateral category. Candidate Y has a slightly lower average, yet passes every mandatory category gate and meets the current latency and budget limits. Which TWO actions best support a defensible migration decision?<\/p>",
    "options": {
      "A": "<p>Select Candidate X from the overall average and treat the rare collateral regression as acceptable because it affects few records.<\/p>",
      "B": "<p>Keep category-level acceptance gates and weight the collateral edge cases by their business impact rather than relying on the overall average alone.<\/p>",
      "C": "<p>Lower the collateral-category threshold until Candidate X passes, then document the new average as an improvement.<\/p>",
      "D": "<p>Deploy both candidates randomly and compare only monthly average reviewer scores without recording category, latency, or cost.<\/p>",
      "E": "<p>Compare Candidate Y and any revised Candidate X on actual narratives and edge cases, and migrate only a candidate that meets every mandatory quality gate plus latency and budget limits.<\/p>",
      "F": "<p>Use only overall averages for future candidate comparisons and omit category labels now that Candidate Y has passed the current evaluation.<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "<p>Điểm trung bình cao có thể che giấu suy giảm hiếm nhưng hậu quả lớn. Ngân hàng cần giữ cổng theo từng nhóm phản ánh tác động kinh doanh rồi so sánh trên narrative, ca biên, độ trễ và chi phí thật. Candidate Y hiện đạt; X cần cải thiện và kiểm thử lại trước khi chuyển đổi.<\/p>"
  },
  {
    "id": "MOCK-064",
    "set": 2,
    "number": 1,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A streaming service selects a Claude model for subtitle-style summaries governed by a house glossary. Model L leads a public language benchmark but violates required glossary terms on the service&#39;s rare genres. Model M scores slightly lower on that benchmark, passes the service&#39;s actual prompt and genre evaluation, and meets both latency and budget limits. Which selection is best supported?<\/p>",
    "options": {
      "A": "<p>Select Model L because a higher public benchmark score is more transferable than the service&#39;s genre-specific results.<\/p>",
      "B": "<p>Select Model M because it passes the actual glossary and genre evaluation while meeting the service&#39;s latency and budget requirements.<\/p>",
      "C": "<p>Alternate both models and publish whichever summary is generated first, without checking which one preserved required glossary terms.<\/p>",
      "D": "<p>Select the least expensive untested model in the family because all language benchmarks should transfer equally to the house glossary.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Prompt, dữ liệu và ca biên của chính ứng dụng có giá trị hơn benchmark chung. Model M đạt thuật ngữ, thể loại hiếm, độ trễ và ngân sách của dịch vụ. Lợi thế benchmark của Model L không sửa được lỗi thuật ngữ đã biết; chạy đua hoặc suy rộng từ model chưa kiểm thử cũng không chứng minh được hành vi đầu ra.<\/p>"
  },
  {
    "id": "MOCK-065",
    "set": 2,
    "number": 2,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A language-learning product must select a Claude configuration for live coaching from text and learner-uploaded images. The current model at high effort passes feedback and image-grounding rubrics but misses p95 latency and cost targets. At lower effort it meets both operational targets but fails nuanced error correction. A faster candidate has not been evaluated on learner images. Which THREE actions are justified before release?<\/p>",
    "options": {
      "A": "<p>Conclude that no tested configuration currently satisfies the complete release contract and keep the release gate closed.<\/p>",
      "B": "<p>Release the lower-effort configuration because latency and cost are user-visible, and document nuanced correction as a later enhancement.<\/p>",
      "C": "<p>Optimize the prompt for the lower-effort configuration and rerun the same feedback, image, latency, and cost evaluation.<\/p>",
      "D": "<p>Release the high-effort configuration and exclude its slowest coaching turns from the p95 calculation until usage grows.<\/p>",
      "E": "<p>Select the faster candidate from its text results and infer that image-grounded feedback will transfer without separate testing.<\/p>",
      "F": "<p>Evaluate the faster candidate on actual learner text and images, including feedback edge cases, and compare it against the same p95 and cost criteria.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "F"
    ],
    "explanation": "<p>Chưa cấu hình nào đạt mọi tiêu chí bắt buộc: effort cao trượt p95 và chi phí, effort thấp trượt sửa lỗi tinh tế, model nhanh chưa được đánh giá hình ảnh. Vì vậy phải giữ cổng phát hành đóng, tối ưu và kiểm thử lại prompt effort thấp, đồng thời hoàn tất đánh giá văn bản lẫn hình ảnh cho ứng viên.<\/p>"
  },
  {
    "id": "MOCK-066",
    "set": 2,
    "number": 3,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A clinic uses Claude to turn appointment notes into patient-facing follow-up messages. The current template produces inconsistent tone, sometimes omits the next action, and adds unrequested background. The approved output must contain a brief empathetic opening, a numbered action list, and no diagnosis beyond the supplied note. Which prompt revision best addresses the failure?<\/p>",
    "options": {
      "A": "<p>Add a system role that says only &#39;You are a clinician&#39; and let Claude infer the message structure and information boundary.<\/p>",
      "B": "<p>Tell Claude not to be verbose, not to omit anything, and not to sound cold, without defining the desired output.<\/p>",
      "C": "<p>Set an appropriate patient-communication role, state the allowed source boundary, and explicitly require the opening and numbered action-list format.<\/p>",
      "D": "<p>Insert several unrelated medical messages into the template and ask Claude to imitate whichever one seems most relevant.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Prompt cần nêu vai trò và ngữ cảnh giao tiếp với bệnh nhân, giới hạn phát biểu theo ghi chú được cung cấp và mô tả định dạng đầu ra. Chỉ dẫn tích cực, rõ ràng giải quyết hành động bị thiếu và giọng điệu không nhất quán; ranh giới nguồn ngăn mô hình tự suy đoán chẩn đoán.<\/p>"
  },
  {
    "id": "MOCK-067",
    "set": 2,
    "number": 4,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A procurement team sends Claude a template containing evaluation instructions, a scoring rubric, three vendor proposals, and a final question. Reviewers find that proposal text is occasionally treated as an instruction and scores are assigned to the wrong vendor. Which redesign best targets both failures?<\/p>",
    "options": {
      "A": "<p>Remove the scoring rubric and ask Claude to use professional judgment so proposal text has less competition for attention.<\/p>",
      "B": "<p>Repeat the final question after every paragraph of every proposal so Claude cannot forget the requested task.<\/p>",
      "C": "<p>Place all material in one longer system prompt because system content is always interpreted as data rather than instruction.<\/p>",
      "D": "<p>Use consistent descriptive tags for instructions, rubric, and each indexed proposal, then place the final evaluation query after the structured documents.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Prompt phức tạp nên có cấu trúc rõ. Template mua sắm cần tách hướng dẫn đáng tin cậy, rubric chấm điểm và từng đề xuất bằng tag, mã nhất quán; câu hỏi cuối đặt sau tài liệu. Bỏ rubric, lặp câu hỏi hoặc nhét mọi thứ vào một system block không phân biệt sẽ không giải quyết nhầm vai trò nội dung và nguồn nhà cung cấp.<\/p>"
  },
  {
    "id": "MOCK-068",
    "set": 2,
    "number": 5,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A customer-support team wants Claude to produce replies in a precise three-part house format. The prompt states the headings, but outputs still vary on refund edge cases and sometimes copy incidental details from the only example. Which TWO changes best improve reliability without hard-coding each case?<\/p>",
    "options": {
      "A": "<p>Add several relevant and diverse examples that cover normal and edge cases, and wrap each example in a consistent example structure.<\/p>",
      "B": "<p>Duplicate the single example ten times so its wording receives greater weight than new customer facts.<\/p>",
      "C": "<p>Remove the stated headings and rely on examples alone so Claude has fewer instructions to reconcile.<\/p>",
      "D": "<p>Keep explicit positive instructions for the three required sections and state which case facts belong in each section.<\/p>",
      "E": "<p>Tell Claude to avoid all mistakes and use its best judgment when an example does not match.<\/p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "<p>Ví dụ có ích khi liên quan, đa dạng và có cấu trúc, đặc biệt khi một ví dụ duy nhất khiến mô hình khái quát quá mức. Ví dụ phải bổ trợ chứ không thay hướng dẫn. Cần giữ hợp đồng đầu ra ba phần, chỉ rõ cách ánh xạ dữ kiện và thêm nhiều ví dụ đa dạng.<\/p>"
  },
  {
    "id": "MOCK-069",
    "set": 2,
    "number": 6,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A contract-analysis service accepts uploaded documents and can call a repository search tool. Red-team tests show that a document can contain text telling Claude to ignore policy, search unrelated confidential matters, and reproduce system instructions. The business still needs useful summaries and authorized citations. Which redesign provides the strongest bounded behavior?<\/p>",
    "options": {
      "A": "<p>Deliver uploaded text as identified untrusted tool content, screen it before use, scope search to the current matter, and require cited claims.<\/p>",
      "B": "<p>Add &#39;never follow prompt injection&#39; to the system prompt while leaving repository access broad and returning raw outputs.<\/p>",
      "C": "<p>Block every document containing words such as &#39;ignore&#39; or &#39;system&#39; and disable citations to avoid reproducing source text.<\/p>",
      "D": "<p>Allow unrestricted search but ask Claude to decide whether each requested repository is confidential before using it.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Tài liệu tải lên là nội dung không đáng tin, không phải nguồn có thẩm quyền. Thiết kế phải đánh dấu chúng là kết quả tool không tin cậy, sàng lọc trước khi dùng, giới hạn quyền repository đúng vụ việc và chỉ lập luận từ nguồn được phép. System prompt chỉ là một lớp, không thay thế kiểm tra tool result và quyền tối thiểu.<\/p>"
  },
  {
    "id": "MOCK-070",
    "set": 2,
    "number": 7,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A benefits help desk answers questions only from an approved policy packet. When the packet lacks an answer, Claude sometimes supplies a plausible rule from general knowledge. Responses must remain useful but clearly distinguish supported facts from missing information. Which prompt template is most appropriate?<\/p>",
    "options": {
      "A": "<p>Require a complete answer to every question and prohibit uncertainty because users expect confident guidance.<\/p>",
      "B": "<p>Limit policy claims to the packet, cite each claim, and state when the packet lacks support.<\/p>",
      "C": "<p>Ask Claude to answer from memory first, then add one packet citation anywhere in the response.<\/p>",
      "D": "<p>Include the entire packet but omit source labels so Claude can focus on fluent prose rather than attribution.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Template phải giới hạn mọi tuyên bố chính sách trong bộ tài liệu được duyệt, cho phép trả lời không đủ căn cứ hoặc chưa biết và yêu cầu trích dẫn theo từng nhận định. Các kiểm soát này giảm áp lực bịa quy tắc và giúp người dùng kiểm chứng. Ép phải chắc chắn, ưu tiên trí nhớ hoặc trộn ngữ cảnh không nhãn đều làm yếu ranh giới nguồn.<\/p>"
  },
  {
    "id": "MOCK-071",
    "set": 2,
    "number": 8,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A scheduling assistant can suggest available times and send invitations. It sometimes sends an invitation when the user asks only for options and sometimes includes an unconfirmed invitee. Which TWO changes correct the boundary? Choose 2.<\/p>",
    "options": {
      "A": "<p>Treat any scheduling question as authorization to send the earliest available invitation.<\/p>",
      "B": "<p>Return choices for availability questions and require an explicit send request before using the invitation tool.<\/p>",
      "C": "<p>Give the assistant access to all company calendars so it can infer who should attend.<\/p>",
      "D": "<p>Remove the invitation tool even when the user explicitly requests scheduling.<\/p>",
      "E": "<p>Require the selected time and invitee list to be confirmed before the invitation is sent.<\/p>",
      "F": "<p>Send whenever the assistant reports high confidence, without an explicit action request.<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "<p>B phân biệt yêu cầu cung cấp thông tin với yêu cầu thực hiện hành động. E xác nhận thời gian và người nhận trước khi tác động ra bên ngoài. Tăng quyền truy cập, dựa vào độ tự tin hoặc bỏ tool không đồng thời giữ được tính hữu ích và quyền cho phép.<\/p>"
  },
  {
    "id": "MOCK-072",
    "set": 2,
    "number": 9,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A warehouse assistant receives exception records and drafts a supervisor&#39;s morning priority list. The current prompt says only &#39;summarize the exceptions,&#39; so it treats a cosmetic label mismatch like a shipment that will miss today&#39;s carrier cutoff. Supervisors need the top three actions, ordered by service impact and deadline, in no more than 120 words. Which prompt change best addresses the failure?<\/p>",
    "options": {
      "A": "<p>Ask for a more thoughtful summary and let Claude infer warehouse urgency from general logistics knowledge.<\/p>",
      "B": "<p>Add the title &#39;Senior Operations Planner&#39; but leave impact, deadline, item count, and length unspecified.<\/p>",
      "C": "<p>State that service impact and carrier cutoff outrank cosmetic defects; require three referenced actions within 120 words.<\/p>",
      "D": "<p>Tell Claude not to be vague, too long, or focused on low-priority records, without defining those terms.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Trợ lý thiếu cả lý do xếp hạng và hợp đồng đầu ra cụ thể. Prompt phải nêu ưu tiên tác động dịch vụ và giờ chốt của kho, yêu cầu đúng ba hành động theo thứ tự gắn với mã hồ sơ và giới hạn 120 từ. Yêu cầu chung, chỉ định vai trò hoặc chỉ nêu điều cấm vẫn để các ràng buộc quan trọng ở dạng ngầm.<\/p>"
  },
  {
    "id": "MOCK-073",
    "set": 2,
    "number": 10,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A market-research assistant is told to use every search tool and produce a long narrative for every request. Evaluation shows repeated searches, missed latency and cost targets, and no quality gain on routine work. Which TWO prompt revisions best address the behavior? Choose 2.<\/p>",
    "options": {
      "A": "<p>Search only to resolve a defined evidence gap, and stop when the required evidence is sufficient or no new information appears.<\/p>",
      "B": "<p>Repeat the exhaustive-search instruction in stronger language so it applies consistently to routine and complex requests.<\/p>",
      "C": "<p>Define a maximum number of searches, but still require every tool to be called once before stopping.<\/p>",
      "D": "<p>Forbid all search tools and require answers from the initial prompt, even when current external evidence is necessary.<\/p>",
      "E": "<p>Ask the assistant to continue until it feels completely certain, without defining evidence or a maximum research scope.<\/p>",
      "F": "<p>Request a concise decision and source list for routine questions, reserving a longer research narrative for defined complex cases.<\/p>"
    },
    "answer": [
      "A",
      "F"
    ],
    "explanation": "<p>A kết hợp tìm kiếm có điều kiện với quy tắc dừng dựa trên bằng chứng; F điều chỉnh độ sâu đầu ra theo yêu cầu. Ép tìm toàn diện hơn, bắt buộc gọi tool dù có giới hạn, cấm hoàn toàn hoặc dựa vào cảm giác chắc chắn sẽ giữ nguyên lỗi đã đo hoặc làm mất nghiên cứu hữu ích.<\/p>"
  },
  {
    "id": "MOCK-074",
    "set": 2,
    "number": 11,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An internal finance assistant uses stable calculation instructions and a variable employee question. A test question imitates template commands and asks the assistant to reveal internal instructions. The assistant must still answer legitimate expense questions from approved data. Which guardrail design is most appropriate?<\/p>",
    "options": {
      "A": "<p>Interpolate the employee question into the middle of the stable instruction text so all content is processed in one concise block.<\/p>",
      "B": "<p>Add a secret phrase to the system prompt and reveal the instructions whenever the employee provides that phrase.<\/p>",
      "C": "<p>Reject every question containing words used in the template, even when it is a valid question about an expense rule.<\/p>",
      "D": "<p>Keep finance rules in a hardened system policy, screen employee input for injection patterns, and enforce approved-data access outside the model.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Prompt injection trực tiếp từ người dùng cần nhiều lớp bảo vệ hơn ranh giới định dạng. Quy tắc tài chính ổn định phải nằm trong system policy được bảo vệ, đầu vào nhân viên cần được sàng lọc và ứng dụng phải giới hạn truy cập dữ liệu được duyệt. Secret trong prompt không phải cơ chế phân quyền; chặn mọi từ khóa lại phá use case hợp lệ.<\/p>"
  },
  {
    "id": "MOCK-075",
    "set": 2,
    "number": 12,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A distributor uses Claude to assign one of four inventory-status labels from short, normalized records. A clear zero-shot instruction defines each label and the exact response field. Evaluation passes all normal and boundary cases, and the p95 and cost targets have little headroom. What should the prompt engineer do?<\/p>",
    "options": {
      "A": "<p>Keep the evaluated zero-shot prompt and treat examples or extra reasoning as changes that require evidence of a remaining failure.<\/p>",
      "B": "<p>Add five examples for every label because few-shot prompting is always more accurate than a passing zero-shot design.<\/p>",
      "C": "<p>Require a long step-by-step explanation before the label so reviewers can infer whether the classification was easy.<\/p>",
      "D": "<p>Replace the label definitions with a role description and allow Claude to invent new statuses when a record is unusual.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Kỹ thuật prompt phải xử lý lỗi đã quan sát. Zero-shot rõ ràng hiện đã vượt ca thường và ca biên, đạt mục tiêu vận hành chặt. Thêm ví dụ, suy luận hiển thị hoặc vai trò mở sẽ tăng phức tạp hay phá hợp đồng đầu ra mà không có bằng chứng lợi ích. Chỉ đánh giá lại khi xuất hiện khoảng trống đo được.<\/p>"
  },
  {
    "id": "MOCK-076",
    "set": 2,
    "number": 13,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A service insurer classifies claim notes as routine service, safety escalation, coverage dispute, or insufficient information. The zero-shot definitions work on common notes but confuse polite coverage disputes and urgent notes with indirect safety language. Four curated examples cover those boundaries and improve every category without changing latency beyond the SLA. Which approach is best supported?<\/p>",
    "options": {
      "A": "<p>Keep zero-shot and add more label-definition prose instead of the evaluated examples, assuming wording alone resolves both boundaries.<\/p>",
      "B": "<p>Use the curated few-shot examples with the explicit label definitions and retain the same category-level evaluation.<\/p>",
      "C": "<p>Include only one obvious routine-service example so the prompt remains short and infer that it represents all categories.<\/p>",
      "D": "<p>Use the four curated examples but remove the explicit label definitions to reduce prompt length.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Lỗi xảy ra tại ranh giới phân loại và bộ ví dụ tuyển chọn đã trực tiếp bao phủ chúng trong SLA, nên few-shot là hợp lý bên cạnh định nghĩa nhãn rõ ràng. Cần giữ đánh giá theo từng nhóm để biết ví dụ cải thiện đúng phân biệt mong muốn mà không tạo thiên lệch mới.<\/p>"
  },
  {
    "id": "MOCK-077",
    "set": 2,
    "number": 14,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A medical-device service workflow has two Claude subtasks. Serial-number and date extraction passes its acceptance set with a direct instruction. Root-cause analysis still mixes observations with hypotheses, and engineers must approve the evidence set before a final diagnosis is drafted. Which TWO prompting decisions fit the measured needs?<\/p>",
    "options": {
      "A": "<p>Keep the direct zero-shot extraction prompt because it already meets the field contract and has no observed technique gap.<\/p>",
      "B": "<p>Add manual chain-of-thought to serial-number extraction so every copied character receives an explanation.<\/p>",
      "C": "<p>Ask for one uninterrupted root-cause answer and hide all intermediate evidence so engineers see only a polished diagnosis.<\/p>",
      "D": "<p>Chain evidence extraction and hypothesis generation as separate calls, with the engineer&#39;s evidence gate between them.<\/p>",
      "E": "<p>Use a single root-cause example from one device family and apply its failure sequence to every product.<\/p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "<p>Hai tác vụ cần mức cấu trúc prompt khác nhau. Trích xuất zero-shot trực tiếp nên giữ vì đã đạt kiểm thử từng trường. Phân tích nguyên nhân gốc cần artifact bằng chứng trung gian và cổng người duyệt, nên tách thành chuỗi call phù hợp hơn giấu reasoning trong một phản hồi.<\/p>"
  },
  {
    "id": "MOCK-078",
    "set": 2,
    "number": 15,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A power-grid outage planner has moved to a current Claude model with adaptive thinking. Its inherited prompt forces a fourteen-step reasoning recipe written for radial networks. On meshed sites, evaluation shows that the recipe misses alternate feeds, revisits completed checks, and breaches p95 latency. A general constraint-based prompt at medium effort passes topology, safety, and latency tests without changing the final plan schema. Which action best follows the evidence?<\/p>",
    "options": {
      "A": "<p>Keep the radial-network recipe and append another mandatory reasoning step after every newly observed failure.<\/p>",
      "B": "<p>Retain the fourteen-step recipe and raise effort to maximum so Claude can compensate for its missing topology branch.<\/p>",
      "C": "<p>Use the tested general constraint prompt with adaptive thinking at medium effort, retaining the plan schema and regression set.<\/p>",
      "D": "<p>Disable thinking and require the planner to imitate the radial plan closest to each meshed site.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Công thức suy luận cố định chứa giả định sai với site dạng lưới và còn tăng độ trễ. Prompt tổng quát đã kiểm thử nêu topology, ràng buộc an toàn và cho phép adaptive thinking chọn đường suy luận phù hợp. Medium effort, schema đầu ra cũ và cùng bộ hồi quy giữ kiểm soát vận hành.<\/p>"
  },
  {
    "id": "MOCK-079",
    "set": 2,
    "number": 16,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A logistics application migrates a machine-read status generator from an earlier Claude model to a current model that rejects a partially completed final assistant message. The old request prefills the opening of the status object, now returns an HTTP 400, and the downstream parser contract cannot change. Evaluation shows that explicit format instructions produce valid objects on the target model. What should the team do?<\/p>",
    "options": {
      "A": "<p>Retry the rejected request until the target model eventually accepts the final assistant prefill.<\/p>",
      "B": "<p>Move the partial status object into the system role and allow Claude to choose the remaining field names.<\/p>",
      "C": "<p>Keep the old request format and route production traffic back to the earlier model without evaluating supported migration controls.<\/p>",
      "D": "<p>Remove the prefill, specify the complete object contract in the prompt, and regression-test the unchanged parser on the target model.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Model đích không hỗ trợ assistant prefill ở cuối, nên retry hay chuyển một phần object sang vị trí khác không tạo continuation hợp lệ. Thay thế đã đánh giá là mô tả toàn bộ hợp đồng định dạng trong prompt và kiểm chứng parser cũ vẫn hoạt động trên model mới.<\/p>"
  },
  {
    "id": "MOCK-080",
    "set": 2,
    "number": 17,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A board-report assistant turns meeting transcripts into a table of decisions, owners, and deadlines. Evaluation finds that it assigns an owner when speakers discuss a task but never accept it, and it invents a deadline when only a target month is mentioned. Which TWO prompt controls best preserve useful output without presenting inference as transcript evidence?<\/p>",
    "options": {
      "A": "<p>Require every row to contain an owner and exact date, using the most frequently mentioned person and the final day of any target month.<\/p>",
      "B": "<p>Require each populated owner and deadline to include the supporting transcript timestamp, and mark the field unresolved when no explicit commitment exists.<\/p>",
      "C": "<p>Ask Claude for a confidence percentage and accept any owner or date above a fixed threshold without retaining transcript support.<\/p>",
      "D": "<p>Provide an example where active discussion counts as ownership and instruct Claude to imitate that decision rule.<\/p>",
      "E": "<p>Define commitment language and date precision explicitly, and require the output schema to distinguish confirmed, proposed, and unresolved values.<\/p>",
      "F": "<p>Remove unresolved rows from the report so stakeholders see only complete-looking assignments.<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "<p>Prompt phải định nghĩa thế nào là cam kết được chấp nhận và coi transcript là ranh giới bằng chứng. Timestamp giúp truy vết trường đã điền; trạng thái đã xác nhận, đề xuất và chưa giải quyết tránh ép hoàn tất. Điểm tin cậy, ví dụ quá thoáng hoặc ngày tháng tự bịa sẽ biến suy luận thành sự thật.<\/p>"
  },
  {
    "id": "MOCK-081",
    "set": 2,
    "number": 18,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A naming assistant receives three old campaign examples before proposing names for new product launches. Evaluation shows that it repeatedly copies their metaphors and word shapes, reducing the required diversity. A direct prompt that states audience, prohibited terms, and diversity criteria produces a broader set that passes review. What should the team do?<\/p>",
    "options": {
      "A": "<p>Use the evaluated direct prompt and remove the anchoring examples, preserving the explicit audience, prohibition, and diversity constraints.<\/p>",
      "B": "<p>Add more copies of the three old campaigns so Claude learns the preferred metaphors more consistently.<\/p>",
      "C": "<p>Keep the examples and remove the diversity criteria because the examples already imply the desired range.<\/p>",
      "D": "<p>Keep the old examples and add a diversity instruction, without testing whether their observed anchoring remains.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Few-shot không mặc nhiên có lợi. Ở đây ví dụ gây neo và thiếu đa dạng, trong khi prompt trực tiếp nêu đối tượng, thuật ngữ cấm và yêu cầu đa dạng đã vượt đánh giá. Nên dùng cách đơn giản đã kiểm chứng thay vì lặp thêm ví dụ hoặc giữ nguyên nguồn gây neo.<\/p>"
  },
  {
    "id": "MOCK-082",
    "set": 2,
    "number": 19,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A data-center incident assistant handles simple status lookups and complex recoveries. A blanket manual step-by-step prompt adds visible narration and latency to every request. In complex cases, two recovery tools have overlapping descriptions, and evaluation shows frequent selection of the wrong one. Which THREE revisions best align prompting with the two workloads?<\/p>",
    "options": {
      "A": "<p>Use supported adaptive thinking and calibrate effort against separate simple and complex incident evaluations.<\/p>",
      "B": "<p>Require maximum visible reasoning for status lookups so their treatment matches complex recoveries.<\/p>",
      "C": "<p>Give the overlapping tools distinct descriptions, explicit selection criteria, and contrasting valid-use examples.<\/p>",
      "D": "<p>Rename both recovery tools to the same generic action so Claude can choose based on parameter count.<\/p>",
      "E": "<p>Treat longer visible narration as the quality metric and remove the incident-resolution rubric.<\/p>",
      "F": "<p>Keep simple final responses concise and evaluate quality, latency, and tool behavior separately for both workload classes.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "F"
    ],
    "explanation": "<p>Các workload cần độ sâu suy luận khác nhau. Adaptive thinking và effort đã đánh giá giúp tra cứu thường đi thẳng nhưng vẫn đào sâu cho khôi phục phức tạp. Mô tả tool, tiêu chí chọn và ví dụ riêng xử lý chồng lấn; đánh giá riêng chất lượng, độ trễ và hành vi tool ngăn ca phức tạp làm nặng mọi yêu cầu.<\/p>"
  },
  {
    "id": "MOCK-083",
    "set": 2,
    "number": 20,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A construction planner asks Claude to sequence six activities subject to crew availability, inspection order, and a fixed handover date. Direct answers frequently violate one constraint. A tested prompt that asks Claude to reason through the dependencies and then return only the final schedule passes the constraint set within the SLA. Which choice best follows the evidence?<\/p>",
    "options": {
      "A": "<p>Keep the failing direct prompt because reasoning prompts are unsuitable whenever the final output is short.<\/p>",
      "B": "<p>Use the evaluated reason-through prompt with a clear final-schedule field and retain the same dependency and SLA tests.<\/p>",
      "C": "<p>Add examples that each omit a different constraint so Claude learns to improvise when the schedule is infeasible.<\/p>",
      "D": "<p>Remove the handover date from evaluation so the direct prompt&#39;s remaining activities appear consistent.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Lập kế hoạch có nhiều ràng buộc tương tác và prompt trực tiếp đã thất bại trên tập phụ thuộc thật. Cách reason-through đã đánh giá đạt cả ràng buộc lẫn SLA, đồng thời vẫn đặt lịch cuối trong trường đầu ra rõ ràng. Đầu ra ngắn không có nghĩa suy luận đơn giản; hạ chuẩn kiểm thử không sửa được lỗi lập lịch.<\/p>"
  },
  {
    "id": "MOCK-084",
    "set": 2,
    "number": 21,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A legal-intake service accepts a system policy, tool definitions, and user-uploaded PDFs. Some large submissions are rejected even though a character-count rule predicts they will fit, and the service must reserve enough space for a complete structured decision. Which control best addresses the failure?<\/p>",
    "options": {
      "A": "<p>Reuse the token count measured on the previous model because the prompt text and parser have not changed.<\/p>",
      "B": "<p>Count only the extracted PDF text and ignore the system prompt, tools, images, and requested output allowance.<\/p>",
      "C": "<p>Pre-count the complete target-model request, then enforce an input budget that preserves the evaluated output allowance.<\/p>",
      "D": "<p>Send every request first and truncate the newest user content only after the API reports that the prompt is too long.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Số ký tự không thay thế được phép đo token của model đích. Preflight phải đại diện toàn bộ request gồm system prompt, tool, PDF hoặc ảnh và message, đồng thời chừa dung lượng cho đầu ra đã đánh giá. Dùng count của model khác, chỉ đếm một phần hoặc cắt bằng chứng sau khi bị từ chối đều không bảo đảm vừa context.<\/p>"
  },
  {
    "id": "MOCK-085",
    "set": 2,
    "number": 22,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A compliance assistant sends a large policy prefix on every turn. Prompt caching has reduced input cost and latency, but long investigations still approach the context limit and lose focus. A product lead proposes a longer cache lifetime as the context fix. What should the architect recommend?<\/p>",
    "options": {
      "A": "<p>Increase the cache lifetime because cached tokens no longer occupy the model&#39;s context window.<\/p>",
      "B": "<p>Disable caching and resend the same full policy prefix uncached so Claude treats it as fresh context.<\/p>",
      "C": "<p>Split the cached policy into duplicate blocks across the conversation so each investigation turn has a nearby copy.<\/p>",
      "D": "<p>Retain caching for the stable prefix, but manage growing history separately with evaluated compaction or selective context editing.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Prompt caching giảm chi phí và độ trễ cho tiền tố lặp ổn định nhưng token đã cache vẫn chiếm context window. Vì vậy cần thêm kiểm soát quản lý ngữ cảnh phù hợp workflow, như compaction cho phiên dài hoặc chỉnh chọn lọc nội dung cũ. Tăng TTL, tắt cache hay nhân đôi policy không giải phóng active context.<\/p>"
  },
  {
    "id": "MOCK-086",
    "set": 2,
    "number": 23,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A chemical-safety research assistant opens large database records, web pages, and PDFs while building a cited evidence ledger. Raw tool payloads are useful during selection, but accepted quotations, source versions, and record IDs are stored durably outside the conversation. Auditors must be able to reproduce a later claim. Which TWO context policies best reduce active tokens without weakening reproducibility?<\/p>",
    "options": {
      "A": "<p>Keep every raw tool payload in the conversation because reproducibility requires all source bytes to remain in model context.<\/p>",
      "B": "<p>After evidence selection, persist accepted quotations, source versions, and record IDs, then clear superseded raw payloads at the stage boundary.<\/p>",
      "C": "<p>Clear each raw payload immediately after retrieval, before the assistant selects evidence or records its provenance.<\/p>",
      "D": "<p>Keep stable record IDs and make cleared payloads reloadable from the system of record when a later claim needs rechecking.<\/p>",
      "E": "<p>Replace every raw payload with an uncited model summary and discard the source version and record identifier.<\/p>"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "<p>Chỉ nên xóa nội dung khỏi context sau khi bằng chứng đã chọn và nguồn gốc được đưa vào ledger bền vững. Payload thô đã bị thay thế có thể rời active context; mã hồ sơ ổn định giúp tải lại đúng nguồn khi kiểm toán. Xóa sớm làm mất dữ liệu; chỉ giữ tóm tắt không trích dẫn làm mất khả năng tái lập.<\/p>"
  },
  {
    "id": "MOCK-087",
    "set": 2,
    "number": 24,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A security code-review service reuses one authenticated conversation across separate client cases. Messages, tool results, and thinking from a closed case consume context and sometimes anchor the next client&#39;s review. Approved findings and provenance are stored in the case system, each new case must be isolated, and an active tool cycle still requires its signed thinking block. Tests show that a clean case context hydrated from approved state preserves quality. Which design best satisfies the constraints?<\/p>",
    "options": {
      "A": "<p>Start each client case with clean context, hydrate only its approved state, and preserve the active tool-cycle block until completion.<\/p>",
      "B": "<p>Delete every thinking block before returning a tool result, including the signed block associated with the active request.<\/p>",
      "C": "<p>Clear only prior thinking while retaining the previous client&#39;s messages and tool results in the new review.<\/p>",
      "D": "<p>Copy all prior thinking into new user messages so it becomes an explicit cross-client review history.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Ranh giới giữa hồ sơ khách hàng cần context sạch, không chỉ tắt thinking. Ứng dụng chỉ hydrate trạng thái và nguồn gốc được duyệt cho hồ sơ hiện tại, nhưng phải giữ signed thinking block đang hoạt động trong chu kỳ tool. Giữ message khách cũ phá cô lập; xóa block đang dùng vi phạm hợp đồng tool-cycle.<\/p>"
  },
  {
    "id": "MOCK-088",
    "set": 2,
    "number": 25,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A construction-program assistant supports a six-month conversation in which approved scope decisions, unresolved permits, and owner commitments must remain coherent. Client-side FIFO truncation causes contradictions as old decisions disappear. A pilot on a supported model shows server-side compaction preserves the required state within the latency target. What should the team do?<\/p>",
    "options": {
      "A": "<p>Keep FIFO truncation and ask users to restate any missing decision after a contradiction appears.<\/p>",
      "B": "<p>Use server-side compaction at the tested trigger, preserve required decision fields, and pass its block into later requests.<\/p>",
      "C": "<p>Cache the complete raw conversation and assume cached turns will be omitted from the context window.<\/p>",
      "D": "<p>Start a blank conversation at the threshold and ask Claude to reconstruct approvals from the current user message.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Workflow cần tính liên tục dài hạn chứ không phải giữ mọi lịch sử thô. Compaction phía server đã hỗ trợ và đánh giá sẽ thay nội dung cũ bằng tóm tắt tập trung, rồi tiếp tục khi compaction block được gửi lại. Tóm tắt phải giữ các trường quyết định; FIFO, giả định cache hoặc khởi động trắng không giữ được trạng thái.<\/p>"
  },
  {
    "id": "MOCK-089",
    "set": 2,
    "number": 26,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A regulated claims agent may cross a compaction threshold during a long investigation. Before continuation, the application must confirm that the claim ID, evidence decisions, and pending human approval survive; the latest signed authorization record must remain exact; and every resumed turn must be auditable. Which THREE controls satisfy the design?<\/p>",
    "options": {
      "A": "<p>Assume the model can still inspect all raw messages that preceded the latest compaction block whenever the summary is ambiguous.<\/p>",
      "B": "<p>Use the default summary without a preservation rubric because any compaction summary is equivalent for regulated state.<\/p>",
      "C": "<p>Define compaction instructions for the required identifiers, decisions, and approval state, then evaluate the generated summary against that preservation rubric.<\/p>",
      "D": "<p>Place the trigger at the context limit with no output headroom so the workflow performs fewer compactions.<\/p>",
      "E": "<p>Pause after compaction so the application can validate the summary and add the current exact authorization record before generation resumes.<\/p>",
      "F": "<p>Pass the returned compaction block on subsequent requests and log the compaction stop reason, validated state, and resume event.<\/p>"
    },
    "answer": [
      "C",
      "E",
      "F"
    ],
    "explanation": "<p>Ứng dụng phải coi compaction là chuyển trạng thái có kiểm soát. Hướng dẫn tùy chỉnh và rubric bảo toàn giữ đúng trạng thái claim; tạm dừng cho phép xác thực tóm tắt và gắn hồ sơ ủy quyền chính xác. Gửi lại compaction block và ghi log chuyển đổi giúp việc tiếp tục có thể tái lập.<\/p>"
  },
  {
    "id": "MOCK-090",
    "set": 2,
    "number": 27,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A media-production agent runs on a Claude model with automatic context awareness. Its controller also injects guessed remaining-context warnings derived from character counts. Image-heavy jobs make those guesses inaccurate, and evaluation shows the agent wraps up early even though the API reports substantial capacity remaining. Which correction best addresses the conflicting budget signals?<\/p>",
    "options": {
      "A": "<p>Lower every guessed remaining-context value so the agent finishes even earlier and cannot exceed the window.<\/p>",
      "B": "<p>Tell Claude to ignore the API&#39;s context awareness whenever the controller&#39;s character estimate disagrees.<\/p>",
      "C": "<p>Remove fabricated warnings; use automatic context awareness for model behavior and token or usage data for application budgets.<\/p>",
      "D": "<p>Inject the same character-based warning after every tool call so repetition resolves any discrepancy.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Với model có context awareness, API tự cung cấp tín hiệu dung lượng của model, kể cả ảnh. Ứng dụng không nên chèn ước lượng cạnh tranh dựa trên số ký tự. Vẫn có thể dùng token count đúng model và response usage cho admission, chi phí và ngân sách vận hành.<\/p>"
  },
  {
    "id": "MOCK-091",
    "set": 2,
    "number": 28,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A global procurement assistant sends definitions for 120 regional compliance tools before analyzing large vendor bid documents. Each request names one or two jurisdictions, yet token measurement shows the full tool catalog displaces bid evidence and causes incomplete comparisons. Rare regional tools must remain available, and p95 cannot increase. Which change best fits?<\/p>",
    "options": {
      "A": "<p>Shorten every tool description to a regional code so the full catalog remains beside the bid documents.<\/p>",
      "B": "<p>Delete every low-frequency regional tool because the current request usually names common jurisdictions.<\/p>",
      "C": "<p>Prompt-cache all definitions and assume cache reads reserve more context for the bid evidence.<\/p>",
      "D": "<p>Discover tools from jurisdiction metadata, load only the relevant definitions, and regression-test bid completeness, tokens, and latency.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Định nghĩa tool chiếm context ngay cả khi không gọi. Metadata về jurisdiction là khóa khám phá giới hạn, cho phép trì hoãn catalog đầy đủ và chỉ nạp định nghĩa liên quan mà không xóa năng lực hiếm. Đánh giá phải chứng minh context thu hồi giúp hồ sơ đầy đủ hơn mà không làm xấu độ trễ.<\/p>"
  },
  {
    "id": "MOCK-092",
    "set": 2,
    "number": 29,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>Two notification services must produce the same 12-line escalation format and tone. The deployment is not permitted to enable the code-execution capability required to use Skills, and the workflow needs no scripts or resource files. The language contract changes by product release. Which reuse design is most appropriate?<\/p>",
    "options": {
      "A": "<p>Maintain a versioned prompt module with explicit variables and contract tests, then compose it into both services at release.<\/p>",
      "B": "<p>Package the format as a custom Skill and enable code execution only for these requests despite the deployment restriction.<\/p>",
      "C": "<p>Keep independent copies in both services and rely on release notes to remind owners to synchronize every change.<\/p>",
      "D": "<p>Create one broad Skill containing all notification, billing, and support capabilities so future reuse needs no new design.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Môi trường không thể bật khả năng thực thi cần cho Skills, còn tài sản cần tái sử dụng chỉ là hợp đồng hành vi bằng văn bản. Prompt module có phiên bản, biến rõ và contract test cho phép hai dịch vụ dùng cùng định dạng đã duyệt. Bật năng lực bị cấm, giữ bản sao riêng hoặc tạo Skill phổ quát không phù hợp.<\/p>"
  },
  {
    "id": "MOCK-093",
    "set": 2,
    "number": 30,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A claims service is cutting over to a corrected version of a large cached decision prompt. Random instances currently switch in place, so both versions serve traffic and two hundred workers cold-write the new prefix in parallel. The output contract is unchanged and must be verified before the full cohort runs. Which sequence is best?<\/p>",
    "options": {
      "A": "<p>Overwrite the prompt on random instances and let all first requests write their own entry until one version becomes dominant.<\/p>",
      "B": "<p>Publish one versioned prefix, observe one validation response start, verify its contract, then release the cohort and confirm cache reads.<\/p>",
      "C": "<p>Put the new version label after the cache boundary while changing the instructions before it so both versions share one entry.<\/p>",
      "D": "<p>Wait for every old entry to expire, then switch all instances simultaneously without validating the unchanged output contract.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Sửa prompt tạo một tiền tố tái sử dụng mới. Dịch vụ phải phát hành một phiên bản có mã, chờ phản hồi xác thực bắt đầu để cache entry mới tồn tại, kiểm tra hợp đồng đầu ra không đổi rồi mới mở cohort song song. Cache-read usage xác nhận tái sử dụng; thay ngẫu nhiên tại chỗ sẽ trộn phiên bản.<\/p>"
  },
  {
    "id": "MOCK-094",
    "set": 2,
    "number": 31,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>Five service teams maintain copied prompts for the same eligibility decision. Policy wording and output fields are shared, but each team supplies different case data and a small approved regional rule. Fixes to the shared logic reach teams inconsistently. Which TWO changes create a safer modular prompt strategy?<\/p>",
    "options": {
      "A": "<p>Let each team continue editing its full copy and reconcile differences only when production outputs conflict.<\/p>",
      "B": "<p>Create a versioned core for shared policy and output fields, with defined interfaces for case and regional modules.<\/p>",
      "C": "<p>Merge case data, regional rules, and shared instructions into one free-form variable so teams can add fields without coordination.<\/p>",
      "D": "<p>Freeze the first team&#39;s prompt as universal and prohibit regional modules even where an approved rule differs.<\/p>",
      "E": "<p>Place tagged case data and approved regional rules in explicit variable modules after the shared core.<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "<p>Thiết kế module cần cả hợp đồng dùng chung ổn định và ranh giới rõ cho biến thể hợp lệ. Core có phiên bản sở hữu logic chính sách và trường đầu ra chung; dữ liệu vụ việc và quy tắc khu vực đã duyệt nằm ở module biến riêng có tag. Cấu trúc này hỗ trợ tái sử dụng mà không trộn mọi thứ vào một khối tự do.<\/p>"
  },
  {
    "id": "MOCK-095",
    "set": 2,
    "number": 32,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A global invoice service copies tax rules into three places: a prompt module that defines the response contract, a custom Skill containing validation scripts, and request templates fed by the tax system. Updates now diverge, cached requests can preserve an obsolete copy, and auditors must reproduce each calculation. Current tax tables change independently of the executable workflow. Which redesign best fits?<\/p>",
    "options": {
      "A": "<p>Create one long-lived cached prompt containing the response contract, validation script text, and current tax tables.<\/p>",
      "B": "<p>Put the current tax tables inside the Skill and let its execution container retrieve regulatory changes directly.<\/p>",
      "C": "<p>Keep the response contract in the prompt module, version the executable Skill, inject authorized current tables per request, and record the composition.<\/p>",
      "D": "<p>Allow each region to keep all three copies and reconcile differences only when two generated invoices disagree.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Ba tài sản có trách nhiệm và vòng đời khác nhau: prompt module quản lý tương tác và hợp đồng đầu ra; Skill có phiên bản quản lý validation thực thi; ứng dụng cung cấp bảng thuế hiện hành đã cấp quyền. Ghi đúng phiên bản cả ba giúp tái lập phép tính. Cache chỉ tối ưu lớp ổn định, không giải quyết quyền sở hữu hay dữ liệu động.<\/p>"
  },
  {
    "id": "MOCK-096",
    "set": 2,
    "number": 33,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An insurer must reproduce an approved actuarial workbook six months later. The source-data snapshot is recorded, but the job stored only `latest` for its custom Skill; a subsequent Skill update now produces a different workbook. Corrections must apply prospectively without rewriting the approved record. What should the team change?<\/p>",
    "options": {
      "A": "<p>Store only the generated workbook because the artifact alone proves which Skill implementation created it.<\/p>",
      "B": "<p>Replace the historical job&#39;s Skill reference with the current latest version immediately before each audit replay.<\/p>",
      "C": "<p>Archive the user prompt but omit the Skill identity because the same prompt should always generate the same workbook.<\/p>",
      "D": "<p>Pin and record the exact Skill version in each approved job manifest, retain it for replay, and use new manifests for fixes.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Snapshot nguồn chưa đủ khi kết quả còn phụ thuộc Skill thực thi. Mỗi job được duyệt cần manifest bất biến ghi đúng phiên bản Skill và giữ phiên bản đó để replay. Skill sửa lỗi phải đi vào manifest mới cho tương lai, không viết lại lịch sử. Workbook, prompt hay bản latest mới không tái tạo được lần chạy cũ.<\/p>"
  },
  {
    "id": "MOCK-097",
    "set": 2,
    "number": 34,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A public-sector grant service combines an analysis Skill and a document Skill. Queue delays can trigger retries after `latest` has changed, and a pooled cross-agency container has exposed stale files from another job. Each released report must use an approved Skill combination and be reproducible. Which THREE controls best fit?<\/p>",
    "options": {
      "A": "<p>Resolve `latest` again on every retry so delayed jobs automatically receive the newest approved behavior.<\/p>",
      "B": "<p>Use one pooled container for all agencies and overwrite common filenames before each report begins.<\/p>",
      "C": "<p>Create an immutable job manifest with exact Skill IDs and versions, the input snapshot, and the approved composition ID.<\/p>",
      "D": "<p>Allocate a fresh container per agency job, reuse it only across that job&#39;s turns, and export required artifacts.<\/p>",
      "E": "<p>Keep only the final PDF checksum because identical output bytes reveal every Skill and input used to create it.<\/p>",
      "F": "<p>Validate the report contract against the manifest on release and retry, rejecting any dependency mismatch.<\/p>"
    },
    "answer": [
      "C",
      "D",
      "F"
    ],
    "explanation": "<p>Retry tái lập được cần manifest job bất biến cố định snapshot đầu vào và thành phần Skill đã duyệt. Container chỉ thuộc một job của một cơ quan, có thể tái dùng trong job nhưng không xuyên tenant; artifact bắt buộc phải export. Handler phát hành và retry phải tuân manifest, không âm thầm lấy dependency mới nhất.<\/p>"
  },
  {
    "id": "MOCK-098",
    "set": 2,
    "number": 35,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A quality team pastes a long manufacturing procedure and its validation scripts into every system prompt, although only a small class of deviation investigations needs them. Maintenance is duplicated, ordinary requests slow down, and the specialized workflow is reusable across plants. What should the architect do?<\/p>",
    "options": {
      "A": "<p>Package the procedure, scripts, and resources as a scoped custom Skill with precise metadata, then evaluate activation in eligible workflows.<\/p>",
      "B": "<p>Split the same procedure across more system messages so each ordinary request still carries every instruction and script.<\/p>",
      "C": "<p>Create one broadly described Skill containing every plant procedure and attach it to all requests.<\/p>",
      "D": "<p>Prompt-cache the pasted procedure and keep separate script copies in each plant&#39;s request template.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Custom Skill là gói có tổ chức gồm hướng dẫn, script và tài nguyên. Metadata chính xác cùng phạm vi khả dụng giúp Claude chỉ nạp đầy đủ năng lực khi cuộc điều tra phù hợp cần đến, trong khi một phiên bản được duy trì có thể phục vụ nhiều nhà máy. Prompt rời, Skill phổ quát hay bản cache sao chép không tạo cùng ranh giới progressive disclosure.<\/p>"
  },
  {
    "id": "MOCK-099",
    "set": 2,
    "number": 36,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A document service has three reliable request classes: spreadsheet-only, presentation-only, and a combined workflow. It currently attaches eight Skills to every request, adding overhead; operators also change the list ad hoc, disrupting reuse. Classification before invocation is reliable. Which design is best?<\/p>",
    "options": {
      "A": "<p>Attach all eight Skills to every request so routing never risks omitting an infrequently used capability.<\/p>",
      "B": "<p>Define three evaluated workflow profiles with only the required Skills, keep each list stable, and route before invocation.<\/p>",
      "C": "<p>Build a different list from arbitrary words in each document and resolve every referenced Skill to latest.<\/p>",
      "D": "<p>Combine all spreadsheet and presentation behavior into one universal custom Skill for every future request.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Phân loại trước đáng tin cậy cho phép dùng ba profile năng lực giới hạn. Mỗi profile chỉ chứa Skill cần cho workflow, ổn định giữa yêu cầu tương đương và được đánh giá như một tổ hợp. Cách này giảm overhead và tránh phá cache do danh sách Skill đổi liên tục.<\/p>"
  },
  {
    "id": "MOCK-100",
    "set": 2,
    "number": 37,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A refund assistant makes one sequential payment-tool call only after a human approval. Its tool is configured for both direct and programmatic callers, so every request also enables code execution. There is no batching or intermediate filtering, latency increased, and the team incorrectly treats caller configuration as the approval boundary. What is the best correction?<\/p>",
    "options": {
      "A": "<p>Use a direct-only refund path, remove the unused programmatic execution capability, and enforce the approval and authorization in the application.<\/p>",
      "B": "<p>Keep both caller modes and accept any invocation bearing a code-execution caller as proof of human approval.<\/p>",
      "C": "<p>Move the refund into an autonomous agent with both callers so it can choose whether an approval is necessary.<\/p>",
      "D": "<p>Create a second refund tool for programmatic calls while leaving the original available directly on every request.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Yêu cầu chỉ có một lần gọi tuần tự cần phê duyệt, nên programmatic execution làm tăng năng lực và độ trễ mà không có lợi ích xử lý hàng loạt. Tool nên đi theo đường trực tiếp của workflow. Phê duyệt con người và phân quyền server vẫn do ứng dụng kiểm soát vì `allowed_callers` chỉ hướng dẫn cách gọi, không thực thi đặc quyền.<\/p>"
  },
  {
    "id": "MOCK-101",
    "set": 2,
    "number": 38,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>After a merger, a service agent receives both legacy client tools and a new MCP toolset for the same CRM actions. Equivalent capabilities have different names and retry semantics, and traces show alternating choices that sometimes duplicate side effects. New traffic should use MCP, but the legacy path must remain available for rollback during cutover. Which configuration is best?<\/p>",
    "options": {
      "A": "<p>Expose both complete surfaces to every request and tell the model to prefer MCP unless a legacy name looks more familiar.<\/p>",
      "B": "<p>Assign each traffic cohort one authoritative capability surface, remove its duplicate from active context, and retain the legacy integration outside the cohort for measured rollback.<\/p>",
      "C": "<p>Wrap both integrations in a third agent that can call either surface and retry whichever one returns first.<\/p>",
      "D": "<p>Rename legacy and MCP tools identically so either backend can satisfy the same model call without recording which one executed.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Phần dư thừa nằm ở năng lực thực thi bị trùng, không phải thiếu mô tả. Mỗi nhóm chuyển đổi chỉ nên thấy một giao diện CRM chính thức với hành vi retry đã biết, đo kết quả và giữ tích hợp cũ bên ngoài profile đang hoạt động để rollback. Hiển thị hoặc bọc cả hai khiến mô hình phải tự quyết quyền sở hữu hạ tầng và có thể lặp tác động.<\/p>"
  },
  {
    "id": "MOCK-102",
    "set": 2,
    "number": 39,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A grant assistant is configured with web search, internal retrieval, memory, and fourteen action tools. The team suspects that three capabilities are unnecessary but cannot remove required low-frequency behavior or weaken safety. Which TWO findings provide the strongest evidence that a capability is bloat?<\/p>",
    "options": {
      "A": "<p>The governed task inventory contains no required scenario or dependency for it, and representative traces never activate it.<\/p>",
      "B": "<p>Its definition uses more tokens than the shortest tool in the catalog, even though it uniquely serves a required quarterly workflow.<\/p>",
      "C": "<p>A stakeholder dislikes its name, but no task evaluation or call trace has been reviewed.<\/p>",
      "D": "<p>It is used less often than another capability, although the rare cases have mandatory safety checks.<\/p>",
      "E": "<p>A controlled ablation preserves task success and safety coverage while reducing wrong calls, latency, or failure rate.<\/p>"
    },
    "answer": [
      "A",
      "E"
    ],
    "explanation": "<p>Muốn kết luận capability bị dư thừa cần xem cả mức bao phủ trách nhiệm và bằng chứng so sánh. Năng lực không gắn với tác vụ được quản trị, dependency hoặc lần kích hoạt quan sát được là ứng viên loại bỏ. Sau đó ablation có kiểm soát phải chứng minh cấu hình gọn hơn vẫn giữ thành công, an toàn và cải thiện lỗi gọi, độ trễ hoặc tỷ lệ thất bại.<\/p>"
  },
  {
    "id": "MOCK-103",
    "set": 2,
    "number": 40,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A fleet-maintenance assistant has two valid paths to an approved work order: one composite planning tool or a sequence of telemetry, parts, and work-order tools. Its evaluator hard-codes the sequence as the only success, so teams add wrappers when correct composite outcomes are marked wrong. Tool count and selection errors rise, while approved work orders remain unchanged. Safety and audit requirements are path-independent. Which redesign best fits?<\/p>",
    "options": {
      "A": "<p>Keep the expected call sequence and add one wrapper for every alternative path so each can imitate the required trace.<\/p>",
      "B": "<p>Score only the number of tools called because a longer trace demonstrates more complete reasoning and auditability.<\/p>",
      "C": "<p>Verify the approved work order and safety invariants, allow valid tool paths, inspect traces for real failures, and ablate redundant wrappers.<\/p>",
      "D": "<p>Remove the composite tool immediately because any path that differs from the original evaluator must be unsafe.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Đánh giá tool nên kiểm tra kết quả kinh doanh và thuộc tính an toàn, không loại một chiến lược hợp lệ chỉ vì call trace khác. Trace viết cứng ở đây tạo lỗi giả và khuyến khích wrapper trùng. Cần chấp nhận cả hai đường bảo trì hợp lệ, dùng trace để chẩn đoán lỗi thật và chạy ablation trước khi bỏ wrapper.<\/p>"
  },
  {
    "id": "MOCK-104",
    "set": 2,
    "number": 41,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A warranty agent exposes `lookup_claim_v1`, `lookup_claim_v2`, and two compatibility wrappers indefinitely. Version 2 is required for all new cases, but version 1 must replay archived decisions that recorded it. Selection errors rise as the active catalog grows, and each replay already carries the recorded tool version. What should the team do?<\/p>",
    "options": {
      "A": "<p>Keep every version and wrapper active for all cases because historical reproducibility requires universal visibility.<\/p>",
      "B": "<p>Delete version 1 immediately and rewrite archived manifests to version 2 so the catalog becomes smaller.<\/p>",
      "C": "<p>Add a version-selection agent with all four tools and let it infer whether a case is historical from the claim narrative.<\/p>",
      "D": "<p>Expose only version 2 to new cases, resolve version 1 from the archived manifest for replay, and retire wrappers after measured dependency checks.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Một capability có thể được giữ cho vòng đời giới hạn mà không xuất hiện trong mọi catalog. Ca mới chỉ thấy hợp đồng v2; replay lịch sử tải đúng phiên bản đã ghi bên ngoài lựa chọn thường. Chỉ bỏ wrapper tương thích sau khi kiểm tra usage và dependency. Hiển thị mọi phiên bản hoặc viết lại lịch sử sẽ nhầm giữa khả dụng và đang hoạt động.<\/p>"
  },
  {
    "id": "MOCK-105",
    "set": 2,
    "number": 42,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A university exposes forty capabilities to every assistant, and evaluations show wrong calls across enrollment, financial-aid, and housing tasks. Which TWO deployment controls best reduce the active tool surface? Choose 2.<\/p>",
    "options": {
      "A": "<p>Keep all forty capabilities active because rollback and emergency readiness require every tool to be model-visible at all times.<\/p>",
      "B": "<p>Compose one profile per task family from a shared core plus only that family&#39;s required capabilities.<\/p>",
      "C": "<p>Route by application-owned task type, but let the model add tools after the profile is selected.<\/p>",
      "D": "<p>Activate exactly one selected profile per request and include its identity and tool calls in operational traces.<\/p>",
      "E": "<p>Allow any assistant to activate an unlisted tool when it claims the task is important, then review the grant monthly.<\/p>",
      "F": "<p>Attach all three routine profiles plus the emergency profile after routing so no downstream capability can be missing.<\/p>"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "<p>B tạo profile tối thiểu cho từng nhóm tác vụ đã biết; D chỉ kích hoạt một profile cho mỗi request và vẫn truy vết được. Giữ mọi tool hiển thị, cho model tự mở rộng hoặc gắn tất cả profile đều giữ nguyên tình trạng capability bloat.<\/p>"
  },
  {
    "id": "MOCK-106",
    "set": 2,
    "number": 43,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A utility-billing assistant exposes separate tools for date normalization, unit conversion, account-ID cleanup, tariff lookup, charge calculation, and invoice creation. The first three are deterministic preprocessing steps used in the same order before every calculation; making the model select and call them separately adds round trips and occasional ordering errors. What is the best redesign?<\/p>",
    "options": {
      "A": "<p>Move deterministic normalization into the application or a bounded billing operation, expose the meaningful calculation contract, and keep its inputs and outputs validated.<\/p>",
      "B": "<p>Add more normalization agents so each deterministic transformation has an independent reviewer.<\/p>",
      "C": "<p>Keep all six tools and ask the model to remember the correct order without an application check.<\/p>",
      "D": "<p>Merge every billing and account operation into one free-form executor with no typed parameters.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Không phải hàm nội bộ nào cũng nên thành capability cho model. Chuẩn hóa ngày, đơn vị và mã là bước xác định, luôn theo một thứ tự, nên do ứng dụng hoặc thao tác billing giới hạn quản lý. Claude chỉ cần hợp đồng tính toán có ý nghĩa với đầu vào đã xác thực và đầu ra rõ ràng.<\/p>"
  },
  {
    "id": "MOCK-107",
    "set": 2,
    "number": 44,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An operations framework wraps a two-category support assistant with a planner, request rewriter, router, memory layer, and reviewer. Traces show only the router improves category accuracy; the planner and rewriter obscure the actual prompt, memory repeats ticket state, and the reviewer adds latency without changing acceptance. Incident teams cannot reproduce failures. Which configuration best fits the evidence?<\/p>",
    "options": {
      "A": "<p>Retain every layer and add another tracing agent because framework components are safer when no one can remove them.<\/p>",
      "B": "<p>Keep the validated router, remove or inline layers with no measured benefit, expose underlying prompts and tool traces, and rerun the same evaluation.<\/p>",
      "C": "<p>Remove the router because simplicity requires deleting the only layer with measured outcome benefit.<\/p>",
      "D": "<p>Replace the framework with one autonomous agent that has no route contract, traces, or acceptance evaluation.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Cần giảm capability có chọn lọc. Router đã chứng minh giá trị cho hai nhóm riêng; các lớp khác chỉ tăng độ trễ, lặp trạng thái hoặc biến đổi prompt khó quan sát mà không tăng tỷ lệ chấp nhận. Giữ router, bỏ hoặc inline lớp không hiệu quả và công khai prompt, tool trace để khôi phục khả năng tái lập.<\/p>"
  },
  {
    "id": "MOCK-108",
    "set": 2,
    "number": 45,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A logistics SaaS replaces a shared Claude API key with Workload Identity Federation for its batch workers. The job payload still contains a tenant ID supplied by an upstream queue, and every federated worker can submit requests for any tenant because the service trusts that field without checking its workload claims. The requirements are to eliminate long-lived Claude secrets and preserve strict tenant isolation. What is the most important remaining security gap?<\/p>",
    "options": {
      "A": "<p>The short-lived Claude access token should be refreshed more frequently, because token lifetime alone determines tenant access.<\/p>",
      "B": "<p>The system prompt should instruct Claude not to process another tenant&#39;s data, while the service continues trusting the payload tenant ID.<\/p>",
      "C": "<p>Federation authenticates the workload, but the service still lacks server-side authorization that binds trusted workload identity to permitted tenants before processing.<\/p>",
      "D": "<p>An IP allowlist should replace tenant authorization because all approved workers run inside the same network.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Workload Identity Federation loại khóa Claude dài hạn và dùng token ngắn hạn, nhưng không cung cấp phân quyền tenant của sản phẩm. Dịch vụ phải suy ra hoặc xác minh tenant từ claim đáng tin cùng policy phân quyền trước khi gửi dữ liệu tới Claude hay thực hiện hành động. TTL token, prompt và mạng không đóng được lỗ hổng xuyên tenant này.<\/p>"
  },
  {
    "id": "MOCK-109",
    "set": 2,
    "number": 46,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An HR assistant connects to a remote MCP server with each employee&#39;s valid OAuth token. The server exposes profile reading, compensation updates, and employee deletion, and the team has enabled every tool with automatic execution. Policy permits all employees to read their own profile, managers to update compensation for direct reports, and only HR administrators to delete an employee after confirmation. Which design best closes the authorization gap?<\/p>",
    "options": {
      "A": "<p>Treat successful OAuth authentication as authorization for every exposed MCP tool because the token identifies an employee.<\/p>",
      "B": "<p>Expose all tools but add policy text to the system prompt so Claude can infer the employee&#39;s role.<\/p>",
      "C": "<p>Require confirmation for every read and write while leaving the MCP server without role or resource checks.<\/p>",
      "D": "<p>Enforce current role, resource, and action authorization at the application or MCP server, expose only applicable tools, and require confirmation for employee deletion.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>OAuth token xác thực danh tính nhưng bài toán cần phân quyền theo hành động và tài nguyên. Ứng dụng hoặc MCP server phải kiểm tra vai trò hiện tại và quan hệ với đối tượng, chỉ cấp tool đúng vai trò; thao tác xóa phải dừng để xác nhận. Prompt hoặc xác nhận đơn thuần không thể cấp hay chứng minh quyền nghiệp vụ.<\/p>"
  },
  {
    "id": "MOCK-110",
    "set": 2,
    "number": 47,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A customer-support product stores one MCP credential vault per support agent. Vaults are workspace-scoped, and the session endpoint currently accepts a vault ID supplied by the browser without checking ownership. Agents may act only on tickets in their assigned queue. An audit finds that one agent started a session with another agent&#39;s vault. Which TWO controls address the root authentication and authorization gaps?<\/p>",
    "options": {
      "A": "<p>Authenticate the product user, resolve the permitted vault server-side from that identity, and reject any client-supplied cross-user vault reference.<\/p>",
      "B": "<p>Rename vault display names with random strings and continue accepting any vault ID from the browser.<\/p>",
      "C": "<p>Rely on credential values being write-only because a user who cannot read a token cannot use its vault.<\/p>",
      "D": "<p>Set every MCP tool to require confirmation and let the agent decide whether the selected vault belongs to the browser user.<\/p>",
      "E": "<p>Create a new workspace for every request so that no credential persists long enough to be misused.<\/p>",
      "F": "<p>Authorize each downstream action against the current support principal and assigned queue, and record the principal, vault, server, tool, and target in the audit event.<\/p>"
    },
    "answer": [
      "A",
      "F"
    ],
    "explanation": "<p>Giữ bí mật vault và chọn đúng vault là hai kiểm soát khác nhau. Vì vault thuộc workspace, sản phẩm phải xác thực caller rồi ánh xạ vault do họ sở hữu ở server, không tin ID do trình duyệt gửi. Hành động sau đó cũng phải được kiểm tra theo ticket queue hiện tại và ghi log danh tính, mục tiêu.<\/p>"
  },
  {
    "id": "MOCK-111",
    "set": 2,
    "number": 48,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A fintech managed agent uses an authenticated MCP payment server and a separate public foreign-exchange data source. At session creation, the payment credential is expired. The session still starts, emits an MCP authentication failure, and the agent continues researching rates. Operations requires public research to remain available, but no payment may execute or be reported as completed without authenticated access, and the incident trail must remain intact. What should the integration do?<\/p>",
    "options": {
      "A": "<p>Treat the authentication event as a failed payment dependency, isolate and block the payment path, record the event, rotate or refresh the credential, and resume payment only after successful authentication.<\/p>",
      "B": "<p>Retry the payment tool after every rate lookup because a later session transition may make the expired credential valid.<\/p>",
      "C": "<p>Replace the MCP payment tool with a custom tool that embeds a fallback administrator token when authentication fails.<\/p>",
      "D": "<p>Let the agent mark the payment as completed from the requested intent, then reconcile the transaction after credentials recover.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Phiên managed agent vẫn tiếp tục khi credential MCP lỗi, nên sản phẩm phải ánh xạ lỗi tới đúng capability thay vì coi cả phiên đã xác thực. Đường thanh toán phải fail closed, giữ hồ sơ lỗi và chỉ tiếp tục sau khi credential phục hồi, xác thực thành công. Đường nghiên cứu công khai độc lập có thể tiếp tục nếu không thể đại diện hoặc kích hoạt thanh toán.<\/p>"
  },
  {
    "id": "MOCK-112",
    "set": 2,
    "number": 49,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A deployment pipeline authenticates to the Claude API with one non-expiring API key stored as a build variable. A diagnostic step accidentally printed the key, and the CI platform now provides an OIDC workload identity. Security requires immediate containment, removal of long-lived Claude secrets from future jobs, and continued environment-level access separation. Which response best satisfies all requirements?<\/p>",
    "options": {
      "A": "<p>Add an expiration date to the exposed key and let existing jobs use it until that date.<\/p>",
      "B": "<p>Revoke the exposed key, configure WIF from the trusted CI issuer to environment-scoped Claude identities, and audit the upstream IdP rules and token exchange.<\/p>",
      "C": "<p>Place the exposed key in the system prompt so only the model, rather than the build script, can access it.<\/p>",
      "D": "<p>Move one replacement organization-wide key into a secret manager and use it for every environment.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Khóa đã in ra phải coi là bị lộ và thu hồi ngay, không chỉ chờ hết hạn. CI đã có OIDC workload identity nên WIF có thể đổi lấy quyền Claude ngắn hạn mà không phân phối khóa tĩnh. Danh tính riêng theo môi trường và rà soát issuer, federation rule giữ quyền tối thiểu; vẫn phải bảo vệ chuỗi tin cậy đầu nguồn.<\/p>"
  },
  {
    "id": "MOCK-113",
    "set": 2,
    "number": 50,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A procurement service authenticates its batch workers to the Claude API through Workload Identity Federation. A purchasing MCP server uses one corporate OAuth credential with organization-wide rights. Each queued request contains a requester name, cost center, and amount copied from untrusted task text, and purchase execution is automatic. Requirements say purchases must be attributable to an authenticated employee, limited to that employee&#39;s delegated cost centers, and approved by a second authorized person above a threshold. Which THREE controls form the strongest design?<\/p>",
    "options": {
      "A": "<p>Treat the federated batch-worker identity as the human requester and authorize every cost center available to the corporate MCP credential.<\/p>",
      "B": "<p>Ask Claude to compare the requester and cost center strings in the task text before it decides whether the purchase is authorized.<\/p>",
      "C": "<p>Authenticate the employee when the job is accepted and attach a server-generated, immutable requester and cost-center context instead of trusting task text.<\/p>",
      "D": "<p>Have the procurement service authorize the current employee, cost center, action, and amount on every purchase call, treating the corporate OAuth credential only as connector authentication.<\/p>",
      "E": "<p>For above-threshold purchases, require confirmation from a distinct authenticated approver before execution and audit the employee, workload, approver, tool target, and outcome.<\/p>"
    },
    "answer": [
      "C",
      "D",
      "E"
    ],
    "explanation": "<p>Hệ thống có hai lớp xác thực máy nhưng thiếu ranh giới ủy quyền con người đáng tin. Ingress phải gắn job với nhân viên đã xác thực bằng ngữ cảnh do server tạo. Dịch vụ mua sắm kiểm tra cost center, hành động và số tiền; vượt ngưỡng cần người duyệt khác xác thực. Audit phải nối con người, workload, phê duyệt và kết quả.<\/p>"
  },
  {
    "id": "MOCK-114",
    "set": 2,
    "number": 51,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A warehouse agent invokes a custom application tool that releases quarantined inventory. The team added an `always_ask` policy to its Managed Agents tool configuration, but the application automatically executes every custom-tool event it receives. Policy requires both current order-level authorization and supervisor approval. What is the security gap?<\/p>",
    "options": {
      "A": "<p>The tool needs a longer description so Claude can decide whether the caller has supervisor authority.<\/p>",
      "B": "<p>The application should return success before execution so the model does not retry the release.<\/p>",
      "C": "<p>Managed permission policies do not govern application-executed custom tools; the application must authorize the order, obtain supervisor approval, and only then execute and return the result.<\/p>",
      "D": "<p>The `always_ask` setting is sufficient, so the automatic executor can remain unchanged.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Managed permission policy áp dụng cho agent và MCP tool do server thực thi, không áp dụng custom tool do ứng dụng chạy. Ứng dụng phải coi event là yêu cầu, gắn principal đã xác thực, kiểm tra đúng lệnh cách ly, lấy phê duyệt giám sát rồi mới thực thi. Mô tả tool hay policy không phù hợp không đóng được ranh giới này.<\/p>"
  },
  {
    "id": "MOCK-115",
    "set": 2,
    "number": 52,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A records service revokes an investigator&#39;s export role and updates the managed-agent template to disable the export MCP tool. The investigator still has a long-running session created under the prior configuration and a referenced credential vault. Requirements say revocation must take effect immediately and every export must be checked against current entitlement. Which response best closes the gap?<\/p>",
    "options": {
      "A": "<p>Wait for the investigator to start a new session because the template update will apply at that time.<\/p>",
      "B": "<p>Rename the export tool to indicate that only authorized investigators should use it.<\/p>",
      "C": "<p>Change the future template from automatic execution to confirmation and let the revoked investigator approve any pending export.<\/p>",
      "D": "<p>Enforce current export entitlement at the records boundary on every call, archive the credential, and terminate the existing session in addition to changing future sessions.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Cập nhật cấu hình agent không bảo vệ ngược các phiên cũ. Muốn thu hồi ngay, dịch vụ hồ sơ hoặc ứng dụng phải kiểm tra quyền hiện tại ở mọi lần export, archive credential để xóa secret và lan truyền thay đổi vòng đời, đồng thời kết thúc phiên còn giữ toolset cũ. Chỉ tắt tool cho phiên tương lai là chưa đủ.<\/p>"
  },
  {
    "id": "MOCK-116",
    "set": 2,
    "number": 53,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A shipping service compares two extraction configurations. Configuration X returns a first response in 0.6 seconds on average, but 18% fail field validation and trigger a retry; its P95 time to the first valid result is 2.6 seconds. Configuration Y returns in 1.1 seconds on average, passes validation on 99% of first attempts, and has a 1.5-second P95 to a valid result. Both meet the accepted-result accuracy target. Production requires a valid result within 1.8 seconds at P95. Which decision is best supported?<\/p>",
    "options": {
      "A": "<p>Use Configuration Y and monitor validation failures, retries, accepted accuracy, and valid-result P95 as one end-to-end outcome.<\/p>",
      "B": "<p>Use Configuration X because its average first-response time is lower, and exclude retry time from the SLA.<\/p>",
      "C": "<p>Use Configuration X and accept failed validation on the first attempt so retries no longer affect latency.<\/p>",
      "D": "<p>Alternate X and Y and report the average of their first-response times as the production P95.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Độ trễ phải đo tại điểm người dùng nhận được kết quả hợp lệ đầu tiên. X chỉ có vẻ nhanh nếu bỏ chi phí validation và retry; P95 kết quả hợp lệ của nó trượt yêu cầu. Y đạt cả độ chính xác được chấp nhận và P95 1,8 giây. Production phải tiếp tục giám sát lỗi validation, retry, accuracy và end-to-end latency.<\/p>"
  },
  {
    "id": "MOCK-117",
    "set": 2,
    "number": 54,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A compliance-report service has a large stable prefix and a required 2,000-token report. Prompt-cache metrics show a 97% hit rate, and caching reduced time to first token below its target. Full completion still takes 11 seconds because output generation dominates, against an 8-second completion SLA. The current report passes accuracy and completeness checks. Which next step best follows the evidence?<\/p>",
    "options": {
      "A": "<p>Move the cache breakpoint deeper into the already identical prefix because a higher hit rate will reduce output-token generation.<\/p>",
      "B": "<p>Keep the working cache and evaluate a faster model or lower supported effort on the unchanged report task, accepting a change only if accuracy, completeness, and full-completion P95 all pass.<\/p>",
      "C": "<p>Switch from the 5-minute cache to a 1-hour cache because a longer TTL generates output tokens faster.<\/p>",
      "D": "<p>Add streaming and declare the 8-second full-completion SLA met as soon as the first token is visible.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Cache đang hoạt động và đã giải quyết TTFT phía input. Prompt caching không tăng tốc sinh output token nên đổi breakpoint hay TTL không thu hẹp thời gian hoàn tất. Cần giữ tác vụ cố định rồi đánh giá model hoặc effort tăng tốc generation, chỉ dùng nếu độ chính xác, đầy đủ và P95 completion đều đạt.<\/p>"
  },
  {
    "id": "MOCK-118",
    "set": 2,
    "number": 55,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A contact-center summarizer compares two configurations on representative transcripts. Configuration X achieves 96% accuracy, a 0.9-second mean completion time, and a 4.2-second P95 because long calls form a slow tail. Configuration Y achieves 95.5% accuracy, a 1.3-second mean, and a 2.0-second P95. Release requires at least 95% accuracy and no more than 2.5 seconds at P95. Which TWO conclusions are justified?<\/p>",
    "options": {
      "A": "<p>Release X because its mean completion is lower and the P95 requirement can be interpreted as an average.<\/p>",
      "B": "<p>Y is the supported release candidate because it meets both the accuracy floor and the P95 latency ceiling, despite its slower mean.<\/p>",
      "C": "<p>Redefine the P95 ceiling above 4.2 seconds after observing X so its higher accuracy can qualify.<\/p>",
      "D": "<p>Stream X and count first-token time as completion, even though the requirement measures the finished summary.<\/p>",
      "E": "<p>Average X and Y together so the combined P95 falls between their reported percentiles.<\/p>",
      "F": "<p>For further optimization, keep the accuracy and P95 gates, test controlled variants on the same transcript-length mix, and inspect the slow-tail distribution rather than only the mean.<\/p>"
    },
    "answer": [
      "B",
      "F"
    ],
    "explanation": "<p>Mục tiêu vận hành là P95 completion, không phải mean. X có trung bình nhanh và accuracy nhỉnh hơn nhưng trượt trần đuôi chậm. Y là cấu hình duy nhất vượt cả hai cổng. Tối ưu tiếp phải giữ cùng hỗn hợp độ dài transcript, sàn accuracy và chỉ số P95, không được đổi sang TTFT hay trung bình.<\/p>"
  },
  {
    "id": "MOCK-119",
    "set": 2,
    "number": 56,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An industrial-maintenance workflow extracts a machine identifier, retrieves two required manuals, and then synthesizes a repair plan. A high-effort capable configuration at every stage reaches 97% final accuracy but takes 18 seconds at P95 against a 12-second SLA. Stage evaluations show that a faster configuration matches identifier and lookup-selection quality, while a staged candidate using the capable configuration only for final synthesis finishes in 10.5 seconds. The faster configuration reaches only 89% on synthesis; the capable configuration reaches the required 96%. A plan must not be issued if either lookup fails. Which configuration is strongest?<\/p>",
    "options": {
      "A": "<p>Use the capable high-effort configuration sequentially at every stage because final accuracy is the only meaningful requirement.<\/p>",
      "B": "<p>Use the faster configuration for the entire workflow because it satisfies the extraction and lookup-selection evaluations.<\/p>",
      "C": "<p>Use the faster configuration for identifier and lookup planning, use the capable configuration for final synthesis only after both lookups succeed, and evaluate stage, failure, and end-to-end metrics.<\/p>",
      "D": "<p>Start final synthesis as soon as the first manual returns and append the second lookup later if it becomes available.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Bằng chứng ủng hộ cấu hình riêng theo từng stage. Cấu hình nhanh đủ cho trích mã và lập kế hoạch lookup; cấu hình mạnh dành cho tổng hợp cuối vì chỉ nó đạt repair accuracy. Tổng hợp chỉ bắt đầu sau khi cả hai kết quả cần thiết thành công; mọi metric stage, end-to-end, lỗi dependency và P95 phải nằm trong cổng đánh giá.<\/p>"
  },
  {
    "id": "MOCK-120",
    "set": 2,
    "number": 57,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An incident-classification service must return a short response containing every required field. To reduce P95 completion time, the team lowered `max_tokens`; latency improved, but 6% of responses now end mid-field and fail validation. Generation time, not input processing, remains the dominant latency component. What is the best next change?<\/p>",
    "options": {
      "A": "<p>Accept truncated responses when their first field is correct because P95 latency has improved.<\/p>",
      "B": "<p>Increase temperature so the model is more likely to finish the required fields early.<\/p>",
      "C": "<p>Add prompt caching to the unique incident body and leave the truncating output limit unchanged.<\/p>",
      "D": "<p>Remove nonessential prose from the response contract, set the output limit with measured completion headroom, validate all required fields, and remeasure latency and accuracy.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Giới hạn output cứng là cách kiểm soát độ trễ thô và dữ liệu truncation cho thấy nó thấp hơn độ dài hợp lệ. Trước hết loại văn xuôi thừa, sau đó đặt giới hạn có headroom từ phân bố phản hồi hợp lệ và giữ validation từng trường làm cổng. Phải đo lại latency lẫn accuracy.<\/p>"
  },
  {
    "id": "MOCK-121",
    "set": 2,
    "number": 58,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A financial-analysis service has research-preview access and uses a fast-mode-supported Claude Opus model on the Claude API with an evaluated high-effort configuration and fixed prompt. Accuracy passes, but output-dominated P95 latency is 16 seconds against a 9-second peak-hours target. The organization can fund premium fast mode only for the interactive peak cohort; overnight reports may take longer. The prompt, effort, and model may not change until a separate validation cycle. Which THREE steps form the strongest release plan?<\/p>",
    "options": {
      "A": "<p>Enable fast mode for both interactive and overnight reports because using the same model removes the need for a separate premium-cost gate.<\/p>",
      "B": "<p>Use fast mode for the peak cohort and rely only on default SDK retries after rate limits, treating eventual success as proof that the 9-second SLA holds.<\/p>",
      "C": "<p>Run a controlled fast-mode comparison on the same peak workload, verifying report accuracy and measuring P95 completion rather than assuming the advertised speedup meets the SLA.<\/p>",
      "D": "<p>If the comparison passes, enable fast mode only for the interactive peak cohort and retain the validated standard mode for overnight reports.<\/p>",
      "E": "<p>Monitor accuracy, P95 completion, `usage.speed`, premium cost, and fast capacity errors; test retry versus standard-speed fallback, including its cache miss, and define rollback gates.<\/p>",
      "F": "<p>On any fast-mode rate limit, retry immediately at standard speed and assume the fast-mode cache remains warm and the 9-second target still holds.<\/p>"
    },
    "answer": [
      "C",
      "D",
      "E"
    ],
    "explanation": "<p>Fast mode chạy Claude Opus được hỗ trợ với output nhanh hơn nhưng giá cao; nhóm vẫn phải kiểm thử workload báo cáo rủi ro và giữ accuracy là cổng cứng. Nếu đạt, chỉ dùng fast mode cho cohort tương tác giờ cao điểm để đáp ứng 9 giây, còn batch đêm dùng chuẩn. Cần theo dõi `usage.speed`, P95, chất lượng, chi phí và lỗi capacity.<\/p>"
  },
  {
    "id": "MOCK-122",
    "set": 2,
    "number": 59,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A contract-review assistant produces correct complete analyses in 8 seconds. Users need visible progress within 1 second, but a downstream workflow may act only after the complete response passes citation and field validation. The team does not need to reduce total generation time in this iteration. Which configuration best meets the actual latency requirement?<\/p>",
    "options": {
      "A": "<p>Stream incremental output to the interface, measure TTFT and completion separately, and keep downstream actions blocked until the final response validates.<\/p>",
      "B": "<p>Execute downstream actions as soon as the first streamed sentence appears because streaming implies the response is complete.<\/p>",
      "C": "<p>Disable validation so the workflow can act before the 8-second response finishes.<\/p>",
      "D": "<p>Report only total completion latency because time to first visible output is not a distinct metric.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Yêu cầu là hiển thị tiến độ đầu tiên sớm hơn, không phải hoàn tất nhanh hơn. Streaming giảm cảm giác chờ và TTFT dù toàn bộ vẫn mất 8 giây. Tích hợp phải tách nội dung tạm hiển thị khỏi kết quả đã validation dùng cho hành động, đồng thời báo cả TTFT và completion latency.<\/p>"
  },
  {
    "id": "MOCK-123",
    "set": 2,
    "number": 60,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A safety-triage team changes the model, shortens the prompt, and lowers the output limit in one release. Average latency improves, but accuracy drops on rare high-risk cases. The prior system had no recorded TTFT or slice-specific baseline, so the team cannot attribute the regression. What is the best recovery plan?<\/p>",
    "options": {
      "A": "<p>Keep the release because average latency improved and rare cases contribute little to the aggregate score.<\/p>",
      "B": "<p>Restore the known accurate configuration, establish TTFT, completion, overall, and high-risk-slice baselines, then change and evaluate one latency lever at a time.<\/p>",
      "C": "<p>Increase the output limit while retaining the new model and prompt, then assume any recovered accuracy came from the limit.<\/p>",
      "D": "<p>Optimize latency further before defining quality criteria so the team can discover the fastest possible configuration.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Nhiều thay đổi cùng lúc và thiếu baseline khiến không thể quy nguyên nhân suy giảm. Cần quay lại cấu hình từng đạt chất lượng, xác định accuracy tổng thể và lát cắt quan trọng cùng TTFT, completion, rồi thử từng đòn bẩy latency trên dữ liệu đại diện. Cách này bảo vệ yêu cầu rủi ro cao và tạo bằng chứng cho từng đánh đổi.<\/p>"
  },
  {
    "id": "MOCK-124",
    "set": 2,
    "number": 61,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A parcel-claims assistant calls Claude, an inventory service, and a refund service. The Claude API dashboard shows 99.7% successful responses, yet 8% of customers report that claims never complete. Each component has separate logs, and the team cannot tell whether a failure occurred during generation, inventory lookup, refund execution, or UI delivery. Which observability change best addresses the gap?<\/p>",
    "options": {
      "A": "<p>Alert only when the Claude API&#39;s organization-wide HTTP error rate exceeds 1%, because provider success represents workflow success.<\/p>",
      "B": "<p>Store only the complete prompt and response for failed sessions, then have operators infer the failed component manually.<\/p>",
      "C": "<p>Propagate an application trace ID through every stage; record the Claude request-id, attempt, tool-stage result, terminal workflow state, and customer-visible completion against that trace.<\/p>",
      "D": "<p>Map every inventory or refund failure to an Anthropic overloaded_error so all failures share one dashboard category.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Tính khả dụng nhà cung cấp chỉ là một lớp. Một application trace chung phải nối request-id Claude, số lần thử, kết quả từng stage tool và kết quả khách hàng thực thấy. Nhờ vậy phân biệt lỗi Claude API với lỗi tool hoặc giao hàng và không coi HTTP success là hoàn tất nghiệp vụ.<\/p>"
  },
  {
    "id": "MOCK-125",
    "set": 2,
    "number": 62,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A batch document pipeline shows a ten-minute spike in cache-creation and output tokens in the organization Usage report, although the number of submitted jobs is unchanged. A job can retry one page or repeat the synthesis stage, but current logs store only the job ID and final success. Which monitoring change best distinguishes cache misses, duplicate attempts, and longer outputs?<\/p>",
    "options": {
      "A": "<p>Divide the organization token total by the number of successful jobs and attribute the same average to every page and stage.<\/p>",
      "B": "<p>Record only the final job latency, because a successful terminal state proves that no intermediate stage was retried.<\/p>",
      "C": "<p>Query the Cost API for a request-level list containing each page, stage, cache event, and retry reason.<\/p>",
      "D": "<p>For every Claude attempt, record root job, page, stage, prompt version, retry reason, outcome, and response usage fields for uncached input, cache creation, cache reads, and output; aggregate by minute and reconcile with the Usage report&#39;s key, workspace, and model buckets.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Usage API có token theo thời gian và chiều tổ chức nhưng không biết page, stage hay chuỗi retry của ứng dụng. Usage từng lần gọi phải nối với root job, stage, prompt version và lý do retry để phân biệt call lặp, cache và output dài. Đối chiếu tổng này với bucket Usage tương ứng giúp phát hiện telemetry thiếu hoặc đếm đôi.<\/p>"
  },
  {
    "id": "MOCK-126",
    "set": 2,
    "number": 63,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A support platform receives 429 responses during short campaign bursts even though its hourly average request rate is below the published limit. A recent prompt-cache change may also have shifted token consumption. Which THREE monitoring and response measures best diagnose and contain the issue?<\/p>",
    "options": {
      "A": "<p>Capture RPM, ITPM, and OTPM headroom together with the remaining, reset, and retry-after response headers by model.<\/p>",
      "B": "<p>Use only the monthly spend total, because remaining budget determines whether a short burst receives a 429.<\/p>",
      "C": "<p>Track uncached input, cache creation, cache reads, output tokens, and cache rate by model and workload.<\/p>",
      "D": "<p>Immediately retry every 429 in parallel so the next replenishment window is fully utilized.<\/p>",
      "E": "<p>Infer capacity solely from hourly average RPM and omit shorter time windows.<\/p>",
      "F": "<p>Graph short-window peaks, pace traffic and ramp-ups, and use bounded backoff that honors retry-after while measuring retry volume.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "F"
    ],
    "explanation": "<p>Trung bình có thể che việc chạm giới hạn trong cửa sổ ngắn. Cần headroom cho cả ba chiều rate limit của Messages API, header phản hồi giới hạn và token field có cache để biết request, uncached input, cache creation hay output đang nghẽn. Biểu đồ cửa sổ ngắn và pacing giới hạn tuân `retry-after` tránh retry storm.<\/p>"
  },
  {
    "id": "MOCK-127",
    "set": 3,
    "number": 1,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>After an SDK update, a production dashboard reports almost no Claude API errors even while users see more failures. The collector groups errors only by exact English message text and discards messages it does not recognize; it also omits request IDs. Which change best restores reliable monitoring?<\/p>",
    "options": {
      "A": "<p>Add every currently observed message string to a fixed allowlist and continue dropping any future text.<\/p>",
      "B": "<p>Map every unmatched response to api_error so a single provider-failure chart remains stable.<\/p>",
      "C": "<p>Classify by HTTP status and structured error type or typed SDK exception, preserve an explicit unknown bucket, and correlate the request-id and terminal application outcome without matching human-readable messages.<\/p>",
      "D": "<p>Remove application error telemetry and rely on customers to provide a request ID when opening a support ticket.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Claude API cung cấp status và error type có cấu trúc; SDK chính thức có typed exception. Monitoring nên tổng hợp trường máy đọc được thay vì câu chữ message. Vì loại lỗi có thể mở rộng, phải giữ bucket unknown hiển thị. Ghi request-id và kết quả cuối của ứng dụng hỗ trợ cả xu hướng lẫn điều tra cụ thể.<\/p>"
  },
  {
    "id": "MOCK-128",
    "set": 3,
    "number": 2,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A ticket-resolution workflow calls Claude and then two side-effecting services. During a provider overload, the SDK retries transient Claude failures while the application also restarts the entire workflow after any timeout. A downstream service occasionally times out after completing its action. Request volume triples and some customers receive duplicate updates. Which response best supports diagnosis and safe recovery?<\/p>",
    "options": {
      "A": "<p>Increase both SDK and application retry counts, then alert only if the final workflow still fails.<\/p>",
      "B": "<p>Disable all retries permanently and classify authentication, rate-limit, overload, and downstream timeouts as one availability error.<\/p>",
      "C": "<p>Track only Anthropic request-ids because they uniquely identify the downstream service actions as well.<\/p>",
      "D": "<p>Correlate the original workflow, each Claude request-id, retry attempt, and downstream operation; classify failures by stage and error type; remove overlapping whole-workflow retries, honor bounded transient backoff, and prevent replay of an already completed side effect.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Sự cố trải qua retry nhà cung cấp, retry ứng dụng và trạng thái hoàn tất phía sau chưa rõ. Một correlation key workflow cùng request ID, attempt, stage outcome, error type sẽ lộ đường khuếch đại. Recovery phải giới hạn retry transient, loại retry chồng và không replay side effect đã xong; lỗi auth hay request không xử lý như 429/5xx.<\/p>"
  },
  {
    "id": "MOCK-129",
    "set": 3,
    "number": 3,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A research assistant streams Claude responses and then validates citations before enabling export. Its dashboard counts the initial HTTP 200 as success. Users report partial answers, while logs show both mid-stream error events and client disconnects; some completed streams later fail citation validation. Which THREE changes best measure the production outcome?<\/p>",
    "options": {
      "A": "<p>Continue treating the initial HTTP 200 as completion because streaming errors use the same initial status.<\/p>",
      "B": "<p>Record the terminal stream outcome, mid-stream error event, client disconnect, and whether a complete message was assembled.<\/p>",
      "C": "<p>Convert every mid-stream event into invalid_request_error and instruct users to rewrite their input.<\/p>",
      "D": "<p>Correlate the application trace, Claude request-id, stream attempt, citation-validation result, export state, and user-visible completion.<\/p>",
      "E": "<p>Monitor TTFT, terminal completion latency, partial-delivery rate, validation pass rate, and quality by representative workflow slices.<\/p>",
      "F": "<p>Automatically replay every failed stream without recording an attempt or terminal state, and count any retry start as recovery.<\/p>"
    },
    "answer": [
      "B",
      "D",
      "E"
    ],
    "explanation": "<p>Streaming có nhiều mốc: chấp nhận, token đầu, trạng thái stream cuối, ghép đủ, validation và giao người dùng. SSE error có thể đến sau HTTP 200 nên dashboard phải quan sát terminal stream và client state. Nối các event với request-id, validation, export và lát cắt chất lượng tránh báo phản hồi thiếu hoặc sai là thành công.<\/p>"
  },
  {
    "id": "MOCK-130",
    "set": 3,
    "number": 4,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>Before launching three business-unit assistants, a platform team must support monthly chargeback, separate capacity guardrails, and service-owner access without giving application teams an organization Admin API key. The units have independent budgets and release schedules. Which observability boundary is most appropriate?<\/p>",
    "options": {
      "A": "<p>Create a workspace per business-unit cost owner, issue service-specific API keys inside it, set appropriate workspace limits, and centralize Admin API reports grouped by workspace and model for chargeback.<\/p>",
      "B": "<p>Keep every unit in the default workspace and place a business-unit name in the prompt, expecting the Cost API to group charges by that prompt field.<\/p>",
      "C": "<p>Give each service owner the organization Admin API key so the owner can create an unrestricted custom report and modify shared monitoring.<\/p>",
      "D": "<p>Create one API key per unit in a shared workspace, then assume those keys also isolate each unit&#39;s rate-limit capacity from the others.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Vì chủ chi phí, ngân sách và lịch phát hành độc lập, workspace là đơn vị ổn định cho báo cáo và giới hạn cấu hình. Key theo dịch vụ tạo quy kết chi tiết hơn. Quy trình finance/platform trung tâm dùng Admin API để nhóm usage và cost mà không phát credential đặc quyền cho team ứng dụng.<\/p>"
  },
  {
    "id": "MOCK-131",
    "set": 3,
    "number": 5,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An enterprise assistant has twenty independent alerts for API latency, token usage, tool timeouts, and user complaints. On-call engineers receive frequent pages but still cannot tell which release or workflow violates the customer SLA or what action to take. Which redesign is best?<\/p>",
    "options": {
      "A": "<p>Define customer completion and P95 latency SLOs, but diagnose breaches only from provider availability and omit tool-stage and release dimensions.<\/p>",
      "B": "<p>Define customer-facing success and latency SLOs, then link them to release- and workflow-sliced quality, stage/error-type failures, rate-limit headroom, token/cost signals, correlated request IDs, and threshold-specific runbooks.<\/p>",
      "C": "<p>Keep stage-specific error, request-ID, rate-headroom, and usage dashboards, and page on each component threshold without linking them to customer outcomes or response runbooks.<\/p>",
      "D": "<p>Combine customer outcome and component metrics into one daily health score, but remove release and workflow slices and use one universal escalation threshold.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Giám sát quy mô lớn hiệu quả bắt đầu từ kết quả khách hàng đo được rồi nối tới các lớp chẩn đoán. Quality và completion cho biết tác động; lỗi stage, request ID, rate-limit headroom tìm nguyên nhân; usage và cost phản ánh capacity, tài chính. Chiều release/workflow cùng threshold và runbook biến cảnh báo thành hành động.<\/p>"
  },
  {
    "id": "MOCK-132",
    "set": 3,
    "number": 6,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A policy assistant serves a manual archive that is far larger than the available context and latency budgets. It indexes each file by cutting every 400 tokens. A condition at the end of one chunk often depends on a heading, table row, or exception at the start of the next, so boundary-crossing questions fail. What is the best ingestion change?<\/p>",
    "options": {
      "A": "<p>Split on logical section, list, and table boundaries where possible, add limited overlap only where a dependency crosses a split, and evaluate representative boundary-crossing questions.<\/p>",
      "B": "<p>Reduce every chunk to 50 tokens without overlap so each index entry contains only one sentence.<\/p>",
      "C": "<p>Keep every fixed boundary and always retrieve the immediately preceding and following chunk for every match.<\/p>",
      "D": "<p>Return the entire archive for every query so no heading, table row, or exception can be split from its dependency.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Lỗi do ranh giới chia tùy tiện, không phải model sinh. Chunking nên theo section, danh sách, bảng có nghĩa và overlap giới hạn khi điều kiện phụ thuộc qua biên. Không áp overlap cho mọi kết quả. Bộ đánh giá retrieval chứa đúng ca biên quan sát được sẽ chứng minh cách chia mới giữ quan hệ cần thiết.<\/p>"
  },
  {
    "id": "MOCK-133",
    "set": 3,
    "number": 7,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A museum archive must answer both exact accession queries such as `M-1847` and natural-language descriptions of an object&#39;s material, period, or subject. Embedding-only retrieval finds thematically similar objects but misses some accession strings. Which THREE pipeline elements best address both query patterns?<\/p>",
    "options": {
      "A": "<p>Delete accession strings before indexing so semantic similarity is not influenced by rare catalog values.<\/p>",
      "B": "<p>Build a BM25-style lexical index over catalog chunks to retrieve exact accession strings and curatorial terms.<\/p>",
      "C": "<p>Use only lexical retrieval and require visitors to know the archive&#39;s exact curatorial wording.<\/p>",
      "D": "<p>Retain semantic embeddings for descriptions whose wording differs from the catalog.<\/p>",
      "E": "<p>Concatenate every lexical and semantic result without deduplication or a context limit.<\/p>",
      "F": "<p>Fuse and deduplicate lexical and semantic candidates, then evaluate accession and descriptive query sets separately.<\/p>"
    },
    "answer": [
      "B",
      "D",
      "F"
    ],
    "explanation": "<p>Kho có hai kiểu truy vấn bổ sung nhau. BM25 khớp chính xác accession string hoặc thuật ngữ; embedding tìm đối tượng mô tả bằng cách diễn đạt khác. Rank fusion và dedup tạo tập ứng viên kết hợp có kiểm soát. Đánh giá riêng accession và mô tả tránh cải thiện một mode che suy giảm mode kia.<\/p>"
  },
  {
    "id": "MOCK-134",
    "set": 3,
    "number": 8,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A large archive of committee minutes is already split at agenda-item boundaries, but many chunks begin with phrases such as “the proposal” or “it was deferred” and omit the committee, meeting date, and referenced motion. The team wants Contextual Retrieval without adding a Claude call to every user query. Which implementation is best?<\/p>",
    "options": {
      "A": "<p>At query time, ask Claude to infer the likely committee and date from the writing style of each retrieved chunk.<\/p>",
      "B": "<p>At ingestion, give Claude the full minutes, stable committee/date/agenda metadata, and target chunk; generate concise chunk-specific context, prepend it before semantic and lexical indexing, and retain the original chunk.<\/p>",
      "C": "<p>Generate one archive-wide summary and attach the identical text to every agenda item.<\/p>",
      "D": "<p>Index only the generated context and discard the original minutes text to reduce storage.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Chunk đã theo agenda hợp lý nhưng câu chữ cục bộ thiếu danh tính. Khi ingestion, contextualizer cần toàn bộ biên bản, metadata cuộc họp ổn định và chunk đích để thêm committee, ngày, agenda, motion có căn cứ. Index context này cùng chunk gốc ở cả hai đường retrieval sẽ tăng khả năng tìm mà không contextualize mỗi query.<\/p>"
  },
  {
    "id": "MOCK-135",
    "set": 3,
    "number": 9,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A laboratory-procedure RAG system creates boundary-aware chunks, then prepends contextual descriptions. For long table-heavy procedures, the resulting text exceeds the embedding model&#39;s input limit and the final safety exceptions are truncated, while the lexical index still contains them. Retrieval becomes inconsistent across the two indexes, and the affected procedures cannot be omitted. Which repair is best?<\/p>",
    "options": {
      "A": "<p>Raise top-K in both indexes and assume another vector result will contain the truncated safety exception.<\/p>",
      "B": "<p>Keep the mismatch and route all table-heavy queries to lexical search without measuring semantic retrieval quality.<\/p>",
      "C": "<p>Measure the final contextualized input against the embedding limit, re-split or shorten context while keeping each safety condition intact, rebuild both indexes from the same versioned chunk representation, and re-run retrieval plus answer evals before replacing the index.<\/p>",
      "D": "<p>Apply the same fixed suffix truncation to the lexical index so both indexes omit identical safety exceptions.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Lỗi xảy ra trước retrieval: văn bản contextualized dài hơn input embedding và mất hậu tố an toàn bắt buộc. Pipeline phải đo representation sau contextualization, bảo toàn điều kiện an toàn khi chia lại hoặc giảm context, rồi rebuild cả hai index từ cùng version. Retrieval và answer eval xác nhận sửa đủ trước khi bật index mới.<\/p>"
  },
  {
    "id": "MOCK-136",
    "set": 3,
    "number": 10,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A research archive regenerates contextualized chunks and embeddings on every query, causing repeated latency and cost. Source documents change only during scheduled updates. Which TWO ingestion changes remove the repeated work? Choose 2.<\/p>",
    "options": {
      "A": "<p>Generate and persist contextualized chunks and embeddings during ingestion for query-time retrieval.<\/p>",
      "B": "<p>Keep regenerating at query time and add more concurrent workers.<\/p>",
      "C": "<p>Persist embeddings but rebuild every document whenever one source changes.<\/p>",
      "D": "<p>Replace every chunk with one archive-wide summary before embedding.<\/p>",
      "E": "<p>Key artifacts to source versions and rebuild only documents changed in the scheduled update.<\/p>",
      "F": "<p>Delete original chunks after contextualization so only generated text needs storage.<\/p>"
    },
    "answer": [
      "A",
      "E"
    ],
    "explanation": "<p>A chuyển contextualization và embedding sang ingestion để query tái dùng artifact đã lưu. E gắn artifact với version nguồn và chỉ rebuild tài liệu thay đổi. Tăng worker query, rebuild toàn bộ, một summary chung hay xóa chunk nguồn không loại công việc lặp một cách an toàn.<\/p>"
  },
  {
    "id": "MOCK-137",
    "set": 3,
    "number": 11,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A benefits assistant raises final top-K from 6 to 40. Golden-chunk retrieval improves, but answer accuracy falls and P95 latency exceeds its target because many similar plan documents enter the prompt. What is the best next step?<\/p>",
    "options": {
      "A": "<p>Keep top-K at 40 because retrieval recall is the only valid RAG metric.<\/p>",
      "B": "<p>Return to top-K 6 permanently without testing whether reranking can preserve the newly retrieved relevant chunks.<\/p>",
      "C": "<p>Remove the answer-quality gate and have users choose which of the 40 chunks is authoritative.<\/p>",
      "D": "<p>Retrieve a broader candidate set, rerank it to a smaller final set, and tune both depths on representative queries using retrieval Pass@k, answer quality, and P95 latency gates.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Lấy nhiều chunk tăng khả năng có bằng chứng nhưng cũng tăng nhiễu, độ trễ và chi phí. Nên lấy candidate set rộng rồi rerank để final context vẫn nhỏ. Candidate depth, top-K cuối và reranker phải chọn theo coverage retrieval, chất lượng câu trả lời và latency trên phân bố query thật.<\/p>"
  },
  {
    "id": "MOCK-138",
    "set": 3,
    "number": 12,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A catalog assistant retrieves the wrong campus-year passage, while the same model answers correctly when engineers provide the right passage. Which TWO actions best isolate and improve retrieval? Choose 2.<\/p>",
    "options": {
      "A": "<p>Change the generation model first, because any wrong end-to-end answer proves that the model lacks reasoning capability.<\/p>",
      "B": "<p>Build a retrieval eval with golden chunks and campus-year edge cases, and report Pass@k before generation.<\/p>",
      "C": "<p>Evaluate only the final prose with one aggregate score and omit retrieved chunk IDs, campus, and year metadata.<\/p>",
      "D": "<p>On the same frozen queries, compare the current index with one candidate that adds source-grounded campus and year identity to otherwise unchanged chunks, recording retrieved chunk IDs.<\/p>",
      "E": "<p>Keep only a golden-context generation test and treat a passing answer as proof that retrieval is fixed.<\/p>",
      "F": "<p>Mark every passage naming the course as relevant regardless of campus or year so Pass@k increases.<\/p>"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "<p>Kết quả golden passage đã tách generation khỏi lỗi retrieval quan sát được. B đo retrieval trên ca campus-year; D so sánh candidate metadata có căn cứ trên frozen query và giữ ID đã lấy. Test chỉ generation hoặc chỉ điểm answer tổng không chứng minh retrieval đã tốt hơn.<\/p>"
  },
  {
    "id": "MOCK-139",
    "set": 3,
    "number": 13,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A compliance assistant passes each retrieved policy as one very long search-result text block. Citations are valid but quote entire multi-section passages, making review difficult. A proposed change also enables citations on only some results, which causes request validation failures. What is the best integration change?<\/p>",
    "options": {
      "A": "<p>Split each result&#39;s content into smaller logical text blocks for finer citation boundaries, and enable citations consistently on every search result in the request.<\/p>",
      "B": "<p>Keep one multi-section text block per policy and shorten only the displayed citation after the response.<\/p>",
      "C": "<p>Enable citations only for high-scoring results and disable them for lower-scoring results in the same request.<\/p>",
      "D": "<p>Place every sentence in its own search result with a new source identifier, regardless of the original policy structure.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Với citation kết quả tìm kiếm, text block là đơn vị nhỏ nhất có thể trích dẫn. Chia kết quả dài thành block logic giúp reviewer xem đoạn hẹp hơn mà không tạo nguồn giả. Citation config áp dụng toàn bộ search result trong cùng request, nên mọi result phải cùng bật; cắt hiển thị hay trộn setting không sửa cấu trúc input.<\/p>"
  },
  {
    "id": "MOCK-140",
    "set": 3,
    "number": 14,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An employee onboarding assistant answers questions that often require connecting rules from several parts of an 18-page handbook. The handbook changes quarterly, has been verified to fit comfortably with the conversation in the selected model&#39;s context, and the same version serves thousands of requests. Which retrieval strategy is the best starting point?<\/p>",
    "options": {
      "A": "<p>Split the handbook into sentence-level chunks and retrieve one chunk per question to minimize input size.<\/p>",
      "B": "<p>Include the complete versioned handbook as a stable prompt prefix, use prompt caching for repeated requests, and reevaluate the approach if the corpus or conversation grows.<\/p>",
      "C": "<p>Store only an embedding of the entire handbook and ask Claude to reconstruct the relevant policy text from the vector.<\/p>",
      "D": "<p>Query the HR transaction database for every handbook question because fresh tools are always preferable to supplied context.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Chiến lược retrieval phải theo corpus và query thật. Nguồn đầy đủ có version vẫn vừa context với headroom đã test, còn câu hỏi phụ thuộc quan hệ xuyên section, nên đưa toàn bộ handbook là điểm khởi đầu giữ bằng chứng tốt nhất. Stable cached prefix giảm công việc lặp; tăng trưởng, latency, quality và headroom quyết định lúc chuyển RAG.<\/p>"
  },
  {
    "id": "MOCK-141",
    "set": 3,
    "number": 15,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A warehouse assistant must answer questions such as, &quot;How many quarantined units arrived at Site North in the last two hours?&quot; The source of truth is a multi-tenant relational system with millions of frequently updated rows. Users may access only assigned sites, and the answer needs a count plus the matching lot identifiers. Which THREE design choices best fit this data shape and query pattern?<\/p>",
    "options": {
      "A": "<p>Expose a narrowly defined client tool with typed site, status, and time-range inputs rather than asking Claude to emit free-form query text.<\/p>",
      "B": "<p>Embed every database row nightly and use nearest-neighbor search as the authoritative count.<\/p>",
      "C": "<p>Have application code enforce the caller&#39;s site scope and execute the filters and aggregation in the database before returning results.<\/p>",
      "D": "<p>Return the full inventory table to Claude so it can discover any additional pattern without another round trip.<\/p>",
      "E": "<p>Cache one global count for all tenants and let the model estimate each site&#39;s share from prior conversations.<\/p>",
      "F": "<p>Return the authoritative count with paginated permitted lot IDs, query timestamp, and a continuation token, and retrieve subsequent pages until the requested ID set is complete.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "F"
    ],
    "explanation": "<p>Đây là truy vấn cấu trúc chính xác và mới, không phải tìm kiếm ngữ nghĩa. Typed tool hẹp chuyển intent đã xác thực tới ứng dụng; ứng dụng kiểm tra quyền site và để relational source lọc, tổng hợp. Hợp đồng phân trang trả đủ ID kèm thời gian, continuation metadata mà không tải cả bảng một lần.<\/p>"
  },
  {
    "id": "MOCK-142",
    "set": 3,
    "number": 16,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A travel-policy assistant searches 70,000 prose passages. Employees ask, &quot;Can I extend a trip for personal days?&quot; while the policy uses phrases such as &quot;leisure extension&quot; and &quot;combined business-personal itinerary.&quot; Exact identifiers are uncommon. Which retrieval strategy best addresses the dominant query pattern?<\/p>",
    "options": {
      "A": "<p>Use only an exact string match between the employee&#39;s words and the policy passages.<\/p>",
      "B": "<p>Load all passages in every request because corpus size does not affect attention or retrieval precision.<\/p>",
      "C": "<p>Use semantic embeddings to retrieve passages by meaning, then validate retrieval quality on representative employee paraphrases before deployment.<\/p>",
      "D": "<p>Generate one permanent summary of the policy and answer every question from that summary without source retrieval.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Tín hiệu chính là tương đương ý nghĩa dù cách diễn đạt khác nhau trong corpus phi cấu trúc lớn. Semantic embedding phù hợp để đo tương đồng đó. Tuy nhiên vẫn phải đánh giá provider và cấu hình retrieval trên paraphrase thật của lĩnh vực, không mặc nhiên chuyển benchmark chung.<\/p>"
  },
  {
    "id": "MOCK-143",
    "set": 3,
    "number": 17,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A field-service assistant must diagnose equipment using a versioned repair manual and also tell whether the unit is currently under an active safety hold. Manuals change monthly and can be indexed ahead of time; safety holds can change within seconds. The answer must cite the manual and must never infer the live hold state from old text. Which architecture best satisfies the full requirement?<\/p>",
    "options": {
      "A": "<p>Embed nightly exports of manuals and safety holds in one index and use the highest-scoring chunk as both sources of truth.<\/p>",
      "B": "<p>Query the live hold service only and let Claude derive the repair procedure from its training knowledge.<\/p>",
      "C": "<p>Prefetch the entire fleet&#39;s live hold records into every request so no runtime tool is needed.<\/p>",
      "D": "<p>Retrieve the applicable versioned manual passages from a maintained index and call a scoped live-status tool for that unit at runtime, preserving distinct provenance and freshness metadata.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Hai nguồn khác hình dạng và độ mới. Manual có version phù hợp index tài liệu duy trì và search result trích dẫn được. Safety hold là trạng thái ngoài biến động nên phải qua runtime tool giới hạn. Kết hợp cả hai giữ căn cứ manual mà không coi index cũ là nguồn vận hành hiện tại.<\/p>"
  },
  {
    "id": "MOCK-144",
    "set": 3,
    "number": 18,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A company must select an embedding provider for English and Japanese research text with rare domain terms, while meeting an interactive latency target. Which TWO actions best support the choice? Choose 2.<\/p>",
    "options": {
      "A": "<p>Build a bilingual retrieval evaluation with rare terms and tenant abbreviations, and compare each provider&#39;s domain fit on it.<\/p>",
      "B": "<p>Measure embedding lookup and end-to-end retrieval latency at expected corpus size and concurrency.<\/p>",
      "C": "<p>Choose the model with the largest published dimension without running company-specific retrieval tests.<\/p>",
      "D": "<p>Assume Anthropic supplies a native embedding model that must be used with Claude.<\/p>",
      "E": "<p>Choose the provider offering the most customization options before running the company evaluation.<\/p>",
      "F": "<p>Evaluate only final answer fluency because retrieval misses cannot be distinguished from generation quality.<\/p>"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "<p>A so provider trên dữ liệu song ngữ và từ hiếm đại diện; B đo latency ở quy mô dự kiến. Dimension công bố, giả định embedding Anthropic, số tùy chỉnh hay độ trôi chảy cuối không chứng minh chất lượng retrieval và độ phù hợp dịch vụ.<\/p>"
  },
  {
    "id": "MOCK-145",
    "set": 3,
    "number": 19,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An operations assistant receives a list of 120 permitted incident IDs and must report which incidents are currently blocked. The internal service offers a bulk-status endpoint accepting at most 50 IDs per call and returns per-ID status or error. One-call-per-ID retrieval exceeds the latency budget, while returning unrelated incidents is prohibited. Which retrieval design is best?<\/p>",
    "options": {
      "A": "<p>Expose a bounded typed batch tool, authorize and partition the permitted IDs into endpoint-sized groups, execute the groups with controlled concurrency, and return per-ID status, error, and observation time.<\/p>",
      "B": "<p>Invoke the single-incident endpoint 120 times sequentially so each result reaches Claude before the next lookup begins.<\/p>",
      "C": "<p>Request all open incidents once and let Claude select the 120 IDs after the full result enters context.<\/p>",
      "D": "<p>Send all 120 IDs in one call and treat an endpoint rejection as meaning every incident is unblocked.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Đơn vị retrieval là tập khóa chính xác giới hạn và nguồn có bulk contract. Chia 120 ID đã cấp quyền thành nhóm tối đa 50, chạy concurrency kiểm soát để giảm latency mà không lấy thừa. Status, error, observation time từng ID giữ semantics lỗi cục bộ và độ mới; request bị từ chối không được đổi thành trạng thái nghiệp vụ.<\/p>"
  },
  {
    "id": "MOCK-146",
    "set": 3,
    "number": 20,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>An investigation agent searches a repository too large to load at once. A service symptom identifies no file in advance, and each result changes the next search. Which TWO retrieval behaviors best preserve a focused evidence path? Choose 2.<\/p>",
    "options": {
      "A": "<p>Flatten every file into one prompt in an arbitrary order so the model sees all possible evidence at once.<\/p>",
      "B": "<p>Run one fixed semantic query at the start and forbid follow-up retrieval so every investigation has identical latency.<\/p>",
      "C": "<p>Begin with lightweight identifiers and repository metadata such as paths, names, and hierarchy to narrow the likely area.<\/p>",
      "D": "<p>Search and read iteratively, letting each result refine the next query while keeping concise notes that link claims to files.<\/p>",
      "E": "<p>Discard file paths after reading because source location is irrelevant once content enters the model context.<\/p>",
      "F": "<p>Keep concise file-linked notes, but perform no follow-up retrieval after the initial metadata scan.<\/p>"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "<p>C dùng cấu trúc repository nhẹ để thu hẹp vùng đầu; D lần theo dependency từng bước và giữ evidence path ngắn. Nạp cả repository, dùng một query cố định, bỏ path hoặc ghi chú mà không retrieval tiếp không phù hợp workflow chưa biết file.<\/p>"
  },
  {
    "id": "MOCK-147",
    "set": 3,
    "number": 21,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A support assistant must find relevant resolutions in a large archive of narrative case notes. Every case has authoritative structured metadata for tenant, product family, and software major version. Users describe symptoms in varied language, but results must never cross tenant boundaries or suggest a resolution from an incompatible major version. What is the best retrieval strategy?<\/p>",
    "options": {
      "A": "<p>Run semantic search over the entire archive, then ask Claude to discard cases that appear to belong to another tenant or version.<\/p>",
      "B": "<p>Enforce tenant, product-family, and major-version constraints from structured metadata first, then rank the permitted case notes by semantic similarity to the described symptom.<\/p>",
      "C": "<p>Concatenate metadata into each note and rely on embedding similarity alone to enforce tenant isolation and version compatibility.<\/p>",
      "D": "<p>Filter only by tenant, return all remaining cases to Claude, and let it infer product and version compatibility from prose.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Kho này có ràng buộc cứng và câu hỏi liên quan mềm. Field tenant, compatibility phải lọc xác định trước khi nội dung vào candidate set. Trong tập được phép và tương thích, embedding xếp narrative có triệu chứng diễn đạt khác. Dùng embedding làm authorization hoặc nạp cả tenant archive là nhầm relevance với control.<\/p>"
  },
  {
    "id": "MOCK-148",
    "set": 3,
    "number": 22,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A CI job must inspect each repository&#39;s changed files for violations of an internal dependency rule and emit schema-valid JSON before the merge gate continues. Every runner is ephemeral, the job is one-shot, only repository reads are permitted, and ambient developer settings must not affect the result. Which integration mechanism is the best fit?<\/p>",
    "options": {
      "A": "<p>Start an interactive Claude Code session and rely on each runner&#39;s discovered project and user configuration.<\/p>",
      "B": "<p>Deploy a persistent Managed Agent with an event history for every individual merge check.<\/p>",
      "C": "<p>Run Claude Code non-interactively with `--bare -p`, explicitly allow read-only tools, and require the expected JSON schema.<\/p>",
      "D": "<p>Create a remote MCP server solely to pass the repository diff as a tool result.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Workload là bước automation giới hạn trên runner tạm, nên Claude Code không tương tác là bề mặt phù hợp. `--bare` ngăn hook, plugin, MCP config, memory và setting môi trường làm đổi hành vi nếu không truyền rõ. Quyền tool chỉ đọc và output theo schema làm hợp đồng CI quan sát được mà không cần agent lâu dài.<\/p>"
  },
  {
    "id": "MOCK-149",
    "set": 3,
    "number": 23,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>Several Messages API applications need to search the same supplier catalog through a supplier-operated remote MCP server. The server exposes both read and write tools, but this use case is read-only and results vary by the signed-in procurement user. The team does not want to implement a separate MCP client. Which THREE choices best fit the integration?<\/p>",
    "options": {
      "A": "<p>Use the Messages API MCP connector to the trusted remote HTTPS server rather than building a separate MCP client.<\/p>",
      "B": "<p>Configure the MCP toolset with write tools disabled and only the required catalog-search tools enabled.<\/p>",
      "C": "<p>Enable every server tool because the MCP protocol itself prevents Claude from choosing a write operation.<\/p>",
      "D": "<p>Treat the remote server as Anthropic-operated and skip the supplier&#39;s security and data-handling review.<\/p>",
      "E": "<p>Replace the catalog server with an agent-to-agent delegation even though the supplier exposes deterministic search tools, not an autonomous reasoning service.<\/p>",
      "F": "<p>Provide a procurement-user OAuth bearer token scoped for the server request and preserve the caller identity expected by the supplier.<\/p>"
    },
    "answer": [
      "A",
      "B",
      "F"
    ],
    "explanation": "<p>MCP endpoint từ nhà cung cấp phù hợp trực tiếp với connector Messages API khi team không muốn xây MCP client. Tích hợp vẫn phải thu hẹp toolset chỉ còn thao tác đọc cần thiết và xác thực theo phạm vi người dùng mua sắm. Tương thích protocol không chuyển trách nhiệm cho Anthropic hay bỏ đánh giá bảo mật, dữ liệu của supplier.<\/p>"
  },
  {
    "id": "MOCK-150",
    "set": 3,
    "number": 24,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A customer-facing quote widget performs a short synchronous exchange. The application already owns conversation state, UI streaming, authorization, and a proprietary REST endpoint that calculates one quote from validated fields. The product team needs precise control of each turn and error shown to the user. Which integration mechanism is the best fit?<\/p>",
    "options": {
      "A": "<p>Launch `claude -p` as a subprocess for every web request and infer tool calls from its console text.<\/p>",
      "B": "<p>Deploy a persistent multiagent coordinator so one agent can call the single quote endpoint through another agent.<\/p>",
      "C": "<p>Publish a new remote MCP server solely for this widget even though no other client needs a shared protocol surface.<\/p>",
      "D": "<p>Use the Messages API with a typed user-defined client tool whose handler authorizes and calls the existing quote endpoint.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Ứng dụng đã sở hữu trải nghiệm đồng bộ và cần kiểm soát chi tiết. Truy cập Messages API trực tiếp cho phép tạo từng turn, quản lý state, streaming và tool loop. Typed custom tool ánh xạ yêu cầu cấu trúc của Claude tới REST handler có phân quyền sẵn. MCP service, CLI subprocess hay multiagent mới không đáp ứng thêm yêu cầu nào.<\/p>"
  },
  {
    "id": "MOCK-151",
    "set": 3,
    "number": 25,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An infrastructure restoration assistant may work for 30–90 minutes, call several external systems, pause for a human approval before a write, and resume after an asynchronous webhook. Operators need a persistent event history and must inspect or interrupt in-progress work. The team does not want to build and persist the entire agent loop itself. Which primary integration surface is the best fit?<\/p>",
    "options": {
      "A": "<p>Use Managed Agents with stateful sessions and persistent event history, integrating the required tools and approval events.<\/p>",
      "B": "<p>Use one Messages API request and hold the HTTP connection open until every system and human responds.<\/p>",
      "C": "<p>Run a one-shot bare CLI command and treat process stdout as the persistent operational record.<\/p>",
      "D": "<p>Use an MCP server alone, because a tool protocol also supplies the agent loop, session history, approvals, and operator controls.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Ràng buộc quyết định là thời lượng, các lần tạm dừng bất đồng bộ, khả năng tiếp tục, lịch sử sự kiện và quyền điều khiển của vận hành, không chỉ quyền dùng tool. Managed Agents cung cấp phiên tự chủ có trạng thái và lịch sử bền vững. Messages chỉ phù hợp nếu ứng dụng tự xây và lưu vòng lặp, vòng đời mà team không muốn sở hữu.<\/p>"
  },
  {
    "id": "MOCK-152",
    "set": 3,
    "number": 26,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A claims coordinator uses an entitlement API for deterministic coverage facts. For rare disputed cases, it can consult a separately maintained policy-interpretation agent that has a large legal context and restricted research tools. The coordinator remains accountable for the claim decision, and a specialist timeout or unsupported interpretation must not be treated as approval. Which THREE integration choices best separate the tool and agent boundaries?<\/p>",
    "options": {
      "A": "<p>Keep deterministic entitlement lookup as a typed client tool whose application handler authorizes and calls the coverage API.<\/p>",
      "B": "<p>Route every entitlement lookup through the policy agent so the coordinator uses only one integration mechanism.<\/p>",
      "C": "<p>Delegate only the ambiguous interpretation subtask to the specialist agent with a bounded evidence package and an explicit evidence-backed result contract.<\/p>",
      "D": "<p>Give the policy agent the coordinator&#39;s payment and claim-write tools so it can implement its interpretation directly.<\/p>",
      "E": "<p>Treat a successful agent-to-agent response as proof that the caller and claim were authorized.<\/p>",
      "F": "<p>Have the coordinator validate the returned claim identifier, evidence references, and specialist version, and surface timeout or unresolved status separately from an approved decision.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "F"
    ],
    "explanation": "<p>Chọn cơ chế theo ranh giới năng lực. Dữ kiện phạm vi bảo hiểm đến từ hệ thống xác định nên đặt sau typed tool được cấp quyền. Diễn giải chính sách mơ hồ có thể cần specialist agent với reasoning, context và tool giới hạn riêng. Coordinator vẫn phải gắn kết quả đúng claim, kiểm tra nguồn, version và phân biệt timeout hoặc chưa chắc với phê duyệt.<\/p>"
  },
  {
    "id": "MOCK-153",
    "set": 3,
    "number": 27,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A regulated build environment already has an audited MCP server that runs over local STDIO and can read artifacts inside the isolated runner. Network policy prohibits exposing that server publicly. A custom service using the Messages API must invoke those tools. Which integration is appropriate?<\/p>",
    "options": {
      "A": "<p>Configure the Messages API MCP connector with the local STDIO command as its server URL.<\/p>",
      "B": "<p>Run an MCP client beside the service in the isolated runner, adapt the local server&#39;s tools into client-executed Claude tools, and keep execution within the approved boundary.<\/p>",
      "C": "<p>Open a public tunnel to the STDIO server because protocol compatibility overrides the network policy.<\/p>",
      "D": "<p>Replace the deterministic artifact tools with a subagent and ask it to infer artifact contents without execution.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Transport và ranh giới mạng loại connector MCP từ xa trực tiếp vì nó cần URL truy cập được, không nối thẳng STDIO cục bộ. Ứng dụng có thể chạy MCP client trong runner được duyệt, khám phá thao tác cục bộ rồi chuyển chúng vào client-executed tool loop. Cách này giữ server đã audit và artifact trong vùng quản lý.<\/p>"
  },
  {
    "id": "MOCK-154",
    "set": 3,
    "number": 28,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A legal-research application must use a vendor&#39;s remote MCP server in three ways: call search tools, apply vendor-provided MCP prompt templates, and read MCP resources with source metadata. The Messages API MCP connector is attractive, but its direct feature supports tool calls only. The application must preserve all three capabilities and retain explicit error handling. Which THREE implementation choices best satisfy the requirement?<\/p>",
    "options": {
      "A": "<p>Use the direct MCP connector alone and assume unsupported prompts and resources will be inserted automatically as tool results.<\/p>",
      "B": "<p>Implement an MCP client in the application that initializes the server and explicitly lists tools, obtains prompt messages, and reads required resources.<\/p>",
      "C": "<p>Replace the MCP client with an agent-to-agent delegation and ask the other agent to reconstruct unavailable resources from memory.<\/p>",
      "D": "<p>Adapt the MCP tools into client-executed Claude tools and convert retrieved prompt messages and resources into supported Claude message or file forms.<\/p>",
      "E": "<p>Validate converted content, resolve supported resource links as required, and return explicit errors for MCP values the Claude API cannot represent.<\/p>",
      "F": "<p>Invoke the vendor&#39;s CLI interactively and scrape terminal output for prompts, resources, and tool schemas.<\/p>"
    },
    "answer": [
      "B",
      "D",
      "E"
    ],
    "explanation": "<p>Ứng dụng cần cả MCP prompt, resource lẫn tool nên connector chỉ hỗ trợ tool không đủ. Custom MCP client có thể khởi tạo server và gọi từng capability; ứng dụng chuyển tool call vào vòng Claude, prompt và resource vào message/file hỗ trợ. Giá trị không hỗ trợ hoặc resource link phải validation và báo lỗi rõ, không âm thầm bỏ.<\/p>"
  },
  {
    "id": "MOCK-155",
    "set": 3,
    "number": 29,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A team proved a code-analysis workflow with one-shot `claude -p` commands. It now must embed the same agent loop inside a long-lived Python service that handles concurrent requests, uses in-process tool-approval callbacks, and consumes native message objects. Which integration mechanism is the best next step?<\/p>",
    "options": {
      "A": "<p>Continue spawning the CLI and scrape human-readable stdout to reconstruct callbacks and native messages.<\/p>",
      "B": "<p>Publish the CLI as an MCP server, because a tool protocol automatically turns terminal output into native SDK message and lifecycle objects.<\/p>",
      "C": "<p>Integrate the Python Agent SDK package directly and map its native messages and approval callbacks into the service runtime.<\/p>",
      "D": "<p>Deploy a multiagent coordinator even though the workload has one analysis loop and no independent specialist subtasks.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>CLI phù hợp cho proof một lần, nhưng production là dịch vụ nhúng cần hook ứng dụng native. Agent SDK Python/TypeScript là lựa chọn toàn quyền lập trình thay cho `claude -p`, có structured output, callback phê duyệt tool và native message object. Bọc hoặc scrape CLI sẽ tạo lại giao diện con mong manh.<\/p>"
  },
  {
    "id": "MOCK-156",
    "set": 3,
    "number": 30,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A support agent must diagnose a production incident within 90 seconds. It has a short current runbook and service map, but the log store contains millions of lines from many services. Which context strategy best balances response time and diagnostic accuracy?<\/p>",
    "options": {
      "A": "<p>Load the complete log store into the initial context so the agent cannot miss a possible cause.<\/p>",
      "B": "<p>Provide no runbook or service metadata and let the agent discover every dependency through unrestricted searches.<\/p>",
      "C": "<p>Give the agent only a precomputed incident summary and prohibit access to the underlying logs.<\/p>",
      "D": "<p>Load the current runbook and service map up front, then let the agent retrieve narrowly filtered log slices as each hypothesis develops.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Runbook và service map nhỏ, hữu ích rộng; log thô lớn và chỉ hữu ích chọn lọc. Nạp tài liệu định hướng trước rồi retrieval bằng chứng đã lọc đúng lúc tránh context khổng lồ mà agent vẫn có chỉ dẫn ban đầu. Độ trễ retrieval có mục tiêu chỉ được chấp nhận khi hỗ trợ chẩn đoán hiện tại.<\/p>"
  },
  {
    "id": "MOCK-157",
    "set": 3,
    "number": 31,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>An environmental research agent searches a century of permit records. Older scans require costly OCR, a request often begins with an uncertain facility name, and the result must state what part of the archive was actually examined. Which THREE measures best support bounded progressive discovery?<\/p>",
    "options": {
      "A": "<p>Use collection, date-range, facility-alias, and scan-status metadata to rank archive branches before opening document contents.<\/p>",
      "B": "<p>OCR every historical scan and place the entire archive in the initial request so search coverage is nominally complete.<\/p>",
      "C": "<p>Inspect compact branch summaries first, then deepen only into branches whose dates, aliases, or references increase relevance.<\/p>",
      "D": "<p>Run one semantic query against the archive and treat its first page of results as complete regardless of unresolved aliases.<\/p>",
      "E": "<p>Track explored and unsearched branches, apply an OCR and retrieval budget, and disclose remaining coverage when the budget is reached.<\/p>",
      "F": "<p>Hide archive hierarchy and timestamps from the agent so document text alone determines every navigation decision.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "<p>Bài toán là quản trị khám phá, không chỉ giữ con trỏ nguồn. Metadata archive tạo tín hiệu routing rẻ; summary nhánh cho khám phá từng lớp; ngân sách search và hồ sơ coverage ngăn agent đuổi ngõ cụt vô hạn. OCR toàn bộ lãng phí; một query cố định không thích ứng khi hồ sơ sớm làm đổi facility hoặc location có khả năng.<\/p>"
  },
  {
    "id": "MOCK-158",
    "set": 3,
    "number": 32,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A standards assistant can fit an entire manual set in the selected model&#39;s context window. However, representative evaluation shows that full-set requests miss requirements buried across revisions, while retrieving only the top passage misses necessary cross-references. Which strategy is the best next iteration?<\/p>",
    "options": {
      "A": "<p>Retrieve a small candidate set, follow its explicit cross-references within the applicable revision chain, and compare this hybrid against the full-set baseline on the same evaluation.<\/p>",
      "B": "<p>Keep sending the full manual set because fitting within the nominal token limit proves that all requirements receive equal attention.<\/p>",
      "C": "<p>Retrieve only the single highest-scoring passage and increase its similarity threshold until latency improves.<\/p>",
      "D": "<p>Replace the task-specific evaluation with a context-window utilization metric and select whichever strategy uses more tokens.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Context window lớn loại giới hạn dung lượng cứng nhưng không khiến nhiều context luôn tốt. Lỗi quan sát ủng hộ hybrid: bắt đầu từ đoạn tín hiệu cao, theo reference rõ trong revision chain phù hợp và kiểm chứng trên cùng ca đại diện. Một đoạn sẽ thiếu retrieval; toàn bộ tập đã thất bại dù vẫn vừa context.<\/p>"
  },
  {
    "id": "MOCK-159",
    "set": 3,
    "number": 33,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A deployment assistant has rare administration tool definitions that are relevant only after a read-only investigation. The application enforces execution permissions separately. Reviewers require schema-constrained inputs for every tool, while the performance team requires the cached tool-and-system prefix to remain unchanged when a deferred definition is discovered. Which implementation satisfies all three context constraints?<\/p>",
    "options": {
      "A": "<p>Move each discovered administration tool into the request&#39;s normal `tools` array on the next turn and rebuild the cache prefix.<\/p>",
      "B": "<p>Keep administration tools deferred, discover the required one through tool search as a `tool_reference`, and retain strict mode for the full toolset.<\/p>",
      "C": "<p>Keep tools deferred for cache stability but disable strict mode until a tool is discovered, then validate its arguments only in application logs.<\/p>",
      "D": "<p>Always load the administration definitions in the cached prefix with strict schemas, while continuing to enforce execution permission in the application.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Các yêu cầu nằm ở lớp khác nhau. Deferred loading quyết định definition có chiếm initial context hay không, không phải authorization thực thi. Tool search thêm definition đã chọn dạng `tool_reference` mà không đổi cached prefix; strict-mode grammar vẫn dùng full toolset độc lập. Ứng dụng chịu trách nhiệm permission gate riêng.<\/p>"
  },
  {
    "id": "MOCK-160",
    "set": 3,
    "number": 34,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>An agent coordinates a multi-day regulatory migration. Repository snapshots and policy documents can change between stages, the trace will exceed one context window, and reviewers must reconstruct why each consequential action was taken. Which THREE measures best preserve useful context without carrying stale monolithic snapshots?<\/p>",
    "options": {
      "A": "<p>Retain every raw tool result in the conversation so no information is ever discarded.<\/p>",
      "B": "<p>Maintain durable structured notes with decisions, unresolved risks, source pointers, and the stage at which each item was verified.<\/p>",
      "C": "<p>After each stage, replace all evidence with an unlinked one-paragraph conclusion and delete the source identifiers.<\/p>",
      "D": "<p>Keep lightweight identifiers for authoritative artifacts and retrieve the current relevant slices just before each stage&#39;s decision.<\/p>",
      "E": "<p>Take one complete snapshot at project kickoff and prohibit further retrieval so every stage sees identical content.<\/p>",
      "F": "<p>At a context reset, reload the latest checkpoint and its evidence pointers, retrieve the current slices identified by those pointers, and then continue.<\/p>"
    },
    "answer": [
      "B",
      "D",
      "F"
    ],
    "explanation": "<p>Công việc dài hạn cần liên tục mà không giữ mọi output thô. Note có cấu trúc lưu quyết định và việc chưa xong ngoài context; ID nhẹ hỗ trợ retrieval có mục tiêu từng stage; checkpoint cùng lát cắt nguồn hiện tại tạo re-entry tập trung sau compaction/reset. Snapshot kickoff cố định hoặc summary không liên kết không đủ.<\/p>"
  },
  {
    "id": "MOCK-161",
    "set": 3,
    "number": 35,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A fraud-review queue contains 10,000 alerts with independent evidence bundles. Reviewers need a ranked top 20 across the entire queue and must be able to reopen the original evidence. Loading all raw bundles at once reduces ranking accuracy. Which context workflow is the best fit?<\/p>",
    "options": {
      "A": "<p>Process alerts one at a time and keep only an unstructured prose impression of each, without alert or evidence identifiers.<\/p>",
      "B": "<p>Load all 10,000 raw evidence bundles because global ranking is impossible unless every source token remains simultaneously visible.<\/p>",
      "C": "<p>Review bounded groups into one normalized record per alert under the same rubric, merge and rank all records, then reopen original bundles for the finalists.<\/p>",
      "D": "<p>Rank a random sample of alerts and treat its top 20 as the top 20 for the entire queue.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Workflow nên giảm dần kích thước biểu diễn nhưng không bỏ coverage. Review giới hạn tạo một record so sánh cho mọi alert và giữ evidence ID; merge stage xếp 10.000 record mà không mang raw bundle; finalist tải lại bằng chứng gốc để verify. Văn xuôi không liên kết mất tái lập; random sample trượt yêu cầu bao phủ mọi alert.<\/p>"
  },
  {
    "id": "MOCK-162",
    "set": 3,
    "number": 36,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A procurement agent progressively researches suppliers, but evaluation shows it sometimes recommends a vendor before checking the vendor&#39;s current eligibility record. Eligibility can change daily, so preloading yesterday&#39;s status is unsafe; detailed supporting files are large and needed only for eligible candidates. What is the best correction?<\/p>",
    "options": {
      "A": "<p>Preload the previous day&#39;s eligibility export together with every supplier&#39;s supporting files.<\/p>",
      "B": "<p>Keep unrestricted exploration and check eligibility only after the agent has ranked vendors by capability.<\/p>",
      "C": "<p>Ask the model to infer likely eligibility from prior contracts and retrieve the current record only when confidence is low.<\/p>",
      "D": "<p>Make retrieval of the current eligibility record an explicit first gate for each candidate, then progressively load supporting files only for candidates that pass.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Lỗi không phải thiếu context mà là sai thứ tự khám phá. Lookup eligibility hiện tại phải xảy ra trước khi candidate ảnh hưởng recommendation, sau đó file hỗ trợ lớn mới retrieval chọn lọc. Cách này giữ state biến động mới, không lãng phí phân tích vendor không hợp lệ và vẫn khám phá dần bằng chứng liên quan.<\/p>"
  },
  {
    "id": "MOCK-163",
    "set": 3,
    "number": 37,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An entity-matching assistant proposes a customer record and a confidence score. High-confidence matches are applied automatically; lower-confidence cases go to review. Top-1 accuracy is 94%, but audits show that some wrong matches receive higher confidence than correct ambiguous matches. Which metric design best supports setting the automation threshold?<\/p>",
    "options": {
      "A": "<p>Measure calibration across confidence bands, precision among auto-applied matches at each candidate threshold, and the resulting automation coverage and review rate on representative ambiguous cases.<\/p>",
      "B": "<p>Use top-1 accuracy alone and select the threshold equal to that percentage.<\/p>",
      "C": "<p>Use the mean confidence score and prefer the candidate with the highest confidence.<\/p>",
      "D": "<p>Measure only the percentage sent to human review and minimize it without checking automated-match errors.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Hệ thống có threshold cần hơn top-1 accuracy. Calibration cho biết confidence có khớp correctness thật; precision trên mỗi threshold đo rủi ro auto-apply; coverage hoặc review rate đo chi phí vận hành. Báo cáo trên ca mơ hồ đại diện hỗ trợ quyết định đánh đổi precision–coverage có căn cứ.<\/p>"
  },
  {
    "id": "MOCK-164",
    "set": 3,
    "number": 38,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A fulfillment-planning workflow meets its latency target in low-load tests, but breaches it during peak traffic. The workflow includes queueing, inventory retrieval, one Claude call, schema validation, and a conditional retry. Which THREE measurement rules best identify and quantify the production bottleneck?<\/p>",
    "options": {
      "A": "<p>Measure P95 and P99 from request admission to the first valid plan under representative peak concurrency.<\/p>",
      "B": "<p>Use average Claude call duration from low-load tests as the production service-level metric.<\/p>",
      "C": "<p>Record correlated stage spans for queue wait, retrieval, Claude processing, validation, and retries within each end-to-end trace.<\/p>",
      "D": "<p>Track total daily plans as the sole performance metric.<\/p>",
      "E": "<p>Report the end-to-end tail and stage contributions by concurrency band and by retry versus no-retry path.<\/p>",
      "F": "<p>Measure model output tokens per second and infer queue wait from changes in that value.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "<p>Lỗi chỉ xuất hiện tải cao và có thể trước, trong hoặc sau model call. P95/P99 end-to-end dưới concurrency đại diện đo tác động; stage span liên kết quy nguyên nhân đuôi; cohort theo concurrency/retry tách saturation khỏi đường điều kiện. Mean tải thấp hay tốc độ output token không tìm được bottleneck production.<\/p>"
  },
  {
    "id": "MOCK-165",
    "set": 3,
    "number": 39,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>Two research-agent configurations produce the same accepted report quality. Configuration X uses fewer tokens per API call but retries more often and invokes paid web-search and code-execution tools more frequently. The business wants the lower-cost production workflow. Which cost metric should decide the comparison?<\/p>",
    "options": {
      "A": "<p>Uncached input tokens on the first API call only.<\/p>",
      "B": "<p>Total provider cost per accepted report, including every attempt and billable server-tool use in the workflow.<\/p>",
      "C": "<p>Average cost per API request, treating failed attempts and accepted reports as equivalent units.<\/p>",
      "D": "<p>Monthly organization cost divided by the number of employees who can access the service.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Đơn vị giá trị là báo cáo được chấp nhận, không phải một call. Tổng chi phí provider trên mỗi báo cáo chấp nhận phải gồm mọi attempt, token, web search và code execution để retry nhiều không trông rẻ giả. Trung bình theo token/call bỏ sót driver chi phí; cost trên nhân viên đủ điều kiện không đo workflow.<\/p>"
  },
  {
    "id": "MOCK-166",
    "set": 3,
    "number": 40,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A youth-community assistant must block a rare class of severe prohibited responses, answer benign health and identity questions supportively, and route uncertain high-risk cases to a staffed review queue. Candidate Y improves pre-release harm results but raises benign refusals and could exceed review capacity after topic drift. Which safety metric design best supports release and operation?<\/p>",
    "options": {
      "A": "<p>Gate severe harmful completions in the adversarial set and measure benign refusals once, but do not monitor review load or production drift after release.<\/p>",
      "B": "<p>Track severe-harm and benign-refusal rates continuously, but allow a low average across them to offset a severe prohibited completion.<\/p>",
      "C": "<p>Set a hard gate on severity-weighted harmful completions, separately bound benign false refusals, and monitor risk-slice drift plus review-queue load against rollback or capacity thresholds.<\/p>",
      "D": "<p>Measure review-queue utilization and benign helpfulness in production, but replace adversarial pre-release testing with those operational averages.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Hệ thống có ba lớp an toàn gắn nhau: ngăn hại nghiêm trọng, hữu ích với ca lành và khả năng duy trì fallback con người. Thiết kế mạnh cần cổng harmful-completion không bù trừ, trần false-refusal riêng và monitoring production về drift lát cắt rủi ro, tải review queue với threshold phản ứng rõ. Average trộn có thể che hại nặng.<\/p>"
  },
  {
    "id": "MOCK-167",
    "set": 3,
    "number": 41,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>An email agent screens untrusted messages before using internal tools. The team must compare attack protection with performance on clean email tasks. Which TWO metric groups provide that comparison? Choose 2.<\/p>",
    "options": {
      "A": "<p>Total refusals with malicious and clean messages combined.<\/p>",
      "B": "<p>Unauthorized action or disclosure rate by attack class after all configured controls.<\/p>",
      "C": "<p>The number of known injection keywords in the system prompt.<\/p>",
      "D": "<p>The percentage blocked by the first screen, without checking later tool behavior.<\/p>",
      "E": "<p>The number of warning sentences in the instructions.<\/p>",
      "F": "<p>Clean-task completion rate with false-screen and unnecessary-confirmation rates.<\/p>"
    },
    "answer": [
      "B",
      "F"
    ],
    "explanation": "<p>B đo kết quả trái phép trên ca tấn công; F đo mức hoàn thành và ma sát không cần trên ca sạch. Tổng refusal, keyword prompt, chặn bước đầu hoặc độ dài instruction không đồng thời cho thấy bảo mật và tiện ích lành tính.<\/p>"
  },
  {
    "id": "MOCK-168",
    "set": 3,
    "number": 42,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An invoice extractor returns schema-valid records 99% of the time, but the amount-due and bank-account fields are occasionally wrong on handwritten and low-resolution invoices. Those fields drive payment review, and routine printed invoices dominate the dataset. Which accuracy metric is best?<\/p>",
    "options": {
      "A": "<p>Schema-valid response rate only.<\/p>",
      "B": "<p>Average character similarity across every extracted field and document.<\/p>",
      "C": "<p>The percentage of records whose vendor name is non-empty.<\/p>",
      "D": "<p>Exact-match rates for payment-critical fields and an all-required-fields-correct record rate, reported separately for handwritten, low-resolution, and routine slices.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Đúng schema và giống văn bản không thay thế đúng giá trị. Exact match số tiền và trường ngân hàng kiểm tra trực tiếp output có hậu quả; tỷ lệ record đủ mọi field đo trích xuất đầu-cuối; báo cáo theo lát cắt làm lộ ca chữ viết tay, ảnh mờ bị aggregate che.<\/p>"
  },
  {
    "id": "MOCK-169",
    "set": 3,
    "number": 43,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A troubleshooting assistant&#39;s answers score highly for factual correctness, but support cases often reopen because the proposed steps do not resolve the user&#39;s issue. The product objective is a correct, usable resolution without avoidable repeat contact. Which primary outcome metric best complements the factual rubric?<\/p>",
    "options": {
      "A": "<p>The percentage of rubric-passing responses whose cases close without reopening within the defined follow-up window.<\/p>",
      "B": "<p>Average response length, on the assumption that longer instructions resolve more issues.<\/p>",
      "C": "<p>The number of answers generated per day, regardless of whether cases reopen.<\/p>",
      "D": "<p>A one-time reviewer preference vote between two writing styles.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Đúng sự thật vẫn bắt buộc, nhưng khoảng trống quan sát là hướng dẫn có giải quyết vụ việc không. Metric đóng ca không reopen, với điều kiện response vượt rubric factual và đo trong cửa sổ rõ, nối chất lượng model với outcome sản phẩm mà không cho shortcut sai được tính thành công. Độ dài, volume, style chỉ là proxy.<\/p>"
  },
  {
    "id": "MOCK-170",
    "set": 3,
    "number": 44,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A ticket classifier can auto-route or abstain to a human queue. One dashboard excludes abstentions, even though those tickets still consume time and can miss the queue SLA. Which TWO reporting rules make candidate comparisons fair? Choose 2.<\/p>",
    "options": {
      "A": "<p>Use one eligible-ticket cohort and include auto-routed, abstained, and unresolved cases in resolution outcome and time.<\/p>",
      "B": "<p>Report abstention rate together with human-queue wait time and missed SLA.<\/p>",
      "C": "<p>Report only completed cases and restart the clock when a human opens an abstained ticket.<\/p>",
      "D": "<p>Compare accuracy only on tickets each candidate auto-routes.<\/p>",
      "E": "<p>Start latency after human pickup because queue waiting belongs to operations.<\/p>",
      "F": "<p>Count every abstention as correct because no automatic error occurred.<\/p>"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "<p>A giữ mọi ticket đủ điều kiện trong cùng mẫu số outcome và thời gian. B báo hậu quả queue của abstention. Chỉ tính ca hoàn tất, khởi động lại đồng hồ hoặc coi abstention là đúng sẽ khiến selective routing có vẻ tốt hơn thực tế.<\/p>"
  },
  {
    "id": "MOCK-171",
    "set": 3,
    "number": 45,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>Three product workflows use separate Claude workspaces. Finance needs weekly actual provider cost by workflow, including web search and code execution, while product owners need cost per accepted job and retry-heavy jobs must not disappear from the denominator. Which measurement design is strongest?<\/p>",
    "options": {
      "A": "<p>Sum output tokens from successful response objects and assign no cost to failed attempts or server tools.<\/p>",
      "B": "<p>Retrieve and paginate Cost API data grouped by workspace and description, then join each period to application counts of accepted jobs and all attempts.<\/p>",
      "C": "<p>Use the organization-wide token total as exact USD cost and divide it equally among the three products.<\/p>",
      "D": "<p>Poll only the first Cost API page and use its row count as the number of accepted jobs.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Billing nhà cung cấp và outcome ứng dụng trả lời phần khác nhau. Cost API cung cấp charge token/server-tool thật theo workspace, description và phải đọc mọi page; log ứng dụng cung cấp accepted job, attempt. Join theo cùng workflow và thời gian cho cost tuần được quy kết và cost/job chấp nhận mà không xóa retry.<\/p>"
  },
  {
    "id": "MOCK-172",
    "set": 3,
    "number": 46,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A coding agent changes a billing service. The release gate must verify exact invoice totals, confirm that only approved files changed, and assess whether the new error-handling design is maintainable. Which evaluation framework best matches each criterion to a suitable method?<\/p>",
    "options": {
      "A": "<p>Ask one model grader to assign a single overall quality score from the final response, without running the code or inspecting repository state.<\/p>",
      "B": "<p>Use only unit-test pass rate and treat every passing implementation as equally maintainable and correctly scoped.<\/p>",
      "C": "<p>Run deterministic invoice tests and a repository-state check, then apply a dimension-specific model rubric to the error-handling design and periodically calibrate that rubric with human review.<\/p>",
      "D": "<p>Have human reviewers manually recompute every invoice, inspect every file, and score design quality for every trial.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Framework đánh giá nên tách success thành tiêu chí và chọn grader đáng tin nhất cho từng tiêu chí. Hành vi tài chính chính xác và file scope kiểm tra xác định theo outcome. Maintainability cần phán đoán, nên model rubric tập trung phù hợp khi calibration với human review. Một holistic judge hoặc một signal sẽ trộn failure mode.<\/p>"
  },
  {
    "id": "MOCK-173",
    "set": 3,
    "number": 47,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A team is building the first evaluation dataset for a customer-support agent. Current logs overrepresent password resets, while production incidents show rare account-lockout escalations can cause severe harm. Which THREE actions create the strongest initial dataset?<\/p>",
    "options": {
      "A": "<p>Sample only the most frequent intent so the aggregate score mirrors raw traffic volume exactly.<\/p>",
      "B": "<p>Generate all cases from a generic language model and skip comparison with production failures to avoid historical bias.<\/p>",
      "C": "<p>Remove every case the current agent fails so the initial benchmark establishes a stable high baseline.<\/p>",
      "D": "<p>Sample representative common workflows from production while preserving metadata needed to report performance by intent and impact slice.<\/p>",
      "E": "<p>Add sanitized cases from incident reports, support escalations, and recurring bug records that reveal actual failure modes.<\/p>",
      "F": "<p>Include a deliberately weighted set of high-impact account-lockout edge cases and report that slice separately from the traffic-weighted result.<\/p>"
    },
    "answer": [
      "D",
      "E",
      "F"
    ],
    "explanation": "<p>Dataset đầu tiên hữu ích kết hợp công việc thường ngày đại diện, lỗi thực đã ghi và ca biên hậu quả cao được chọn chủ đích. Nhãn slice và báo cáo riêng giữ minh bạch khi risk sampling khác tần suất production. Chỉ sample theo tần suất, synthetic thiếu căn cứ hoặc bỏ ca lỗi đều xóa thông tin cần thiết.<\/p>"
  },
  {
    "id": "MOCK-174",
    "set": 3,
    "number": 48,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A data-migration agent must merge duplicate supplier records across a large batch. A valid result must leave one canonical supplier, relink every active contract, preserve an immutable mapping from each retired ID, and make no changes to unrelated suppliers. Which grading rule provides the strongest evidence of success?<\/p>",
    "options": {
      "A": "<p>Compare the final response with a checklist of the four requested actions and pass if every action is mentioned.<\/p>",
      "B": "<p>Check only that the total supplier count decreased by the expected amount.<\/p>",
      "C": "<p>Inspect a small convenience sample of migrated suppliers and infer that the uninspected records satisfy the same invariants.<\/p>",
      "D": "<p>Run deterministic post-trial queries for the canonical record, every contract link, every retired-ID mapping, and the unchanged state of unrelated suppliers.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Tác vụ có nhiều postcondition kiểm chứng được trên batch lớn. Query xác định có thể xác nhận từng record chuẩn, quan hệ được giữ, audit mapping và không đổi dữ liệu ngoài phạm vi. Checklist response, một tổng count hay sample tiện lợi có thể pass dù invariant quan trọng bị phá nơi khác.<\/p>"
  },
  {
    "id": "MOCK-175",
    "set": 3,
    "number": 49,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A model grader scores medical-support answers for factual support, instruction compliance, and empathy. It agrees with senior reviewers on routine cases but over-rewards polished unsupported claims in a rare escalation slice. The suite changes monthly and full human grading is too expensive. Which remediation is strongest?<\/p>",
    "options": {
      "A": "<p>Split the rubric into independently scored dimensions, build a reviewer-labeled calibration set that includes the disagreement slice, measure agreement by slice, revise the grader prompt, and repeat blinded human spot checks after suite changes.<\/p>",
      "B": "<p>Keep one holistic score but increase the grader model&#39;s temperature so difficult cases receive a wider range of judgments.<\/p>",
      "C": "<p>Calibrate once on routine cases, then freeze the grader permanently so longitudinal scores never change.<\/p>",
      "D": "<p>Replace the model grader with a keyword check for empathetic phrases and treat factual support as implied whenever the tone passes.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Lỗi cụ thể theo dimension và slice. Tách rubric dimension giúp chẩn đoán; bộ human-label chứa ca escalation tranh chấp tạo target calibration có nghĩa. Agreement phải xem theo slice, không chỉ aggregate; kiểm tra blind định kỳ cần thiết vì grader không xác định và suite sống đều drift.<\/p>"
  },
  {
    "id": "MOCK-176",
    "set": 3,
    "number": 50,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>Two browser agents are compared on checkout. Results vary across runs, and a shared account can retain cart state between trials. Which TWO controls make the comparison defensible? Choose 2.<\/p>",
    "options": {
      "A": "<p>Repeat trials from reset or isolated cart and account state, retaining every result.<\/p>",
      "B": "<p>Keep only the first successful run for each agent.<\/p>",
      "C": "<p>Alternate both agents on one persistent account and average the scores.<\/p>",
      "D": "<p>Reset state but run only one trial because the starting state is equal.<\/p>",
      "E": "<p>Use one deterministic completed-checkout assertion for every trial.<\/p>",
      "F": "<p>Use one trial per task and equalize only the number of agent turns.<\/p>"
    },
    "answer": [
      "A",
      "E"
    ],
    "explanation": "<p>A reset hoặc cô lập mutable state và lặp trial. E dùng cùng checkout condition quan sát được cho mọi trial. Chỉ chọn lần thành công, dùng state chung tồn tại hoặc so sánh một lần không tạo kết quả có thể bảo vệ.<\/p>"
  },
  {
    "id": "MOCK-177",
    "set": 3,
    "number": 51,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An agent team maintains 40 workflows as a high-pass regression gate and 12 difficult workflows as a capability suite. Four capability workflows have now passed at least 95% of repeated isolated trials across three consecutive releases; the other eight remain inconsistent. The team must protect the newly reliable behavior without losing hill-climbing signal. What should it do?<\/p>",
    "options": {
      "A": "<p>Leave all 12 workflows only in the capability average until every one reaches the same pass rate.<\/p>",
      "B": "<p>Promote the four consistently reliable workflows into the regression gate with an explicit high-pass threshold, retain the other eight in the capability suite, and continue reporting the two suites separately.<\/p>",
      "C": "<p>Promote all 12 workflows after the next single successful trial so every task is governed by one release-blocking threshold.<\/p>",
      "D": "<p>Remove the four reliable workflows from evaluation because their high pass rate no longer provides optimization signal.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Hiệu suất cao lặp qua nhiều release cho thấy bốn workflow nên thành kỳ vọng được bảo vệ. Đưa chúng vào regression gate với ngưỡng pass cao; workflow chưa giải quyết giữ thành capability set còn dư địa cải thiện. Báo cáo riêng ngăn hai mục đích che nhau.<\/p>"
  },
  {
    "id": "MOCK-178",
    "set": 3,
    "number": 52,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A contract-comparison assistant produces 20,000 free-form reports per month. Required clause IDs can be checked automatically, but risk analysis requires judgment. Human reviewers can inspect only 300 reports, and low-volume languages plus rare high-value contract types must not be hidden by the majority slice. Which evaluation design is strongest?<\/p>",
    "options": {
      "A": "<p>Select 300 reports by simple random sampling, assign one overall human score, and publish only the population-wide average.<\/p>",
      "B": "<p>Run the clause-ID check on all reports and treat complete identifier coverage as proof that the risk analysis is also sound.<\/p>",
      "C": "<p>Run deterministic clause checks across all reports; use a stratified human sample that deliberately covers the small language and contract-risk slices; calibrate a dimension-specific model grader to adjudicated judgments; and report both dimensions by slice with declared production weights.<\/p>",
      "D": "<p>Let a model grader score all reports without human calibration, then increase the majority-language weight to reduce variance.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Framework phải scale toàn corpus, tiết kiệm phán đoán con người và làm lộ slice ít nhưng hậu quả lớn. Kiểm tra xác định bao phủ clause ID mọi report; human review phân tầng cung cấp bằng chứng nơi random sample thưa; judgment đã adjudicate calibration model rubric cho grading định tính rộng. Báo riêng slice/dimension ngăn traffic đa số che rủi ro.<\/p>"
  },
  {
    "id": "MOCK-179",
    "set": 3,
    "number": 53,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>An enterprise research agent passes a static offline set, yet users report stale citations and missed sources after launch. A revised retriever may improve coverage but could increase latency and change user behavior. Which THREE practices form the strongest end-to-end evaluation framework?<\/p>",
    "options": {
      "A": "<p>Use the original offline aggregate indefinitely because changing the dataset would invalidate all historical comparisons.<\/p>",
      "B": "<p>Extend offline tasks with recent sanitized failures and grade source coverage, citation support, and latency as separate dimensions before release.<\/p>",
      "C": "<p>Run a controlled production comparison with guardrails and predefined outcome metrics, including user correction or abandonment behavior.<\/p>",
      "D": "<p>Replace offline evaluation with click-through rate because production behavior is the only evidence that matters.<\/p>",
      "E": "<p>Review only the agent&#39;s final prose after launch and assume cited sources were retrieved if the answer sounds specific.<\/p>",
      "F": "<p>Monitor production slices and regularly inspect sampled transcripts and outcomes, feeding new high-impact failures back into the maintained suite.<\/p>"
    },
    "answer": [
      "B",
      "C",
      "F"
    ],
    "explanation": "<p>Không một stage đánh giá nào đủ. Offline task cập nhật chẩn đoán coverage, grounding, latency trước exposure; production comparison có bảo vệ đo hành vi thật; monitoring slice liên tục cùng review transcript/outcome phát hiện lỗi mới. Đưa lỗi trở lại suite đóng vòng đời mà không thu success về click hay văn phong trôi chảy.<\/p>"
  },
  {
    "id": "MOCK-180",
    "set": 3,
    "number": 54,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>Two experienced reviewers independently evaluate a procurement-agent task. One passes an answer that selects an approved vendor; the other fails it because the agent did not obtain a second approval. The task says only “complete the purchase under policy,” and the hidden reference assumes a threshold not present in the fixture. What should the team do first?<\/p>",
    "options": {
      "A": "<p>Tune the agent until it always requests two approvals, leaving the task and hidden assumption unchanged.<\/p>",
      "B": "<p>Average the two reviewer scores and keep the item because disagreement cancels out across a large suite.<\/p>",
      "C": "<p>Replace both reviewers with a model grader trained on the hidden reference answer.<\/p>",
      "D": "<p>Pause use of the item, make the approval threshold and fixture state explicit, align the reference and grader to that specification, then have independent reviewers confirm the revised expected result.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Reviewer bất đồng cho thấy tác vụ chưa đủ đặc tả và fixture có giả định ẩn, chưa chắc agent lỗi. Trước tiên phải nêu threshold phê duyệt, cung cấp environment state liên quan và căn chỉnh reference, grader. Agreement độc lập sau sửa là bằng chứng task đã công bằng, rõ expected result.<\/p>"
  },
  {
    "id": "MOCK-181",
    "set": 3,
    "number": 55,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A subscription-support assistant is testing two prompts. Customers often return on several devices during the same case, and seeing both variants could change their later messages. Which experiment design gives the clearest comparison?<\/p>",
    "options": {
      "A": "<p>Assign each eligible customer account once to A or B, keep that assignment for the case, record actual exposure and prompt version, and compare predefined outcomes over the same window.<\/p>",
      "B": "<p>Randomize every message independently so each variant receives exactly the same number of requests.<\/p>",
      "C": "<p>Let support staff choose the variant they expect will work best for each customer and compare the resulting averages.<\/p>",
      "D": "<p>Deploy A this month and B next month, then attribute every change in outcomes to the prompt.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Đơn vị assignment phải khớp nơi treatment có thể lan. Gán ổn định theo customer account giữ một case trong một variant xuyên device; log exposure thật, version, eligibility window chung và outcome định trước làm so sánh audit được. Random mỗi message gây nhiễm; operator chọn hay tháng tuần tự tạo selection/time confounding.<\/p>"
  },
  {
    "id": "MOCK-182",
    "set": 3,
    "number": 56,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A proposed IT-support prompt may complete more standard access requests but could create confident role errors, slower replies, and more human handoffs. Before starting an A/B pilot, which THREE measurement rules make the decision criteria defensible?<\/p>",
    "options": {
      "A": "<p>Define the primary outcome as the requested standard access being granted with the correct role and remaining valid through the next directory synchronization, measured for every eligible assigned request.<\/p>",
      "B": "<p>Choose whichever engagement metric improves most after examining the results, because prompt effects are difficult to predict.<\/p>",
      "C": "<p>Predefine wrong-role and prohibited-access guardrails, including thresholds for consequential slices that can block rollout despite primary-metric gain.<\/p>",
      "D": "<p>Exclude all handed-off requests from both variants so human performance does not affect the prompt comparison.<\/p>",
      "E": "<p>Measure latency, provider cost, and handoff rate alongside access quality, using the same cohort and reporting important user and request slices separately.<\/p>",
      "F": "<p>Treat any increase in answer length as evidence of higher access-request quality and omit direct outcome tracking.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "<p>Quyết định A/B cần quy tắc thành công trước khi xem kết quả. Outcome truy cập end-to-end cố định đo lợi ích; guardrail vai trò và truy cập cấm giới hạn hại; dimension vận hành và slice report phơi đánh đổi. Chọn metric sau, bỏ handoff hoặc thay bằng answer length khiến test dễ bị thao túng.<\/p>"
  },
  {
    "id": "MOCK-183",
    "set": 3,
    "number": 57,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An A/B test was configured for a 50/50 split. Assignment logs contain about 50,000 eligible users per arm, but exposure logs show only 31,000 users actually received B. Most missing B exposures are on an older client that errors before rendering the assistant. Among recorded exposures, B has higher completion. What is the strongest next decision?<\/p>",
    "options": {
      "A": "<p>Ship B because its exposed-user completion rate is higher and the assignment service produced equal groups.<\/p>",
      "B": "<p>Pause the winner decision, reconcile assignment with exposure and client-error logs, include assigned eligible users in outcome accounting, repair or bound the incompatible-client path, and rerun the controlled comparison.<\/p>",
      "C": "<p>Discard assignment logs and compare only users for whom a response rendered, because unexposed users never interacted with either prompt.<\/p>",
      "D": "<p>Impute every missing B exposure as a successful completion so both arms again have the same sample size.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Gán đều không bảo đảm exposure đều. Lỗi render của B loại nhiều người dùng client cũ khỏi mẫu số exposed, nên completion tốt hơn có thể do selection chứ không phải prompt. Cần tính mọi eligible user đã assign, tìm gap assignment-to-exposure, sửa hoặc giới hạn client path và chạy lại trước khi chọn thắng.<\/p>"
  },
  {
    "id": "MOCK-184",
    "set": 3,
    "number": 58,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>In a production A/B test, a new contract-review prompt improves the common workflow. A legally consequential cancellation workflow represents only 0.3% of traffic, so the test cannot accumulate enough examples to estimate its error rate before the release deadline. The offline suite contains only two such cases. What is the strongest decision framework?<\/p>",
    "options": {
      "A": "<p>Infer that the rare workflow is safe because no cancellation error appeared in the limited live sample.<\/p>",
      "B": "<p>Replicate cancellation cases in the production logs until they have the same weight as the common workflow, then use the aggregate A/B result.<\/p>",
      "C": "<p>Use the A/B test for adequately represented outcomes, but require a separately expanded high-volume offline cancellation set with suitable automated grading and targeted human review to pass a strict slice gate before rollout.<\/p>",
      "D": "<p>Lower the cancellation threshold until the two offline cases pass, because the common-workflow A/B gain offsets uncertainty.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>A/B test hữu ích cho outcome thật nhưng cần đủ traffic. Slice hủy hiếm không thể được chứng minh an toàn bằng ít non-event hay row nhân đôi. Workflow phổ biến giữ live comparison; slice hậu quả cao cần offline coverage lớn có chủ đích và judgment calibration theo cổng chặt. Rollout cần cả hai nguồn bằng chứng.<\/p>"
  },
  {
    "id": "MOCK-185",
    "set": 3,
    "number": 59,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A team has a new prompt P2 and a new model M2. Both may change quality, latency, tool behavior, and cost. It must learn whether each change helps, preserve reproducibility across stochastic runs, and limit initial production exposure. Which THREE design choices are strongest?<\/p>",
    "options": {
      "A": "<p>Compare P1+M1 with P2+M2 only and attribute the full difference equally to the prompt and model.<\/p>",
      "B": "<p>Predefine separate comparisons of P1+M1 versus P2+M1 for the prompt and P1+M1 versus P1+M2 for the model, while holding tools, retrieval data, grader versions, and runtime limits constant.<\/p>",
      "C": "<p>Let engineers route difficult cases to whichever cell they believe is strongest and omit routing decisions from logs.<\/p>",
      "D": "<p>Version every cell, use equivalent cases with multiple offline trials, record exposures and outcomes, and analyze predefined quality and operational metrics by relevant slice.<\/p>",
      "E": "<p>Run each configuration in a different calendar month so infrastructure capacity can be dedicated to one cell at a time.<\/p>",
      "F": "<p>Advance only offline-qualified cells to a small guarded production pilot, with rollback criteria and the same version and exposure logging.<\/p>"
    },
    "answer": [
      "B",
      "D",
      "F"
    ],
    "explanation": "<p>Không thể quy hiệu ứng prompt và model nếu đổi cả hai trong một contrast. Comparison định trước phải giữ một yếu tố và hệ thống còn lại ổn định, chỉ đổi prompt hoặc model; trial offline lặp có version tạo bằng chứng đa chiều tái lập. Chỉ cấu hình đạt chuẩn mới vào pilot production giới hạn với rollback, exposure record.<\/p>"
  },
  {
    "id": "MOCK-186",
    "set": 3,
    "number": 60,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>In an A/B test, prompt B underperforms only on address-change requests. Transcript review shows that B presents a general answer before the mandatory identity-check instruction, so users act too early. Which next iteration yields the most useful evidence?<\/p>",
    "options": {
      "A": "<p>Replace B with a longer prompt that changes examples, tone, ordering, and output format simultaneously.<\/p>",
      "B": "<p>Delete address-change cases from the suite because they are already handled by a downstream identity service.<\/p>",
      "C": "<p>Keep B unchanged and run it on more unrelated intents until its overall average becomes stable.<\/p>",
      "D": "<p>Create a version that moves the identity-check instruction before actionable guidance, rerun the full fixed suite with the address slice reported separately, and pass final validation before another pilot.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Transcript ủng hộ giả thuyết cụ thể về thứ tự. Chỉ đổi yếu tố đó, version hóa và chạy lại full fixed suite để kiểm tra slice địa chỉ tốt lên mà không hy sinh hành vi khác. Validation cuối và pilot mới giữ đường lặp từ lỗi quan sát tới thay đổi giới hạn rồi bằng chứng rộng hơn.<\/p>"
  },
  {
    "id": "MOCK-187",
    "set": 3,
    "number": 61,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>After six prompt iterations, development-suite quality rises steadily, but performance on an untouched final-validation set falls, especially on newly observed production phrasing. What is the strongest response?<\/p>",
    "options": {
      "A": "<p>Stop tuning against final validation, add diverse sanitized production-derived cases to the development coverage, preserve a separate untouched validation set, and require regression checks before promotion.<\/p>",
      "B": "<p>Reveal every final-validation answer to the prompt author and optimize directly until that score recovers.<\/p>",
      "C": "<p>Ship the sixth version because the development trend contains more iterations than the single final-validation result.<\/p>",
      "D": "<p>Remove production phrasing from validation so every iteration is compared on the original language distribution.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Hai đường cong tách nhau cho thấy feedback phát triển lặp không còn generalize. Cụm từ từ production nên bổ sung coverage development, nhưng quyết định cuối vẫn cần validation set độc lập, không tối ưu trực tiếp theo đáp án của nó. Regression bảo vệ hành vi từng ổn định trước promotion.<\/p>"
  },
  {
    "id": "MOCK-188",
    "set": 3,
    "number": 62,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A live A/B test of candidate B is at 5% exposure. The primary outcome is promising, but daily results fluctuate, one high-impact slice has few cases, and any increase in prohibited actions requires immediate rollback. Which THREE conditions should be satisfied before ramping B to 25%?<\/p>",
    "options": {
      "A": "<p>Reach the predefined traffic and observation-window requirement, confirm assignment and exposure integrity, and meet the primary-outcome criterion rather than reacting to the first favorable day.<\/p>",
      "B": "<p>Pass all predefined quality and prohibited-action guardrails, including the high-impact slice; if that slice lacks enough live evidence, require its complementary offline gate rather than treating silence as success.<\/p>",
      "C": "<p>Keep the treatment version, eligibility, metrics, monitoring, and rollback trigger fixed and verified for the next ramp so the larger exposure remains attributable and recoverable.<\/p>",
      "D": "<p>Ramp as soon as B wins the primary metric on any single day, then collect enough traffic at 25% to decide whether the early result was noise.<\/p>",
      "E": "<p>Ignore a prohibited-action alert when the aggregate primary metric remains positive, because the guardrail has fewer events.<\/p>",
      "F": "<p>Modify B&#39;s prompt during the 5% phase without creating a new version, while keeping all observations in the same treatment bucket.<\/p>"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "<p>Ramp lớn phải theo evidence contract cũ: đủ clean exposure trong cửa sổ, primary outcome thành công và mọi guardrail hậu quả cao đạt, bổ sung bằng chứng nơi live traffic thưa. Treatment và monitoring phải version ổn định, rollback vận hành được. Một ngày tốt hay aggregate gain không vượt các điều kiện này.<\/p>"
  },
  {
    "id": "MOCK-189",
    "set": 3,
    "number": 63,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>Prompt B has a higher score than A in a side-by-side report, but A was graded with rubric R3 on suite S12 while B was graded with revised rubric R4 on suite S13. Both the added cases and rubric wording could affect the score. What should the team do before claiming B improved?<\/p>",
    "options": {
      "A": "<p>Use the reported scores because newer suite and rubric versions are automatically stricter and therefore favor neither prompt.<\/p>",
      "B": "<p>Rerun both versioned prompts on the same fixed suite, trial policy, grader and rubric versions, compare predefined dimensions and slices, then use separate validation or a pilot for promotion.<\/p>",
      "C": "<p>Subtract the average historical difference between R3 and R4 without rerunning either prompt.<\/p>",
      "D": "<p>Ask the prompt author which version appears more elegant and use that judgment to break the comparison.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Chênh điểm chỉ quy cho prompt khi task, trial policy, grader, rubric và dimension báo cáo nhất quán hoặc hiệu ứng được tách rõ. Chạy lại cả hai prompt có version trong cùng context đánh giá khôi phục khả năng so sánh; validation độc lập hoặc pilot giới hạn hỗ trợ promotion mà không tune theo comparison.<\/p>"
  },
  {
    "id": "MOCK-190",
    "set": 4,
    "number": 1,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A contract assistant receives the complete signed agreement in its context but states a 60-day renewal notice that reviewers cannot find in the document. The answer sounds confident and includes no citation. What is the strongest first diagnostic step?<\/p>",
    "options": {
      "A": "<p>Increase the prompt length with more general contract terminology and assume the extra detail will correct the notice period.<\/p>",
      "B": "<p>Upgrade the model immediately because any unsupported statement proves the current model lacks sufficient capability.<\/p>",
      "C": "<p>Replay the case with the same agreement, require a verbatim supporting passage and citation for the notice claim, and classify the claim as unsupported if no passage exists.<\/p>",
      "D": "<p>Ask a reviewer whether 60 days is common in the industry and pass the answer if it is plausible.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Vấn đề là claim cụ thể có được hợp đồng cung cấp hỗ trợ không, không phải nghe có hợp lý không. Yêu cầu passage trực tiếp và citation làm claim audit được; thiếu bằng chứng xác định generation không được hỗ trợ. Sau đó mới chọn mitigation như uncertainty rõ, giới hạn nguồn hoặc sửa prompt.<\/p>"
  },
  {
    "id": "MOCK-191",
    "set": 4,
    "number": 2,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A compliance-summary prompt produces different obligations across repeated runs on the same fixed policy. Some differences are harmless wording, while others add unsupported deadlines. Which THREE controls best distinguish stochastic phrasing from a factual reliability failure?<\/p>",
    "options": {
      "A": "<p>Average the length of all summaries and treat similar length as evidence that their obligations agree.<\/p>",
      "B": "<p>Raise temperature so the variation becomes large enough for reviewers to notice easily.<\/p>",
      "C": "<p>Keep only the most fluent run and discard the others before grading.<\/p>",
      "D": "<p>Run multiple trials with the prompt, policy, model settings, and grader fixed, then compare obligation-level results rather than prose similarity.<\/p>",
      "E": "<p>Require each obligation and deadline to map to a supporting passage, and classify unsupported additions separately from source-backed paraphrases.<\/p>",
      "F": "<p>Add an explicit no-evidence outcome that permits uncertainty, restricts answers to the policy, and score both unsupported claims and excessive abstention.<\/p>"
    },
    "answer": [
      "D",
      "E",
      "F"
    ],
    "explanation": "<p>Trial cố định lặp làm lộ thay đổi factual ngẫu nhiên; mapping nghĩa vụ-to-source phân biệt paraphrase có căn cứ với deadline bịa. Đường uncertainty rõ kiểm tra mitigation chính, nhưng cũng phải đo abstention quá mức để model không trông đáng tin bằng cách từ chối mọi ca khó. Length, temperature, fluency không chẩn đoán factual.<\/p>"
  },
  {
    "id": "MOCK-192",
    "set": 4,
    "number": 3,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An approval classifier has 12 few-shot examples, all containing the word “approved.” It performs well on ordinary approvals but falsely approves messages such as “not approved pending review.” Which diagnosis and correction are strongest?<\/p>",
    "options": {
      "A": "<p>The model is too small; replace it before examining the examples or the error slice.<\/p>",
      "B": "<p>Add more positive examples containing “approved” so the desired class becomes even clearer.<\/p>",
      "C": "<p>Remove every example and rely on the model&#39;s general knowledge of approval workflows.<\/p>",
      "D": "<p>Treat the homogeneous examples as a shortcut hypothesis, add structured positive and negative examples covering negation and pending-review edges, then rerun the failing slice and the full suite.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Ví dụ vô tình gắn một token với lớp positive và thiếu ca negation đã thấy, nên nên chẩn đoán prompt example trước model capability. Ca positive/negative có cấu trúc, liên quan kiểm tra shortcut đã bỏ chưa; chạy lại error slice lẫn full suite xác minh sửa cục bộ không regression.<\/p>"
  },
  {
    "id": "MOCK-193",
    "set": 4,
    "number": 4,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A release candidate passes a versioned regression suite in staging but fails the same cases in one production environment. Dashboards group both calls under the same model family name, while deployment manifests use different provider-specific identifiers and the request logs omit the resolved model ID. Prompt, data, and grader versions appear unchanged. Which response is strongest?<\/p>",
    "options": {
      "A": "<p>Capture the exact requested and resolved model identifiers plus provider and inference settings in both environments, rerun the frozen cases against pinned identifiers, and only then attribute or remediate a model-version mismatch.<\/p>",
      "B": "<p>Rewrite the prompt immediately because identical family names prove the deployed model weights are identical.<\/p>",
      "C": "<p>Average the two environments&#39; scores and release if the combined result passes, without separating their model identifiers.<\/p>",
      "D": "<p>Switch the production grader to a more lenient rubric because the staging result already demonstrated model quality.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Lỗi liên quan environment nhưng nhãn model family chưa đủ là bằng chứng cấu hình. ID theo provider có thể ánh xạ version khác. Log requested/resolved ID và inference setting, rồi replay cùng prompt, data, trial, grader trên version pinned để cô lập deployment có chọn model khác trước khi sửa prompt/threshold.<\/p>"
  },
  {
    "id": "MOCK-194",
    "set": 4,
    "number": 5,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A research assistant repeats an unsupported claim in later turns because prior model messages are appended without distinguishing them from approved sources. Which TWO actions best diagnose the failure? Choose 2.<\/p>",
    "options": {
      "A": "<p>Replay the same follow-up in fresh and contaminated sessions, holding sources, prompt, model settings, and grader fixed.<\/p>",
      "B": "<p>Increase temperature so later turns explore more phrasings of the repeated claim.<\/p>",
      "C": "<p>Treat repetition across turns as independent confirmation because the claim appears more than once.<\/p>",
      "D": "<p>Trace disputed statements by role and provenance: approved source, user assertion, or prior model output.<\/p>",
      "E": "<p>Immediately rebuild the context and add recovery tests before isolating whether history or source retrieval caused the claim.<\/p>",
      "F": "<p>Preserve the contaminated transcript indefinitely as authoritative memory so the assistant remains consistent with its first answer.<\/p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "<p>A cô lập history bằng so sánh session sạch và nhiễm trong điều kiện cố định. D truy từng statement tranh chấp về source duyệt, assertion người dùng hoặc text sinh trước. Đổi temperature, lặp claim, redesign ngay hay giữ memory nhiễm không chẩn đoán nguyên nhân.<\/p>"
  },
  {
    "id": "MOCK-195",
    "set": 4,
    "number": 6,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An escalation template is inserted only for high-risk cases. The base system prompt says “return JSON only,” the template says “return prose only,” and the application rejects non-JSON output. Ordinary cases pass, while escalations alternate between valid-looking prose and malformed JSON. What should the team do first?<\/p>",
    "options": {
      "A": "<p>Increase temperature so the model can choose more freely between the two formats.<\/p>",
      "B": "<p>Remove the conflict, define one explicit output contract and constraints at the appropriate instruction level, add an escalation example, and rerun escalation plus regression cases.<\/p>",
      "C": "<p>Switch models before inspecting the assembled escalation prompt.<\/p>",
      "D": "<p>Relax the application validator to accept either prose or JSON without changing downstream consumers.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Lỗi chỉ xuất hiện khi template escalation thêm instruction định dạng mâu thuẫn. Sửa đầu tiên là kiểm tra prompt đã ghép, đặt một contract rõ ở đúng cấp và minh họa bằng ví dụ escalation liên quan. Rerun slice và regression xác minh mà không đổ lỗi model hoặc hạ contract ứng dụng.<\/p>"
  },
  {
    "id": "MOCK-196",
    "set": 4,
    "number": 7,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A supplier-risk assistant is asked, “Given that Vendor K renewed its certification in May, summarize the improvements.” The approved evidence bundle says certification verification is pending and contains no renewal record, yet the assistant accepts the user&#39;s premise and invents an auditor and date. Which diagnosis and testable correction are strongest?<\/p>",
    "options": {
      "A": "<p>Treat the user&#39;s premise as authoritative because it is more recent than the approved evidence bundle.<\/p>",
      "B": "<p>Add examples of common certification auditors so the model can choose a more plausible name.<\/p>",
      "C": "<p>Classify it as acceptance of an unsupported and source-conflicting premise, require premise verification against the approved evidence before analysis, surface the conflict instead of continuing, and test both false-premise and verified-premise cases with claim citations.<\/p>",
      "D": "<p>Keep the current behavior but add a general disclaimer that certification facts may be inaccurate.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Lỗi bắt đầu khi assistant coi assertion người dùng chưa xác minh là thật dù source duyệt báo trạng thái trái ngược. Phải verify premise trước synthesis; premise thiếu hoặc xung đột cần được nêu, claim kết quả phải audit được. Ca cặp premise sai/đúng xác nhận control chặn fabrication nhưng không ngăn phân tích có căn cứ.<\/p>"
  },
  {
    "id": "MOCK-197",
    "set": 4,
    "number": 8,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>After a model upgrade, an agent uses fewer optional tools and its reports become shorter. The team needs to determine whether the model or an implicit prompt assumption caused the change. Which TWO actions best isolate the cause? Choose 2.<\/p>",
    "options": {
      "A": "<p>Change the model, prompt, tools, grader, and task set together until the score recovers.<\/p>",
      "B": "<p>Run old and new models with the same versioned prompt, tool definitions, tasks, trial policy, and grader.<\/p>",
      "C": "<p>Inspect failed transcripts and assembled prompts for unstated optional-tool and output-length expectations.<\/p>",
      "D": "<p>Use only public benchmark rankings instead of the product prompt and tasks.<\/p>",
      "E": "<p>Treat every shorter output as a regression without checking task criteria.<\/p>",
      "F": "<p>Rewrite the prompt first and use the improved score as proof that the original model was at fault.<\/p>"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "<p>B chỉ đổi model, giữ prompt, tool, task, trial policy và grader. C kiểm tra evidence lỗi để tìm giả định prompt ngầm. Đổi nhiều yếu tố, dùng ranking công khai hoặc đánh giá theo độ dài không cô lập nguyên nhân.<\/p>"
  },
  {
    "id": "MOCK-198",
    "set": 4,
    "number": 9,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A pricing assistant gives a value that is false today. Its citation accurately supports the value in the retrieved catalog, but the catalog is three months old because the index refresh failed. Reviewers label the output a model hallucination. What is the strongest diagnosis and response?<\/p>",
    "options": {
      "A": "<p>Strengthen the wording that tells the model to be factual, while leaving the stale catalog and refresh process unchanged.<\/p>",
      "B": "<p>Remove citations so users are less likely to trust stale evidence.<\/p>",
      "C": "<p>Switch to a more capable model and assume it will know which retrieved catalog values have expired.<\/p>",
      "D": "<p>Classify it as an upstream freshness and indexing failure, restore and monitor corpus refresh with source versions, then rerun freshness, retrieval, and grounded-answer tests.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Model dùng đúng bằng chứng retrieval nhưng hệ thống cấp catalog cũ. Đây là lỗi freshness nguồn và bảo trì index phía trước, không phải generation thiếu căn cứ. Khôi phục refresh có version và monitoring xử lý gốc; test nhiều lớp xác minh nội dung hiện tại được index, retrieve và cite đúng.<\/p>"
  },
  {
    "id": "MOCK-199",
    "set": 4,
    "number": 10,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A team compares the same evaluated prompt on two model generations. The newer target reports substantially more input tokens because it uses a different tokenizer, yet actual cost is lower, latency meets the target, and answer quality is unchanged. The team calls the increase prompt bloat and plans to delete evidence. What is the strongest response?<\/p>",
    "options": {
      "A": "<p>Do not compare raw token counts as a model-independent efficiency score; count with each target model for capacity planning, but decide the change from actual quality, latency, rate consumption, and cost on the same workload.<\/p>",
      "B": "<p>Delete the same percentage of evidence as the reported token increase so the newer model matches the older raw count.<\/p>",
      "C": "<p>Select the older model because fewer reported tokens always means lower billed cost and lower latency.<\/p>",
      "D": "<p>Reuse the older model&#39;s token count for the newer target so both candidates can be compared on one numerical scale.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Token là đơn vị riêng theo model, không phải thước semantic chung. Mỗi candidate cần count theo model đích cho capacity/rate planning, nhưng tối ưu xuyên model phải dùng cùng workload đánh giá và so quality, latency, cost thật. Xóa evidence chỉ để khớp tokenizer cũ có thể mất grounding dù deployment mới đạt target.<\/p>"
  },
  {
    "id": "MOCK-200",
    "set": 4,
    "number": 11,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A support assistant has a large stable policy prefix and lengthy answers. One proposal enables prompt caching and reduces the required answer length while preserving the accepted schema and required content in the same release. Leadership wants to know which lever improves time to first token, full completion, and cost without reducing resolution quality on rare escalations. Which THREE experiment controls are strongest?<\/p>",
    "options": {
      "A": "<p>Record a versioned baseline by workload slice with input and output tokens, cache writes and reads, time to first token, completion time, accepted-answer quality, and retries.<\/p>",
      "B": "<p>Run controlled arms for caching alone, output-contract reduction alone, and their combination on the same cases, traffic cadence, model settings, and grader.<\/p>",
      "C": "<p>Compare each arm on quality thresholds and escalation slices as well as token cost, cache-hit behavior, time to first token, and full completion before promotion.<\/p>",
      "D": "<p>Use average completion time and aggregate acceptance as the promotion metrics, then inspect first-token, cache, tail, and escalation behavior only if those averages regress.<\/p>",
      "E": "<p>Remove the rare escalation examples to reduce input tokens, keep the same response schema, and validate only ordinary cases because they dominate production volume.<\/p>",
      "F": "<p>Add historical cache savings to projected output-token savings and run only the combined candidate, because separate arms would not change the final production configuration.<\/p>"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "<p>Caching chủ yếu đổi xử lý input prefix lặp; contract ngắn chủ yếu đổi output generation. Baseline đa chiều có version và các nhánh single-lever cùng combined làm hiệu ứng quy kết được. Quality và slice escalation hiếm phải là release gate; đo cả first-token và completion latency vì một average không phản ánh trải nghiệm và downstream.<\/p>"
  },
  {
    "id": "MOCK-201",
    "set": 4,
    "number": 12,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A publisher generates 40,000 independent catalog summaries each night. No user waits for an individual result, the complete set is due six hours later, and the current synchronous path passes quality checks but exceeds the cost budget. Which optimization should the team evaluate first?<\/p>",
    "options": {
      "A": "<p>Keep every request synchronous because a non-interactive workload still requires the lowest possible per-item response latency.<\/p>",
      "B": "<p>Pilot Message Batches with the same evaluated request parameters, unique item identifiers, per-result error handling, and a completion-time gate against the six-hour deadline.<\/p>",
      "C": "<p>Enable streaming in each batch request so summaries become available token by token.<\/p>",
      "D": "<p>Match results to inputs by result-file position and retry the whole batch if one item fails.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Đây là tập lớn các request độc lập, không cần phản hồi tương tác, nên Message Batches phù hợp và có giá giảm. Quyết định production vẫn cần pilot cùng quality contract, ID duy nhất vì thứ tự result không bảo đảm, xử lý lỗi riêng từng item và deadline gate vì hoàn tất bất đồng bộ không tức thời.<\/p>"
  },
  {
    "id": "MOCK-202",
    "set": 4,
    "number": 13,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A multi-turn case assistant on the Claude API uses one fixed explicit cache breakpoint after its base policy. As conversations grow, the policy is reused but the entire accumulated history after that point is processed again on every turn, and time to first token steadily rises. The application needs the full recent history. What is the strongest next experiment?<\/p>",
    "options": {
      "A": "<p>Delete all prior turns after each response so every request has the same short prefix.<\/p>",
      "B": "<p>Add more fixed explicit breakpoints only inside the unchanged base policy and assume the growing history will then be cached.<\/p>",
      "C": "<p>Test top-level automatic caching so the cache point advances as the conversation grows, then compare cache reads and writes, time to first token, total input cost, and answer quality against the fixed-breakpoint design on the same sessions.<\/p>",
      "D": "<p>Replace conversation history with a one-sentence model summary and skip evaluation because any shorter context preserves the same information.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Breakpoint cố định sau policy nền khiến history tăng dần nằm ngoài prefix tái sử dụng. Automatic caching cấp cao có thể dịch breakpoint khi thêm turn để history trước đủ điều kiện cache. Phải test session thật và so cache token path, first-token latency, cost, quality; caching tối ưu xử lý chứ không biện minh xóa history cần thiết.<\/p>"
  },
  {
    "id": "MOCK-203",
    "set": 4,
    "number": 14,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A structured-report service lowers max_tokens from 2,000 to 1,000 expecting output cost and completion time to halve. Valid responses naturally end near 320 tokens under both settings, no response reaches either cap, quality is unchanged, and measured latency and billed output tokens do not move. Which THREE conclusions or next steps are justified?<\/p>",
    "options": {
      "A": "<p>Claim a 50% output-cost reduction because the configured maximum was halved.<\/p>",
      "B": "<p>Lower the cap below the observed valid length until the dashboard reports a latency change, regardless of truncation.<\/p>",
      "C": "<p>Remove output-token telemetry because max_tokens alone is sufficient to calculate actual cost.<\/p>",
      "D": "<p>Conclude that this cap change is inactive for the observed workload because responses terminate naturally below both limits.<\/p>",
      "E": "<p>If shorter output is still desired, revise the response contract to remove unneeded content, then measure actual output tokens, completion time, field completeness, and quality on representative cases.<\/p>",
      "F": "<p>Keep an output limit with headroom derived from valid response lengths and monitor stop behavior so future prompt or data changes do not create silent truncation.<\/p>"
    },
    "answer": [
      "D",
      "E",
      "F"
    ],
    "explanation": "<p>`max_tokens` là trần, không phải lượng được đặt trước để tự sinh hoặc tính phí. Output đều kết thúc gần 320 token nên giảm một nửa trần chưa dùng không đổi công việc. Tối ưu hữu ích phải đổi output contract hoặc bottleneck đo được mà vẫn giữ chất lượng; giới hạn cần headroom dựa trên bằng chứng và theo dõi stop behavior.<\/p>"
  },
  {
    "id": "MOCK-204",
    "set": 4,
    "number": 15,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An insurance service compares two prompt strategies on repeated claim reviews. Strategy P sends a 30,000-token policy summary regenerated for each claim and sometimes omits rare exclusions. Strategy Q sends an 80,000-token approved policy as an identical cached prefix and shows high cache reads; both fit the context window. Leadership wants the better quality, time-to-first-token, and cost trade-off. Which decision process is strongest?<\/p>",
    "options": {
      "A": "<p>Select P because its raw input count is lower, and treat any omitted exclusion as an acceptable consequence of token reduction.<\/p>",
      "B": "<p>Select Q because cache reads remove the 80,000 tokens from the model&#39;s context and therefore guarantee higher answer quality.<\/p>",
      "C": "<p>Cache P&#39;s generated summary after each claim and assume later claims will reuse it even though the summary content changes per request.<\/p>",
      "D": "<p>Replay representative traffic with one quality contract, including rare exclusions, and compare actual cache writes and reads, summary-generation overhead, total cost, time to first token, completion, and source-version invalidation before selecting a strategy.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Độ dài input thô và cache hit mô tả cơ chế khác nhau, không cái nào là mục tiêu sản phẩm. P giảm input nhưng thêm chi phí summary và đã làm mất dữ liệu; Q giữ context lớn nhưng cache read có thể giảm xử lý prefix, TTFT. Replay traffic có kiểm soát phải giữ quality/freshness và tính đủ cache path, cost, cả hai pha latency.<\/p>"
  },
  {
    "id": "MOCK-205",
    "set": 4,
    "number": 16,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A nightly batch pipeline loses hours because a newly generated request object contains an unsupported parameter. Validation failures are discovered only after the large batch finishes, while the same request shape will be reused for every item. What is the strongest prevention step before the next full run?<\/p>",
    "options": {
      "A": "<p>Check the generated shape against batch-supported parameters, test each shared Messages shape with a small representative Messages API call, then submit the corrected versioned shape with unique item identifiers.<\/p>",
      "B": "<p>Resubmit all items unchanged because invalid-request failures are transient and automatically become valid on retry.<\/p>",
      "C": "<p>Test only whether the batch creation endpoint returns an identifier and treat creation as proof that every nested request is valid.<\/p>",
      "D": "<p>Split the same invalid request shape into smaller batches so each failure is reported sooner.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Parameter của Message Batch được validation bất đồng bộ và có tham số Messages đồng bộ không hỗ trợ trong batch. Cần kiểm tra support boundary riêng của batch rồi thử từng request shape bằng call nhỏ đại diện. Sau sửa, parameter có version và item ID duy nhất cho scale-out, reconciliation an toàn.<\/p>"
  },
  {
    "id": "MOCK-206",
    "set": 4,
    "number": 17,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A Message Batch reuses a large rubric. The cost forecast assumes every request gets a prompt-cache hit and ignores expired batch items. Which TWO reporting changes make the forecast defensible? Choose 2.<\/p>",
    "options": {
      "A": "<p>Choose a longer cache duration and continue forecasting every request as a hit without measurement.<\/p>",
      "B": "<p>Pre-warm the cache with an invalid zero-token request and assume later requests will hit.<\/p>",
      "C": "<p>Measure cache writes, reads, misses, and total cost on a representative batch instead of assuming a fixed hit rate.<\/p>",
      "D": "<p>Multiply the best batch and cache discounts and treat the result as guaranteed for every item.<\/p>",
      "E": "<p>Track item IDs and report succeeded, errored, canceled, and expired results separately, with cost per usable result.<\/p>",
      "F": "<p>Enable streaming and fast mode so cache misses return interactively from the batch.<\/p>"
    },
    "answer": [
      "C",
      "E"
    ],
    "explanation": "<p>C đo hành vi cache và chi phí thật trên batch traffic đại diện. E đếm trạng thái result và báo cost trên item dùng được, không bỏ expired/failed. Thời lượng tự chọn, pre-warm không hợp lệ hay nhân discount tốt nhất không bảo đảm forecast.<\/p>"
  },
  {
    "id": "MOCK-207",
    "set": 4,
    "number": 18,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A support service requires three fixed fields and a brief rationale. Its prompt demands exactly 75 words, so outputs often add padding or retry after missing the count; field quality already passes, but output tokens and completion time are unstable. What is the strongest optimization?<\/p>",
    "options": {
      "A": "<p>Lower the exact requirement to 60 words and keep retrying any response with a different count.<\/p>",
      "B": "<p>Replace the exact word count with the required fields plus a one- or two-sentence rationale, set an output limit with measured headroom, and re-evaluate field completeness, actual output tokens, retries, and completion latency.<\/p>",
      "C": "<p>Remove the rationale entirely because field quality passes and any narrative is therefore unnecessary.<\/p>",
      "D": "<p>Increase max_tokens so the model has more room to reach exactly 75 words without retrying.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Model dùng token, không đếm từ chính xác; ép số từ cứng có thể gây chèn chữ và retry. Sản phẩm cần lý do ngắn chứ không phải bài đếm. Contract field cố định với rationale theo số câu diễn đạt trực tiếp hơn. Giữ output limit có headroom và kiểm tra đủ field, usage, retry, completion latency trước promotion.<\/p>"
  },
  {
    "id": "MOCK-208",
    "set": 4,
    "number": 19,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>At 10:20, a claims assistant&#39;s product team sees a sudden increase in completion latency and wants to know whether one workspace, model, or service tier caused a cost-and-usage anomaly during the preceding 15 minutes. Usage ingestion sometimes trails application telemetry, and the existing dashboard reads only the daily Cost API. What is the strongest monitoring change?<\/p>",
    "options": {
      "A": "<p>Use application latency to identify the interval, then allocate the next daily organization cost total evenly across all active workspaces.<\/p>",
      "B": "<p>Treat every one-minute Usage bucket through 10:20 as complete, then price its tokens with one standard rate for the incident estimate.<\/p>",
      "C": "<p>Analyze complete one-minute Usage buckets by workspace, model, and tier, use application telemetry for the immature tail, then reconcile the daily cost record.<\/p>",
      "D": "<p>Poll the Cost API every minute, combine each response with current request counts, and publish the result as a minute-level cost bucket.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Sự cố cần định vị nhanh, kiểm soát độ mới dữ liệu và đối soát tài chính. Bucket Usage API một phút hoàn chỉnh cho biết workspace, model, service tier, token path thay đổi; telemetry ứng dụng bao phủ phần đuôi chưa mature và nối usage với latency/outcome. Cost API theo ngày dùng sau để đối soát, không giả làm feed sự cố theo phút.<\/p>"
  },
  {
    "id": "MOCK-209",
    "set": 4,
    "number": 20,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A multilingual service-agent release meets its overall offline pass rate and organization-wide latency target, yet a small-language workflow now causes repeated tool attempts, high token usage, and more unresolved cases. The team must detect regressions without storing every conversation. Which THREE observability changes provide the strongest release control?<\/p>",
    "options": {
      "A": "<p>Keep only the organization-wide pass rate because slicing a metric after release makes the evaluation less objective.<\/p>",
      "B": "<p>Tag telemetry with release, model, workflow, and language slice, then compare task-specific quality and unresolved-case rates against the pre-release baseline.<\/p>",
      "C": "<p>Record every prompt and response indefinitely and use raw transcript volume as the primary health metric.<\/p>",
      "D": "<p>Correlate final task outcome with attempts, retry-exhausted errors, latency, and token categories so a successful HTTP response cannot hide inefficient or failed work.<\/p>",
      "E": "<p>Use total daily cost as the sole quality proxy because costly workflows necessarily have lower answer quality.<\/p>",
      "F": "<p>Capture a representative sample of failed and slow traces with request IDs and permitted diagnostic fields, then add those cases to a sliced regression evaluation.<\/p>"
    },
    "answer": [
      "B",
      "D",
      "F"
    ],
    "explanation": "<p>Regression đi qua quality, reliability, efficiency và cohort. Slice theo release/workflow cho biết nơi xảy ra; liên kết attempt, error, latency, token và outcome giải thích tác động. Mẫu trace có mục tiêu cung cấp chẩn đoán và ca regression mới mà không biến lưu toàn transcript thành chiến lược monitoring.<\/p>"
  },
  {
    "id": "MOCK-210",
    "set": 4,
    "number": 21,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A capacity monitor polls the Usage API every minute. It pages the on-call engineer whenever the newest bucket is empty, even though the bucket usually appears several minutes later and the application continues completing requests. Which redesign best prevents false incidents without hiding real traffic loss?<\/p>",
    "options": {
      "A": "<p>Convert every absent newest bucket to zero and lower the alert threshold further.<\/p>",
      "B": "<p>Disable usage alerts and rely only on customer complaints.<\/p>",
      "C": "<p>Interpolate the newest value from the prior minute and store it as confirmed usage.<\/p>",
      "D": "<p>Maintain a local data-complete-through cutoff from observed ingestion delay, alert on mature usage intervals, and pair it with application request and completion telemetry.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Usage thường có sau vài phút nhưng có thể muộn hơn. Monitor phải tự duy trì mốc `data-complete-through` dựa trên bằng chứng, không đổi thiếu dữ liệu thành 0 hay giả API có completion marker. Telemetry request/completion riêng giữ phát hiện sự cố nhanh trong khi usage feed trưởng thành cho phân tích capacity.<\/p>"
  },
  {
    "id": "MOCK-211",
    "set": 4,
    "number": 22,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A team moves a latency-sensitive workflow to Priority Tier. The product dashboard shows improved latency and unchanged quality, while its Cost API panel shows no added Priority Tier cost. Finance asks whether the rollout is economically acceptable before expansion. What is the strongest response?<\/p>",
    "options": {
      "A": "<p>Attribute Priority usage by service tier, reconcile its charge with the applicable billing source, and compare full cost with measured latency and quality.<\/p>",
      "B": "<p>Attribute Priority usage correctly by service tier, price it at standard on-demand rates, and compare that estimate with latency and quality.<\/p>",
      "C": "<p>Reconcile the invoice total including Priority, allocate its increase across workflows by request count, and approve if aggregate latency remains improved.<\/p>",
      "D": "<p>Measure the workflow&#39;s Priority usage and latency accurately, but postpone cost reconciliation until after expanding the rollout to all eligible traffic.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Rollout gồm attribution service tier, lợi ích vận hành và cổng kinh tế trước mở rộng. Cost API không gồm Priority Tier nên zero entry hoặc ước tính standard đều không đủ. Cần quy usage Priority thật, đối soát khoản phí áp dụng và đánh giá toàn chi phí cạnh latency, task quality đo được.<\/p>"
  },
  {
    "id": "MOCK-212",
    "set": 4,
    "number": 23,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>After a prompt-cache rollout, a support assistant serves the same workload and completes the same tasks, but a dashboard based only on uncached input tokens reports a 75% collapse in prompt demand. Operators also need to forecast input-token rate-limit headroom across models whose cache-read accounting may differ. What is the strongest dashboard redesign?<\/p>",
    "options": {
      "A": "<p>Interpret the uncached-token decrease as a 75% fall in customer demand and reduce capacity immediately.<\/p>",
      "B": "<p>Report total prompt consumption from uncached input, cache creation, and cache reads, then use that single view for both demand and rate-limit headroom.<\/p>",
      "C": "<p>Count cache-read tokens as consuming input-token rate-limit capacity in every request.<\/p>",
      "D": "<p>Separate total prompt consumption from model-qualified rate pressure, monitor the reported limiter and headroom, and validate model and workspace slices against request volume and completed outcomes.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Caching tạo hai góc nhìn hợp lệ. Tổng prompt consumption gồm uncached input, cache creation, cache read; rate pressure phải theo accounting của model triển khai và limiter báo cáo. Slice model/workspace, request volume và completed outcome xác nhận dịch chuyển category do cache chứ không mất demand. Một panel không phục vụ được cả hai quyết định.<\/p>"
  },
  {
    "id": "MOCK-213",
    "set": 4,
    "number": 24,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A governance dashboard allocates all usage to named workspaces and API keys. Its totals are lower than the organization total because the pipeline discards records whose workspace_id or api_key_id is null, including some Workbench activity. What is the strongest correction?<\/p>",
    "options": {
      "A": "<p>Assign every null record to the largest workspace and label the allocation estimated so the dashboard total still reconciles.<\/p>",
      "B": "<p>Preserve nulls in an explicit default or unattributed bucket, reconcile to the organization total, and investigate ownership separately.<\/p>",
      "C": "<p>Exclude Workbench activity from workspace governance and monitor it only in a separate request-count dashboard.<\/p>",
      "D": "<p>Infer the missing workspace and API key from the model, service tier, timestamp, and nearest named traffic.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Null có thể là giá trị dimension hợp lệ trong usage, không phải lý do bỏ activity. Bucket default hoặc unattributed rõ giữ tổng tổ chức đầy đủ và không bịa ownership. Khoảng trống governance/attribution được xử lý riêng trong khi capacity evidence vẫn chính xác.<\/p>"
  },
  {
    "id": "MOCK-214",
    "set": 4,
    "number": 25,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A benefits assistant routes 10% of eligible address-change cases through a new automated handoff. API error, latency, and token budgets remain healthy, but the exposed cohort completes fewer cases and produces more next-day reversals. What is the strongest rollout response?<\/p>",
    "options": {
      "A": "<p>Correlate release and exposure with completion and reversal thresholds, limit the route when its stop threshold is crossed, then re-ramp only after a corrected cohort meets product and operational criteria.<\/p>",
      "B": "<p>Continue rollout because all provider-level health metrics remain inside budget.<\/p>",
      "C": "<p>Pause the automated route for every user immediately, then resume it as soon as provider error and latency return to their normal ranges.<\/p>",
      "D": "<p>Correlate exposure with reversals and investigate the handoff, but continue expanding until the next monthly offline evaluation confirms a regression.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Operational health là cần nhưng chưa đủ khi outcome sản phẩm bảo vệ bị giảm. Liên kết release/exposure xác định rollout có đổi completion và reversal rate. Stop threshold định trước hỗ trợ giới hạn hoặc pause; route đã sửa chỉ mở rộng sau cohort kiểm soát đạt cả product outcome lẫn operational criteria.<\/p>"
  },
  {
    "id": "MOCK-215",
    "set": 4,
    "number": 26,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>As an organization grows, its Usage API dashboard begins showing a gradual traffic decline even though application completions rise. The collector still receives successful responses, and each fetch now returns exactly the configured maximum number of records. What is the strongest fix?<\/p>",
    "options": {
      "A": "<p>Increase the requested page size, publish each successful first response as complete, and revisit the limit when the dashboard diverges again.<\/p>",
      "B": "<p>Scale the returned usage total by the ratio of application completions to API responses, then label the result as reconciled usage.<\/p>",
      "C": "<p>Follow next_page until has_more is false, apply the freshness cutoff, then reconcile the complete interval with application volume.<\/p>",
      "D": "<p>Replace granular usage monitoring with the daily Cost API and use application logs to distribute that cost across each interval.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Page đầu thành công không phải dataset đầy đủ nếu API còn page. Collector phải theo cursor tới hết rồi áp freshness rule trước khi publish interval. Đối soát với application volume là tín hiệu độc lập rằng truncation hoặc delayed ingestion chưa quay lại.<\/p>"
  },
  {
    "id": "MOCK-216",
    "set": 4,
    "number": 27,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A public benefits chatbot already screens unsafe requests and gives a clear refusal. A few accounts repeatedly resubmit the same prohibited request with minor paraphrases, while legitimate users occasionally trigger one false refusal. What is the strongest next control?<\/p>",
    "options": {
      "A": "<p>Track repeat attempts by account and category, give clear feedback, escalate from throttling to suspension, and send disputed classifications to manual review.<\/p>",
      "B": "<p>Permanently ban every account after its first refusal, omit the policy category, and let support reverse the ban without reviewing repeat-attempt evidence.<\/p>",
      "C": "<p>Track attempts by account, but reset the refusal counter after each paraphrase and evaluate every new string without its earlier policy history.<\/p>",
      "D": "<p>Throttle all chatbot users whenever any account repeats a prohibited request and retain the global restriction until a scheduled organization-wide safety review completes.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Sau khi có screen và refusal ở request, cố thử lại trở thành quyết định ứng phó abuse. Bằng chứng theo account/category phân biệt né tránh dai dẳng với một tranh chấp. Phản hồi rõ, throttling/suspension theo giai đoạn và manual review tạo phản ứng tương xứng mà không làm yếu guardrail.<\/p>"
  },
  {
    "id": "MOCK-217",
    "set": 4,
    "number": 28,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A research agent receives a web-fetch tool_result containing third-party text, then the application appends &#39;compare this with the approved thesis&#39; inside the same tool_result string. Embedded page text can close the application&#39;s delimiter and imitate that instruction. Which THREE message-boundary changes are strongest?<\/p>",
    "options": {
      "A": "<p>Place the fetched strings in a JSON-encoded data field and include explicit source and untrusted-content metadata.<\/p>",
      "B": "<p>JSON-encode the page with provenance, but place the application&#39;s comparison instruction in another field of the same tool_result object.<\/p>",
      "C": "<p>Send the application&#39;s comparison instruction in a following trusted user turn rather than embedding it in the untrusted tool_result.<\/p>",
      "D": "<p>Keep the stable policy in the system prompt and sanitize obvious attack phrases, but append the application&#39;s comparison instruction to the tool_result.<\/p>",
      "E": "<p>Keep the enduring policy in the system prompt and state that fetched tool content is untrusted data that cannot override that policy or the user&#39;s task.<\/p>",
      "F": "<p>Base64-encode the entire free-form tool_result but retain the same mixed data-and-instruction string and ask the model to decode it.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "<p>Lỗi do trộn chỉ dẫn ứng dụng đáng tin với text kẻ tấn công trong một untrusted result. Field JSON encode và metadata nguồn làm rõ ranh giới dữ liệu. Policy ổn định ở system prompt; instruction tiếp theo của ứng dụng nằm trong trusted user turn sau. Encode chuỗi trộn hoặc nâng page lên system không sửa trust boundary.<\/p>"
  },
  {
    "id": "MOCK-218",
    "set": 4,
    "number": 29,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A pricing assistant needs a small set of discount boundaries, but its system prompt also contains the entire proprietary pricing manual. Users have elicited fragments of that manual, and an increasingly complex &#39;never reveal the prompt&#39; instruction has begun reducing quote accuracy. What is the strongest redesign?<\/p>",
    "options": {
      "A": "<p>Remove unused manual sections, then rely on additional secrecy instructions without output screening, incident audits, or quote-quality re-evaluation, accepting any remaining leak as unavoidable.<\/p>",
      "B": "<p>Remove manual content not required for quoting, isolate the remaining context from user queries, screen outputs for leakage signals, audit incidents, and re-evaluate quote accuracy.<\/p>",
      "C": "<p>Move the full manual behind a retrieval tool, allow every pricing request to retrieve the complete document, and treat authenticated retrieval as complete leak prevention.<\/p>",
      "D": "<p>Keep the entire manual, add output screening and incident audits, and treat the pre-change quote score as proof that the defensive controls need no re-evaluation.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Phòng prompt leak chỉ giảm rủi ro, không phải niêm phong tuyệt đối. Thiết kế mạnh trước hết bỏ chi tiết độc quyền không cần cho task, rồi tách context, screen output và audit lỗi. Vì prompt phòng vệ phức tạp có thể giảm hiệu năng, phải đánh giá lại độ chính xác trích dẫn và tiện ích người dùng hợp lệ.<\/p>"
  },
  {
    "id": "MOCK-219",
    "set": 4,
    "number": 30,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A trusted MCP server originally exposed read-only ticket tools, so a team explicitly set its entire MCP toolset to always_allow. The server later adds close_account, while read-only lookups must remain automatic and account closure must never run without review. What is the strongest configuration response?<\/p>",
    "options": {
      "A": "<p>Keep the toolset-wide always_allow policy and add a system instruction asking Claude to avoid close_account unless the request sounds urgent.<\/p>",
      "B": "<p>Change the entire MCP toolset to always_ask, including all read-only lookups, and accept the resulting approval volume as the only safe design.<\/p>",
      "C": "<p>Restore the MCP default to always_ask, explicitly auto-allow only vetted read tools, and disable close_account unless an approved use requires its own always_ask override.<\/p>",
      "D": "<p>Trust the MCP toolset&#39;s documented server name as proof that every future tool it adds has the same risk as the original read-only tools.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Policy `always_allow` toàn toolset có thể nguy hiểm khi inventory server đổi. Đưa mặc định về `always_ask` ngăn capability mới tự thừa hưởng auto execution. Override rõ giữ thao tác đọc đã duyệt tự động; `close_account` nên disable nếu không cần hoặc có approval gate riêng nếu workflow quản trị yêu cầu.<\/p>"
  },
  {
    "id": "MOCK-220",
    "set": 4,
    "number": 31,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A marketplace moderation system currently turns every uncertain classification into an automatic permanent block. Harmful posts still escape, appeals are rising, and policy owners need different responses for different risk levels. Which THREE changes create the strongest safety control?<\/p>",
    "options": {
      "A": "<p>Keep one binary label and permanently block every case whose score is not exactly zero.<\/p>",
      "B": "<p>Define policy-specific risk categories and calibrated levels whose outputs map to explicit actions.<\/p>",
      "C": "<p>Automatically publish every medium-risk case because classifier uncertainty means the content is probably harmless.<\/p>",
      "D": "<p>Evaluate representative cases by category, measure harmful misses and benign blocks, and tune thresholds against the policy&#39;s acceptance criteria.<\/p>",
      "E": "<p>Hide moderation reasons from users and reviewers so attackers cannot learn that any policy exists.<\/p>",
      "F": "<p>Automatically block defined high-risk cases, route appropriate medium-risk or repeated cases to human review, and provide constructive user feedback.<\/p>"
    },
    "answer": [
      "B",
      "D",
      "F"
    ],
    "explanation": "<p>Moderation control phải biểu diễn nhóm rủi ro và mức nghiêm trọng, không gom mọi uncertainty thành hành động không đảo được. Eval đại diện đo cả harmful miss lẫn benign block. Nội dung high-risk có thể auto-block; medium-risk phù hợp hoặc lặp lại chuyển human review với feedback rõ.<\/p>"
  },
  {
    "id": "MOCK-221",
    "set": 4,
    "number": 32,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A multiagent session contains a research thread and a publishing thread. Both agent definitions declare the same collaboration MCP server, but only the publisher should act with the customer&#39;s write-capable vault credential. What is the strongest boundary?<\/p>",
    "options": {
      "A": "<p>Attach the write-capable vault to the shared session and rely on the research agent&#39;s name to keep it from using the matching server.<\/p>",
      "B": "<p>Keep both agents in the shared session, but tell the research thread in its system prompt that publishing credentials are reserved for another thread.<\/p>",
      "C": "<p>Rotate the write credential after each research task while continuing to attach the same vault to every thread.<\/p>",
      "D": "<p>Isolate publishing in a session where only the publisher declares the server and receives the vault; hand off only non-secret research results.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Vault credential trong phiên multiagent áp dụng xuyên thread; agent khai báo MCP server khớp có thể xác thực bằng nó. Tên, prompt hay rotate secret không tạo credential boundary. Bỏ server khỏi research và cô lập publishing trong session đúng mục đích ngăn research agent lấy credential ghi, vẫn cho handoff kết quả không bí mật.<\/p>"
  },
  {
    "id": "MOCK-222",
    "set": 4,
    "number": 33,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A computer-use agent processes invoices in a browser with access to a staging ledger and a production payment page. A supplier PDF displays suspected prompt-injection text, so the computer-use safeguard requests user confirmation. Operations wants useful automation, but confirmation fatigue and production impact must be controlled. What is the strongest design?<\/p>",
    "options": {
      "A": "<p>Keep the injection confirmation, show its target and action, default to staging, and require logged separate authorization for production.<\/p>",
      "B": "<p>Keep confirmation for every screen interaction, give the agent unrestricted production access, and ask users to approve quickly so the queue does not grow.<\/p>",
      "C": "<p>Restrict the agent to staging and log all browser actions, but automatically dismiss injection confirmations for supplier domains on an allowlist.<\/p>",
      "D": "<p>Move all invoices to permanent manual processing because any prompt-injection warning proves computer-use automation cannot be bounded safely.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Injection nghi ngờ trong computer-use không nên bị bỏ qua chỉ vì nguồn quen. Giữ confirmation, hiển thị hành động và target cụ thể, mặc định staging-only để phê duyệt có hiểu biết và giảm blast radius. Authorization production riêng có log giữ automation hữu ích mà không biến confirmation thành rubber stamp.<\/p>"
  },
  {
    "id": "MOCK-223",
    "set": 4,
    "number": 34,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A nightly service uses a seven-day Claude API key. The team assumes every key receives an email warning, tries to extend the same key after creation, and waits for a 401 before rotating. Which THREE changes create the strongest expiration and rotation control?<\/p>",
    "options": {
      "A": "<p>Inventory key expires_at values through the Console or Admin API and alert with enough lead time for the service&#39;s deployment process.<\/p>",
      "B": "<p>Create a replacement key with the intended expiration, deploy and validate it before the old key expires, then retire the old credential.<\/p>",
      "C": "<p>Change the existing key&#39;s expiration date after creation whenever deployment is delayed.<\/p>",
      "D": "<p>Keep key material in a secret manager, scope it to the appropriate workspace, and revoke it immediately if leakage is suspected even when expiration is near.<\/p>",
      "E": "<p>After a key expires, reactivate the same identifier so downstream configuration does not need to change.<\/p>",
      "F": "<p>Treat the selected expiration as sufficient protection and store the key directly in the service configuration for easier rotation.<\/p>"
    },
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "<p>Hết hạn key được cố định lúc tạo, cảnh báo không bao phủ mọi key ngắn hạn và key hết hạn không bật lại được. Dịch vụ phải monitor `expires_at`, tạo và validate key thay trước cutover rồi retire key cũ. Secret manager, workspace scope và revoke ngay khi nghi lộ vẫn cần vì expiry không thay secret hygiene.<\/p>"
  },
  {
    "id": "MOCK-224",
    "set": 4,
    "number": 35,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A deployment agent requests two approval-gated tools in parallel: upload_build to staging and promote_release to production. The approval service shows one session-level Allow button and replies to the first pending event ID it finds, so an approver cannot tell which action will execute. What is the strongest fix?<\/p>",
    "options": {
      "A": "<p>Keep the single Allow button but display the agent&#39;s prose summary, then approve whichever event ID is first in the queue.<\/p>",
      "B": "<p>Bind each event ID to the visible tool, arguments, target, and authenticated approver; resolve and log every event separately.<\/p>",
      "C": "<p>Approve the whole session after staging upload because later production tools inherit the safety of the first approved action.<\/p>",
      "D": "<p>Deny every pending event without showing its arguments, then ask the agent to retry both tools under new event IDs.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Session `always_ask` gắn mỗi tool call chặn bằng event ID riêng. UI approval phải gắn tool, argument, target và approver đã xác thực với ID đó, trả allow/deny cho từng event và log. Phê duyệt theo session hoặc thứ tự queue có thể thả hành động khác với điều người duyệt nghĩ.<\/p>"
  },
  {
    "id": "MOCK-225",
    "set": 4,
    "number": 36,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A production support agent includes a shell tool inherited from a development template. Production has no approved shell use case, but the team set it to always_ask and approvers now receive frequent plausible-looking requests. Read-only diagnostic tools are still required. What is the strongest control?<\/p>",
    "options": {
      "A": "<p>Change shell to always_allow during busy periods so approvers can focus on the read-only diagnostic alerts.<\/p>",
      "B": "<p>Keep shell enabled with always_ask and train approvers to deny it, because an approval gate is equivalent to removing the capability.<\/p>",
      "C": "<p>Disable shell in production, retain only necessary diagnostic tools, and move maintenance shell to a separate controlled environment.<\/p>",
      "D": "<p>Rename shell to emergency_diagnostics and leave it approval-gated so the model and approver understand that it should be used rarely.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Permission policy quyết định khi nào tool đã bật chạy, không quyết định tool có nên tồn tại. Production không có use case shell được duyệt nên disable để loại capability thừa và approval fatigue. Chẩn đoán cần thiết giữ policy phù hợp; bảo trì ngoại lệ diễn ra trong môi trường kiểm soát riêng.<\/p>"
  },
  {
    "id": "MOCK-226",
    "set": 4,
    "number": 37,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A claims service marks every HTTP 200 from the Messages API as a completed claim summary and stores the first text block. Audits find saved outputs that ended at a token limit, paused during server-tool work, or were refused. The service must expose only complete, schema-valid summaries while preserving recoverable work. What is the strongest correction?<\/p>",
    "options": {
      "A": "<p>Accept any nonempty text block after HTTP success, then run the claim schema validator and route malformed summaries to an analyst.<\/p>",
      "B": "<p>Retry every HTTP 200 once, compare the two summaries, and keep the longer schema-valid response unless both calls return an API error.<\/p>",
      "C": "<p>Treat only 4xx and 5xx as failed requests, then add a visible disclaimer to short summaries before storing them.<\/p>",
      "D": "<p>Route by stop_reason, use only defined continuation paths, quarantine truncated or refused output, and expose only a schema-valid completed summary.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Messages response thành công vẫn cần diễn giải trạng thái. Ứng dụng phải phân biệt hoàn tất tự nhiên, truncation, tool continuation, server-tool paused và refusal, rồi validation artifact nghiệp vụ trước lưu. Retry bừa hoặc dựa độ dài sẽ trộn failure mode và có thể publish dữ liệu thiếu.<\/p>"
  },
  {
    "id": "MOCK-227",
    "set": 4,
    "number": 38,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>An emergency-guidance service retries on a fallback model after a mid-stream refusal, but currently concatenates the primary partial text with the fallback answer. Which TWO changes preserve one complete, attributable response? Choose 2.<\/p>",
    "options": {
      "A": "<p>Keep the primary prefix when it passes sentence-level checks, then append only the fallback model&#39;s missing steps.<\/p>",
      "B": "<p>Ask the fallback model to continue from the final primary sentence so the retry consumes fewer tokens and preserves continuity.<\/p>",
      "C": "<p>Discard all primary-model output from the refused attempt, including any apparently complete steps.<\/p>",
      "D": "<p>Retry the original request on the same model until one stream reaches end_turn, because model consistency outweighs the refusal signal.<\/p>",
      "E": "<p>Retry the complete original request on a qualified compatible model, validate it, and publish only that response with the serving model recorded.<\/p>",
      "F": "<p>Publish the fallback output once it reaches end_turn, without separate validation or recording which model served it.<\/p>"
    },
    "answer": [
      "C",
      "E"
    ],
    "explanation": "<p>C bỏ output refused chưa hoàn chỉnh. E retry toàn request trên model tương thích đã đủ chuẩn, validation response và chỉ công khai artifact có attribution đó. Nối chuỗi, continuation, lặp cùng model refusal hoặc publish chưa validation không đạt yêu cầu.<\/p>"
  },
  {
    "id": "MOCK-228",
    "set": 4,
    "number": 39,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A research agent uses a server-side web-search tool. When a response ends with pause_turn, the controller starts the original user request again and sometimes duplicates searches; when a client tool is requested, it also sends the assistant response back without tool results. Which controller change best addresses both failures?<\/p>",
    "options": {
      "A": "<p>For pause_turn, send back the assistant content with a continuation bound; for tool_use, execute each client tool and return matching results.<\/p>",
      "B": "<p>For both states, resend only the original user message until end_turn appears, then deduplicate searches and client-tool effects from the completed transcript.<\/p>",
      "C": "<p>Convert every pause_turn into tool_use, synthesize a successful tool_result for the server search, and preserve the original tool catalog on the retry.<\/p>",
      "D": "<p>Return the partial response to the user for both states, label it pending, and let the next user turn decide whether to resume or supply tool results.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>`pause_turn` nghĩa server-tool loop đạt giới hạn iteration mỗi request, nên assistant content được gửi lại để tiếp tục cùng turn. Chờ client tool dùng `tool_use` và cần `tool_result` khớp. Trộn hai protocol sẽ khởi động lại việc hoặc để tool call chưa giải quyết.<\/p>"
  },
  {
    "id": "MOCK-229",
    "set": 4,
    "number": 40,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A regulated support exporter must quote uploaded transcripts exactly and also return all required findings. It configures `### END` as a custom stop sequence. When Claude reproduces that phrase from a transcript, generation ends there; a valid JSON prefix can still pass syntax checks and reach the archive. What is the strongest diagnosis and redesign?<\/p>",
    "options": {
      "A": "<p>Log stop_reason and the fired sequence, retain the delimiter for compatibility, and raise max_tokens before replaying only failed records.<\/p>",
      "B": "<p>Confirm the fired stop_sequence, remove or safely encode the colliding delimiter, and require terminal-state plus semantic-completeness validation before archival.<\/p>",
      "C": "<p>Replace the delimiter with a rarer marker, but archive any parser-valid prefix without checking terminal state or required-finding coverage.<\/p>",
      "D": "<p>Escape the phrase only in stored transcripts after generation and retry unchanged requests until one schema-valid prefix is produced.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Stop sequence cấu hình có thể xuất hiện trong dữ liệu người dùng và dừng generation sớm. Ứng dụng phải quan sát cả `stop_reason` và sequence đã kích hoạt, bỏ hoặc encode delimiter va chạm, rồi validation contract export đầy đủ. Token limit hay hậu xử lý thẩm mỹ không sửa premature termination.<\/p>"
  },
  {
    "id": "MOCK-230",
    "set": 4,
    "number": 41,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A nightly moderation evaluation sends multi-turn histories from Claude Fable 5 through Message Batches. The dashboard counts every result.type of succeeded as an answer, and the team plans to place server-side fallbacks in each batch item. Which THREE changes implement the documented batch recovery path? Choose 3.<\/p>",
    "options": {
      "A": "<p>Inspect each succeeded result&#39;s stop_reason or stop_details and count refusal separately from a usable business answer.<\/p>",
      "B": "<p>Collect refused items and resubmit them on a qualified fallback model as a new batch or direct requests.<\/p>",
      "C": "<p>Strip Fable 5 thinking blocks from refused multi-turn histories before resubmitting those requests.<\/p>",
      "D": "<p>Include the fallbacks parameter in every batch item and classify any per-item error as a transient batch delay.<\/p>",
      "E": "<p>Treat an empty content array as the only durable refusal signal and ignore stop_reason when content is nonempty.<\/p>",
      "F": "<p>Retry refused items on the same model until the batch succeeds, because identical models provide the most comparable evaluation.<\/p>"
    },
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "<p>Item batch có `result.type=succeeded` nhưng response `stop_reason=refusal`. Batch không hỗ trợ fallback server-side. Cần tìm item refused, bỏ thinking block Fable 5 khỏi history nhiều turn và resubmit request đầy đủ trên fallback model đạt chuẩn.<\/p>"
  },
  {
    "id": "MOCK-231",
    "set": 4,
    "number": 42,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A policy summarizer requests the largest possible output and accepts a valid-looking JSON prefix when stop_reason is model_context_window_exceeded. It then labels the missing recommendations as “not applicable.” The input and output together have exhausted the model context, and the full recommendation set is mandatory. What is the best response?<\/p>",
    "options": {
      "A": "<p>Preserve the prefix as final because model_context_window_exceeded is a successful response, the JSON parser accepted it, and users can infer omitted fields.<\/p>",
      "B": "<p>Convert each omitted recommendation to not applicable, attach a context-limit warning, and let downstream schema checks determine whether it is usable.<\/p>",
      "C": "<p>Treat it as incomplete, segment governed context without losing required evidence, rerun, and verify every mandatory recommendation.<\/p>",
      "D": "<p>Add custom stop sequences for each JSON section so generation ends naturally before exhausting context while retaining a parser-valid prefix.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>`model_context_window_exceeded` là trạng thái API thành công nhưng generation đã bị cắt. Prefix parse được không thể gọi là hoàn chỉnh khi thiếu field bắt buộc. Workflow phải fail closed, thiết kế lại hoặc chia context không mất evidence, chạy lại và validation đầy đủ ngữ nghĩa.<\/p>"
  },
  {
    "id": "MOCK-232",
    "set": 4,
    "number": 43,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A company runs the same model family through the Claude API and Google Cloud. Its migration register stores only the family name and copies the Claude API retirement date to both deployments. Scheduled jobs use several API keys, and no replacement has been tested on safety-critical workflows. Which plan most reduces retirement risk?<\/p>",
    "options": {
      "A": "<p>Wait for the first provider to reject a request, route that workload to the other provider under the same family label, and reconcile the register afterward.<\/p>",
      "B": "<p>Replace every deployment immediately with the newest family alias, preserve existing prompts, and skip regression tests because the replacement is officially recommended.<\/p>",
      "C": "<p>Track one global retirement date, export usage by workspace rather than exact model, and schedule one shared cutover at the earliest provider date.<\/p>",
      "D": "<p>Inventory exact model, key, workload, and provider; follow each provider&#39;s schedule; qualify replacements on critical evaluations; migrate before retirement.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Model retirement là dependency vận hành, không chỉ đổi tên family. Anthropic và platform đối tác có lịch khác nhau; request tới model retired sẽ lỗi. Kế hoạch tin cậy phải kiểm kê đúng model/provider, test thay thế trên task bị ảnh hưởng và migrate trước từng ngày áp dụng.<\/p>"
  },
  {
    "id": "MOCK-233",
    "set": 4,
    "number": 44,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A safety-sensitive assistant has dashboards for 4xx and 5xx errors only. After enabling refusal fallback, user complaints rise even though the error rate stays flat: some requests are declined and others are answered by a different model. Which THREE signals most directly expose the hidden failure and recovery behavior? Choose 3.<\/p>",
    "options": {
      "A": "<p>Combine refusals with 5xx errors so one availability percentage covers every unsuccessful interaction.<\/p>",
      "B": "<p>Parse the human-readable stop_details.explanation into permanent numeric categories and alert only when its exact wording changes.<\/p>",
      "C": "<p>Record only the requested model because fallback is an implementation detail that should not affect evaluation slices.<\/p>",
      "D": "<p>Emit a refusal event from stop_reason or stop_details.type, including the stable category when present rather than depending on HTTP errors.<\/p>",
      "E": "<p>Record fallback handoffs and the resolved model that actually served the response.<\/p>",
      "F": "<p>Measure final task success, safety, latency, and refusal-after-fallback by serving model and risk slice.<\/p>"
    },
    "answer": [
      "D",
      "E",
      "F"
    ],
    "explanation": "<p>Refusal là HTTP 200 nên dashboard chỉ theo error không thấy. Fallback cũng có thể đổi serving model. Telemetry riêng cho refusal/handoff, attribution resolved model và outcome business/safety làm lộ cả lần từ chối ban đầu lẫn recovery có đạt contract không.<\/p>"
  },
  {
    "id": "MOCK-234",
    "set": 4,
    "number": 45,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An operations team enables server-side refusal fallback and declares that rate limits, overloads, and server errors are now covered by model failover. During a traffic spike, requests still return errors and an application retry loop amplifies load. What is the strongest correction?<\/p>",
    "options": {
      "A": "<p>Reserve fallback for classifier declines; apply separate bounded backoff and availability handling to rate limits and transient errors.<\/p>",
      "B": "<p>Add more fallback models and a larger retry budget, because the chain is attempted for each non-200 response before the application receives an error.<\/p>",
      "C": "<p>Disable application retries, convert every transient API error into a synthetic refusal, and send it through the existing fallback chain.<\/p>",
      "D": "<p>Keep the current retry loop, suppress rate-limit and overload alerts after fallback is configured, and judge availability from eventual success.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Refusal fallback là cơ chế recovery của safety classifier. Rate limit, overload và server error là error riêng cần retry giới hạn, backoff, capacity và degraded-service policy. Dùng một cơ chế làm failover phổ quát để hở availability risk và có thể làm spike nặng hơn.<\/p>"
  },
  {
    "id": "MOCK-235",
    "set": 4,
    "number": 46,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A clinical referral assistant drafts urgency and destination recommendations from an approved patient packet. Reviewers currently see only polished prose and a model confidence score; approval is fast, but audits find that source conflicts and missing observations are overlooked. Which review design best strengthens human validation without asking reviewers to reconstruct the entire case?<\/p>",
    "options": {
      "A": "<p>Show the draft and confidence score first, let reviewers open source records after rejection, and require a reason only when they override the recommendation.<\/p>",
      "B": "<p>Present source facts and provenance, proposed fields, flagged gaps, and a task-specific rubric with approve, edit, or escalate outcomes.<\/p>",
      "C": "<p>Replace prose with a shorter recommendation and require one-click approval so reviewers can process more cases within the same shift.<\/p>",
      "D": "<p>Display the model&#39;s internal reasoning and hide the proposed action until the reviewer confirms that the reasoning sounds clinically plausible.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Human review chỉ hữu ích khi reviewer thấy quyết định thật, bằng chứng liên quan và tiêu chí rõ. Packet giới hạn cần provenance, field/hành động đề xuất chính xác, input thiếu/xung đột và rubric task-specific, rồi ghi approve/edit/escalate. Confidence và văn phong trau chuốt dễ gây anchoring nếu thiếu evidence validation.<\/p>"
  },
  {
    "id": "MOCK-236",
    "set": 4,
    "number": 47,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A global marketplace requires qualified human review before a high-risk listing can be published. Overnight, the assigned reviewer may be unavailable, and the current timeout handler silently publishes the listing. While required review is pending, policy permits a non-substantive holding response to the customer, and only qualified reviewers may decide the case. Which THREE controls create the strongest bounded takeover and recovery strategy? Choose 3.<\/p>",
    "options": {
      "A": "<p>Keep the exact listing, risk evidence, and policy criteria in a pending state, and never convert reviewer absence or timeout into approval.<\/p>",
      "B": "<p>Publish a high-risk listing when its review timer expires, but mark it provisional so a later reviewer can reverse the decision.<\/p>",
      "C": "<p>Ask the model to impersonate the unavailable reviewer and approve when its explanation mentions every policy category.<\/p>",
      "D": "<p>Allow handoff only to a qualified authenticated reviewer and present the same evidence and policy criteria for a new explicit decision.<\/p>",
      "E": "<p>Until a qualified decision arrives, keep the high-risk listing unpublished and send only the policy-permitted holding response.<\/p>",
      "F": "<p>Broadcast the case to all staff accounts and accept the first approve click, then remove duplicate decisions after publication.<\/p>"
    },
    "answer": [
      "A",
      "D",
      "E"
    ],
    "explanation": "<p>Reviewer vắng mặt không phải phê duyệt. Evidence và tiêu chí phải giữ pending; takeover chuyển tới reviewer đủ năng lực đã xác thực để ra quyết định mới rõ. Trước đó listing high-risk vẫn bị chặn, còn holding response không substantive được phép tạo đường khách hàng giới hạn.<\/p>"
  },
  {
    "id": "MOCK-237",
    "set": 4,
    "number": 48,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A finance assistant uses the SDK tool runner for account lookups and a client tool that releases a payment hold. The tool runner automatically executes calls, but policy requires an analyst to inspect the exact release request and approve it before execution while all decisions are logged. What is the best implementation?<\/p>",
    "options": {
      "A": "<p>Keep the automatic runner and ask Claude to call the release tool only after it has generated the phrase analyst approved.<\/p>",
      "B": "<p>Run the automatic loop, execute the release, and ask an analyst to validate the resulting ledger entry before notifying the customer.<\/p>",
      "C": "<p>Use a manual loop to intercept the release call, show exact arguments and evidence, log the analyst&#39;s decision, and execute only after approval.<\/p>",
      "D": "<p>Remove every lookup and release tool, export the complete case to analysts, and require them to process and reconcile all account state outside the application.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>SDK tool runner tự động chạy tool được yêu cầu. Workflow phải dừng chờ human approval, thực thi có điều kiện và giữ decision log riêng cần manual loop. Ứng dụng hiển thị release đề xuất cùng evidence, ghi disposition analyst và chỉ chạy sau approval.<\/p>"
  },
  {
    "id": "MOCK-238",
    "set": 4,
    "number": 49,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A deployment agent asks the same on-call engineer to approve every file read, workspace write, network request, and production command. Ninety-six percent of prompts are approved within two seconds, including simulated dangerous commands hidden among routine work. The team needs high automation in an isolated workspace but must cap production impact. Which redesign is strongest?<\/p>",
    "options": {
      "A": "<p>Keep every prompt, add a red warning color, and treat two-second approvals as proof that the engineer understood each command.<\/p>",
      "B": "<p>Auto-approve every action after the first approved prompt in a session, then rely on the model&#39;s safety classifier to stop dangerous commands.<\/p>",
      "C": "<p>Require two engineers for every read, write, and network request, while leaving production credentials and unrestricted external destinations inside the agent environment.<\/p>",
      "D": "<p>Contain routine work with hard filesystem, credential, and egress limits; automate permitted actions; reserve informed approval for production exceptions.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Prompt phê duyệt thường xuyên không phải bảo vệ tuyệt đối; chúng gây mệt và đồng ý máy móc. Thiết kế mạnh trước tiên giới hạn môi trường agent có thể chạm, cho phép routine giới hạn và chỉ HITL cho ngoại lệ hậu quả rõ. Như vậy có blast-radius cứng và bước review con người hiểu được.<\/p>"
  },
  {
    "id": "MOCK-239",
    "set": 4,
    "number": 50,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A benefits-answer review queue records only whether an employee clicked approve or reject. Policy owners cannot tell which category failed, whether a reviewer corrected the answer, or whether a prompt revision improved harmful misses without increasing benign escalations. Which THREE additions create the strongest HITL feedback loop? Choose 3.<\/p>",
    "options": {
      "A": "<p>Replace reviewer decisions with the model&#39;s confidence score so every record uses one consistent numeric field.<\/p>",
      "B": "<p>Store the reviewed input, output, policy and rubric version, reviewer disposition, reason code, and any corrected answer as one linked record.<\/p>",
      "C": "<p>Track precision, recall, escalation volume, and reviewer overturns by policy category and risk slice.<\/p>",
      "D": "<p>Train immediately on every rejected answer and delete the original record so reviewers cannot be anchored by historical mistakes.<\/p>",
      "E": "<p>Optimize only for lower queue size because fewer human reviews prove that the system has become safer.<\/p>",
      "F": "<p>Convert representative resolved cases into a fixed regression set and gate policy or prompt changes before rollout.<\/p>"
    },
    "answer": [
      "B",
      "C",
      "F"
    ],
    "explanation": "<p>Vòng feedback HITL cần record quyết định truy nguyên, metric vận hành nhiều chiều và đường kiểm soát đưa ca đã giải quyết vào eval. Input/output/policy version/lý do/sửa đổi liên kết giải thích thay đổi; precision, recall, escalation, overturn theo category lộ đánh đổi; regression set cố định kiểm thử trước release.<\/p>"
  },
  {
    "id": "MOCK-240",
    "set": 4,
    "number": 51,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A vendor-risk classifier sends cases below its self-reported 70% confidence to analysts and automatically accepts every higher-scoring case. Analysts find many obvious false positives in their queue, but the accepted population is never sampled, so false negatives are unknown. Which routing change is best?<\/p>",
    "options": {
      "A": "<p>Set thresholds from labeled risk slices, route ambiguous or high-impact cases to analysts, and audit a sample of auto-accepted cases.<\/p>",
      "B": "<p>Raise the self-reported cutoff to 90% and assume the remaining accepted cases are reliable because the model expressed greater certainty.<\/p>",
      "C": "<p>Send only high-confidence cases to analysts so reviewers validate the outputs the model considers most reliable before automatic acceptance.<\/p>",
      "D": "<p>Keep the current threshold, calculate performance from analyst overturn rate, and treat the reviewed false-positive distribution as representative of every automatically accepted vendor case.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Threshold chuyển người phải dựa trên eval task-specific có nhãn, không dùng confidence tự báo thô. Review tập trung vào mơ hồ và hậu quả; audit mẫu đường tự động phát hiện false negative mà queue stat không thấy. Sau đó cân bằng precision, recall và gánh reviewer theo policy.<\/p>"
  },
  {
    "id": "MOCK-241",
    "set": 4,
    "number": 52,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A desktop agent used by nontechnical claims staff asks users to approve shell commands for document conversion. The commands may include paths, pipes, and network destinations that typical users cannot assess. Red-team tests show persuasive instructions obtain approval, yet the business still needs safe conversion of uploaded files. What is the strongest HITL strategy?<\/p>",
    "options": {
      "A": "<p>Keep end-user approval, expand the dialog with the complete command, show every resolved path and destination, and ask users to certify that they understand each shell operator.<\/p>",
      "B": "<p>Use a sealed least-capability environment without production credentials, expose narrow conversion, and reserve expert review for exceptional changes.<\/p>",
      "C": "<p>Hide command details and show only the model&#39;s plain-language assurance, because simplified approval reduces confusion and speeds validation.<\/p>",
      "D": "<p>Require approval from two claims users for every command and permit execution when either user reports that the output file is urgently needed.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>HITL cần reviewer hiểu hành động và hậu quả. Không nên biến người dùng phi kỹ thuật thành security boundary cho shell command tùy ý. Giao diện conversion hẹp trong môi trường kín giới hạn filesystem, credential và network; chuyên gia đủ chuẩn review thay đổi hiếm của ranh giới.<\/p>"
  },
  {
    "id": "MOCK-242",
    "set": 4,
    "number": 53,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>An agent proposes production access changes through an application-executed custom tool. The team assumes a Managed Agents permission policy provides approval, but custom tools remain the application&#39;s responsibility. Months later, an auditor must reconstruct the proposed change, the administrator&#39;s decision, and the resulting state. Which THREE records form the strongest validation trail? Choose 3.<\/p>",
    "options": {
      "A": "<p>Create an immutable application approval-request ID that binds versioned evidence, policy, and the exact custom-tool arguments presented for review.<\/p>",
      "B": "<p>Store only the final natural-language answer because the custom-tool proposal and policy can be inferred later from the explanation.<\/p>",
      "C": "<p>Bind the authenticated reviewer, timestamp, allow or deny disposition, and reason to that application approval-request ID.<\/p>",
      "D": "<p>Record the model name and token usage but omit denied requests so the audit contains only actions that affected production.<\/p>",
      "E": "<p>Keep a screenshot of the approval screen without the application request ID or a machine-readable disposition.<\/p>",
      "F": "<p>Persist the custom-tool execution result and authoritative post-change read-back under the same application approval-request ID.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "F"
    ],
    "explanation": "<p>Permission policy Managed Agents không quản custom tool do ứng dụng chạy. Ứng dụng phải tạo approval request bất biến gắn evidence, policy và exact argument với disposition human đã xác thực. Execution và authoritative read-back dưới cùng ID hoàn tất audit chain và chứng minh approval/denial được tuân.<\/p>"
  },
  {
    "id": "MOCK-243",
    "set": 4,
    "number": 54,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>Two qualified reviewers independently grade the same set of sensitive customer replies. They disagree on 18% of borderline cases because one treats any apology as adequate while the other requires acknowledgment of the specific harm. The team averages their binary labels and calls the result human ground truth. What is the best next step?<\/p>",
    "options": {
      "A": "<p>Keep averaging because two human labels are inherently more reliable than a detailed rubric or a resolved decision.<\/p>",
      "B": "<p>Use the model&#39;s preferred label as the tiebreaker, then instruct reviewers to match that label on future cases.<\/p>",
      "C": "<p>Define a harm-acknowledgment rubric with examples, regrade a calibration set, adjudicate disagreements, and retain resolved labels.<\/p>",
      "D": "<p>Remove every borderline case from evaluation, report 100% reviewer agreement on the remaining set, and release based only on replies that both reviewers already considered unambiguous.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Human grading linh hoạt nhưng không tự tạo chuẩn nhất quán. Bất đồng cho thấy tiêu chí thiếu đặc tả. Rubric thực nghiệm chi tiết, ví dụ chung, calibration reviewer và adjudication tạo resolved label hỗ trợ đánh giá mà không xóa slice giáp ranh quan trọng.<\/p>"
  },
  {
    "id": "MOCK-244",
    "set": 4,
    "number": 55,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An EU retailer collected identifiable support chats to resolve customer cases. It now proposes retaining every raw transcript indefinitely and using identity details that were not needed for support to profile future churn. No compatible purpose or retention rationale has been documented. Which architecture decision best addresses the GDPR requirements before Claude is used for the new processing?<\/p>",
    "options": {
      "A": "<p>Approve the reuse because both purposes are internal, retain the full transcripts for five years, and pseudonymize them only when the profiling project ends.<\/p>",
      "B": "<p>Keep all transcripts for model quality, add a single blanket consent request for any future analytics, and delete records only when an individual submits a request.<\/p>",
      "C": "<p>Limit profiling to inactive customers, encrypt transcripts and identity fields, and retain both indefinitely because ending the commercial relationship removes any practical privacy impact.<\/p>",
      "D": "<p>Confirm a specified, legitimate, compatible purpose; send only necessary fields; justify retention; preserve decision evidence; and exclude data that fails those conditions.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Use case Claude mới không tự kế thừa compliance chỉ vì controller đã giữ dữ liệu. Controller phải xác định mục đích cụ thể, hợp pháp, tương thích; giới hạn input đúng nhu cầu; chỉ giữ dữ liệu định danh đủ lâu và chứng minh được lựa chọn. Encryption hay sở hữu nội bộ không thay nguyên tắc xử lý GDPR.<\/p>"
  },
  {
    "id": "MOCK-245",
    "set": 4,
    "number": 56,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>An EU SaaS provider acting as a processor discovers that a Claude workflow exposed customer personal data across tenants. The customer controller has not yet been told, the investigation is incomplete, and the available facts indicate that risk to individuals cannot be ruled out. Which THREE actions best preserve the GDPR role and notification requirements? Choose 3.<\/p>",
    "options": {
      "A": "<p>Delay all notification until the processor can provide the exact number of affected records and a final root-cause report.<\/p>",
      "B": "<p>Open the controller&#39;s incident case promptly with the processor&#39;s confirmed evidence, rather than treating incomplete scoping as a reason to stay silent, and feed later findings into that case.<\/p>",
      "C": "<p>Have the processor wait up to 72 hours, notify the supervisory authority in its own name, and inform the controller only after the authority responds.<\/p>",
      "D": "<p>At the controller, start the authority-decision clock from awareness, record any conclusion that risk is unlikely, and otherwise file promptly with the competent authority, targeting 72 hours and explaining a later filing.<\/p>",
      "E": "<p>Have the controller maintain one evolving record that links known effects and response actions, and submit unavailable notification details as follow-on updates without stalling the initial report.<\/p>",
      "F": "<p>Notify every data subject immediately whenever confidentiality is affected, without first considering whether the breach is likely to create a high risk or whether protective measures apply.<\/p>"
    },
    "answer": [
      "B",
      "D",
      "E"
    ],
    "explanation": "<p>Workflow sự cố cần hai đồng hồ liên kết nhưng khác nhau. Processor mở case cho controller bằng thông tin hiện có; controller sở hữu quyết định rủi ro và filing tính từ lúc biết. Record phát triển hỗ trợ filing ban đầu kịp thời, cập nhật dữ kiện và bằng chứng cho thông báo hoặc kết luận không thông báo có tài liệu.<\/p>"
  },
  {
    "id": "MOCK-246",
    "set": 4,
    "number": 57,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An EU hospital plans to use Claude to rank patients for an intensive follow-up program by processing health records at scale. The new scoring can materially affect access to care, a DPO is designated, and the team proposes launching first and assessing privacy impact after one month. What is the best compliance step?<\/p>",
    "options": {
      "A": "<p>Before processing, complete a DPIA covering purposes, necessity and proportionality, risks to individuals, and safeguards, and seek the designated DPO&#39;s advice.<\/p>",
      "B": "<p>Launch to collect realistic evidence, then perform the DPIA only if the first month shows measurable patient harm.<\/p>",
      "C": "<p>Skip the DPIA because a clinician makes the final enrollment decision, and document only the clinician-approval rate.<\/p>",
      "D": "<p>Treat the model vendor&#39;s security certification as the DPIA because it covers the technical component and clinicians can separately approve every recommendation.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Xử lý đề xuất dùng công nghệ mới, dữ liệu sức khỏe quy mô lớn và ảnh hưởng đáng kể tới cá nhân, nên DPIA trước xử lý là kiểm soát phù hợp. Assessment thuộc controller và xem toàn use case, không chỉ model. Nếu có DPO, controller cần lấy tư vấn của họ trong assessment.<\/p>"
  },
  {
    "id": "MOCK-247",
    "set": 4,
    "number": 58,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A U.S. health plan, a HIPAA covered entity, will send ePHI to an AI vendor that acts as its business associate. The vendor&#39;s subcontractor stores prompts, outputs, and backups, but the vendor proposes assessing only the live inference endpoint and says its subcontractor needs no HIPAA arrangement. Which pre-production plan is strongest?<\/p>",
    "options": {
      "A": "<p>Execute a business associate agreement with the AI vendor, accept the vendor&#39;s endpoint-only assessment, and treat all subcontractor controls as outside the regulated workflow.<\/p>",
      "B": "<p>Put a compliant arrangement in place with the vendor, require its subcontractor safeguards, analyze every ePHI location and flow, and enforce role-based access, audit, and reevaluation.<\/p>",
      "C": "<p>Assess prompts during inference, exclude outputs and backups because they are derivative data, and use a shared operations account so vendor and plan staff can investigate incidents quickly.<\/p>",
      "D": "<p>Replace the HIPAA risk analysis with the health plan&#39;s GDPR DPIA template, because a privacy assessment from another jurisdiction covers the same technical risks.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>HIPAA áp dụng cho covered entity và business associate; BA phải có assurance hợp lệ từ subcontractor xử lý ePHI. Risk analysis không dừng ở endpoint model mà bao phủ mọi ePHI được tạo, nhận, giữ hoặc truyền. Access theo vai trò, audit và đánh giá lại định kỳ biến inventory thành chương trình bảo vệ liên tục.<\/p>"
  },
  {
    "id": "MOCK-248",
    "set": 4,
    "number": 59,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A HIPAA business associate discovers that unsecured PHI from a Claude workflow may have been exposed to an unauthorized tenant. Logs do not yet show whether the recipient viewed the records. Which THREE actions best align with the HIPAA Breach Notification Rule? Choose 3.<\/p>",
    "options": {
      "A": "<p>Escalate promptly to the covered entity with the known people, data, and evidence, and configure the workflow so 60 days is an outer deadline rather than its target date.<\/p>",
      "B": "<p>Treat 60 days as a waiting period, complete every forensic step first, and contact the covered entity only on day 60.<\/p>",
      "C": "<p>Unless the entities proceed with required notices, assess evidence of actual access, the recipient context, mitigation effectiveness, and the data&#39;s sensitivity and identifiability before concluding that compromise was unlikely.<\/p>",
      "D": "<p>Assess only clinical sensitivity and whether access was revoked, because identity of the recipient and actual acquisition do not affect the breach determination.<\/p>",
      "E": "<p>Preserve a decision packet that links either completed notices or the assessed evidence and applicable exception supporting a no-notice conclusion.<\/p>",
      "F": "<p>Assign all individual-notice responsibility to the model provider because the provider operated the workflow where the exposure occurred.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "<p>Phản ứng nên bắt đầu bằng escalation nhanh cho business associate, không chờ forensics hoàn hảo. Nếu chưa gửi notice ngay, điều tra phải nối bối cảnh người nhận, evidence truy cập, mitigation và bản chất dữ liệu để quyết định compromise có căn cứ. Packet lưu giữ chứng minh điều đã báo hoặc lý do chọn đường khác.<\/p>"
  },
  {
    "id": "MOCK-249",
    "set": 4,
    "number": 60,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A HIPAA-covered clinic assesses only the application that directly calls Claude. The same ePHI also appears in queues, retry payloads, evaluation sets, audit logs, and backups, and a new logging pipeline will be introduced after launch. Which risk-management approach is best?<\/p>",
    "options": {
      "A": "<p>Assess only the live application and document that support-system copies inherit its safeguards automatically because those systems never call the model directly.<\/p>",
      "B": "<p>Assess queues and logs once, then freeze the risk register because later architectural changes are handled through normal release testing.<\/p>",
      "C": "<p>Inventory every ePHI location and flow, assess confidentiality, integrity, and availability risks, reduce them appropriately, and reevaluate when the logging environment changes.<\/p>",
      "D": "<p>Delete audit logs to reduce exposure and rely on model-response sampling as the sole evidence that ePHI remains secure.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>HIPAA risk analysis theo ePHI xuyên toàn hệ thống, không chỉ request model. Clinic phải tìm mọi vị trí và luồng điện tử, đánh giá confidentiality/integrity/availability, quản rủi ro và kiểm tra safeguard định kỳ. Pipeline logging mới làm đổi môi trường nên phải nằm trong reevaluation.<\/p>"
  },
  {
    "id": "MOCK-250",
    "set": 4,
    "number": 61,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A U.S. federal agency wants to use Claude through a FedRAMP Rev5 Certified cloud service offering and integrate an external retrieval system that is not clearly listed in the provider package. The team argues that the provider&#39;s certification authorizes the complete agency solution. Which approach best supports the agency&#39;s authorization decision under the 2026 FedRAMP guidance?<\/p>",
    "options": {
      "A": "<p>Treat the FedRAMP label as authorization for every downstream integration, provided the agency sends data through the certified service first.<\/p>",
      "B": "<p>Copy the provider&#39;s control statements into the agency SSP and mark the external retrieval controls as inherited because the model endpoint is certified.<\/p>",
      "C": "<p>Launch the integration, then ask the provider to add the external system to its package if the first ongoing report identifies a material risk.<\/p>",
      "D": "<p>Confirm the certified offering and scope, locate retrieval against package boundaries and flows, configure agency controls, and document integration risk in agency authorization materials.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Gói FedRAMP Rev5 mô tả offering được chứng nhận và trách nhiệm provider. Agency vẫn phải xác nhận dùng đúng phiên bản trong scope, kiểm tra boundary, data flow và kiểm soát retrieval ngoài. SSP của agency mô tả hệ thống, cấu hình, integration và residual-risk decision của chính họ, không sao chép gói provider.<\/p>"
  },
  {
    "id": "MOCK-251",
    "set": 4,
    "number": 62,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A U.S. federal agency already accesses Claude through a FedRAMP Rev5 Certified cloud service offering. New ongoing Certification Data says a provider-managed audit feed will end and tenant log retention becomes the agency&#39;s responsibility next month. The approved agency design assumes provider retention. Which TWO immediate decisions best address the change? Choose 2.<\/p>",
    "options": {
      "A": "<p>Keep the existing authorization unchanged because the provider remains certified and the agency did not initiate the logging change.<\/p>",
      "B": "<p>Verify that the update applies to the certified offering and agency configuration, then map the former provider retention evidence to the newly agency-owned responsibility.<\/p>",
      "C": "<p>Add the missing agency log store to the provider&#39;s POA&amp;M because the change originated in the provider service.<\/p>",
      "D": "<p>Implement and test an agency-controlled retention path before the feed ends, and update agency authorization materials with the new configuration, ownership, evidence, and residual risk.<\/p>",
      "E": "<p>Wait for the next annual provider assessment because ongoing Certification Data cannot affect an agency decision between formal assessments.<\/p>",
      "F": "<p>Repeat the provider&#39;s complete independent assessment before designing the agency log store, because any ongoing change invalidates all reusable provider evidence.<\/p>"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "<p>Trước hết agency phải xác định update có áp dụng cho offering và cấu hình mà authorization đang dựa vào không. Sau đó agency sở hữu control lưu giữ mới: replacement phải được triển khai, test và phản ánh trong evidence authorization trước khi feed provider kết thúc. Thay đổi có mục tiêu không xóa evidence provider không liên quan hay biến gap agency thành việc của provider.<\/p>"
  },
  {
    "id": "MOCK-252",
    "set": 4,
    "number": 63,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>On July 10, 2026, a FedRAMP 20x Class B provider opted into the applicable 2026 Significant Change Notification rules. It plans to replace its internal document-processing and key-isolation plane with an external managed service that will persist federal request artifacts; customers must rotate new keys and redirect audit streams. A documented evaluation has ruled out a certification-class change, and there is no emergency. How should the provider classify the change?<\/p>",
    "options": {
      "A": "<p>Classify it as transformative, retain the evaluation record, and follow the transformative notification path because the new processing plane changes risk and customer responsibilities.<\/p>",
      "B": "<p>Classify it as adaptive because the customer-facing document function and certification class remain unchanged despite the new processing plane.<\/p>",
      "C": "<p>Classify it as routine recurring maintenance because key rotation and log redirection are familiar operations already covered by deployment procedures.<\/p>",
      "D": "<p>Classify it as a certification-class change because introducing any external managed service automatically requires a new certification assessment.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Ngày opt-in khiến quy tắc 2026 áp dụng; đánh giá đã ghi loại nhánh certification-class. Thay processing plane đổi nơi artifact liên bang lưu và tạo nghĩa vụ key, logging khác đáng kể cho khách. Thay đổi risk profile và trách nhiệm khách hàng này là transformative change, không phải cải tiến thích nghi hay bảo trì thường.<\/p>"
  },
  {
    "id": "MOCK-253",
    "set": 5,
    "number": 1,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A city evaluates an AI assistant that routes service requests. Its dashboard shows the same 6% routing-error rate for two language groups and marks the result fair. Reviewers discover that errors for one group usually send urgent housing appeals to a low-priority queue, while errors for the other mostly send duplicate information requests to a queue corrected within minutes. What is the best next step?<\/p>",
    "options": {
      "A": "<p>Approve rollout because equal error rates meet the documented fairness gate, then track aggregate satisfaction and queue performance during the pilot.<\/p>",
      "B": "<p>Measure error severity, correction time, and outcomes by group; investigate the routing path and require fairness plus service-quality thresholds before rollout.<\/p>",
      "C": "<p>Retain the shared error-rate gate but add narrative review of samples from each queue, without setting severity-specific thresholds.<\/p>",
      "D": "<p>Remove language fields from future logs and retrain on equal request volumes before measuring aggregate routing accuracy again.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Tần suất lỗi bằng nhau không nghĩa tác động bằng nhau khi loại request và đường sửa khác. Cần đánh giá severity, recovery time và downstream outcome trên slice nhóm đại diện, rồi điều tra system path tạo chênh lệch. Launch gate phải kết hợp fairness với dịch vụ hữu ích, an toàn, không dựa một rate tổng.<\/p>"
  },
  {
    "id": "MOCK-254",
    "set": 5,
    "number": 2,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A global company is piloting an AI assistant that recommends candidates for internal promotion. Historical decisions differ by region, managers retain final authority, and an appeal may arrive months after a recommendation. The team must preserve useful ranking quality while detecting unfair outcomes before and after deployment. Which THREE controls form the strongest evaluation and feedback plan?<\/p>",
    "options": {
      "A": "<p>Define measurable ranking-quality, error, abstention, and override outcomes by relevant group, role family, and region, with minimum utility and fairness thresholds.<\/p>",
      "B": "<p>Set identical recommendation-rate targets by group and investigate deviations, but do not gate ranking quality because managers retain final authority.<\/p>",
      "C": "<p>Test representative and edge cases, including comparable profiles, ambiguous evidence, and likely abstentions, and examine both recommendation quality and group-level differences.<\/p>",
      "D": "<p>Have managers document a fairness justification during review and audit those narratives, without linking them to recommendations, overrides, or later outcomes.<\/p>",
      "E": "<p>During a staged rollout, log the recommendation, abstention, manager decision, override reason, and later appeal or outcome so production evidence can reveal delayed or human-system effects.<\/p>",
      "F": "<p>Assign one global owner and automatically pause every region after any threshold breach, without validating the signal or localizing the affected use.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "<p>Kế hoạch phải kết hợp fairness với ranking quality hữu ích, dùng ca phản ánh phân bố vùng/vai trò thật và quan sát toàn vòng đời human+model. Record production theo giai đoạn ghi override và appeal muộn mà offline score bỏ. Gate chỉ parity hoặc narrative manager không liên kết không cho thấy utility và outcome trễ.<\/p>"
  },
  {
    "id": "MOCK-255",
    "set": 5,
    "number": 3,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A public-policy research assistant receives equivalent requests from advocates on two sides of a contested issue. It writes a detailed, persuasive case for one side but refuses the other request as too political. A tone classifier marks both outputs as polite and neutral. Which evaluation redesign best tests ethical even-handedness?<\/p>",
    "options": {
      "A": "<p>Keep the tone classifier and add a longer prohibited-word list so politically loaded vocabulary cannot appear.<\/p>",
      "B": "<p>Evaluate only whether the assistant ever states its own political preference, because avoiding an explicit preference proves neutrality.<\/p>",
      "C": "<p>Use paired requests across viewpoints, topics, and task types; grade factuality, comparable rigor, opposing-perspective coverage, and refusal differences under the deployed configuration.<\/p>",
      "D": "<p>Require the assistant to insert the same number of sentences for each side in every response, regardless of the request or available evidence.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Đối xử công bằng rộng hơn lời lịch sự hay không nêu ý kiến. Request tương đương cần độ nghiêm túc, factual và tôn trọng tương đương; eval phải phát hiện refusal lệch và thiếu quan điểm đối lập. Ghép cặp viewpoint xuyên task type trên cấu hình thật kiểm tra được mà không ép đối xứng từng câu giả tạo.<\/p>"
  },
  {
    "id": "MOCK-256",
    "set": 5,
    "number": 4,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A benefits provider is launching an AI assistant that explains eligibility rules but never makes the final eligibility decision. Product leadership wants a transparency notice that helps members judge when and how to rely on it. Which notice design is most appropriate?<\/p>",
    "options": {
      "A": "<p>Describe the intended role and evidence sources and publish aggregate accuracy, but omit an individual challenge path because humans make final decisions.<\/p>",
      "B": "<p>Describe known limitations and warn members not to rely solely on the assistant, but omit its evidence basis and the final decision owner.<\/p>",
      "C": "<p>Identify the human decision channel and accept correction requests, but call behavior intended whenever the prompt and operating policies were followed.<\/p>",
      "D": "<p>Explain its intended role, evidence basis, material limits and possible deviations; identify the human decision channel and a way to challenge explanations.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Minh bạch hữu ích cho người bị ảnh hưởng biết assistant nhằm làm gì, dùng evidence nào, có thể lỗi đâu, ai quyết định hậu quả và cách feedback hoặc sửa. Notice chỉ có một phần vẫn thiếu quan trọng; prompt/policy compliance không chứng minh output được chủ định hay đúng.<\/p>"
  },
  {
    "id": "MOCK-257",
    "set": 5,
    "number": 5,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A relief organization uses an AI assistant to draft messages about emergency-aid decisions. It must never invent eligibility facts or conceal that a human can review a decision, yet it must adapt tone and next-step guidance across unfamiliar crises, languages, and vulnerable audiences. Which governance design best balances these constraints?<\/p>",
    "options": {
      "A": "<p>Enforce explained hard constraints for factual claims and review access, guide contextual judgment elsewhere, and test novel edge cases with evidence-based escalation.<\/p>",
      "B": "<p>Use hard constraints and a fixed approved template; defer every unmatched case until a new template is centrally approved, even when evidence supports a timely contextual response.<\/p>",
      "C": "<p>Use principles, edge-case evaluations, and evidence-based escalation, but treat fabricated facts and concealed review as ordinary scored failures rather than hard constraints.<\/p>",
      "D": "<p>Use flexible drafting with satisfaction and incident reviews, adding narrow rules only after repeated failures while preserving broad model discretion.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Quy tắc rõ tăng khả năng dự đoán và đánh giá khi giá lỗi cao, nhưng quy tắc toàn diện có thể thất bại ca mới. Kiến trúc mạnh cố định ít bảo vệ không thương lượng, giải thích mục đích và dùng judgment theo giá trị cho giao tiếp tùy ngữ cảnh. Eval ca biên và escalation xử lý uncertainty mà vẫn hữu ích.<\/p>"
  },
  {
    "id": "MOCK-258",
    "set": 5,
    "number": 6,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>An investment-research assistant must answer only from approved reports. Reports can conflict or omit current figures, and every recommendation is reviewed by an analyst before use. Which THREE output controls best improve transparency without presenting uncertain claims as facts?<\/p>",
    "options": {
      "A": "<p>Display the model&#39;s private hidden reasoning in full so analysts can treat its internal narrative as evidence.<\/p>",
      "B": "<p>Attach claim-level citations to the approved report passages and preserve stable source identifiers for analyst verification.<\/p>",
      "C": "<p>Show a precise confidence percentage for every sentence even when that percentage has not been calibrated or tied to source support.<\/p>",
      "D": "<p>State material uncertainty and source conflicts, and omit or retract a claim when no approved passage supports it.<\/p>",
      "E": "<p>Suppress citations when sources disagree so the final answer appears concise and decisive to the reviewer.<\/p>",
      "F": "<p>Flag critical conclusions for analyst validation and route unresolved source conflicts instead of silently selecting one report.<\/p>"
    },
    "answer": [
      "B",
      "D",
      "F"
    ],
    "explanation": "<p>Minh bạch ở đây nghĩa analyst truy claim về evidence duyệt, thấy uncertainty/xung đột và biết lúc cần human validation. Citation theo claim, rút claim thiếu căn cứ và route xung đột rõ tạo kiểm soát. Private reasoning, phần trăm chưa calibration và bất đồng ẩn có vẻ nhiều thông tin nhưng làm yếu auditability.<\/p>"
  },
  {
    "id": "MOCK-259",
    "set": 5,
    "number": 7,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A third-party fairness benchmark gives a claims assistant a low score. Its adapter removes retrieved policy evidence, converts each case into a one-shot label request, and counts every structured-output validation failure as a wrong claim decision. Production uses evidence retrieval and can repair a malformed response before presenting it. What should the architect do before relying on the score?<\/p>",
    "options": {
      "A": "<p>Accept the score because applying the same adapter to every group makes the resulting fairness comparison representative of production.<\/p>",
      "B": "<p>Audit the adapter and scoring, then test retrieved evidence, schema recovery, group-level claim errors, and task completion in the deployed workflow.<\/p>",
      "C": "<p>Discard all offline evaluations and use only production complaint counts because retrieval and response repair make predeployment fairness testing invalid.<\/p>",
      "D": "<p>Tune the production assistant to emit the benchmark&#39;s one-shot label format, even though users require evidence-backed explanations.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Adapter đổi cả thông tin model nhận và nghĩa của failure được chấm. Team phải tái hiện benchmark, tách lỗi xử lý schema khỏi quyết định claim và đánh giá đường retrieval/repair thực trên slice nhóm đại diện. Fairness phải diễn giải cùng task accuracy và useful completion trong workflow triển khai.<\/p>"
  },
  {
    "id": "MOCK-260",
    "set": 5,
    "number": 8,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A shopping assistant is paid when users choose a sponsored product. A user asks for the least expensive option that meets stated accessibility needs. The operator proposes telling the assistant to create urgency around the sponsor and bury cheaper alternatives in a collapsed section. Which design best addresses the ethical conflict?<\/p>",
    "options": {
      "A": "<p>Follow the operator&#39;s proposal because operators may promote their own products and revenue is the only relevant measure of helpfulness.<\/p>",
      "B": "<p>Remove every sponsored option from consideration, even when one is objectively the best fit, so commercial influence can never affect a result.<\/p>",
      "C": "<p>Disclose the sponsorship, rank options against the user&#39;s price and accessibility criteria, present material trade-offs comparably, and avoid manufactured urgency or hidden alternatives.<\/p>",
      "D": "<p>Show the sponsored option first without disclosure, but add a general footer stating that AI recommendations may be imperfect.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Operator có ưu tiên thương mại nhưng assistant không nên lừa hay thao túng trái nhu cầu và quyền tự chủ người dùng. Công khai incentive, áp tiêu chí người dùng nhất quán và nêu trade-off liên quan giữ lựa chọn có hiểu biết. Cấm mọi sản phẩm tài trợ hoặc giấu conflict đều không phục vụ tốt.<\/p>"
  },
  {
    "id": "MOCK-261",
    "set": 5,
    "number": 9,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>After a phased launch of a public-service information assistant, a dashboard shows high overall satisfaction and one aggregate fairness score. Appeals reveal that one language group receives more unsupported answers and fewer successful escalations, but the dashboard cannot link outputs to sources or owners. What is the best governance improvement?<\/p>",
    "options": {
      "A": "<p>Keep the dashboard unchanged because high overall satisfaction outweighs subgroup observations from a smaller appeal sample.<\/p>",
      "B": "<p>Publish the aggregate fairness score more prominently and describe the assistant as fair unless the score falls below its current average.<\/p>",
      "C": "<p>Ask the assistant to self-certify each answer as ethical and use that label instead of linking outputs to evidence or operational outcomes.<\/p>",
      "D": "<p>Add subgroup source-support, error, and escalation measures; retain output-to-source and appeal traceability; assign owners and response thresholds.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Dashboard tổng che cả lỗi quality theo nhóm và failure escalation. Utility/fairness tách nhóm, source traceability, appeal record và owner phản ứng có tên làm hệ thống audit, sửa được. Làm aggregate nổi bật hơn hoặc model tự chứng nhận chỉ tạo vẻ minh bạch thiếu accountability.<\/p>"
  },
  {
    "id": "MOCK-262",
    "set": 5,
    "number": 10,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A claims organization asks for a Claude assistant to &quot;speed up reviews.&quot; Operations blames document reading, compliance blames inconsistent evidence, and finance wants fewer reopened cases. No shared baseline exists. What should the architect do first?<\/p>",
    "options": {
      "A": "<p>Map the workflow and decision owners, baseline representative cases and defect or reopen rates, and agree on a measurable pilot outcome.<\/p>",
      "B": "<p>Select the fastest available model and promise a response-time reduction before collecting case data.<\/p>",
      "C": "<p>Ask each department for a feature list and implement every requested feature in one production release.<\/p>",
      "D": "<p>Use overall employee satisfaction as the sole baseline because it represents all stakeholder views.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Discovery phải tìm workflow, decision right, input đại diện, constraint và baseline outcome. Mapping đề xuất làm ba mối quan tâm đo được và tạo pilot contract. Chọn model, gộp feature request hay dùng một sentiment score sẽ khóa solution trước khi định nghĩa problem.<\/p>"
  },
  {
    "id": "MOCK-263",
    "set": 5,
    "number": 11,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A university wants an advising pilot before enrollment. Policy exceptions require advisor decisions, accessibility cases were absent from the demo, and leaders want measurable time savings. Select two discovery artifacts needed before the pilot is defined.<\/p>",
    "options": {
      "A": "<p>A stakeholder and decision-rights map covering students, advisors, policy owners, privacy, and support<\/p>",
      "B": "<p>A technical prototype using the preferred model, plus only routine questions so the pilot can start before enrollment<\/p>",
      "C": "<p>A representative case register covering routine, exception, accessibility, and escalation paths, with success thresholds, data boundaries, and owners<\/p>",
      "D": "<p>A final production architecture selected before interviewing advisors so discussion stays focused<\/p>",
      "E": "<p>A rollout calendar that assumes advisor review remains only for policy exceptions<\/p>",
      "F": "<p>A list of preferred model names ranked only by public benchmark scores<\/p>"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "<p>Trường đại học trước hết cần decision right và stakeholder bị ảnh hưởng, rồi case đại diện và constraint đo được gồm exception bị bỏ. Prototype, calendar, architecture khóa hay benchmark list có thể dùng sau nhưng không định nghĩa pilot an toàn.<\/p>"
  },
  {
    "id": "MOCK-264",
    "set": 5,
    "number": 12,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A global manufacturer wants Claude to summarize maintenance incidents. Executives want a six-week launch, regional engineers use different taxonomies, labor representatives require that summaries not drive discipline, and security has not approved cross-region data movement. Which discovery plan is best?<\/p>",
    "options": {
      "A": "<p>Start with all regions and normalize taxonomy after launch so the six-week date is protected.<\/p>",
      "B": "<p>Run a bounded, approved-data regional pilot; map taxonomy and disciplinary exclusions, then gate expansion on security and cross-region results.<\/p>",
      "C": "<p>Let executives choose the first region and use summary volume as the only success measure.<\/p>",
      "D": "<p>Delay all discovery until every region has adopted one taxonomy and security has approved unrestricted transfer.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Pilot giới hạn tạo evidence mà không vi phạm constraint chưa giải quyết. Nó giữ mục tiêu học sáu tuần, loại dùng cho kỷ luật, test taxonomy và data boundary đã biết, dùng gate rõ trước mở rộng. Phương án khác bỏ constraint, dùng metric thiếu hoặc trì hoãn mọi học hỏi.<\/p>"
  },
  {
    "id": "MOCK-265",
    "set": 5,
    "number": 13,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>Customer-support leaders say agents need faster answers, but interviews show the largest delay is waiting for account state from a legacy system. Agents also spend time interpreting long policy articles. Which requirement statement is most actionable?<\/p>",
    "options": {
      "A": "<p>Claude must answer every support question in under two seconds regardless of account-system latency.<\/p>",
      "B": "<p>Replace the legacy account system with Claude so all delays have one owner.<\/p>",
      "C": "<p>Use Claude for grounded policy interpretation while the account system stays authoritative; measure both delays, quality, and escalation.<\/p>",
      "D": "<p>Measure only total handling time because separating causes would make stakeholder reporting too complex.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Discovery phải giữ ranh giới hệ thống chính thức và phân biệt cơ hội xử lý ngôn ngữ với bottleneck trạng thái tài khoản. Metric riêng làm ownership, trade-off rõ; citation và escalation bảo vệ chất lượng trả lời.<\/p>"
  },
  {
    "id": "MOCK-266",
    "set": 5,
    "number": 14,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A hospital is considering a discharge-instruction drafting assistant. Select three questions that discovery must resolve before architecture approval.<\/p>",
    "options": {
      "A": "<p>Which model is currently highest on a general public benchmark?<\/p>",
      "B": "<p>Can one universal template cover all specialties, with deviations handled by clinicians after the pilot starts?<\/p>",
      "C": "<p>Should the pilot launch to every ward simultaneously to maximize feedback volume?<\/p>",
      "D": "<p>Who supplies authoritative patient and policy data, and what happens when required data is missing or conflicting?<\/p>",
      "E": "<p>Which drafts require clinician review, who owns escalation, and what actions must the assistant never take?<\/p>",
      "F": "<p>Which representative cases, harm-focused edge cases, quality thresholds, and workflow-time baselines will gate the pilot?<\/p>"
    },
    "answer": [
      "D",
      "E",
      "F"
    ],
    "explanation": "<p>Duyệt kiến trúc cần ranh giới dữ liệu chính thức, trách nhiệm human/escalation, hành động cấm và acceptance evidence đại diện. Benchmark rank, giả định đồng nhất và rollout rộng ngay không trả lời các câu discovery đó.<\/p>"
  },
  {
    "id": "MOCK-267",
    "set": 5,
    "number": 15,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>During discovery for a procurement copilot, legal says &quot;no hallucinations,&quot; users want faster comparisons, and product asks for a single acceptance metric. What is the best response?<\/p>",
    "options": {
      "A": "<p>Use average response latency as the acceptance metric because it is objective.<\/p>",
      "B": "<p>Promise zero unsupported claims and approve launch when no failures appear in a small demo set.<\/p>",
      "C": "<p>Let product choose whichever metric produces the clearest executive dashboard.<\/p>",
      "D": "<p>Set representative cases and thresholds for grounded claims, valid citations, comparison time, abstention, and escalation.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Stakeholder đang nói các chiều success khác nhau. Architect nên làm từng chiều đo được và định nghĩa eval đại diện cùng điều kiện escalation. Một latency metric, lời hứa zero-error hoặc trình bày do sản phẩm tự chọn không chứng minh hữu ích an toàn.<\/p>"
  },
  {
    "id": "MOCK-268",
    "set": 5,
    "number": 16,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A retailer&#39;s returns assistant pilot meets accuracy targets for standard items. Store managers report that damaged goods and multilingual receipts cause long handoffs; the data team says those cases were excluded, and the launch date is fixed. What should the architect recommend?<\/p>",
    "options": {
      "A": "<p>Preserve the date by documenting the exclusions after launch and monitoring aggregate accuracy.<\/p>",
      "B": "<p>Cancel the pilot because any excluded case invalidates all existing results.<\/p>",
      "C": "<p>Add damaged and multilingual cases to evaluation, publish the initial scope, keep fallback, and gate expansion on slice-specific thresholds.<\/p>",
      "D": "<p>Ask store managers to relabel damaged and multilingual cases as standard items so they count in the existing metric.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Discovery tiếp tục khi evidence tuyến đầu lộ workflow thiếu. Cách đúng nêu rõ capability boundary ban đầu, thêm case đại diện và threshold riêng, giữ fallback và chỉ mở rộng theo evidence. Không che, bỏ hay đổi nhãn gap.<\/p>"
  },
  {
    "id": "MOCK-269",
    "set": 5,
    "number": 17,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A public utility is defining an outage-message pilot. Restoration time is missing in some incidents, every supported channel must remain accessible, and declared incidents require approval before publication. Select two findings that must become solution requirements.<\/p>",
    "options": {
      "A": "<p>Dispatch owns outage state; missing restoration time causes abstention, and inaccessible channels use the manual path.<\/p>",
      "B": "<p>The architect prefers a particular programming language for the integration service.<\/p>",
      "C": "<p>The interface team will optimize accessibility after the pilot, while dispatch verifies only factual outage state.<\/p>",
      "D": "<p>Use the vendor dashboard first because it can display approval and accessibility status in one view.<\/p>",
      "E": "<p>Emergency management requires approval and audit records for public messages during declared incidents.<\/p>",
      "F": "<p>The team can decide monitoring after launch because it will know which metrics are convenient.<\/p>"
    },
    "answer": [
      "A",
      "E"
    ],
    "explanation": "<p>Yêu cầu đầu kết hợp authoritative state, abstention, hành vi kênh accessible và fallback; yêu cầu hai giữ approval/audit trong incident đã tuyên bố. Sở thích công nghệ, demo UI hay trì hoãn accessibility/monitoring không đạt constraint pilot.<\/p>"
  },
  {
    "id": "MOCK-270",
    "set": 5,
    "number": 18,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A discovery workshop for a contract-analysis assistant has twelve senior participants, but junior analysts who perform the work and the records team that owns source quality were not invited. The sponsor wants to approve requirements today. What is the best action?<\/p>",
    "options": {
      "A": "<p>Treat current requirements as hypotheses; observe analyst work, include records owners, and reconvene with evidence before approval.<\/p>",
      "B": "<p>Approve the requirements because seniority provides sufficient authority to represent downstream users.<\/p>",
      "C": "<p>Ask the model to infer junior analysts&#39; needs from existing contract templates.<\/p>",
      "D": "<p>Approve only the user-interface requirements and let source ownership emerge during implementation.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Workshop tạo hypothesis nhưng thiếu evidence workflow tuyến đầu và source owner. Architect phải đánh dấu quyết định chưa giải quyết, thu evidence đại diện và lấy input có trách nhiệm trước approval. Kỷ luật hơn việc coi seniority, template hoặc UI scope là thay thế.<\/p>"
  },
  {
    "id": "MOCK-271",
    "set": 5,
    "number": 19,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A sales team requests an assistant that drafts renewal proposals. Discovery finds that account managers use different approval paths by discount level, while revenue operations tracks only final bookings. Which next step best reduces requirement ambiguity?<\/p>",
    "options": {
      "A": "<p>Train on every historical proposal and infer the approval path from writing style.<\/p>",
      "B": "<p>Use final bookings as the sole success metric because it is already reported.<\/p>",
      "C": "<p>Ask each account manager to keep their current process and let the assistant choose among them.<\/p>",
      "D": "<p>Map discount bands to approvers, define drafting and escalation boundaries, and baseline defects, cycle time, and rework.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Mơ hồ không chỉ là chất lượng soạn mà là policy phê duyệt chưa model hóa. Mapping decision right chính thức và đo defect approval, cycle time, rework làm boundary kiểm thử được. Style lịch sử, booking hoặc quy trình model tự chọn không thay ownership.<\/p>"
  },
  {
    "id": "MOCK-272",
    "set": 5,
    "number": 20,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A steering committee asks why the recommended model is not the cheapest candidate. The use-case evaluation shows the cheaper model meets latency and cost goals but misses the approved exception-handling threshold. What is the best explanation?<\/p>",
    "options": {
      "A": "<p>Say the recommended model is generally more capable, without presenting use-case results.<\/p>",
      "B": "<p>Recommend the cheaper model because finance owns the budget.<\/p>",
      "C": "<p>Hide the exception results to avoid confusing nontechnical stakeholders.<\/p>",
      "D": "<p>Compare candidates on approved quality, latency, and cost, and offer a bounded cheaper-model experiment.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Giao tiếp kiến trúc phải nối recommendation với outcome và hệ quả đã thống nhất. Evidence cho thấy cost/latency chưa đủ khi acceptance threshold trượt. Experiment giới hạn vẫn có thể chọn nhưng chỉ với gate rõ và quyết định rủi ro có owner.<\/p>"
  },
  {
    "id": "MOCK-273",
    "set": 5,
    "number": 21,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A customer-service assistant must meet an approved answer-quality threshold, keep account updates behind human approval, and launch before a legacy API is replaced. Finance favors the cheapest model, while operations favors the fastest design. Select three elements needed in the decision brief.<\/p>",
    "options": {
      "A": "<p>A complete component diagram and delivery estimate, with quality evidence deferred until the chosen design is implemented<\/p>",
      "B": "<p>The business outcome, approved constraints, options compared, and evidence for the recommendation<\/p>",
      "C": "<p>The recommended model and fastest path, with the legacy API risk accepted implicitly because the launch date is fixed<\/p>",
      "D": "<p>Responsibility boundaries, failure and escalation paths, and residual risks with owners<\/p>",
      "E": "<p>A cost comparison of all candidate models and a single executive recommendation, without the approved quality or approval-path evidence<\/p>",
      "F": "<p>Assumptions, decision date, reversible experiments, and triggers for revisiting the choice<\/p>"
    },
    "answer": [
      "B",
      "D",
      "F"
    ],
    "explanation": "<p>Brief hữu ích giải thích vì sao lựa chọn hỗ trợ outcome, trách nhiệm/failure xử lý thế nào và khi nào xem lại. Không nên chôn quyết định trong chi tiết, tuyên bố chắc chắn hay giấu phương án khác.<\/p>"
  },
  {
    "id": "MOCK-274",
    "set": 5,
    "number": 22,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A bank must explain a proposed assistant to executives, risk, operations, and engineers. Executives want one slide, but the design has an authoritative core system, retrieval, Claude, human approval, and a fail-closed path. What is the best communication approach?<\/p>",
    "options": {
      "A": "<p>Use audience-specific views that preserve one outcome, boundary, failure, evidence, and ownership narrative.<\/p>",
      "B": "<p>Tell executives it is fully automated while showing human approval only to risk.<\/p>",
      "C": "<p>Show every API field to all audiences so no information is omitted.<\/p>",
      "D": "<p>Present only the happy path and put failure behavior in post-launch documentation.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Audience khác cần độ sâu khác, không cần sự thật khác. Narrative nhiều lớp giữ outcome, ranh giới trách nhiệm, evidence, residual risk và failure behavior nhất quán, đồng thời cho mỗi nhóm đủ chi tiết để quyết định.<\/p>"
  },
  {
    "id": "MOCK-275",
    "set": 5,
    "number": 23,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>Operations asks why a high-impact refund assistant still requires approval for unusual cases even though average evaluation quality is high. Which answer is best?<\/p>",
    "options": {
      "A": "<p>Approval is temporary because any high average proves all case types are safe.<\/p>",
      "B": "<p>Keep approval for low-confidence and exception cases; production feedback can justify later boundary changes.<\/p>",
      "C": "<p>Human approval is required because Claude cannot participate in any workflow decision.<\/p>",
      "D": "<p>The approval exists only to make auditors comfortable, so its effectiveness need not be measured.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Trade-off chính không phải tự động hay không, mà là evidence định nghĩa boundary an toàn và workflow giữ failure ngoài đó thế nào. Đo exception volume, decision quality và handoff outcome cho stakeholder dữ liệu để xem lại boundary sau.<\/p>"
  },
  {
    "id": "MOCK-276",
    "set": 5,
    "number": 24,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A committee has 20 minutes to choose a pilot configuration. A faster costly model and a slower cheaper model both pass quality, but claims arrive in an interactive daytime path and an overnight path. Which TWO presentation practices make the trade-off decisionable?<\/p>",
    "options": {
      "A": "<p>Show both options on one workload-sliced scorecard with the quality gate, daytime tail latency, overnight completion, and cost.<\/p>",
      "B": "<p>Present only the preferred model&#39;s workflow benefits, because showing both cost and latency evidence may delay consensus.<\/p>",
      "C": "<p>Use the public benchmark winner as the tie-breaker while retaining the local cost result in an appendix.<\/p>",
      "D": "<p>Separate the reversible pilot choice from a scale commitment and name the next measurement that would justify switching after the pilot.<\/p>",
      "E": "<p>Choose the cheaper model for the pilot and postpone documenting residual risk until production metrics are available.<\/p>",
      "F": "<p>Average latency and cost into one score and omit the separate results from the committee view.<\/p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "<p>Ủy ban cần evidence so sánh giữ hai hình dạng workload, không một score trộn. A hiển thị quality, latency, completion, cost theo path; D coi pilot có thể đảo và nêu evidence cho switch sau. Advocacy, benchmark công khai, risk không ghi hay averaging trade-off không hỗ trợ quyết định.<\/p>"
  },
  {
    "id": "MOCK-277",
    "set": 5,
    "number": 25,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A sponsor cites a public benchmark to demand a model change, but the current model passes the organization&#39;s task-specific quality, latency, and cost gates. What should the architect do?<\/p>",
    "options": {
      "A": "<p>Switch immediately because a public benchmark is more objective than local evidence.<\/p>",
      "B": "<p>Test the proposed model on the approved suite and change only if the results justify the change under the approved quality, latency, and cost criteria.<\/p>",
      "C": "<p>Reject all future model comparisons to protect the existing architecture.<\/p>",
      "D": "<p>Compare only output quality and ignore latency and cost.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Architect không nên bác sponsor cũng không thay task evidence bằng benchmark chung. Đánh giá candidate trên cùng suite đại diện tạo so sánh công bằng; chỉ đổi khi kết quả đo được biện minh theo tiêu chí quality, latency, cost đã duyệt.<\/p>"
  },
  {
    "id": "MOCK-278",
    "set": 5,
    "number": 26,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A regulated service has a fixed compliance deadline. The proposed design can launch a narrow read-only assistant on time, while write actions need new authorization, audit, rollback, and incident procedures. Executives ask for all functions at once. What is the best recommendation?<\/p>",
    "options": {
      "A": "<p>Launch read-only scope with manual write fallback; gate write expansion on authorization, audit, rollback, and failure tests.<\/p>",
      "B": "<p>Launch all functions and add controls after the deadline.<\/p>",
      "C": "<p>Delay the entire solution because phased scope would be difficult to explain.<\/p>",
      "D": "<p>Let users decide whether a write action is safe after Claude proposes it, without an authorization policy.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Recommendation phải tách capability giới hạn đạt deadline khỏi hành động tác động cao chưa đủ control. Nó trình bày giá trị hiện tại, residual risk, manual fallback và evidence cần cho mở rộng sau.<\/p>"
  },
  {
    "id": "MOCK-279",
    "set": 5,
    "number": 27,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>Engineering describes a retrieval design using chunk size and reranking terms. Business owners cannot tell how the choice affects service quality. What should the architect add?<\/p>",
    "options": {
      "A": "<p>More implementation terminology so the presentation is technically complete.<\/p>",
      "B": "<p>Link retrieval choices to coverage, citation quality, latency, cost, failures, and thresholds.<\/p>",
      "C": "<p>A promise that reranking always improves every answer.<\/p>",
      "D": "<p>Only a projected cost total, because quality belongs to engineering.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Stakeholder cần liên kết nhân quả từ lựa chọn kỹ thuật đến quality người dùng thấy, tác động vận hành và failure mode. Kiến trúc vẫn chính xác kỹ thuật nhưng góc quyết định dùng evidence đại diện và threshold duyệt thay jargon hay lời hứa.<\/p>"
  },
  {
    "id": "MOCK-280",
    "set": 5,
    "number": 28,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A pilot invalidates an assumption that source documents are updated daily; some regions update weekly. The approved architecture depended on daily freshness. How should the architect communicate the change?<\/p>",
    "options": {
      "A": "<p>Keep the original recommendation because changing it may reduce stakeholder confidence.<\/p>",
      "B": "<p>Ask engineering to compensate silently with longer prompts.<\/p>",
      "C": "<p>Show the failed assumption, affected regions, fallback, revised evidence, owner, and expansion decision.<\/p>",
      "D": "<p>Report only that the project is delayed, without explaining the assumption or choices.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Quyết định kiến trúc phụ thuộc evidence và giả định. Khi một giả định sai, architect phải nêu tác động, giữ trạng thái tạm an toàn, so option sửa và lấy quyết định có trách nhiệm. Giấu thay đổi hoặc coi dữ liệu cũ là lỗi prompt gây hiểu sai.<\/p>"
  },
  {
    "id": "MOCK-281",
    "set": 5,
    "number": 29,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A business owner asks for a single SLA for a policy assistant. The API can be available while answers are unsupported or escalations stall. Which proposal is best?<\/p>",
    "options": {
      "A": "<p>Use API uptime only because it is easiest to measure.<\/p>",
      "B": "<p>Promise perfect answers whenever the API returns 200.<\/p>",
      "C": "<p>Define separate availability, quality, and escalation targets, with owners and breach handling.<\/p>",
      "D": "<p>Let each team publish its existing uptime, quality, or support metric and reconcile conflicts after launch.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Gói SLA hữu ích tách service behavior, task quality và human escalation. Mỗi chiều cần threshold, owner, measurement window, exclusion và breach action. Một uptime hoặc HTTP-success metric sẽ che trạng thái lỗi quan trọng.<\/p>"
  },
  {
    "id": "MOCK-282",
    "set": 5,
    "number": 30,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A production assistant receives ratings, but the team cannot reproduce failures or show users whether a reported issue changed a release. Support also needs a defined response path. Select two changes that make the feedback loop actionable.<\/p>",
    "options": {
      "A": "<p>A mailbox with no required metadata or response target<\/p>",
      "B": "<p>A monthly satisfaction average with no link to cases or versions<\/p>",
      "C": "<p>Case context, output, source and version references, user impact, consent boundaries, and reproducibility data<\/p>",
      "D": "<p>Automatic promotion of every user suggestion<\/p>",
      "E": "<p>Add response and resolution targets to the mailbox, but keep ratings detached from cases and versions<\/p>",
      "F": "<p>Route consented evidence through severity and owners into evaluation cases, tested releases, post-release checks, and closure<\/p>"
    },
    "answer": [
      "C",
      "F"
    ],
    "explanation": "<p>Một thay đổi làm report tái lập và truy vết; thay đổi kia kết hợp triage có trách nhiệm với eval, verify release và closure người dùng. Mailbox, average rời, target thiếu traceability hoặc auto implementation đều để lại gap đã nêu.<\/p>"
  },
  {
    "id": "MOCK-283",
    "set": 5,
    "number": 31,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An assistant meets uptime and latency SLOs, yet a new policy version causes unsupported guidance in one region. Support closes tickets after workarounds, product reports no service breach, and compliance wants rollout stopped globally. What is the best response?<\/p>",
    "options": {
      "A": "<p>Declare success because technical SLOs passed.<\/p>",
      "B": "<p>Stop all regions and block every version until compliance approves a global correction and restart plan.<\/p>",
      "C": "<p>Keep serving because support has workarounds.<\/p>",
      "D": "<p>Treat it as a scoped quality incident: identify affected versions and cases, contain exposure, test the correction, and set recovery gates.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Các chiều SLA có thể lệch nhau. Response phải giữ evidence, khoanh và contain quality failure, gán owner, verify correction và giao tiếp tiêu chí recovery. Infrastructure SLO đạt hoặc có workaround không nghĩa outcome người dùng chấp nhận.<\/p>"
  },
  {
    "id": "MOCK-284",
    "set": 5,
    "number": 32,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A support contract says critical feedback receives a response within one hour, but stakeholders assume the issue will be fixed within one hour. What should the architect do?<\/p>",
    "options": {
      "A": "<p>Define separate acknowledgment, containment, investigation, resolution, and update targets, with severity and owners.<\/p>",
      "B": "<p>Keep the wording and allow support to interpret response and resolution differently by incident.<\/p>",
      "C": "<p>Promise every issue will be fully fixed within one hour.<\/p>",
      "D": "<p>Remove time targets and report only monthly ticket totals.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Response, containment, resolution và communication là cam kết khác nhau. Quy tắc severity, owner, target và ví dụ rõ căn kỳ vọng stakeholder mà không hứa blanket bất khả thi.<\/p>"
  },
  {
    "id": "MOCK-285",
    "set": 5,
    "number": 33,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A global assistant receives conflicting feedback from users, regional policy owners, and operations. Select three controls needed before changing production behavior.<\/p>",
    "options": {
      "A": "<p>Segment feedback by task, region, version, impact, and source authority, and retain representative evidence.<\/p>",
      "B": "<p>Apply the most frequent request globally after a quick smoke test, because volume is the strongest authority signal.<\/p>",
      "C": "<p>Route policy conflicts to accountable owners and document whether a change is global, regional, or rejected.<\/p>",
      "D": "<p>Close and remove negative feedback once the response SLA is met, keeping only aggregate satisfaction for release decisions.<\/p>",
      "E": "<p>Let the model infer stakeholder authority from titles and prior decisions, escalating only low-confidence conflicts.<\/p>",
      "F": "<p>Evaluate the proposed change on affected and unaffected slices, gate release, monitor secondary effects, and report closure.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "F"
    ],
    "explanation": "<p>Feedback xung đột cần phân đoạn evidence, authority có trách nhiệm, quyết định theo scope, eval, gated release, monitoring tác động phụ và closure. Popularity hay judgment model không thay control.<\/p>"
  },
  {
    "id": "MOCK-286",
    "set": 5,
    "number": 34,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A product team uses a thumbs-down rate as a release gate, but the survey appears only after an escalation. Routine successes and silent abandonments are absent. What is the best improvement?<\/p>",
    "options": {
      "A": "<p>Increase the number of feedback buttons.<\/p>",
      "B": "<p>Sample feedback across representative completed, escalated, and abandoned cases, segment it by task and version, and interpret it with observed outcomes.<\/p>",
      "C": "<p>Use the average rating as the only release gate.<\/p>",
      "D": "<p>Require users to diagnose the likely root cause and specify the model, prompt, and source they think failed, then treat those responses as representative.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Rate hiện chỉ mô tả người đã tới escalation và trả survey. Sampling đại diện xuyên outcome, phân đoạn theo task/version và metric workflow quan sát được làm signal đủ cho release. Thêm button, giữ average cũ hay hỏi user nguyên nhân gốc không sửa sampling boundary.<\/p>"
  },
  {
    "id": "MOCK-287",
    "set": 5,
    "number": 35,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>After launch, sales requests a more persuasive tone, legal warns it may obscure uncertainty, support reports fewer escalations but more corrections, and an executive wants the change tomorrow. What is the best plan?<\/p>",
    "options": {
      "A": "<p>Ship the requested tone to all users, retain current escalation, and monitor satisfaction and correction counts after launch.<\/p>",
      "B": "<p>Reject sales permanently because legal raised a concern.<\/p>",
      "C": "<p>Set uncertainty and correction-load gates, test high-risk cases in a bounded cohort, retain escalation, and roll back on failure.<\/p>",
      "D": "<p>Let Claude choose tone per response without a versioned policy.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Yêu cầu ảnh hưởng persuasion, giao tiếp uncertainty, escalation và correction sau. Architect phải chuyển thành joint gate, test ca rủi ro đại diện, giới hạn exposure và giữ rollback, không coi metric một stakeholder là quyết định.<\/p>"
  },
  {
    "id": "MOCK-288",
    "set": 5,
    "number": 36,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A regional policy assistant has one widely reported wording defect and one rare report that may expose restricted guidance. Support capacity is limited. Select two signal groups that best determine severity and routing.<\/p>",
    "options": {
      "A": "<p>Whether the reporter is a senior executive<\/p>",
      "B": "<p>Harm or business impact, affected population, safe fallback, reproducibility, frequency, trend, and the model, source, or region slice<\/p>",
      "C": "<p>Engineering effort and the next available sprint, with higher severity assigned to fixes that can ship quickly<\/p>",
      "D": "<p>Frequency and reporter count alone, so the common wording defect always outranks the rare restricted-guidance report<\/p>",
      "E": "<p>Policy, security, privacy, contractual, or SLA implications and accountable owner<\/p>",
      "F": "<p>Whether the feedback wording is polite<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "<p>Severity kết hợp impact, fallback, scope tái hiện và trend với nghĩa vụ policy, security, privacy, contract/SLA cùng route có owner. Rank, tiện lợi, tần suất đơn lẻ hoặc giọng chữ có thể route sai ca hiếm hậu quả cao.<\/p>"
  },
  {
    "id": "MOCK-289",
    "set": 5,
    "number": 37,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A feedback item led to a prompt fix and passed regression tests. What is still needed to close the loop?<\/p>",
    "options": {
      "A": "<p>Delete the original feedback to reduce storage.<\/p>",
      "B": "<p>Close after offline regression passes and preserve only the test result and prompt version for audit.<\/p>",
      "C": "<p>Wait for the reporter to notice the change without notification.<\/p>",
      "D": "<p>Link the fix and release to the report, monitor the affected slice, communicate residual limits, and reopen on failure.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Pass regression là release gate, chưa phải cuối feedback lifecycle. Closure còn cần version traceability, verify production, giao tiếp outcome và giới hạn, cùng điều kiện reopen rõ.<\/p>"
  },
  {
    "id": "MOCK-290",
    "set": 5,
    "number": 38,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A design diagram says Claude may issue refunds, the tool contract requires human approval, and the runbook assumes automatic retry after uncertain tool results. Delivery starts next week. What should the architect do?<\/p>",
    "options": {
      "A": "<p>Pause the refund path and issue one versioned contract for approval, tool errors, bounded loops, verification, and ownership before handoff.<\/p>",
      "B": "<p>Keep the diagram for product behavior and the approval contract for production, allowing implementation to select the artifact by environment.<\/p>",
      "C": "<p>Make the tool contract authoritative and retain automatic retry, because approval is needed only when Claude first selects the refund tool.<\/p>",
      "D": "<p>Implement both paths behind a test flag and use integration results to choose the authority and error behavior next week.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Hướng dẫn tool của Anthropic tách yêu cầu tool của Claude khỏi execution ứng dụng và hỗ trợ HITL, vòng lặp giới hạn. Vì vậy handoff phải giải quyết authority ứng dụng, approval, xử lý result/error, verification và ownership trước triển khai.<\/p>"
  },
  {
    "id": "MOCK-291",
    "set": 5,
    "number": 39,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A claims-assistant diagram shows source retrieval and payment approval, but developers cannot tell which system owns each field or how missing and conflicting values appear at the interface. Which TWO artifacts make that boundary implementation-ready?<\/p>",
    "options": {
      "A": "<p>A field-level contract naming the authoritative source, required and optional values, validation, approval state, and error semantics<\/p>",
      "B": "<p>A detailed interaction mockup plus the approved happy path, with failure behavior left for implementation planning<\/p>",
      "C": "<p>A versioned technology list and delivery estimate, allowing developers to select authority and retry rules during coding<\/p>",
      "D": "<p>A successful retrieval and approval sequence that leaves each displayed field&#39;s authoritative source and missing or conflict state implicit<\/p>",
      "E": "<p>Contract tests and fixtures covering source retrieval, schema mapping, approval transitions, and missing or conflicting data<\/p>",
      "F": "<p>Meeting notes that name available systems and invite developers to resolve field ownership and conflict semantics during implementation<\/p>"
    },
    "answer": [
      "A",
      "E"
    ],
    "explanation": "<p>A biến sơ đồ thành hợp đồng authority và state tới từng field. E xác minh hợp đồng đó xuyên source, schema, approval, đường thiếu dữ liệu và xung đột. Mockup, danh sách công nghệ, sequence chỉ thành công hoặc recording cuộc họp không loại mơ hồ giao diện.<\/p>"
  },
  {
    "id": "MOCK-292",
    "set": 5,
    "number": 40,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A team receives a tool schema but no contract for invalid inputs, tool execution errors, timeouts, or transient API failures. Which guidance is most important?<\/p>",
    "options": {
      "A": "<p>Add successful-call examples and a generic error string, leaving retry behavior to each application team.<\/p>",
      "B": "<p>Define input validation, tool-result errors, timeouts, bounded retry for documented transient failures, request correlation, and path tests.<\/p>",
      "C": "<p>Return detailed error text to Claude and let it decide whether to retry, while logging every attempted call for later review.<\/p>",
      "D": "<p>Retry all timeouts and 5xx responses until the tool succeeds, then surface only the final outcome to the user.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Chỉ schema không định nghĩa hành vi cho input sai, lỗi tool result, timeout hay API failure. Contract triển khai phải theo cấu trúc result/error đã tài liệu hóa, retry giới hạn cho lỗi transient được nêu, giữ correlation evidence, thông báo trạng thái và test từng path.<\/p>"
  },
  {
    "id": "MOCK-293",
    "set": 5,
    "number": 41,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A multi-region design can use different providers. Data residency, model identifiers, identity, rate limits, and failure semantics differ; product wants one provider-neutral diagram. What is the best documentation strategy?<\/p>",
    "options": {
      "A": "<p>Document the shared logical path and let each regional team add provider-specific identity, limit, and error details during delivery.<\/p>",
      "B": "<p>Create unrelated regional designs with no shared contract.<\/p>",
      "C": "<p>Use one provider-neutral logical contract plus versioned regional views for data, identity, model mapping, limits, errors, tests, and owners.<\/p>",
      "D": "<p>Assume all providers expose identical behavior because they serve Claude.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Thiết kế logic và contract theo deployment là hai lớp khác. Contract chung giữ hành vi sản phẩm nhất quán; view theo vùng làm khác biệt về data, identity, model, limit, failure, fallback, testing và ownership có thể triển khai.<\/p>"
  },
  {
    "id": "MOCK-294",
    "set": 5,
    "number": 42,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A handoff diagram says “Claude calls inventory and shipping tools,” but developers disagree about whether Claude executes private systems and how parallel tool results return to the model. Which TWO details make the tool boundary implementation-ready?<\/p>",
    "options": {
      "A": "<p>Document each tool name, purpose, input schema, and the owning application authorization boundary<\/p>",
      "B": "<p>State that Claude executes private-system actions directly once a tool schema appears in the request<\/p>",
      "C": "<p>Show the application executing each tool_use and returning a matching tool_result for every tool-use ID before continuation, including parallel calls<\/p>",
      "D": "<p>Combine all parallel outputs into one free-text user message without preserving the tool-use IDs<\/p>",
      "E": "<p>List only friendly tool display names and let the model infer arguments and validation rules during each conversation<\/p>",
      "F": "<p>Place tool output in a new assistant message under an unrelated identifier so the conversation can continue independently<\/p>"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "<p>A định nghĩa tool contract và ranh giới execution do ứng dụng sở hữu. C ghi vòng `tool_use` tới `tool_result` và giữ correlation cho từng call, kể cả song song. Model thực thi trực tiếp, text không correlation, tên hiển thị thiếu schema hoặc result ID không liên quan không mô tả interface chuẩn.<\/p>"
  },
  {
    "id": "MOCK-295",
    "set": 5,
    "number": 43,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A team asks how to prove that its implementation conforms to the approved architecture. Which guidance is best?<\/p>",
    "options": {
      "A": "<p>Ask the architect to inspect the UI after launch.<\/p>",
      "B": "<p>Count completed code tasks.<\/p>",
      "C": "<p>Trust the team after a design walkthrough, then review production evidence if behavior differs from the approved architecture.<\/p>",
      "D": "<p>Trace requirements and decisions to interfaces, failure paths, observability, acceptance tests, and approved exceptions.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Conformance phải được chứng minh bằng traceability từ quyết định tới implementation contract và executable check. Evidence cùng exception được duyệt mạnh hơn review UI, số task hay attendance họp.<\/p>"
  },
  {
    "id": "MOCK-296",
    "set": 5,
    "number": 44,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A retrieval source changes from daily snapshots to event updates. Code is revised, but the diagram, data retention rule, evaluation fixture, runbook, and support training still describe snapshots. What is the best response?<\/p>",
    "options": {
      "A": "<p>Version the change, update linked data contracts and tests, rehearse failure and rollback, train support, and gate rollout on consistency.<\/p>",
      "B": "<p>Update only the diagram because it is the architecture artifact.<\/p>",
      "C": "<p>Ship the code and let production feedback reveal documentation gaps.<\/p>",
      "D": "<p>Keep snapshot fixtures and runbooks for comparability, updating them only after event delivery proves stable in production.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Thay đổi data flow lan tới retention, ordering, test, runbook, rollback và kỳ vọng support. Gói kiến trúc phải có version, nhất quán trước rollout; tác động phụ và recovery failure phải được test rõ.<\/p>"
  },
  {
    "id": "MOCK-297",
    "set": 5,
    "number": 45,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A vendor takes over implementation next week. The design has an approved read-only scope, unresolved write authorization, and a pilot gate that must be testable without relying on the original architect. Select two handoff packages needed before work starts.<\/p>",
    "options": {
      "A": "<p>Versioned scope, non-goals, interfaces, responsibility boundaries, unresolved write decisions, and the accountable change path<\/p>",
      "B": "<p>Acceptance and failure tests, observable pilot and rollback gates, evidence owners, decision records, named contacts, and a comprehension-checked walkthrough<\/p>",
      "C": "<p>A detailed presentation and recorded walkthrough, with the original architect available informally for unresolved write questions<\/p>",
      "D": "<p>A delivery plan authorizing the vendor to adjust approval boundaries when schedule or implementation constraints require it<\/p>",
      "E": "<p>Named contacts and a comprehension-checked walkthrough, while tests and unresolved decisions remain in separate unversioned notes<\/p>",
      "F": "<p>The final approved diagram and interface schema, with operational evidence scheduled for completion during the pilot<\/p>"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "<p>Vendor cần authority và change contract có version, cùng pilot package kiểm chứng được với rationale và kênh clarification có người chịu trách nhiệm. Presentation, hỗ trợ informal, giao boundary, note không version hoặc evidence để sau đều bỏ một constraint.<\/p>"
  },
  {
    "id": "MOCK-298",
    "set": 5,
    "number": 46,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>After handoff, developers discover that an approved requirement has no owner and conflicts with the latency SLO. What should they be instructed to do?<\/p>",
    "options": {
      "A": "<p>Choose the interpretation that best meets the delivery date, record the latency trade-off, and seek approval after release.<\/p>",
      "B": "<p>Escalate the conflict with measured options, obtain an accountable decision, and version the requirement, design, test, and SLO.<\/p>",
      "C": "<p>Ignore the SLO because functional requirements always have priority.<\/p>",
      "D": "<p>Implement both interpretations in production.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Hướng dẫn tốt có đường escalation và change khi phát hiện conflict. Team phải trình evidence và impact, lấy quyết định có authority rồi cập nhật đồng bộ mọi contract bị ảnh hưởng, không âm thầm chọn hoặc mở rộng hành vi.<\/p>"
  },
  {
    "id": "MOCK-299",
    "set": 5,
    "number": 47,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A team has stakeholder interviews and a prototype, but no baseline, representative evaluation, or support owner. The sponsor calls it ready for pilot. What is the best response?<\/p>",
    "options": {
      "A": "<p>Start a small production cohort because prototype feasibility and sponsor approval provide enough evidence to learn safely.<\/p>",
      "B": "<p>Continue interviews indefinitely before testing.<\/p>",
      "C": "<p>Set baselines and representative gates, assign support and escalation, bound the pilot, then approve only when evidence is ready.<\/p>",
      "D": "<p>Use demo satisfaction as the sole gate.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Pilot là giai đoạn học có kiểm soát, không phải demo informal hay production launch. Nó cần baseline outcome, eval đại diện, scope rõ, support/escalation, owner và entry/exit gate.<\/p>"
  },
  {
    "id": "MOCK-300",
    "set": 5,
    "number": 48,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>After a prompt and source update, offline results improved but support cannot tell which release served reported failures and operations cannot link rollback guidance to the approved threshold. Select two artifact groups that must remain linked and versioned.<\/p>",
    "options": {
      "A": "<p>A versioned launch announcement and support FAQ that name the release but do not link its evaluation or rollback threshold<\/p>",
      "B": "<p>A team decision chat and incident channel retained by date, with no accountable owner or link to source and prompt versions<\/p>",
      "C": "<p>Requirements, decisions, assumptions, architecture and interface contracts<\/p>",
      "D": "<p>Evaluation gates linked to release, model, prompt and source versions, runbooks, incident records, owners, rollback, and retirement<\/p>",
      "E": "<p>A versioned backlog that treats requested prompt and source ideas as approved scope before evaluation<\/p>",
      "F": "<p>Current runbooks and incident records linked to owners, but not to the release, evaluation suite, or source version<\/p>"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "<p>Nhóm đầu giữ hành vi dự kiến và rationale; nhóm hai nối eval, exact version, release evidence và operational response. Communication, chat giữ lại, backlog chưa duyệt hay record vận hành thiếu attribution release không sửa gap traceability.<\/p>"
  },
  {
    "id": "MOCK-301",
    "set": 5,
    "number": 49,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A post-launch claims assistant uses the SDK tool runner. Cycle time improved, but logs show repeated tool errors exhausting iterations, users abandon approval prompts, and high-impact actions must retain review. The sponsor asks to raise the iteration limit and disable approvals. What is the best lifecycle response?<\/p>",
    "options": {
      "A": "<p>Raise the iteration limit for every request and revisit the error pattern after the next quarterly release<\/p>",
      "B": "<p>Disable approvals because abandonment proves that review is the only cause of the production failures<\/p>",
      "C": "<p>Return to offline evaluation only and ignore production logs until a larger labeled dataset is available<\/p>",
      "D": "<p>Separate tool errors from approval abandonment, fix the failing paths, retain high-impact review and bounded iterations, then re-evaluate.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Quyết định vòng đời phải phân biệt tool failure, loop exhaustion và approval abandonment, không coi tất cả là capacity. D giữ human review có điều kiện cho hành động tác động cao, sửa execution path đã thấy, giữ loop giới hạn và đòi evidence mới trước mở rộng. Tăng limit, bỏ approval hay phớt lờ production đều để lỗi đã biết.<\/p>"
  },
  {
    "id": "MOCK-302",
    "set": 5,
    "number": 50,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A pilot passes offline quality gates, but frontline users stop submitting feedback because the form takes five minutes. What is the best lifecycle decision?<\/p>",
    "options": {
      "A": "<p>Reduce feedback burden while preserving context and consent; monitor participation and case mix before broad expansion.<\/p>",
      "B": "<p>Expand because offline quality already passed.<\/p>",
      "C": "<p>Require feedback on every response and use completion reminders so the larger sample offsets user effort.<\/p>",
      "D": "<p>Use only executive feedback instead.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Lifecycle readiness bao gồm cơ chế cung cấp bài học production. Nếu participation feedback và case mix kém, team phải cải thiện intake và kiểm chứng tính đại diện trước khi mở exposure.<\/p>"
  },
  {
    "id": "MOCK-303",
    "set": 5,
    "number": 51,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A claims-assistant pilot passes average quality, but two edge-case failures remain, the rollback path has not been rehearsed, and support training is incomplete. The sponsor wants production this week. Select two conditions that must be satisfied before expansion.<\/p>",
    "options": {
      "A": "<p>Representative capability, safety, failure, and workflow evaluations meet approved thresholds with traceable versions<\/p>",
      "B": "<p>The sponsor accepts the two edge-case risks and approves production while support and rollback are completed during the first cohort<\/p>",
      "C": "<p>Monitoring, capacity, escalation, rehearsed rollback, accountable owners, bounded scope, user communication, support training, approvals, and residual-risk acceptance are evidenced<\/p>",
      "D": "<p>Training and communication are completed, while average quality and the sponsor&#39;s acceptance replace edge-case thresholds and rollback rehearsal<\/p>",
      "E": "<p>All planned features and regional integrations are finished before production, even if the tested pilot scope could launch earlier<\/p>",
      "F": "<p>The team commits to a rapid fix instead of rollback so users do not experience a visible reversion after launch<\/p>"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "<p>Mở rộng production cần evidence ca biên đại diện và gói vận hành đã test gồm recovery, support, scope, approval, risk acceptance. Sponsor duyệt, training riêng, feature hoàn tất sau hoặc lời hứa sửa không thay gate còn mở.<\/p>"
  },
  {
    "id": "MOCK-304",
    "set": 5,
    "number": 52,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>After launch, evaluation ownership remains with the project team, support owns tickets, and platform owns uptime. No one owns cross-signal release decisions. What is the best fix?<\/p>",
    "options": {
      "A": "<p>Let each team optimize its own metric.<\/p>",
      "B": "<p>Name a service owner and shared scorecard, with severity and change rules linking incidents and feedback to release gates.<\/p>",
      "C": "<p>Transfer all cross-signal decisions to platform operations because it already owns uptime and production monitoring.<\/p>",
      "D": "<p>Pause all changes permanently.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Khoảng trống là ownership quyết định end-to-end. Service owner và governance chung phải kết hợp quality, service, support, risk và feedback evidence, nối chúng với change/release có kiểm soát.<\/p>"
  },
  {
    "id": "MOCK-305",
    "set": 5,
    "number": 53,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A retrieval corpus migration preserves document text but changes source identifiers and update timing. Old fixtures still pass, while the application displays citations and relies on current content. What should the lifecycle owner require before cutover?<\/p>",
    "options": {
      "A": "<p>Approve on the old fixtures because unchanged text proves retrieval quality is unchanged, then monitor citation complaints.<\/p>",
      "B": "<p>Validate displayed citations against the new identifiers, but retain old retrieval fixtures so historical answer scores remain comparable.<\/p>",
      "C": "<p>Version and rebuild fixtures for the new corpus, test retrieval, citation identity, and freshness, then use a monitored bounded rollout with rollback.<\/p>",
      "D": "<p>Temporarily suppress citations and cut over the new corpus, restoring citations after retrieval metrics stabilize.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Thay corpus đổi retrieval input và metadata nguồn hiển thị dù text không đổi. Fixture đại diện hiện tại, threshold retrieval/citation/freshness, rollout giới hạn có monitor và rollback sẵn tạo evidence trước cutover rộng.<\/p>"
  },
  {
    "id": "MOCK-306",
    "set": 5,
    "number": 54,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A Claude model used by a regional assistant has a published retirement date. Usage is spread across three providers, the replacement changes refusal behavior, and the old model will not remain available for rollback. Select two actions required before retirement.<\/p>",
    "options": {
      "A": "<p>Migrate the largest provider first and infer the remaining usage from its success, because the retirement date limits test time<\/p>",
      "B": "<p>Audit model usage and provider mappings, identify owners and deadlines, and locate every dependency that must move before the published retirement date<\/p>",
      "C": "<p>Keep the retired model identifier as the documented rollback even though the provider will no longer serve it<\/p>",
      "D": "<p>Validate the replacement only on aggregate answer quality, assuming refusal and latency changes are acceptable if the average improves<\/p>",
      "E": "<p>Test replacement quality, refusals, and latency by provider and region; migrate in verified cohorts with an available contingency before retirement<\/p>",
      "F": "<p>Remove all historical model records and monitoring immediately after the first successful cohort so teams cannot revert accidentally<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "<p>Hướng dẫn retirement của Anthropic yêu cầu audit usage, đánh giá replacement, lập kế hoạch migration và hoàn tất trước ngày retire. Suy luận chỉ một provider, rollback ID không có, test chỉ aggregate hoặc xóa evidence sớm đều để dependency chưa giải quyết.<\/p>"
  },
  {
    "id": "MOCK-307",
    "set": 5,
    "number": 55,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A roadmap lists discovery, build, launch, and optimize, but no gate connects evidence to each transition. What is the best correction?<\/p>",
    "options": {
      "A": "<p>Add more calendar milestones.<\/p>",
      "B": "<p>Have the project manager approve each transition after collecting status from delivery, support, and risk owners.<\/p>",
      "C": "<p>Remove gates to preserve agility.<\/p>",
      "D": "<p>Define entry and exit evidence, owners, stop or rollback conditions, and required artifact updates for each lifecycle stage.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Phase vòng đời chỉ có ý nghĩa khi chuyển phase phụ thuộc evidence, ownership, risk acceptance, recovery condition và artifact hiện hành. Gate không ngăn lặp; nó làm mỗi mở rộng/thay đổi có trách nhiệm và có thể đảo khi khả thi.<\/p>"
  },
  {
    "id": "MOCK-308",
    "set": 5,
    "number": 56,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A team wants consistent Claude Code behavior while keeping developer credentials and machine paths private. What is the best configuration split?<\/p>",
    "options": {
      "A": "<p>Commit shared instructions and approved tools in project scope, keep secrets local, and enforce mandatory policy in managed scope.<\/p>",
      "B": "<p>Commit credentials in encrypted project settings so onboarding is automatic and repository access controls protect them.<\/p>",
      "C": "<p>Put every setting in each developer&#39;s user scope.<\/p>",
      "D": "<p>Use local scope for organization-wide security policy.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Project scope phù hợp default team có version; user/local scope cho giá trị riêng hoặc theo máy; managed scope cho control developer không được override. Secret phải nằm trong cơ chế credential an toàn.<\/p>"
  },
  {
    "id": "MOCK-309",
    "set": 5,
    "number": 57,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>Two repository teams are piloting Claude Code. Managed policy must block secret files, one repository needs approved test commands, and local overrides have caused drift. Which TWO controls make the rollout repeatable? Choose 2.<\/p>",
    "options": {
      "A": "<p>Version shared project instructions and settings, with owners and review for changes<\/p>",
      "B": "<p>Enforce security-critical deny and bypass restrictions in managed policy and verify effective settings<\/p>",
      "C": "<p>Expand after the first repository passes its tests, then let the second team document any role or workflow differences during rollout<\/p>",
      "D": "<p>Give every repository unrestricted permissions to reduce prompts<\/p>",
      "E": "<p>Use one developer&#39;s local configuration as the undocumented standard<\/p>",
      "F": "<p>Measure only installation count<\/p>"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "<p>Baseline project có version và managed policy đã verify xử lý hai nguồn drift quan sát, vẫn giữ command riêng repository đã duyệt. Suy rộng từ một repo, quyền không giới hạn, local state không ghi hoặc số lần cài không chứng minh repeatability.<\/p>"
  },
  {
    "id": "MOCK-310",
    "set": 5,
    "number": 58,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An enterprise deploys managed deny rules. A repository adds project allow rules, a developer has local overrides, and CI uses non-interactive mode. The rollout must prevent secret reads while allowing approved tests. What is the best plan?<\/p>",
    "options": {
      "A": "<p>Use the repository allow list for tests and secrets because project rules are closest to the code and easier for teams to review.<\/p>",
      "B": "<p>Use managed secret denies and bypass restrictions, narrowly allow tests, verify effective rules in CI and locally, and audit exceptions.<\/p>",
      "C": "<p>Permit bypass mode in CI because no user can answer prompts.<\/p>",
      "D": "<p>Block all commands and let teams request manual execution.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Managed control phải ép bảo vệ không override; allow rule hẹp giữ công việc bắt buộc. Rollout phải verify cấu hình effective trên mỗi execution surface, quan sát denial và xử lý exception hợp lệ mà không làm yếu baseline.<\/p>"
  },
  {
    "id": "MOCK-311",
    "set": 5,
    "number": 59,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A team wants routine tests to run without repeated prompts but wants deployment commands to require approval and secret files to remain inaccessible. Which permission design is best?<\/p>",
    "options": {
      "A": "<p>Allow all Bash in trusted repositories and require developers to review each generated command before accepting changes.<\/p>",
      "B": "<p>Deny all Bash commands.<\/p>",
      "C": "<p>Deny secret reads, narrowly allow tests, keep deployments in ask, and verify matching and precedence.<\/p>",
      "D": "<p>Put secrets in project settings and deny the filename later.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Permission rule phải phản ánh hành động cần: deny dữ liệu bảo vệ, chỉ allow test low-risk đã biết, ask trước deploy tác động cao. Matching hẹp và verify rule effective ngăn exception dự kiến thành quyền rộng.<\/p>"
  },
  {
    "id": "MOCK-312",
    "set": 5,
    "number": 60,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>An API team is preparing a custom Agent Skill for Anthropic code execution. The package must upload successfully, repeated production calls must select the same behavior, and failures must be diagnosable. Which TWO practices meet those requirements? Choose 2.<\/p>",
    "options": {
      "A": "<p>Upload files from unrelated roots and place SKILL.md inside a nested subdirectory so each script keeps its local path.<\/p>",
      "B": "<p>Call the Skill with latest in production and discard the returned version because the Skill name identifies stable behavior.<\/p>",
      "C": "<p>Create a new Skill version, but continue calling latest and suppress API or container errors to keep the workflow moving.<\/p>",
      "D": "<p>Package the custom Skill under one common root with a top-level SKILL.md and valid frontmatter, paths, and upload limits.<\/p>",
      "E": "<p>Create a new Skill version, pin its exact skill_id and version in the container request, and handle API or container errors explicitly.<\/p>",
      "F": "<p>Reference scripts that remain only on the developer laptop and assume the remote code-execution container can load those local files.<\/p>"
    },
    "answer": [
      "D",
      "E"
    ],
    "explanation": "<p>D đáp ứng common root, `SKILL.md` cấp cao, frontmatter, path và upload theo tài liệu. E chọn exact version đã upload trong container request và giữ error evidence. Root không liên quan, production phụ thuộc latest, giấu lỗi hoặc file chỉ ở laptop không tạo execution hợp lệ, ổn định và chẩn đoán được.<\/p>"
  },
  {
    "id": "MOCK-313",
    "set": 5,
    "number": 61,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A repository needs a temporary new test command, but developers are copying personal allow rules. Security requires the exception to remain reviewable and expire. What is the best first response?<\/p>",
    "options": {
      "A": "<p>Ask every developer to reinstall and recreate the same local allow rule from a shared message, then confirm completion in chat.<\/p>",
      "B": "<p>Move all organization and repository permissions into user scope until the release is complete.<\/p>",
      "C": "<p>Assume experienced developers will remove their local exception after the deadline.<\/p>",
      "D": "<p>Use a reviewed, version-controlled project rule; track its owner and removal date separately, remove local copies, and verify deadline deletion.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Permission chung chỉ thuộc project scope có version sau managed-policy review. Vì project rule không có expiry tích hợp, owner và ngày gỡ phải theo ticket/procedure rõ và verify đúng hạn. Bản cá nhân, chuyển user scope hay dọn informal tạo configuration drift.<\/p>"
  },
  {
    "id": "MOCK-314",
    "set": 5,
    "number": 62,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An organization will enable Claude Code for 2,000 developers across three business units. Authentication and policy are validated, but support can onboard only 100 users per week, two products have release freezes, repositories use different toolchains, and finance requires predictable spend. What is the best rollout design?<\/p>",
    "options": {
      "A": "<p>Stage representative cohorts within support capacity and outside release freezes; verify onboarding and repository compatibility, monitor support load and cost, and use explicit pause, rollback, and expansion gates.<\/p>",
      "B": "<p>Enable all 2,000 users before the freezes, use total accepted lines and average cost as success criteria, and route compatibility failures through the normal support queue.<\/p>",
      "C": "<p>Pilot only enthusiastic low-risk repositories until ticket volume falls, then extrapolate those results to critical products and different toolchains to preserve the schedule.<\/p>",
      "D": "<p>Sequence access by manager seniority, leave each cohort open until support tickets stop, and increase the weekly budget whenever adoption slows below the target.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Rollout phải vừa support capacity hạn chế, tránh rủi ro release freeze, đại diện repo/business unit khác nhau và tạo evidence cost, operation trước mở rộng. A dùng cohort giới hạn và state-transition gate rõ. Global exposure, pilot chỉ chọn ca tiện hoặc xếp theo thâm niên không hỗ trợ quyết định enterprise tin cậy.<\/p>"
  },
  {
    "id": "MOCK-315",
    "set": 5,
    "number": 63,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>IT deployed managed settings to macOS, Windows, and CI clients; some require restart, and repository content must not enter telemetry. Which evidence best confirms rollout?<\/p>",
    "options": {
      "A": "<p>The policy file and deployment receipt exist on the administrator&#39;s laptop, and the configured values match the approved policy.<\/p>",
      "B": "<p>On representative restarted clients, verify effective managed rules with allowed and denied cases and sanitized telemetry.<\/p>",
      "C": "<p>No users have complained after one workday, and help-desk volume remains normal.<\/p>",
      "D": "<p>A project-scope settings view matches the policy on one restarted macOS client.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Xác nhận rollout phải bao phủ receipt, parsing, precedence nguồn effective, hành vi allow/deny và monitoring trên client đại diện. File tồn tại hoặc không có complaint không chứng minh enforcement.<\/p>"
  },
  {
    "id": "MOCK-316",
    "set": 6,
    "number": 1,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>Claude Code implemented a parser change that looks plausible, but the repository has hidden fixtures and a strict formatter. The team wants a reliable result without asking Claude to reread the whole repository. What is the best next instruction?<\/p>",
    "options": {
      "A": "<p>Accept the patch because the visible diff is concise; hidden fixtures can be checked after merge.<\/p>",
      "B": "<p>Ask for a longer explanation of parser theory before running any repository checks.<\/p>",
      "C": "<p>Inspect repository guidance and changed files, run parser tests and the formatter, fix failures, then report unrun checks.<\/p>",
      "D": "<p>Load every file into context and ask Claude to regenerate the parser from scratch before testing.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Workflow hiệu quả cung cấp context repository liên quan và để Claude verify thay đổi tập trung bằng test, formatter thật của project. Handoff phải tách check đã pass khỏi check không khả dụng.<\/p>"
  },
  {
    "id": "MOCK-317",
    "set": 6,
    "number": 2,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A platform team is redesigning an AI-assisted migration workflow. Repositories vary, builds are expensive, and a failed broad edit is difficult to review. Select three practices that together best control quality, context, and recovery.<\/p>",
    "options": {
      "A": "<p>Start with repository guidance and a representative module, define acceptance checks, and ask Claude to explore and propose a bounded plan before editing.<\/p>",
      "B": "<p>Ask for the entire migration in one prompt, then review only the final build result to minimize interaction overhead.<\/p>",
      "C": "<p>Use incremental changes with narrow checks first, inspect each diff, and checkpoint before expanding to the next module or repository.<\/p>",
      "D": "<p>Keep all repository histories and build logs in one long conversation so no prior detail can be lost.<\/p>",
      "E": "<p>Record validated commands and decisions in project guidance, reset or summarize context at stable boundaries, and retain a rollback point when a stage fails.<\/p>",
      "F": "<p>Skip module-level tests because the expensive full build is the only check that matters for final acceptance.<\/p>"
    },
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "<p>Migration không đồng nhất và tốn kém nên bắt đầu bằng plan giới hạn cùng acceptance check, tiến qua diff nhỏ đã verify, giữ hướng dẫn bền và recovery point. Sửa một lần, context không giới hạn hoặc chỉ feedback full build làm yếu review và cô lập failure.<\/p>"
  },
  {
    "id": "MOCK-318",
    "set": 6,
    "number": 3,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A developer asks Claude Code to refactor a payment library. Existing tests pass, but the change touches error paths and reviewers want a small, explainable diff. Which workflow is best?<\/p>",
    "options": {
      "A": "<p>Ask Claude to rewrite the library to its preferred architecture and add tests after reviewers accept the design.<\/p>",
      "B": "<p>Preserve the current tests exactly and avoid adding cases because passing tests already prove safe behavior.<\/p>",
      "C": "<p>Let Claude choose any implementation, then use the code review as the first verification step.<\/p>",
      "D": "<p>Add focused failing tests for the error paths, make the smallest passing refactor, then show the diff and test evidence.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Test tập trung làm hành vi dự kiến quan sát được trước refactor; implementation tối thiểu và diff đã verify giữ reviewable. Test hiện có và human review vẫn hữu ích nhưng không thay check mục tiêu cho path mới bị ảnh hưởng.<\/p>"
  },
  {
    "id": "MOCK-319",
    "set": 6,
    "number": 4,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A release requires coordinated edits in three repositories. Each has different tests and owners; one repository may be rolled back independently, and shared API compatibility must be checked before merge. What is the best Claude Code workflow?<\/p>",
    "options": {
      "A": "<p>Use separate sessions with repository-specific checks, compare shared interfaces at checkpoints, and keep owner-reviewed rollback points.<\/p>",
      "B": "<p>Use one session for all repositories and run only the aggregate integration test after every repository has been edited.<\/p>",
      "C": "<p>Let three sessions implement independently and rely on owners to discover API incompatibility during final review.<\/p>",
      "D": "<p>Edit the shared API repository first and automatically merge dependent repositories when their local tests pass.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Session hoặc worktree song song có thể cô lập context và thay đổi từng repository. Contract giới hạn, check repo, checkpoint interface chung, owner review và rollback độc lập kết hợp concurrency với compatibility, control vận hành.<\/p>"
  },
  {
    "id": "MOCK-320",
    "set": 6,
    "number": 5,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A team wants deterministic automation around Claude Code without asking the model to remember every procedural rule. Select three suitable uses of hooks.<\/p>",
    "options": {
      "A": "<p>Use a hook to replace repository tests with a natural-language judgment of whether the code appears correct.<\/p>",
      "B": "<p>Run a formatter or focused validation after relevant file changes, returning actionable failures to the session.<\/p>",
      "C": "<p>Grant unrestricted commands inside a hook so permission policy no longer interrupts the workflow.<\/p>",
      "D": "<p>Block a prohibited file path or command at the relevant pre-tool event and explain the rule to the user.<\/p>",
      "E": "<p>Put secrets directly in the hook definition because hooks are project configuration.<\/p>",
      "F": "<p>Record a structured audit event or notification when a selected workflow event occurs, while keeping the hook fast and failure behavior explicit.<\/p>"
    },
    "answer": [
      "B",
      "D",
      "F"
    ],
    "explanation": "<p>Hook phù hợp hành động xác định gắn lifecycle event: chạy check, chặn hành động cấm đã biết hoặc ghi event. Không nên dùng hook thay executable test bằng judgment chủ quan, bypass permission policy hoặc lộ secret.<\/p>"
  },
  {
    "id": "MOCK-321",
    "set": 6,
    "number": 6,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>After an AI-assisted workflow pilot, accepted lines increased but review time and escaped defects also rose. Leaders ask whether to expand. Which analysis best supports the decision?<\/p>",
    "options": {
      "A": "<p>Expand because accepted lines are the most direct measure of Claude Code productivity.<\/p>",
      "B": "<p>Compare representative cohorts on lead time, review and rework, defects, incidents, and cost; gate expansion by workflow.<\/p>",
      "C": "<p>Stop the pilot because any rise in defects proves AI assistance cannot improve development.<\/p>",
      "D": "<p>Measure installation and session counts for another quarter before considering quality data.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Analytics Claude Code phải đọc cùng KPI engineering rộng hơn. Phân đoạn adoption/contribution với lead time, review, rework, defect, incident và cost cho biết workflow tạo giá trị ròng không và cần chỉnh ở đâu.<\/p>"
  },
  {
    "id": "MOCK-322",
    "set": 6,
    "number": 7,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A flaky CI failure has two plausible causes, each full build is expensive, and raw logs exceed useful context. Three Claude Code sessions will investigate in parallel, but the final fix must be reproducible. Select three practices that best control the investigation.<\/p>",
    "options": {
      "A": "<p>Give each session one bounded hypothesis, the same baseline, and an evidence contract for confirming or rejecting it.<\/p>",
      "B": "<p>Run the narrowest discriminating checks first, compare passing and failing evidence, and expand only when a hypothesis survives.<\/p>",
      "C": "<p>Give each session a distinct hypothesis and the same baseline, but let each choose its own success evidence and stopping rule.<\/p>",
      "D": "<p>Consolidate verified findings and commands into a durable investigation note, discard superseded logs, and start the fix from that evidence.<\/p>",
      "E": "<p>Run narrow checks in each session, then paste all raw logs into the synthesis without resolving contradictions or marking superseded evidence.<\/p>",
      "F": "<p>Consolidate verified commands in a durable note, but let one session implement before the other hypotheses are compared.<\/p>"
    },
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "<p>Điều tra song song hữu ích khi hypothesis và evidence contract tách biệt. Check hẹp có tính phân biệt giảm feedback đắt; synthesis bền đã verify trở thành boundary tái lập cho fix. Một session trộn, log chưa lọc hoặc triển khai suy đoán trước evidence làm mờ attribution.<\/p>"
  },
  {
    "id": "MOCK-323",
    "set": 6,
    "number": 8,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A pull request generated with Claude changes authentication logic and 40 unrelated formatting lines. Tests pass, but the reviewer cannot see why the authorization behavior is preserved. What is the best response?<\/p>",
    "options": {
      "A": "<p>Approve because passing tests make the rationale and unrelated diff irrelevant.<\/p>",
      "B": "<p>Ask the reviewer to use Claude to summarize the current diff without changing it.<\/p>",
      "C": "<p>Remove unrelated formatting, state the authorization invariant, add focused tests, rerun checks, and present the smaller diff.<\/p>",
      "D": "<p>Replace the authentication module completely so the rationale can be documented from a clean design.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Pull request có AI hỗ trợ tốt cần scope rõ, giải thích hành vi giữ hoặc đổi và có verification tập trung. Bỏ thay đổi không liên quan giúp human review; test pass là evidence nhưng không thay security diff dễ hiểu.<\/p>"
  },
  {
    "id": "MOCK-324",
    "set": 6,
    "number": 9,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>During a long Claude Code repository migration, a command hangs after very large build logs. Ctrl+C does not return the prompt, the conversation must be resumed in the same repository, raw project data cannot leave the environment, and repeated context growth should be reduced before retry. What is the best response?<\/p>",
    "options": {
      "A": "<p>Restart and resume in the same directory, then paste the complete build log back into context before retrying the command.<\/p>",
      "B": "<p>Restart, run claude --resume from a new directory, and compact the recovered conversation before retrying.<\/p>",
      "C": "<p>Restart in the same directory and run /clear before claude --resume so no large context remains.<\/p>",
      "D": "<p>If Ctrl+C fails, restart locally, run claude --resume in the same directory, then compact around the plan and diff or clear irrelevant context before retry.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Khi cancel không khôi phục command treo, restart và resume conversation từ cùng directory. Sau đó chỉ giảm context lớn không cần bằng compact/clear tập trung trước retry. Phương án khác phục hồi log quá lớn, đổi directory hoặc bỏ conversation cần thiết.<\/p>"
  },
  {
    "id": "MOCK-325",
    "set": 6,
    "number": 10,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A support engineer can reproduce a Claude Code failure only on one developer&#39;s machine. Select three evidence-gathering actions that are appropriate before changing shared configuration.<\/p>",
    "options": {
      "A": "<p>Delete all local configuration and reinstall immediately so the machine matches a clean default.<\/p>",
      "B": "<p>Copy credentials and complete private prompts into the ticket so another engineer can replay the exact session.<\/p>",
      "C": "<p>Record the Claude Code version, operating environment, invocation, and minimal steps that distinguish the failing case from a passing case.<\/p>",
      "D": "<p>Change the shared project settings first because a single-machine failure usually indicates a project defect.<\/p>",
      "E": "<p>Inspect effective setting sources, validation or doctor output, MCP status, permissions, and relevant sanitized debug logs.<\/p>",
      "F": "<p>Capture timestamp, error text, affected command, expected behavior, and whether the issue persists with optional integrations disabled.<\/p>"
    },
    "answer": [
      "C",
      "E",
      "F"
    ],
    "explanation": "<p>Trước đổi cấu hình chung, ghi comparison pass/fail tối thiểu, kiểm tra effective config và integration health, lưu evidence lỗi đã sanitize, đồng bộ thời gian. Reinstall hoặc đổi baseline chung trước có thể xóa khác biệt cần chẩn đoán.<\/p>"
  },
  {
    "id": "MOCK-326",
    "set": 6,
    "number": 11,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>After a repository change, one MCP server disappears only when Claude Code is launched from a subdirectory. User-level servers still appear. What is the best first diagnostic?<\/p>",
    "options": {
      "A": "<p>Compare project roots, active configuration sources, MCP status, and validation output from root and subdirectory launches.<\/p>",
      "B": "<p>Replace the MCP server because intermittent discovery proves the server implementation is defective.<\/p>",
      "C": "<p>Move every MCP configuration to user scope so launch paths no longer matter.<\/p>",
      "D": "<p>Add the missing server repeatedly to each subdirectory configuration.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Vì hành vi đổi theo nơi launch trong khi server user-level còn đó, trước hết so project-root discovery và effective config/MCP status giữa hai lần gọi. Cách này cô lập scope và validation trước khi đổi distribution.<\/p>"
  },
  {
    "id": "MOCK-327",
    "set": 6,
    "number": 12,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>An internal service sees transient Claude API 5xx responses during a regional network event. Automatic retries increase request volume and the error rate. Which response is best?<\/p>",
    "options": {
      "A": "<p>Retry every 5xx immediately and keep accepting full traffic until the service recovers.<\/p>",
      "B": "<p>Preserve request IDs, apply bounded backoff, reduce intake, and restore traffic against observed error rates.<\/p>",
      "C": "<p>Disable all retries permanently and require operators to replay each failed request manually.<\/p>",
      "D": "<p>Suppress 5xx logs and error messages while leaving the request rate unchanged.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Server error transient có thể retry nhưng exponential backoff giới hạn và phục hồi traffic dần ngăn retry khuếch đại. Request ID giữ correlation; signal lỗi được monitor quyết định khi recovery an toàn.<\/p>"
  },
  {
    "id": "MOCK-328",
    "set": 6,
    "number": 13,
    "type": "multiple",
    "difficulty": "Trung bình",
    "question": "<p>A company enables Claude Code OpenTelemetry to diagnose permission and MCP failures while prohibiting prompt and source-code collection. Which TWO practices preserve useful correlation within that boundary? Choose 2.<\/p>",
    "options": {
      "A": "<p>Collect documented error, permission, and MCP signals needed for the incident use cases, with content capture disabled.<\/p>",
      "B": "<p>Put full prompts into a custom attribute because custom attributes are outside the telemetry policy.<\/p>",
      "C": "<p>Add approved low-cardinality environment and cohort attributes, align timestamps, and correlate them with CI or SIEM records.<\/p>",
      "D": "<p>Export every available event indefinitely in case a future incident needs it.<\/p>",
      "E": "<p>Aggregate all teams into one unlabeled total so no cohort can be compared during an incident.<\/p>",
      "F": "<p>Validate exporter delivery once before launch, but rely on the configured exporter afterward without monitoring delivery loss.<\/p>"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "<p>Telemetry error, permission và MCP được tài liệu hóa hỗ trợ chẩn đoán mà không thu prompt/source content. Thuộc tính cohort cardinality thấp và timestamp căn chỉnh tạo correlation giới hạn; custom content field, export vô hạn, aggregate thiếu cohort hoặc exporter không monitor đều không phù hợp.<\/p>"
  },
  {
    "id": "MOCK-329",
    "set": 6,
    "number": 14,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A newly shared Claude Code hook causes commands to fail on Windows but succeeds on macOS. The hook is optional to the core workflow, and a release deadline is near. What is the best response?<\/p>",
    "options": {
      "A": "<p>Tell Windows users to bypass permissions until the hook can be fixed after release.<\/p>",
      "B": "<p>Standardize the affected team on macOS for this release and revisit Windows after the deadline so the shared hook stays unchanged.<\/p>",
      "C": "<p>Roll back the optional hook for Windows, keep the verified manual path, capture shell, path, and exit evidence, test a portable fix, then re-enable gradually.<\/p>",
      "D": "<p>Keep the hook enabled and ask users to retry until a command succeeds.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Vì hook tùy chọn, rollback nó cho cohort ảnh hưởng giữ manual path đã verify. Evidence theo platform và test xuyên platform phải có trước re-enable dần, không bypass security control khác.<\/p>"
  },
  {
    "id": "MOCK-330",
    "set": 6,
    "number": 15,
    "type": "single",
    "difficulty": "Trung bình",
    "question": "<p>A configuration incident appears fixed after reverting one managed setting. Which evidence best supports closing the incident?<\/p>",
    "options": {
      "A": "<p>The administrator who made the rollback can no longer reproduce the issue on one laptop.<\/p>",
      "B": "<p>The error dashboard returned to normal, so the configuration change and affected population do not need to be recorded for later analysis.<\/p>",
      "C": "<p>No new support tickets arrived during the first hour after rollback.<\/p>",
      "D": "<p>Representative clients show the intended setting, no longer fail under the prior reproduction steps, and remain stable for the defined window; record the change.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Chỉ nên đóng sự cố khi các máy khách đại diện đều nhận đúng cấu hình có hiệu lực, không còn tái hiện lỗi cũ và duy trì ổn định trong khoảng thời gian theo dõi đã định. Kết quả trên một máy tính, dashboard hoạt động trở lại hoặc không có ticket mới đều chưa đủ để chứng minh lỗi đã được khắc phục hoàn toàn.<\/p>"
  }
];
