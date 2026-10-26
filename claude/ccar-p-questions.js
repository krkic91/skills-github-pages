// Generated CCAR-P question bank: 113 questions across 2 sets.
// Source content and explanations are preserved from the supplied practice session.
const CCAR_QUESTIONS = [
  {
    "id": "CCAR-P-001",
    "set": 1,
    "number": 1,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are integrating Claude Code into the team's pull-request workflow. The team wants AI-assisted review without removing human approval. Which integration design best fits this requirement?<\/p>",
    "options": {
      "A": "<p>Claude Code reviews the pull request and posts a structured analysis as a comment, while a human reviewer retains the approval decision under the existing branch-protection rules.<\/p>",
      "B": "<p>Claude Code merges every pull request automatically after completing its analysis, bypassing human approval and the existing branch-protection rules.<\/p>",
      "C": "<p>Claude Code disables all existing branch-protection rules to streamline the merge process, removing human approval as a required gate.<\/p>",
      "D": "<p> Claude Code silently deletes pull requests it assesses as low quality without posting a comment or notifying the author.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p><strong>Đáp án đúng: A.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Đúng:<\/strong> Phương án “Claude Code reviews the pull request and posts a structured analysis as a comment, while a human reviewer retains the approval decision under the existing branch-protection rules.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Claude Code merges every pull request automatically once it completes its review.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Claude Code disables all existing branch-protection rules to speed up the review cycle.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Claude Code silently deletes pull requests it assesses as low quality.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-002",
    "set": 1,
    "number": 2,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>A security team is evaluating two proposed controls. <\/p><p>Control A adds an outbound tool allowlist with destination restrictions and per-call review. <\/p><p>Control B scores responses against a stable adversarial evaluation set after each model-version change. <\/p><p>Which two risk categories are correctly matched to these controls? (Select two.)<\/p>",
    "options": {
      "A": "<p>Control A - prompt injection from adversarial content in retrieved data<\/p>",
      "B": "<p>Control A - silent quality drift after a model-version upgrade<\/p>",
      "C": "<p>Control A - data exfiltration via outbound tool calls<\/p>",
      "D": "<p>Control B - data exfiltration via outbound tool calls<\/p>",
      "E": "<p>Control B - silent quality drift after a model-version upgrade<\/p>"
    },
    "answer": [
      "C",
      "E"
    ],
    "explanation": "Đáp án đúng: <b>C<\/b> và <b>E<\/b>.<br/><ul><li><p><b>C — Đúng:<\/b> <b>Control A<\/b> thiết lập danh sách cho phép (allowlist) đối với công cụ gọi ra bên ngoài kèm theo giới hạn điểm đến và kiểm duyệt từng lượt gọi. Kiểm soát này trực tiếp ngăn chặn rủi ro rò rỉ/trích xuất dữ liệu trái phép (<b>data exfiltration<\/b>) thông qua các outbound tool calls.<\/p><\/li><li><p><b>E — Đúng:<\/b> <b>Control B<\/b> chấm điểm các phản hồi dựa trên một tập đánh giá đối kháng cố định sau mỗi lần thay đổi phiên bản mô hình. Kiểm soát này giúp phát hiện hiện tượng suy giảm chất lượng ngầm (<b>silent quality drift<\/b>) sau khi nâng cấp mô hình.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Control A chỉ tập trung vào kiểm soát đầu ra (outbound tool calls) chứ không giải quyết rủi ro chèn prompt (prompt injection) từ dữ liệu được truy xuất ở đầu vào.<\/p><\/li><li><p><b>B &amp; D:<\/b> Bị ghép sai cặp giữa biện pháp kiểm soát và loại rủi ro tương ứng.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-003",
    "set": 1,
    "number": 3,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are selecting a pattern for a compliance Q&amp;A assistant that must answer policy questions with citations to the authoritative internal source set. Latency, cost, and audit predictability are prioritized. Which pattern is the best fit?<\/p>",
    "options": {
      "A": "<p>Augmented LLM with retrieval-augmented generation over the indexed authoritative corpus and citation rendering on each answer.<\/p>",
      "B": "<p>Multi-agent orchestration with a planner, researcher, and writer agent for every query.<\/p>",
      "C": "<p> A pure agent loop with open web-browsing tools to surface the most current policy information, without constraining retrieval to the authoritative internal corpus.<\/p>",
      "D": "<p>A static prompt with the entire policy corpus concatenated into every request.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "Đáp án đúng: <b>A<\/b>.<br/><ul><li><p><b>A — Đúng:<\/b> <b>Augmented LLM với RAG trên tập tài liệu chính thức<\/b> (<i>Augmented LLM with RAG over indexed authoritative corpus<\/i>) và hiển thị trích dẫn (<i>citation rendering<\/i>) là mô hình chuẩn nhất. Mô hình này giúp giữ độ trễ (latency) thấp, chi phí (cost) tối ưu và đảm bảo tính dự đoán/minh bạch khi kiểm toán (<i>audit predictability<\/i>) vì câu trả lời luôn bám sát nguồn tài liệu nội bộ đã được chỉ mục.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>B:<\/b> Kiến trúc đa tác vụ (<i>Multi-agent orchestration<\/i>) với nhiều agent làm tăng độ trễ và chi phí token đáng kể, không phù hợp với tiêu chí ưu tiên độ trễ và chi phí.<\/p><\/li><li><p><b>C:<\/b> Sử dụng công cụ duyệt web mở (<i>open web-browsing<\/i>) dễ dẫn đến thông tin không chính xác từ bên ngoài và mất tính kiểm soát khi kiểm toán.<\/p><\/li><li><p><b>D:<\/b> Nạp toàn bộ tập chính sách vào prompt (<i>static prompt with entire corpus<\/i>) sẽ tiêu tốn lượng token khổng lồ cho mỗi truy vấn, làm tăng mạnh chi phí và độ trễ.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-004",
    "set": 1,
    "number": 4,
    "type": "matching",
    "difficulty": "Medium",
    "question": "<p>You are classifying chunking strategies by the corpus type each is best suited to. For each chunking strategy, select the appropriate corpus type: 'Long Structured Documents,' 'Heterogeneous Short Records,' or 'Code or Hierarchical Specifications.'<\/p>",
    "matching": [
      {
        "letter": "A",
        "text": "Function-level or section-level chunking for code modules",
        "choices": [
          "Code or Hierarchical Specs",
          "Heterogeneous Short Records",
          "Long Structured Documents"
        ],
        "answer": "Code or Hierarchical Specs"
      },
      {
        "letter": "B",
        "text": "Tree-aware chunking that follows code or specification hierarchy",
        "choices": [
          "Code or Hierarchical Specs",
          "Heterogeneous Short Records",
          "Long Structured Documents"
        ],
        "answer": "Code or Hierarchical Specs"
      },
      {
        "letter": "C",
        "text": "Per-record chunking where each record is one chunk",
        "choices": [
          "Code or Hierarchical Specs",
          "Heterogeneous Short Records",
          "Long Structured Documents"
        ],
        "answer": "Heterogeneous Short Records"
      },
      {
        "letter": "D",
        "text": "Semantic chunking along clause or paragraph boundaries",
        "choices": [
          "Code or Hierarchical Specs",
          "Heterogeneous Short Records",
          "Long Structured Documents"
        ],
        "answer": "Long Structured Documents"
      },
      {
        "letter": "E",
        "text": "Fixed-size chunking with overlap for short records of similar length",
        "choices": [
          "Code or Hierarchical Specs",
          "Heterogeneous Short Records",
          "Long Structured Documents"
        ],
        "answer": "Heterogeneous Short Records"
      },
      {
        "letter": "F",
        "text": "Hierarchical chunking that mirrors document section structure",
        "choices": [
          "Code or Hierarchical Specs",
          "Heterogeneous Short Records",
          "Long Structured Documents"
        ],
        "answer": "Long Structured Documents"
      }
    ],
    "answer": {
      "A": "Code or Hierarchical Specs",
      "B": "Code or Hierarchical Specs",
      "C": "Heterogeneous Short Records",
      "D": "Long Structured Documents",
      "E": "Heterogeneous Short Records",
      "F": "Long Structured Documents"
    },
    "explanation": "<p><strong>Phân loại từng thành phần:<\/strong> mỗi dòng được xếp vào nhóm thể hiện đúng vai trò hoặc giai đoạn hoạt động của nó.<\/p><ul><li><strong>A — Code or Hierarchical Specs:<\/strong> Function-level or section-level chunking for code modules — Thuộc nhóm “Code or Hierarchical Specs” vì chức năng được mô tả diễn ra đúng tại lớp hoặc giai đoạn đó; các nhóm còn lại đảm nhiệm vai trò khác trong quy trình.<\/li><li><strong>B — Code or Hierarchical Specs:<\/strong> Tree-aware chunking that follows code or specification hierarchy — Thuộc nhóm “Code or Hierarchical Specs” vì chức năng được mô tả diễn ra đúng tại lớp hoặc giai đoạn đó; các nhóm còn lại đảm nhiệm vai trò khác trong quy trình.<\/li><li><strong>C — Heterogeneous Short Records:<\/strong> Per-record chunking where each record is one chunk — Thuộc nhóm “Heterogeneous Short Records” vì chức năng được mô tả diễn ra đúng tại lớp hoặc giai đoạn đó; các nhóm còn lại đảm nhiệm vai trò khác trong quy trình.<\/li><li><strong>D — Long Structured Documents:<\/strong> Semantic chunking along clause or paragraph boundaries — Thuộc nhóm “Long Structured Documents” vì chức năng được mô tả diễn ra đúng tại lớp hoặc giai đoạn đó; các nhóm còn lại đảm nhiệm vai trò khác trong quy trình.<\/li><li><strong>E — Heterogeneous Short Records:<\/strong> Fixed-size chunking with overlap for short records of similar length — Thuộc nhóm “Heterogeneous Short Records” vì chức năng được mô tả diễn ra đúng tại lớp hoặc giai đoạn đó; các nhóm còn lại đảm nhiệm vai trò khác trong quy trình.<\/li><li><strong>F — Long Structured Documents:<\/strong> Hierarchical chunking that mirrors document section structure — Thuộc nhóm “Long Structured Documents” vì chức năng được mô tả diễn ra đúng tại lớp hoặc giai đoạn đó; các nhóm còn lại đảm nhiệm vai trò khác trong quy trình.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-005",
    "set": 1,
    "number": 5,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>A technical team is debating whether to implement a new capability for generating regulatory filings from internal data as a Claude Skill or as an MCP server. The capability requires a fixed authoring procedure with embedded examples, does not need to call live external systems, and must be portable across three Claude deployments: claude.ai, an internal API integration, and Claude Code. Which factor most strongly favors implementing the capability as a Skill?<\/p>",
    "options": {
      "A": "<p>The capability needs to query a live database for the most recent regulatory filings.<\/p>",
      "B": "<p>The capability must also be callable from a developer's command-line interface.<\/p>",
      "C": "<p>The capability requires direct authentication against the corporate identity provider.<\/p>",
      "D": "<p>The capability is procedural knowledge with no live external-system calls required.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li>Đáp án đúng: <b>D<\/b>.<br/><ul><li><p><b>D — Đúng:<\/b> Phương án <b>\"The capability is procedural knowledge with no live external-system calls required.\"<\/b> là yếu tố quyết định vì Claude Skills được thiết kế chuyên biệt để đóng gói các quy trình tĩnh, hướng dẫn thủ tục (procedural knowledge) kèm theo ví dụ mẫu mà không cần đến cơ chế kết nối hay giao tiếp với hệ thống bên ngoài như một MCP server. Đồng thời, cấu trúc này có tính di động cao, dễ dàng hoạt động trên cả ba môi trường triển khai (<code>claude.ai<\/code>, internal API, và Claude Code).<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Việc cần truy vấn cơ sở dữ liệu thời gian thực (live database) đòi hỏi phải xây dựng một Model Context Protocol (MCP) server chứ không phù hợp để làm Claude Skill đơn thuần.<\/p><\/li><li><p><b>B:<\/b> Yêu cầu gọi từ giao diện dòng lệnh (CLI) của lập trình viên không phải là điểm phân biệt chính yếu ủng hộ Claude Skill hơn MCP vì cả hai đều có cơ chế tích hợp riêng.<\/p><\/li><li><p><b>C:<\/b> Yêu cầu xác thực trực tiếp với nhà cung cấp danh tính doanh trại (corporate identity provider) nằm ngoài phạm vi cốt lõi của một Skill và thường cần các kiến trúc dịch vụ tích hợp bên ngoài hoặc MCP server bảo mật.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-006",
    "set": 1,
    "number": 6,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are preparing an operational runbook for a Claude-based service. Which content is essential to include in the runbook?<\/p>",
    "options": {
      "A": "<p>Dashboard and log references only, without alert definitions, triage steps, escalation paths, or rollback procedures for the on-call engineer to act on.<\/p>",
      "B": "<p>Common alerts and their triage steps, escalation paths, rollback procedures, and references to the relevant dashboards and logs.<\/p>",
      "C": "<p>Alert definitions and triage steps only, without escalation paths, rollback procedures, or references to dashboards and logs for on-call use.<\/p>",
      "D": "<p>Escalation paths and rollback procedures only, without alert definitions, triage steps, or dashboard references to guide initial incident response.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p><em>Nguồn đề thi không cung cấp phần giải thích cho câu hỏi này.<\/em><\/p>"
  },
  {
    "id": "CCAR-P-007",
    "set": 1,
    "number": 7,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>A loan pre-qualification assistant shows 94 percent approval recommendations that match the human underwriter decision. The fairness team has reviewed approval rate parity across protected groups and reported no significant difference. A board member has asked whether this evidence is sufficient to declare the assistant fair. Which two Discernment-competency findings should you report? (Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Approval rate parity does not by itself assess error rate parity across protected groups.<\/p>",
      "B": "<p>Match with human underwriters does not establish freedom from underwriter-introduced bias.<\/p>",
      "C": "<p>The 94 percent match rate is sufficient evidence of fairness for the assistant's decisions.<\/p>",
      "D": "<p>The fairness team's review process likely missed at least some of the protected groups studied.<\/p>",
      "E": "<p>A larger sample is needed before any meaningful fairness claim can be made about the model.<\/p>"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "Đáp án đúng là <b>A<\/b> và <b>B<\/b>.<br/><ul><li><p><b>A — Đúng:<\/b> Sự bình đẳng về tỷ lệ phê duyệt (<i>approval rate parity<\/i>) không đồng nghĩa với việc có sự bình đẳng về tỷ lệ sai sót (<i>error rate parity<\/i>) giữa các nhóm đối tượng được bảo vệ (<i>protected groups<\/i>). Tỷ lệ khớp cao vẫn có thể ẩn chứa tỷ lệ âm tính giả hoặc dương tính giả chênh lệch lớn giữa các nhóm.<\/p><\/li><li><p><b>B — Đúng:<\/b> Mức độ trùng khớp 94% với các chuyên gia thẩm định (<i>human underwriters<\/i>) chỉ phản ánh khả năng bắt chước quyết định của con người, chứ <b>không chứng minh được hệ thống hoàn toàn loại bỏ được các thiên vị/định kiến sẵn có<\/b> do chính các chuyên gia đó đưa vào trong quá trình thẩm định.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>C:<\/b> Khẳng định tỷ lệ khớp 94% là bằng chứng đầy đủ cho sự công bằng là sai lầm; đây là một kết luận ngụy biện vì bỏ qua các yếu tố định kiến và tỷ lệ lỗi phân bổ theo nhóm dân số.<\/p><\/li><li><p><b>D:<\/b> Phát biểu mang tính phán đoán chủ quan và thiếu cơ sở kỹ thuật để kết luận liệu quy trình đánh giá đã bỏ sót nhóm nào hay chưa.<\/p><\/li><li><p><b>E:<\/b> Vấn đề ở đây nằm ở bản chất của chỉ số đánh giá (<i>matching rate vs. fairness/bias<\/i>), không thuần túy là do kích thước mẫu.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-008",
    "set": 1,
    "number": 8,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>An operations engineer reports that a Claude-based pipeline began returning malformed JSON responses after a scheduled maintenance window, causing downstream processing failures. Which two investigative steps most directly isolate the root cause? (Select two.)<\/p>",
    "options": {
      "A": "<p>Clear the prompt cache and resubmit all pending requests to eliminate stale cached prefixes.<\/p>",
      "B": "<p>Compare the current system prompt and output schema configuration against the last known good version from before the maintenance window.<\/p>",
      "C": "<p>Switch to a different Claude model tier to rule out provider-side changes as a contributing factor.<\/p>",
      "D": "<p>Increase the max_tokens limit to determine whether output truncation is causing incomplete JSON structures.<\/p>",
      "E": "<p>Replay a set of pre-maintenance requests against the current configuration and inspect the raw model output before downstream parsing.<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "<p><strong>Đáp án đúng: B, E.<\/strong> Các phương án này bổ sung cho nhau và cùng đáp ứng đầy đủ những yêu cầu được nêu trong tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Clear the prompt cache and retry to rule out a stale cache as the source.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>B — Đúng:<\/strong> Phương án “Compare the current system prompt and output schema configuration against the last known good version from before the maintenance window.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Switch to a different Claude model tier to work around the malformed output.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Increase the max_tokens limit to allow longer responses.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>E — Đúng:<\/strong> Phương án “Replay a set of pre-maintenance requests against the current configuration and inspect the raw model output before downstream parsing.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-009",
    "set": 1,
    "number": 9,
    "type": "matching",
    "difficulty": "Medium",
    "question": "<p>You are reviewing a peer's end-to-end design for a Claude-based platform expected to scale to thousands of concurrent users. For each statement, indicate Yes if it reflects sound architectural practice. Otherwise, select No.<\/p>",
    "matching": [
      {
        "letter": "A",
        "text": "Authentication and authorization run before retrieval so retrieval can filter by identity.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "B",
        "text": "An asynchronous queue absorbs bursty traffic between intake and the model invocation layer.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "C",
        "text": "Tax computation is encoded directly in the system prompt rather than in code.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "No"
      },
      {
        "letter": "D",
        "text": "Conversation logs include unredacted government identifiers to maximize signal for tuning.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "No"
      }
    ],
    "answer": {
      "A": "Yes",
      "B": "Yes",
      "C": "No",
      "D": "No"
    },
    "explanation": "Đáp án Yes / No cho từng phát biểu: <br/><ul><li><p><b>A — Yes:<\/b> <b>Xác thực và phân quyền (Authentication/Authorization) phải chạy trước bước truy xuất (retrieval)<\/b> để đảm bảo hệ thống chỉ tìm kiếm và trả về dữ liệu thuộc phạm vi quyền hạn của người dùng, tránh rò rỉ dữ liệu nhạy cảm.<\/p><\/li><li><p><b>B — Yes:<\/b> <b>Hàng chờ bất đồng bộ (Asynchronous queue)<\/b> giúp điều hòa và hấp thụ các đợt lưu lượng truy cập tăng đột biến (bursty traffic), bảo vệ tầng gọi mô hình khỏi bị quá tải hoặc chạm giới hạn tỉ lệ (rate limit).<\/p><\/li><li><p><b>C — No:<\/b> <b>Các phép tính toán cố định (như tính thuế) không nên đưa trực tiếp vào system prompt<\/b>, mà cần xử lý bằng mã lập trình (code) hoặc công cụ (tool) để đảm bảo độ chính xác tuyệt đối 100%.<\/p><\/li><li><p><b>D — No:<\/b> <b>Nhật ký hội thoại tuyệt đối không được chứa định danh do chính phủ cấp chưa được che (unredacted PII)<\/b>, vì điều này vi phạm nghiêm trọng các quy định về bảo mật và riêng tư dữ liệu (PII compliance).<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-010",
    "set": 1,
    "number": 10,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>A Claude-based research assistant begins producing responses that confidently contradict its retrieved source documents despite no change to the retrieval pipeline. Which two diagnostic actions most directly identify the root cause of this behavior? (Select two.)<\/p>",
    "options": {
      "A": "<p>Increase the context-window size to allow more retrieved chunks per query.<\/p>",
      "B": "<p>Switch the retrieval index to a denser embedding model to improve chunk-relevance scores.<\/p>",
      "C": "<p>Determine whether the failure reproduces on the previous model version to test for a model mismatch.<\/p>",
      "D": "<p>Reduce the temperature setting to lower response variance across all query types.<\/p>",
      "E": "<p>Inspect the system-prompt grounding instructions to determine whether citation constraints remain intact.<\/p>"
    },
    "answer": [
      "C",
      "E"
    ],
    "explanation": "<p><em>Nguồn đề thi không cung cấp phần giải thích cho câu hỏi này.<\/em><\/p>"
  },
  {
    "id": "CCAR-P-011",
    "set": 1,
    "number": 11,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>You are running a controlled experiment to compare two prompts and must complete the design steps before executing the experiment. Which two steps must be completed BEFORE running the experiment with random assignment? (Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Determine the minimum detectable effect size and the sample size needed for power.<\/p>",
      "B": "<p>Decide whether to promote, reject, or iterate the candidate based on the analysis.<\/p>",
      "C": "<p>Define the hypothesis and the primary success metric for the comparison.<\/p>",
      "D": "<p>Analyze the results against the predefined success metric and significance threshold.<\/p>",
      "E": "<p>Document the recommendation, the trade-offs accepted, and the alternatives considered.<\/p>"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "<p><strong>Đáp án đúng: A, C.<\/strong> Các phương án này bổ sung cho nhau và cùng đáp ứng đầy đủ những yêu cầu được nêu trong tình huống.<\/p><ul><li><strong>A — Đúng:<\/strong> Phương án này là bước chuẩn bị cần hoàn tất trước khi thực thi: “Determine the minimum detectable effect size and the sample size needed for power.”. Nó thiết lập đầu vào, tiêu chí hoặc phạm vi cần thiết để bước sau có thể được đánh giá đúng.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Decide whether to promote, reject, or iterate the candidate based on the analysis.” vì đây là hoạt động đánh giá hoặc ra quyết định sau khi đã thực thi, không phải bước chuẩn bị được câu hỏi yêu cầu.<\/li><li><strong>C — Đúng:<\/strong> Phương án này là bước chuẩn bị cần hoàn tất trước khi thực thi: “Define the hypothesis and the primary success metric for the comparison.”. Nó thiết lập đầu vào, tiêu chí hoặc phạm vi cần thiết để bước sau có thể được đánh giá đúng.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Analyze the results against the predefined success metric and significance threshold.” vì đây là hoạt động đánh giá hoặc ra quyết định sau khi đã thực thi, không phải bước chuẩn bị được câu hỏi yêu cầu.<\/li><li><strong>E — Sai:<\/strong> Không chọn “Document the recommendation, the trade-offs accepted, and the alternatives considered.” vì đây là hoạt động đánh giá hoặc ra quyết định sau khi đã thực thi, không phải bước chuẩn bị được câu hỏi yêu cầu.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-012",
    "set": 1,
    "number": 12,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are investigating an MCP server that fails on first launch but succeeds on subsequent runs. System permission dialogs appeared during the first launch. Which response is most appropriate?<\/p>",
    "options": {
      "A": "<p>Recognize the first-run permission grant as the cause, document the expected behavior in onboarding guidance, and confirm that subsequent runs succeed.<\/p>",
      "B": "<p>Reinstall the operating system to clear all permission state without first confirming whether the one-time permission grant caused the failure.<\/p>",
      "C": "<p>Disable operating-system permission dialogs entirely, accept the resulting security implications, and proceed without confirming whether the failure recurs.<\/p>",
      "D": "<p>Treat the first-run failure as a permanent fault, replace the MCP server, and do not verify whether subsequent runs succeed.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p><strong>Đáp án đúng: A.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Đúng:<\/strong> Phương án “Recognize the first-run permission grant as the cause, document the expected behavior in onboarding guidance, and confirm that subsequent runs succeed.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Reinstall the operating system to eliminate the permission dialog issue.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Disable operating-system permission dialogs entirely for all applications.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Treat the first-run failure as a permanent fault and escalate to vendor support.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-013",
    "set": 1,
    "number": 13,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are designing a content moderation classifier that processes high volumes of usergenerated comments under a tight per-message latency budget using well-defined classification labels. Which model selection best aligns with the workload?<\/p>",
    "options": {
      "A": "<p>Opus, because every moderation decision requires maximum reasoning depth regardless of classification complexity.<\/p>",
      "B": "<p>Haiku, because its latency and cost profile align with high-volume classification workloads that require limited reasoning depth.<\/p>",
      "C": "<p>Sonnet, because larger general-purpose models are preferred even when workload latency requirements are strict.<\/p>",
      "D": "<p>Sonnet with extended thinking enabled, because deeper reasoning should be applied to every moderation request to improve edge-case handling.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "Đáp án đúng: <b>B<\/b>.<br/><ul><li><p><b>B — Đúng:<\/b> <b>Haiku<\/b> là lựa chọn tối ưu cho tác vụ phân loại kiểm duyệt nội dung (content moderation) với khối lượng bình luận lớn và nhãn phân loại đã được xác định rõ. Cấu trúc chi phí thấp và độ trễ phản hồi cực nhỏ của Haiku hoàn toàn đáp ứng ngân sách độ trễ khắt khe (<i>tight per-message latency budget<\/i>) mà không đòi hỏi khả năng suy luận quá sâu.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> <b>Opus<\/b> có chi phí và độ trễ rất cao, không phù hợp cho tác vụ kiểm duyệt lượng lớn dữ liệu ngắn với các nhãn cố định.<\/p><\/li><li><p><b>C:<\/b> <b>Sonnet<\/b> cung cấp sự cân bằng tốt cho nhiều tác vụ chung, nhưng đối với tác vụ phân loại đơn giản số lượng lớn, Haiku hiệu quả hơn vượt trội về cả tốc độ lẫn chi phí.<\/p><\/li><li><p><b>D:<\/b> Bật tính năng suy luận mở rộng (<i>extended thinking<\/i>) làm tăng đáng kể thời gian phản hồi (latency), đi ngược lại yêu cầu về ngân sách độ trễ của hệ thống.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-014",
    "set": 1,
    "number": 14,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are responding to an adversarial input pattern in which users include text claiming admin authority and instructing the model to bypass safety restrictions. Which combination of controls most effectively mitigates this attack pattern?<\/p>",
    "options": {
      "A": "<p>Trusting that the model will intrinsically recognize and reject all bypass attempts without prompt-level instructions, runtime classifiers, scoped permissions, or audit logging.<\/p>",
      "B": "<p>Prompt-level instructions that treat user content as untrusted data, runtime classifiers that detect override attempts, scoped tool permissions that cannot be elevated by user content, and audit logging of attempts.<\/p>",
      "C": "<p>Removing all safety restrictions and guardrails to eliminate the attack surface that bypass attempts target, accepting that this makes the assistant unrestricted for all inputs.<\/p>",
      "D": "<p>Granting users any privilege level they assert in their message content, on the assumption that cooperative behavior requires honoring self-declared authority without independent verification.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p><strong>Đáp án đúng: B.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Trusting that the model will intrinsically recognize and reject all bypass attempts without additional controls.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>B — Đúng:<\/strong> Phương án “Prompt-level instructions that treat user content as untrusted data, runtime classifiers that detect override attempts, scoped tool permissions that cannot be elevated by user content, and audit logging of attempts.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Removing all safety restrictions so there is nothing for the adversary to bypass.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Granting users any privilege level they assert in their message content.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-015",
    "set": 1,
    "number": 15,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are reviewing a peer's Claude Code permission rules for an enterprise rollout. The rules grant unrestricted Bash access to all projects across all developers. Which response is most appropriate?<\/p>",
    "options": {
      "A": "<p>Add unrestricted access to additional tool categories as well, so that Bash is not asymmetrically more permissive than other tools, expanding the attack surface further in the name of consistency.<\/p>",
      "B": "<p>Approve the unrestricted Bash access as written on the grounds that narrowing the rules would add configuration complexity, accepting the full attack surface for all engineers across all projects.<\/p>",
      "C": "<p>Replace unrestricted Bash with narrowly scoped tool patterns that allow only the specific commands the workflows require, and add explicit deny rules for sensitive operations.<\/p>",
      "D": "<p>Disable all permission rules for the enterprise rollout so every command across every project runs without any tool-pattern scoping or explicit deny rules for sensitive operations.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><strong>Đáp án đúng: C.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Add unrestricted access to additional tool categories to ensure developers are never blocked.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Approve the unrestricted Bash access as written because developers need full flexibility.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>C — Đúng:<\/strong> Phương án “Replace unrestricted Bash with narrowly scoped tool patterns that allow only the specific commands the workflows require, and add explicit deny rules for sensitive operations.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Disable all permission rules for the enterprise rollout and rely on the model's judgment.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-016",
    "set": 1,
    "number": 16,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are responding to a stakeholder request that adds significant scope to a deployment already in flight. Which response best aligns expectations while respecting the stakeholder's underlying need?<\/p>",
    "options": {
      "A": "<p> Hide the scope-addition request from the broader delivery team to avoid a difficult conversation, allowing the change to proceed without team awareness of its timeline implications.<\/p>",
      "B": "<p>Decline the request outright without acknowledging the stakeholder's underlying need or offering alternatives such as deferral, descoping, or timeline extension.<\/p>",
      "C": "<p>Acknowledge the request, describe the scope and timeline implications transparently, and propose options—defer it, descope something else, or extend the timeline—for the stakeholder to choose.<\/p>",
      "D": "<p>Accept the additional scope into the current release without describing the timeline or descoping implications, allowing the delivery plan to absorb unacknowledged changes until they surface as delays.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "Đáp án đúng là <b>C<\/b>.<br/><ul><li><p><b>C — Đúng:<\/b> <b>Xác nhận yêu cầu, mô tả minh bạch tác động về phạm vi và thời gian, đồng thời đề xuất các tùy chọn<\/b> (hoãn lại, giảm bớt tính năng khác, hoặc lùi thời hạn) để bên liên quan lựa chọn. Phương án này đáp ứng đúng nguyên tắc quản lý dự án: tôn trọng nhu cầu của stakeholder nhưng vẫn minh bạch về nguồn lực và thời gian.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Giấu giếm yêu cầu thay đổi phạm vi với nhóm triển khai sẽ gây bất ngờ tiêu cực, mất lòng tin và làm rối loạn kế hoạch làm việc của nhóm.<\/p><\/li><li><p><b>B:<\/b> Bác bỏ ngay lập tức mà không thảo luận sẽ làm ảnh hưởng xấu đến mối quan hệ hợp tác với stakeholder và bỏ lỡ cơ hội tìm giải pháp dung hòa.<\/p><\/li><li><p><b>D:<\/b> Chấp nhận ngay phạm vi phát sinh mà không làm rõ tác động đến tiến độ hay cắt giảm tính năng khác sẽ dẫn đến rủi ro vỡ tiến độ (delay) và quá tải nguồn lực.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-017",
    "set": 1,
    "number": 17,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>A solutions architect is analyzing stakeholder feedback collected after the first quarter of a Claude-powered procurement automation deployment. The feedback includes four statements: (1) \"Our procurement team is processing 3x more purchase orders per analyst per day.\" (2) \"We have eliminated the manual data entry role entirely and redeployed those staff to vendor relationship management.\" (3) \"The API integration costs are running 40% over the projected per-transaction budget.\" (4) \"Response latency during end-of-month batch runs is averaging 11 seconds, against our committed 5-second SLA.\" Which of the following correctly identifies the primary business value pillar each stakeholder statement represents?<\/p>",
    "options": {
      "A": "<p>Statement 1: Efficiency; Statement 2: Transformation; Statement 3: Solution Cost; Statement 4: Performance SLA<\/p>",
      "B": "<p> Statement 1: Productivity; Statement 2: Efficiency; Statement 3: Solution Cost; Statement 4: Performance SLA<\/p>",
      "C": "<p>Statement 1: Transformation; Statement 2: Productivity; Statement 3: Solution Cost; Statement 4: Efficiency<\/p>",
      "D": "<p>Statement 1: Efficiency; Statement 2: Productivity; Statement 3: Performance SLA; Statement 4: Solution Cost<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p><strong>Đáp án đúng: A.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Đúng:<\/strong> Phương án “Statement 1: Efficiency; Statement 2: Transformation; Statement 3: Solution Cost; Statement 4: Performance SLA” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Statement 1: Transformation; Statement 2: Efficiency; Statement 3: Performance SLA; Statement 4: Solution Cost” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Statement 1: Solution Cost; Statement 2: Performance SLA; Statement 3: Transformation; Statement 4: Efficiency” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Statement 1: Performance SLA; Statement 2: Solution Cost; Statement 3: Efficiency; Statement 4: Transformation” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-018",
    "set": 1,
    "number": 18,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are operating an interactive assistant whose dominant performance constraint is per-turn latency. Quality on routine turns is already acceptable. Which configuration adjustment most directly improves latency without disproportionately damaging quality?<\/p>",
    "options": {
      "A": "<p>Disable prompt caching entirely to ensure fresh context processing on every request, preventing stale prefix content from affecting latency-sensitive interactions.<\/p>",
      "B": "<p>Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system-prompt content.<\/p>",
      "C": "<p>Increase retrieval depth to the corpus maximum to improve recall regardless of latency.<\/p>",
      "D": "<p>Switch every turn to the heaviest available model to maximize output quality, accepting that the increased model latency will worsen the per-turn SLO rather than improve it.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "Đáp án đúng  là <b>B<\/b>.<br/><ul><li><p><b>B — Đúng:<\/b> <b>Giảm độ sâu truy xuất (<i>retrieval depth<\/i>) xuống tập các đoạn văn top-k có khả năng bao phủ câu trả lời tốt nhất, đồng thời lưu bộ nhớ đệm (<i>cache<\/i>) cho các nội dung system prompt cố định<\/b>. Đây là giải pháp cải thiện độ trễ (<i>latency<\/i>) trực tiếp và hiệu quả nhất vì giảm số lượng token cần xử lý ở bước truy xuất mà không làm ảnh hưởng đáng kể đến chất lượng câu trả lời.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Tắt tính năng lưu bộ nhớ đệm prompt (<i>prompt caching<\/i>) sẽ buộc hệ thống phải tính toán lại toàn bộ prompt ở mỗi lượt, làm tăng đáng kể độ trễ và chi phí.<\/p><\/li><li><p><b>C:<\/b> Tăng độ sâu truy xuất sẽ đưa thêm nhiều dữ liệu vào ngữ cảnh, làm tăng số lượng token và khiến độ trễ tăng cao hơn.<\/p><\/li><li><p><b>D:<\/b> Chuyển sang mô hình lớn nhất (<i>heaviest model<\/i>) ở mỗi lượt sẽ làm tăng mạnh thời gian phản hồi, đi ngược lại mục tiêu tối ưu độ trễ.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-019",
    "set": 1,
    "number": 19,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are designing a feedback session for a deployment in flight. Which structure best supports productive stakeholder feedback?<\/p>",
    "options": {
      "A": "<p>Hold an open-ended meeting with no pre-distributed agenda or artifacts, and rely on participants' memory to carry decisions and follow-up owners forward.<\/p>",
      "B": "<p>Define a focused agenda, share the artifacts in advance, capture decisions and follow-ups in writing, and confirm action owners and dates.<\/p>",
      "C": "<p>Distribute artifacts at the session start rather than in advance, so stakeholders review materials in real time without preparation before the discussion begins.<\/p>",
      "D": "<p>End the session without recording decisions, follow-up items, action owners, or dates, relying on participant memory to carry the session's outcomes forward.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<br/><ul><li><p><b>B — Đúng:<\/b> Xác định chương trình nghị sự rõ ràng (focused agenda), chia sẻ trước các tài liệu/kết quả (share artifacts in advance), ghi nhận các quyết định và kế hoạch theo dõi bằng văn bản, đồng thời xác nhận người chịu trách nhiệm và thời hạn hoàn thành. Đây là cấu trúc chuẩn chỉnh nhất giúp buổi họp phản hồi đạt hiệu quả cao và có tính hành động thực tế.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Tổ chức một cuộc họp mở không có chương trình nghị sự và không ghi chép lại sẽ làm cuộc họp lan man, thiếu tập trung và không đi đến kết quả cụ thể.<\/p><\/li><li><p><b>C:<\/b> Việc gửi tài liệu ngay tại thời điểm bắt đầu buổi họp khiến các bên liên quan không có thời gian đọc và chuẩn bị ý kiến đóng góp chất lượng.<\/p><\/li><li><p><b>D:<\/b> Kết thúc buổi họp mà không ghi nhận quyết định hay phân công người theo dõi sẽ làm mất đi giá trị của buổi thu thập phản hồi, dẫn đến việc không có hành động cải thiện nào được thực hiện sau đó.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-020",
    "set": 1,
    "number": 20,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>A Claude architect is implementing safety controls for a customer-facing advice assistant that must never provide regulated investment recommendations. Which two guardrail implementations most directly enforce this constraint? (Select two.)<\/p>",
    "options": {
      "A": "<p> Increase response temperature to introduce variability that reduces the likelihood of specific recommendations.<\/p>",
      "B": "<p> Add an output classifier that detects and blocks responses containing regulated investment recommendation language.<\/p>",
      "C": "<p>Limit session length to reduce the volume of queries processed per user per day.<\/p>",
      "D": "<p>Log all user queries to a SIEM for post-hoc compliance review.<\/p>",
      "E": "<p>Define explicit out-of-scope categories in the system prompt with fixed refusal phrasing for investment advice requests.<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Đáp án đúng  là <b>B<\/b> và <b>E<\/b>.<br/><ul><li><p><b>B — Đúng:<\/b> <b>Thêm một output classifier<\/b> giúp phát hiện và chặn các phản hồi chứa ngôn từ tư vấn đầu tư trước khi thông tin được gửi tới người dùng. Đây là biện pháp kiểm soát trực tiếp ở đầu ra (output guardrail).<\/p><\/li><li><p><b>E — Đúng:<\/b> <b>Định nghĩa rõ ràng các danh mục ngoài phạm vi (out-of-scope)<\/b> trong system prompt đi kèm câu từ chối cố định đối với các yêu cầu tư vấn đầu tư. Đây là biện pháp kiểm soát trực tiếp ở đầu vào (input/prompt guardrail) giúp định hướng hành vi của mô hình.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Tăng <code>temperature<\/code> làm tăng tính ngẫu nhiên của câu trả lời, điều này không những không ngăn chặn mà còn làm tăng rủi ro mô hình sinh ra thông tin tư vấn không kiểm soát.<\/p><\/li><li><p><b>C:<\/b> Giới hạn độ dài phiên làm việc không trực tiếp ngăn chặn mô hình đưa ra lời khuyên đầu tư ngay trong các lượt hội thoại đầu tiên.<\/p><\/li><li><p><b>D:<\/b> Lưu nhật ký (log) truy vấn chỉ phục vụ mục đích kiểm toán/đánh giá sau sự cố, không phải là biện pháp bảo vệ trực tiếp ngăn chặn hành vi vi phạm tại thời điểm thực thi.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-021",
    "set": 1,
    "number": 21,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>You are building an ethics-review checklist for deployments supported by artificial intelligence. Which two checks belong on the list? (Select two.) Each correct answer presents a complete solution.<\/p>",
    "options": {
      "A": "<p>Confirm that vendor licensing terms permit the planned production use of the model.<\/p>",
      "B": "<p>Verify that outputs do not rely on generalizations about people that the underlying data does not support.<\/p>",
      "C": "<p>Confirm that high-impact decisions retain human accountability rather than being attributed to the model.<\/p>",
      "D": "<p>Restrict ethics review to outputs that exceed a defined model-confidence threshold.<\/p>",
      "E": "<p>Confirm that latency and throughput targets are met across supported user populations.<\/p>"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "<h3><b>Đáp án đúng:<\/b> <b>B<\/b> và <b>C<\/b><\/h3><h3><b>Giải thích chi tiết:<\/b><\/h3><ul><li><p><b>B — Đúng:<\/b> Đây là tiêu chuẩn kiểm tra cốt lõi về <b>tính công bằng, thiên vị (<i>bias<\/i>) và phòng tránh định kiến<\/b>. Đảm bảo AI không tự đưa ra các giả định hay khái quát hóa sai lệch về con người (như giới tính, chủng tộc, độ tuổi...) khi dữ liệu không hỗ trợ là yếu tố cơ bản trong đánh giá đạo đức AI.<\/p><\/li><li><p><b>C — Đúng:<\/b> Nguyên tắc <b>\"Human-in-the-loop\"<\/b> (Con người tham gia vào quy trình quyết định) và giữ lại trách nhiệm giải trình của con người (<i>human accountability<\/i>) đối với các quyết định quan trọng (như tài chính, y tế, pháp lý, nhân sự) là một trong những trụ cột đạo đức quan trọng nhất khi triển khai AI.<\/p><\/li><\/ul><p><b>Lý do các phương án còn lại không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Kiểm tra giấy phép nhà cung cấp thuộc phạm vi <b>Pháp lý và Tuân thủ<\/b> (<i>Legal &amp; Compliance<\/i>), không phải là đánh giá đạo đức AI.<\/p><\/li><li><p><b>D:<\/b> Các vấn đề đạo đức (như thiên vị hoặc đưa ra thông tin độc hại) vẫn có thể xảy ra ngay cả khi mô hình có độ tự tin cao. Do đó, việc giới hạn đánh giá theo ngưỡng tin cậy sẽ bỏ sót nhiều rủi ro nghiêm trọng.<\/p><\/li><li><p><b>E:<\/b> Đảm bảo độ trễ và sản lượng là tiêu chuẩn về <b>Hiệu năng kỹ thuật<\/b> (<i>Engineering Performance<\/i>), không phải tiêu chuẩn đạo đức.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-022",
    "set": 1,
    "number": 22,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>A team manager wants all engineers working on the same repository to share identical MCP server definitions without manual synchronization. Which configuration approach satisfies this requirement?<\/p>",
    "options": {
      "A": "<p>Managed configuration pushed to all endpoints by the administrator.<\/p>",
      "B": "<p>Environment variables set at the operating-system level on each workstation.<\/p>",
      "C": "<p>Project-scope .claude/settings.json and .mcp.json files committed to the repository.<\/p>",
      "D": "<p>Each engineer maintains a personal ~/.claude/settings.json with the shared definitions.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><strong>Đáp án đúng: C.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Managed configuration pushed to all endpoints by the administrator.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Environment variables set at the operating-system level on each workstation.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Đúng:<\/strong> Phương án “Project-scope .claude/settings.json and .mcp.json files committed to the repository.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Each engineer maintains a personal ~/.claude/settings.json with the shared definitions.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-023",
    "set": 1,
    "number": 23,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>A pilot AI assistant for procurement specialists shows 89 percent first-response acceptance, but follow-up surveys reveal that specialists frequently override the assistant’s vendor recommendations after considering criteria the assistant did not evaluate. The pilot owner wants to ship the assistant unchanged because of the strong acceptance rate.<\/p><p>Which two Discernment-competency observations should you raise BEFORE approving the launch? (Select two.)<\/p>",
    "options": {
      "A": "<p>The acceptance rate alone proves readiness for general production use.<\/p>",
      "B": "<p>The survey response rate may not be statistically representative of all specialists.<\/p>",
      "C": "<p>The unconsidered criteria represent a scope gap in the assistant's input space.<\/p>",
      "D": "<p>Acceptance does not establish whether recommendations remain correct after specialist review.<\/p>",
      "E": "<p>The pilot duration was probably too short to demonstrate reliability across the full year.<\/p>"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "<b>C<\/b> và <b>D<\/b>.<br/><ul><li><p><b>C — Đúng:<\/b> Việc các chuyên gia thường xuyên ghi đè (override) khuyến nghị cho thấy trợ lý AI đang thiếu sót các tiêu chí đánh giá quan trọng trong không gian đầu vào (input space), dẫn đến khoảng trống về phạm vi (scope gap) cần phải được giải quyết trước khi triển khai đại trà.<\/p><\/li><li><p><b>D — Đúng:<\/b> Tỷ lệ chấp thuận ban đầu cao (89%) không đồng nghĩa với việc các khuyến nghị thực sự chính xác hoặc tối ưu sau khi đã qua bước kiểm tra và cân nhắc kỹ lưỡng từ chuyên gia nhân sự/mua sắm.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-024",
    "set": 1,
    "number": 24,
    "type": "matching",
    "difficulty": "Medium",
    "question": "<p>You are auditing a procurement-assistant agent whose defined responsibility is to draft purchase requests for review. For each tool currently configured on the agent, select yes if the tool should remain after a least-privilege audit. Otherwise, select no if it should be removed.<\/p>",
    "matching": [
      {
        "letter": "A",
        "text": "A read-only catalog lookup tool that returns vendor and SKU information",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "B",
        "text": "An inbox-send tool that emails purchase requests to vendors directly",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "No"
      },
      {
        "letter": "C",
        "text": "A draft-write tool that creates purchase-request drafts in the review queue",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "D",
        "text": "A production-database admin tool unrelated to procurement",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "No"
      },
      {
        "letter": "E",
        "text": "A read-only policy-document tool that returns the relevant procurement policies",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      }
    ],
    "answer": {
      "A": "Yes",
      "B": "No",
      "C": "Yes",
      "D": "No",
      "E": "Yes"
    },
    "explanation": "<p><strong>Đánh giá từng phát biểu:<\/strong> mỗi dòng được chấm độc lập theo mức độ chính xác của nhận định.<\/p><ul><li><strong>A — Yes:<\/strong> A read-only catalog lookup tool that returns vendor and SKU information — Yes, vì nhận định này mô tả đúng đặc tính hoặc thông lệ phù hợp trong bối cảnh được hỏi.<\/li><li><strong>B — No:<\/strong> An inbox-send tool that emails purchase requests to vendors directly — No, vì nhận định này khái quát sai, đánh đồng các khái niệm hoặc đề xuất một cách làm không đáng tin cậy trong thực tế.<\/li><li><strong>C — Yes:<\/strong> A draft-write tool that creates purchase-request drafts in the review queue — Yes, vì nhận định này mô tả đúng đặc tính hoặc thông lệ phù hợp trong bối cảnh được hỏi.<\/li><li><strong>D — No:<\/strong> A production-database admin tool unrelated to procurement — No, vì nhận định này khái quát sai, đánh đồng các khái niệm hoặc đề xuất một cách làm không đáng tin cậy trong thực tế.<\/li><li><strong>E — Yes:<\/strong> A read-only policy-document tool that returns the relevant procurement policies — Yes, vì nhận định này mô tả đúng đặc tính hoặc thông lệ phù hợp trong bối cảnh được hỏi.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-025",
    "set": 1,
    "number": 25,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are supporting an engineer whose Claude Code session reports a permission denial when the engineer expected the action to be allowed. Which resolution step is most appropriate?<\/p>",
    "options": {
      "A": "<p>Tell the engineer to retry the denied action verbatim repeatedly until the denial stops appearing, without inspecting the active permission rules to determine whether the denial is intentional.<\/p>",
      "B": "<p>Disable the permission system entirely across all scopes to remove the denial, eliminating all tool-pattern and deny-rule controls rather than identifying and amending the specific rule.<\/p>",
      "C": "<p>Inspect the active permission rules across all scopes—managed, command-line, local, project, and user—to identify which rule is denying the action and confirm whether it should be amended or remain denied.<\/p>",
      "D": "<p>Grant the engineer unrestricted Bash access to bypass the specific rule causing the denial, removing all tool-pattern constraints rather than amending only the rule in question.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><strong>Đáp án đúng: C.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Tell the engineer to retry the operation repeatedly until it succeeds.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Disable the permission system entirely to eliminate denials.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>C — Đúng:<\/strong> Phương án “Inspect the active permission rules across all scopes—managed, command-line, local, project, and user—to identify which rule is denying the action and confirm whether it should be amended or remain denied.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Grant the engineer unrestricted Bash access to prevent future denials.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-026",
    "set": 1,
    "number": 26,
    "type": "matching",
    "difficulty": "Medium",
    "question": "<p>You are a solution architect evaluating candidate use cases for a Claude-based program. For each scenario, select Yes if Claude is appropriate as the primary solution at the architectural level. Otherwise, select No.<\/p>",
    "matching": [
      {
        "letter": "A",
        "text": "Drafting first-pass investigative reports from semi-structured incident logs for analyst review.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "B",
        "text": "Computing real-time fraud scores at sub-50-millisecond latency on a streaming pipeline.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "No"
      },
      {
        "letter": "C",
        "text": "Long-context contract review with structured clause extraction and deviation flagging.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "D",
        "text": "Replacing a vector index for semantic retrieval over a multi-million-document corpus.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "No"
      },
      {
        "letter": "E",
        "text": "Routing inbound support tickets into 30 categories with reasoning for the chosen routing.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      }
    ],
    "answer": {
      "A": "Yes",
      "B": "No",
      "C": "Yes",
      "D": "No",
      "E": "Yes"
    },
    "explanation": "<p><strong>Đánh giá từng phát biểu:<\/strong> mỗi dòng được chấm độc lập theo mức độ chính xác của nhận định.<\/p><ul><li><strong>A — Yes:<\/strong> Drafting first-pass investigative reports from semi-structured incident logs for analyst review. — Yes, vì nhận định này mô tả đúng đặc tính hoặc thông lệ phù hợp trong bối cảnh được hỏi.<\/li><li><strong>B — No:<\/strong> Computing real-time fraud scores at sub-50-millisecond latency on a streaming pipeline. — No, vì nhận định này khái quát sai, đánh đồng các khái niệm hoặc đề xuất một cách làm không đáng tin cậy trong thực tế.<\/li><li><strong>C — Yes:<\/strong> Long-context contract review with structured clause extraction and deviation flagging. — Yes, vì nhận định này mô tả đúng đặc tính hoặc thông lệ phù hợp trong bối cảnh được hỏi.<\/li><li><strong>D — No:<\/strong> Replacing a vector index for semantic retrieval over a multi-million-document corpus. — No, vì nhận định này khái quát sai, đánh đồng các khái niệm hoặc đề xuất một cách làm không đáng tin cậy trong thực tế.<\/li><li><strong>E — Yes:<\/strong> Routing inbound support tickets into 30 categories with reasoning for the chosen routing. — Yes, vì nhận định này mô tả đúng đặc tính hoặc thông lệ phù hợp trong bối cảnh được hỏi.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-027",
    "set": 1,
    "number": 27,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>You are evaluating a Claude-based deployment for adherence to a specific regulation. Which two steps must be completed BEFORE mapping deployment data flows to specific regulatory clauses? (Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Compare the in-place controls against the regulatory requirements to identify any compliance gaps.<\/p>",
      "B": "<p>Identify the applicability of the regulation based on data types, jurisdiction, and audience.<\/p>",
      "C": "<p>Schedule the remediation work with the engineering team based on the prioritized gap findings.<\/p>",
      "D": "<p>Document the identified gaps along with recommended remediations and residual risk for signoff.<\/p>",
      "E": "<p>Inventory the vendor-provided compliance tooling and confirm which compliance affordances are in place.<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Đáp án đúng: <b>B<\/b> và <b>E<\/b>.<br/><ul><li><p><b>B — Đúng:<\/b> Trước khi ánh xạ luồng dữ liệu vào các điều khoản quy định cụ thể, bước đầu tiên phải là xác định tính áp dụng của quy định đó dựa trên loại dữ liệu, phạm vi thẩm quyền pháp lý (jurisdiction) và đối tượng người dùng.<\/p><\/li><li><p><b>E — Đúng:<\/b> Cần phải kiểm kê danh mục các công cụ tuân thủ do nhà cung cấp hỗ trợ và xác nhận các tiện ích tuân thủ sẵn có (compliance affordances) để hiểu rõ nền tảng cung cấp những gì trước khi ánh xạ chi tiết luồng dữ liệu.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> So sánh các biện pháp kiểm soát hiện tại với yêu cầu pháp lý để tìm ra khoảng trống (gap analysis) chỉ có thể thực hiện <b>sau<\/b> khi đã ánh xạ luồng dữ liệu vào các điều khoản quy định.<\/p><\/li><li><p><b>C:<\/b> Lập kế hoạch khắc phục cùng đội ngũ kỹ thuật là bước diễn ra ở cuối quy trình đánh giá tuân thủ (sau khi đã phát hiện và ưu tiên các khoảng trống).<\/p><\/li><li><p><b>D:<\/b> Tài liệu hóa các khoảng trống và kiến nghị giải pháp xử lý là bước thực hiện sau khi việc đánh giá khoảng trống hoàn tất.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-028",
    "set": 1,
    "number": 28,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>You are listing characteristics of robust guardrail design for an enterprise deployment. Which two characteristics belong on the list? (Select two.) Each correct answer presents a complete solution.<\/p>",
    "options": {
      "A": "<p>Centralized log retention for guardrail violations with quarterly review by the security team.<\/p>",
      "B": "<p>Per-role tool allow-lists enforced at the orchestration layer before any tool call executes.<\/p>",
      "C": "<p> User feedback channels that route reported guardrail failures into the product backlog for triage.<\/p>",
      "D": "<p>Periodic refresh of the system prompt wording to keep refusal language current and clear.<\/p>",
      "E": "<p>Adversarial-input coverage in the evaluation set with regression tracking on guardrail performance.<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "<h3><b>Đáp án đúng:<\/b> <b>B<\/b> và <b>E<\/b><\/h3><h3><b>Giải thích chi tiết:<\/b><\/h3><ul><li><p><b>B — Đúng:<\/b> Mức độ bảo vệ chủ động và nghiêm ngặt nhất đối với việc gọi công cụ (tool calling) là thực thi danh sách cho phép (allow-list) dựa trên vai trò người dùng (RBAC) <b>ngay tại tầng điều phối trước khi lệnh gọi được phát đi<\/b>. Điều này ngăn chặn triệt để các hành vi rò rỉ dữ liệu hoặc thực thi lệnh trái phép.<\/p><\/li><li><p><b>E — Đúng:<\/b> Một rào chắn an toàn vững chắc phải luôn được kiểm thử và đánh giá liên tục đối với các đòn tấn công thực tế. Việc đưa nội dung đối kháng (<i>adversarial inputs<\/i>) vào bộ suite kiểm thử tự động giúp theo dõi chính xác xem rào chắn có bị suy giảm hiệu năng (<i>regression<\/i>) theo thời gian hay không.<\/p><\/li><\/ul><p><b>Lý do các phương án còn lại không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Việc lưu nhật ký và xem xét hàng quý chỉ mang tính chất ghi nhận/phản ứng sau sự cố (passive/reactive monitoring), không phải là đặc tính chủ động bảo vệ của bản thân rào chắn an toàn tại thời điểm thực thi.<\/p><\/li><li><p><b>C:<\/b> Phản hồi của người dùng về chất lượng là cơ chế thu thập ý kiến chung, không phải là một đặc tính kỹ thuật cốt lõi trong thiết kế guardrail.<\/p><\/li><li><p><b>D:<\/b> Việc thay đổi văn phong prompt chỉ mang tính chất định hình phong cách phản hồi, không đóng góp vào tính vững chắc (<i>robustness<\/i>) hay an toàn của hệ thống.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-029",
    "set": 1,
    "number": 29,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are presenting an architectural decision to a mixed audience that includes an executive sponsor and the engineering leads who will implement the decision. Which presentation strategy best serves both audiences?<\/p>",
    "options": {
      "A": "<p>Open with a deep dive into low-level implementation details targeted at engineering leads, and stop there without addressing the business outcomes or trade-offs the executive sponsor needs.<\/p>",
      "B": "<p>Lead with the decision, the business outcomes it serves, and the trade-offs accepted; follow with the technical rationale, alternatives, and implementation implications for the engineering audience.<\/p>",
      "C": "<p>Skip the rationale, alternatives, and trade-off discussion entirely and simply announce the chosen decision, leaving both audiences without the context needed to implement or validate it.<\/p>",
      "D": "<p>Present a single undifferentiated narrative that addresses technical and business concerns with equal weight throughout, treating both audiences as requiring the same depth on every section.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "Đáp án đúng: <b>B<\/b>.<br/><ul><li><p><b>B — Đúng:<\/b> Khi trình bày trước đối tượng khán giả kết hợp (<i>mixed audience<\/i>), chiến lược hiệu quả nhất là <b>bắt đầu bằng quyết định, kết quả kinh doanh đạt được và các đánh đổi đã chấp nhận<\/b> (dành cho cấp lãnh đạo), sau đó <b>nói sâu về cơ sở kỹ thuật, các giải pháp thay thế và tác động triển khai<\/b> (dành cho nhóm kỹ thuật).<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Đi thẳng vào chi tiết kỹ thuật chuyên sâu ngay từ đầu sẽ làm cấp quản lý/lãnh đạo mất tập trung và khó nắm bắt bức tranh tổng thể.<\/p><\/li><li><p><b>C:<\/b> Bỏ qua toàn bộ lý do/cơ sở lập luận sẽ khiến cả hai nhóm đối tượng không hiểu được nguyên nhân đằng sau quyết định kiến trúc.<\/p><\/li><li><p><b>D:<\/b> Trình bày một nội dung hỗn hợp không phân loại sẽ làm bài nói bị rối, không đáp ứng đúng mức độ quan tâm riêng biệt của từng nhóm người nghe.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-030",
    "set": 1,
    "number": 30,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are diagnosing a Claude Code session whose subagent uses 50,000 tokens of context before the engineer types a single message. Which root cause is most likely?<\/p>",
    "options": {
      "A": "<p> The developer's keyboard layout or input-method configuration is the cause of the elevated context consumption, introducing extra tokens before the engineer types any message.<\/p>",
      "B": "<p>Many MCP servers are configured, each contributing tool definitions to the context budget; Tool Search is not enabled, so all definitions load upfront.<\/p>",
      "C": "<p> The model has internal personal preferences or default behaviors that silently consume large portions of context budget before any user message is processed, independent of tool configuration.<\/p>",
      "D": "<p>The font rendering or display-scaling settings of the IDE are converting visual output into additional context tokens, causing the high pre-session context consumption.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p><em>Nguồn đề thi không cung cấp phần giải thích cho câu hỏi này.<\/em><\/p>"
  },
  {
    "id": "CCAR-P-031",
    "set": 1,
    "number": 31,
    "type": "matching",
    "difficulty": "Medium",
    "question": "<p>You are evaluating model-selection claims used by a peer team. For each statement, select yes if the statement is generally true. Otherwise, select no.<\/p>",
    "matching": [
      {
        "letter": "A",
        "text": "Heavier-reasoning models typically consume more of the rate limit and run more slowly than lighter models on the same input.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "B",
        "text": "A representative-sample evaluation on the target workload is the right basis for confirming a model selection.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "C",
        "text": "The most capable model is always the right choice regardless of the workload profile.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "No"
      },
      {
        "letter": "D",
        "text": "Tiered routing can serve routine traffic with a lighter model while reserving a heavier model for traffic that needs its capability.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "E",
        "text": "Selecting a model based on which version was most recently announced is the right basis for production decisions.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "No"
      }
    ],
    "answer": {
      "A": "Yes",
      "B": "Yes",
      "C": "No",
      "D": "Yes",
      "E": "No"
    },
    "explanation": "Đáp án Yes / No cho từng phát biểu: <br/><ul><li><p><b>A — Yes:<\/b> Các mô hình suy luận sâu hơn (như Claude Opus) tốn nhiều chi phí rate limit hơn và chạy chậm hơn so with các mô hình nhẹ hơn (như Haiku) trên cùng một lượng input.<\/p><\/li><li><p><b>B — Yes:<\/b> Đánh giá mô hình dựa trên một mẫu đại diện (representative-sample evaluation) của công việc thực tế là cơ sở đúng đắn duy nhất để xác nhận việc lựa chọn mô hình.<\/p><\/li><li><p><b>C — No:<\/b> Mô hình mạnh nhất không phải lúc nào cũng là lựa chọn đúng cho mọi công việc, vì còn cần tối ưu chi phí, độ trễ (latency) và giới hạn tài nguyên.<\/p><\/li><li><p><b>D — Yes:<\/b> Định tuyến phân tầng (Tiered routing) cho phép xử lý các tác vụ thông thường bằng mô hình nhẹ hơn và chỉ dùng mô hình mạnh cho các yêu cầu phức tạp.<\/p><\/li><li><p><b>E — No:<\/b> Lựa chọn mô hình chỉ dựa trên phiên bản mới được phát hành gần nhất không phải là cơ sở đúng đắn cho các quyết định triển khai sản phẩm thực tế (production).<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-032",
    "set": 1,
    "number": 32,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>A revenue projection assistant has missed its monthly cost target by 38 percent. Profiling shows three contributors: a 6,000-token policy preamble repeated on every call (45 percent of cost), retrieval of historical sales chunks averaging 3,000 tokens per call (30 percent), and inference on a flagship-tier model (25 percent). Stakeholders require that projection accuracy remain unchanged. Which two optimizations should you sequence first to reduce cost without affecting accuracy? (Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Reduce the number of historical sales chunks retrieved across each query run.<\/p>",
      "B": "<p>Truncate the policy preamble to remove non-essential clauses from the prompt.<\/p>",
      "C": "<p>Enable prompt caching on the static policy preamble across the recurring calls.<\/p>",
      "D": "<p>Switch the workload to a smaller, faster Claude model tier across all queries.<\/p>",
      "E": "<p>Cache common retrieved sales chunks accessed across many of the daily queries.<\/p>"
    },
    "answer": [
      "C",
      "E"
    ],
    "explanation": "<ul><li><p><b>C — Đúng:<\/b> Kích hoạt tính năng <b>prompt caching<\/b> cho phần văn bản chính sách tĩnh (policy preamble) chiếm tới 6,000 token giúp giảm đáng kể chi phí cho các lần gọi định kỳ mà không làm thay đổi hay ảnh hưởng đến độ chính xác của mô hình.<\/p><\/li><li><p><b>E — Đúng:<\/b> Việc lưu trữ đệm (cache) các đoạn dữ liệu lịch sử bán hàng thường xuyên được truy cập chung qua nhiều lượt truy vấn hàng ngày giúp tiết kiệm chi phí từ phần trích xuất (30%) mà vẫn giữ nguyên độ chính xác theo yêu cầu của các bên liên quan.<\/p><\/li><\/ul><p><b>Lý do các phương án còn lại không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Giảm số lượng các đoạn dữ liệu lịch sử truy xuất trên mỗi lượt truy vấn có thể làm mất thông tin và ảnh hưởng trực tiếp đến độ chính xác của dự báo doanh thu.<\/p><\/li><li><p><b>B:<\/b> Cắt xén phần mở đầu chính sách (preamble) bằng cách xóa các điều khoản phi cốt lõi có nguy cơ làm thay đổi hành vi hoặc độ chính xác của mô hình.<\/p><\/li><li><p><b>D:<\/b> Chuyển đổi toàn bộ khối lượng công việc sang một dòng mô hình Claude nhỏ và nhanh hơn trên tất cả các truy vấn vi phạm yêu cầu giữ nguyên chất lượng dự báo của mô hình cao cấp (flagship-tier).<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-033",
    "set": 1,
    "number": 33,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>The engineering lead at Trenova Systems, Inc. is evaluating two proposals for improving developer workflows using Claude-assisted tooling. <\/p><p>Proposal A adds Claude Code to the IDE for inline code generation and review. <\/p><p>Proposal B routes all code-generation requests through a shared Slack bot without IDE integration. <\/p><p>Which two observations most accurately evaluate these proposals against workflow-improvement objectives? (Select two.)<\/p>",
    "options": {
      "A": "<p>Proposal B is superior because centralizing requests in Slack creates an auditable log of all code-generation activity.<\/p>",
      "B": "<p>Proposal B introduces workflow friction by requiring developers to leave the IDE, undermining the productivity objective.<\/p>",
      "C": "<p>Proposal A reduces context switching by providing AI assistance at the point of development without requiring a separate tool.<\/p>",
      "D": "<p>Proposal B improves workflow velocity because Slack notifications create an asynchronous review queue.<\/p>",
      "E": "<p>Both proposals are equivalent because the model capabilities are identical regardless of the integration point.<\/p>"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Đáp án đúng: <b>B<\/b> và <b>C<\/b>.<br/><ul><li><p><b>B — Đúng:<\/b> Phương án B buộc lập trình viên phải chuyển đổi qua lại giữa môi trường phát triển (IDE) và Slack, tạo ra rào cản luồng công việc (workflow friction) và giảm hiệu suất chung.<\/p><\/li><li><p><b>C — Đúng:<\/b> Phương án A tích hợp trực tiếp vào IDE giúp giảm thiểu việc chuyển đổi ngữ cảnh (context switching) bằng cách hỗ trợ AI ngay tại điểm viết mã mà không cần công cụ trung gian.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Dù việc lưu vết trên Slack có tạo ra nhật ký kiểm toán, điều này không làm cho Phương án B vượt trội hơn về mặt cải thiện luồng làm việc lập trình.<\/p><\/li><li><p><b>D:<\/b> Xử lý bất đồng bộ qua thông báo Slack chỉ gây chậm trễ hơn thay vì nâng cao tốc độ luồng công việc (workflow velocity).<\/p><\/li><li><p><b>E:<\/b> Mặc dù mô hình AI nền tảng có thể giống nhau, điểm tích hợp (integration point) quyết định lớn đến trải nghiệm người dùng, tốc độ và sự gián đoạn luồng công việc.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-034",
    "set": 1,
    "number": 34,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are supporting a team whose Claude Code sessions consistently load 60 or more MCP tools from many servers, exhausting context budget before the session begins. Which adjustment most directly addresses this issue without removing capability?<\/p>",
    "options": {
      "A": "<p>Enable Tool Search so tool definitions are deferred and discovered on demand rather than loaded into context upfront.<\/p>",
      "B": "<p>Disable every MCP server in the configuration to free up context budget, accepting that the team loses all tool access and cannot perform any MCP-dependent task in the session.<\/p>",
      "C": "<p>Increase the prompt's verbosity with additional instructions and context, which consumes more of the context budget rather than reducing the tool-definition overhead causing the issue.<\/p>",
      "D": "<p>Add additional MCP servers to give the team more capability, which increases rather than reduces the number of tool definitions loaded into the session's context budget.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p><strong>Đáp án đúng: A.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Đúng:<\/strong> Phương án này là bước chuẩn bị cần hoàn tất trước khi thực thi: “Enable Tool Search so tool definitions are deferred and discovered on demand rather than loaded into context upfront.”. Nó thiết lập đầu vào, tiêu chí hoặc phạm vi cần thiết để bước sau có thể được đánh giá đúng.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Disable every MCP server to eliminate all tool definitions from context.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Increase the prompt's verbosity to compensate for the lost context.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Add additional MCP servers to spread tool definitions across more endpoints.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-035",
    "set": 1,
    "number": 35,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>You are compiling guardrail tactics for a customer-facing assistant. Which two tactics belong on the guardrail list? Each correct answer presents a complete solution.<\/p>",
    "options": {
      "A": "<p>Embed approved override phrases that users can invoke to bypass guardrails.<\/p>",
      "B": "<p>Lower sampling temperature globally to eliminate all variability in responses.<\/p>",
      "C": "<p>Validate the model output against a structured schema before downstream actions are taken.<\/p>",
      "D": "<p>Layer prompt-level guardrails with runtime content checks rather than relying on either alone.<\/p>",
      "E": "<p>Rely on a single hardened system prompt as the only guardrail mechanism.<\/p>"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "<p><strong>Đáp án đúng: C, D.<\/strong> Các phương án này bổ sung cho nhau và cùng đáp ứng đầy đủ những yêu cầu được nêu trong tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Embed approved override phrases that users can invoke to bypass guardrails.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Lower sampling temperature globally to eliminate all variability in responses.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>C — Đúng:<\/strong> Phương án “Validate the model output against a structured schema before downstream actions are taken.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>D — Đúng:<\/strong> Phương án “Layer prompt-level guardrails with runtime content checks rather than relying on either alone.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>E — Sai:<\/strong> Không chọn “Rely on a single hardened system prompt as the only guardrail mechanism.” vì chỉ dựa vào một lớp kiểm soát hoặc phán đoán của mô hình không tạo ra cơ chế thực thi và phòng vệ đáng tin cậy.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-036",
    "set": 1,
    "number": 36,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>A senior architect is managing stakeholder expectations for a Claude-based reporting assistant midway through development. Stakeholders have escalating concerns about response latency. Which two actions most directly address stakeholder expectation alignment in this situation? (Select two.)<\/p>",
    "options": {
      "A": "<p>Present measured p50 and p95 latency baselines against the agreed SLA thresholds so stakeholders have accurate data.<\/p>",
      "B": "<p>Pause all development until latency concerns are fully resolved.<\/p>",
      "C": "<p>Communicate that latency concerns are a known LLM limitation that cannot be addressed.<\/p>",
      "D": "<p>Replace the current Claude model with a third-party model to signal responsiveness.<\/p>",
      "E": "<p>Revise the SLA definition collaboratively with stakeholders if current targets are not achievable given production constraints.<\/p>"
    },
    "answer": [
      "A",
      "E"
    ],
    "explanation": "<p><strong>Đáp án đúng: A, E.<\/strong> Các phương án này bổ sung cho nhau và cùng đáp ứng đầy đủ những yêu cầu được nêu trong tình huống.<\/p><ul><li><strong>A — Đúng:<\/strong> Phương án “Present measured p50 and p95 latency baselines against the agreed SLA thresholds so stakeholders have accurate data.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Pause all development until latency concerns are fully resolved.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Communicate that latency concerns are a known LLM limitation that cannot be addressed.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Replace the current Claude model with a third-party model to signal responsiveness.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>E — Đúng:<\/strong> Phương án “Revise the SLA definition collaboratively with stakeholders if current targets are not achievable given production constraints.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-037",
    "set": 1,
    "number": 37,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>A business sponsor has requested an AI solution to 'improve customer experience.' The sponsor cannot articulate which customer journey is failing, which metric reflects the failure, or which decisions the AI should support. The sponsor is asking you to begin design work next week. Which delegation-competency action should you take first?<\/p>",
    "options": {
      "A": "<p>Recommend that the sponsor revise the request and resubmit it later for evaluation.<\/p>",
      "B": "<p>Begin prototyping a generic assistant against the broad request before the next deadline.<\/p>",
      "C": "<p>Propose a fixed scope that you commit to by default based on your own assumptions.<\/p>",
      "D": "<p>Facilitate a structured discovery to define the failing decision and the target metric.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "Đáp án đúng là <b>D<\/b>.<br/><ul><li><p><b>D — Đúng:<\/b> Bước đầu tiên tối quan trọng khi yêu cầu của bên tài trợ (<i>sponsor<\/i>) còn quá mơ hồ là <b>chủ trì một buổi làm việc khai phá có cấu trúc (structured discovery) để xác định rõ quyết định đang gặp rủi ro và chỉ số mục tiêu (target metric)<\/b>. Điều này giúp làm rõ phạm vi bài toán kinh doanh trước khi đầu tư bất kỳ nguồn lực kỹ thuật nào.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Yêu cầu người tài trợ tự sửa đổi bằng văn bản trước khi gặp mặt sẽ tạo ra rào cản giao tiếp và không hỗ trợ họ giải quyết bản chất vấn đề khi chính họ chưa rõ mục tiêu.<\/p><\/li><li><p><b>B:<\/b> Bắt đầu xây dựng bản mẫu (<i>prototype<\/i>) ngay lập tức khi chưa có mục tiêu hay chỉ số đo lường rõ ràng sẽ gây lãng phí công sức và dễ dẫn đến sản phẩm không đúng kỳ vọng.<\/p><\/li><li><p><b>C:<\/b> Tự đưa ra phạm vi cố định dựa trên giả định cá nhân là cực kỳ rủi ro, dễ dẫn đến việc giải quyết sai bài toán thực tế của doanh nghiệp.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-038",
    "set": 1,
    "number": 38,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>A research summarization assistant has been deployed for six months. A user has flagged that a generated summary contained a fabricated citation. Which two Diligence-competency actions should you take? (Select two.) <\/p><p>Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Sample recent summaries to estimate the fabrication frequency across the population.<\/p>",
      "B": "<p>Disable the assistant immediately for all current users without any prior diagnostic analysis.<\/p>",
      "C": "<p>Review whether citation-grounding controls exist anywhere in the current generation pipeline.<\/p>",
      "D": "<p>Communicate to users that the assistant does not fabricate output as a matter of design.<\/p>",
      "E": "<p>Treat the incident as an anecdotal isolated case and take no further investigative action.<\/p>"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Đáp án đúng: <b>A<\/b> và <b>C<\/b>.<br/><ul><li><p><b>A — Đúng:<\/b> Lấy mẫu ngẫu nhiên các bản tóm tắt gần đây (<i>sample recent summaries<\/i>) giúp đánh giá định lượng tần suất xuất hiện trích dẫn bịa đặt (hallucination/fabrication frequency) trên toàn bộ hệ thống để xác định quy mô của vấn đề.<\/p><\/li><li><p><b>C — Đúng:<\/b> Kiểm tra lại các cơ chế kiểm soát căn cứ trích dẫn (<i>citation-grounding controls<\/i>) trong đường ống xử lý hiện tại để xác định xem hệ thống đã có bước đối chiếu/xác minh trích dẫn chưa hay bị hổng ở bước nào.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>B:<\/b> Tắt toàn bộ trợ lý ngay lập tức là phản ứng quá đà và không cần thiết khi chưa đánh giá được mức độ ảnh hưởng thực tế.<\/p><\/li><li><p><b>D:<\/b> Phủ nhận lỗi và khẳng định trợ lý không thể bịa đặt thông tin là thiếu trung thực và vi phạm nguyên tắc quản trị AI.<\/p><\/li><li><p><b>E:<\/b> Xem sự cố chỉ là một trường hợp đơn lẻ mà bỏ qua điều tra sẽ tạo ra rủi ro lớn cho chất lượng và độ tin cậy của hệ thống về lâu dài.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-039",
    "set": 1,
    "number": 39,
    "type": "matching",
    "difficulty": "Medium",
    "question": "<p>You are evaluating retrieval-strategy claims used by a peer team. For each claim, select yes if the statement is generally accurate. Otherwise, select no.<\/p>",
    "matching": [
      {
        "letter": "A",
        "text": "Dense vector retrieval is well suited to recovering paraphrased intent against unstructured text.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "B",
        "text": "Sparse term-matching retrieval recovers exact terms (such as identifiers and rare tokens) more reliably than dense alone.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "C",
        "text": "Structured query retrieval is the right fit for filter-and-aggregate workloads against a relational store with schema and indexes.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "D",
        "text": "Hybrid retrieval is identical to dense-only retrieval and shares the same recall characteristics.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "No"
      },
      {
        "letter": "E",
        "text": "Random sampling of a data store is a sound retrieval strategy for production Q&A.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "No"
      }
    ],
    "answer": {
      "A": "Yes",
      "B": "Yes",
      "C": "Yes",
      "D": "No",
      "E": "No"
    },
    "explanation": "<p><strong>Đánh giá từng phát biểu:<\/strong> mỗi dòng được chấm độc lập theo mức độ chính xác của nhận định.<\/p><ul><li><strong>A — Yes:<\/strong> Dense vector retrieval is well suited to recovering paraphrased intent against unstructured text. — Yes, vì nhận định này mô tả đúng đặc tính hoặc thông lệ phù hợp trong bối cảnh được hỏi.<\/li><li><strong>B — Yes:<\/strong> Sparse term-matching retrieval recovers exact terms (such as identifiers and rare tokens) more reliably than dense alone. — Yes, vì nhận định này mô tả đúng đặc tính hoặc thông lệ phù hợp trong bối cảnh được hỏi.<\/li><li><strong>C — Yes:<\/strong> Structured query retrieval is the right fit for filter-and-aggregate workloads against a relational store with schema and indexes. — Yes, vì nhận định này mô tả đúng đặc tính hoặc thông lệ phù hợp trong bối cảnh được hỏi.<\/li><li><strong>D — No:<\/strong> Hybrid retrieval is identical to dense-only retrieval and shares the same recall characteristics. — No, vì nhận định này khái quát sai, đánh đồng các khái niệm hoặc đề xuất một cách làm không đáng tin cậy trong thực tế.<\/li><li><strong>E — No:<\/strong> Random sampling of a data store is a sound retrieval strategy for production Q&amp;A. — No, vì nhận định này khái quát sai, đánh đồng các khái niệm hoặc đề xuất một cách làm không đáng tin cậy trong thực tế.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-040",
    "set": 1,
    "number": 40,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>You are designing a test strategy for a Claude-based pipeline that handles sensitive financial data. Which two test types should be prioritized to cover both safety under attack and cross-component correctness? (Select two.)<\/p>",
    "options": {
      "A": "<p>Adversarial tests using prompt-injection and malformed-input cases.<\/p>",
      "B": "<p>Regression tests against a stable reference set of previously known-good outputs.<\/p>",
      "C": "<p>Smoke tests that verify core paths after each deployment.<\/p>",
      "D": "<p>Integration tests that verify end-to-end pipeline behavior across all components.<\/p>",
      "E": "<p>Unit tests targeting only individual prompt-template rendering logic.<\/p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "Đáp án đúng: <b>A<\/b> và <b>D<\/b>.<br/><ul><li><p><b>A — Đúng:<\/b> <b>Adversarial tests<\/b> (kiểm thử đối kháng) đánh giá tính an toàn dưới các cuộc tấn công tấn công (safety under attack) thông qua kỹ thuật chèn prompt (prompt-injection) và dữ liệu đầu vào độc hại/biến dạng.<\/p><\/li><li><p><b>D — Đúng:<\/b> <b>Integration tests<\/b> (kiểm thử tích hợp) đảm bảo tính chính xác giữa các thành phần (cross-component correctness) bằng cách xác minh hành vi toàn trình (end-to-end) của cả đường ống xử lý dữ liệu.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>B:<\/b> Kiểm thử hồi quy (Regression testing) giúp phát hiện sai lệch so với kết quả cũ nhưng không kiểm tra được khả năng chống chịu tấn công mới hoặc tính chính xác tương tác đa thành phần.<\/p><\/li><li><p><b>C:<\/b> Smoke testing chỉ kiểm tra các đường đi cốt lõi cơ bản nhất sau khi triển khai, không đủ sâu để đảm bảo an toàn bảo mật hay tính chính xác phức tạp.<\/p><\/li><li><p><b>E:<\/b> Unit testing ở đây chỉ tập trung vào logic hiển thị của từng template riêng lẻ mà bỏ qua sự tương tác giữa các thành phần trong đường ống.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-041",
    "set": 1,
    "number": 41,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>Engineering leadership wants to roll out Claude Skills to 280 developers across 14 teams. Skills will encode internal coding standards, code-review checklists, and incident-postmortem templates. Leadership has asked how to govern Skill authorship so that Skills remain trustworthy without bottlenecking on a single central team. Which governance model should you recommend?<\/p>",
    "options": {
      "A": "<p>Per-developer authorship across the 280 engineers with no team-level coordination required.<\/p>",
      "B": "<p>Centralized authorship by a single platform team responsible for every Skill produced.<\/p>",
      "C": "<p>Fully decentralized authorship across the 14 teams with no review before publication.<\/p>",
      "D": "<p>Federated authorship across the 14 teams with a central review and publication gate.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><strong>Đáp án đúng: D.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Per-developer authorship across the 280 engineers with no team-level coordination required.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Centralized authorship by a single platform team responsible for every Skill produced.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Fully decentralized authorship across the 14 teams with no review before publication.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>D — Đúng:<\/strong> Phương án “Federated authorship across the 14 teams with a central review and publication gate.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-042",
    "set": 1,
    "number": 42,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are integrating AI-assisted tooling into the team's documentation workflow. The team wants generated documentation that stays grounded in the actual code. Which integration approach best fits this requirement?<\/p>",
    "options": {
      "A": "<p>Generate documentation from the model's training-data recall without reading any of the actual repository code, accepting that the output will not reflect the current implementation.<\/p>",
      "B": "<p>Have the subagents publish generated documentation directly to the public-facing site without passing through the team's normal review workflow or any human approval step.<\/p>",
      "C": "<p>Configure subagents that read the relevant code files via filesystem and code-search tools, generate the documentation, and emit changes through the team's normal review workflow.<\/p>",
      "D": "<p>Disable all filesystem and code-search tools so the subagents cannot read any repository code, accepting that documentation generation will be entirely disconnected from the actual implementation.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><strong>Đáp án đúng: C.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Generate documentation from the model's training-data recall without reading any of the actual repository code.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Have the subagents publish generated documentation directly to the public-facing site without passing through the team's normal review workflow.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Đúng:<\/strong> Phương án “Configure subagents that read the relevant code files via filesystem and code-search tools, generate the documentation, and emit changes through the team's normal review workflow.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Disable all filesystem and code-search tools so the subagents cannot read any repository code.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-043",
    "set": 1,
    "number": 43,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>A platform team operates a self-hosted multi-agent system on Kubernetes that orchestrates seven specialized agents for invoice processing. The team spends approximately 40 percent of engineering capacity on infrastructure maintenance, message bus reliability, and agent state recovery. The CFO has asked you to evaluate moving to managed agent infrastructure to reclaim engineering capacity. The security officer requires that all customer financial data remain within an approved network boundary.<\/p><p> Which factor should most heavily influence your recommendation?<\/p>",
    "options": {
      "A": "<p>Whether the current seven agents map cleanly to the patterns supported by managed agents.<\/p>",
      "B": "<p>Whether managed agents reduce per-invoice token costs across the existing processing volume.<\/p>",
      "C": "<p>Whether managed agents support the current bus topology used by the platform team.<\/p>",
      "D": "<p> Whether managed agent data handling satisfies the network boundary required by security.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><strong>Đáp án đúng: D.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Whether the current seven agents map cleanly to the managed agent architecture.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Whether managed agents reduce per-invoice token costs compared to the current setup.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Whether managed agents support the current bus topology used for agent communication.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>D — Đúng:<\/strong> Phương án “Whether managed agent data handling satisfies the network boundary required by security.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-044",
    "set": 1,
    "number": 44,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>A security audit uncovers two issues: (1) all end users share a single API key, and (2) tool calls are executed without logging the initiating user. Which two mitigations directly address these specific findings? (Select two.)<\/p>",
    "options": {
      "A": "<p>Validate structured outputs against a schema before downstream actions are executed.<\/p>",
      "B": "<p>Enforce RBAC at the retrieval layer before content enters the model context.<\/p>",
      "C": "<p>Move credentials out of the prompt context and resolve them from a server-side secret store.<\/p>",
      "D": "<p>Add actor attribution to tool-call logs so each call records the initiating user identity.<\/p>",
      "E": "<p>Replace the shared API key with per-user OAuth tokens carrying scope-restricted permissions.<\/p>"
    },
    "answer": [
      "D",
      "E"
    ],
    "explanation": "<p><strong>Đáp án đúng: D, E.<\/strong> Các phương án này bổ sung cho nhau và cùng đáp ứng đầy đủ những yêu cầu được nêu trong tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Validate structured outputs against a schema before downstream actions are executed.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Enforce RBAC at the retrieval layer before content enters the model context.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Move credentials out of the prompt context and resolve them from a server-side secret store.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>D — Đúng:<\/strong> Phương án “Add actor attribution to tool-call logs so each call records the initiating user identity.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>E — Đúng:<\/strong> Phương án “Replace the shared API key with per-user OAuth tokens carrying scope-restricted permissions.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-045",
    "set": 1,
    "number": 45,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are a platform architect designing an internal Claude-based assistant that serves both finance analysts and external auditors. Each population must access only documents permitted by its role. Where should role-based access control be enforced in the pipeline?<\/p>",
    "options": {
      "A": "<p> Inside the system prompt as a natural-language instruction for Claude to ignore unauthorized documents.<\/p>",
      "B": "<p>At the retrieval layer, before any role-restricted content reaches the prompt-construction step or the model.<\/p>",
      "C": "<p>Nowhere in the pipeline; rely on the model's general refusal behavior to reject unauthorized document access without any enforced access control.<\/p>",
      "D": "<p>After the response is generated, by post-filtering content that should not have been retrieved.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "Đáp án đúng: <b>B<\/b>.<br/><ul><li><p><b>B — Đúng:<\/b> Kiểm soát truy cập dựa trên vai trò (<b>RBAC<\/b>) phải được thực thi <b>ngay tại tầng truy xuất (retrieval layer)<\/b>, trước khi bất kỳ nội dung bị giới hạn quyền nào được đưa vào bước xây dựng prompt hoặc gửi tới mô hình. Điều này đảm bảo ngăn chặn rò rỉ dữ liệu ngay từ gốc.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Đưa quy định quyền vào system prompt dưới dạng hướng dẫn ngôn ngữ tự nhiên không đảm bảo an toàn tuyệt đối, vì mô hình vẫn có thể bị vượt qua (prompt injection) hoặc nhầm lẫn.<\/p><\/li><li><p><b>C:<\/b> Tin tưởng mô hình tự suy luận ranh giới phân quyền là cực kỳ rủi ro và không đáp ứng tiêu chuẩn an toàn/kiểm toán.<\/p><\/li><li><p><b>D:<\/b> Lọc nội dung sau khi mô hình đã sinh phản hồi (post-filtering) là quá trễ, vừa lãng phí chi phí token/độ trễ, vừa tạo rủi ro rò rỉ thông tin trong ngữ cảnh hội thoại.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-046",
    "set": 1,
    "number": 46,
    "type": "matching",
    "difficulty": "Medium",
    "question": "<p>You are sequencing decomposed components in an invoice-processing pipeline. For each of the decomposed components, select the execution layer it belongs to: 'Pre-Processing,' 'Model Stage,' or 'Post-Processing.'<\/p>",
    "matching": [
      {
        "letter": "A",
        "text": "Claude-based classification of invoice type",
        "choices": [
          "Model Stage",
          "Post-Processing",
          "Pre-Processing"
        ],
        "answer": "Model Stage"
      },
      {
        "letter": "B",
        "text": "Persistence of validated records to the system of record",
        "choices": [
          "Model Stage",
          "Post-Processing",
          "Pre-Processing"
        ],
        "answer": "Post-Processing"
      },
      {
        "letter": "C",
        "text": "Schema validation of the extracted fields",
        "choices": [
          "Model Stage",
          "Post-Processing",
          "Pre-Processing"
        ],
        "answer": "Post-Processing"
      },
      {
        "letter": "D",
        "text": "Claude-based extraction of structured invoice fields",
        "choices": [
          "Model Stage",
          "Post-Processing",
          "Pre-Processing"
        ],
        "answer": "Model Stage"
      },
      {
        "letter": "E",
        "text": "PII redaction on extracted text prior to model invocation",
        "choices": [
          "Model Stage",
          "Post-Processing",
          "Pre-Processing"
        ],
        "answer": "Pre-Processing"
      },
      {
        "letter": "F",
        "text": "Optical character recognition on scanned invoice images",
        "choices": [
          "Model Stage",
          "Post-Processing",
          "Pre-Processing"
        ],
        "answer": "Pre-Processing"
      }
    ],
    "answer": {
      "A": "Model Stage",
      "B": "Post-Processing",
      "C": "Post-Processing",
      "D": "Model Stage",
      "E": "Pre-Processing",
      "F": "Pre-Processing"
    },
    "explanation": "Các thành phần trong đường ống xử lý hóa đơn (invoice-processing pipeline) được phân loại vào các tầng thực thi như sau:<br/><ul><li><p><b>A. Claude-based classification of invoice type:<\/b> <b>Model Stage<\/b> — Tác vụ thực hiện trực tiếp bởi mô hình AI (Claude) để phân loại loại hóa đơn.<\/p><\/li><li><p><b>B. Persistence of validated records to the system of record:<\/b> <b>Post-Processing<\/b> — Bước lưu trữ dữ liệu vào hệ thống ghi nhận sau khi hóa đơn đã được trích xuất và kiểm tra tính hợp lệ thành công.<\/p><\/li><li><p><b>C. Schema validation of the extracted fields:<\/b> <b>Post-Processing<\/b> — Kiểm tra và xác thực cấu trúc dữ liệu (schema) của các trường đã được trích xuất bởi mô hình.<\/p><\/li><li><p><b>D. Claude-based extraction of structured invoice fields:<\/b> <b>Model Stage<\/b> — Tác vụ trích xuất dữ liệu có cấu trúc từ hóa đơn do mô hình Claude đảm nhận.<\/p><\/li><li><p><b>E. PII redaction on extracted text prior to model invocation:<\/b> <b>Pre-Processing<\/b> — Quá trình làm sạch, ẩn thông tin nhận dạng cá nhân (PII) trước khi gửi văn bản vào gọi mô hình.<\/p><\/li><li><p><b>F. Optical character recognition on scanned invoice images:<\/b> <b>Pre-Processing<\/b> — Bước xử lý ảnh (OCR) ban đầu để chuyển đổi hình ảnh hóa đơn thành văn bản trước khi chuyển qua các bước phân tích tiếp theo.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-047",
    "set": 1,
    "number": 47,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>You are reviewing an integration specification for security gaps. Which two findings constitute valid security gaps in the specification? (Select two.) Each correct answer presents a complete solution.<\/p>",
    "options": {
      "A": "<p>Tool calls execute server-side under a least-privilege service principal with scoped permissions.<\/p>",
      "B": "<p>Service credentials are placed in the prompt context, where they can leak into logs and traces.<\/p>",
      "C": "<p>Role-based access control is enforced only at the response-rendering layer after the model accesses restricted data.<\/p>",
      "D": "<p>Per-user OAuth tokens are exchanged with scope-restricted permissions and refreshed within the active session.<\/p>",
      "E": "<p>Tool inputs and outputs are encrypted in transit using transport-layer security between services.<\/p>"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "<p><em>Nguồn đề thi không cung cấp phần giải thích cho câu hỏi này.<\/em><\/p>"
  },
  {
    "id": "CCAR-P-048",
    "set": 1,
    "number": 48,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>A technical team is cataloguing risks specific to Claude's use in a document-grounded Q&amp;A system. Which two items represent failure modes intrinsic to LLM-based systems rather than generic software defects? (Select two.)<\/p>",
    "options": {
      "A": "<p>An expired TLS certificate blocks outbound API calls to Claude.<\/p>",
      "B": "<p>A database connection timeout causes retrieval to return an empty result set.<\/p>",
      "C": "<p>The model refuses a legitimate query because surface features trigger an overly broad safety pattern.<\/p>",
      "D": "<p>A misconfigured load balancer routes requests to a deprecated API version.<\/p>",
      "E": "<p>The model generates a plausible-sounding answer unsupported by any retrieved document.<\/p>"
    },
    "answer": [
      "C",
      "E"
    ],
    "explanation": "<p><strong>Đáp án đúng: C, E.<\/strong> Các phương án này bổ sung cho nhau và cùng đáp ứng đầy đủ những yêu cầu được nêu trong tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “An expired TLS certificate blocks outbound API calls to Claude.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>B — Sai:<\/strong> Không chọn “A database connection timeout causes retrieval to return an empty result set.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Đúng:<\/strong> Phương án “The model refuses a legitimate query because surface features trigger an overly broad safety pattern.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>D — Sai:<\/strong> Không chọn “A misconfigured load balancer routes requests to a deprecated API version.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>E — Đúng:<\/strong> Phương án “The model generates a plausible-sounding answer unsupported by any retrieved document.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-049",
    "set": 1,
    "number": 49,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>You are selecting a model for a new production workload and must complete the upstream steps before testing candidate models empirically. Which two steps must be completed BEFORE running a representative sample on a candidate model? (Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Select the lightest model that consistently meets the quality bar across the sample.<\/p>",
      "B": "<p>Retest the model choice when a new model version becomes available.<\/p>",
      "C": "<p>Choose a candidate model based on the requirements profile and known capabilities.<\/p>",
      "D": "<p>Define the quality bar, latency tolerance, and expected volume for the workload.<\/p>",
      "E": "<p>Sign off the production rollout plan with the platform and security teams.<\/p>"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Đáp án đúng: <b>C<\/b> và <b>D<\/b>.<br/><ul><li><p><b>C — Đúng:<\/b> Cần phải <b>chọn mô hình ứng viên dựa trên hồ sơ yêu cầu và các khả năng đã biết<\/b> (<i>requirements profile and known capabilities<\/i>). Đây là bước xác định phạm vi để chọn ra mô hình phù hợp với bài toán trước khi đem đi thử nghiệm thực tế.<\/p><\/li><li><p><b>D — Đúng:<\/b> Cần phải <b>xác định mức chuẩn chất lượng (quality bar), mức độ chịu đựng độ trễ (latency tolerance) và sản lượng dự kiến (expected volume)<\/b> cho khối lượng công việc. Việc thiết lập các tiêu chí định lượng này là điều kiện tiên quyết để làm thước đo đánh giá kết quả thử nghiệm trên mẫu đại diện.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Chọn mô hình nhẹ nhất chỉ để giảm chi phí mà chưa xem xét các yêu cầu kỹ thuật sẽ dẫn đến kết quả thử nghiệm không chính xác hoặc không đáp ứng được yêu cầu công việc.<\/p><\/li><li><p><b>B:<\/b> Kiểm thử lại khi có phiên bản mô hình mới là bước diễn ra ở chu kỳ bảo trì/tối ưu sau này, không phải bước chuẩn bị trước khi thử nghiệm mô hình ban đầu.<\/p><\/li><li><p><b>E:<\/b> Phê duyệt kế hoạch triển khai thực tế (<i>rollout plan<\/i>) chỉ được thực hiện sau khi việc thử nghiệm và đánh giá thực nghiệm đã hoàn tất thành công.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-050",
    "set": 1,
    "number": 50,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>The platform team at Trenova Systems, Inc. needs to reduce per-query cost and p95 latency for a high-volume Claude pipeline without degrading output quality on the core use case. Which two optimizations directly target both cost and latency simultaneously? (Select two.)<\/p>",
    "options": {
      "A": "<p>Enable prompt caching on the static system-prompt prefix to reduce billable input tokens on repeated calls.<\/p>",
      "B": "<p>Route straightforward query types to a smaller, faster Claude model and reserve the full model for complex cases.<\/p>",
      "C": "<p>Increase max_tokens to reduce the frequency of truncated responses requiring follow-up calls.<\/p>",
      "D": "<p>Add a retrieval step that fetches the full source corpus into the context window before generation.<\/p>",
      "E": "<p>Expand the system prompt to include additional few-shot examples on every request.<\/p>"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "Đáp án đúng: <b>A<\/b> và <b>B<\/b>.<br/><ul><li><p><b>A — Đúng:<\/b> <b>Prompt Caching<\/b> giúp giảm số lượng input token cần tính phí trên các lượt gọi lặp lại và giảm đáng kể thời gian xử lý thời gian phản hồi ban đầu (time-to-first-token latency / p95 latency) nhờ tận dụng bộ đệm ngữ cảnh sẵn có.<\/p><\/li><li><p><b>B — Đúng:<\/b> <b>Model Routing (Định tuyến mô hình)<\/b> phân loại truy vấn để gửi các tác vụ đơn giản đến các mô hình nhỏ hơn, rẻ hơn và nhanh hơn (như Haiku/Sonnet), chỉ dùng mô hình lớn (Opus) cho câu hỏi phức tạp. Điều này giúp giảm đồng thời cả chi phí trung bình lẫn độ trễ p95.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>C:<\/b> Tăng <code>max_tokens<\/code> không trực tiếp giảm độ trễ hay chi phí cho từng truy vấn thông thường, thậm chí có thể làm tăng thời gian chờ nếu câu trả lời sinh ra dài hơn.<\/p><\/li><li><p><b>D:<\/b> Nạp toàn bộ tập văn bản gốc (full corpus) vào context window làm tăng mạnh số lượng input token, dẫn đến tăng chi phí và tăng độ trễ p95.<\/p><\/li><li><p><b>E:<\/b> Thêm nhiều ví dụ few-shot vào system prompt sẽ làm tăng độ dài prompt, làm tăng chi phí và độ trễ trên mỗi yêu cầu.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-051",
    "set": 1,
    "number": 51,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are an architect supporting the iteration phase of a deployed Claude-based system. Which activity most directly fits this phase?<\/p>",
    "options": {
      "A": "<p>Rebuild the entire system architecture from scratch at the start of every iteration cycle regardless of what production telemetry, evaluations, and stakeholder feedback indicate is needed.<\/p>",
      "B": "<p>Stop measuring production outcomes once the deployment has successfully launched, treating the go-live milestone as the end of the evaluation and iteration cycle.<\/p>",
      "C": "<p>Discard the evaluation framework and reference set once the deployment is in production, accepting that future iterations will have no structured basis for measuring the impact of changes.<\/p>",
      "D": "<p>Review production telemetry, sampled output evaluations, and stakeholder feedback to identify the highest-impact change for the next cycle, then plan the change against the evaluation framework.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><strong>Đáp án đúng: D.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Rebuild the entire system architecture from scratch based on user complaints.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Stop measuring production outcomes and rely on stakeholder sentiment alone.” vì chỉ dựa vào một lớp kiểm soát hoặc phán đoán của mô hình không tạo ra cơ chế thực thi và phòng vệ đáng tin cậy.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Discard the evaluation framework and start fresh with each iteration.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>D — Đúng:<\/strong> Phương án “Review production telemetry, sampled output evaluations, and stakeholder feedback to identify the highest-impact change for the next cycle, then plan the change against the evaluation framework.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-052",
    "set": 1,
    "number": 52,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are configuring tool permissions for a Claude-based assistant. The assistant's defined responsibilities require read access to a knowledge base and write access to a draft queue, and nothing else. Which scoping design best applies least privilege?<\/p>",
    "options": {
      "A": "<p>Allow access to all tools with read permissions globally across the system.<\/p>",
      "B": "<p>Per-role allow-list of exactly the read-knowledge-base and write-draft-queue tools, enforced at the orchestration layer.<\/p>",
      "C": "<p>Allow access to every tool in the catalog and rely on the model to decline tools it should not use.<\/p>",
      "D": "<p>Disable all tools entirely to achieve a minimal permission surface.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p><strong>Đáp án đúng: B.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Allow access to all tools with read permissions globally across the system.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>B — Đúng:<\/strong> Phương án “Per-role allow-list of exactly the read-knowledge-base and write-draft-queue tools, enforced at the orchestration layer.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Allow access to every tool in the catalog and rely on the model to decline tools it should not use.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Disable all tools entirely to achieve a minimal permission surface.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-053",
    "set": 1,
    "number": 53,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>You are running a risk assessment on a planned Claude-based deployment and must complete the inventory steps before assessing threats against assets. Which two steps must be completed BEFORE assessing threats against assets to estimate likelihood and impact? (Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Document the assessment outcome and present it to the risk committee.<\/p>",
      "B": "<p>Recommend mitigations and residual-risk acceptance for all identified threats.<\/p>",
      "C": "<p>Identify the assets that the deployment touches, along with the sensitivity of each asset.<\/p>",
      "D": "<p>Recommend mitigations and residual-risk acceptance for risks that remain.<\/p>",
      "E": "<p>Enumerate the threat actors and attack vectors relevant to the deployment.<\/p>"
    },
    "answer": [
      "C",
      "E"
    ],
    "explanation": "<p><strong>Đáp án đúng: C, E.<\/strong> Các phương án này bổ sung cho nhau và cùng đáp ứng đầy đủ những yêu cầu được nêu trong tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Document the assessment outcome and present it to the risk committee.” vì đây là hoạt động đánh giá hoặc ra quyết định sau khi đã thực thi, không phải bước chuẩn bị được câu hỏi yêu cầu.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Recommend mitigations and residual-risk acceptance for all identified threats.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>C — Đúng:<\/strong> Phương án này là bước chuẩn bị cần hoàn tất trước khi thực thi: “Identify the assets that the deployment touches, along with the sensitivity of each asset.”. Nó thiết lập đầu vào, tiêu chí hoặc phạm vi cần thiết để bước sau có thể được đánh giá đúng.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Recommend mitigations and residual-risk acceptance for risks that remain.” vì đây là hoạt động đánh giá hoặc ra quyết định sau khi đã thực thi, không phải bước chuẩn bị được câu hỏi yêu cầu.<\/li><li><strong>E — Đúng:<\/strong> Phương án này là bước chuẩn bị cần hoàn tất trước khi thực thi: “Enumerate the threat actors and attack vectors relevant to the deployment.”. Nó thiết lập đầu vào, tiêu chí hoặc phạm vi cần thiết để bước sau có thể được đánh giá đúng.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-054",
    "set": 1,
    "number": 54,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>An architect is reviewing a Claude-based candidate-screening tool prior to deployment. A stakeholder asserts that because the model was not trained on company data, no bias evaluation is necessary. Which two responses most accurately challenge this assertion? (Select two.)<\/p>",
    "options": {
      "A": "<p>Transparency obligations are satisfied by disclosing that an AI system is in use, without further evaluation.<\/p>",
      "B": "<p>Fairness testing is required only when the training dataset is known to contain protected-class labels.<\/p>",
      "C": "<p>The model may carry demographic biases from pretraining that manifest in screening outcomes regardless of fine-tuning.<\/p>",
      "D": "<p>The system should be evaluated on outcome-disparity metrics across protected groups before deployment.<\/p>",
      "E": "<p>Bias evaluation is unnecessary when the model provider has published a responsible-use policy.<\/p>"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Đáp án đúng: <b>C<\/b> và <b>D<\/b>.<br/><ul><li><p><b>C — Đúng:<\/b> Mặc dù mô hình chưa được huấn luyện trực tiếp trên dữ liệu nội bộ của công ty, nó vẫn mang theo các thành kiến nhân khẩu học (demographic biases) từ giai đoạn tiền huấn luyện (pretraining). Những thành kiến này có thể xuất hiện trong kết quả sàng lọc ứng viên bất kể việc tinh chỉnh (fine-tuning) sau đó.<\/p><\/li><li><p><b>D — Đúng:<\/b> Trước khi đưa hệ thống vào triển khai thực tế trong quy trình nhân sự, hệ thống cần phải được kiểm định định lượng thông qua các chỉ số chênh lệch kết quả (outcome-disparity metrics) trên các nhóm đối tượng được bảo vệ (protected groups) nhằm đảm bảo sự công bằng.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Việc công khai thông tin rằng hệ thống AI đang được sử dụng không thể thay thế cho các nghĩa vụ kiểm tra, đánh giá chất lượng và công bằng của mô hình.<\/p><\/li><li><p><b>B:<\/b> Kiểm tra tính công bằng không chỉ giới hạn ở việc tập dữ liệu huấn luyện có chứa nhãn lớp được bảo vệ hay không, vì sự thiên vị vẫn có thể phát sinh từ mối quan hệ tương quan ẩn trong dữ liệu.<\/p><\/li><li><p><b>E:<\/b> Chính sách sử dụng có trách nhiệm từ nhà cung cấp mô hình không miễn trừ trách nhiệm cho tổ chức triển khai trong việc tự đánh giá rủi ro và thiên vị đối với trường hợp sử dụng cụ thể của họ.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-055",
    "set": 1,
    "number": 55,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are integrating human review into a high-volume classification pipeline where reviewing every output is infeasible. Which sampling strategy best balances throughput with quality oversight?<\/p>",
    "options": {
      "A": "<p>No sampling, relying entirely on user complaints to reveal quality and safety problems after they affect users.<\/p>",
      "B": "<p>Risk-stratified sampling that reviews all low-confidence and high-impact outputs and a smaller random sample of high-confidence routine outputs.<\/p>",
      "C": "<p> Inverse sampling that reviews only high-confidence routine outputs and skips low-confidence and high-impact outputs.<\/p>",
      "D": "<p>Universal review of every output regardless of confidence or throughput impact.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "Đáp án đúng  là <b>B<\/b>.<br/><ul><li><p><b>B — Đúng:<\/b> <b>Lấy mẫu phân tầng theo rủi ro<\/b> (<i>Risk-stratified sampling<\/i>) là chiến lược tối ưu nhất: đánh giá thủ công toàn bộ các kết quả có độ tin cậy thấp (<i>low-confidence<\/i>) và tác động cao (<i>high-impact<\/i>), kết hợp với việc lấy mẫu ngẫu nhiên tỉ lệ nhỏ đối với các kết quả thông thường có độ tin cậy cao (<i>high-confidence<\/i>). Phương pháp này giúp tối đa hóa khả năng kiểm soát chất lượng mà không làm nghẽn năng suất xử lý của hệ thống.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Không lấy mẫu và chỉ dựa vào khiếu nại của người dùng là cách tiếp cận thụ động, khiến các lỗi nghiêm trọng bị bỏ sót và làm giảm trải nghiệm người dùng.<\/p><\/li><li><p><b>C:<\/b> Lấy mẫu ngược (chỉ kiểm tra các kết quả độ tin cậy cao) sẽ bỏ qua khu vực có rủi ro sai sót cao nhất là các kết quả có độ tin cậy thấp.<\/p><\/li><li><p><b>D:<\/b> Kiểm tra toàn bộ 100% kết quả là không khả thi đối với hệ thống có lưu lượng lớn (<i>high-volume pipeline<\/i>) vì sẽ gây ra nghẽn nghiêm trọng và tốn kém chi phí vận hành.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-056",
    "set": 1,
    "number": 56,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are assessing a Claude-based system whose dominant risk is silent quality drift on safety-relevant outputs after a model-version upgrade. Which assessment activity most directly addresses this risk?<\/p>",
    "options": {
      "A": "<p>Disable adversarial evaluation entirely during model-version upgrade cycles to reduce evaluation cost, accepting that safety drift will go undetected until it appears in production.<\/p>",
      "B": "<p> Rotate adversarial inputs randomly so no two upgrades are scored on the same set.<\/p>",
      "C": "<p>Skip evaluation on each model-version upgrade and rely on user-submitted complaints to surface safety drift after the upgraded model has already served production traffic.<\/p>",
      "D": "<p>Maintain an adversarial evaluation set with version-attributed scoring so each upgrade is measured against the same set before promotion.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><em>Nguồn đề thi không cung cấp phần giải thích cho câu hỏi này.<\/em><\/p>"
  },
  {
    "id": "CCAR-P-057",
    "set": 1,
    "number": 57,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>You are building a feedback-and-alignment routine for a multi-stakeholder deployment. Which two practices belong in the routine? (Select two.) Each correct answer presents a complete solution.<\/p>",
    "options": {
      "A": "<p>Record each session and distribute the recording to stakeholders who could not attend live.<\/p>",
      "B": "<p>Escalate any disagreement among stakeholders to the executive sponsor for binding resolution.<\/p>",
      "C": "<p>Rotate facilitation among the participating stakeholder groups to share ownership of the routine.<\/p>",
      "D": "<p>Set a regular cadence for revisiting expectations and assumptions as conditions evolve over time.<\/p>",
      "E": "<p>Reconcile divergent stakeholder positions explicitly rather than papering over them in the moment.<\/p>"
    },
    "answer": [
      "D",
      "E"
    ],
    "explanation": "Đáp án đúng  là <b>D<\/b> và <b>E<\/b>.<br/><ul><li><p><b>D — Đúng:<\/b> <b>Thiết lập lịch trình định kỳ để xem xét lại các kỳ vọng và giả định<\/b> (<i>Set a regular cadence for revisiting expectations and assumptions<\/i>) khi các điều kiện thực tế thay đổi theo thời gian. Triển khai AI đòi hỏi sự thích ứng liên tục, do đó việc rà soát định kỳ giúp duy trì sự đồng thuận giữa các bên liên quan.<\/p><\/li><li><p><b>E — Đúng:<\/b> <b>Giải quyết các quan điểm bất đồng của các bên liên quan một cách rõ ràng<\/b> (<i>Reconcile divergent stakeholder positions explicitly<\/i>) thay vì che đậy hay bỏ qua chúng tại thời điểm đó. Việc đối mặt và thống nhất các khác biệt ngay từ đầu giúp xây dựng giải pháp bền vững và tránh rủi ro phát sinh về sau.<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Tự động ghi âm và gửi video cuộc họp cho tất cả các bên mà không qua xem xét hay tổng hợp có thể làm nhiễu thông tin và không tạo ra sự đồng thuận thực sự.<\/p><\/li><li><p><b>B:<\/b> Lập tức leo thang mọi bất đồng lên cấp lãnh đạo cao cấp (<i>executive leadership<\/i>) sẽ làm quá tải cấp quản lý và thể hiện sự thiếu hiệu quả trong quy trình làm việc nhóm.<\/p><\/li><li><p><b>C:<\/b> Xoay vòng người điều phối giữa các nhóm có thể gây thiếu nhất quán trong cách dẫn dắt và làm gián đoạn tiến trình làm việc chung.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-058",
    "set": 1,
    "number": 58,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are assessing data-exfiltration risk in a Claude-based assistant that has tools for both internal-document retrieval and outbound HTTP calls. Which scenario most directly indicates a data-exfiltration risk?<\/p>",
    "options": {
      "A": "<p>The outbound HTTP tool returns a 200 response when the assistant calls an allow-listed domain to fulfil a user-initiated data-lookup request.<\/p>",
      "B": "<p>The user submits a routine question and receives a routine answer.<\/p>",
      "C": "<p>Adversarial content in a retrieved document instructs the model to call the outbound HTTP tool and send sensitive content to an attacker-controlled URL.<\/p>",
      "D": "<p>The internal-document retrieval tool returns a document that the user is authorized to view.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "Đáp án đúng là <b>C<\/b>.<br/><ul><li><p><b>C — Đúng:<\/b> Nội dung đối kháng nằm trong tài liệu truy xuất (<i>adversarial content in a retrieved document<\/i>) hướng dẫn mô hình gọi công cụ HTTP ra bên ngoài để gửi dữ liệu nhạy cảm tới URL do kẻ tấn công kiểm soát. Đây là kịch bản điển hình của tấn công gián tiếp (<b>Indirect Prompt Injection<\/b>) dẫn đến rò rỉ dữ liệu trái phép (<b>Data Exfiltration<\/b>).<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Công cụ HTTP trả về mã 200 khi gọi một tên miền nằm trong danh sách cho phép (<i>allow-listed domain<\/i>) là hoạt động bình thường theo đúng cấu hình an toàn.<\/p><\/li><li><p><b>B:<\/b> Người dùng gửi câu hỏi thông thường và nhận được câu trả lời thông thường là luồng sử dụng chuẩn, không thể hiện rủi ro.<\/p><\/li><li><p><b>D:<\/b> Công cụ truy xuất tài liệu nội bộ trả về tài liệu mà người dùng có quyền xem là hoạt động đúng phân quyền (authorization), không phải rò rỉ dữ liệu.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-059",
    "set": 1,
    "number": 59,
    "type": "matching",
    "difficulty": "Medium",
    "question": "<p>You are evaluating prompting claims in a peer's design document. For each claim, select yes if the claim reflects sound practice. Otherwise, select no.<\/p>",
    "matching": [
      {
        "letter": "A",
        "text": "Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "B",
        "text": "Adding a few-shot example set with exact field names anchors output formatting on extraction tasks.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "C",
        "text": "Chain-of-thought should be the default on every task regardless of complexity.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "No"
      },
      {
        "letter": "D",
        "text": "Leading-question framing is best mitigated by asking for an even-handed comparison with stated criteria.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "Yes"
      },
      {
        "letter": "E",
        "text": "Behavioral differences across model versions can be ignored once a prompt has been validated on one version.",
        "choices": [
          "Yes",
          "No"
        ],
        "answer": "No"
      }
    ],
    "answer": {
      "A": "Yes",
      "B": "Yes",
      "C": "No",
      "D": "Yes",
      "E": "No"
    },
    "explanation": "<p><strong>Đánh giá từng phát biểu:<\/strong> mỗi dòng được chấm độc lập theo mức độ chính xác của nhận định.<\/p><ul><li><strong>A — Yes:<\/strong> Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt. — Yes, vì nhận định này mô tả đúng đặc tính hoặc thông lệ phù hợp trong bối cảnh được hỏi.<\/li><li><strong>B — Yes:<\/strong> Adding a few-shot example set with exact field names anchors output formatting on extraction tasks. — Yes, vì nhận định này mô tả đúng đặc tính hoặc thông lệ phù hợp trong bối cảnh được hỏi.<\/li><li><strong>C — No:<\/strong> Chain-of-thought should be the default on every task regardless of complexity. — No, vì nhận định này khái quát sai, đánh đồng các khái niệm hoặc đề xuất một cách làm không đáng tin cậy trong thực tế.<\/li><li><strong>D — Yes:<\/strong> Leading-question framing is best mitigated by asking for an even-handed comparison with stated criteria. — Yes, vì nhận định này mô tả đúng đặc tính hoặc thông lệ phù hợp trong bối cảnh được hỏi.<\/li><li><strong>E — No:<\/strong> Behavioral differences across model versions can be ignored once a prompt has been validated on one version. — No, vì nhận định này khái quát sai, đánh đồng các khái niệm hoặc đề xuất một cách làm không đáng tin cậy trong thực tế.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-060",
    "set": 1,
    "number": 60,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are transitioning a Claude-based deployment from design into implementation. Which handoff package most directly supports a clean transition?<\/p>",
    "options": {
      "A": "<p>The most recent set of design presentation slides without component-level diagrams, interface contracts, an evaluation framework with a reference set, runbooks, or a known-limitations register.<\/p>",
      "B": "<p>A verbal walkthrough conducted on the day of handoff with no written architecture overview, ADRs, component contracts, evaluation framework, runbooks, playbook, or known limitations.<\/p>",
      "C": "<p>Architecture overview, ADRs, component contracts, evaluation framework with reference set, runbooks, on-call playbook, and known limitations.<\/p>",
      "D": "<p>Source code alone with no integrating architecture overview, ADRs, component contracts, evaluation framework, runbooks, on-call playbook, or known-limitations register to support the delivery team.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><strong>Đáp án đúng: C.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “The most recent set of design presentation slides without component-level diagrams, interface contracts, an evaluation framework with a reference set, runbooks, or a known-limitations register.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>B — Sai:<\/strong> Không chọn “A verbal walkthrough conducted on the day of handoff with no written architecture overview, ADRs, component contracts, evaluation framework, runbooks, playbook, or known limitations.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Đúng:<\/strong> Phương án “Architecture overview, ADRs, component contracts, evaluation framework with reference set, runbooks, on-call playbook, and known limitations.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Source code alone with no integrating architecture overview, ADRs, component contracts, evaluation framework, runbooks, on-call playbook, or known-limitations register to support the delivery team.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-061",
    "set": 1,
    "number": 61,
    "type": "multiple",
    "difficulty": "Medium",
    "question": "<p>You are producing an architecture guide for a new deployment and must complete the planning steps before drafting each section. Which two steps must be completed BEFORE drafting each section of the guide? (Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Identify the audience and the questions the guide must answer for that audience.<\/p>",
      "B": "<p>Translate the guide into the supported regional languages before drafting.<\/p>",
      "C": "<p>Validate the guide with the implementation team and incorporate corrections.<\/p>",
      "D": "<p>Establish the document under version control and assign a review cadence.<\/p>",
      "E": "<p>Outline the guide sections covering the overview, components, contracts, flows, runbooks, and limitations.<\/p>"
    },
    "answer": [
      "A",
      "E"
    ],
    "explanation": "<p><strong>Đáp án đúng: A, E.<\/strong> Các phương án này bổ sung cho nhau và cùng đáp ứng đầy đủ những yêu cầu được nêu trong tình huống.<\/p><ul><li><strong>A — Đúng:<\/strong> Phương án này là bước chuẩn bị cần hoàn tất trước khi thực thi: “Identify the audience and the questions the guide must answer for that audience.”. Nó thiết lập đầu vào, tiêu chí hoặc phạm vi cần thiết để bước sau có thể được đánh giá đúng.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Translate the guide into the supported regional languages before drafting.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Validate the guide with the implementation team and incorporate corrections.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Establish the document under version control and assign a review cadence.” vì đây là hoạt động đánh giá hoặc ra quyết định sau khi đã thực thi, không phải bước chuẩn bị được câu hỏi yêu cầu.<\/li><li><strong>E — Đúng:<\/strong> Phương án này là bước chuẩn bị cần hoàn tất trước khi thực thi: “Outline the guide sections covering the overview, components, contracts, flows, runbooks, and limitations.”. Nó thiết lập đầu vào, tiêu chí hoặc phạm vi cần thiết để bước sau có thể được đánh giá đúng.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-062",
    "set": 1,
    "number": 62,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>A document analysis service processes legal filings averaging 80,000 tokens each. Each filing is queried by attorneys an average of 14 times during a case. The current architecture sends the full filing on every query. The CFO has asked you to reduce per-query costs while preserving response quality. The security officer requires that filing contents not be stored outside the organization's tenancy. Which optimization approach should you recommend?<\/p>",
    "options": {
      "A": "<p>Summarize each filing once at intake and run all subsequent queries against the summary.<\/p>",
      "B": "<p>Cache the filing as the prompt prefix for reuse across the 14 queries per case.<\/p>",
      "C": "<p>Index filings in a vector store and retrieve only the relevant passages per query.<\/p>",
      "D": "<p>Move the workload to a smaller Claude model to reduce the per-token cost paid.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "Đáp án đúng: <b>B<\/b>.<br/><ul><li><p><b>B — Đúng:<\/b> Việc lưu bộ đệm tiền tố (Prompt Caching) cho tài liệu tài liệu hồ sơ pháp lý (~80,000 token) cho phép tái sử dụng ngữ cảnh này qua 14 truy vấn của luật sư. Phương pháp này giảm đến 90% chi phí xử lý token đầu vào cho các lượt truy vấn sau, đồng thời duy trì toàn bộ ngữ cảnh gốc (không giảm chất lượng câu trả lời) và lưu trữ ngay trong phiên làm việc của API (tuân thủ yêu cầu bảo mật tài nguyên tenant).<\/p><\/li><\/ul><b>Lý do các phương án còn lại không chính xác:<\/b><br/><ul><li><p><b>A:<\/b> Tóm tắt tài liệu làm mất chi tiết chuyên sâu của hồ sơ pháp lý, ảnh hưởng trực tiếp đến chất lượng câu trả lời cho các câu hỏi chi tiết.<\/p><\/li><li><p><b>C:<\/b> Việc lưu trữ hồ sơ vào một vector store bên ngoài và chỉ truy xuất các đoạn văn bản liên quan có thể vi phạm yêu cầu của cán bộ bảo mật về việc không lưu nội dung tài liệu ngoài phạm vi tài nguyên tenant (tenancy).<\/p><\/li><li><p><b>D:<\/b> Chuyển sang mô hình nhỏ hơn làm giảm khả năng suy luận và chất lượng câu trả lời đối với các phân tích pháp lý phức tạp.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-063",
    "set": 1,
    "number": 63,
    "type": "single",
    "difficulty": "Medium",
    "question": "<p>You are distinguishing functional from non-functional requirements during discovery. Which item is a non-functional requirement?<\/p>",
    "options": {
      "A": "<p>The system must extract a defined set of specific fields from invoice attachments and populate a downstream data record.<\/p>",
      "B": "<p>The system must produce a draft response that a human reviewer can edit before sending.<\/p>",
      "C": "<p>The system must classify inbound tickets into a defined set of categories.<\/p>",
      "D": "<p>The system must respond at p95 latency under 800 milliseconds at the expected request volume.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><strong>Đáp án đúng: D.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “The system must extract a defined set of specific fields from invoice attachments and populate a downstream data record.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>B — Sai:<\/strong> Không chọn “The system must produce a draft response that a human reviewer can edit before sending.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Sai:<\/strong> Không chọn “The system must classify inbound tickets into a defined set of categories.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>D — Đúng:<\/strong> Phương án “The system must respond at p95 latency under 800 milliseconds at the expected request volume.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-064",
    "set": 2,
    "number": 64,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>An architect is reviewing a set of architecture documentation packages before handing off a Claude-based pipeline to an implementation team. Which two characteristics indicate that a documentation package is sufficient to support implementation without ongoing architect involvement? (Select two.)<\/p>",
    "options": {
      "A": "<p>The document specifies integration contracts, configuration schemas, and expected input/output shapes for each component.<\/p>",
      "B": "<p>The document includes a decision log that records the rationale for key architectural choices and the alternatives rejected.<\/p>",
      "C": "<p>The document provides a high-level narrative description of the system without component-level detail.<\/p>",
      "D": "<p>The document includes the architect's contact information for questions during implementation.<\/p>",
      "E": "<p>The document lists all Claude models that were evaluated but does not specify which was selected or why.<\/p>"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "<h3><b>Đáp án đúng: A và B<\/b><\/h3><h3><b>Giải thích chi tiết:<\/b><\/h3><ul><li><p><b>Đáp án A (Đúng):<\/b> Rõ ràng và chính xác ở cấp độ kỹ thuật. Để đội ngũ kỹ thuật có thể tự triển khai mà không cần hỏi lại kiến trúc sư, họ cần biết chi tiết về hợp đồng giao tiếp (APIs/contracts), định dạng tệp cấu hình, và cấu trúc dữ liệu vào/ra (input/output schemas).<\/p><\/li><li><p><b>Đáp án B (Đúng):<\/b> Việc lưu lại nhật ký quyết định (Architecture Decision Record - ADR) giúp đội ngũ triển khai hiểu <i>tại sao<\/i> hệ thống lại được thiết kế như vậy. Điều này ngăn họ vô tình đi ngược lại các quyết định kiến trúc ban đầu khi gặp khó khăn hoặc phát sinh vấn đề.<\/p><\/li><li><p><b>Các đáp án sai (C, D, E):<\/b><\/p><ul><li><p><b>C sai<\/b> vì chỉ mô tả tổng quan sẽ thiếu thông tin kỹ thuật chi tiết để lập trình.<\/p><\/li><li><p><b>D sai<\/b> vì việc vẫn phải liên hệ kiến trúc sư để hỏi đáp chứng tỏ tài liệu chưa đủ độc lập/tự giải thích.<\/p><\/li><li><p><b>E sai<\/b> vì không đưa ra quyết định chọn mô hình cụ thể sẽ khiến đội ngũ triển khai bị hoang mang, không biết sử dụng mô hình nào.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-065",
    "set": 2,
    "number": 65,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are reviewing a peer's draft system prompt that contains contradictory instructions: one section says never to speculate beyond the supplied source, while another says to confidently fill in any gaps. Which response is most appropriate?<\/p>",
    "options": {
      "A": "<p>Add a priority instruction directing the model to evaluate all instructions and apply whichever appears most contextually appropriate on each request.<\/p>",
      "B": "<p>Remove or rewrite the gap-filling instruction so the prompt consistently constrains the model to source-supported content.<\/p>",
      "C": "<p> Increase temperature so output randomness masks the contradiction.<\/p>",
      "D": "<p>Keep both instructions and rely on the model to decide which one to follow on each request.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h3><b>Đáp án đúng: B<\/b><\/h3><h3><b>Giải thích chi tiết:<\/b><\/h3><ul><li><p><b>Đáp án B (Đúng):<\/b> Mâu thuẫn trong system prompt làm giảm tính ổn định và độ tin cậy của mô hình AI. Cách giải quyết triệt để và chuẩn xác nhất là loại bỏ hoặc sửa lại các chỉ dẫn xung đột nhau, đảm bảo toàn bộ prompt đi theo một định hướng nhất quán (ngăn ngừa việc mô hình tự bịa thông tin / hallucination).<\/p><\/li><li><p><b>Các đáp án sai:<\/b><\/p><ul><li><p><b>A sai<\/b> vì việc bắt mô hình tự đánh giá mâu thuẫn trong ngữ cảnh chỉ làm tăng rủi ro hành vi không dự đoán được (unpredictable behavior).<\/p><\/li><li><p><b>C sai<\/b> vì tăng <code>temperature<\/code> chỉ làm tăng tính ngẫu nhiên của câu trả lời, không giải quyết được mâu thuẫn logic trong prompt.<\/p><\/li><li><p><b>D sai<\/b> vì giao việc quyết định cho mô hình sẽ dẫn đến kết quả bất định, lúc thì mô hình tuân thủ nguồn, lúc thì tự do suy đoán.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-066",
    "set": 2,
    "number": 66,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are comparing patterns for a batch document-classification job that follows fixed steps: extract metadata, classify, summarize, and persist. Which pattern is the best fit and why?<\/p>",
    "options": {
      "A": "<p> A workflow pattern, because agentic patterns do not support tool invocations and therefore cannot execute the persist step that writes results to the downstream store.<\/p>",
      "B": "<p>An agentic pattern, because the open-ended planning capability of agents produces more consistent structured outputs than a fixed workflow graph on classification tasks.<\/p>",
      "C": "<p>An agentic pattern, because agents are categorically more accurate than workflows and therefore always preferable regardless of step predictability.<\/p>",
      "D": "<p>A workflow pattern, because the steps are well-defined and predictable per-request token cost is preferred over flexibility.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h3><b>Đáp án đúng: D<\/b><\/h3><h3><b>Giải thích chi tiết:<\/b><\/h3><ul><li><p><b>Đáp án D (Đúng):<\/b> Bài toán mô tả một quy trình tuyến tính với các bước cố định, xác định rõ từ trước (deterministic steps). Khi các bước đã cố định, việc sử dụng <b>Workflow pattern<\/b> (dạng chuỗi các bước được lập trình sẵn) sẽ giúp tối ưu chi phí, thời gian phản hồi và đảm bảo tính ổn định, vì không cần tốn token cho việc suy luận/lập kế hoạch vòng lặp như <b>Agentic pattern<\/b>.<\/p><\/li><li><p><b>Các đáp án sai:<\/b><\/p><ul><li><p><b>A sai<\/b> vì các mô hình agentic vẫn hoàn toàn hỗ trợ gọi công cụ (tool invocations) trong xử lý hàng loạt.<\/p><\/li><li><p><b>B &amp; C sai<\/b> vì công việc ở đây đã có các bước cố định, không cần đến sự linh hoạt hay lập kế hoạch mở của Agent. Việc dùng Agent trong trường hợp này chỉ làm gia tăng chi phí token không cần thiết và tiềm ẩn rủi ro chạy sai quy trình.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-067",
    "set": 2,
    "number": 67,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>A managed agent deployment for claims triage has grown from 6 tools to 34 tools over 18 months as product teams added capabilities. Triage accuracy has declined from 91 percent to 78 percent, and average tool-selection latency has increased by 2.3 seconds. A junior engineer has proposed adding a tool-router agent in front of the current agent to filter the tool list per request. <\/p><p>Which two findings should you present to justify capability decomposition before adding the router? <\/p><p>(Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Tool descriptions overlap across multiple claim categories within the agent's tool set.<\/p>",
      "B": "<p>Several tools have not been invoked across the most recent 90 days of traffic.<\/p>",
      "C": "<p>The 34 tools serve four distinct claim-workflow domains within the triage scope.<\/p>",
      "D": "<p>The router pattern is well documented in the team's internal architecture guide.<\/p>",
      "E": "<p>The proposed router introduces an additional model call on every incoming request.<\/p>"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "<h3><b>Đáp án đúng: A và C<\/b><\/h3><h3><b>Giải thích chi tiết:<\/b><\/h3><ul><li><p><b>Đáp án A (Đúng):<\/b> Khi số lượng công cụ tăng lên quá nhiều (34 tools), sự trùng lặp trong mô tả khiến LLM bị nhầm lẫn khi lựa chọn công cụ phù hợp. Việc phân rã các công cụ thành các nhóm chức năng riêng biệt sẽ loại bỏ sự mơ hồ này.<\/p><\/li><li><p><b>Đáp án C (Đúng):<\/b> Việc các công cụ tự nhiên chia thành 4 miền quy trình (domains) rõ rệt là bằng chứng kiến trúc lý tưởng để chia nhỏ (decompose) hệ thống thành 4 nhóm/agent chuyên biệt trước khi dùng Router để điều hướng request đến đúng miền.<\/p><\/li><li><p><b>Các đáp án sai:<\/b><\/p><ul><li><p><b>B sai<\/b> vì các công cụ không được sử dụng chỉ cần được loại bỏ hoặc lưu trữ lại (cleanup), không phải là lý do để tái cấu trúc/phân rã kiến trúc.<\/p><\/li><li><p><b>D sai<\/b> vì việc có tài liệu hướng dẫn chỉ là điều kiện hỗ trợ triển khai, không phải lý do kỹ thuật để biện minh cho việc phân rã hệ thống.<\/p><\/li><li><p><b>E sai<\/b> vì việc phát sinh thêm một lượt gọi mô hình là một sự đánh đổi/chi phí (trade-off) của mô hình Router, chứ không phải lý do để biện minh cho việc áp dụng nó.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-068",
    "set": 2,
    "number": 68,
    "type": "single",
    "difficulty": "",
    "question": "<p>A Claude architect needs to ensure that a security-hardening flag cannot be disabled by any individual engineer after it is set. Which configuration scope correctly enforces this requirement?<\/p>",
    "options": {
      "A": "<p>User scope (~/.claude/settings.json) on each engineer's machine.<\/p>",
      "B": "<p>Environment variable defined in the CI/CD pipeline only.<\/p>",
      "C": "<p>Managed configuration applied centrally and marked as non-overridable.<\/p>",
      "D": "<p>Project scope (.claude/settings.json) committed to the repository.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h3><b>Đáp án đúng: C<\/b><\/h3><h3><b>Giải thích chi tiết:<\/b><\/h3><ul><li><p><b>Đáp án C (Đúng):<\/b> Để ngăn chặn việc cá nhân kỹ sư tự ý ghi đè hoặc tắt các thiết lập bảo mật ở máy cục bộ hay dự án, hệ thống cần một cơ chế <b>Managed configuration<\/b> áp dụng tập trung (chẳng hạn qua policy của tổ chức) và có thuộc tính khóa/không thể ghi đè (<b>non-overridable<\/b>).<\/p><\/li><li><p><b>Các đáp án sai:<\/b><\/p><ul><li><p><b>A &amp; D sai<\/b> vì file cấu hình ở User scope (<code>~/.claude/settings.json<\/code>) hoặc Project scope trong repository đều có thể bị kỹ sư dễ dàng chỉnh sửa hoặc sửa đổi cục bộ trên máy của họ.<\/p><\/li><li><p><b>B sai<\/b> vì chỉ cấu hình trong CI/CD pipeline thì không bảo vệ hoặc bắt buộc được các thao tác/môi trường phát triển cục bộ (local development environment) của kỹ sư.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-069",
    "set": 2,
    "number": 69,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>A Claude architect is auditing configuration scope assignments. Which two statements correctly identify an appropriate use of user-scope configuration versus other scopes? (Select two.)<\/p>",
    "options": {
      "A": "<p>Persisting personal editor theme preferences that follow an engineer across projects.<\/p>",
      "B": "<p>Saving a preferred Claude response language that applies to all repositories the engineer uses.<\/p>",
      "C": "<p>Enforcing a company-wide policy that must not be overridden by individual engineers.<\/p>",
      "D": "<p>Defining MCP server endpoints shared by all contributors to a specific repository.<\/p>",
      "E": "<p>Storing API authentication keys so they are not committed to version control.<\/p>"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "<ul><li><p><b>A. Persisting personal editor theme preferences that follow an engineer across projects.<\/b><\/p><p><i>(Lưu trữ cấu hình giao diện người dùng cá nhân để áp dụng cho kỹ sư đó trên tất cả các dự án.)<\/i><\/p><p><b>Đúng:<\/b> Phạm vi cấp người dùng (User-scope) được thiết kế cho các tùy chọn cá nhân hóa có hiệu lực trên toàn bộ môi trường làm việc của một cá nhân, độc lập với từng dự án cụ thể.<\/p><\/li><li><p><b>B. Saving a preferred Claude response language that applies to all repositories the engineer uses.<\/b><\/p><p><i>(Lưu ngôn ngữ phản hồi ưu thích của Claude áp dụng cho tất cả các kho lưu trữ mà kỹ sư đó sử dụng.)<\/i><\/p><p><b>Đúng:<\/b> Tương tự giao diện, ưu đãi ngôn ngữ giao tiếp cá nhân là một thiết lập toàn cục của người dùng (user-level), không nên ràng buộc vào cấu hình dự án hay dự án cụ thể.<\/p><\/li><li><p><b>C. Enforcing a company-wide policy that must not be overridden by individual engineers.<\/b><\/p><p><i>(Thực thi chính sách toàn công ty mà kỹ sư cá nhân không thể ghi đè.)<\/i><\/p><p><b>Sai:<\/b> Đây thuộc phạm vi chính sách cấp tổ chức/doanh nghiệp (Managed/Organization scope), không phải cấu hình do cá nhân người dùng quản lý.<\/p><\/li><li><p><b>D. Defining MCP server endpoints shared by all contributors to a specific repository.<\/b><\/p><p><i>(Định nghĩa các điểm cuối MCP server chia sẻ cho tất cả người đóng góp trong một kho lưu trữ cụ thể.)<\/i><\/p><p><b>Sai:<\/b> Cấu hình dùng chung cho dự án/kho lưu trữ phải thuộc phạm vi dự án (Project/Repository scope) và được lưu vào phiên bản mã nguồn (commit vào VCS) để cả team cùng sử dụng.<\/p><\/li><li><p><b>E. Storing API authentication keys so they are not committed to version control.<\/b><\/p><p><i>(Lưu trữ khóa xác thực API để tránh bị lưu vào quản lý phiên bản.)<\/i><\/p><p><b>Sai:<\/b> Các khóa xác thực bí mật nên được quản lý qua biến môi trường (Environment variables) hoặc trình quản lý bí mật (Secrets manager) an toàn, thay vì lưu trữ dạng plain configuration ở user-scope.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-070",
    "set": 2,
    "number": 70,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>You are compiling factors that should drive the choice between Model Context Protocol (MCP), direct API integration, and agent-to-agent handoff. Which two factors belong on the list? (Select two.) Each correct answer presents a complete solution.<\/p>",
    "options": {
      "A": "<p>Whether the vendor publishes detailed reference documentation for each candidate protocol.<\/p>",
      "B": "<p>Whether the team has prior implementation experience with any of the candidate protocols.<\/p>",
      "C": "<p> Whether the underlying transport supports encryption in transit between the integrated services.<\/p>",
      "D": "<p>Whether the integration must be portable across multiple AI clients in the ecosystem.<\/p>",
      "E": "<p>Whether the interaction is stateless and latency-sensitive or stateful and longer-running.<\/p>"
    },
    "answer": [
      "D",
      "E"
    ],
    "explanation": "<ul><li><p><b>D. Whether the integration must be portable across multiple AI clients in the ecosystem.<\/b><\/p><p><i>(Liệu tích hợp có cần tính linh hoạt/khả năng di trú cao trên nhiều AI client khác nhau trong hệ sinh thái hay không.)<\/i><\/p><p><b>Đúng:<\/b> Đây là lợi thế chính của <b>MCP<\/b> (Model Context Protocol). MCP đóng vai trò như một chuẩn giao tiếp chung (tương tự USB-C), giúp một server dữ liệu/công cụ có thể kết nối dễ dàng với nhiều AI client khác nhau mà không cần viết lại mã tích hợp cho từng client.<\/p><\/li><li><p><b>E. Whether the interaction is stateless and latency-sensitive or stateful and longer-running.<\/b><\/p><p><i>(Liệu tương tác là phi trạng thái (stateless) và nhạy cảm với độ trễ hay có trạng thái (stateful) và chạy trong thời gian dài.)<\/i><\/p><p><b>Đúng:<\/b> Lựa chọn này giúp phân biệt rõ giữa <b>Tích hợp API trực tiếp<\/b> (thường thích hợp cho các lời gọi hàm ngắn, phi trạng thái, tối ưu độ trễ thấp) với <b>Agent-to-agent handoff<\/b> (thích hợp cho các quy trình phức tạp, có giữ trạng thái ngữ cảnh và chạy qua nhiều bước xử lý kéo dài).<\/p><\/li><li><p><b>A. Whether the vendor publishes detailed reference documentation for the integration.<\/b><\/p><p><i>(Liệu nhà cung cấp có xuất bản tài liệu tham khảo chi tiết cho việc tích hợp hay không.)<\/i><\/p><p><b>Sai:<\/b> Tài liệu tham khảo là yếu tố hỗ trợ kỹ thuật chung, không phải là tiêu chí kiến trúc nền tảng để lựa chọn mô hình tích hợp.<\/p><\/li><li><p><b>B. Whether the team has prior implementation experience with the integration pattern.<\/b><\/p><p><i>(Liệu đội ngũ có kinh nghiệm triển khai trước đó với mô hình tích hợp này hay không.)<\/i><\/p><p><b>Sai:<\/b> Kinh nghiệm của team ảnh hưởng đến tiến độ thực hiện nhưng không phải yếu tố kỹ thuật mang tính quyết định bản chất giải pháp phù hợp với bài toán.<\/p><\/li><li><p><b>C. Whether the underlying transport supports encryption in transit.<\/b><\/p><p><i>(Liệu lớp truyền tải bên dưới có hỗ trợ mã hóa khi truyền dữ liệu hay không.)<\/i><\/p><p><b>Sai:<\/b> Mã hóa khi truyền dữ liệu (TLS/HTTPS) là yêu cầu bảo mật tiêu chuẩn bắt buộc cho cả 3 phương thức tích hợp trên, không phải tiêu chí so sánh phân loại.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-071",
    "set": 2,
    "number": 71,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are selecting a protocol for a single low-latency stateless tool call from a Claude-based assistant to an internal pricing service that already exposes a stable HTTP API. Which integration mechanism is the most appropriate?<\/p>",
    "options": {
      "A": "<p>A direct API call to the existing endpoint with the appropriate scoped credentials.<\/p>",
      "B": "<p>A long-lived stateful session protocol for a stateless single-call interaction.<\/p>",
      "C": "<p>A bespoke streaming protocol layered over an unrelated asynchronous message bus.<\/p>",
      "D": "<p>An agent-to-agent handoff that introduces another Claude-based agent in front of the pricing service.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>A. A direct API call to the existing endpoint with the appropriate scoped credentials.<\/b><\/p><p><i>(Một cuộc gọi API trực tiếp đến endpoint hiện có với quyền truy cập (credentials) được giới hạn phù hợp.)<\/i><\/p><p><b>Đúng:<\/b> Đối với một tác vụ đơn lẻ (single call), phi trạng thái (stateless), yêu cầu độ trễ thấp và dịch vụ mục tiêu đã có sẵn một HTTP API ổn định, việc gọi trực tiếp API (direct API call/tool call) là phương án tối ưu, đơn giản và hiệu quả nhất.<\/p><\/li><li><p><b>B. A long-lived stateful session protocol designed for multi-turn agent interactions.<\/b><\/p><p><i>(Giao thức phiên có giữ trạng thái tồn tại lâu dài được thiết kế cho các tương tác đa lượt giữa agent.)<\/i><\/p><p><b>Sai:<\/b> Đề bài yêu cầu cuộc gọi phi trạng thái (stateless) và đơn lẻ (single call), nên việc tạo một giao thức phiên giữ trạng thái (stateful) lâu dài sẽ gây phức tạp hóa hệ thống và tăng chi phí tài nguyên không cần thiết.<\/p><\/li><li><p><b>C. A bespoke streaming protocol built specifically for this pricing service.<\/b><\/p><p><i>(Một giao thức truyền dòng (streaming) tùy chỉnh được xây dựng riêng cho dịch vụ định giá này.)<\/i><\/p><p><b>Sai:<\/b> Việc tự phát triển một giao thức streaming tùy chỉnh sẽ làm gia tăng chi phí kỹ thuật không cần thiết khi hệ thống đã có sẵn HTTP API ổn định để trả về dữ liệu giá đơn giản.<\/p><\/li><li><p><b>D. An agent-to-agent handoff that delegates the pricing lookup to a dedicated pricing agent.<\/b><\/p><p><i>(Chuyển giao giữa các agent để giao nhiệm vụ tra cứu giá cho một pricing agent chuyên biệt.)<\/i><\/p><p><b>Sai:<\/b> Chuyển giao agent (agent handoff) phù hợp cho các quy trình phức tạp đòi hỏi ra quyết định đa bước. Đối với một tra cứu dữ liệu đơn giản, việc tạo thêm một agent chỉ làm tăng đáng kể độ trễ (latency) và chi phí xử lý.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-072",
    "set": 2,
    "number": 72,
    "type": "single",
    "difficulty": "",
    "question": "<p>A Claude architect observes that after a recent model-version upgrade, grounded responses began including claims not supported by the retrieved source documents. Which mitigation is most directly targeted at this failure mode?<\/p>",
    "options": {
      "A": "<p>Constrain responses to source-supported content, require citations, and add a verification step.<\/p>",
      "B": "<p>Score each new model version against a stable adversarial evaluation set.<\/p>",
      "C": "<p>Replace the shared API key with per-user OAuth tokens to improve access control.<\/p>",
      "D": "<p>Treat retrieved data as untrusted and apply input classifiers at ingestion time.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>A. Constrain responses to source-supported content, require citations, and add a verification step.<\/b><\/p><p><i>(Ràng buộc các câu trả lời chỉ nằm trong nội dung được hỗ trợ bởi nguồn, yêu cầu dẫn nguồn (citations), và thêm một bước xác minh.)<\/i><\/p><p><b>Đúng:<\/b> Hiện tượng mô hình đưa ra thông tin không có trong tài liệu nguồn gọi là ảo giác (hallucination) hoặc mất tính căn cứ (loss of groundedness). Để khắc phục trực tiếp dạng lỗi này, giải pháp hiệu quả nhất là siết chặt prompt (yêu cầu mô hình chỉ trả lời dựa trên context và phải trích dẫn nguồn) kết hợp với một bước kiểm tra/đánh giá (verification step/evaluator) để lọc bỏ các tuyên bố không có trong tài liệu.<\/p><\/li><li><p><b>B. Score each new model version against a stable adversarial evaluation set.<\/b><\/p><p><i>(Đánh giá từng phiên bản mô hình mới dựa trên một tập kiểm thử tấn công giả định (adversarial evaluation set) ổn định.)<\/i><\/p><p><b>Sai:<\/b> Việc kiểm thử này giúp phát hiện lỗ hổng bảo mật hoặc độ bền của mô hình trước các câu lệnh cố tình chơi xỏ (prompt injection/adversarial attacks), không phải là giải pháp trực tiếp để ngăn chặn lỗi ảo giác khi truy xuất tài liệu thông thường.<\/p><\/li><li><p><b>C. Replace the shared API key with per-user OAuth tokens to improve access control.<\/b><\/p><p><i>(Thay thế API key dùng chung bằng OAuth token theo từng người dùng để cải thiện kiểm soát truy cập.)<\/i><\/p><p><b>Sai:<\/b> Đây là biện pháp quản lý quyền truy cập và bảo mật danh tính (authentication/authorization), hoàn toàn không liên quan đến chất lượng hay độ chính xác của câu trả lời do mô hình tạo ra.<\/p><\/li><li><p><b>D. Treat retrieved data as untrusted and apply input classifiers at ingestion time.<\/b><\/p><p><i>(Coi dữ liệu truy xuất được là không đáng tin cậy và áp dụng các bộ phân loại đầu vào tại thời điểm nạp dữ liệu.)<\/i><\/p><p><b>Sai:<\/b> Phương pháp này dùng để phòng chống rủi ro dữ liệu bị độc hại hoặc bị chèn mã độc (Indirect Prompt Injection) trong tài liệu nguồn, chứ không giải quyết được việc mô hình tự bịa thêm thông tin ngoài tài liệu lành nghề.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-073",
    "set": 2,
    "number": 73,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are defining escalation criteria for ambiguous cases in an automated workflow. Which set of criteria best supports consistent escalation?<\/p>",
    "options": {
      "A": "<p>No escalation criteria; the model decides independently on every turn whether to escalate, without explicit confidence thresholds, impact categories, or classifier-based ambiguity flags.<\/p>",
      "B": "<p>Escalation only after an affected customer has contacted support to complain, after the automated workflow has already completed without human review.<\/p>",
      "C": "<p>Escalation at the discretion of whoever is available when the team's on-call engineer has spare capacity, without a defined threshold, category, or ambiguity criterion.<\/p>",
      "D": "<p>A confidence score below a defined threshold, presence of high-impact decision categories, ambiguity flags raised by content classifiers, and the user's explicit request for review.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><em>Nguồn đề thi không cung cấp phần giải thích cho câu hỏi này.<\/em><\/p>"
  },
  {
    "id": "CCAR-P-074",
    "set": 2,
    "number": 74,
    "type": "single",
    "difficulty": "",
    "question": "<p>After a prompt-template update, several previously passing test cases now produce unexpected outputs. Which test type is specifically designed to detect this category of failure?<\/p>",
    "options": {
      "A": "<p>Integration tests that verify end-to-end behavior across pipeline components.<\/p>",
      "B": "<p>Adversarial tests designed to probe for safety and injection vulnerabilities.<\/p>",
      "C": "<p>Regression tests scored against a stable reference set of known-good behavior.<\/p>",
      "D": "<p>Smoke tests that verify core paths are reachable after each deployment.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>C. Regression tests scored against a stable reference set of known-good behavior.<\/b><\/p><p><i>(Kiểm thử hồi quy (regression tests) được chấm điểm dựa trên một tập tham chiếu ổn định gồm các hành vi đã biết là đúng/tốt.)<\/i><\/p><p><b>Đúng:<\/b> Kiểm thử hồi quy được thiết kế chính xác để phát hiện xem những thay đổi mới trong mã nguồn hoặc prompt có làm hỏng các tính năng hay kết quả vốn đang hoạt động bình thường trước đó hay không.<\/p><\/li><li><p><b>A. Integration tests that verify end-to-end behavior across pipeline components.<\/b><\/p><p><i>(Kiểm thử tích hợp để xác minh hành vi đầu-cuối giữa các thành phần trong đường ống xử lý.)<\/i><\/p><p><b>Sai:<\/b> Kiểm thử tích hợp nhằm đảm bảo các thành phần (modules/APIs) tương tác và giao tiếp với nhau trơn tru, không tập trung vào việc phát hiện sự thoái hóa/suy giảm chất lượng đầu ra sau khi chỉnh sửa prompt.<\/p><\/li><li><p><b>B. Adversarial tests designed to probe for safety and injection vulnerabilities.<\/b><\/p><p><i>(Kiểm thử tấn công giả định được thiết kế để dò tìm các lỗ hổng an toàn và tấn công chèn lệnh - prompt injection.)<\/i><\/p><p><b>Sai:<\/b> Loại kiểm thử này dùng để đánh giá khả năng bảo mật và độ an toàn của mô hình trước các đầu vào độc hại, không dùng để kiểm tra logic đầu ra thông thường.<\/p><\/li><li><p><b>D. Smoke tests that verify core paths are reachable after each deployment.<\/b><\/p><p><i>(Kiểm thử khói (smoke tests) để xác minh các luồng chính có thể truy cập được sau mỗi lần triển khai.)<\/i><\/p><p><b>Sai:<\/b> Smoke test chỉ kiểm tra nhanh xem hệ thống có chạy được không (không bị sập/lỗi nghiêm trọng) chứ không đánh giá chi tiết chất lượng hay sự thay đổi độ chính xác của kết quả đầu ra.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-075",
    "set": 2,
    "number": 75,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>A Claude architect at a health services organization is defining evaluation metrics for a clinical-summary pipeline. The pipeline must remain within a per-query cost ceiling and must never surface patient data to unauthorized roles. Which two metrics directly address these requirements? (Select two.)<\/p>",
    "options": {
      "A": "<p>BLEU score computed against a human-annotated reference summary set.<\/p>",
      "B": "<p>Role-based access-control enforcement rate measured on a red-team dataset.<\/p>",
      "C": "<p>Throughput measured as successful requests processed per minute.<\/p>",
      "D": "<p>Per-query token cost measured against the defined cost ceiling.<\/p>",
      "E": "<p>Response latency at the 95th percentile across a one-week sample window.<\/p>"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "<ul><li><p><b>B. Role-based access-control enforcement rate measured on a red-team dataset.<\/b><\/p><p><i>(Tỷ lệ thực thi kiểm soát truy cập dựa trên vai trò (RBAC) được đo lường trên tập dữ liệu red-team.)<\/i><\/p><p><b>Đúng:<\/b> Đáp ứng trực tiếp yêu cầu <b>bảo mật/quyền truy cập<\/b> (\"không bao giờ tiết lộ dữ liệu bệnh nhân cho các vai trò không được cấp phép\"). Việc kiểm thử red-team giúp đo lường chính xác khả năng ngăn chặn rò rỉ dữ liệu của hệ thống.<\/p><\/li><li><p><b>D. Per-query token cost measured against the defined cost ceiling.<\/b><\/p><p><i>(Chi phí token trên mỗi truy vấn được đo lường so với mức chi phí trần đã xác định.)<\/i><\/p><p><b>Đúng:<\/b> Đáp ứng trực tiếp yêu cầu <b>chi phí<\/b> (\"nằm trong mức chi phí trần cho mỗi truy vấn\").<\/p><\/li><li><p><b>A. BLEU score computed against a human-annotated reference summary set.<\/b><\/p><p><i>(Điểm BLEU được tính toán dựa trên tập tóm tắt tham chiếu do con người gán nhãn.)<\/i><\/p><p><b>Sai:<\/b> Điểm BLEU dùng để đánh giá chất lượng/độ tương đồng ngôn ngữ của bản tóm tắt, không đo lường chi phí hay kiểm soát truy cập dữ liệu.<\/p><\/li><li><p><b>C. Throughput measured as successful requests processed per minute.<\/b><\/p><p><i>(Sản lượng xử lý được đo bằng số yêu cầu thành công trên mỗi phút.)<\/i><\/p><p><b>Sai:<\/b> Chỉ số này đo lường hiệu năng/tải của hệ thống (performance/throughput), không giải quyết yêu cầu về trần chi phí hay bảo mật thông tin bệnh nhân.<\/p><\/li><li><p><b>E. Response latency at the 95th percentile across a one-week sample window.<\/b><\/p><p><i>(Độ trễ phản hồi ở bách phân vị thứ 95 trong cửa sổ mẫu một tuần.)<\/i><\/p><p><b>Sai:<\/b> Đây là chỉ số đo lường độ trễ (latency), không liên quan đến chi phí token hay quyền truy cập dữ liệu.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-076",
    "set": 2,
    "number": 76,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are choosing the level of detail for an implementation guide. The audience is a delivery team that will build the deployment. Which guidance composition best serves them?<\/p>",
    "options": {
      "A": "<p>Component responsibilities, contracts between components, sequence diagrams of the dominant flows, configuration parameters with defaults, and operational runbooks.<\/p>",
      "B": "<p>Component responsibilities and interface contracts only, without sequence diagrams of the dominant flows, configuration parameters with defaults, or runbooks to guide operational tasks.<\/p>",
      "C": "<p>An architecture overview and sequence diagrams for the dominant flows, without interface contracts, configuration-parameter tables, or operational runbooks for the delivery team to follow.<\/p>",
      "D": "<p>An architecture overview and a list of known limitations, without component-level diagrams, interface contracts, configuration parameters, or operational runbooks to support implementation.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>A. Component responsibilities, contracts between components, sequence diagrams of the dominant flows, configuration parameters with defaults, and operational runbooks.<\/b><\/p><p><i>(Trách nhiệm của từng thành phần, hợp đồng giao tiếp (contracts) giữa các thành phần, biểu đồ tuần tự (sequence diagrams) của các luồng chính, các tham số cấu hình kèm giá trị mặc định, và tài liệu hướng dẫn vận hành (runbooks).)<\/i><\/p><p><b>Đúng:<\/b> Đội ngũ thực thi/triển khai (delivery team) cần một tài liệu kỹ thuật toàn diện, có tính thực tiễn cao để vừa viết code, tích hợp các thành phần, vừa triển khai và vận hành được hệ thống. Tất cả các chi tiết về giao tiếp, tham số cấu hình và runbook đều cần thiết cho công việc của họ.<\/p><\/li><li><p><b>B. Component responsibilities and interface contracts only, without sequence diagrams or operational runbooks.<\/b><\/p><p><i>(Chỉ gồm trách nhiệm thành phần và hợp đồng giao diện, không có biểu đồ tuần tự hay tài liệu vận hành.)<\/i><\/p><p><b>Sai:<\/b> Thiếu thông tin về luồng thực thi (sequence diagrams) và các hướng dẫn vận hành/cấu hình cần thiết cho quá trình triển khai thực tế.<\/p><\/li><li><p><b>C. An architecture overview and sequence diagrams for the dominant flows, without configuration parameters or runbooks.<\/b><\/p><p><i>(Tổng quan kiến trúc và biểu đồ tuần tự cho các luồng chính, không có tham số cấu hình hay tài liệu vận hành.)<\/i><\/p><p><b>Sai:<\/b> Tài liệu tổng quan quá sơ lược, thiếu chi tiết về tham số cấu hình và runbook để đội ngũ delivery có thể cài đặt và duy trì hệ thống.<\/p><\/li><li><p><b>D. An architecture overview and a list of known limitations, without implementation details.<\/b><\/p><p><i>(Tổng quan kiến trúc và danh sách các hạn chế đã biết, không có chi tiết triển khai.)<\/i><\/p><p><b>Sai:<\/b> Đây là dạng tài liệu tóm tắt dành cho cấp quản lý hoặc kiến trúc sư (high-level design/executive summary), hoàn toàn thiếu thông tin kỹ thuật chi tiết để đội ngũ delivery triển khai.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-077",
    "set": 2,
    "number": 77,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are identifying the highest-impact optimization for a deployment whose token cost is dominated by a long, repeated system prompt and a large retrieved context per request. Which optimization most directly targets the dominant cost driver?<\/p>",
    "options": {
      "A": "<p>Increase retrieval depth on every request to maximize recall, worsening the dominant cost driver by adding more retrieved tokens per request rather than reducing them.<\/p>",
      "B": "<p>Add additional repeated content to the system prompt to give the model more guidance.<\/p>",
      "C": "<p>Move the long, repeated system prompt into a cacheable prefix and trim retrieved context to the spans relevant to each query.<\/p>",
      "D": "<p>Switch every request to the heaviest available model to maximize output quality, accepting that higher per-request inference cost compounds rather than addresses the dominant cost driver.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><strong>Đáp án đúng: C.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><p><b>C. Move the long, repeated system prompt into a cacheable prefix and trim retrieved context to the spans relevant to each query.<\/b><\/p><p><i>(Chuyển system prompt dài, lặp lại thành một tiền tố có thể lưu vào bộ nhớ đệm (prompt caching) và cắt gọt ngữ cảnh truy xuất chỉ còn lại các đoạn thực sự liên quan đến từng truy vấn.)<\/i><\/p><p><b>Đúng:<\/b> Phương án này giải quyết trực tiếp cả hai yếu tố gây tốn chi phí nhất:<\/p><ol><li><p>Dùng <b>Prompt Caching<\/b> cho system prompt cố định giúp giảm mạnh chi phí input token cho các phần lặp lại.<\/p><\/li><li><p>Cắt gọt (trim) dữ liệu truy xuất giúp giảm bớt dung lượng context thừa gửi kèm trong mỗi request.<\/p><\/li><\/ol><\/li><li><p><b>A. Increase retrieval depth to surface more relevant documents per request.<\/b><\/p><p><i>(Tăng độ sâu truy xuất để lấy ra nhiều tài liệu liên quan hơn cho mỗi truy vấn.)<\/i><\/p><p><b>Sai:<\/b> Việc lấy thêm nhiều tài liệu sẽ làm tăng kích thước ngữ cảnh (context size), dẫn đến chi phí token tăng lên thay vì giảm đi.<\/p><\/li><li><p><b>B. Add additional repeated content to the system prompt to improve grounding.<\/b><\/p><p><i>(Thêm nội dung lặp lại vào system prompt để cải thiện tính căn cứ.)<\/i><\/p><p><b>Sai:<\/b> Thêm nội dung vào system prompt càng làm tăng lượng token và chi phí xử lý.<\/p><\/li><li><p><b>D. Switch every request to the heaviest available model for maximum quality.<\/b><\/p><p><i>(Chuyển tất cả các truy vấn sang mô hình lớn nhất/mạnh nhất hiện có để đạt chất lượng tối đa.)<\/i><\/p><p><b>Sai:<\/b> Chuyển sang mô hình lớn hơn sẽ làm chi phí token trên mỗi request tăng lên rất nhiều, đi ngược lại mục tiêu tối ưu hóa chi phí.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-078",
    "set": 2,
    "number": 78,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are defining transparency practices for a customer-facing assistant whose responses are materially shaped by AI. Which transparency practice most directly supports responsible deployment?<\/p>",
    "options": {
      "A": "<p>Misrepresent the AI's role in producing responses in order to make the assistant feel more trustworthy or more human, undermining informed user consent and organizational transparency.<\/p>",
      "B": "<p> Refuse to answer any user question about how the responses were produced or whether AI was involved, treating the AI's role as confidential operational information.<\/p>",
      "C": "<p>Disclose AI involvement to end users in line with the organization's transparency policy and provide a documented path to reach a human when needed.<\/p>",
      "D": "<p>Disclose AI involvement only to internal staff and operators while withholding that information from the end users whose interactions are materially shaped by the AI system.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><strong>Đáp án đúng: C.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><p><b>C. Disclose AI involvement to end users in line with the organization's transparency policy and provide a documented path to reach a human when needed.<\/b><\/p><p><i>(Công khai việc sử dụng AI cho người dùng cuối theo chính sách minh bạch của tổ chức và cung cấp một quy trình rõ ràng để kết nối với con người khi cần thiết.)<\/i><\/p><p><b>Đúng:<\/b> Triển khai AI có trách nhiệm đòi hỏi người dùng cuối phải được biết họ đang tương tác với AI và luôn có lựa chọn chuyển tiếp sang hỗ trợ từ con người (human-in-the-loop) khi AI không đáp ứng được yêu cầu hoặc khi phát sinh sự cố.<\/p><\/li><li><p><b>A. Misrepresent the AI's role to avoid user skepticism about AI-generated content.<\/b><\/p><p><i>(Bóp méo/giả mạo vai trò của AI để tránh sự hoài nghi của người dùng về nội dung do AI tạo ra.)<\/i><\/p><p><b>Sai:<\/b> Đây là hành vi lừa dối người dùng, vi phạm nghiêm trọng các nguyên tắc đạo đức và tính minh bạch trong AI.<\/p><\/li><li><p><b>B. Refuse to answer any user question about how the responses were produced.<\/b><\/p><p><i>(Từ chối trả lời bất kỳ câu hỏi nào của người dùng về cách các phản hồi được tạo ra.)<\/i><\/p><p><b>Sai:<\/b> Việc thiếu giải thích và thiếu giải trình đi ngược lại mục tiêu minh bạch thông tin.<\/p><\/li><li><p><b>D. Disclose AI involvement only to internal staff and operators while withholding that information from the end users.<\/b><\/p><p><i>(Chỉ tiết lộ việc sử dụng AI cho nhân viên nội bộ và người vận hành, đồng thời giấu thông tin đó đối với người dùng cuối.)<\/i><\/p><p><b>Sai:<\/b> Giấu thông tin với người dùng cuối (end-users) không đáp ứng tiêu chuẩn minh bạch đối với dịch vụ hướng tới khách hàng (customer-facing).<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-079",
    "set": 2,
    "number": 79,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>An engineering organization is adopting Claude Code across 200 developers. A team lead proposes that AI-generated pull requests bypass standard code review for changes under 50 lines. Which two Diligence-competency objections should you raise? (Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Removing review eliminates the verification mechanism required for AI-generated output across the workflow.<\/p>",
      "B": "<p>Code-review capacity should be expanded to handle every code change submitted across the team.<\/p>",
      "C": "<p> The threshold should be increased to 200 lines to capture more changes.<\/p>",
      "D": "<p> AI-generated pull requests should be rejected by default across the organization.<\/p>",
      "E": "<p>Line count is a poor proxy for the actual risk introduced by a code change.<\/p>"
    },
    "answer": [
      "A",
      "E"
    ],
    "explanation": "<p><strong>Đáp án đúng: A, E.<\/strong> Các phương án này bổ sung cho nhau và cùng đáp ứng đầy đủ những yêu cầu được nêu trong tình huống.<\/p><ul><li><p><b>A. Removing review eliminates the verification mechanism required for AI-generated output across the workflow.<\/b><\/p><p><i>(Việc loại bỏ quy trình review sẽ xóa bỏ cơ chế xác minh cần thiết đối với đầu ra do AI tạo ra trong toàn bộ quy trình làm việc.)<\/i><\/p><p><b>Đúng:<\/b> Nguyên tắc cẩn trọng (Diligence) trong việc triển khai AI yêu cầu mọi mã nguồn do AI tạo ra phải được kiểm chứng/xác minh trước khi đưa vào sản xuất. Loại bỏ hoàn toàn bước review đồng nghĩa với việc loại bỏ hàng rào bảo vệ và kiểm soát rủi ro quan trọng này.<\/p><\/li><li><p><b>E. Line count is a poor proxy for the actual risk introduced by a code change.<\/b><\/p><p><i>(Số lượng dòng code là một tiêu chí đại diện kém để đánh giá rủi ro thực sự mà một thay đổi mã nguồn mang lại.)<\/i><\/p><p><b>Đúng:<\/b> Một thay đổi chỉ tốn 1–2 dòng code (ví dụ: sửa tham số cấu hình bảo mật, đổi logic phân quyền, hay sửa đường dẫn API) vẫn có thể gây ra sự cố nghiêm trọng hoặc lỗ hổng bảo mật lớn. Do đó, dựa vào số dòng code (&lt; 50 dòng) để bỏ qua review là hoàn toàn không hợp lý.<\/p><\/li><li><p><b>B. Code-review capacity should be expanded to handle every code change submitted across the team.<\/b><\/p><p><i>(Năng lực review code nên được mở rộng để xử lý mọi thay đổi mã nguồn được gửi lên trong toàn đội ngũ.)<\/i><\/p><p><b>Sai:<\/b> Đây không phải là phản đối mang tính cốt lõi về mặt cẩn trọng đối với đề xuất, mà chỉ là một đề xuất quản lý nguồn lực.<\/p><\/li><li><p><b>C. The threshold should be increased to 200 lines to make the bypass policy more useful.<\/b><\/p><p><i>(Ngưỡng nên được tăng lên 200 dòng để chính sách bỏ qua trở nên hữu ích hơn.)<\/i><\/p><p><b>Sai:<\/b> Tăng số dòng lên chỉ làm tăng thêm rủi ro và làm trầm trọng hơn vấn đề bỏ qua kiểm duyệt.<\/p><\/li><li><p><b>D. AI-generated pull requests should be rejected by default regardless of size.<\/b><\/p><p><i>(Các pull request do AI tạo ra nên bị từ chối theo mặc định bất kể kích thước.)<\/i><\/p><p><b>Sai:<\/b> Quan điểm này quá cực đoan và phủ nhận hoàn toàn giá trị của công cụ AI. AI vẫn có thể hỗ trợ lập trình hiệu quả miễn là có quy trình kiểm duyệt (human-in-the-loop) phù hợp.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-080",
    "set": 2,
    "number": 80,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are defining an SLA for a Claude-based assistant. Which SLA definition is most operationally meaningful?<\/p>",
    "options": {
      "A": "<p>A target tied to a stakeholder sentiment measure such as “the team feels satisfied,” which cannot be measured objectively or used to trigger a documented breach response.<\/p>",
      "B": "<p>A measurable target with a defined metric, threshold, evaluation window, and consequence for breach—for example, 'p95 per-request latency under 800 ms over a 28-day window.'<\/p>",
      "C": "<p>A qualitative commitment such as “the system will be fast and reliable,” which names no metric, threshold, or evaluation window.<\/p>",
      "D": "<p>A target that names the metric and threshold but omits the evaluation window and breach consequence, leaving compliance periods and remediation triggers undefined.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p><strong>Đáp án đúng: B.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><p><b>B. A measurable target with a defined metric, threshold, evaluation window, and consequence for breach—for example, 'p95 per-request latency under 800 ms over a 28-day window.'<\/b><\/p><p><i>(Một mục tiêu có thể đo lường được với chỉ số, ngưỡng, cửa sổ đánh giá và hậu quả vi phạm được xác định rõ ràng—ví dụ: 'độ trễ p95 cho mỗi yêu cầu dưới 800 ms trong khoảng thời gian 28 ngày'.)<\/i><\/p><p><b>Đúng:<\/b> Một SLA (Service Level Agreement) có ý nghĩa về mặt vận hành phải đáp ứng đầy đủ 4 yếu tố cấu thành bắt buộc: chỉ số đo lường (metric), ngưỡng định lượng (threshold), khung thời gian đánh giá (evaluation window) và chế tài/hậu quả khi vi phạm (consequence for breach).<\/p><\/li><li><p><b>A. A target tied to a stakeholder sentiment measure with no defined threshold or evaluation window.<\/b><\/p><p><i>(Một mục tiêu gắn liền với cảm nhận của các bên liên quan mà không có ngưỡng hoặc cửa sổ đánh giá được xác định.)<\/i><\/p><p><b>Sai:<\/b> Cảm nhận là định tính, thiếu các chỉ số kỹ thuật và cửa sổ thời gian cụ thể nên không thể theo dõi hay đo lường chính xác.<\/p><\/li><li><p><b>C. A qualitative commitment such as 'the system will be fast and reliable,' without measurable criteria.<\/b><\/p><p><i>(Một cam kết định tính như 'hệ thống sẽ nhanh và đáng tin cậy,' mà không có tiêu chí đo lường.)<\/i><\/p><p><b>Sai:<\/b> Đây chỉ là một tuyên bố nguyện vọng (slogan), không có giá trị kỹ thuật hay pháp lý đối với một SLA.<\/p><\/li><li><p><b>D. A target that names the metric and threshold but omits the evaluation window and breach consequence.<\/b><\/p><p><i>(Một mục tiêu gọi tên chỉ số và ngưỡng nhưng bỏ qua cửa sổ đánh giá và hậu quả vi phạm.)<\/i><\/p><p><b>Sai:<\/b> Thiếu khung thời gian (ví dụ: tính theo ngày hay theo tháng) và chế tài xử lý thì không đủ điều kiện để thực thi và giám sát vận hành thực tế.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-081",
    "set": 2,
    "number": 81,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>A Claude architect is designing a HIPAA-compliant pipeline that processes patient records. Which two design decisions directly support HIPAA compliance requirements? (Select two.)<\/p>",
    "options": {
      "A": "<p>Setting max_tokens to a low value to minimize the volume of text generated per request.<\/p>",
      "B": "<p>Selecting the highest-capability Claude model to maximize diagnostic accuracy.<\/p>",
      "C": "<p>Enforcing role-based access controls so that PHI is retrievable only by authorized personnel.<\/p>",
      "D": "<p>Ensuring patient data is never included in training feedback loops sent to the model provider without a BAA in place.<\/p>",
      "E": "<p>Using streaming responses to reduce perceived latency for clinical users.<\/p>"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "<p><strong>Đáp án đúng: C, D.<\/strong> Các phương án này bổ sung cho nhau và cùng đáp ứng đầy đủ những yêu cầu được nêu trong tình huống.<\/p><ul><li><p><b>C. Enforcing role-based access controls so that PHI is retrievable only by authorized personnel.<\/b><\/p><p><i>(Thực thi kiểm soát truy cập dựa trên vai trò (RBAC) để thông tin sức khỏe cá nhân (PHI) chỉ có thể được truy xuất bởi nhân sự được cấp phép.)<\/i><\/p><p><b>Đúng:<\/b> Quy định bảo mật HIPAA (HIPAA Security Rule) bắt buộc phải có các biện pháp kiểm soát truy cập kỹ thuật (Access Control) để đảm bảo chỉ những người có thẩm quyền mới được xem hoặc xử lý thông tin sức khỏe được bảo vệ (PHI).<\/p><\/li><li><p><b>D. Ensuring patient data is never included in training feedback loops sent to the model provider without a BAA in place.<\/b><\/p><p><i>(Đảm bảo dữ liệu bệnh nhân không bao giờ bị đưa vào các vòng phản hồi huấn luyện (training feedback loops) gửi cho nhà cung cấp mô hình khi chưa có Thỏa thuận đối tác kinh doanh (BAA).)<\/i><\/p><p><b>Đúng:<\/b> Theo luật HIPAA, việc chia sẻ PHI với bên thứ ba (như nhà cung cấp AI) bắt buộc phải có một Thỏa thuận BAA (Business Associate Agreement) được ký kết legal để đảm bảo trách nhiệm bảo mật dữ liệu và ngăn chặn việc dùng dữ liệu đó để huấn luyện mô hình.<\/p><\/li><li><p><b>A. Setting max_tokens to a low value to reduce the length of generated summaries.<\/b><\/p><p><i>(Đặt max_tokens ở giá trị thấp để giảm độ dài của bản tóm tắt được tạo ra.)<\/i><\/p><p><b>Sai:<\/b> Đây là kĩ thuật giới hạn độ dài đầu ra (output truncation) để tối ưu chi phí/hiệu năng, không có giá trị pháp lý hay bảo mật trong việc tuân thủ quy định HIPAA.<\/p><\/li><li><p><b>B. Selecting the highest-capability Claude model to maximize summary quality.<\/b><\/p><p><i>(Lựa chọn mô hình Claude có năng lực cao nhất để tối đa hóa chất lượng tóm tắt.)<\/i><\/p><p><b>Sai:<\/b> Chọn mô hình mạnh hơn giúp cải thiện độ chính xác/chất lượng phản hồi, không liên quan đến việc đáp ứng các tiêu chuẩn an toàn thông tin của HIPAA.<\/p><\/li><li><p><b>E. Using streaming responses to reduce perceived latency for clinical users.<\/b><\/p><p><i>(Sử dụng phản hồi dạng truyền dòng (streaming) để giảm độ trễ cảm nhận cho người dùng lâm sàng.)<\/i><\/p><p><b>Sai:<\/b> Đây là tối ưu hóa trải nghiệm người dùng (UX/latency), không phải tiêu chuẩn pháp lý hay bảo mật tuân thủ HIPAA.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-082",
    "set": 2,
    "number": 82,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>You are designing a human-in-the-loop validation workflow for a new Claude-based deployment and must complete the design steps before piloting the workflow with a representative subset of traffic. Which two steps must be completed BEFORE piloting the workflow with a representative subset of traffic? <\/p><p>(Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Define the sampling strategy and the escalation criteria at each oversight point in the pipeline.<\/p>",
      "B": "<p>Iterate the workflow design based on observed pilot findings before broader rollout to production.<\/p>",
      "C": "<p>Onboard the reviewer pool with role-specific training on the check criteria and escalation procedures.<\/p>",
      "D": "<p>Document the workflow with check criteria, escalation paths, and service-level agreements (SLAs) for each step.<\/p>",
      "E": "<p> Identify the decision points in the pipeline that require human oversight by impact and reversibility.<\/p>"
    },
    "answer": [
      "A",
      "E"
    ],
    "explanation": "<p><strong>Đáp án đúng: A, E.<\/strong> Các phương án này bổ sung cho nhau và cùng đáp ứng đầy đủ những yêu cầu được nêu trong tình huống.<\/p><ul><li><p><b>A. Define the sampling strategy and the escalation criteria at each oversight point in the pipeline.<\/b><\/p><p><i>(Xác định chiến lược lấy mẫu và các tiêu chí leo thang tại mỗi điểm giám sát trong đường ống xử lý.)<\/i><\/p><p><b>Đúng:<\/b> Để bắt đầu chạy thử nghiệm (pilot), bạn phải biết chính xác sẽ chọn dữ liệu nào để gửi cho con người duyệt (sampling strategy) và điều kiện nào sẽ kích hoạt việc chuyển giao xử lý (escalation criteria). Thiếu hai tiêu chí này thì quy trình thử nghiệm không thể vận hành được.<\/p><\/li><li><p><b>E. Identify the decision points in the pipeline that require human oversight by impact and reversibility.<\/b><\/p><p><i>(Xác định các điểm ra quyết định trong đường ống xử lý cần có sự giám sát của con người dựa trên mức độ ảnh hưởng và khả năng đảo ngược.)<\/i><\/p><p><b>Đúng:<\/b> Đây là bước kiến trúc ban đầu quan trọng nhất: phân tích các điểm rủi ro trong hệ thống dựa trên tác động (impact) và khả năng sửa chữa/đảo ngược (reversibility) để biết vị trí nào bắt buộc phải gắn con người vào kiểm duyệt trước khi chạy thử.<\/p><\/li><li><p><b>B. Iterate the workflow design based on observed pilot findings.<\/b><\/p><p><i>(Lặp lại việc cải tiến thiết kế quy trình dựa trên các phát hiện quan sát được từ đợt thử nghiệm.)<\/i><\/p><p><b>Sai:<\/b> Bước này diễn ra <b>trong hoặc SAU<\/b> quá trình thử nghiệm (pilot), không phải là bước chuẩn bị trước khi thử nghiệm.<\/p><\/li><li><p><b>C. Onboard the reviewer pool with role-specific training before any traffic is routed.<\/b><\/p><p><i>(Đào tạo đội ngũ người kiểm duyệt theo từng vai trò cụ thể trước khi điều hướng bất kỳ lưu lượng truy cập nào.)<\/i><\/p><p><b>Sai:<\/b> Việc đào tạo đội ngũ là bước chuẩn bị triển khai thực tế (operational onboarding), không phải là một bước thuộc giai đoạn \"thiết kế quy trình\" (design steps) cốt lõi trước khi pilot.<\/p><\/li><li><p><b>D. Document the workflow with check criteria and publish it to the team wiki.<\/b><\/p><p><i>(Tạo tài liệu quy trình cùng các tiêu chí kiểm tra và xuất bản lên wiki của đội ngũ.)<\/i><\/p><p><b>Sai:<\/b> Tài liệu hóa đầy đủ thường được hoàn thiện và cập nhật sau khi quy trình đã được thử nghiệm, tinh chỉnh và chốt phương án chính thức.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-083",
    "set": 2,
    "number": 83,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>You are compiling team-setup practices for a Claude Code rollout across an engineering organization. Which two practices belong on the list? (Select two.) Each correct answer presents a complete solution.<\/p>",
    "options": {
      "A": "<p>Use project scope for team-shared Model Context Protocol (MCP) servers and permission rules under version control.<\/p>",
      "B": "<p>Apply managed configuration centrally for security-critical settings that must not be overridden by individual engineers.<\/p>",
      "C": "<p>Use local scope for security-critical permission rules so each engineer can adapt them to ongoing work.<\/p>",
      "D": "<p>Use user scope for team-shared MCP servers so every engineer on the team has consistent access.<\/p>",
      "E": "<p> Use project scope for personal editor preferences so the preferences apply consistently within the project.<\/p>"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "<p><strong>Đáp án đúng: A, B.<\/strong> Các phương án này bổ sung cho nhau và cùng đáp ứng đầy đủ những yêu cầu được nêu trong tình huống.<\/p><ul><li><p><b>A. Use project scope for team-shared Model Context Protocol (MCP) servers and permission rules under version control.<\/b><\/p><p><i>(Sử dụng phạm vi dự án (project scope) cho các MCP server dùng chung trong team và các quy tắc phân quyền được lưu trữ trong hệ thống quản lý phiên bản - VCS.)<\/i><\/p><p><b>Đúng:<\/b> Phạm vi dự án (Project scope) được lưu trực tiếp vào tệp cấu hình của dự án (ví dụ: <code>.claudecode/<\/code> hoặc các tệp cấu hình repo) và được commit vào VCS để tất cả các thành viên trong team khi clone repo về đều có chung các MCP server và quy tắc quyền giống nhau.<\/p><\/li><li><p><b>B. Apply managed configuration centrally for security-critical settings that must not be overridden by individual engineers.<\/b><\/p><p><i>(Áp dụng cấu hình quản trị trung tâm (managed configuration) cho các thiết lập quan trọng về bảo mật để đảm bảo kỹ sư cá nhân không thể ghi đè.)<\/i><\/p><p><b>Đúng:<\/b> Đối với các chính sách bảo mật bắt buộc toàn công ty (security policy), hệ thống cấu hình quản trị trung tâm (Managed/Organization configuration) được dùng để khóa các thiết lập, ngăn lập trình viên tự ý thay đổi hoặc vượt qua quy định an toàn.<\/p><\/li><li><p><b>C. Use local scope for security-critical permission rules so each engineer can customize them.<\/b><\/p><p><i>(Sử dụng phạm vi cục bộ (local scope) cho các quy tắc phân quyền quan trọng về bảo mật để mỗi kỹ sư có thể tự tùy chỉnh.)<\/i><\/p><p><b>Sai:<\/b> Các quy tắc bảo mật quan trọng tuyệt đối không được để ở local scope cho cá nhân tự chỉnh sửa, vì sẽ gây ra lỗ hổng bảo mật và sự không nhất quán giữa các máy lập trình viên.<\/p><\/li><li><p><b>D. Use user scope for team-shared MCP servers so the definitions are available everywhere.<\/b><\/p><p><i>(Sử dụng phạm vi người dùng (user scope) cho các MCP server dùng chung trong team để các định nghĩa có sẵn ở mọi nơi.)<\/i><\/p><p><b>Sai:<\/b> User scope chỉ áp dụng cho cá nhân người dùng đó trên máy họ. Nếu cấu hình MCP server dùng chung ở user scope thì các thành viên khác trong team sẽ không nhận được cấu hình này.<\/p><\/li><li><p><b>E. Use project scope for personal editor preferences so the preferences apply consistently within the project.<\/b><\/p><p><i>(Sử dụng phạm vi dự án (project scope) cho các tùy chọn trình biên soạn cá nhân để áp dụng nhất quán trong dự án.)<\/i><\/p><p><b>Sai:<\/b> Các sở thích giao diện/trình biên soạn cá nhân (personal editor preferences) thuộc về <b>User scope<\/b>, không nên đưa vào Project scope vì mỗi lập trình viên có thói quen và giao diện làm việc khác nhau.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-084",
    "set": 2,
    "number": 84,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are reviewing a customer-support agent's configuration. Each candidate tool falls into one of four categories: <\/p><p>(1) required to complete defined tasks, <\/p><p>(2) frequently used and reduces handoffs, <\/p><p>(3) occasionally useful for unrelated work, <\/p><p>(4) speculative future utility. <\/p><p>Which categories should typically remain in the agent configuration?<\/p>",
    "options": {
      "A": "<p>Only category 3, because occasionally useful tools for unrelated work provide broader coverage and should take priority over tools required for the agent's defined tasks.<\/p>",
      "B": "<p>Only category 4, because speculative future-utility tools provide the most flexibility and should be configured even when no defined task currently requires them.<\/p>",
      "C": "<p>Categories 1 and 2 only, because they map to defined tasks and the agent's regular hand-offs.<\/p>",
      "D": "<p>All four categories, because broader tool access is categorically better for agent performance regardless of whether the tools map to defined tasks or regular hand-offs.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><strong>Đáp án đúng: C.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Only category 3, because occasional utility is the threshold for inclusion.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Only category 4, because speculative tools prepare the agent for future needs.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Đúng:<\/strong> Phương án “Categories 1 and 2 only, because they map to defined tasks and the agent's regular hand-offs.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>D — Sai:<\/strong> Không chọn “All four categories, to ensure the agent has maximum flexibility.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-085",
    "set": 2,
    "number": 85,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are documenting an architectural decision to support future audit and onboarding. Which artifact is the strongest fit?<\/p>",
    "options": {
      "A": "<p>A slide deck in a presentation folder with no accompanying written rationale.<\/p>",
      "B": "<p>A code comment in a single file that contains an opinion of one engineer.<\/p>",
      "C": "<p>An Architecture Decision Record that states the context, the decision, the alternatives considered, the consequences, and the date and authors.<\/p>",
      "D": "<p>A short verbal note shared during a hallway conversation with no written record.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><strong>Đáp án đúng: C.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “A slide deck in a presentation folder with no accompanying written rationale.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>B — Sai:<\/strong> Không chọn “A code comment in a single file that contains an opinion of one engineer.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Đúng:<\/strong> Phương án “An Architecture Decision Record that states the context, the decision, the alternatives considered, the consequences, and the date and authors.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>D — Sai:<\/strong> Không chọn “A short verbal note shared during a hallway conversation with no written record.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-086",
    "set": 2,
    "number": 86,
    "type": "single",
    "difficulty": "",
    "question": "<p>During an architectural review, the security team identifies a risk that adversarial content injected into retrieved documents could manipulate the model's behavior. Which mitigation most directly addresses this threat?<\/p>",
    "options": {
      "A": "<p>Treat all retrieved content as untrusted input and apply input classifiers with output validation.<\/p>",
      "B": "<p>Require citations for each claim and constrain responses to source-supported content.<\/p>",
      "C": "<p>Restrict outbound tool calls to an approved destination allow-list.<\/p>",
      "D": "<p>Score outputs against a stable adversarial evaluation set on each model-version change.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p><strong>Đáp án đúng: A.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Đúng:<\/strong> Phương án “Treat all retrieved content as untrusted input and apply input classifiers with output validation.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Require citations for each claim and constrain responses to source-supported content.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Restrict outbound tool calls to an approved destination allow-list.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Score outputs against a stable adversarial evaluation set on each model-version change.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-087",
    "set": 2,
    "number": 87,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are evaluating an evaluation set used to score a Claude-based hiring-support tool. The set is drawn from one geographic region and one tenure band. Which response is most appropriate?<\/p>",
    "options": {
      "A": "<p>Discard all quantitative evaluation and replace it with qualitative impressions collected from a small, convenience-selected group that may not represent the tool's full user population.<\/p>",
      "B": "<p>Expand the evaluation set to cover the geographic regions and tenure bands the tool will serve, and rescore the system on the expanded set before broader release.<\/p>",
      "C": "<p>Reduce the evaluation set further to a single demographic subgroup to simplify score interpretation, narrowing coverage rather than expanding it to match the intended user population.<\/p>",
      "D": "<p>Continue using the narrow evaluation set drawn from one region and one tenure band because the existing benchmark scores are already high on that subset.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p><strong>Đáp án đúng: B.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Discard all quantitative evaluation and rely on qualitative expert judgment instead.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><li><strong>B — Đúng:<\/strong> Phương án “Expand the evaluation set to cover the geographic regions and tenure bands the tool will serve, and rescore the system on the expanded set before broader release.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Reduce the evaluation set further to focus on the most representative cases.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>D — Sai:<\/strong> Không chọn “Continue using the narrow evaluation set because the model generalizes across regions and tenure bands.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-088",
    "set": 2,
    "number": 88,
    "type": "single",
    "difficulty": "",
    "question": "<p>You must present an architectural recommendation to deploy a Claude-based contract review assistant to a steering committee that includes the CFO, the general counsel, and the CIO. Each stakeholder cares about different aspects of the decision. How should you structure the recommendation document?<\/p>",
    "options": {
      "A": "<p>Lead with the technical architecture diagram and the full component list before any other section.<\/p>",
      "B": "<p>Lead with detailed cost projections across the full multi-year horizon before the rationale section.<\/p>",
      "C": "<p> Present the same dense narrative throughout with no stakeholder differentiation in any section.<\/p>",
      "D": "<p>Lead with the architectural decision, then address each stakeholder's primary concerns directly.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Tại sao D đúng:<\/b> Khi trình bày đề xuất cho cấp lãnh đạo (C-suite), phương pháp hiệu quả nhất là nêu ngay quyết định/khuyến nghị cốt lõi ở phần tóm tắt (Executive Summary). Sau đó, tài liệu cần đi vào chi tiết giải quyết trực tiếp các mối quan tâm trọng tâm của từng stakeholder:<\/p><ul><li><p><b>CFO:<\/b> Chi phí, ROI, mô hình thanh toán token/API.<\/p><\/li><li><p><b>General Counsel:<\/b> Bảo mật dữ liệu, quyền riêng tư, tuân thủ pháp lý và độ chính xác của hợp đồng.<\/p><\/li><li><p><b>CIO:<\/b> Bán hạ tầng, tích hợp hệ thống, khả năng mở rộng (scalability) và tính bảo mật kỹ thuật.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>A &amp; B:<\/b> Chỉ tập trung thiên vị mối quan tâm của một người (CIO hoặc CFO) và đẩy phần của những người khác xuống cuối, khiến tài liệu thiếu cân bằng.<\/p><\/li><li><p><b>C:<\/b> Bị thiếu tính cá nhân hóa và gây khó theo dõi cho người đọc.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-089",
    "set": 2,
    "number": 89,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>You are compiling a diagnostic toolkit for Claude Code operational issues. Which two diagnostic actions belong in the toolkit? (Select two.) Each correct answer presents a complete solution.<\/p>",
    "options": {
      "A": "<p> Increase the model sampling temperature so that intermittent issues surface more frequently for analysis.<\/p>",
      "B": "<p>File a support ticket with vendor support before any local reproduction or evidence collection.<\/p>",
      "C": "<p>Reproduce the issue with a minimal reproduction case that isolates one variable at a time.<\/p>",
      "D": "<p>Roll back to the previous Claude Code version immediately to confirm whether the issue is version specific.<\/p>",
      "E": "<p>List the configured Model Context Protocol (MCP) servers and inspect server status to identify connection failures.<\/p>"
    },
    "answer": [
      "C",
      "E"
    ],
    "explanation": "<p><b>Đáp án đúng: C và E<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao C đúng:<\/b> Phương pháp chuẩn để chẩn đoán lỗi kỹ thuật là tạo một trường hợp kiểm thử tối giản (minimal reproduction case) và cô lập từng biến số. Điều này giúp xác định chính xác nguyên nhân gây lỗi xuất phát từ đâu.<\/p><\/li><li><p><b>Tại sao E đúng:<\/b> Claude Code phụ thuộc nhiều vào các máy chủ MCP để mở rộng tính năng và kết nối dữ liệu. Việc liệt kê và kiểm tra trạng thái của các MCP server giúp phát hiện nhanh các sự cố mất kết nối hoặc cấu hình sai.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>A:<\/b> Tăng <code>temperature<\/code> làm tăng tính ngẫu nhiên (chủ quan/sáng tạo) của mô hình, gây khó khăn hơn cho việc chẩn đoán lỗi kỹ thuật vốn cần tính ổn định.<\/p><\/li><li><p><b>B:<\/b> Báo lỗi cho nhà cung cấp trước khi tự kiểm tra/tái hiện lỗi cục bộ là quy trình không tối ưu.<\/p><\/li><li><p><b>D:<\/b> Roll back ngay lập tức mà không tìm nguyên nhân gốc rễ sẽ làm gián đoạn việc khắc phục triệt để sự cố.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-090",
    "set": 2,
    "number": 90,
    "type": "single",
    "difficulty": "",
    "question": "<p>A Claude Architect is reviewing a post-deployment performance report for an AI-assisted legal-document summarization system. The report includes these observations:<\/p><ul><li><p>Average summarization time decreased from 47 minutes to 6 minutes per document.<\/p><\/li><li><p>Associates spend less time on summaries, but overall billable output has not measurably changed.<\/p><\/li><li><p>Infrastructure costs increased by 22% because redundant retry logic generated additional API calls.<\/p><\/li><li><p>Some summaries require attorney correction, adding an average of 8 minutes of review per document.<\/p><\/li><\/ul><p>Which analysis correctly attributes each observation to the appropriate business-value pillar?<\/p>",
    "options": {
      "A": "<p>Observations 1 and 2 both indicate efficiency gains; Observation 3 is a solution-cost issue; Observation 4 is a performance-SLA issue.<\/p>",
      "B": "<p>Observation 1 is a transformation outcome; Observation 2 is an efficiency gain; Observation 3 is a performance-SLA degradation; Observation 4 is a solution-cost issue.<\/p>",
      "C": "<p>Observations 1 and 4 together indicate a net performance-SLA improvement; Observation 2 is a transformation gap; Observation 3 is a productivity drain from over-engineering.<\/p>",
      "D": "<p>Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized; Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><strong>Đáp án đúng: D.<\/strong> Đây là phương án giải quyết trực tiếp nhất yêu cầu trọng tâm của tình huống.<\/p><ul><li><strong>A — Sai:<\/strong> Không chọn “Observations 1 and 2 both indicate efficiency gains from reduced manual effort.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Observation 1 is a transformation outcome; Observation 2 is an efficiency gain.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Observations 1 and 4 together indicate a net performance-SLA improvement.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>D — Đúng:<\/strong> Phương án “Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized; Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-091",
    "set": 2,
    "number": 91,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are supporting an engineer whose newly added MCP server does not appear in their Claude Code session. Which diagnostic step should be tried first?<\/p>",
    "options": {
      "A": "<p>Disable every MCP server in the configuration to isolate the issue, removing all tool access rather than confirming whether the new server is registered.<\/p>",
      "B": "<p>Switch the team to a different Claude product family unrelated to the existing workflow, abandoning the current configuration rather than diagnosing the registration issue.<\/p>",
      "C": "<p>Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect.<\/p>",
      "D": "<p> Reinstall the developer's operating system from scratch, discarding all local configuration and tool state before attempting any targeted diagnostic steps.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><b>Đáp án đúng: C<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao C đúng:<\/b> Kiểm tra xem máy chủ MCP đã được ghi nhận trong danh sách chưa (ví dụ: dùng lệnh <code>/mcp<\/code> hoặc lệnh liệt kê cấu hình) và khởi động lại/kết nối lại phiên làm việc (<code>reconnect<\/code>) là bước chẩn đoán nhẹ nhàng, trực tiếp và chính xác nhất. Hầu hết các ứng dụng CLI/IDE cần khởi động lại phiên làm việc để nhận cấu hình MCP mới.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>A:<\/b> Tắt toàn bộ MCP server rồi bật lại từng cái là bước tốn thời gian và quá mức cần thiết đối với trường hợp mới thêm 1 server.<\/p><\/li><li><p><b>B:<\/b> Đổi dòng sản phẩm không giải quyết được vấn đề cấu hình máy chủ MCP cục bộ.<\/p><\/li><li><p><b>D:<\/b> Cài đặt lại hệ điều hành là hành động cực đoan, không phù hợp cho một lỗi cấu hình phần mềm đơn giản.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-092",
    "set": 2,
    "number": 92,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are a solution architect designing a Claude-based assistant with access to 60 internal tools across multiple business domains. Loading every tool definition on every request increases token usage and time to first response. Which design pattern best addresses this issue without sacrificing capability breadth?<\/p>",
    "options": {
      "A": "<p>Apply progressive tool discovery so a curated initial subset is exposed and additional tools are loaded on demand based on the task.<\/p>",
      "B": "<p>Use a separate model call to summarize all 60 tool definitions before each user turn.<\/p>",
      "C": "<p> Increase the maximum context length and load all 60 tool definitions on every request, accepting the higher token cost and latency as necessary for full capability.<\/p>",
      "D": "<p>Hard-code a fixed set of five tools per request to reduce token usage, regardless of whether those tools are relevant to the current task.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p><b>Đáp án đúng: A<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao A đúng:<\/b> Mẫu thiết kế \"progressive tool discovery\" (hoặc dynamic tool loading/tool search) cho phép hệ thống chỉ nạp một tập hợp công cụ cơ bản hoặc nạp danh mục/công cụ theo nhu cầu thực tế của tác vụ. Điều này giúp tối ưu hóa đáng kể chi phí token và giảm độ trễ (latency) ban đầu mà vẫn giữ nguyên khả năng mở rộng truy cập 60 công cụ khi cần.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>B:<\/b> Việc gọi mô hình riêng để tóm tắt định nghĩa công cụ trước mỗi request làm tăng thêm độ trễ và chi phí (thay vì giảm), đồng thời việc tóm tắt có thể làm mất thông tin quan trọng về tham số của công cụ.<\/p><\/li><li><p><b>C:<\/b> Nạp toàn bộ 60 công cụ mỗi lần không giải quyết được vấn đề tiêu tốn token và tăng độ trễ phản hồi ban đầu.<\/p><\/li><li><p><b>D:<\/b> Cố định cứng 5 công cụ cố định sẽ làm mất đi khả năng thực hiện các tác vụ thuộc các lĩnh vực kinh doanh khác (giảm phạm vi năng lực của trợ lý).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-093",
    "set": 2,
    "number": 93,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>The compliance team at a firm has approved a Claude Skill that generates client-facing investment summaries. The Skill includes the firm’s required disclaimers and prohibited-language list. A product manager has asked whether additional guardrails are needed at the application layer or whether the Skill alone is sufficient.<\/p><p>Which two guardrail responsibilities should remain at the application layer rather than the Skill? (Select two.) <\/p><p>Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Log every generated summary to the firm's compliance audit trail for retention.<\/p>",
      "B": "<p>Verify the requesting user is authorized to generate investment summaries at all.<\/p>",
      "C": "<p>Format output sections according to the firm's standardized house style guidelines.<\/p>",
      "D": "<p>Apply the disclaimer template that the compliance team has standardized firm-wide.<\/p>",
      "E": "<p>Apply the prohibited-language list that the compliance team maintains and updates.<\/p>"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "<p><b>Đáp án đúng: A và B<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao A &amp; B đúng:<\/b> Các tác vụ kiểm soát truy cập (Authentication/Authorization) và kiểm toán (Auditing/Logging) bắt buộc phải do <b>tầng ứng dụng (application layer)<\/b> đảm nhận. Mô hình LLM hay Claude Skill không thể tự đảm bảo tính xác thực của quyền người dùng, cũng như không thể đảm bảo việc ghi log diễn ra đáng tin cậy 100% không bị bỏ sót hoặc can thiệp.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>C, D, E:<\/b> Định dạng văn bản, thêm mẫu miễn trừ trách nhiệm (disclaimer) hoặc tuân thủ danh sách từ ngữ cấm/phong cách viết hoàn toàn có thể được định cấu hình trực tiếp bên trong prompt system hoặc quy tắc xử lý văn bản của <b>Claude Skill<\/b>.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-094",
    "set": 2,
    "number": 94,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are supporting an EU-based deployment with GDPR obligations. Which combination of measures best supports the deployment's GDPR posture?<\/p>",
    "options": {
      "A": "<p>Enterprise-tier deployment with a signed Data Processing Addendum, defined data-retention configuration, redaction of personal data not needed for the task, and documented data-subject rights handling.<\/p>",
      "B": "<p>Disabling all data-retention configuration, redaction controls, and data-subject-rights handling to simplify the deployment.<\/p>",
      "C": "<p> Using a personal Claude account tier for processing EU personal data at scale, with no signed Data Processing Addendum and no documented data-subject-rights handling procedure.<\/p>",
      "D": "<p>Pasting full EU personal data into every prompt to “give Claude complete context” without considering purpose limitation, data minimization, or the organization's Data Processing Addendum obligations.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p><b>Đáp án đúng: A và B<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao A &amp; B đúng:<\/b> Các tác vụ kiểm soát truy cập (Authentication/Authorization) và kiểm toán (Auditing/Logging) bắt buộc phải do <b>tầng ứng dụng (application layer)<\/b> đảm nhận. Mô hình LLM hay Claude Skill không thể tự đảm bảo tính xác thực của quyền người dùng, cũng như không thể đảm bảo việc ghi log diễn ra đáng tin cậy 100% không bị bỏ sót hoặc can thiệp.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>C, D, E:<\/b> Định dạng văn bản, thêm mẫu miễn trừ trách nhiệm (disclaimer) hoặc tuân thủ danh sách từ ngữ cấm/phong cách viết hoàn toàn có thể được định cấu hình trực tiếp bên trong prompt system hoặc quy tắc xử lý văn bản của <b>Claude Skill<\/b>.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-095",
    "set": 2,
    "number": 95,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>You are reviewing instrumentation in a multi-agent system. Which two findings constitute valid observability gaps in the instrumentation? (Select two.) Each correct answer presents a complete solution.<\/p>",
    "options": {
      "A": "<p>Trace spans for each agent step are exported to the shared distributed-tracing backend.<\/p>",
      "B": "<p>Latency and token usage on every span are emitted to the central metrics pipeline.<\/p>",
      "C": "<p>Tool-call payloads and outcomes are recorded with redaction applied to known sensitive fields.<\/p>",
      "D": "<p>Model identity and version on each turn are not recorded with the turn artifacts.<\/p>",
      "E": "<p>Request-scoped correlation identifiers do not propagate across agent and tool calls.<\/p>"
    },
    "answer": [
      "D",
      "E"
    ],
    "explanation": "<ul><li><p><b>Tại sao D đúng:<\/b> Việc không ghi lại danh tính và phiên bản mô hình (model identity &amp; version) khiến bạn không thể tái hiện lại lỗi, so sánh hiệu năng giữa các phiên bản, hoặc kiểm tra xem sự thay đổi về hành vi của tác tử có xuất phát từ việc cập nhật mô hình hay không.<\/p><\/li><li><p><b>Tại sao E đúng:<\/b> Trong hệ thống đa tác tử, định danh tương quan (correlation ID) là chìa khóa để xâu chuỗi toàn bộ luồng xử lý (trace) qua nhiều tác tử và công cụ khác nhau. Nếu không truyền correlation ID, hệ thống sẽ bị đứt gãy vết (trace continuity), gây khó khăn cho việc chẩn đoán sự cố end-to-end.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>A, B, C:<\/b> Đều là các thực hành tốt (best practices) về observability (xuất trace span, theo dõi latency/tokens, và ghi log công cụ có bảo mật dữ liệu nhạy cảm) chứ không phải là \"lỗ hổng\" (gap).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-096",
    "set": 2,
    "number": 96,
    "type": "single",
    "difficulty": "",
    "question": "<p>When communicating an architectural decision to a security and compliance reviewer, which content set is most aligned with that audience's primary concerns?<\/p>",
    "options": {
      "A": "<p>Feature delivery schedule, roadmap dependencies, and scope boundaries for the product manager.<\/p>",
      "B": "<p> Implementation timeline, component interfaces, and deployment sequence for the engineering team.<\/p>",
      "C": "<p>Threat model, control mappings, residual-risk acceptance criteria, and audit traceability.<\/p>",
      "D": "<p>Decision rationale, business outcomes, and high-level risk summary for executive review.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><b>Đáp án đúng: C<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao C đúng:<\/b> Đội ngũ an ninh và tuân thủ chuyên trách việc đánh giá mức độ an toàn và khả năng đáp ứng quy định pháp lý/tiêu chuẩn của hệ thống. Do đó, các tài liệu họ quan tâm trực tiếp nhất phải bao gồm:<\/p><ul><li><p><i>Threat model:<\/i> Mô hình hóa các mối đe dọa tiềm ẩn.<\/p><\/li><li><p><i>Control mappings:<\/i> Các biện pháp kiểm soát an ninh tương ứng.<\/p><\/li><li><p><i>Residual-risk criteria:<\/i> Đánh giá rủi ro tồn dư có nằm trong mức chấp nhận được không.<\/p><\/li><li><p><i>Audit traceability:<\/i> Khả năng vết và kiểm toán khi có sự cố.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>A &amp; B:<\/b> Dành cho Quản lý dự án (Project Manager) hoặc Quản lý kỹ thuật (Engineering Lead) quan tâm đến tiến độ và nguồn lực.<\/p><\/li><li><p><b>D:<\/b> Dành cho cấp lãnh đạo (Executive Review) quan tâm đến bức tranh tổng thể và giá trị kinh doanh.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-097",
    "set": 2,
    "number": 97,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are defining when to introduce a project subagent versus relying on Claude Code's general capabilities. Which scenario most directly justifies a dedicated subagent?<\/p>",
    "options": {
      "A": "<p>The team has a recurring specialized task, such as database schema review, that requires a focused system prompt, narrow tool permissions, and a specific model selection across many sessions.<\/p>",
      "B": "<p>The team has a one-time ad hoc question that will not recur and does not require a focused system prompt, narrow tool permissions, or dedicated model selection.<\/p>",
      "C": "<p>The team has no recurring specialized tasks and uses Claude Code only for isolated general-purpose work that does not justify a dedicated system prompt or tool scope.<\/p>",
      "D": "<p> The team wants every Claude Code interaction to use the same generic system prompt with no task-specific specialization, narrow tool permissions, or dedicated model selection.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p><b>Đáp án đúng: A<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao A đúng:<\/b> Động cơ chính để tạo một subagent riêng biệt là khi bạn có các quy trình làm việc chuyên biệt (specialized workflows) diễn ra thường xuyên. Việc thiết lập subagent giúp đóng gói sẵn system prompt chuyên sâu, giới hạn quyền hạn công cụ (để đảm bảo an toàn/nguyên tắc đặc quyền tối thiểu) và tối ưu hóa việc chọn mô hình phù hợp cho tác vụ đó.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>B:<\/b> Câu hỏi bộc phát một lần hoàn toàn có thể xử lý trực tiếp bằng phiên Claude Code thông thường mà không cần tốn công cấu hình subagent.<\/p><\/li><li><p><b>C &amp; D:<\/b> Đều mô tả việc ưu tiên cấu hình chung/tổng quát cho mọi tác vụ — điều này đi ngược lại mục đích ra đời của subagent (vốn dùng cho các tác vụ phân hóa chuyên sâu).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-098",
    "set": 2,
    "number": 98,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are identifying signals that a deployment should re-enter design rather than continue iterating in place. Which signal most directly indicates the need for a new design cycle?<\/p>",
    "options": {
      "A": "<p>A minor copy edit is requested in a customer-facing string within the existing UI, which can be handled as a localized content change without altering component responsibilities or contracts.<\/p>",
      "B": "<p>A dashboard alert threshold needs a small numerical adjustment to reduce false-positive noise, which can be handled as an operational configuration change without a new design cycle.<\/p>",
      "C": "<p>A runbook step requires a clarification edit to improve on-call guidance accuracy, which can be handled as a documentation update without changes to component responsibilities or core contracts.<\/p>",
      "D": "<p>The system's current architecture cannot meet the new requirements without changes to component responsibilities or core contracts.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><b>Đáp án đúng: D<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao D đúng:<\/b> Việc thay đổi nhiệm vụ của các thành phần hệ thống hoặc giao ước/giao thức cốt lõi (core contracts/APIs) tác động trực tiếp đến cấu trúc nền tảng của hệ thống. Khi các yêu cầu mới vượt quá khả năng chịu đựng của kiến trúc hiện tại, việc tiếp tục tinh chỉnh nhỏ tại chỗ (iteration) sẽ gây ra rủi ro lớn và nợ kỹ thuật (technical debt), đòi hỏi hệ thống phải quay lại bước thiết kế kiến trúc (design phase).<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>A, B, C:<\/b> Đều là các thay đổi nhỏ về cấu hình, nội dung giao diện hoặc tài liệu hướng dẫn vận hành. Những chỉnh sửa này hoàn toàn có thể thực hiện thông qua việc tinh chỉnh thông thường (iterating in place) mà không cần thiết kế lại hệ thống.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-099",
    "set": 2,
    "number": 99,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>You are rolling out monitoring for a Claude-based deployment and must complete the specification steps before instrumenting the deployment. Which two steps must be completed BEFORE instrumenting the deployment to emit metrics and traces? (Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Define the metrics and the slices the deployment will monitor across normal and adversarial traffic.<\/p>",
      "B": "<p>Tune the alert thresholds based on observed normal-state distributions to reduce false positives.<\/p>",
      "C": "<p>Define the service-level objectives (SLOs) and the error budgets the deployment will be held to.<\/p>",
      "D": "<p>Build the dashboards that surface metrics across slices at the cadence the team operates on.<\/p>",
      "E": "<p>Document the dashboards, alerts, and runbooks for the on-call rotation that will respond.<\/p>"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "<p><b>Đáp án đúng: A và C<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao A &amp; C đúng:<\/b> Trước khi viết mã phát dữ liệu (instrumentation), bạn phải biết <b>cần đo lường cái gì<\/b> (định nghĩa metrics &amp; slices ở <b>A<\/b>) và <b>mục tiêu đo lường là gì<\/b> (xác định SLOs &amp; Error Budgets ở <b>C<\/b>). Đây là các bước thiết kế/định nghĩa bắt buộc phải có trước để lập trình viên biết chính xác cần chèn mã theo dõi ở đâu và thu thập tham số nào.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>B:<\/b> Tinh chỉnh ngưỡng cảnh báo (alert thresholds) chỉ có thể thực hiện <i>sau khi<\/i> hệ thống đã chạy và thu thập được dữ liệu thực tế.<\/p><\/li><li><p><b>D &amp; E:<\/b> Việc xây dựng dashboard, cài đặt rule cảnh báo và viết tài liệu bàn giao chỉ thực hiện <i>sau khi<\/i> mã đo lường đã hoạt động và đang gửi dữ liệu về hệ thống.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-100",
    "set": 2,
    "number": 100,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>You are integrating Claude Code into a team workflow and must complete the design and configuration steps before piloting the integrated workflow with a small group. Which two steps must be completed BEFORE piloting the integrated workflow? (Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Document the integrated workflow with handoff criteria, permission boundaries, and on-call runbooks.<\/p>",
      "B": "<p>Identify the workflow steps where AI-assisted tooling adds value and where human authority must remain.<\/p>",
      "C": "<p>Negotiate the workflow change with affected teams and obtain formal sign-off from each manager.<\/p>",
      "D": "<p> Iterate the integrated workflow based on pilot findings before broader rollout to the team.<\/p>",
      "E": "<p>Configure the project-scope MCP servers, permissions, subagents, and persistent project context.<\/p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "<p><b>Đáp án đúng: B và E<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao B &amp; E đúng:<\/b><\/p><ul><li><p><b>B (Thiết kế luồng công việc):<\/b> Bạn cần xác định ranh giới rõ ràng về trách nhiệm (nơi nào AI hỗ trợ và nơi nào con người giữ quyền quyết định/kiểm duyệt) <i>trước khi<\/i> cho nhóm nhỏ dùng thử để tránh rủi ro vi phạm quy trình hoặc mất kiểm soát.<\/p><\/li><li><p><b>E (Cấu hình kỹ thuật):<\/b> Để giai đoạn thử nghiệm (pilot) diễn ra suôn sẻ, hạ tầng kỹ thuật trực tiếp của dự án (MCP servers, permissions, subagents, CLAUDE.md/context) phải được thiết lập xong.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>A &amp; C:<\/b> Việc xuất bản tài liệu hoàn chỉnh chính thức hoặc xin phê duyệt toàn bộ từ tất cả các bên liên quan thường chỉ thực hiện khi chuẩn bị triển khai chính thức trên diện rộng (full rollout), sau khi đã có dữ liệu thực tế từ đợt pilot.<\/p><\/li><li><p><b>D:<\/b> Việc \"tinh chỉnh dựa trên kết quả thử nghiệm\" diễn ra <i>trong và sau<\/i> giai đoạn pilot, không thể thực hiện <i>trước khi<\/i> pilot bắt đầu.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-101",
    "set": 2,
    "number": 101,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are preparing a HIPAA-eligible deployment for a healthcare customer. Which configuration supports HIPAA compliance using Anthropic-offered tools?<\/p>",
    "options": {
      "A": "<p>Claude Free with no contractual addendum, since consumer products meet HIPAA requirements out of the box.<\/p>",
      "B": "<p>Claude Enterprise with a signed Business Associate Agreement, Zero Data Retention enabled, and audit logging configured for compliance tracking.<\/p>",
      "C": "<p>Disabling all audit logging so that no PHI is recorded in any log store, on the assumption that the absence of logs satisfies HIPAA requirements without a signed BAA.<\/p>",
      "D": "<p>An ad-hoc personal Claude account used by individual clinicians for PHI-related tasks, with no Business Associate Agreement, no Zero Data Retention, and no audit logging configured.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p><b>Đáp án đúng: A và D<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao A &amp; D đúng:<\/b> Trong Hồ sơ ghi nhận quyết định kiến trúc (ADR - Architectural Decision Record) tiêu chuẩn:<\/p><ul><li><p><b>A:<\/b> Quyết định kiến trúc không phải là cố định vĩnh viễn; nó cần có người chịu trách nhiệm (owner) và thời gian định kỳ xem xét lại nếu các giả định ban đầu không còn đúng.<\/p><\/li><li><p><b>D:<\/b> Việc nêu rõ các phương án đã cân nhắc (alternatives considered) cùng tiêu chí đánh giá giúp người đọc hiểu lý do tại sao phương án hiện tại lại được chọn, tăng tính minh bạch và thuyết phục.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>B:<\/b> Phân phối tài liệu đại trà cho cùng một diễn đàn bất kể phạm vi/đối tượng sẽ gây nhiễu thông tin và tốn thời gian không cần thiết.<\/p><\/li><li><p><b>C:<\/b> Bỏ qua các phương án bị bác bỏ làm mất đi ngữ cảnh quan trọng, dẫn đến nguy cơ các nhóm sau này lặp lại chính những lựa chọn sai lầm đó.<\/p><\/li><li><p><b>E:<\/b> Việc bắt buộc dùng một template quá cứng nhắc cho mọi loại quyết định (từ nhỏ đến lớn) gây ra thủ tục rườm rà (bureaucracy) không cần thiết.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-102",
    "set": 2,
    "number": 102,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>You are listing characteristics of strong architectural-decision communication. Which two characteristics belong on the list? (Select two.) Each correct answer presents a complete solution.<\/p>",
    "options": {
      "A": "<p>Ownership and review cadence for revisiting the decision when conditions or assumptions change.<\/p>",
      "B": "<p>Distribution to a standing review forum with mandatory attendance from senior engineering leaders.<\/p>",
      "C": "<p>Omission of rejected alternatives to keep the decision document focused and concise for readers.<\/p>",
      "D": "<p>Alternatives considered along with the criteria that were used to evaluate each alternative.<\/p>",
      "E": "<p>Use of a consistent template across the team to standardize the visual presentation of decisions.<\/p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "<p><strong>Đáp án đúng: A, D.<\/strong> Các phương án này bổ sung cho nhau và cùng đáp ứng đầy đủ những yêu cầu được nêu trong tình huống.<\/p><ul><li><strong>A — Đúng:<\/strong> Phương án “Ownership and review cadence for revisiting the decision when conditions or assumptions change.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>B — Sai:<\/strong> Không chọn “Distribution to a standing review forum regardless of decision scope or audience.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>C — Sai:<\/strong> Không chọn “Omission of rejected alternatives to keep the document concise.” vì phương án này không đáp ứng đầy đủ điều kiện trọng tâm, xử lý sai giai đoạn hoặc tạo ra đánh đổi không phù hợp với mục tiêu của tình huống.<\/li><li><strong>D — Đúng:<\/strong> Phương án “Alternatives considered along with the criteria that were used to evaluate each alternative.” phù hợp với nguyên tắc được kiểm tra và xử lý đúng trọng tâm của tình huống mà không mở rộng phạm vi không cần thiết.<\/li><li><strong>E — Sai:<\/strong> Không chọn “Use of a consistent template that all decision authors follow across the organization.” vì cách diễn đạt tuyệt đối hoặc phạm vi quá rộng làm tăng rủi ro và bỏ qua yêu cầu kiểm soát theo ngữ cảnh.<\/li><\/ul>"
  },
  {
    "id": "CCAR-P-103",
    "set": 2,
    "number": 103,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are integrating Claude Code into a workflow that runs against a production database. Which guardrail design most directly preserves safety on data-modifying operations?<\/p>",
    "options": {
      "A": "<p>Allow Claude Code to write directly to the production database without subagent scoping, read-only credential defaults, or human confirmation gates on data-modifying operations.<\/p>",
      "B": "<p>Configure the database MCP server with a fully privileged credential that can perform any read or write operation, and allow all operations to proceed without explicit human confirmation.<\/p>",
      "C": "<p>Disable all logging and auditing on database operations through the MCP server to reduce alert noise, removing the observability needed to detect unintended data modifications.<\/p>",
      "D": "<p>Configure the database MCP server with a read-only credential by default, restrict the subagent's tool list to read-only operations, and require explicit human confirmation on any operation that would modify data.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><b>Đáp án đúng: D<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao D đúng:<\/b> Áp dụng nguyên tắc đặc quyền tối thiểu (Least Privilege) và kiểm soát an toàn nghiêm ngặt đối với môi trường sản xuất bằng cách:<\/p><ol><li><p>Mặc định chỉ cấp quyền đọc (<b>read-only<\/b>).<\/p><\/li><li><p>Giới hạn các công cụ của subagent không cho tự ý thực hiện câu lệnh chỉnh sửa (<code>INSERT<\/code>, <code>UPDATE<\/code>, <code>DELETE<\/code>).<\/p><\/li><li><p>Yêu cầu có sự xác nhận của con người (<b>Human-in-the-loop<\/b>) trước khi chạy bất kỳ lệnh làm thay đổi dữ liệu nào.<\/p><\/li><\/ol><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>A &amp; B:<\/b> Cấp quyền ghi trực tiếp hoặc quyền tối đa cho AI trên database sản xuất là cực kỳ nguy hiểm, dễ dẫn đến rủi ro mất dữ liệu hoặc sự cố hệ thống do thao tác ngoài ý muốn.<\/p><\/li><li><p><b>C:<\/b> Tắt logging/auditing làm mất khả năng truy vết và kiểm soát an ninh hệ thống.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-104",
    "set": 2,
    "number": 104,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>You are building an evaluation pipeline for a Claude-based deployment and must complete the specification steps before running the deployment against the dataset. Which two steps must be completed BEFORE running the deployment against the evaluation dataset? (Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Publish the aggregated metrics to a dashboard and gate releases on threshold checks.<\/p>",
      "B": "<p>Curate and label the evaluation dataset to match the defined slices.<\/p>",
      "C": "<p>Review failure cases with subject matter experts to refine the scoring rubric.<\/p>",
      "D": "<p>Define the metrics and slices the framework will report across representative, edge, and adversarial cases.<\/p>",
      "E": "<p>Score the deployment outputs against the reference labels and compute aggregate metrics.<\/p>"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "<p><b>Đáp án đúng: B và D<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao B &amp; D đúng:<\/b> Đây là các bước chuẩn bị (preparation/specification) bắt buộc phải có <b>trước khi<\/b> chạy đánh giá:<\/p><ul><li><p><b>D:<\/b> Phải xác định trước đo lường bằng chỉ số nào (metrics) và phân loại dữ liệu ra sao (slices).<\/p><\/li><li><p><b>B:<\/b> Phải chuẩn bị xong tập dữ liệu đánh giá cùng nhãn chuẩn (reference labels/ground truth) tương ứng với các phân đoạn đó.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>E:<\/b> Việc chấm điểm và tính toán chỉ số chỉ xảy ra <i>trong/sau khi<\/i> đã chạy hệ thống trên tập dữ liệu.<\/p><\/li><li><p><b>A &amp; C:<\/b> Phân tích lỗi với chuyên gia và xuất bản kết quả lên dashboard là các bước xử lý <i>sau khi<\/i> cuộc đánh giá đã hoàn tất.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-105",
    "set": 2,
    "number": 105,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>You are rolling out a standardized Claude Code configuration to an engineering team and must complete the planning steps before piloting the configuration. <\/p><p>Which two steps must be completed BEFORE piloting the configuration with a small group of engineers? <\/p><p>(Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Define the project-scope baseline covering Model Context Protocol (MCP) servers, permission rules, and subagents.<\/p>",
      "B": "<p>Onboard every engineer in the organization to the new configuration through mandatory training sessions.<\/p>",
      "C": "<p>Roll out the stabilized configuration to additional teams with documentation and a defined support channel<\/p>",
      "D": "<p>Identify the team workflows, security boundaries, and which decisions belong to managed configuration versus project scope.<\/p>",
      "E": "<p>Iterate the configuration based on the pilot findings and stabilize the baseline before broader rollout.<\/p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "<p><b>Đáp án đúng: A và D<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao A &amp; D đúng:<\/b> Đây là hai bước chuẩn bị và thiết kế cốt lõi bắt buộc phải hoàn thành <b>trước khi<\/b> cho nhóm nhỏ dùng thử (pilot):<\/p><ul><li><p><b>D (Lập kế hoạch &amp; Kiến trúc):<\/b> Xác định luồng công việc, ranh giới an toàn/bảo mật, và phân chia phân cấp cấu hình (Managed Config vs. Project Scope).<\/p><\/li><li><p><b>A (Cấu hình kỹ thuật):<\/b> Thiết lập trước bản baseline thực tế về MCP servers, permissions và subagents cho dự án để nhóm pilot có môi trường sẵn sàng trải nghiệm.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>B:<\/b> Việc onboard toàn bộ kỹ sư toàn công ty ngay từ đầu làm mất đi bản chất của một đợt thử nghiệm quy mô nhỏ (pilot).<\/p><\/li><li><p><b>C &amp; E:<\/b> Mở rộng cho các nhóm khác hay tinh chỉnh/ổn định hóa cấu hình dựa trên kết quả thử nghiệm chỉ diễn ra <i>trong và sau<\/i> giai đoạn pilot, không thể thực hiện <i>trước khi<\/i> pilot bắt đầu.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-106",
    "set": 2,
    "number": 106,
    "type": "single",
    "difficulty": "",
    "question": "<p>A healthcare organization is evaluating two Claude-powered AI architectures for a clinical documentation assistant. Architecture X produces higher output quality scores but costs $0.18 per documentation session and averages 4.2 seconds per response. Architecture Y scores slightly lower on quality metrics but costs $0.09 per session and averages 2.1 seconds per response. The stated SLA requires responses under 3 seconds, and the annual volume is projected at 2 million documentation sessions.<\/p><p> Which evaluation approach correctly applies business value pillar analysis to this decision?<\/p>",
    "options": {
      "A": "<p>Select Architecture Y based solely on the 50% cost reduction, since solution cost is the most important value pillar in healthcare budget-constrained environments.<\/p>",
      "B": "<p>Select Architecture X because the higher quality scores justify the cost premium, and any SLA gap can be addressed through infrastructure optimization after deployment.<\/p>",
      "C": "<p>Eliminate Architecture X on SLA grounds, then evaluate Architecture Y against the efficiency and solution cost pillars by calculating annual cost difference and assessing whether the quality delta materially impacts clinical workflow productivity.<\/p>",
      "D": "<p>Recommend a hybrid approach using Architecture X for complex cases and Architecture Y for routine cases, without additional analysis, since this preserves quality where it matters most.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><b>Đáp án đúng: C<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao C đúng:<\/b><\/p><ol><li><p><b>Tiêu chí cứng (Hard constraint):<\/b> Kiến trúc X mất 4.2 giây/phản hồi, vi phạm SLA bắt buộc (dưới 3 giây), do đó bị loại bỏ ngay lập tức.<\/p><\/li><li><p><b>Phân tích giá trị doanh nghiệp:<\/b> Sau khi chỉ còn Kiến trúc Y đáp ứng kỹ thuật/SLA, hệ thống đánh giá theo các trụ cột giá trị: tính toán tiết kiệm chi phí ($0.09/phiên × 2 triệu = $180,000/năm) và đánh giá tác động thực tế của việc giảm nhẹ chất lượng đối với năng suất lâm sàng.<\/p><\/li><\/ol><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>A:<\/b> Bỏ qua việc đánh giá tuân thủ SLA là thiếu sót nghiêm trọng trong kỹ thuật kiến trúc.<\/p><\/li><li><p><b>B:<\/b> Bỏ qua vi phạm SLA cứng để ưu tiên điểm chất lượng là không hợp lý.<\/p><\/li><li><p><b>D:<\/b> Kiến trúc X vẫn vi phạm SLA ở các trường hợp phức tạp, nên không thể đưa vào giải pháp hybrid khi SLA là yêu cầu bắt buộc cho toàn bộ hệ thống.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-107",
    "set": 2,
    "number": 107,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are explaining the precedence of Claude Code configuration scopes to the team. Which precedence ordering, from highest to lowest, is correct?<\/p>",
    "options": {
      "A": "<p>Local &gt; managed &gt; user &gt; command-line arguments &gt; project<\/p>",
      "B": "<p>Project &gt; user &gt; managed &gt; local &gt; command-line arguments<\/p>",
      "C": "<p>Managed &gt; command-line arguments &gt; local &gt; project &gt; user<\/p>",
      "D": "<p>User &gt; project &gt; local &gt; command-line arguments &gt; managed<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><b>Đáp án đúng: C<\/b><\/p><p><b>Giải thích:<\/b><\/p><p>Thứ tự ưu tiên của các phạm vi cấu hình trong Claude Code được áp dụng từ cao xuống thấp như sau:<\/p><ol><li><p><b>Managed (Cấu hình quản lý từ doanh nghiệp/tổ chức):<\/b> Ghi đè mọi thiết lập khác để đảm bảo tính an toàn và chính sách tuân thủ.<\/p><\/li><li><p><b>Command-line arguments (Tham số dòng lệnh):<\/b> Các cờ (flags) truyền trực tiếp khi khởi chạy lệnh sẽ đè cấu hình tệp cục bộ.<\/p><\/li><li><p><b>Local (Cấu hình tệp cục bộ / tệp cài đặt dự án cá nhân):<\/b> Áp dụng riêng cho thư mục/phiên làm việc hiện tại.<\/p><\/li><li><p><b>Project (Cấu hình dự án dùng chung):<\/b> Các thiết lập lưu trong tệp cấu hình của dự án (như <code>.claude.json<\/code> hoặc cấu hình chia sẻ trong repo).<\/p><\/li><li><p><b>User (Cấu hình người dùng toàn cục):<\/b> Cấu hình chung cho tài khoản người dùng trên máy (<code>~/.claude.json<\/code>), có độ ưu tiên thấp nhất.<\/p><\/li><\/ol>"
  },
  {
    "id": "CCAR-P-108",
    "set": 2,
    "number": 108,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>A Claude architect is leading the discovery phase for a new AI-powered customer service solution. Which two activities are characteristic of structured discovery and requirement gathering for a Claude-based deployment? (Select two.)<\/p>",
    "options": {
      "A": "<p>Facilitating stakeholder workshops to surface latency, accuracy, and compliance constraints before scoping begins.<\/p>",
      "B": "<p>Selecting the Claude model tier based on the architect's prior project experience before stakeholder input is collected.<\/p>",
      "C": "<p>Generating an initial prototype and iterating based on user reaction rather than written requirements.<\/p>",
      "D": "<p>Documenting explicit success criteria and failure thresholds that will gate production deployment.<\/p>",
      "E": "<p>Deferring constraint documentation until the integration design phase to avoid scope creep.<\/p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "<p><b>Đáp án đúng: A và D<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao A &amp; D đúng:<\/b> Trong giai đoạn khám phá và xác định yêu cầu chuẩn hóa:<\/p><ul><li><p><b>A:<\/b> Việc trao đổi sớm với các bên liên quan để làm rõ các giới hạn về độ trễ (latency), độ chính xác (accuracy) và tuân thủ (compliance) là cần thiết để định hình đúng phạm vi dự án.<\/p><\/li><li><p><b>D:<\/b> Việc thiết lập sẵn các tiêu chí thành công (success criteria) và ngưỡng thất bại (failure thresholds) giúp tạo cổng kiểm soát chất lượng rõ ràng cho việc phát hành sản phẩm.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>B:<\/b> Chọn mô hình và hạ tầng trước khi có yêu cầu là đi ngược lại quy trình thiết kế kiến trúc chuẩn.<\/p><\/li><li><p><b>C &amp; E:<\/b> Việc trì hoãn lấy ý kiến hoặc hoãn ghi nhận các ràng buộc kỹ thuật đến sau sprint 1 sẽ dễ dẫn đến việc làm lại (rework) và đi sai hướng kiến trúc ban đầu.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-109",
    "set": 2,
    "number": 109,
    "type": "matching",
    "difficulty": "",
    "question": "<p>You are classifying token-management tactics by where each tactic applies in the request lifecycle: 'Input Preparation,' 'Prompt Construction,' or 'Output Handling.'<\/p>",
    "matching": [
      {
        "letter": "A",
        "text": "Persist the validated output for downstream consumption and audit",
        "choices": [
          "Input Preparation",
          "Output Handling",
          "Prompt Construction"
        ],
        "answer": "Output Handling"
      },
      {
        "letter": "B",
        "text": "Order the prompt sections so cacheable content sits before per-request content",
        "choices": [
          "Input Preparation",
          "Output Handling",
          "Prompt Construction"
        ],
        "answer": "Prompt Construction"
      },
      {
        "letter": "C",
        "text": "Summarize prior conversation history when full history is no longer needed",
        "choices": [
          "Input Preparation",
          "Output Handling",
          "Prompt Construction"
        ],
        "answer": "Input Preparation"
      },
      {
        "letter": "D",
        "text": "Validate the model's structured output against the expected schema",
        "choices": [
          "Input Preparation",
          "Output Handling",
          "Prompt Construction"
        ],
        "answer": "Output Handling"
      },
      {
        "letter": "E",
        "text": "Move stable repeated content into a cacheable prefix at the head of the prompt",
        "choices": [
          "Input Preparation",
          "Output Handling",
          "Prompt Construction"
        ],
        "answer": "Prompt Construction"
      },
      {
        "letter": "F",
        "text": "Trim retrieved passages to spans relevant to the user's question",
        "choices": [
          "Input Preparation",
          "Output Handling",
          "Prompt Construction"
        ],
        "answer": "Input Preparation"
      }
    ],
    "answer": {
      "A": "Output Handling",
      "B": "Prompt Construction",
      "C": "Input Preparation",
      "D": "Output Handling",
      "E": "Prompt Construction",
      "F": "Input Preparation"
    },
    "explanation": "<p><b>Đáp án phân loại chi tiết:<\/b><\/p><ul><li><p><b>A. Persist the validated output for downstream consumption and audit<\/b><\/p><ul><li><p>👉 <b>Output Handling<\/b> <i>(Lưu trữ đầu ra đã kiểm duyệt cho các bước sau và kiểm toán)<\/i><\/p><\/li><\/ul><\/li><li><p><b>B. Order the prompt sections so cacheable content sits before per-request content<\/b><\/p><ul><li><p>👉 <b>Prompt Construction<\/b> <i>(Sắp xếp các phần prompt để nội dung có thể cache nằm trước nội dung biến đổi theo yêu cầu)<\/i><\/p><\/li><\/ul><\/li><li><p><b>C. Summarize prior conversation history when full history is no longer needed<\/b><\/p><ul><li><p>👉 <b>Input Preparation<\/b> <i>(Tóm tắt lịch sử trò chuyện khi không còn cần toàn bộ dữ liệu cũ)<\/i><\/p><\/li><\/ul><\/li><li><p><b>D. Validate the model's structured output against the expected schema<\/b><\/p><ul><li><p>👉 <b>Output Handling<\/b> <i>(Xác thực đầu ra có cấu trúc của mô hình so với schema dự kiến)<\/i><\/p><\/li><\/ul><\/li><li><p><b>E. Move stable repeated content into a cacheable prefix at the head of the prompt<\/b><\/p><ul><li><p>👉 <b>Prompt Construction<\/b> <i>(Đưa nội dung cố định lặp lại vào phần đầu prompt dưới dạng tiền tố có thể cache)<\/i><\/p><\/li><\/ul><\/li><li><p><b>F. Trim retrieved passages to spans relevant to the user's question<\/b><\/p><ul><li><p>👉 <b>Input Preparation<\/b> <i>(Cắt gọt các đoạn văn bản truy xuất được để chỉ giữ lại phần liên quan đến câu hỏi)<\/i><\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-110",
    "set": 2,
    "number": 110,
    "type": "single",
    "difficulty": "",
    "question": "<p>A customer support team has proposed delegating customer refund decisions to a Claude-driven workflow with no human review for refunds under 50 USD. The team's reasoning is that small refunds are low-risk and human review would erase the efficiency gain. Which Delegation-competency principle should guide your response?<\/p>",
    "options": {
      "A": "<p>Delegation should always include human review on every decision the workflow produces.<\/p>",
      "B": "<p>Delegation scope should reflect the type of risk involved, not the transaction size alone.<\/p>",
      "C": "<p>Delegation scope should be set primarily by maximizing efficiency gains across the workflow.<\/p>",
      "D": "<p>Delegation should be avoided entirely wherever financial transactions occur in the workflow.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p><b>Đáp án đúng: B<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao B đúng:<\/b> Việc đánh giá rủi ro để giao quyền tự động hóa (Delegation competency) không thể chỉ dựa vào một ngưỡng định lượng đơn giản (như số tiền &lt; $50). Hệ thống phải xem xét các loại rủi ro mang tính bản chất (nature of risk) — ví dụ: rủi ro lạm dụng hệ thống, gian lận lặp đi lặp lại, hoặc tác động đến tài khoản khách hàng. Do đó, quyết định giao quyền phải phản ánh bản chất/mức độ rủi ro tổng thể.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>A &amp; D:<\/b> Quá cứng nhắc, phủ nhận hoàn toàn lợi ích của tự động hóa và không thực tế trong các hệ thống quy mô lớn.<\/p><\/li><li><p><b>C:<\/b> Tối ưu hóa hiệu quả tự động hóa mà bỏ qua quản trị rủi ro sẽ dẫn đến lỗ hổng an ninh và thiệt hại tài chính.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-111",
    "set": 2,
    "number": 111,
    "type": "single",
    "difficulty": "",
    "question": "<p>You are identifying inefficiency in a Claude Code workflow where each engineer manually re-explains the project's conventions and architecture in every session. Which adjustment most directly removes this inefficiency?<\/p>",
    "options": {
      "A": "<p>Forbid the use of Claude Code on the project entirely to avoid the session-initialization overhead, accepting that the team loses all AI-assisted development productivity for this codebase.<\/p>",
      "B": "<p>Capture the project's conventions and architecture in a project-scoped CLAUDE.md (or equivalent persistent project-context file) committed to the repository, so each session loads it automatically.<\/p>",
      "C": "<p>Tell each engineer to retype the project conventions and architecture context more quickly at the start of each session, reducing time lost without eliminating the repeated manual effort.<\/p>",
      "D": "<p>Remove all documented project conventions and architectural standards so engineers have nothing to re-explain at session start, accepting the loss of consistency and shared coding standards.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p><b>Đáp án đúng: B<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao B đúng:<\/b> Tệp <code>CLAUDE.md<\/code> đặt ở thư mục gốc của repository đóng vai trò là nguồn ngữ cảnh cố định (persistent context file). Claude Code sẽ tự động đọc tệp này mỗi khi bắt đầu phiên mới, giúp tự động truyền tải các quy chuẩn coding, kiến trúc, và chỉ dẫn vận hành mà không cần con người phải nhắc lại thủ công.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>A, C, D:<\/b> Không phải là giải pháp kỹ thuật hợp lý (C cấm đoán loại bỏ công cụ, C giữ nguyên điểm bất hợp lý, D phá bỏ hoàn toàn quy chuẩn của dự án).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-112",
    "set": 2,
    "number": 112,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>The compliance team has authored a regulatory disclosure procedure that must be applied identically across customer service, sales, and onboarding workflows. Which two design decisions should you include? (Select two.) Each correct answer presents part of the solution.<\/p>",
    "options": {
      "A": "<p>Package the procedure as a Claude Skill owned directly by the compliance team.<\/p>",
      "B": "<p>Embed the procedure text into each workflow's system prompt at integration time.<\/p>",
      "C": "<p>Store the procedure in a shared retrieval corpus accessible to each workflow independently.<\/p>",
      "D": "<p>Have each workflow team rewrite the procedure for its own context.<\/p>",
      "E": "<p>Reference the same Claude Skill from all three workflow integrations.<\/p>"
    },
    "answer": [
      "A",
      "E"
    ],
    "explanation": "<p><b>Đáp án đúng: A và E<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao A &amp; E đúng:<\/b> Để đảm bảo quy trình được áp dụng <b>đồng nhất (identically)<\/b> và dễ dàng cập nhật/quản trị:<\/p><ul><li><p><b>A:<\/b> Việc đóng gói quy trình thành một <b>Claude Skill<\/b> do chính đội ngũ tuân thủ sở hữu sẽ giúp đảm bảo tính chính xác, đúng chuẩn pháp lý và là nơi duy nhất quản lý nguồn tri thức này (single source of truth).<\/p><\/li><li><p><b>E:<\/b> Cả 3 quy trình (Customer Service, Sales, Onboarding) chỉ cần <b>tham chiếu (reference) tới cùng một Skill<\/b> này. Khi có thay đổi về quy định, đội tuân thủ chỉ cần cập nhật Skill một lần duy nhất, tất cả các hệ thống sẽ tự động cập nhật theo mà không bị lệch chuẩn.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>B &amp; D:<\/b> Nhúng cứng (embed) vào từng system prompt hoặc để từng nhóm tự viết lại sẽ dẫn đến tình trạng phân tán thông tin, bất đồng bộ khi quy định thay đổi và khó kiểm soát tuân thủ.<\/p><\/li><li><p><b>C:<\/b> Lưu trữ trong tập dữ liệu truy xuất (RAG) không đảm bảo tính thực thi chính xác từng bước như một Skill/Tool được định nghĩa rõ ràng.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-P-113",
    "set": 2,
    "number": 113,
    "type": "multiple",
    "difficulty": "",
    "question": "<p>You are compiling continuity practices that span the deployment lifecycle. Which two practices belong on the list? (Select two.) Each correct answer presents a complete solution.<\/p>",
    "options": {
      "A": "<p>Maintain a stakeholder register and notify the listed parties at every phase transition event.<\/p>",
      "B": "<p>Carry the evaluation framework and reference set forward across iterations rather than rebuilding each time.<\/p>",
      "C": "<p>Archive every phase deliverable in long-term storage to preserve a record of what was produced.<\/p>",
      "D": "<p>Capture lessons learned at the end of each phase and surface them as inputs to the next phase.<\/p>",
      "E": "<p>Lock decisions made in early phases to prevent revisiting them as later phases begin.<\/p>"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "<p><b>Đáp án đúng: B và D<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Tại sao B &amp; D đúng:<\/b> Tính liên tục trong vòng đời triển khai hệ thống AI tập trung vào việc <b>tái sử dụng tài nguyên đánh giá<\/b> và <b>học hỏi liên tục<\/b>:<\/p><ul><li><p><b>B (Liên tục về mặt kỹ thuật/đánh giá):<\/b> Giữ lại và phát triển tiếp khung đánh giá cùng bộ dữ liệu chuẩn (reference set) qua các phiên bản giúp duy trì tiêu chuẩn đo lường nhất quán và tiết kiệm tài nguyên.<\/p><\/li><li><p><b>D (Liên tục về mặt quy trình):<\/b> Thu thập bài học kinh nghiệm sau mỗi giai đoạn và chuyển giao làm đầu vào cho giai đoạn sau giúp hệ thống và quy trình ngày càng hoàn thiện hơn.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>A &amp; C:<\/b> Là các hoạt động quản lý dự án/hồ sơ hành chính thông thường, không mang tính cốt lõi đóng góp vào tính liên tục của giải pháp AI.<\/p><\/li><li><p><b>E:<\/b> Cố định quyết định và không cho phép xem xét lại khi hoàn cảnh thay đổi đi ngược lại nguyên tắc linh hoạt (agility) và quản trị kiến trúc hiện đại (ADR).<\/p><\/li><\/ul><\/li><\/ul>"
  }
];
