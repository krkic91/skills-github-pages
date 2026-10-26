// Generated CCDV-F question bank: 95 questions across 2 sets.
// Source: https://certlab.me/exam/ccdv-f-anthropic-claude-certified-developer-foundations
// Retrieved: 2026-10-26. Source explanations are preserved where available.

const CCAR_QUESTIONS = [
  {
    "id": "CCDV-F-001",
    "set": 1,
    "number": 1,
    "type": "single",
    "question": "<p>Your Claude agent's hooks are currently triggered for every action, which slows down the agent significantly even when actions pose no risk. The team wants to scope hooks more carefully. How would you scope the hooks?<\/p>",
    "options": {
      "A": "<p>Scope hooks to only the high-risk actions, such as destructive operations or sensitive data access, and remove hooks from low-risk actions to balance safety with performance.<\/p>",
      "B": "<p>Disable all hooks while the team re-scopes them, treating the period of no hook enforcement as a temporary state during the re-scoping work.<\/p>",
      "C": "<p>Disable the agent during peak hours so the hook overhead does not slow the application down during the busiest periods of the day across the application's operation.<\/p>",
      "D": "<p>Replace hooks with system prompt instructions on the grounds that prompt instructions can produce the same enforcement effect that hooks produce on the agent's actions.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b><\/p><ul><li><p><b>Cân bằng hiệu năng và bảo mật (Safety vs. Performance):<\/b> Hook giúp kiểm soát an toàn (guardrails), nhưng nếu chạy với mọi hành động rủi ro thấp (như đọc thông tin công khai, định dạng chuỗi) sẽ gây ra độ trễ không cần thiết. Phương pháp đúng là chỉ đặt hook gác ở những điểm nguy hiểm (high-risk interception point).<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>B (Tắt toàn bộ hook trong lúc chỉnh sửa):<\/b> Tạo ra lỗ hổng bảo mật nghiêm trọng nếu hệ thống đang chạy.<\/p><\/li><li><p><b>C (Tắt agent vào giờ cao điểm):<\/b> Làm gián đoạn dịch vụ của người dùng, không phải là giải pháp kỹ thuật hợp lý.<\/p><\/li><li><p><b>D (Thay hook bằng system prompt):<\/b> Prompt không thể thay thế cơ chế thực thi cứng (hard enforcement) của code/hook vì LLM vẫn có xác suất vi phạm chỉ dẫn trong prompt.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-002",
    "set": 1,
    "number": 2,
    "type": "single",
    "question": "<p>You are building a Claude application that needs to deliver model output to end users as it is generated, instead of waiting for the full response to complete. The Claude API mechanism you would use is...<\/p>",
    "options": {
      "A": "<p>Structured JSON output, which delivers responses only after the model has finalized the JSON shape across the entire response.<\/p>",
      "B": "<p>Streaming responses, which deliver tokens incrementally as the model generates them so users see output progressively.<\/p>",
      "C": "<p>The Batch API, which delivers full responses after a delay suitable for non-interactive workloads.<\/p>",
      "D": "<p>Prompt caching, which speeds up the cost profile of future requests and does not affect the delivery timing of the first response.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Phương án B là đáp án đúng và được dự kiến. Nguồn đề thi Claude Developer được cung cấp chọn streaming responses. Streaming cho phép ứng dụng client bắt đầu nhận đầu ra trước khi việc sinh toàn bộ tin nhắn hoàn tất, giúp giảm độ trễ cảm nhận được đối với các trải nghiệm người dùng tương tác.<\/p><p>Tài liệu Messages API chính thức của Anthropic nêu rằng việc thiết lập stream: true khiến các phản hồi được gửi đi theo từng phần thông qua Server-Sent Events (SSE). Claude có thể stream các đoạn văn bản gia tăng (text deltas) cũng như các loại sự kiện khác, bao gồm cả các sự kiện tool-use có cấu trúc và extended-thinking khi có áp dụng. Các SDK của Anthropic cung cấp các hàm hỗ trợ streaming đồng bộ hoặc bất đồng bộ tương ứng.<\/p><p>Ứng dụng tiêu thụ các sự kiện khi chúng đến, cập nhật giao diện người dùng theo từng phần, sau đó xử lý sự kiện cuối cùng hoặc lý do dừng (stop reason) khi việc sinh hoàn tất. Kiến trúc này đặc biệt hữu ích cho các giao diện chat và các trải nghiệm tương tác nhạy cảm với độ trễ khác.<\/p><p>Phương án A giải quyết vấn đề cấu trúc đầu ra, chứ không phải việc truyền tải dần dần. Phương án C được thiết kế cho xử lý bất đồng bộ, hướng đến thông lượng (throughput) chứ không phải tương tác người dùng tức thời. Phương án D giảm chi phí xử lý và độ trễ cho các tiền tố prompt lặp lại, nhưng bản thân nó không biến một phản hồi thành một luồng gia tăng.<\/p><p>Các chủ đề liên quan trong Claude Developer: Messages API, streaming, SSE, token gia tăng, độ trễ, xử lý sự kiện, ứng dụng tương tác, và cơ chế phản hồi API.<\/p>"
  },
  {
    "id": "CCDV-F-003",
    "set": 1,
    "number": 3,
    "type": "single",
    "question": "<p>You are designing a Claude application that processes user-submitted text. Some of that text could include sensitive information such as account numbers or passwords that the application should not send to Claude. How would you design the application?<\/p>",
    "options": {
      "A": "<p>Define the application boundary explicitly, identify what content can leave the boundary for Claude, and add filtering or redaction at the boundary.<\/p>",
      "B": "<p>Add a prompt instruction in the system prompt specifying the categories of sensitive information Claude should disregard when processing user-submitted text.<\/p>",
      "C": "<p>Log all user-submitted text before it is sent to Claude and review the logs periodically to identify whether sensitive information is reaching the model.<\/p>",
      "D": "<p>Apply filtering at the boundary for the most commonly observed sensitive data patterns and expand coverage to additional patterns based on findings from production monitoring.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Đáp án A là giải pháp bảo mật dữ liệu chuẩn nhất (Data Privacy Boundary Pattern):<\/b> Nếu mục tiêu là <b>không gửi<\/b> dữ liệu nhạy cảm đến LLM, việc ngăn chặn và làm sạch dữ liệu (redaction/sanitization) phải được thực hiện bằng mã chương trình tại <b>ranh giới của ứng dụng (client/backend boundary)<\/b> <i>trước khi<\/i> gửi request đến Claude API.<\/p><\/li><li><p><b>Các phương án B, C, D sai:<\/b><\/p><ul><li><p><b>B:<\/b> Gửi dữ liệu nhạy cảm kèm prompt dặn Claude \"hãy bỏ qua\" vẫn khiến dữ liệu nhạy cảm bị gửi lên API, vi phạm nguyên tắc bảo mật.<\/p><\/li><li><p><b>C:<\/b> Ghi log không ngăn chặn được việc dữ liệu bị gửi lên mô hình.<\/p><\/li><li><p><b>D:<\/b> Tiếp cận theo kiểu \"chỉ lọc các mẫu phổ biến rồi mở rộng sau\" để lại lỗ hổng bảo mật nghiêm trọng trên môi trường production.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-004",
    "set": 1,
    "number": 4,
    "type": "single",
    "question": "<p>A teammate has submitted a pull request that adds a Claude-powered feature to your service. The code works, but the prompt and model selection are hard-coded inline, error handling is missing, and there are no tests for the integration. What would you request during code review?<\/p>",
    "options": {
      "A": "<p>Approve the pull request and add the missing pieces yourself in a follow-up commit so the teammate can move on to other work immediately.<\/p>",
      "B": "<p>Approve the pull request as-is, on the grounds that the feature works in the happy path and the missing pieces can be added in follow-up commits.<\/p>",
      "C": "<p>Request changes that move prompt and model configuration to a configurable location and add tests, treating the missing error handling as a follow-up release item.<\/p>",
      "D": "<p>Request changes that move prompt and model configuration to a configurable location, add error handling for Claude API failures, and add tests for the integration.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Đáp án <b>D<\/b> là lựa chọn chính xác theo chuẩn quy trình phát triển phần mềm (Production-ready):<\/p><ul><li><p><b>Tách cấu hình (Configuration Separation):<\/b> Tránh hard-code prompt và model name inline giúp dễ dàng thay đổi cấu hình, cập nhật phiên bản model hoặc tinh chỉnh prompt mà không cần sửa trực tiếp logic code và build lại toàn bộ ứng dụng.<\/p><\/li><li><p><b>Xử lý lỗi (Error Handling):<\/b> Các lệnh gọi API bên ngoài (như Claude API) luôn có rủi ro gặp sự cố (mạng lag, rate limit, sai API key, sự cố server). Việc bắt lỗi là bắt buộc để ứng dụng không bị sụp đổ (crash) đột ngột.<\/p><\/li><li><p><b>Kiểm thử tích hợp (Integration Tests):<\/b> Đảm bảo mã nguồn hoạt động chính xác khi tương tác với API và tránh phát sinh lỗi khi người khác refactor code sau này.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-005",
    "set": 1,
    "number": 5,
    "type": "single",
    "question": "<p>You are implementing a custom tool for your Claude agent. The tool needs to interact with an external pricing service that returns product data. Which of the following best practices would you apply as you develop this tool?<\/p>",
    "options": {
      "A": "<p>Omit the tool description and let the model infer when to use the tool based on the tool's name and the rest of the prompt context.<\/p>",
      "B": "<p>Define the tool with a loose schema and let the model interpret the inputs flexibly on each call the agent makes.<\/p>",
      "C": "<p>Implement the tool with no error handling and let the agent loop catch failures whenever the pricing service returns an error during operation.<\/p>",
      "D": "<p>Define the tool with a clear schema, write a precise description for when to call it, and handle pricing service errors explicitly.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Đáp án D là Best Practice chuẩn khi thiết kế Tool Use (Function Calling) cho LLM:<\/b><\/p><ol start=\"1\"><li><p><b>Clear Schema &amp; Description:<\/b> Claude phụ thuộc rất lớn vào mô tả công cụ (<code>description<\/code>) và định dạng tham số (<code>input_schema<\/code>) để hiểu chính xác mục đích sử dụng công cụ và truyền đúng tham số.<\/p><\/li><li><p><b>Explicit Error Handling:<\/b> Khi dịch vụ bên ngoài bị lỗi (VD: timeout, 404, 500), công cụ nên bắt lỗi và trả về thông báo lỗi dạng văn bản rõ ràng cho Claude để agent biết và đưa ra phương án xử lý (retry hoặc báo lỗi nhẹ nhàng cho người dùng) thay vì làm crash chương trình.<\/p><\/li><\/ol><\/li><li><p><b>Các phương án A, B, C sai:<\/b><\/p><ul><li><p><b>A:<\/b> Không có <code>description<\/code>, Claude sẽ rất dễ gọi sai công cụ hoặc không biết khi nào nên sử dụng.<\/p><\/li><li><p><b>B:<\/b> Schema lỏng lẻo làm tăng tỷ lệ Claude truyền sai kiểu dữ liệu hoặc thiếu các tham số bắt buộc.<\/p><\/li><li><p><b>C:<\/b> Không xử lý lỗi ở cấp độ tool sẽ khiến ứng dụng/agent loop bị văng lỗi ngắt đột ngột (unhandled exception).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-006",
    "set": 1,
    "number": 6,
    "type": "single",
    "question": "<p>Your Claude application processes 50-page legal contracts and produces summaries with citation references back to the source. The team is debating whether to send each contract whole or split it into smaller pieces. The contracts fit within Claude's context window. Initial testing shows that whole-document processing produces summaries with stronger cross-section reasoning but occasionally drifts on citation accuracy in later sections. Chunked processing produces stronger citation accuracy per chunk but loses cross-section reasoning. The team has not decided which property matters more. How would you guide the team's decision?<\/p>",
    "options": {
      "A": "<p>Review the citation accuracy results from chunked processing and determine whether the loss of cross- section reasoning produces summaries that still meet the application's quality bar.<\/p>",
      "B": "<p>Identify which property matters more for the application's actual use case and let that decision drive the chunking approach, then validate the choice against representative contracts.<\/p>",
      "C": "<p>Examine the use cases where cross-section reasoning failures occur and assess whether whole- document processing meets the application's accuracy requirements across a representative sample of contracts.<\/p>",
      "D": "<p>Assess the cost and latency implications of both approaches against the application's performance requirements before recommending which processing strategy to adopt.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Đáp án B là phương án tiếp cận kiến trúc chuẩn xác nhất (Product-Driven Architecture):<\/b> Khi phải đánh đổi (trade-off) giữa 2 đặc tính kỹ thuật (suy luận tổng thể vs. độ chính xác trích dẫn từng đoạn), quyết định kỹ thuật không nên dựa trên đoán mò mà phải dựa trên <b>yêu cầu nghiệp vụ/trường hợp sử dụng thực tế (use case requirements)<\/b>. Sau khi xác định rõ nhu cầu cốt lõi của người dùng cuối, đội ngũ mới chọn hướng tiếp cận phù hợp và validate lại trên tập mẫu đại diện.<\/p><\/li><li><p><b>Các phương án A, C, D sai:<\/b><\/p><ul><li><p><b>A &amp; C:<\/b> Tự ý giả định chọn một trong hai phương pháp trước khi xác định rõ nhu cầu sản phẩm thực sự là gì.<\/p><\/li><li><p><b>D:<\/b> Tập trung vào chi phí/độ trễ khi mà chất lượng đầu ra và mục tiêu cốt lõi của bài toán sản phẩm vẫn chưa được làm rõ.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-007",
    "set": 1,
    "number": 7,
    "type": "single",
    "question": "<p>Your Claude application receives untrusted input from external sources. The team is establishing how the application should treat this untrusted input. Untrusted input would be...<\/p>",
    "options": {
      "A": "<p>Validated and sanitized before being incorporated into prompts, and treated as data the model should not interpret as instructions.<\/p>",
      "B": "<p>Treated identically to trusted input from internal sources, on the grounds that all input the application receives can be handled the same way.<\/p>",
      "C": "<p>Routed through a separate Claude application with more lax security controls so the original application does not handle the untrusted input directly.<\/p>",
      "D": "<p>Blocked entirely so the application accepts only trusted input, with no path for legitimate external input the application might process.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>A. Đúng (Lựa chọn chính xác):<\/b><\/p><ul><li><p><b>Xác thực và làm sạch (Validation &amp; Sanitization):<\/b> Loại bỏ hoặc mã hóa các ký tự đặc biệt/chuỗi độc hại trước khi chèn vào prompt để giảm thiểu nguy cơ tấn công <b>Prompt Injection<\/b>.<\/p><\/li><li><p><b>Coi là dữ liệu thuần túy (Treat as data, not instructions):<\/b> Dùng các cơ chế phân tách rõ ràng (như thẻ XML <code>&lt;user_input&gt;...&lt;/user_input&gt;<\/code>) để dặn mô hình chỉ coi đây là nội dung cần xử lý, không phải là câu lệnh điều khiển hệ thống.<\/p><\/li><\/ul><\/li><li><p><b>B. Sai:<\/b><\/p><ul><li><p>Coi dữ liệu không đáng tin cậy (từ bên ngoài) giống hệt dữ liệu đáng tin cậy (nội bộ) là một sai lầm nghiêm trọng về bảo mật. Dữ liệu bên ngoài hoàn toàn có thể chứa các câu lệnh cố tình \"ghi đè\" (override) prompt hệ thống.<\/p><\/li><\/ul><\/li><li><p><b>C. Sai:<\/b><\/p><ul><li><p>Chuyển hướng qua một ứng dụng khác với cơ chế bảo mật <b>nới lỏng hơn<\/b> không giải quyết được rủi ro bảo mật mà còn làm gia tăng lỗ hổng cho toàn bộ hệ thống.<\/p><\/li><\/ul><\/li><li><p><b>D. Sai:<\/b><\/p><ul><li><p>Chặn hoàn toàn dữ liệu bên ngoài sẽ khiến ứng dụng không thể tiếp nhận và xử lý các yêu cầu thực tế từ người dùng cuối, làm mất đi tính năng vốn có của hệ thống.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-008",
    "set": 1,
    "number": 8,
    "type": "single",
    "question": "<p>You are explaining to a stakeholder why running the same Claude prompt twice can produce slightly different results. The stakeholder is concerned this means the application is broken. How would you address the stakeholder's concern?<\/p>",
    "options": {
      "A": "<p>Tell the stakeholder the variation is a bug that the team will fix in the next release of the application, then create a work ticket to fix the bug.<\/p>",
      "B": "<p>Tell the stakeholder the variation comes from network latency and that switching to a faster network connection will produce more consistent results across runs.<\/p>",
      "C": "<p>Explain that LLMs are non-deterministic by default due to sampling, and describe how the application handles this through validation, retries, or temperature adjustment.<\/p>",
      "D": "<p>Tell the stakeholder the variation is caused by Claude being updated continuously by Anthropic, and that switching to a fixed model snapshot will eliminate the variation entirely.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Đáp án C là câu trả lời chuẩn xác:<\/b> Mô hình ngôn ngữ lớn (LLM) bản chất là <b>non-deterministic<\/b> (không cố định) do quy trình lấy mẫu xác suất (probabilistic sampling). Việc kết quả trả về hơi khác nhau giữa các lần gọi là bản chất tự nhiên của LLM chứ không phải lỗi ứng dụng. Đội ngũ kỹ thuật kiểm soát điều này bằng các kỹ thuật như chỉnh tham số <code>temperature<\/code> (giảm xuống gần 0 để tăng độ ổn định), dùng cơ chế retry, validation hoặc defensive parsing.<\/p><\/li><li><p><b>Các phương án A, B, D sai:<\/b><\/p><ul><li><p><b>A:<\/b> Đây không phải bug nên việc tạo ticket sửa lỗi là vô lý.<\/p><\/li><li><p><b>B:<\/b> Độ trễ mạng (network latency) không ảnh hưởng đến nội dung văn bản mà LLM tạo ra.<\/p><\/li><li><p><b>D:<\/b> Dù dùng một phiên bản snapshot cố định thì việc lấy mẫu xác suất vẫn tạo ra sự biến thiên nhỏ trong câu trả lời nếu <code>temperature<\/code> &gt; 0.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-009",
    "set": 1,
    "number": 9,
    "type": "single",
    "question": "<p>You are designing a multi-step Claude workflow where some steps must reason without seeing the full prior conversation history. The team wants to keep specific context isolated to specific steps. The context engineering technique you would use is...<\/p>",
    "options": {
      "A": "<p>Augmenting the context with all available content at every step so each step has access to the entire prior history of the workflow during its reasoning.<\/p>",
      "B": "<p>Using a single global prompt that applies to every step in the workflow no matter what each step is reasoning about during its run.<\/p>",
      "C": "<p>Context isolation through subagents or multi-step agentic workflows that scope each step's context to only what the step needs.<\/p>",
      "D": "<p>Embedding the full prior history in each step regardless of whether the step needs the prior history for its reasoning.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b><\/p><ul><li><p><b>Context Isolation (Cô lập ngữ cảnh):<\/b> Đây là kỹ thuật thiết kế chuẩn khi xử lý các workflow phức tạp. Bằng cách tách biệt ngữ cảnh thông qua các sub-agent chuyên biệt, mỗi agent/bước chỉ nhận đúng lượng thông tin tối thiểu cần thiết để hoàn thành nhiệm vụ. Điều này giúp giảm độ nhiễu (noise), tiết kiệm token và tránh việc mô hình bị ảnh hưởng bởi các thông tin không liên quan từ các bước trước.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>A &amp; D (Bổ sung/chèn toàn bộ lịch sử vào mọi bước):<\/b> Đi ngược lại hoàn toàn với yêu cầu của đề bài là \"cô lập ngữ cảnh\" và \"không xem toàn bộ lịch sử\". Việc truyền tràn lan ngữ cảnh làm tăng chi phí token và dễ gây nhiễu cho LLM.<\/p><\/li><li><p><b>B (Sử dụng một global prompt duy nhất):<\/b> Dùng chung một prompt cho tất cả các bước không giúp phân tách ngữ cảnh và không đáp ứng được yêu cầu cô lập dữ liệu theo từng bước riêng biệt.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-010",
    "set": 1,
    "number": 10,
    "type": "single",
    "question": "<p>You maintain a Claude application that uses Claude Sonnet 4.5 across several production workflows. Anthropic released Claude Sonnet 4.7, which your evaluation suite shows performing 8% better on your highest-volume task. However, this version produces different output formatting on two of your structured- extraction prompts that downstream consumers parse with regex-based code. To roll out the upgrade, you would...<\/p>",
    "options": {
      "A": "<p>Adjust the prompts to constrain output format, re-run evaluations against the expected parsing-layer schema, then roll the model out with a feature flag and the option to revert per workflow.<\/p>",
      "B": "<p>Switch the model identifier in the application's configuration to the new model, then monitor production for parsing failures to be fixed as failures surface.<\/p>",
      "C": "<p>Rewrite the downstream parsing code to accept a wider range of output formats to ensure the application is resilient to future model upgrades without requiring prompt changes.<\/p>",
      "D": "<p>Keep the older model in production to preserve the fragile parsing layer that may risk breaking with any model change.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Đáp án A đúng vì việc nâng cấp model nên được coi là một thay đổi ứng dụng được kiểm soát, chứ không phải là một sự thay thế định danh (identifier substitution) đơn giản. Hướng dẫn evaluation của Anthropic khuyến nghị xác định các tiêu chí thành công có thể đo lường được và chạy các evaluation dành riêng cho tác vụ mô phỏng sát với hành vi thực tế ở production, bao gồm cả các trường hợp biên (edge cases). Hướng dẫn về model-migration của Anthropic cũng khuyến nghị tương tự việc kiểm thử các model thay thế trước khi chuyển khối lượng công việc sang production.<\/p><p>Ở đây, model mới cải thiện tác vụ có volume cao nhất nhưng lại thay đổi định dạng output trên các prompt trích xuất có cấu trúc (structured-extraction). Điều đó có nghĩa là việc migration này vừa có lợi ích về chất lượng vừa có rủi ro về tính tương thích. Phản ứng đúng đắn là thắt chặt hợp đồng output (output contract), chạy lại các evaluation dựa trên ranh giới parsing/schema, sau đó triển khai theo từng bước bằng feature flag và một đường rollback riêng cho từng workflow. Điều này giới hạn phạm vi ảnh hưởng (blast radius) và bảo toàn một phương án khôi phục đã biết là hoạt động tốt.<\/p><p>Đáp án B đẩy một thay đổi hành vi chưa được xác thực trực tiếp vào production. Đáp án C làm cho việc parsing ở downstream trở nên dễ dãi hơn, điều này có thể che giấu sự trôi dạt schema (schema drift) thay vì thực thi một hợp đồng ổn định. Đáp án D bảo tồn vĩnh viễn một triển khai mong manh và loại bỏ đi sự cải thiện chất lượng đã được đo lường.<\/p><p>Lấy phiên bản model được nêu trong câu hỏi làm bối cảnh, A là chiến lược vòng đời đúng đắn. Các chủ đề liên quan trong Study Guide: model migration, regression evaluation, structured output, compatibility testing, progressive rollout, rollback, và production change management.<\/p>"
  },
  {
    "id": "CCDV-F-011",
    "set": 1,
    "number": 11,
    "type": "single",
    "question": "<p>Your Claude application validates structured output but has been treating validation failures as terminal errors. Each validation failure causes the entire user request to fail. The team wants to handle validation failures more gracefully. How would you handle the validation failures?<\/p>",
    "options": {
      "A": "<p>Pass validation failures directly to downstream systems and let each downstream system decide how to handle the malformed output.<\/p>",
      "B": "<p>Disable output validation until the underlying cause of validation failures has been identified and addressed in a future release.<\/p>",
      "C": "<p>Treat validation failures as a recognized error path that triggers retry, repair, or fallback logic before failing the user request.<\/p>",
      "D": "<p>Tell users that validation failures are unavoidable and instruct them to perform manual accuracy checks before relying on outputs.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Đáp án C là chiến lược thiết kế xử lý lỗi chuẩn xác:<\/b> Trong phát triển ứng dụng với LLM, việc kiểm tra validation bị thất bại là điều có thể dự đoán trước. Thay vì dừng ứng dụng lập tức (terminal error), hệ thống nên thiết lập <b>Error Recovery Flow<\/b>:<\/p><ol start=\"1\"><li><p><b>Retry:<\/b> Thử lại cuộc gọi API.<\/p><\/li><li><p><b>Repair:<\/b> Gửi lại đoạn JSON lỗi kèm thông báo lỗi cho Claude để mô hình tự sửa (Self-correction prompt).<\/p><\/li><li><p><b>Fallback:<\/b> Sử dụng giá trị mặc định an toàn trước khi chấp nhận báo lỗi cho người dùng.<\/p><\/li><\/ol><\/li><li><p><b>Các phương án A, B, D sai:<\/b><\/p><ul><li><p><b>A:<\/b> Chuyển dữ liệu lỗi xuống hạ nguồn gây nguy cơ làm crash các hệ thống khác.<\/p><\/li><li><p><b>B:<\/b> Tắt xác thực khiến dữ liệu hỏng đi sâu hơn vào hệ thống.<\/p><\/li><li><p><b>D:<\/b> Đẩy trách nhiệm xử lý lỗi hệ thống sang cho người dùng cuối là trải nghiệm người dùng rất tồi.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-012",
    "set": 1,
    "number": 12,
    "type": "single",
    "question": "<p>You are running Claude Code as part of an automated continuous integration pipeline. The pipeline needs Claude Code to execute a set of well-defined tasks without prompting for confirmation, and the output needs to be captured for downstream processing. How would you configure the pipeline?<\/p>",
    "options": {
      "A": "<p>Replace Claude Code with a different tool that does not require any configuration to operate without confirmation prompts in the pipeline.<\/p>",
      "B": "<p>Run Claude Code in headless mode with the required permissions configured in settings.json and capture its output for downstream processing.<\/p>",
      "C": "<p>Disable Claude Code's confirmation prompts globally across all environments so the pipeline runs without interruption from any prompt.<\/p>",
      "D": "<p>Run Claude Code in interactive mode and have a developer manually approve every confirmation prompt while the pipeline executes its tasks.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn B:<\/b><\/p><ul><li><p>Trong môi trường CI/CD tự động, công cụ CLI như Claude Code cần chạy ở chế độ <b>headless (không giao diện tương tác)<\/b> để tránh bị dừng chờ người dùng bấm xác nhận.<\/p><\/li><li><p>Cấu hình quyền sẵn trong file <code>settings.json<\/code> giúp công cụ có đủ thẩm quyền thực thi tác vụ an toàn mà không bị ngắt quãng, đồng thời cho phép bắt stdout/stderr để truyền dữ liệu cho các bước tiếp theo trong pipeline.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>A (Thay thế bằng công cụ khác):<\/b> Không giải quyết yêu cầu sử dụng Claude Code và không cần thiết.<\/p><\/li><li><p><b>C (Tắt xác nhận trên toàn bộ các môi trường):<\/b> Việc tắt cảnh báo toàn cục (bao gồm cả môi trường local) gây ra rủi ro bảo mật rất lớn.<\/p><\/li><li><p><b>D (Chạy thủ công ở chế độ interactive):<\/b> Đi ngược lại hoàn toàn với bản chất của một pipeline tự động (CI/CD).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-013",
    "set": 1,
    "number": 13,
    "type": "single",
    "question": "<p>You are designing a Claude application that maintains user sessions across multi-turn conversations. The product team has asked how the application will handle session lifecycle: when sessions should expire, how state is reset, and how the application avoids carrying stale context into new conversations. How would you design session lifecycle?<\/p>",
    "options": {
      "A": "<p>Define explicit session expiration rules, state reset triggers, and rules for starting fresh sessions so stale context does not leak into new conversations.<\/p>",
      "B": "<p>Define a single short session timeout that applies across all conversations and treat the timeout as the application's complete session lifecycle mechanism.<\/p>",
      "C": "<p>Define explicit session expiration rules but rely on users to start new conversations when they want fresh context, with no automatic reset triggers in the application.<\/p>",
      "D": "<p>Define state reset triggers tied to specific application events but apply them across all sessions globally, with no per-session expiration rules.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Đáp án A là thiết kế chuẩn xác nhất:<\/b> Một hệ thống quản lý session đầy đủ cần kết hợp cả 3 yếu tố: quy tắc hết hạn (timeout/expiration), các điểm trigger để reset trạng thái (ví dụ khi hoàn thành tác vụ), và logic tạo phiên mới rõ ràng nhằm tránh rò rỉ thông tin rác từ ngữ cảnh cũ.<\/p><\/li><li><p><b>Các phương án B, C, D sai:<\/b> Vì chúng chỉ dựa vào một cơ chế duy nhất (chỉ dùng timeout đơn lẻ ở B, phụ thuộc hoàn toàn vào thao tác thủ công của người dùng ở C, hoặc bỏ qua hết hạn phiên theo từng người dùng ở D).<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-014",
    "set": 1,
    "number": 14,
    "type": "single",
    "question": "<p>You are setting up Claude Code for a new project repository. Your team has shared coding standards, preferred libraries, and project-specific context that every developer working on the repository should have available when they use Claude Code. How would you set this up?<\/p>",
    "options": {
      "A": "<p>Document the standards in a separate wiki page maintained outside the repository so the documentation stays decoupled from the source code.<\/p>",
      "B": "<p>Configure Claude Code through environment variables that each developer sets on their own machine when they begin working in the repository.<\/p>",
      "C": "<p>Initialize Claude Code in the repository and document the standards and project-specific context in a CLAUDE.md file at the repository root.<\/p>",
      "D": "<p>Add the coding standards and project context to the repository's existing README file and direct developers to reference it when starting Claude Code sessions.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Đáp án C là chuẩn kiến trúc của Claude Code:<\/b> Claude Code tự động tìm kiếm và đọc file cấu hình <b><code>CLAUDE.md<\/code><\/b> nằm ở thư mục gốc (root) của dự án để nạp các chỉ thị về phong cách code, quy trình build/test, thư viện sử dụng và ngữ cảnh đặc thù của repository cho mọi phiên làm việc.<\/p><\/li><li><p><b>Các phương án A, B, D sai:<\/b><\/p><ul><li><p><b>A &amp; D:<\/b> Claude Code không tự động tối ưu việc đọc ngữ cảnh quy chuẩn từ Wiki bên ngoài hay file <code>README<\/code> chung của dự án.<\/p><\/li><li><p><b>B:<\/b> Biến môi trường dùng để quản lý cấu hình hệ thống (như API key), không dùng để lưu trữ các tài liệu hướng dẫn ngữ cảnh và tiêu chuẩn viết code.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-015",
    "set": 1,
    "number": 15,
    "type": "single",
    "question": "<p>Your application uses the Messages API to handle multi-turn conversations. Each new turn resends the entire conversation history, and your token costs are growing as conversations get longer. You suspect there is a more efficient approach. How would you address this?<\/p>",
    "options": {
      "A": "<p>Use prompt caching to reuse the static portions of the conversation context across turns instead of paying for them at the normal input-token rate on every request the application sends.<\/p>",
      "B": "<p>Switch to the Batch API for every turn so the per-call cost is reduced, treating the batch as the team's primary cost-control mechanism for multi-turn work.<\/p>",
      "C": "<p>Truncate every conversation to the last two messages so that token usage stays low and costs remain predictable across the application's normal operation.<\/p>",
      "D": "<p>Summarize each conversation after every turn and replace the full history with the summary on the next request, reducing token count at the cost of fidelity.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b><\/p><ul><li><p><b>Prompt Caching<\/b> của Anthropic cho phép bộ nhớ đệm lưu trữ các đoạn hội thoại cố định (như system prompt, lịch sử chat trước đó).<\/p><\/li><li><p>Khi gửi lượt chat tiếp theo, mô hình chỉ tính phí đọc cache (rẻ hơn đáng kể — giảm đến 90% chi phí input token) thay vì tính lại toàn bộ lịch sử trò chuyện theo giá bình thường, giúp tối ưu chi phí tối đa cho ứng dụng chat nhiều lượt.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>B (Dùng Batch API cho mọi lượt chat):<\/b> Batch API dành cho các tác vụ xử lý hàng loạt bất đồng bộ (có độ trễ lên tới 24h), không phù hợp cho trải nghiệm chat tương tác thời gian thực (real-time).<\/p><\/li><li><p><b>C (Cắt ngắn hội thoại chỉ còn 2 tin nhắn cuối):<\/b> Việc cắt ngắn quá mức sẽ làm mất đi ngữ cảnh quan trọng của toàn bộ cuộc trò chuyện, làm giảm chất lượng phản hồi.<\/p><\/li><li><p><b>D (Tóm tắt sau mỗi lượt):<\/b> Tóm tắt liên tục làm mất chi tiết ngữ cảnh (fidelity) và việc gọi AI để tóm tắt sau <i>mỗi<\/i> lượt cũng tốn thêm chi phí/độ trễ không cần thiết.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-016",
    "set": 1,
    "number": 16,
    "type": "single",
    "question": "<p>A teammate has asked you to explain when a Skill would be the right choice over an MCP server. The teammate is unsure how the two differ in practice when both can be reused across teams. How would you explain the distinction?<\/p>",
    "options": {
      "A": "<p>A Skill and an MCP server are equivalent extension mechanisms that the team can use interchangeably for any reusable capability that needs to be accessible across teams.<\/p>",
      "B": "<p>A Skill is the older mechanism and an MCP server is the newer one, so the team should prefer an MCP server for any reusable capability that the team builds going forward.<\/p>",
      "C": "<p>A Skill is preferable for cross-team reuse because it loads more efficiently than an MCP server during normal operation in the team's typical multi-team workloads.<\/p>",
      "D": "<p>A Skill bundles prompts, scripts, and data into a package the model loads as a unit while an MCP server exposes resources, tools, and prompts through a standard client interface.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Đáp án D là bản chất chuyên môn chính xác:<\/b><\/p><ul><li><p><b>Skill:<\/b> Là một gói đóng gói (bundle) gồm các file hướng dẫn (prompt), mã kịch bản (script) và dữ liệu đi kèm, được tải nguyên một khối (loaded as a unit) vào ngữ cảnh của mô hình khi cần thực hiện công việc cụ thể.<\/p><\/li><li><p><b>MCP Server (Model Context Protocol):<\/b> Là một máy chủ ứng dụng độc lập đóng vai trò cung cấp các tài nguyên, công cụ và prompt thông qua giao thức chuẩn API/Client để ứng dụng kết nối dynamically.<\/p><\/li><\/ul><\/li><li><p><b>Các phương án A, B, C sai:<\/b> Vì chúng làm lẫn lộn bản chất kiến trúc và vòng đời của hai khái niệm (Skill không phải phiên bản cũ của MCP, và chúng không hoàn toàn giống nhau để dùng thay thế tùy ý).<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-017",
    "set": 1,
    "number": 17,
    "type": "single",
    "question": "<p>Your Claude application makes high-volume API calls during business hours and very few calls overnight. The team is concerned about staying within rate limits during peak hours and wants to understand how the Claude API enforces those limits. How would you proceed?<\/p>",
    "options": {
      "A": "<p>Review the API documentation for streaming endpoints and evaluate whether migrating peak-hour calls to streaming reduces exposure to rate limit enforcement.<\/p>",
      "B": "<p>Assess the average payload size of current API calls and consolidate requests where possible to reduce the total number of calls made during peak hours.<\/p>",
      "C": "<p>Identify the rate limits, design the application to stay within them during peak hours, and use exponential backoff when limits are reached.<\/p>",
      "D": "<p>Examine the peak-hour request patterns in your application logs and smooth traffic by distributing requests more evenly across the business-hours window.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Đáp án C là phương án chuẩn nhất theo khuyến nghị xử lý Rate Limits của Anthropic:<\/b><\/p><ol start=\"1\"><li><p>Nắm rõ các hạn mức rate limit của tài khoản (RPM - Request Per Minute, TPM - Token Per Minute).<\/p><\/li><li><p>Thiết kế logic ứng dụng chủ động kiểm soát lưu lượng (rate limiting at client-side).<\/p><\/li><li><p>Xử lý khi gặp lỗi <code>429 Too Many Requests<\/code> bằng kỹ thuật <b>Exponential Backoff<\/b> (thử lại với khoảng thời gian chờ tăng dần theo cấp số nhân kèm jitter).<\/p><\/li><\/ol><\/li><li><p><b>Các phương án A, B, D sai:<\/b><\/p><ul><li><p><b>A:<\/b> Streaming không làm giảm hay loại bỏ hạn mức Rate Limit của API.<\/p><\/li><li><p><b>B &amp; D:<\/b> Gộp request hoặc rải đều lưu lượng không xử lý được gốc rễ bài toán nếu đột biến (bursts) xảy ra, và không phải giải pháp thiết kế khả năng chống chịu lỗi (resilience) tiêu chuẩn khi làm việc với API.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-018",
    "set": 1,
    "number": 18,
    "type": "single",
    "question": "<p>You are reviewing an architectural diagram for a Claude-powered travel-booking system. The diagram shows a top-level component that interprets user requests and three subordinate components that handle flights, hotels, and ground transportation. The top-level component is responsible for routing each request, sequencing the subordinate components, and reconciling their outputs into a final itinerary. The diagram also shows that each subordinate component has its own tool list and own short conversation history that is not shared with the others. Which architectural pattern does this diagram most closely describe?<\/p>",
    "options": {
      "A": "<p>A manager and supervisor pattern with isolated context per subagent, where the top-level agent coordinates specialized subagents that each maintain their own conversation history and tool list.<\/p>",
      "B": "<p>A manager and supervisor pattern with shared context, where the top-level agent and the subagents all share a single conversation history that grows as the request flows through the system.<\/p>",
      "C": "<p>A pipeline pattern, where each component processes the user request in sequence and passes the full conversation history along with the request to the next component in the pipeline.<\/p>",
      "D": "<p>A retrieval-augmented pattern, where the top-level component retrieves relevant context from the subordinate components' indexed data stores before generating each response.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao A đúng?<\/b><\/p><ul><li><p><b>Cấu trúc phân cấp (Orchestrator / Subagent):<\/b> Có một thành phần điều phối chính ở trên đảm nhận việc phân tích yêu cầu tổng thể, phân chia công việc cho các thành phần con và tổng hợp kết quả cuối cùng.<\/p><\/li><li><p><b>Cô lập ngữ cảnh (Context Isolation):<\/b> Đề bài nhấn mạnh <i>\"mỗi thành phần cấp dưới có lịch sử trò chuyện và danh sách công cụ riêng không chia sẻ với nhau\"<\/i>. Điều này khớp chính xác với đặc tính <b>isolated context per subagent<\/b>.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác sai?<\/b><\/p><ul><li><p><b>B sai:<\/b> Phương án B đề cập đến việc dùng chung toàn bộ ngữ cảnh (shared context), trái ngược hoàn toàn với dữ kiện đề bài cho.<\/p><\/li><li><p><b>C sai:<\/b> Mô hình Pipeline là xử lý nối tiếp cố định (A → B → C) và truyền dần dữ liệu tiếp nối, không có sự điều phối, định tuyến hay tổng hợp linh hoạt từ một Supervisor.<\/p><\/li><li><p><b>D sai:<\/b> Retrieval-Augmented Generation (RAG) tập trung vào việc tìm kiếm/truy xuất thông tin từ kho tri thức (vector database/index) để bổ sung vào prompt, chứ không phải mô hình phân quyền và điều phối hành động giữa các agent tự chủ.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-019",
    "set": 1,
    "number": 19,
    "type": "single",
    "question": "<p>Your Claude application is hitting context window limits when processing long customer service transcripts. A junior developer suggests increasing the temperature parameter to fix the issue. How would you respond?<\/p>",
    "options": {
      "A": "<p>Increase the temperature parameter as the junior developer suggested and observe whether the context window issue resolves over the next several runs of the application in production.<\/p>",
      "B": "<p>Adjust the temperature parameter together with the max_tokens parameter, treating the combined adjustment as the team's mechanism for managing context window pressure during long-transcript processing.<\/p>",
      "C": "<p>Remove the system prompt entirely to make room for longer transcripts in each request, freeing up context window space the system prompt would otherwise consume.<\/p>",
      "D": "<p>Explain that temperature controls sampling randomness and is unrelated to context capacity, then address the context issue through summarization or chunking.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn D:<\/b><\/p><ul><li><p><b>Bản chất của <code>temperature<\/code>:<\/b> Tham số này chỉ ảnh hưởng đến độ sáng tạo/ngẫu nhiên trong câu trả lời của mô hình, hoàn toàn không làm thay đổi hay mở rộng giới hạn số lượng token mà context window có thể chứa.<\/p><\/li><li><p><b>Giải pháp đúng cho vượt context window:<\/b> Phải xử lý lại dữ liệu đầu vào bằng các kỹ thuật như <b>tóm tắt (summarization)<\/b>, <b>chia nhỏ văn bản (chunking)<\/b> hoặc <b>RAG (Retrieval-Augmented Generation)<\/b>.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>A &amp; B (Điều chỉnh <code>temperature<\/code>):<\/b> Sai kiến thức cơ bản về tham số của LLM. Tăng/giảm <code>temperature<\/code> hay kết hợp với <code>max_tokens<\/code> không làm giảm kích thước của dữ liệu đầu vào (input transcript).<\/p><\/li><li><p><b>C (Xóa hoàn toàn system prompt):<\/b> System prompt đóng vai trò định hướng hành vi cho AI. Xóa bỏ nó chỉ tiết kiệm được một lượng token rất nhỏ nhưng lại làm mất đi sự kiểm soát đối với chất lượng phản hồi của agent.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-020",
    "set": 1,
    "number": 20,
    "type": "single",
    "question": "<p>Your team is preparing a new Claude application for production, and the product team has asked for a cost projection. The team needs to estimate the cost based on expected request volume, average input length, and average output length. How would you build the projection?<\/p>",
    "options": {
      "A": "<p>Build a cost model that uses the average per-request cost from a similar Claude application the team built last year, scaling that figure by expected request volume.<\/p>",
      "B": "<p>Build a cost model that combines expected request volume, average input tokens, average output tokens, the chosen model's pricing, and any caching benefits.<\/p>",
      "C": "<p>Build a cost model that combines expected request volume and average input tokens, treating output tokens as a small enough share of cost to leave out of the projection.<\/p>",
      "D": "<p>Build a cost model based on expected request volume and the chosen model's pricing, treating average input and output token counts as variables to be estimated post-launch.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Đáp án B là mô hình tính toán chi phí đầy đủ và chính xác nhất:<\/b> Chi phí sử dụng Claude API được tính dựa trên cả Input Tokens và Output Tokens (thường output tokens có giá cao hơn input tokens), nhân với đơn giá của model cụ thể (như Claude 3.5 Sonnet, Claude 3 Haiku...). Ngoài ra, việc tính đến cơ chế Prompt Caching giúp tối ưu và phản ánh đúng chi phí thực tế.<\/p><\/li><li><p><b>Các phương án A, C, D sai:<\/b><\/p><ul><li><p><b>A:<\/b> Áp dụng chi phí của ứng dụng cũ không chính xác vì mỗi ứng dụng có ngữ cảnh prompt và lượng token khác nhau.<\/p><\/li><li><p><b>C:<\/b> Bỏ qua Output Tokens là sai lầm vì giá token đầu ra luôn đắt hơn token đầu vào.<\/p><\/li><li><p><b>D:<\/b> Trì hoãn việc ước tính token đến sau khi ra mắt sẽ không đáp ứng được yêu cầu tạo bảng dự toán chi phí ban đầu của đội ngũ sản phẩm.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-021",
    "set": 1,
    "number": 21,
    "type": "single",
    "question": "<p>Your team is preparing to roll out a configuration change that updates several prompt versions across a Claude application used by multiple downstream systems. The change has already been tested in staging, but the team has not assessed how the prompt change will affect each downstream system that depends on the application's output. What would you do before rolling out the change?<\/p>",
    "options": {
      "A": "<p>Assess the configuration impact on each downstream system before rolling out, and coordinate with downstream system owners as needed.<\/p>",
      "B": "<p>Document the prompt version changes in the application changelog and proceed with the rollout, treating the staging test results as sufficient evidence of impact across all downstream systems.<\/p>",
      "C": "<p>Notify downstream system owners that a change is coming and schedule the rollout for the following week, without conducting a formal impact assessment.<\/p>",
      "D": "<p>Limit the rollout to systems that were explicitly included in staging testing, and defer all other downstream systems until a later release cycle.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Đáp án A là quy trình chuẩn quản lý thay đổi (Change Management):<\/b> Khi cập nhật prompt của một ứng dụng chung, định dạng hoặc nội dung đầu ra của LLM có thể thay đổi nhẹ, làm ảnh hưởng đến các logic xử lý phía sau của hệ thống hạ nguồn. Việc đánh giá tác động kỹ lưỡng và phối hợp với đại diện các hệ thống phụ thuộc là bước bắt buộc trước khi đưa lên production.<\/p><\/li><li><p><b>Các phương án B, C, D sai:<\/b> Bỏ qua khâu đánh giá tác động (B, C) sẽ dẫn đến nguy cơ làm lỗi ứng dụng ở production. Việc trì hoãn thiếu kế hoạch (D) không giải quyết triệt để vấn đề mà chỉ làm gián đoạn luồng phát hành.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-022",
    "set": 1,
    "number": 22,
    "type": "single",
    "question": "<p>Your Claude application runs long agentic workflows where the agent makes many tool calls, and the conversation history grows quickly. After about 20 tool calls, you notice the agent's responses become less focused and sometimes ignore earlier task constraints. How would you address this?<\/p>",
    "options": {
      "A": "<p>Remove tool calling from the workflow entirely so the agent operates as a single textgeneration step with no tool outputs accumulating in the context window.<\/p>",
      "B": "<p>Apply context engineering techniques such as tool output pruning or compaction to keep the active task state visible while reducing the volume of older content.<\/p>",
      "C": "<p>Increase the model's context window so the agent can hold every tool output at full detail across the entire workflow no matter how many tool calls it accumulates.<\/p>",
      "D": "<p>Restart the agent every five tool calls to prevent any drift, with the agent losing all task state at each restart point during the workflow.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Đáp án B là phương án tối ưu nhất:<\/b> Khi cửa sổ ngữ cảnh bị lấp đầy bởi quá nhiều lịch sử gọi công cụ, hiện tượng \"context drift\" (lệch ngữ cảnh/mất tập trung) sẽ xảy ra. Kỹ thuật <b>Context Engineering<\/b> (như nén tóm tắt các bước cũ hoặc xóa bớt các dữ liệu kết quả công cụ dư thừa không còn dùng tới) giúp mô hình tập trung vào các ràng buộc cốt lõi và nhiệm vụ hiện tại mà không làm mất đi luồng trạng thái quan trọng.<\/p><\/li><li><p><b>Phương án A sai:<\/b> Xóa bỏ công cụ sẽ làm mất đi khả năng thực thi tác vụ phức tạp của agent.<\/p><\/li><li><p><b>Phương án C sai:<\/b> Tăng kích thước context window chỉ giúp chứa thêm dung lượng chứ không giải quyết được triệt để hiện tượng mô hình bị loãng/mất tập trung khi thông tin rác tích tụ quá nhiều (gợi nhớ hiện tượng <i>lost in the middle<\/i>).<\/p><\/li><li><p><b>Phương án D sai:<\/b> Khởi động lại và làm mất hoàn toàn trạng thái công việc sẽ khiến agent không thể hoàn thành chuỗi tác vụ liên tục.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-023",
    "set": 1,
    "number": 23,
    "type": "single",
    "question": "<p>Your Claude application requests structured JSON output from the model. Most of the time the JSON is well- formed, but occasionally Claude returns malformed JSON that breaks downstream processing. How would you handle the malformed output?<\/p>",
    "options": {
      "A": "<p>Manually inspect every response before downstream processing so a human reviewer catches any malformed JSON before the application passes the response to downstream systems.<\/p>",
      "B": "<p>Add output validation that parses Claude's response against the expected schema and treats malformed output as a recognized error path with retry or fallback handling.<\/p>",
      "C": "<p>Switch to free-form text output so the application no longer depends on JSON parsing for any of the responses it sends to downstream systems during normal operation.<\/p>",
      "D": "<p>Retry the same request repeatedly until valid JSON appears in the model's response, with the retry loop adding delay to the application's response time on affected requests.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Đáp án B là giải pháp chuẩn kiến trúc kỹ thuật (Defensive Parsing &amp; Schema Validation):<\/b> Khi làm việc với đầu ra có cấu trúc (structured output) từ LLM, luôn cần có lớp <b>Validation<\/b> (như Pydantic, Zod, hoặc <code>json.loads<\/code>) ở ứng dụng. Khi phát hiện lỗi parse hoặc sai schema, ứng dụng cần coi đó là một trường hợp lỗi hợp lệ để kích hoạt luồng <b>Retry (có prompt nhắc lại lỗi)<\/b> hoặc <b>Fallback logic<\/b> một cách an toàn.<\/p><\/li><li><p><b>Các phương án A, C, D sai:<\/b><\/p><ul><li><p><b>A:<\/b> Kiểm tra thủ công loại bỏ tính tự động hóa của ứng dụng.<\/p><\/li><li><p><b>C:<\/b> Bỏ JSON chuyển sang văn bản tự do không giải quyết được nhu cầu dữ liệu có cấu trúc cho các hệ thống phía sau.<\/p><\/li><li><p><b>D:<\/b> Thử lại vô hạn (loop infinitely) mà không có kiểm soát lỗi/giới hạn sẽ gây treo ứng dụng và tốn chi phí API.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-024",
    "set": 1,
    "number": 24,
    "type": "single",
    "question": "<p>You are deciding between deploying a Claude-powered agent on Anthropic's hosted infrastructure or self- hosting under a \"bring your own cloud\" model in your own AWS account. The agent processes customer data subject to your enterprise's data residency policies, but the team wants to ship quickly and avoid managing infrastructure. Which deployment model would you recommend?<\/p>",
    "options": {
      "A": "<p>Self-hosting under BYOC for an initial pilot, then evaluating whether to migrate to Anthropic-hosted infrastructure once the agent's data-handling patterns are better understood.<\/p>",
      "B": "<p>Deploying on Anthropic-hosted infrastructure while the team drafts a request to update the enterprise data residency policy to accommodate hosted AI deployments.<\/p>",
      "C": "<p>Self-hosting under BYOC to satisfy the data residency requirement, while working with the infrastructure team to reduce the operational overhead of managing the deployment.<\/p>",
      "D": "<p>Deploying on Anthropic-hosted infrastructure to meet the team's shipping timeline, and flagging the data residency requirement for a follow-up compliance review after launch.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Phương án C tuân theo ràng buộc chi phối trong tình huống này: yêu cầu về vị trí lưu trữ dữ liệu (data residency) là một yêu cầu bắt buộc của doanh nghiệp, trong khi việc giảm thiểu quản lý hạ tầng chỉ là một ưu tiên mong muốn. Một kiến trúc triển khai không thể cố tình vi phạm một ranh giới tuân thủ bắt buộc chỉ để đẩy nhanh việc bàn giao. Do đó, câu hỏi cần được hiểu theo giả định đã nêu rằng môi trường BYOC được mô tả thỏa mãn chính sách vị trí lưu trữ dữ liệu của doanh nghiệp.<\/p><p>Tài liệu Managed Agents hiện tại của Anthropic phân biệt giữa các môi trường cloud do Anthropic quản lý và các sandbox tự lưu trữ (self-hosted) chạy trên hạ tầng do khách hàng kiểm soát. Việc tự lưu trữ giữ cho việc thực thi công cụ, tệp tin, và lưu lượng ra ngoài (network egress) nằm trong hạ tầng của khách hàng, mặc dù Anthropic có tài liệu ghi rằng đầu vào/đầu ra hướng tới model vẫn có thể đi qua control plane của Anthropic; do đó, việc phê duyệt tuân thủ pháp lý thực tế phải dựa trên các yêu cầu luồng dữ liệu chính xác của tổ chức.<\/p><p>Phương án B và D trì hoãn hoặc vi phạm chính sách hiện có một cách rõ ràng. Phương án A không cần thiết đưa vào một kế hoạch di trú khỏi kiến trúc tuân thủ vị trí lưu trữ dữ liệu mà không xác định được liệu việc di trú đó có được phép hay không.<\/p><p>Do đó, C là đáp án được kỳ vọng cho kỳ thi chứng chỉ này. Các chủ đề liên quan trong Study Guide: kiến trúc triển khai (deployment topology), vị trí lưu trữ dữ liệu (data residency), tự lưu trữ (self-hosting), ràng buộc tuân thủ, quyền sở hữu hạ tầng, ranh giới bảo mật, và đánh đổi kiến trúc.<\/p>"
  },
  {
    "id": "CCDV-F-025",
    "set": 1,
    "number": 25,
    "type": "single",
    "question": "<p>You are building a Claude application that processes 10,000 customer emails overnight to extract structured data. The work is non-interactive, runs once daily, and has a flexible completion window of several hours. Which Claude API would you use?<\/p>",
    "options": {
      "A": "<p>The Batch API, which is designed for non-interactive workloads with flexible completion windows.<\/p>",
      "B": "<p>The streaming responses API to process each email and return partial results to a database as the model generates them.<\/p>",
      "C": "<p>The real-time Messages API, processing the emails one at a time sequentially to ensure consistent ordering of results.<\/p>",
      "D": "<p>The real-time Messages API with concurrent requests to process the emails as fast as possible during the overnight window.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Đáp án A là lựa chọn chuẩn xác nhất:<\/b> <b>Message Batches API<\/b> của Anthropic được thiết kế riêng cho các tác vụ xử lý số lượng lớn (bulk processing/async background jobs) không yêu cầu phản hồi ngay lập tức (thời gian xử lý lên tới 24 giờ). Sử dụng Batch API giúp giảm 50% chi phí so với Messages API thông thường và tránh bị đụng trần giới hạn rate limit.<\/p><\/li><li><p><b>Các phương án B, C, D sai:<\/b><\/p><ul><li><p><b>B:<\/b> Streaming API dùng để giảm độ trễ hiển thị cho người dùng tương tác trực tiếp (UI), không phù hợp cho tác vụ batch qua đêm.<\/p><\/li><li><p><b>C &amp; D:<\/b> Dùng Messages API thời gian thực (real-time) cho 10.000 request xử lý ngầm qua đêm vừa tốn chi phí gấp đôi, vừa dễ gây tắc nghẽn lưu lượng (rate limits) không cần thiết.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-026",
    "set": 1,
    "number": 26,
    "type": "single",
    "question": "<p>You are designing a Claude application that helps medical researchers analyze multi-step clinical case studies. The application must work through differential diagnoses by considering symptom patterns, weighing evidence across competing hypotheses, and showing intermediate reasoning steps before producing a final recommendation. The team is choosing among Claude's available model options. The model option best suited to this use case is...<\/p>",
    "options": {
      "A": "<p>Zero-shot prompting alone with no model option adjustments, which keeps the application's configuration as simple as possible.<\/p>",
      "B": "<p>Extended thinking, which lets the model reason through the differential diagnosis steps before producing the final recommendation.<\/p>",
      "C": "<p>Fast mode, which prioritizes the lowest possible latency at the expense of reasoning depth on complex tasks.<\/p>",
      "D": "<p>A smaller model with a tighter context window, which encourages the model to focus its limited capacity on the task.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Đáp án B là sự lựa chọn chính xác:<\/b> Tính năng <b>Extended Thinking<\/b> (Tư duy mở rộng/Thinking mode) của Anthropic Claude được thiết kế đặc biệt cho các tác vụ phức tạp yêu cầu suy luận nhiều bước, phân tích đa chiều và hiển thị quá trình suy luận trung gian (intermediate reasoning) trước khi xuất ra kết quả cuối cùng.<\/p><\/li><li><p><b>Các phương án A, C, D sai:<\/b><\/p><ul><li><p><b>A:<\/b> Zero-shot đơn thuần không cung cấp thêm không gian suy luận sâu cho các ca bệnh phức tạp.<\/p><\/li><li><p><b>C:<\/b> Chế độ ưu tiên tốc độ/độ trễ thấp sẽ làm giảm chất lượng suy luận chuyên sâu.<\/p><\/li><li><p><b>D:<\/b> Mô hình nhỏ và context hẹp sẽ hạn chế khả năng phân tích lượng lớn dữ liệu triệu chứng và bằng chứng y khoa.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-027",
    "set": 1,
    "number": 27,
    "type": "single",
    "question": "<p>You are integrating Claude into an application written in Python. The Claude SDK provides a Python client that wraps the underlying REST API. How would you integrate the SDK?<\/p>",
    "options": {
      "A": "<p>Call the REST API directly with raw HTTP requests so the application avoids the SDK's abstraction between the application code and the API.<\/p>",
      "B": "<p>Use the Claude Python SDK and let it handle authentication, retries, and response parsing through its standard documented patterns for Python integrations.<\/p>",
      "C": "<p>Use a different LLM provider's SDK and translate the responses into Claude's API shape so the application can switch providers in the future.<\/p>",
      "D": "<p>Skip the SDK and embed Claude calls in shell commands invoked from Python, so that the application runs the calls outside the main Python process.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p><b>Giải thích chi tiết:<\/b><\/p><ul><li><p><b>Tại sao B đúng?<\/b><\/p><ul><li><p><b>Hỗ trợ chính thức:<\/b> Anthropic cung cấp SDK Python để tối ưu hóa việc kết nối, bao gồm cả client đồng bộ (synchronous) lẫn bất đồng bộ (asynchronous).<\/p><\/li><li><p><b>Giảm mã lặp (Boilerplate):<\/b> SDK đã tích hợp sẵn các tính năng phức tạp nhưng cần thiết như quản lý API key (xác thực), tự động retry khi gặp lỗi mạng/giới hạn băng thông (rate limit), parse dữ liệu JSON trả về, xử lý exception và hỗ trợ streaming.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác sai?<\/b><\/p><ul><li><p><b>A sai:<\/b> Tự viết mã gọi HTTP thô khiến bạn phải tự triển khai lại từ đầu toàn bộ cơ chế xác thực, retry, timeout và xử lý lỗi — gây tốn thời gian và dễ phát sinh lỗi không đáng có.<\/p><\/li><li><p><b>B sai:<\/b> Việc dùng SDK của bên thứ ba rồi dựng thêm lớp chuyển đổi (translation layer) tạo ra sự phức tạp dư thừa, dễ dẫn đến lỗi tương thích khi API của Claude cập nhật.<\/p><\/li><li><p><b>D sai:<\/b> Gọi lệnh shell từ Python làm tăng độ rủi ro về bảo mật, khó quản lý tiến trình và xử lý lỗi kém hiệu quả hơn nhiều so với việc gọi trực tiếp bằng thư viện Python.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-028",
    "set": 1,
    "number": 28,
    "type": "single",
    "question": "<p>Your Claude application has multi-step workflows where each step's output is needed only briefly before the agent moves on. The cumulative tool output is filling the context window with content that is no longer relevant. How would you handle the accumulating tool output?<\/p>",
    "options": {
      "A": "<p>Apply tool output pruning to remove tool outputs that are no longer needed by later steps in the workflow.<\/p>",
      "B": "<p>Apply prompt caching to the accumulated tool outputs so the application does not re-pay for the older content on each subsequent step.<\/p>",
      "C": "<p>Switch to a smaller Claude model that processes context more efficiently and treat any quality loss as a tradeoff for the cost reduction.<\/p>",
      "D": "<p>Keep every tool output in the context indefinitely so the agent has the full record of every step it has executed during the workflow.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Đáp án A là kỹ thuật quản lý Context Window tối ưu:<\/b> Khi agent chạy quy trình lặp qua nhiều bước, dữ liệu trả về từ công cụ (ví dụ: nội dung HTML trang web, file log lớn) thường rất tốn dung lượng ngữ cảnh. Kỹ thuật <b>Tool Output Pruning<\/b> (hoặc Context Trimming) loại bỏ hoặc tóm tắt các <code>tool_result<\/code> cũ không còn giá trị suy luận giúp giữ cửa sổ ngữ cảnh sạch sẽ, tiết kiệm chi phí và tăng chính xác.<\/p><\/li><li><p><b>Các phương án B, C, D sai:<\/b><\/p><ul><li><p><b>B:<\/b> Prompt Caching giảm chi phí tính toán nhưng không giải quyết được vấn đề cửa sổ ngữ cảnh bị đầy (context limit overflow).<\/p><\/li><li><p><b>C:<\/b> Chuyển sang mô hình nhỏ hơn vẫn gặp tình trạng ngợp ngữ cảnh nếu dữ liệu tiếp tục tích lũy.<\/p><\/li><li><p><b>D:<\/b> Giữ lại toàn bộ dữ liệu sẽ làm tràn context window và tăng độ nhiễu cho mô hình.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-029",
    "set": 1,
    "number": 29,
    "type": "single",
    "question": "<p>You are choosing a Claude model for a high-volume classification task. Each classification is straightforward, latency requirements are tight, and per-request cost matters at scale. Which model would you choose?<\/p>",
    "options": {
      "A": "<p>A mid-tier Claude model selected by default, because mid-tier models balance quality and cost in a way the team can apply across most tasks.<\/p>",
      "B": "<p>Multiple Claude models in series, where each request runs through more than one model and the application combines the outputs into a final classification.<\/p>",
      "C": "<p>A smaller, faster Claude model, because the task is straightforward and the workload prioritizes latency and per-request cost at scale.<\/p>",
      "D": "<p>The largest, highest-capability Claude model, to maximize quality on every classification the application produces during normal operation across all requests.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Đáp án C là sự lựa chọn tối ưu về mặt kiến trúc:<\/b> Trong họ mô hình Anthropic Claude (Haiku - Sonnet - Opus), các tác vụ phân loại đơn giản với lượng request lớn và đòi hỏi phản hồi nhanh, tối ưu chi phí luôn phù hợp nhất với dòng <b>mô hình nhỏ và nhanh hơn (như Claude Haiku)<\/b>.<\/p><\/li><li><p><b>Các phương án A, B, D sai:<\/b><\/p><ul><li><p><b>A:<\/b> Chọn mô hình tầm trung (Sonnet) theo mặc định sẽ lãng phí tài nguyên và chi phí không cần thiết cho một tác vụ đơn giản.<\/p><\/li><li><p><b>B:<\/b> Chạy chuỗi nhiều mô hình sẽ làm tăng độ trễ (latency) và chi phí lên gấp nhiều lần.<\/p><\/li><li><p><b>D:<\/b> Dùng mô hình cao nhất (Opus) gây chi phí rất đắt và độ trễ cao, hoàn toàn đi ngược lại yêu cầu của bài toán.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-030",
    "set": 1,
    "number": 30,
    "type": "single",
    "question": "<p>You are setting up the configuration management approach for a new Claude Code project. Your team will use CLAUDE.md files and settings.json files to control behavior, and you want to make sure changes are tracked and reviewable. The configuration management approach would...<\/p>",
    "options": {
      "A": "<p>Duplicate CLAUDE.md and settings.json files in multiple repositories to provide redundancy, on the grounds that a single source of truth is risky for project configuration.<\/p>",
      "B": "<p>Version-control CLAUDE.md and settings.json files in a separate repository from the project's source code, so configuration evolves independently from the application code over time.<\/p>",
      "C": "<p>Version-control CLAUDE.md alongside the project's source code and settings.json files in a separate repository from the project's source code.<\/p>",
      "D": "<p>Version-control CLAUDE.md and settings.json files alongside the project's source code, with changes reviewed through standard pull request workflows the team applies.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Đáp án D là Best Practice chuẩn về quản lý cấu hình trong dự án phần mềm &amp; Claude Code:<\/b> Các file cấu hình dự án như <code>CLAUDE.md<\/code> hay <code>.claude/settings.json<\/code> cần nằm trực tiếp trong cùng một Git repository với mã nguồn. Điều này đảm bảo:<\/p><ol start=\"1\"><li><p>Cấu hình luôn đồng bộ phiên bản (version sync) với trạng thái code hiện tại.<\/p><\/li><li><p>Mọi thay đổi về prompt/rules/settings đều trải qua quy trình <b>Pull Request / Code Review<\/b> minh bạch như mã nguồn thông thường.<\/p><\/li><\/ol><\/li><li><p><b>Các phương án A, B, C sai:<\/b><\/p><ul><li><p><b>A:<\/b> Tạo nhiều bản sao trên nhiều repo gây mất đồng bộ và vi phạm nguyên tắc \"Single Source of Truth\".<\/p><\/li><li><p><b>B &amp; C:<\/b> Tách cấu hình sang repo riêng gây khó khăn cho việc quản lý phiên bản tương thích với mã nguồn ứng dụng.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-031",
    "set": 1,
    "number": 31,
    "type": "single",
    "question": "<p>You are building an MCP server that exposes several internal data sources as MCP resources. The server needs to be deployed so multiple Claude applications can integrate with it. How would you approach the build and deployment?<\/p>",
    "options": {
      "A": "<p>Author the server with clearly defined resources, tools, and prompts, choose a communication pattern, and deploy to an accessible hosting environment.<\/p>",
      "B": "<p>Build the MCP server with resource and tool definitions scoped to the first Claude application that needs it, and extend the definitions to additional applications as each integration is requested.<\/p>",
      "C": "<p>Deploy the MCP server only on individual developer machines, with the Claude applications unable to reach the server outside each developer's machine.<\/p>",
      "D": "<p>Bypass the MCP server and embed each data source directly in every Claude application that needs the data, with each application maintaining its own integration.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b><\/p><ul><li><p><b>Quy trình chuẩn của MCP Server:<\/b> Model Context Protocol (MCP) là tiêu chuẩn mở giúp kết nối AI client với các nguồn dữ liệu/công cụ. Để phục vụ nhiều ứng dụng, phương pháp đúng là định nghĩa rõ ràng primitive của MCP (resources, tools, prompts), lựa chọn phương thức giao tiếp/truyền tải (transport mechanism như SSE/HTTP hoặc Stdio) và triển khai lên hạ tầng mạng chung để các ứng dụng Claude cùng truy cập được.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>B (Giới hạn scope cho ứng dụng đầu tiên rồi mở rộng sau):<\/b> Việc giới hạn phạm vi thiết kế theo từng ứng dụng đơn lẻ đi ngược lại bản chất tái sử dụng và chuẩn hóa của MCP.<\/p><\/li><li><p><b>C (Chỉ triển khai trên máy local của dev):<\/b> Nếu chỉ chạy trên máy local, các ứng dụng Claude khác trong môi trường production/production-like sẽ không thể kết nối tới server này.<\/p><\/li><li><p><b>D (Bỏ qua MCP server, tích hợp trực tiếp dữ liệu vào từng app):<\/b> Đi ngược lại mục đích chính của việc dùng MCP (tạo ra giao diện chung chuẩn hóa, tránh việc mỗi app phải tự duy trì kết nối riêng biệt tới từng nguồn dữ liệu).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-032",
    "set": 1,
    "number": 32,
    "type": "single",
    "question": "<p>The team is debating whether to integrate with the Claude API directly or through a thirdparty abstraction layer that supports multiple LLM providers. The team has identified that all current and projected use cases run on Claude, no internal customer has requested LLM portability, and the team's product roadmap does not mention multi-provider support over the next two years. The third-party abstraction would add roughly 15 percent overhead in code complexity and introduce one additional dependency. Which integration approach would you recommend?<\/p>",
    "options": {
      "A": "<p>The third-party abstraction layer, on the grounds that multi-provider support is valuable for any application as a matter of long-term flexibility across vendors.<\/p>",
      "B": "<p>Both integration paths in parallel, where the application uses each path on different runs to compare which performs better in production over time.<\/p>",
      "C": "<p>A custom multi-provider abstraction layer the team builds in-house so that the team controls every part of the abstraction the application uses for its API calls.<\/p>",
      "D": "<p>Direct integration with Claude through its SDK, because no multi-provider need exists and abstraction would add complexity that does not pay off.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>D tuân theo nguyên tắc lựa chọn kiến trúc đơn giản nhất mà vẫn đáp ứng được các yêu cầu đã được chứng minh.<\/p><p>Đề thi được cung cấp đánh dấu rõ ràng D là đáp án đúng. Trong tình huống này, khả năng chuyển đổi nhà cung cấp (portability) không phải là một yêu cầu chức năng hiện tại, cũng không phải là một yêu cầu có thể thấy trước trong roadmap. Do đó, việc thêm một lớp trừu tượng sẽ tạo ra độ phức tạp có thể đo lường được mà không mang lại khả năng sản phẩm cụ thể nào đã được xác định.<\/p><p>Anthropic cung cấp các SDK đa mục đích chính thức cho Claude bằng nhiều ngôn ngữ. Các SDK này expose trực tiếp Messages API đồng thời bổ sung các giao diện idiomatic, type safety, hỗ trợ streaming, retry, và xử lý lỗi. Anthropic cũng mô tả riêng các lớp tương thích (compatibility layers) và các thư viện dành riêng cho framework như những bề mặt tích hợp thay thế, chứ không phải là yêu cầu bắt buộc cho việc phát triển Claude thông thường.<\/p><p>Một lớp trừu tượng của bên thứ ba trở nên hợp lý khi có yêu cầu thực sự về nhiều nhà cung cấp, chuyển đổi vendor, giao diện chuẩn hóa đa model, hoặc một nền tảng kiến trúc hiện có bắt buộc phải có. Không có điều nào trong số đó tồn tại ở đây. Việc xây dựng tính linh hoạt đó một cách đầu cơ sẽ làm tăng số lượng dependency, bề mặt gỡ lỗi, công việc tương thích phiên bản, và khả năng các tính năng đặc thù của Claude bị che khuất sau một API mẫu số chung thấp nhất.<\/p><p>Phương án A tối ưu hóa cho các yêu cầu giả định trong tương lai. Phương án B nhân đôi độ phức tạp vận hành. Phương án C tạo ra gánh nặng bảo trì thậm chí còn lớn hơn.<\/p><p>Các chủ đề liên quan trong Claude Developer: Claude App Design, lựa chọn SDK, ranh giới trừu tượng hóa, quản lý dependency, YAGNI, kiến trúc tích hợp, và yêu cầu về khả năng chuyển đổi nhà cung cấp.<\/p>"
  },
  {
    "id": "CCDV-F-033",
    "set": 1,
    "number": 33,
    "type": "single",
    "question": "<p>A new Claude model release includes performance improvements for several reasoning tasks but has changed the format of its responses to system prompts that use multi-section instructions. Your application uses multi- section system prompts heavily. Initial evaluation on the application's actual workload shows the new model performs 8 percent better on reasoning tasks but produces malformed output on roughly 3 percent of requests because of the format change. The team is debating whether to upgrade. How would you decide?<\/p>",
    "options": {
      "A": "<p>Upgrade immediately, because the 8 percent reasoning improvement outweighs the 3 percent malformed output rate across the application's typical request distribution.<\/p>",
      "B": "<p>Adapt the application's system prompt to the new model's format expectations and reevaluate, then upgrade only if the adapted prompt eliminates the malformed output while preserving the reasoning improvements.<\/p>",
      "C": "<p>Upgrade and add a downstream validation step that catches the 3 percent malformed output before it reaches users, treating the validation step as the team's mitigation for the format change.<\/p>",
      "D": "<p>Stay on the previous model permanently to avoid the malformed output rate and any future format changes that subsequent model releases might introduce in the application.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Bộ đề thi được cung cấp đánh dấu B là đáp án đúng. Bản thân tình huống này đã cho thấy lý do tại sao việc nâng cấp model cần được xem như một thay đổi phần mềm phải được đánh giá, chứ không phải là một sự thay thế tự động: model mới cải thiện một chỉ số nhưng lại gây ra sự thoái lui (regression) ở một chỉ số khác.<\/p><p>Hướng dẫn chính thức của Anthropic về việc lựa chọn model khuyến nghị nên xây dựng các bài kiểm tra benchmark riêng cho từng trường hợp sử dụng của ứng dụng, kiểm thử model với các prompt và dữ liệu thực tế của ứng dụng, so sánh chất lượng phản hồi và hiệu năng ở các trường hợp biên (edge case), và cân nhắc hiệu năng so với các đánh đổi vận hành. Do đó, hành động đúng đắn là điều chỉnh system prompt nhiều phần cho phù hợp với hành vi của model mới rồi lặp lại quá trình đánh giá. Chỉ khi sự thoái lui về định dạng đã được loại bỏ - hoặc giảm xuống dưới một ngưỡng chấp nhận được rõ ràng - thì mới nên tiến hành nâng cấp.<\/p><p>Phương án A giả định sai rằng mức cải thiện 8% về suy luận có thể bù trừ về mặt số học cho tỷ lệ 3% đầu ra bị lỗi định dạng; hai chỉ số này đo lường các hậu quả khác nhau và không thể đơn giản trừ đi nhau. Phương án C chỉ xử lý sự không tương thích đã biết ở khâu hạ nguồn thay vì sửa trực tiếp mối tương tác giữa prompt và model trước. Phương án D từ chối vĩnh viễn mọi cải tiến trong tương lai và không phù hợp với nguyên tắc phát triển vòng đời có kiểm soát.<\/p><p>Nguyên tắc kỹ thuật ở đây là di trú (migration) thông qua kiểm thử hồi quy (regression testing) và điều chỉnh (adaptation), chứ không phải nâng cấp mù quáng hay né tránh phiên bản mới vĩnh viễn.<\/p><p>Các chủ đề liên quan trong Claude Developer: Systems Life Cycle, di trú model (model migration), đánh giá hồi quy (regression evaluation), điều chỉnh prompt, kiểm thử tương thích, các cổng triển khai (deployment gates), và tiến hóa liên tục.<\/p>"
  },
  {
    "id": "CCDV-F-034",
    "set": 1,
    "number": 34,
    "type": "single",
    "question": "<p>You are designing an agent that handles a complex claim-processing workflow. Each claim moves through fact extraction, eligibility evaluation, and a decision step. The three subtasks have distinct success criteria, and some claims require iteration between fact extraction and eligibility evaluation before a decision can be reached. Which agent pattern would you apply?<\/p>",
    "options": {
      "A": "<p>A graph-based pattern that lets the agent move between subtasks based on the state of each claim, with each subtask evaluated against its own criteria.<\/p>",
      "B": "<p>A streaming pattern that emits partial decisions as the agent processes each claim, refining the output until a final decision emerges from the stream.<\/p>",
      "C": "<p>A single tool-use loop pattern that gives one agent access to all the tools needed for fact extraction, eligibility evaluation, and decision-making.<\/p>",
      "D": "<p>A linear chain pattern that processes every claim through fact extraction, then eligibility evaluation, then decision, with no return paths between subtasks.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Đáp án A là lựa chọn chuẩn xác:<\/b> Đối với các quy trình công việc (workflows) phức tạp có các chu kỳ lặp (cycles/feedback loops), nhiều trạng thái rẽ nhánh và tiêu chí đánh giá riêng cho từng bước, <b>Graph-based pattern<\/b> (như LangGraph hoặc các mô hình State Machine) là kiến trúc tối ưu nhất để quản lý luồng thực thi linh hoạt.<\/p><\/li><li><p><b>Các phương án B, C, D sai:<\/b><\/p><ul><li><p><b>B:<\/b> Streaming chỉ dùng để hiển thị dữ liệu thời gian thực cho UI, không phải là mô hình điều hướng quy trình (workflow orchestration).<\/p><\/li><li><p><b>C:<\/b> Gom tất cả công cụ vào một vòng lặp đơn lẻ sẽ làm agent dễ mất định hướng, khó kiểm soát trạng thái và không tách biệt được tiêu chí thành công cho từng bước.<\/p><\/li><li><p><b>D:<\/b> Mô hình chuỗi tuyến tính (Linear chain) không hỗ trợ đường quay lại (return paths/iterations) giữa các bước theo yêu cầu của đề bài.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-035",
    "set": 1,
    "number": 35,
    "type": "single",
    "question": "<p>Your Claude application uses structured output that is consumed by downstream code. The team wants to handle malformed or unexpected output gracefully so it does not crash downstream systems. The best choice for handling this issue would be to...<\/p>",
    "options": {
      "A": "<p>Crash on any unexpected output and require manual recovery on affected requests the application handles during normal operation.<\/p>",
      "B": "<p>Silently drop any output that does not match expectations so downstream systems do not see the malformed output the application receives from the model.<\/p>",
      "C": "<p>Use the output the model produces and leave schema enforcement to a later phase of production after the application is more complete.<\/p>",
      "D": "<p>Apply defensive parsing to handle unexpected fields, missing values, and type mismatches that the downstream code might otherwise crash on.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Đáp án D là phương án tối ưu nhất:<\/b> Trong lập trình tích hợp LLM, đầu ra có cấu trúc (như JSON) đôi khi có thể bị thiếu trường, sai kiểu dữ liệu hoặc thêm trường ngoài dự kiến. <b>Defensive Parsing<\/b> (sử dụng fallback values, validation schema với các quy tắc linh hoạt) giúp ứng dụng hoạt động an toàn, không bị crash mà vẫn xử lý dữ liệu hợp lệ.<\/p><\/li><li><p><b>Các phương án A, B, C sai:<\/b><\/p><ul><li><p><b>A:<\/b> Crash ứng dụng làm gián đoạn trải nghiệm người dùng.<\/p><\/li><li><p><b>B:<\/b> Âm thầm bỏ dữ liệu sẽ làm mất dấu vết (loss of data) và khó debug.<\/p><\/li><li><p><b>C:<\/b> Bỏ qua kiểm tra schema dẫn đến lỗi runtime ở các bước phía sau.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-036",
    "set": 1,
    "number": 36,
    "type": "single",
    "question": "<p>Your Claude application's error handling currently logs every API error with the same severity level. The team wants to differentiate between errors that should page an on-call engineer and errors that should be logged for later review. How would you structure the error handling?<\/p>",
    "options": {
      "A": "<p>Page on every error, on the grounds that paging guarantees that no error is missed by the team during normal operation across the application's lifecycle.<\/p>",
      "B": "<p>Disable logging for any error that does not page, treating non-paging errors as not worth recording for later review either.<\/p>",
      "C": "<p>Categorize errors by severity based on impact and recoverability, then route each category to the appropriate channel for paging or logging.<\/p>",
      "D": "<p>Log every error with the same severity, on the grounds that differentiating severity adds complexity that does not pay off in most application setups over time.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Đáp án C là chuẩn thiết kế hệ thống (Observability Best Practice):<\/b> Phân loại lỗi dựa trên mức độ ảnh hưởng và khả năng tự khôi phục (ví dụ: lỗi 4xx client/rate limit có thể retry hoặc log để theo dõi, lỗi 5xx server critical hoặc mất kết nối kéo dài cần cảnh báo khẩn cấp/page kỹ sư) giúp tối ưu hóa việc vận hành và tránh \"báo động giả\" (alert fatigue).<\/p><\/li><li><p><b>Các phương án A, B, D sai:<\/b> Phương án A gây nhiễu cảnh báo liên tục; B bỏ sót dữ liệu phân tích hệ thống; D không giải quyết được nhu cầu thực tế của đội ngũ.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-037",
    "set": 1,
    "number": 37,
    "type": "single",
    "question": "<p>A new agent your team built handles customer support tickets, but it routinely gets confused when a single ticket spans billing, shipping, and product issues. The agent often loses track of which sub-issue it has already addressed and revisits the same one. The team is considering architectural changes. What architectural change would you recommend?<\/p>",
    "options": {
      "A": "<p>Introduce an orchestrator agent that delegates billing, shipping, and product sub-issues to dedicated subagents.<\/p>",
      "B": "<p>Switch to a deterministic workflow that handles billing, shipping, and product issues in a fixed sequence.<\/p>",
      "C": "<p>Increase the size of the agent's context window so it can hold the full ticket history at once.<\/p>",
      "D": "<p>Add detailed prompting that instructs the agent to track which sub-issues have been resolved and which remain.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b><\/p><ul><li><p><b>Mô hình Orchestrator-Workers (Điều phối - Công nhân):<\/b> Đây là một pattern kiến trúc chuẩn khi xử lý các tác vụ phức tạp, đa miền. Orchestrator agent chịu trách nhiệm chia nhỏ ticket, điều hướng từng phần cho các sub-agent chuyên biệt (chỉ tập trung vào 1 mảng như billing hay shipping), sau đó tổng hợp kết quả. Điều này giúp tránh việc agent bị nhiễu ngữ cảnh và lặp lại thao tác.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>B (Chuyển sang quy trình cố định/định hình):<\/b> Khách hàng không phản hồi theo thứ tự cố định. Một workflow tuyến tính cứng nhắc sẽ thiếu linh hoạt và dễ thất bại khi thông tin từ người dùng đến không theo trình tự.<\/p><\/li><li><p><b>C (Tăng dung lượng context window):<\/b> Vấn đề ở đây là agent bị nhầm lẫn và lặp lại hành động (vấn đề về lập luận/điều hướng), chứ không phải thiếu bộ nhớ. Tăng context window chỉ làm nhiễu thêm thông tin (needle in a haystack problem).<\/p><\/li><li><p><b>D (Thêm prompt chi tiết hơn):<\/b> Câu hỏi hỏi về <b>thay đổi kiến trúc (architectural change)<\/b>. Prompting chỉ là tinh chỉnh ở cấp độ lời gọi, không giải quyết triệt để giới hạn xử lý luồng phức tạp của một đơn agent đơn độc.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-038",
    "set": 1,
    "number": 38,
    "type": "single",
    "question": "<p>Your enterprise has a contract with AWS that requires Claude API calls to flow through Amazon Bedrock rather than the direct Anthropic API. Your team is building a new Claude application and is unfamiliar with this constraint. How would you build the application?<\/p>",
    "options": {
      "A": "<p>Build two parallel implementations of every call, one for the direct Anthropic API and one for Bedrock, and pick the faster one at runtime.<\/p>",
      "B": "<p>Build the application against the direct Anthropic API now and migrate to Bedrock in a follow-up release once the team has more experience with the Bedrock API.<\/p>",
      "C": "<p>Configure the application to invoke Claude through the Bedrock-compatible API path while keeping the application's logic provider-agnostic.<\/p>",
      "D": "<p>Build the application against the direct Anthropic API and ignore the contractual requirement to route Claude calls through Amazon Bedrock.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Đáp án C là thiết kế phần mềm chuẩn xác:<\/b><\/p><ol start=\"1\"><li><p>Tuân thủ ràng buộc về tuân thủ/hợp đồng (compliance) bằng cách định tuyến qua Amazon Bedrock.<\/p><\/li><li><p>Sử dụng SDK/Client tương thích (ví dụ: các thư viện mã nguồn mở hoặc SDK chính thức hỗ trợ abstraction layer) để giữ cho <b>logic cốt lõi của ứng dụng không bị phụ thuộc chặt vào một nhà cung cấp cụ thể (provider-agnostic)<\/b>. Điều này giúp mã nguồn sạch sẽ và dễ bảo trì.<\/p><\/li><\/ol><\/li><li><p><b>Các phương án A, B, D sai:<\/b><\/p><ul><li><p><b>A:<\/b> Xây dựng 2 luồng song song gây lãng phí tài nguyên, phức tạp mã nguồn và vi phạm chính sách hợp đồng với AWS.<\/p><\/li><li><p><b>B &amp; D:<\/b> Bỏ qua yêu cầu hợp đồng hoặc trì hoãn việc tuân thủ để đẩy rủi ro pháp lý/tuân thủ lên môi trường thực tế là không đúng quy trình phát triển ứng dụng doanh nghiệp.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-039",
    "set": 1,
    "number": 39,
    "type": "single",
    "question": "<p>You are designing a Claude application that will require structured JSON output for downstream processing. The output schema is well-defined, and downstream systems will reject malformed JSON.Your application design would ...<\/p>",
    "options": {
      "A": "<p>Structure the prompt to request output in a schema that is described in plain English, with downstream systems parsing whatever shape Claude produces.<\/p>",
      "B": "<p>Define a clear schema and structure the prompt to request output in that schema, with downstream systems handling any validation needed.<\/p>",
      "C": "<p>Define a clear schema, structure the prompt to request output in that schema, and validate Claude's output against the schema before passing it downstream.<\/p>",
      "D": "<p>Avoid structured output and use free-form text everywhere instead, on the grounds that free-form text is more flexible and handles edge cases better than structured schemas.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b><\/p><ul><li><p><b>Thực hành tốt nhất (Best Practice):<\/b> Mặc dù Claude tuân thủ cấu trúc rất tốt, nhưng các mô hình ngôn ngữ vẫn có khả năng trả về định dạng không như mong đợi. Việc thực hiện bước <b>validation (kiểm tra hợp lệ)<\/b> ở phía ứng dụng trước khi gửi tới downstream service là bắt buộc để đảm bảo tính an toàn và ngăn chặn hệ thống bị lỗi ngắt đột ngột.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>A (Mô tả schema bằng tiếng Anh tự nhiên &amp; để downstream tự xử lý):<\/b> Thiếu tính chặt chẽ trong cấu trúc prompt và đồn trách nhiệm xử lý lỗi cho downstream system (nơi đề bài đã nêu rõ là sẽ từ chối nếu sai định dạng).<\/p><\/li><li><p><b>B (Bỏ qua bước validate trước khi gửi):<\/b> Đưa trực tiếp dữ liệu chưa kiểm tra xuống downstream sẽ dẫn đến nguy cơ các hệ thống phía sau bị crash hoặc báo lỗi hàng loạt.<\/p><\/li><li><p><b>D (Dùng văn bản tự do thay vì JSON có cấu trúc):<\/b> Trái ngược hoàn toàn với yêu cầu bài toán là cần <b>structured JSON output<\/b> cho downstream processing.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-040",
    "set": 1,
    "number": 40,
    "type": "single",
    "question": "<p>Your Claude agent performs database operations. A recent incident occurred where the agent ran a destructive query that affected production data. The team wants to add deterministic controls to prevent similar incidents. How would you prevent similar incidents?<\/p>",
    "options": {
      "A": "<p>Run the agent only during business hours when humans are available to monitor its activity, treating the schedule as the primary control mechanism for destructive operations.<\/p>",
      "B": "<p>Add Claude hooks that intercept database operations and apply deterministic checks, such as blocking destructive queries or requiring approval, before the queries execute.<\/p>",
      "C": "<p>Switch to a higher-capability Claude model on the grounds that a more capable model is less likely to run destructive queries during normal operation across all requests.<\/p>",
      "D": "<p>Add a system prompt instruction telling the agent to be careful with database operations on every request the application handles during normal operation across all incoming traffic.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Đáp án B là giải pháp an toàn tuyệt đối theo nguyên tắc Deterministic Guardrails:<\/b> Khi làm việc với các tác vụ nguy hiểm (như sửa/xóa cơ sở dữ liệu production), việc chỉ tin tưởng vào LLM (qua prompt hay mô hình mạnh hơn) là chưa đủ vì LLM mang tính xác suất (probabilistic). Việc áp dụng <b>Claude Hooks<\/b> hoặc các middleware để kiểm tra bằng mã chương trình cố định (deterministic code check) — ví dụ: chặn lệnh <code>DROP<\/code>, <code>DELETE<\/code> không điều kiện, hoặc bắt buộc phải có Human-in-the-loop phê duyệt — là cách duy nhất đảm bảo an toàn tuyệt đối.<\/p><\/li><li><p><b>Các phương án A, C, D sai:<\/b><\/p><ul><li><p><b>A:<\/b> Giám sát thủ công không phải là cơ chế kiểm soát tự động và vẫn có rủi ro do sai sót con người.<\/p><\/li><li><p><b>C &amp; D:<\/b> Tin tưởng hoàn toàn vào mô hình mạnh hơn hoặc prompt nhắc nhở không thể loại bỏ 100% rủi ro LLM bị hallucinate hoặc hiểu sai câu lệnh.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-041",
    "set": 1,
    "number": 41,
    "type": "single",
    "question": "<p>Your Claude application is producing inconsistent outputs for similar inputs, even when using the same model and prompt. You want to debug the issue systematically. Your debugging approach would...<\/p>",
    "options": {
      "A": "<p>Lower the model's temperature and re-run the inconsistent inputs to determine whether the parameter change reduces output variability across runs.<\/p>",
      "B": "<p>Retry every request that produces an unexpected output and log the results to identify whether repeated calls converge on a consistent response pattern.<\/p>",
      "C": "<p>Assume inconsistent outputs reflect normal LLM non-determinism and document the variability as an accepted characteristic of the application's behavior.<\/p>",
      "D": "<p>Capture full traces of input, system prompt, user messages, model output, and parameters, then analyze the differences between consistent and inconsistent runs.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Nguồn đề thi khẳng định rõ ràng D là đáp án đúng. Tính không tất định (non-determinism) là một đặc tính bình thường của LLM, nhưng điều đó không có nghĩa là mọi sự không nhất quán đều mặc nhiên là không thể tránh khỏi. Việc chẩn đoán một cách hệ thống bắt đầu bằng việc thu thập đầy đủ các điều kiện thực thi cho cả những lần chạy thành công và không thành công.<\/p><p>Một bản trace hữu ích cần bộc lộ được input thực tế của người dùng, system prompt, các tin nhắn hoặc ngữ cảnh trước đó, các công cụ (tools) và kết quả công cụ (tool results) nếu có, mã định danh model, các tham số request, đầu ra, lý do dừng (stop reason), và các sự kiện thực thi liên quan. Hạ tầng agent hiện tại của Anthropic cung cấp các sự kiện session, span và agent chính là để mang lại khả năng quan sát (observability) vào trạng thái session và tiến trình thực thi. Điều này giúp việc so sánh trở nên khả thi: kỹ sư có thể xác định liệu các lệnh gọi tưởng chừng \"giống nhau\" có thực sự khác nhau về ngữ cảnh tích lũy, trạng thái công cụ, cấu hình model, tham số, hay dữ liệu bên ngoài hay không.<\/p><p>Phương án A thay đổi một biến số trước khi xác định được nguyên nhân, và ở các phiên bản Claude mới hơn, temperature thậm chí có thể không còn cấu hình được. Phương án B tạo thêm các mẫu thử nhưng không đảm bảo hiểu rõ được các điều kiện nền tảng.<\/p><p>Phương án C vội vàng xếp một hành vi chưa được giải thích vào loại tính không tất định có thể chấp nhận được.<\/p><p>Trình tự đúng đắn là quan sát, so sánh, hình thành giả thuyết, tái hiện, điều chỉnh, và đánh giá.<\/p><p>Các chủ đề liên quan trong Claude Developer: khả năng quan sát (observability), tracing, gỡ lỗi (debugging), tính không tất định của model, thu thập trạng thái request, tái hiện lỗi, và chẩn đoán trong môi trường production.<\/p>"
  },
  {
    "id": "CCDV-F-042",
    "set": 1,
    "number": 42,
    "type": "single",
    "question": "<p>A Claude application is producing outputs that drift away from the expected JSON format after several conversation turns. The first few turns produce correctly formatted output, but later turns gradually lose structure. How would you address the drift?<\/p>",
    "options": {
      "A": "<p>Identify the failure mode as format drift, examine how the conversation context evolves over turns, and address the drift through context management or output validation.<\/p>",
      "B": "<p>Truncate every response to the first few characters, validate that the truncated output matches the expected JSON structure, and log any mismatches for review.<\/p>",
      "C": "<p>Restart the application after every turn and monitor whether the format remains consistent across subsequent interactions.<\/p>",
      "D": "<p>Switch to a smaller Claude model and re-test the application to determine whether the drift persists across conversation turns.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Đáp án A là cách tiếp cận chuẩn kỹ thuật:<\/b> Hiện tượng <b>Format Drift<\/b> xảy ra khi hội thoại kéo dài làm ngữ cảnh bị nhiễu hoặc hướng dẫn ban đầu bị mờ nhạt dần. Giải pháp cốt lõi là phân tích lịch sử hội thoại, thực hiện quản lý ngữ cảnh (như nhắc lại cấu hình JSON ở các lượt sau, cắt tỉa lịch sử) kết hợp với bước kiểm tra xác thực đầu ra (output validation).<\/p><\/li><li><p><b>Các phương án B, C, D sai:<\/b><\/p><ul><li><p><b>B:<\/b> Cắt ngắn chuỗi phản hồi xuống vài ký tự làm hỏng hoàn toàn dữ liệu JSON.<\/p><\/li><li><p><b>C:<\/b> Reset ứng dụng sau mỗi lượt làm mất hoàn toàn bộ nhớ hội thoại (conversation memory), không khả thi cho ứng dụng chat/multi-turn.<\/p><\/li><li><p><b>D:<\/b> Chuyển sang mô hình nhỏ hơn (ít khả năng tuân thủ prompt phức tạp hơn) thường làm hiện tượng lệch định dạng trầm trọng hơn chứ không giải quyết được vấn đề.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-043",
    "set": 1,
    "number": 43,
    "type": "single",
    "question": "<p>Your Claude agent has access to a tool that retrieves customer records. A teammate has noticed that the agent occasionally calls the tool with arguments the schema does not declare, and the tool's downstream service returns an error each time. The teammate proposes loosening the schema so the tool accepts whatever arguments the model produces. How would you respond?<\/p>",
    "options": {
      "A": "<p>Add a system prompt instruction telling the model to produce schema-conforming arguments, treating the prompt instruction as the primary mechanism for keeping the agent's tool calls valid.<\/p>",
      "B": "<p>Keep the schema strict, validate arguments before dispatching, and return a structured error so the agent can retry.<\/p>",
      "C": "<p>Remove the schema entirely and rely on the downstream service to reject invalid calls, treating the downstream service as the team's primary enforcement layer.<\/p>",
      "D": "<p>Loosen the schema as the teammate proposed so the downstream service receives every call the agent makes during normal operation.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn B:<\/b><\/p><ul><li><p>Trong kiến trúc làm việc với AI Agent (như Claude), <b>schema<\/b> đóng vai trò là ranh giới an toàn và quy chuẩn dữ liệu.<\/p><\/li><li><p>Khi agent truyền sai tham số, cách xử lý chuẩn là thực hiện validation (kiểm tra) ở phía ứng dụng/client <i>trước khi<\/i> gọi dịch vụ downstream. Nếu tham số không hợp lệ, hãy trả về một <b>structured error message<\/b> (thông báo lỗi rõ ràng) để Claude nhận biết lỗi, tự sửa lỗi và thử gọi lại (retry).<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>A (Dùng system prompt làm cơ chế chính):<\/b> Prompt chỉ mang tính định hướng, không đảm bảo 100% mô hình tuân thủ quy tắc. Prompt không thể thay thế việc validation cứng ở tầng mã nguồn.<\/p><\/li><li><p><b>C (Xóa schema, đẩy trách nhiệm cho downstream service):<\/b> Việc gửi dữ liệu rác xuống downstream service làm tăng lưu lượng không cần thiết, tăng độ trễ và có thể gây lỗi hệ thống phía sau.<\/p><\/li><li><p><b>D (Nới lỏng schema theo lời đồng nghiệp):<\/b> Nới lỏng schema không giải quyết triệt để nguyên nhân gốc rễ (downstream service vẫn sẽ từ chối hoặc lỗi nếu nhận dữ liệu không mong muốn).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-044",
    "set": 1,
    "number": 44,
    "type": "single",
    "question": "<p>A teammate has asked why your Claude application sometimes produces a response that includes the prompt text repeated back, and other times produces a response with the prompt text rephrased. They suspect a bug in the application's request construction. How would you respond?<\/p>",
    "options": {
      "A": "<p>Tell the teammate that the variation depends on which Claude model serves the request, and recommend pinning the application to a single model version to make the output behavior consistent.<\/p>",
      "B": "<p>Explain that LLMs generate output token by token, and variation in how prompt content appears in output is a property of generation, not a bug in request construction.<\/p>",
      "C": "<p>Confirm that the variation is a bug in the application's request construction and start investigating which part of the application is producing the inconsistent prompt text.<\/p>",
      "D": "<p>Tell the teammate that the variation is caused by the application sending two different prompts on different runs and propose a code change that pins the system prompt to a single version.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Phương án B phản ánh đúng bản chất sinh (generative) cơ bản của các mô hình ngôn ngữ lớn. Claude không truy xuất một mẫu phản hồi cố định cho một prompt cho trước. Thay vào đó, nó tạo ra phản hồi một cách tuần tự, chọn từng token tiếp theo dựa theo phân phối xác suất mà model tạo ra. Do đó, các lần chạy tương đương về mặt ngữ nghĩa có thể khác nhau về cách diễn đạt, trình tự, việc có trích dẫn nguyên văn ngôn ngữ của prompt hay không, và việc có diễn giải lại hay không.<\/p><p>Tài liệu API của Anthropic mô tả rõ ràng rằng các tham số sampling kiểm soát tính ngẫu nhiên trong việc chọn token tiếp theo, và cũng nêu rằng ngay cả các cấu hình được thiết kế để giảm thiểu tính ngẫu nhiên cũng không làm cho đầu ra hoàn toàn tất định. Các thế hệ model Claude hiện tại ngày càng tự quản lý sampling nội bộ, nhưng nguyên tắc nền tảng vẫn không đổi: đầu ra sinh ra không được đảm bảo là giống hệt nhau về mặt văn bản giữa các lệnh gọi tương đương.<\/p><p>Do đó, việc thấy prompt gốc được lặp lại nguyên văn trong một phản hồi và được diễn giải lại trong một phản hồi khác, tự bản thân nó, không chứng minh được rằng việc xây dựng request bị lỗi. Một vấn đề xây dựng request thực sự cần được xác lập thông qua các bản trace cho thấy các hướng dẫn hệ thống, tin nhắn, tham số, hoặc ngữ cảnh khác nhau.<\/p><p>Phương án A, C và D suy diễn không đúng về các lỗi triển khai cụ thể mà không có bằng chứng hỗ trợ.<\/p><p>Câu hỏi được cung cấp xác định B là phản hồi đúng đắn. Các chủ đề liên quan: SW Eng Foundations, sinh token (token generation), sampling, tính không tất định (nondeterminism), gỡ lỗi, và hành vi của model.<\/p>"
  },
  {
    "id": "CCDV-F-045",
    "set": 1,
    "number": 45,
    "type": "single",
    "question": "<p>You are starting a new Claude application and have a small set of well-labeled examples that demonstrate the desired output format. You want to use these examples to guide Claude's behavior. How would you guide the application's behavior?<\/p>",
    "options": {
      "A": "<p>Use multi-shot prompting by including the labeled examples in the prompt so Claude can match the desired output format on each request.<\/p>",
      "B": "<p>Use zero-shot prompting and rely on the model's general capability to produce the desired output format consistently across all incoming requests.<\/p>",
      "C": "<p>Embed the examples in a database and retrieve them at runtime as reference material for the team.<\/p>",
      "D": "<p>Train a custom model on the labeled examples before deployment so that the application does not need to include the examples in any prompt during operation.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao B đúng?<\/b><\/p><ul><li><p><b>Hỗ trợ chính thức:<\/b> Anthropic cung cấp SDK Python để tối ưu hóa việc kết nối, bao gồm cả client đồng bộ (synchronous) lẫn bất đồng bộ (asynchronous).<\/p><\/li><li><p><b>Giảm mã lặp (Boilerplate):<\/b> SDK đã tích hợp sẵn các tính năng phức tạp nhưng cần thiết như quản lý API key (xác thực), tự động retry khi gặp lỗi mạng/giới hạn băng thông (rate limit), parse dữ liệu JSON trả về, xử lý exception và hỗ trợ streaming.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác sai?<\/b><\/p><ul><li><p><b>A sai:<\/b> Tự viết mã gọi HTTP thô khiến bạn phải tự triển khai lại từ đầu toàn bộ cơ chế xác thực, retry, timeout và xử lý lỗi — gây tốn thời gian và dễ phát sinh lỗi không đáng có.<\/p><\/li><li><p><b>B sai:<\/b> Việc dùng SDK của bên thứ ba rồi dựng thêm lớp chuyển đổi (translation layer) tạo ra sự phức tạp dư thừa, dễ dẫn đến lỗi tương thích khi API của Claude cập nhật.<\/p><\/li><li><p><b>D sai:<\/b> Gọi lệnh shell từ Python làm tăng độ rủi ro về bảo mật, khó quản lý tiến trình và xử lý lỗi kém hiệu quả hơn nhiều so với việc gọi trực tiếp bằng thư viện Python.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-046",
    "set": 1,
    "number": 46,
    "type": "single",
    "question": "<p>Your Claude application uses tool calling to fetch patient data and generate summary reports. The flow occasionally fails because the model returns a tool_use block that references arguments not present in the schema, and your application code does not handle this case gracefully. How would you address this?<\/p>",
    "options": {
      "A": "<p>Validate the tool_use block's arguments against the tool schema before dispatching the tool and handle invalid arguments as a recognized error path.<\/p>",
      "B": "<p>Log invalid tool_use blocks when they occur and allow the tool dispatch to proceed, relying on the tool's own error handling to surface failures back to the application.<\/p>",
      "C": "<p>Retry the same request repeatedly until the model returns a valid tool_use block that matches the schema as expected.<\/p>",
      "D": "<p>Stop using tool calling entirely and replace tools with prompted text generation that asks the model to describe what it would do.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Câu hỏi này trình bày một lỗi ranh giới tin cậy (trust-boundary failure): các tham số công cụ do model tạo ra đang được chấp nhận mà không có đủ xác thực trước khi một thao tác bên ngoài được thực thi. Do đó, một lệnh gọi công cụ nên được xem như dữ liệu đầu vào đến từ bất kỳ giao diện ứng dụng có kiểu dữ liệu nào - ứng dụng phải đảm bảo rằng tên công cụ và các tham số thỏa mãn hợp đồng đã khai báo trước khi thực thi.<\/p><p>Anthropic mô tả tool use như một hợp đồng, trong đó ứng dụng định nghĩa schema của công cụ và Claude trả về tool_use input có cấu trúc. Chức năng hiện tại của Claude cũng hỗ trợ strict: true, đảm bảo đầu vào công cụ tuân thủ schema thông qua constrained generation và giải quyết cụ thể các trường hợp tham số bịa đặt, kiểu dữ liệu không tương thích, và các trường bắt buộc bị thiếu. Đối với các ứng dụng không sử dụng strict tool use, việc xác thực rõ ràng ở phía ứng dụng và một đường xử lý lỗi có kiểm soát vẫn là điều thiết yếu.<\/p><p>Phương án B chủ động thực thi đầu vào không hợp lệ. Phương án C dựa vào việc lặp lại không kiểm soát thay vì xác thực có tính tất định và khôi phục có giới hạn. Phương án D loại bỏ một khả năng hữu ích thay vì sửa ranh giới thực thi của nó.<\/p><p>Do đó, A cung cấp thiết kế phòng vệ đúng đắn. Các chủ đề liên quan trong Study Guide: tool calling, tool_use, input_schema, strict tool use, xác thực schema, thực thi phòng vệ (defensive execution), xử lý lỗi, và dispatch công cụ an toàn.<\/p>"
  },
  {
    "id": "CCDV-F-047",
    "set": 1,
    "number": 47,
    "type": "single",
    "question": "<p>The Claude application your team built has grown over six months, and the prompt-handling code has accumulated duplication and tangled control flow. The functionality is working, but new features are getting harder to add. How would you address this?<\/p>",
    "options": {
      "A": "<p>Plan a refactoring pass to consolidate duplicated logic, separate concerns, and simplify control flow before adding new features.<\/p>",
      "B": "<p>Refactor the prompt-handling code in small increments as part of each new feature ticket, treating the cleanup as a side effect of feature work.<\/p>",
      "C": "<p>Continue adding features and plan a refactoring pass after the next two release cycles when the team has more bandwidth for internal work.<\/p>",
      "D": "<p>Move all the prompt-handling code into a single large function to reduce the number of files developers have to navigate when reading the code.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b><\/p><ul><li><p>Khi nợ kỹ thuật (technical debt) và độ phức tạp mã nguồn đã chạm ngưỡng làm chậm tốc độ phát triển tính năng mới, việc dành ra một khoảng thời gian (refactoring pass) chuyên biệt để tái cấu trúc mã nguồn trước khi tiếp tục mở rộng tính năng là phương pháp chuẩn mực trong phần mềm.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>B (Refactor rải rác theo từng ticket tính năng):<\/b> Việc sửa đổi mã nguồn lồng chéo một cách thụ động trong lúc làm tính năng mới dễ làm phình scope của ticket, khó kiểm thử toàn diện và thường chỉ tạo ra thêm sự chắp vá.<\/p><\/li><li><p><b>C (Tiếp tục hoãn refactor thêm 2 chu kỳ nữa):<\/b> Việc tiếp tục tích tụ nợ kỹ thuật sẽ khiến các tính năng mới trong 2 chu kỳ tới càng khó viết hơn, tốn thời gian hơn và dễ phát sinh lỗi nghiêm trọng hơn.<\/p><\/li><li><p><b>D (Gộp tất cả vào một hàm lớn):<\/b> Việc dồn tất cả logic vào một hàm duy nhất (God function) đi ngược lại nguyên tắc thiết kế mã nguồn sạch (Clean Code), làm tăng độ rối rắm và cực kỳ khó bảo trì.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-048",
    "set": 1,
    "number": 48,
    "type": "single",
    "question": "<p>Your team uses Claude Code across multiple repositories. You want the team's rules and general coding standards to apply to all repositories, and other rules to apply only to specific repositories. The team is currently duplicating instructions across every repository's CLAUDE.md file. How would you address this?<\/p>",
    "options": {
      "A": "<p>Move all instructions to a separate documentation site that developers consult during Claude Code sessions across all repositories.<\/p>",
      "B": "<p>Use a CLAUDE.md hierarchy that scopes general standards broadly and project-specific context within each repository's local CLAUDE.md.<\/p>",
      "C": "<p>Stop using CLAUDE.md altogether and ask each developer to configure Claude Code manually for each project they work on.<\/p>",
      "D": "<p>Use a single repository's CLAUDE.md as the central source of truth and link to it from every other repository's CLAUDE.md file.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>B được hỗ trợ trực tiếp bởi cả nguồn đề thi được cung cấp lẫn mô hình cấu hình của Claude Code. Nguồn đề thi đánh dấu cách tiếp cận CLAUDE.md phân cấp là đáp án đúng.<\/p><p>Claude Code hỗ trợ hướng dẫn ở nhiều cấp độ phạm vi (scope), cho phép tách các tiêu chuẩn áp dụng rộng rãi khỏi ngữ cảnh đặc thù của từng dự án thay vì phải lặp lại ở mọi repository.<\/p><p>Anthropic tài liệu hóa một số phạm vi cho CLAUDE.md. Hướng dẫn do tổ chức quản lý (organization-managed) có thể áp dụng rộng rãi; hướng dẫn ở cấp người dùng trong ~/.claude/CLAUDE.md áp dụng cho tất cả các dự án của một người dùng; hướng dẫn ở cấp dự án trong ./CLAUDE.md hoặc ./.claude/CLAUDE.md cung cấp kiến trúc, quy ước, lệnh, và quy trình làm việc đặc thù của từng repository. Claude Code nạp các file phù hợp theo cấu trúc thư mục, cho phép các hướng dẫn tổng quát và các hướng dẫn cục bộ chi tiết hơn cùng tồn tại.<\/p><p>Cách sắp xếp này cải thiện khả năng bảo trì vì các tiêu chuẩn coding chung chỉ cần được định nghĩa một lần ở phạm vi phù hợp, trong khi mỗi repository chỉ giữ lại ngữ cảnh riêng biệt của dự án đó. Một trang tài liệu độc lập không tự động đưa các quy tắc vào ngữ cảnh của Claude Code. Phương án C tạo ra cấu hình thủ công không nhất quán. Phương án D gắn kết không hợp lý các repository không liên quan vào cấu hình của một repository duy nhất.<\/p><p>Các chủ đề liên quan trong Claude Developer: Configuration Management, hệ thống phân cấp CLAUDE.md, phạm vi tổ chức (organization scope), phạm vi người dùng (user scope), phạm vi dự án (project scope), cấu hình repository, kế thừa hướng dẫn, và tái sử dụng cấu hình.<\/p>"
  },
  {
    "id": "CCDV-F-049",
    "set": 1,
    "number": 49,
    "type": "single",
    "question": "<p>You are designing an agent that processes vendor invoices. The work involves a small number of well- understood steps, but occasionally an invoice arrives in an unexpected format that requires the system to decide between rerouting, requesting clarification, or flagging for human review. The most appropriate architecture for this system is...<\/p>",
    "options": {
      "A": "<p>A fully autonomous agent that handles every invoice from start to finish across all formats.<\/p>",
      "B": "<p>A manager agent that delegates each step of standard invoice processing to a dedicated subagent, with a separate subagent handling each unexpected format.<\/p>",
      "C": "<p>A single large prompt that processes every incoming invoice, both standard and unexpected, in one model call.<\/p>",
      "D": "<p>A workflow for the standard path with an agent invoked at the decision point for unexpected formats.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Phương án D áp dụng đúng mô hình lai (hybrid pattern). Anthropic phân biệt workflows - nơi LLM và các công cụ thực thi theo các đường mã (code paths) đã được định nghĩa trước - với agents, nơi model tự động xác định cách tiến hành.<\/p><p>Anthropic khuyến nghị lựa chọn kiến trúc đơn giản nhất đáp ứng được yêu cầu: workflows mang lại tính dự đoán được và nhất quán cho các nhiệm vụ đã được hiểu rõ, trong khi agents có giá trị ở những nơi cần các quyết định linh hoạt do model điều khiển.<\/p><p>Việc xử lý hóa đơn tiêu chuẩn được mô tả rõ ràng là gồm một số ít các bước đã biết. Điều đó khiến một workflow tất định trở thành lựa chọn mặc định phù hợp vì đường xử lý có thể được kiểm thử, giám sát, và tái tạo lại.<\/p><p>Nhánh định dạng bất thường thì khác: hệ thống phải suy luận giữa việc chuyển hướng, yêu cầu làm rõ, hoặc chuyển lên con người xử lý. Điểm quyết định đó chính là nơi tính linh hoạt của agent mang lại giá trị.<\/p><p>Phương án A biến toàn bộ quy trình thành tự động hóa mặc dù hầu hết các bước không cần đến tính tự chủ, làm tăng chi phí, độ trễ, và tính khó dự đoán. Phương án B đưa vào nhiều agent chuyên biệt mặc dù chưa chứng minh được nhu cầu cho độ phức tạp đó. Phương án C gộp việc xử lý tất định và xử lý ngoại lệ vào một lệnh gọi model duy nhất, khiến việc xác thực và gỡ lỗi khó khăn hơn.<\/p><p>Do đó, D kết hợp tính dự đoán được của workflow với khả năng suy luận agentic có mục tiêu. Các chủ đề liên quan trong Study Guide: workflows so với agents, định tuyến (routing), xử lý ngoại lệ, kiến trúc agentic lai, chuyển lên xử lý (escalation), và giảm thiểu độ phức tạp.<\/p>"
  },
  {
    "id": "CCDV-F-050",
    "set": 1,
    "number": 50,
    "type": "single",
    "question": "<p>Your Claude application's token costs have grown faster than expected. The team has not been tracking token usage by feature, so the team cannot identify which features are driving cost. The team is debating how to respond. How would you respond?<\/p>",
    "options": {
      "A": "<p>Tell the team that cost growth is unavoidable as the application scales and that no investigation will change the trajectory of the application's cost over the next several quarters.<\/p>",
      "B": "<p>Switch every feature to the smallest model to cut cost broadly across the application during normal operation.<\/p>",
      "C": "<p>Reduce token usage uniformly across all features by half, applying the cut evenly across the application during normal operation.<\/p>",
      "D": "<p>Add token usage tracking by feature to the application's logging so the team can identify which features drive cost before recommending changes.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Đáp án D là phương pháp quản trị chi phí chuẩn (Observability &amp; Data-driven decision):<\/b> Để giải quyết vấn đề tối ưu chi phí (cost optimization), nguyên tắc đầu tiên là phải có số liệu đo lường chính xác (<b>Observability<\/b>). Việc thêm logging theo dõi token consumption per feature giúp đội ngũ xác định đúng \"thủ phạm\" trước khi thực hiện bất kỳ điều chỉnh về mô hình hay kiến trúc nào.<\/p><\/li><li><p><b>Các phương án A, B, C sai:<\/b><\/p><ul><li><p><b>A:<\/b> Mang tính buông xuôi, không đưa ra giải pháp kỹ thuật phù hợp.<\/p><\/li><li><p><b>B &amp; C:<\/b> Đưa ra hành động cắt giảm mù quáng/đồng loạt khi chưa có dữ liệu sẽ làm giảm chất lượng dịch vụ (degrade user experience) của những tính năng vốn dĩ không tiêu tốn nhiều token hoặc đòi hỏi mô hình thông minh hơn.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-051",
    "set": 1,
    "number": 51,
    "type": "single",
    "question": "<p>Your Claude application has been running for several conversation turns, and you notice the model occasionally references information that was discussed many turns ago but is no longer relevant. You suspect context drift is causing the model to weight stale content too heavily. How would you address the drift?<\/p>",
    "options": {
      "A": "<p>Increase the context window size so all turns of the conversation remain visible to the model in full detail.<\/p>",
      "B": "<p>Reset the conversation after every turn so the model loses all prior turns when generating a response.<\/p>",
      "C": "<p>Apply compaction to summarize older portions of the conversation so the gist remains while the specifics carry less weight.<\/p>",
      "D": "<p>Truncate the conversation so the model sees only the most recent turn during each subsequent response.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Phương án C áp dụng đúng kỹ thuật quản lý ngữ cảnh phù hợp. Vấn đề không đơn thuần là liệu toàn bộ cuộc hội thoại trước đó có thể vừa vặn về mặt vật lý trong context window hay không; vấn đề là các chi tiết cũ vẫn nổi bật đến mức gây nhiễu cho nhiệm vụ hiện tại của model. Kỹ thuật quản lý ngữ cảnh (context engineering) hiệu quả tối ưu hóa chất lượng tín hiệu, chứ không chỉ đơn thuần là giữ lại tối đa số lượng token.<\/p><p>Tài liệu về context-editing của Anthropic mô tả compaction là việc tóm tắt lịch sử đã tích lũy và thay thế toàn bộ lịch sử bằng một bản tóm tắt có cấu trúc khi ngữ cảnh trở nên quá lớn. Điều này giữ lại trạng thái nhiệm vụ quan trọng trong khi giảm đáng kể các chi tiết ít giá trị có thể làm phân tán quá trình suy luận sau này.<\/p><p>Phương án A giữ lại chính xác những nội dung cũ đang gây ra vấn đề, do đó không giải quyết được hiện tượng trôi ngữ cảnh (context drift). Phương án B phá hủy toàn bộ tính liên tục hữu ích giữa các lượt hội thoại, bao gồm cả các mục tiêu, quyết định, và trạng thái trung gian hợp lệ. Phương án D cũng quá mức tương tự vì việc giới hạn Claude chỉ thấy lượt gần nhất sẽ bỏ qua những thông tin có thể vẫn còn cần thiết.<\/p><p>Compaction cung cấp điểm cân bằng đúng đắn: giữ lại các kết luận lâu bền, mục tiêu hiện tại, các vấn đề chưa giải quyết, và các trạng thái có giá trị tín hiệu cao khác trong khi nén lại các chi tiết hội thoại đã lỗi thời. Các chủ đề liên quan trong Study Guide: context engineering, compaction, lịch sử hội thoại, agent chạy dài (long-running agents), ngữ cảnh lỗi thời (stale context), trôi ngữ cảnh (context drift), và bảo toàn trạng thái có giá trị tín hiệu cao.<\/p>"
  },
  {
    "id": "CCDV-F-052",
    "set": 1,
    "number": 52,
    "type": "single",
    "question": "<p>Your team's Claude application has been in production for a year, and the team has decided to formalize its testing strategy. Currently, the team writes ad-hoc tests for individual features but has no overall testing approach. What testing approach would you formalize?<\/p>",
    "options": {
      "A": "<p>Adopt a test-driven development practice where unit tests are written before each feature is implemented and must pass before code is merged.<\/p>",
      "B": "<p>Define unit tests for individual functions, integration tests for the Claude integration, and end-to-end tests for critical user flows, applied consistently across the codebase.<\/p>",
      "C": "<p>Continue writing ad-hoc tests as features ship and introduce a peer review step to ensure each test adequately covers the feature being released.<\/p>",
      "D": "<p>Define a single testing approach that uses end-to-end tests and apply it consistently across all new features as they are added to the codebase.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Đáp án B là mô hình kim tự tháp kiểm thử (Testing Pyramid) chuẩn:<\/b> Một chiến lược kiểm thử toàn diện và bền vững cho ứng dụng có tích hợp LLM cần kết hợp nhiều cấp độ: Unit tests (kiểm tra logic nội bộ), Integration tests (kiểm tra việc kết nối/gửi nhận dữ liệu với Claude API), và End-to-End tests (đảm bảo luồng trải nghiệm người dùng hoàn chỉnh).<\/p><\/li><li><p><b>Các phương án A, C, D sai:<\/b><\/p><ul><li><p><b>A:<\/b> Ép buộc TDD cho toàn bộ dự án cũ 1 năm đã có sẵn code production thường không khả thi và thiếu linh hoạt cho việc tích hợp LLM.<\/p><\/li><li><p><b>C:<\/b> Tiếp tục dùng ad-hoc test không giải quyết được vấn đề thiếu quy trình chuẩn hóa.<\/p><\/li><li><p><b>D:<\/b> Chỉ dùng E2E test sẽ làm bộ test chạy rất chậm, tốn chi phí và khó phát hiện chính xác nguyên nhân lỗi ở cấp độ hàm/hệ thống.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-053",
    "set": 1,
    "number": 53,
    "type": "single",
    "question": "<p>Your Claude agent has too many tools, and many of them have overlapping functionality. The agent often picks an inappropriate tool when several could plausibly handle a request. How would you address the tool selection problem?<\/p>",
    "options": {
      "A": "<p>Add more tools to cover every variation of the requests the agent handles, on the grounds that more tools give the agent more accurate options to choose from.<\/p>",
      "B": "<p>Remove all tools and rely on the agent's general capability instead, with the application losing the workflows that previously relied on tools.<\/p>",
      "C": "<p>Add detailed examples to each tool's description so the agent can match incoming requests to the right tool by example, treating the examples as the team's selection mechanism.<\/p>",
      "D": "<p>Restructure the tool set by consolidating overlapping tools, removing unused tools, and clarifying tool descriptions so each tool has a distinct purpose.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Đáp án D là Best Practice chuẩn khi thiết kế Tool Set cho LLM/Agent:<\/b> Khi tập hợp công cụ quá lớn hoặc bị chồng chéo chức năng (overlap), LLM sẽ dễ bị nhầm lẫn và chọn sai công cụ. Giải pháp tối ưu là:<\/p><ol start=\"1\"><li><p><b>Consolidate (Hợp nhất):<\/b> Gộp các công cụ có chức năng tương tự thành một công cụ duy nhất với tham số đầu vào linh hoạt.<\/p><\/li><li><p><b>Prune (Cắt giảm):<\/b> Loại bỏ bớt các công cụ thừa hoặc không dùng tới.<\/p><\/li><li><p><b>Clear Purpose (Mô tả rõ ràng):<\/b> Viết lại <code>description<\/code> chính xác để định hình mục đích độc bản (distinct purpose) cho từng công cụ.<\/p><\/li><\/ol><\/li><li><p><b>Các phương án A, B, C sai:<\/b><\/p><ul><li><p><b>A:<\/b> Thêm nhiều công cụ chỉ làm trầm trọng thêm tình trạng nhiễu và nhầm lẫn của mô hình.<\/p><\/li><li><p><b>B:<\/b> Bỏ hết công cụ sẽ làm ứng dụng mất đi các tính năng/quy trình quan trọng.<\/p><\/li><li><p><b>C:<\/b> Chỉ thêm ví dụ mà không giải quyết gốc rễ việc chồng chéo chức năng và sự phình to của tập công cụ sẽ không giải quyết được triệt để bài toán.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-054",
    "set": 2,
    "number": 54,
    "type": "single",
    "question": "<p>Your agent is processing tasks that take 30 to 60 minutes to complete. Each task has welldefined intermediate checkpoints, and the team wants the agent to be able to resume from the most recent checkpoint if a process is interrupted. How would you implement this resumability?<\/p>",
    "options": {
      "A": "<p>Increase the agent's timeout to several hours so that interruptions become rare enough to ignore in practice.<\/p>",
      "B": "<p>Apply a checkpointing pattern that persists the agent's intermediate state and reloads that state when resuming an interrupted task.<\/p>",
      "C": "<p>Run two copies of the agent in parallel for every task and use whichever one finishes first as the source of truth.<\/p>",
      "D": "<p>Restart the task from the beginning whenever a process is interrupted.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Mô hình Checkpointing (B):<\/b> Đây là thiết kế chuẩn cho các hệ thống hoặc agent xử lý tác vụ thời gian dài (long-running tasks). Việc lưu trữ trạng thái (state persistence) tại từng cột mốc cho phép hệ thống khôi phục ngay tại điểm dừng gần nhất mà không mất công sức đã xử lý trước đó.<\/p><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>A:<\/b> Việc tăng timeout không ngăn được các sự cố như mất kết nối mạng, lỗi hạ tầng hoặc sập nguồn.<\/p><\/li><li><p><b>C:<\/b> Chạy song song tốn gấp đôi tài nguyên và vẫn không giải quyết được vấn đề nếu cả hai cùng gặp sự cố gián đoạn hệ thống.<\/p><\/li><li><p><b>D:<\/b> Bắt đầu lại từ đầu gây lãng phí tài nguyên tính toán và thời gian (đặc biệt với các tác vụ dài 30–60 phút).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-055",
    "set": 2,
    "number": 55,
    "type": "single",
    "question": "<p>Your Claude application's API keys are stored in a secrets manager. The team is debating whether the same key should be used in development, staging, and production environments. How would you handle the keys across environments?<\/p>",
    "options": {
      "A": "<p>Use distinct keys for each environment so a compromise in one environment does not affect the others during normal operation across the application's lifecycle.<\/p>",
      "B": "<p>Rotate the same key across environments at random intervals on the grounds that random rotation provides isolation between environments without requiring distinct keys.<\/p>",
      "C": "<p>Use the same key across all environments for simplicity and treat the propagation of any compromise as a known operational tradeoff for the team's key management approach.<\/p>",
      "D": "<p>Use a single development key everywhere on the grounds that production keys are too risky to deploy across the application's three environments during normal operation.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p><b>Đáp án chính xác:<\/b> <b>A<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Nguyên tắc cô lập môi trường (A):<\/b> Đây là thực hành chuẩn trong bảo mật (Best Security Practice). Việc dùng khóa riêng cho từng môi trường (Dev, Staging, Prod) tuân thủ nguyên tắc giới hạn phạm vi tác động (blast radius containment). Nếu khóa môi trường Dev/Staging bị lộ (vốn có nguy cơ cao hơn do kiểm soát lỏng lẻo hơn), môi trường Prod vẫn hoàn toàn an toàn.<\/p><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>B:<\/b> Xoay vòng một khóa duy nhất không tạo ra sự cô lập; tại bất kỳ thời điểm nào, việc rò rỉ khóa vẫn làm ảnh hưởng đến tất cả các môi trường cùng lúc.<\/p><\/li><li><p><b>C:<\/b> Chấp nhận rủi ro lộ khóa toàn bộ hệ thống để đổi lấy sự \"đơn giản\" là vi phạm nghiêm trọng các quy tắc an toàn thông tin.<\/p><\/li><li><p><b>D:<\/b> Dùng khóa Dev cho Prod không đáp ứng được yêu cầu bảo mật nghiêm ngặt của môi trường sản xuất và khó kiểm soát hạn ngạch/chi phí thực tế.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-056",
    "set": 2,
    "number": 56,
    "type": "single",
    "question": "<p>You have just shipped a new Claude-powered application to production. The development phase is complete, and the system is now in active use by internal teams. The next phase of work for this system is...<\/p>",
    "options": {
      "A": "<p>Retiring the system, since shipping is the final lifecycle stage for any application that reaches production.<\/p>",
      "B": "<p>Running a formal post-deployment review that assesses the development phase before the team does any further work on the system.<\/p>",
      "C": "<p>Operating and maintaining the system, including monitoring, responding to issues, and planning evolution.<\/p>",
      "D": "<p>Handing the system over to a separate operations team that will manage it independently of the development team going forward.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<b>Đáp án đúng là C: Operating and maintaining the system, including monitoring, responding to issues, and planning evolution.<\/b><br/><b>Dịch câu hỏi:<\/b>Bạn vừa triển khai một ứng dụng mới tích hợp Claude lên môi trường production. Giai đoạn phát triển đã hoàn tất và hệ thống hiện đang được các đội ngũ nội bộ sử dụng tích cực. Giai đoạn công việc tiếp theo cho hệ thống này là...<br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án C (Đúng):<\/b> Sau khi ứng dụng được đưa lên production, giai đoạn tiếp theo trong vòng đời ứng dụng (application lifecycle) là vận hành và bảo trì (operating and maintaining). Việc này bao gồm giám sát hiệu năng/chi phí (monitoring), xử lý các sự cố phát sinh (responding to issues), và lập kế hoạch nâng cấp/phát triển tiếp theo (planning evolution).<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Ngừng hoạt động (retiring) hệ thống ngay sau khi vừa mới triển khai lên production là hoàn toàn vô lý.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Đánh giá sau triển khai (post-deployment review) có thể diễn ra nhưng không phải là giai đoạn hoạt động chính tiếp theo thay thế cho việc vận hành hệ thống.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Mô hình bàn giao hoàn toàn cho một đội vận hành độc lập (siloed operations) đã cũ; hiện nay các ứng dụng AI/LLM đòi hỏi sự kết hợp và liên tục cải tiến từ đội ngũ phát triển.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-057",
    "set": 2,
    "number": 57,
    "type": "single",
    "question": "<p>Your team is debating how to manage the prompts used in your Claude application. Some prompts are checked into the code repository, some live in a separate configuration file, and some are constructed inline at runtime. The result is inconsistent, and a recent prompt change went out without code review. What steps would you take?<\/p>",
    "options": {
      "A": "<p>Move all prompts out of version control to a separate spreadsheet that team members can edit freely as the application evolves over time.<\/p>",
      "B": "<p>Move all prompts to inline runtime construction so the team can update them quickly through a streamlined process outside the standard code review workflow.<\/p>",
      "C": "<p>Establish a single source of truth for prompts but keep change review optional, allowing developers to update prompts directly when changes are urgent.<\/p>",
      "D": "<p>Establish a single source of truth for prompts, version-control them alongside code, and require code review for prompt changes.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<b>Đáp án đúng là D: Establish a single source of truth for prompts, version-control them alongside code, and require code review for prompt changes.<\/b><br/><b>Dịch câu hỏi:<\/b>Đội ngũ của bạn đang tranh luận về cách quản lý các prompt được sử dụng trong ứng dụng Claude. Một số prompt được lưu trong repository mã nguồn, một số nằm trong tệp cấu hình riêng, và một số được dựng trực tiếp (inline) trong lúc chạy. Kết quả là sự thiếu đồng bộ, và một thay đổi prompt gần đây đã được phát hành mà không qua kiểm duyệt code (code review). Bạn sẽ thực hiện những bước nào?<br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án D (Đúng):<\/b> Prompt engineering đóng vai trò cốt lõi trong logic của ứng dụng LLM và nên được quản lý như mã nguồn (Prompt-as-Code). Việc thiết lập một nguồn dữ liệu duy nhất (single source of truth), quản lý phiên bản (version control) chung với repository và bắt buộc kiểm duyệt (code review) sẽ đảm bảo tính đồng bộ, minh bạch và an toàn khi thay đổi prompt.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Chuyển prompt ra bảng tính ngoài gây mất kiểm soát phiên bản và không tích hợp được vào quy trình kiểm thử tự động của ứng dụng.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Bỏ qua quy trình kiểm duyệt chuẩn chỉ làm tăng nguy cơ phát sinh lỗi và hành vi không mong muốn trên môi trường thực tế.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Cho phép bỏ qua kiểm duyệt khi cần gấp dễ dẫn đến việc vi phạm quy trình quản lý chất lượng và lặp lại sự cố ban đầu.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-058",
    "set": 2,
    "number": 58,
    "type": "single",
    "question": "<p>A teammate has asked how the Claude SDK handles transient API errors, such as a temporary network issue or a brief rate-limit response. They want to know whether the application code needs to handle every transient error or whether the SDK provides any default behavior. How would you describe the SDK's default behavior?<\/p>",
    "options": {
      "A": "<p>The SDK provides default retry behavior for transient errors up to a fixed number of attempts, and this behavior is not configurable.<\/p>",
      "B": "<p>The SDK provides default retry behavior for network errors but surfaces rate-limit responses directly to the application code, which must implement its own retry logic for those cases.<\/p>",
      "C": "<p>The SDK logs transient errors to a default error stream and continues execution without retrying, leaving the application code responsible for detecting and responding to failed calls.<\/p>",
      "D": "<p>The SDK provides default retry behavior for many transient errors, and the application code can configure or extend that behavior as needed.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><b>Đáp án chính xác:<\/b> <b>D<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Hành vi thử lại của Claude SDK (D):<\/b> Các Anthropic/Claude SDKs (Python, TypeScript) mặc định tự động xử lý và thử lại (auto-retry with exponential backoff) đối với các lỗi tạm thời như lỗi kết nối mạng, lỗi 429 (Rate Limit), hoặc các lỗi máy chủ 5xx (500, 529, v.v.). Đồng thời, SDK cho phép lập trình viên tùy chỉnh tham số này (ví dụ: thay đổi số lần <code>max_retries<\/code> hoặc cấu hình lại các mã lỗi cần retry).<\/p><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>A:<\/b> Sai vì SDK cho phép tùy chỉnh/cấu hình số lần retry chứ không phải cố định không thể thay đổi.<\/p><\/li><li><p><b>B:<\/b> Sai vì SDK mặc định có hỗ trợ thử lại cho cả lỗi 429 (rate-limit).<\/p><\/li><li><p><b>C:<\/b> Sai vì SDK không chỉ bỏ qua và tiếp tục mà chủ động thử lại cuộc gọi API trước khi trả về ngoại lệ (exception) nếu vượt quá số lần retry.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-059",
    "set": 2,
    "number": 59,
    "type": "single",
    "question": "<p>You are extending a Claude agent with a capability that needs to be reusable across multiple teams in the organization, with each team able to invoke and use it independently. How would you build the capability?<\/p>",
    "options": {
      "A": "<p>As a custom tool embedded in this team's agent only, with other teams able to copy the implementation into their own agents when they need the capability.<\/p>",
      "B": "<p>As a shared library that each team imports into its own Claude application code, with each team responsible for keeping the library up to date in its integration.<\/p>",
      "C": "<p>As a Skill or MCP server because both are purpose-built for cross-team reuse independently by each consuming team.<\/p>",
      "D": "<p>As a wrapper around an existing built-in tool that adds the missing functionality, on the grounds that built-in tools cover the reuse pattern when extended carefully.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<b>Đáp án đúng là C: As a Skill or MCP server because both are purpose-built for cross-team reuse independently by each consuming team.<\/b><br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án C (Đúng):<\/b> Cả <b>Skill<\/b> và <b>MCP (Model Context Protocol) server<\/b> đều được thiết kế chuyên biệt nhằm chuẩn hóa và chia sẻ tính năng/công cụ cho nhiều nhóm sử dụng độc lập mà không cần phải viết lại mã nguồn hay phụ thuộc chặt chẽ vào cấu trúc của từng ứng dụng riêng lẻ.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Việc bắt các đội nhóm khác copy-paste mã nguồn (custom tool) tạo ra sự trùng lặp code, khó quản lý cập nhật và vi phạm nguyên tắc bảo trì phần mềm.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Tạo thư viện dùng chung (shared library) bắt các nhóm tự quản lý tích hợp và cập nhật phiên bản dễ dẫn đến hiện tượng trôi lệch phiên bản (version drift) và tốn chi phí bảo trì hơn so với chuẩn MCP/Skill.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Bọc (wrapper) lại công cụ có sẵn không giải quyết bài toán chia sẻ năng lực mới một cách độc lập chuẩn hóa cho toàn tổ chức.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-060",
    "set": 2,
    "number": 60,
    "type": "single",
    "question": "<p>You are setting up a Claude application that requires API keys for several external services. What is the best way to store the keys?<\/p>",
    "options": {
      "A": "<p>Put the keys in the application's configuration file and check the configuration file into the team's repository alongside the rest of the source code.<\/p>",
      "B": "<p>Store the keys in a secrets manager or environment-specific configuration that is not checked into source code, and load them at runtime.<\/p>",
      "C": "<p>Use a single shared key across all external services, so any developer working on the application can find the keys easily during development.<\/p>",
      "D": "<p>Email the keys to each developer as needed and have each developer paste the keys into their local environment when they begin working on the application's code.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Bảo mật và Quản lý bí mật (B):<\/b> Không bao giờ được commit API keys hoặc thông tin nhạy cảm vào kho lưu trữ mã nguồn (Git/repository). Phương pháp chuẩn là sử dụng trình quản lý bí mật (như AWS Secrets Manager, HashiCorp Vault, HashiCorp Consul, dotenv/environment variables không bị commit) và tải các khóa này vào ứng dụng tại runtime.<\/p><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>A:<\/b> Lộ API keys trực tiếp lên kho chứa mã nguồn (đặc biệt nếu là public repo hoặc shared repo) là nguy cơ bảo mật nghiêm trọng.<\/p><\/li><li><p><b>C:<\/b> Việc dùng chung khóa làm mất tính cô lập, khó kiểm soát quyền hạn và theo dõi chi phí/hạn ngạch của từng dịch vụ.<\/p><\/li><li><p><b>D:<\/b> Gửi khóa qua email là phương thức không an toàn, dễ bị rò rỉ và khó quản lý việc xoay vòng khóa (key rotation).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-061",
    "set": 2,
    "number": 61,
    "type": "single",
    "question": "<p>Your Claude application is deployed to development, staging, and production environments. Each environment uses a different model version, different prompt versions, and different plugin dependencies, but the configuration is currently scattered across environment variables, hardcoded values, and undocumented setup scripts. How would you manage the configuration?<\/p>",
    "options": {
      "A": "<p>Use the latest available model version everywhere and stop pinning model versions, on the grounds that pinning adds maintenance overhead the team should aim to reduce.<\/p>",
      "B": "<p>Move all configuration into hardcoded application code to reduce reliance on external configuration sources that are difficult to track over time.<\/p>",
      "C": "<p>Consolidate the configuration into a version-controlled system documenting model version pinning, prompt versioning, and plugin dependencies for each environment.<\/p>",
      "D": "<p>Standardize all environments to use the same configuration values to eliminate the differences between development, staging, and production.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<b>Đáp án đúng là C: Consolidate the configuration into a version-controlled system documenting model version pinning, prompt versioning, and plugin dependencies for each environment.<\/b><br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án C (Đúng):<\/b> Quản lý cấu hình tập trung và đưa vào hệ thống quản lý phiên bản (Version Control System như Git) là thực hành chuẩn (Infrastructure as Code / Configuration Management). Điều này đảm bảo tính minh bạch, có thể tái lập (reproducibility), dễ theo dõi lịch sử thay đổi của phiên bản model (model pinning), phiên bản prompt và các plugin phụ thuộc trên từng môi trường (dev, staging, prod).<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Không cố định (pin) phiên bản model có thể khiến ứng dụng bị lỗi đột ngột trên production khi nhà cung cấp cập nhật model mới làm thay đổi hành vi/đầu ra.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Hardcode cấu hình vào mã nguồn ứng dụng làm mất tính linh hoạt, gây rủi ro bảo mật và cực kỳ khó quản lý khi triển khai qua nhiều môi trường khác nhau.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Chuẩn hóa tất cả môi trường dùng chung một giá trị cấu hình là không thực tế, vì môi trường Dev/Staging thường cần dùng các phiên bản model thử nghiệm hoặc prompt mới trước khi đưa lên Production.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-062",
    "set": 2,
    "number": 62,
    "type": "single",
    "question": "<p>A team has deployed a multi-agent system in which a primary agent decomposes user requests and delegates subtasks to three specialized subagents: one for data retrieval, one for analysis, and one for report generation. In production, the team observes that subagents are making redundant tool calls, occasionally exceeding token budgets, and sometimes producing outputs that contradict each other - all of which the primary agent passes along without catching. What is the most appropriate way to address these failures?<\/p>",
    "options": {
      "A": "<p>Add retry logic to each subagent so that when a tool call fails, the subagent retries automatically before escalating - and configure each subagent to log its tool calls and outputs to a shared trace so the team can audit redundancy and contradictions after the fact.<\/p>",
      "B": "<p>Give each subagent read access to the other subagents' outputs so they can identify and resolve contradictions without routing back through the primary agent.<\/p>",
      "C": "<p>Strengthen the primary agent's management layer to enforce per-subagent tool budgets, validate outputs against a defined schema before passing them forward, and establish explicit handoff contracts between stages.<\/p>",
      "D": "<p>Collapse the three subagents into a single large-context model call that handles retrieval, analysis, and generation in one pass.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<b>Đáp án đúng là C: Strengthen the primary agent's management layer to enforce per-subagent tool budgets, validate outputs against a defined schema before passing them forward, and establish explicit handoff contracts between stages.<\/b><br/><b>Dịch câu hỏi:<\/b>Một đội ngũ đã triển khai hệ thống multi-agent với agent chính chia nhỏ yêu cầu của người dùng và giao việc cho 3 subagent chuyên biệt: truy xuất dữ liệu, phân tích và tạo báo cáo. Khi vận hành thực tế, các subagent thực hiện gọi tool dư thừa, thỉnh thoảng vượt giới hạn token và tạo ra đầu ra mâu thuẫn mà agent chính vẫn bỏ qua. Phương pháp phù hợp nhất để khắc phục các sự cố này là gì?<br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án C (Đúng):<\/b> Agent chính (Primary/Orchestrator Agent) đóng vai trò quản lý. Việc tăng cường lớp quản lý bằng cách áp dụng hạn mức gọi tool (budgeting), kiểm tra định dạng đầu ra (schema validation) và thiết lập giao ước chuyển tiếp (handoff contract) giúp ngăn chặn triệt để tình trạng gọi tool vô hạn, trôi token và dữ liệu mâu thuẫn.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Thêm retry logic không giải quyết được vấn đề gọi tool dư thừa hay mâu thuẫn dữ liệu, thậm chí còn làm tăng lượng token tiêu thụ.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Việc cho các subagent đọc trực tiếp đầu ra của nhau làm mất đi tính độc lập, tăng độ phức tạp và nguy cơ nhiễu ngữ cảnh thay vì giải quyết thông qua agent điều phối.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Gộp cả 3 subagent thành 1 lần gọi duy nhất làm mất đi ưu điểm của kiến trúc multi-agent, dễ gây quá tải ngữ cảnh và giảm chất lượng xử lý của mô hình đối với các tác vụ phức tạp.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-063",
    "set": 2,
    "number": 63,
    "type": "single",
    "question": "<p>A teammate has asked how to extend Claude Code with a custom Skill that the team can invoke during sessions. The Skill consists of a set of instructions and a few support scripts the team wants Claude to be able to call when the Skill is loaded. Where is the right place to define the Skill?<\/p>",
    "options": {
      "A": "<p>Define the Skill as a long inline instruction at the top of every CLAUDE.md file in the team's repositories so Claude has access to it on every session.<\/p>",
      "B": "<p>Define the Skill inside the application's source code as a regular library module and call it from the application code instead of from Claude Code.<\/p>",
      "C": "<p>Define the Skill in a Skills directory recognized by Claude Code, where Claude can discover and load it during sessions for the team's repositories.<\/p>",
      "D": "<p>Define the Skill in a personal scratch directory on each developer's machine and load it manually before each Claude Code session that needs it.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<b>Đáp án đúng là C: Define the Skill in a Skills directory recognized by Claude Code, where Claude can discover and load it during sessions for the team's repositories.<\/b><br/><b>Dịch câu hỏi:<\/b>Một đồng nghiệp hỏi bạn làm thế nào để mở rộng Claude Code với một Skill tùy chỉnh mà đội ngũ có thể gọi trong các phiên làm việc. Skill này bao gồm một tập hợp các hướng dẫn và một vài kịch bản hỗ trợ (support scripts) mà đội ngũ muốn Claude có thể gọi khi Skill được tải. Nơi phù hợp để định nghĩa Skill này là ở đâu?<br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án C (Đúng):<\/b> Cơ chế định nghĩa Skill chuẩn trong Claude Code là đặt nó vào thư mục quy định (thường là thư mục <code>.claude/skills/<\/code> thuộc dự án/repository). Nhờ đó, Claude Code có thể tự động phát hiện, quản lý và tải các hướng dẫn cùng kịch bản thực thi đi kèm trong phiên làm việc của cả đội ngũ.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Dán toàn bộ chỉ dẫn dài vào <code>CLAUDE.md<\/code> sẽ làm phình dung lượng ngữ cảnh không cần thiết cho mọi phiên làm việc, đồng thời không tối ưu cho việc đính kèm các kịch bản hỗ trợ.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Viết trong mã nguồn ứng dụng như một thư viện thông thường sẽ khiến Skill không thể tương tác trực tiếp với các tính năng mở rộng của Claude Code trong lúc lập trình viên trò chuyện với Claude.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Lưu ở thư mục cá nhân tạm thời làm mất đi tính chia sẻ, gây thiếu đồng bộ giữa các thành viên và phải thao tác thủ công phức tạp mỗi khi bắt đầu phiên làm việc.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-064",
    "set": 2,
    "number": 64,
    "type": "single",
    "question": "<p>A teammate has asked you to explain why the team's Claude application is billed for output tokens at a different rate than input tokens. They had assumed the rate was the same for both. How would you explain the difference?<\/p>",
    "options": {
      "A": "<p>Output tokens are typically billed at the same rate as input tokens, and the apparent rate difference is a billing error to report to Anthropic.<\/p>",
      "B": "<p>Output tokens are typically billed at a lower rate than input tokens, because output tokens are cheaper to produce than input tokens are to process.<\/p>",
      "C": "<p>Output tokens are not billed at all, because cost is determined entirely by the input tokens sent to the model on each request.<\/p>",
      "D": "<p>Output tokens are typically billed at a higher rate than input tokens, and cost models for the application should reflect both rates separately.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><b>Đáp án đúng là D: Output tokens are typically billed at a higher rate than input tokens, and cost models for the application should reflect both rates separately.<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Đáp án D (Đúng):<\/b> Trong mô hình giá trị của các LLM (như Anthropic Claude), <b>output tokens luôn đắt hơn input tokens<\/b> (thường đắt gấp 3 đến 5 lần tùy phiên bản). Việc sinh ra từng token đầu ra tốn kém tài nguyên tính toán (GPU/TPU) hơn nhiều so với việc xử lý song song các token đầu vào (prompt). Do đó, mô hình chi phí của ứng dụng phải tính toán riêng biệt hai đơn giá này.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Đây không phải là lỗi hệ thống tính phí, giá của input và output được quy định khác nhau rõ ràng trong bảng giá chính thức.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Output tokens tốn nhiều chi phí sản xuất hơn chứ không phải rẻ hơn.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Output tokens vẫn bị tính phí bình thường và chiếm phần chi phí đáng kể trong tổng hóa đơn API.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-065",
    "set": 2,
    "number": 65,
    "type": "single",
    "question": "<p>Your team's Claude agent has accumulated several customizations that bypass the SDK's defaults, including custom history management, retry logic, and error handling. A new team member has proposed reverting all the customizations to maintain the codebase more easily. The tech lead disagrees and says each customization was added for a reason. How would you advise the team?<\/p>",
    "options": {
      "A": "<p>Migrate the agent off the SDK and rebuild it with a custom loop.<\/p>",
      "B": "<p>Revert all customizations to the SDK's defaults to standardize the codebase.<\/p>",
      "C": "<p>Keep all customizations, trusting that the tech lead's original reasoning is still valid.<\/p>",
      "D": "<p>Decide on each customization individually based on its original reason and the SDK's current capabilities.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<b>Đáp án đúng là D: Decide on each customization individually based on its original reason and the SDK's current capabilities.<\/b><br/><b>Dịch câu hỏi:<\/b>Claude agent của đội ngũ bạn đã tích lũy nhiều tùy chỉnh ghi đè các thiết lập mặc định của SDK, bao gồm quản lý lịch sử tùy chỉnh, logic thử lại (retry logic) và xử lý lỗi. Một thành viên mới đề xuất khôi phục tất cả các tùy chỉnh về mặc định của SDK để dễ bảo trì cơ sở mã hơn. Tech lead không đồng ý và cho rằng mỗi tùy chỉnh đều được thêm vào có lý do. Bạn sẽ khuyên đội ngũ như thế nào?<br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án D (Đúng):<\/b> Cách tiếp cận hợp lý nhất là xem xét từng tùy chỉnh một cách độc lập dựa trên lý do ban đầu nó được thêm vào và so sánh với khả năng hiện tại của SDK. Các phiên bản SDK mới có thể đã cập nhật tính năng giải quyết được các bài toán đó (cho phép bỏ bớt mã tùy chỉnh), nhưng một số tùy chỉnh nghiệp vụ đặc thù vẫn có thể cần giữ lại.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Bỏ SDK để tự viết lại toàn bộ vòng lặp tùy chỉnh (custom loop) là giải pháp cực đoan, tốn thời gian và làm tăng chi phí bảo trì.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Xóa bỏ mù mờ tất cả tùy chỉnh mà không kiểm tra lý do ban đầu có thể làm hỏng các tính năng nghiệp vụ quan trọng hoặc các xử lý ngoại lệ mà SDK mặc định không hỗ trợ.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Giữ lại toàn bộ mà không đánh giá lại sẽ dẫn đến nợ kỹ thuật (technical debt), vì nhiều tính năng tùy chỉnh trước đây có thể đã trở nên dư thừa do SDK đã hỗ trợ sẵn tốt hơn.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-066",
    "set": 2,
    "number": 66,
    "type": "single",
    "question": "<p>Your team is integrating Claude into an existing REST API service. The service handles concurrent requests, and you are deciding how to structure the Claude API calls within the existing async codebase. How would you structure the Claude calls?<\/p>",
    "options": {
      "A": "<p>Run Claude API calls in a separate thread pool isolated from the rest of the service so the main event loop is not affected.<\/p>",
      "B": "<p>Replace the existing async REST service with a synchronous service to match the call style of synchronous Claude SDK clients.<\/p>",
      "C": "<p>Use the Claude SDK's async client and structure Claude calls as awaitable operations alongside the rest of the service's async code.<\/p>",
      "D": "<p>Make synchronous Claude API calls and block the async event loop until each call completes before processing the next request.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<b>Đáp án đúng là C: Use the Claude SDK's async client and structure Claude calls as awaitable operations alongside the rest of the service's async code.<\/b><br/><b>Dịch câu hỏi:<\/b>Đội ngũ của bạn đang tích hợp Claude vào một dịch vụ REST API hiện có. Dịch vụ này xử lý nhiều yêu cầu đồng thời (concurrent requests) và bạn đang quyết định cách tổ chức các lời gọi Claude API trong cơ sở mã bất đồng bộ (async codebase) hiện tại. Bạn sẽ tổ chức các lệnh gọi Claude như thế nào?<br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án C (Đúng):<\/b> Claude SDK cung cấp sẵn client bất đồng bộ (<code>AsyncAnthropic<\/code> trong Python hoặc hỗ trợ <code>async/await<\/code> trong Node.js/TypeScript). Việc sử dụng client bất đồng bộ chính thức giúp tích hợp mượt mà các lệnh gọi Claude như những thao tác chờ được (<code>awaitable operations<\/code>) mà không làm tắc nghẽn vòng lặp sự kiện (event loop) của dịch vụ hiện tại.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Đưa lời gọi API I/O-bound vào thread pool độc lập là không cần thiết và tốn tài nguyên hệ thống so với việc sử dụng cơ chế <code>async/await<\/code> có sẵn của ngôn ngữ.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Chuyển toàn bộ dịch vụ async sang đồng bộ (synchronous) là một quyết định kiến trúc sai lầm, làm giảm mạnh khả năng xử lý đồng thời của REST API service.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Gọi API đồng bộ và chặn (block) event loop sẽ làm ngưng trệ toàn bộ hệ thống, khiến ứng dụng không thể xử lý các request khác trong lúc chờ Claude phản hồi.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-067",
    "set": 2,
    "number": 67,
    "type": "single",
    "question": "<p>A teammate is debugging a Claude application whose system prompt has grown to several hundred lines and now contains overlapping, contradictory, and obsolete instructions. How would you advise the teammate?<\/p>",
    "options": {
      "A": "<p>Add more explicit instructions so the most recent rules dominate the model's interpretation of the prompt during each request.<\/p>",
      "B": "<p>Audit the prompt for overlap, contradiction, and obsolete content, then refactor so each instruction is clear, current, and non-redundant.<\/p>",
      "C": "<p>Tighten only the contradictory rules first, treating the overlap and obsolete content as lower-priority work the team can address later.<\/p>",
      "D": "<p>Split the prompt across multiple system prompts so the model sees a smaller portion at any given time.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<b>Đáp án đúng là B: Audit the prompt for overlap, contradiction, and obsolete content, then refactor so each instruction is clear, current, and non-redundant.<\/b><br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án B (Đúng):<\/b> Khi một system prompt trở nên quá dài và chứa các hướng dẫn mâu thuẫn, đè lên nhau hoặc đã cũ, giải pháp chuẩn và triệt để nhất là kiểm tra (audit) toàn bộ nội dung, loại bỏ sự trùng lặp/mâu thuẫn, và tái cấu trúc (refactor) để đảm bảo mỗi hướng dẫn đều rõ ràng, cập nhật và không dư thừa.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Thêm nhiều hướng dẫn hơn chỉ làm tăng độ nhiễu và độ dài của prompt, khiến mô hình dễ bị nhầm lẫn hơn thay vì giải quyết các mâu thuẫn hiện có.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Chỉ sửa các quy tắc mâu thuẫn mà bỏ qua phần trùng lặp và nội dung cũ sẽ khiến system prompt tiếp tục cồng kềnh, tốn token không cần thiết và dễ gây ra lỗi trong tương lai.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Claude API chỉ hỗ trợ một chuỗi system prompt chính (hoặc hợp nhất các khối system prompt); việc cố gắng chia nhỏ thành \"nhiều system prompt\" không đúng với cơ chế hoạt động và không giải quyết được xung đột logic giữa các câu lệnh.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-068",
    "set": 2,
    "number": 68,
    "type": "single",
    "question": "<p>You are configuring Claude Code for a new project. The team needs to set permissions, default model selections, and environment-specific behavior at the project level so the configuration is consistent across all developers working on the repository. The Claude Code mechanism you would use is...<\/p>",
    "options": {
      "A": "<p>A shared spreadsheet that lists configuration values for team members to reference and update by hand as the project evolves.<\/p>",
      "B": "<p>Environment variables that each developer sets on their own machine when working with Claude Code on the project.<\/p>",
      "C": "<p>A system prompt embedded in every Claude Code conversation by each developer at the start of every session in the project.<\/p>",
      "D": "<p>The settings.json file, scoped at the project level so the configuration applies consistently across developers and persists with the repository.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<b>Đáp án đúng là D: The settings.json file, scoped at the project level so the configuration applies consistently across developers and persists with the repository.<\/b><br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án D (Đúng):<\/b> Trong Claude Code, tệp cấu hình <code>settings.json<\/code> được lưu ở phạm vi dự án (thường nằm trong thư mục <code>.claude/settings.json<\/code> và được commit vào repository) là cơ chế tiêu chuẩn để lưu trữ các thiết lập về quyền hạn (permissions), mô hình mặc định (default model), và cấu hình chung. Điều này giúp đảm bảo toàn bộ lập trình viên trong đội ngũ có cấu hình đồng nhất khi làm việc trên cùng dự án.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Sử dụng bảng tính thủ công (spreadsheet) gây tốn thời gian, dễ sai sót và không tự động áp dụng vào công cụ.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Đặt biến môi trường (environment variables) trên từng máy cá nhân khiến cấu hình bị phân tán, thiếu đồng bộ và dễ dẫn đến lỗi do khác biệt thiết lập giữa các lập trình viên.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Nhập system prompt thủ công ở mỗi phiên làm việc không phải là cơ chế quản lý cấu hình hệ thống/quyền hạn của Claude Code.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-069",
    "set": 2,
    "number": 69,
    "type": "single",
    "question": "<p>You are building a Claude application that needs to maintain a persistent connection to a service that streams real-time updates. The team is unsure what communication pattern to use. Which communication pattern would you use?<\/p>",
    "options": {
      "A": "<p>Repeated short-lived HTTP polling requests, where the application opens a new HTTP connection each time it checks for updates.<\/p>",
      "B": "<p>A WebSocket, because WebSockets are designed for bidirectional, persistent, real-time communication between the client and the streaming service.<\/p>",
      "C": "<p>A single long HTTP request the server holds open indefinitely, with no standard WebSocket framing on the connection.<\/p>",
      "D": "<p>File-based communication where the service writes new updates to disk and the application polls the file system for changes.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p><b>Đáp án chính xác:<\/b> <b>B<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>WebSocket (B):<\/b> Đây là công nghệ chuẩn được thiết kế riêng cho việc duy trì kết nối hai chiều (bidirectional), liên tục (persistent) và có độ độ trễ thấp giữa client và server để truyền dữ liệu thời gian thực (real-time streaming).<\/p><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>A (HTTP Polling):<\/b> Tạo ra nhiều overhead lớn do phải đóng/mở kết nối liên tục, tốn tài nguyên và không tối ưu cho dữ liệu thời gian thực.<\/p><\/li><li><p><b>C (HTTP Long-Polling không tiêu chuẩn):<\/b> Thiếu tính chuẩn hóa, khó quản lý trạng thái kết nối và xử lý lỗi không hiệu quả bằng kết nối WebSocket chuẩn hoặc SSE.<\/p><\/li><li><p><b>D (File-based Polling):<\/b> Quá chậm, tạo độ trễ cao I/O trên ổ đĩa và không phù hợp cho ứng dụng phát luồng thời gian thực.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-070",
    "set": 2,
    "number": 70,
    "type": "single",
    "question": "<p>You are setting up a Claude application that will run a mix of multi-turn conversations and one-off requests. You want to use caching techniques to reduce token costs where they apply. A teammate suggests caching the model's output as well, so the application does not have to make duplicate Claude calls when similar queries arrive. You would apply prompt caching to...<\/p>",
    "options": {
      "A": "<p>Nothing, because prompt caching does not affect cost in any application that mixes multiturn conversations and one-off requests in a single deployment.<\/p>",
      "B": "<p>The model's output, treating the response from each request as cacheable content the application can return on similar future queries.<\/p>",
      "C": "<p>Only the user's input portion of each request because user input is the part of the prompt that varies the most across the application's normal operation.<\/p>",
      "D": "<p>The static portions of prompts that are repeated across requests, such as system prompts, instructions, or shared context.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><b>Đáp án chính xác:<\/b> <b>D<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Bản chất của Prompt Caching (D):<\/b> Feature <b>Prompt Caching<\/b> của Anthropic/Claude được thiết kế để bộ nhớ đệm lưu lại <b>đầu vào (input/prompt)<\/b> — cụ thể là các đoạn văn bản tĩnh lớn được tái sử dụng nhiều lần giữa các cuộc gọi API (như <code>system prompt<\/code>, tài liệu ngữ cảnh chung, công cụ định nghĩa). Điều này giúp giảm đáng kể chi phí token đầu vào và độ trễ.<\/p><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>A:<\/b> Sai vì prompt caching vẫn hoạt động hiệu quả tối đa cho các phần tĩnh bất kể ứng dụng có trộn lẫn loại yêu cầu nào.<\/p><\/li><li><p><b>B:<\/b> Prompt caching là kỹ thuật dành cho <i>Input/Prompt<\/i>, không phải lưu đệm kết quả <i>Output<\/i>. (Việc lưu đệm kết quả đầu ra là câu chuyện của Application-level Response Caching/Semantic Caching ở phía client/server của bạn, không phải cơ chế Prompt Caching của Anthropic API).<\/p><\/li><li><p><b>C:<\/b> Phần đầu vào của người dùng thay đổi liên tục giữa các request nên không có giá trị để cache (cache miss), việc đặt cache marker vào phần động là vô nghĩa.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-071",
    "set": 2,
    "number": 71,
    "type": "single",
    "question": "<p>Your Claude application produces good responses for typical inputs but struggles with edge cases. You have several labeled examples of edge-case inputs and the desired response for each. You want to use these examples to improve the model's handling of edge cases. What is the best way to use these examples?<\/p>",
    "options": {
      "A": "<p>Embed the examples in a database for the model to find during inference.<\/p>",
      "B": "<p>Add the labeled edge-case examples to the prompt as few-shot examples so the model can learn the pattern.<\/p>",
      "C": "<p>Train a custom model on the edge-case examples and deploy that custom model in place of the team's current Claude integration.<\/p>",
      "D": "<p>Tell users to avoid submitting the edge-case inputs to the application by adding warnings in the application's user interface.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<b>Đáp án đúng là B: Add the labeled edge-case examples to the prompt as few-shot examples so the model can learn the pattern.<\/b><br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án B (Đúng):<\/b> Việc đưa các ví dụ đã gắn nhãn (input + desired output) vào prompt dưới dạng <b>few-shot prompting<\/b> là phương pháp nhanh chóng, hiệu quả và tiêu chuẩn nhất để giúp mô hình hiểu rõ mẫu dữ liệu và cách xử lý các trường hợp ngoại lệ (edge cases).<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Nhúng (embed) ví dụ vào cơ sở dữ liệu chỉ hữu ích cho việc tìm kiếm/RAG, mô hình không thể tự động tìm thấy nếu không được truy vấn và đưa vào context.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Fine-tune (train a custom model) đòi hỏi lượng dữ liệu rất lớn và tốn kém tài nguyên, không phù hợp khi chỉ có một vài ví dụ (several labeled examples).<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Thêm cảnh báo trên UI là cách né tránh vấn đề chứ không cải thiện khả năng xử lý của mô hình.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-072",
    "set": 2,
    "number": 72,
    "type": "single",
    "question": "<p>The product team has asked you to choose a Claude model for a new feature. The team has provided functional requirements but has not specified performance, cost, or quality targets. The team's product manager says, \"Use whatever model gives us the best results.\" How would you respond?<\/p>",
    "options": {
      "A": "<p>Ask the product team to specify quality, latency, and cost targets, then select the model whose tradeoffs best fit those targets.<\/p>",
      "B": "<p>Run every Claude model on a representative sample and pick whichever scores best on a generic benchmark.<\/p>",
      "C": "<p>Choose a mid-tier model and ship the feature, because mid-tier models work for most use cases without specified targets.<\/p>",
      "D": "<p>Choose the largest, highest-capability Claude model, on the grounds that \"best results\" is most likely to mean highest quality.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<b>Đáp án đúng là A: Ask the product team to specify quality, latency, and cost targets, then select the model whose tradeoffs best fit those targets.<\/b><br/><b>Dịch câu hỏi:<\/b>Đội ngũ sản xuất yêu cầu bạn chọn một mô hình Claude cho tính năng mới. Đội ngũ đã cung cấp các yêu cầu chức năng nhưng chưa xác định cụ thể các mục tiêu về hiệu năng (performance), chi phí (cost) hay chất lượng (quality). Quản lý sản phẩm (Product Manager) nói: <i>\"Hãy dùng bất kỳ mô hình nào mang lại kết quả tốt nhất.\"<\/i> Bạn sẽ phản hồi như thế nào?<br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án A (Đúng):<\/b> Định nghĩa \"kết quả tốt nhất\" (best results) là mơ hồ nếu không có các chỉ số cụ thể. Mỗi mô hình Claude có sự đánh đổi (tradeoffs) riêng giữa chất lượng, độ trễ và chi phí. Việc yêu cầu đội ngũ sản phẩm làm rõ các tiêu chí này là bước bắt buộc để chọn được mô hình tối ưu nhất cho bài toán.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Các bài đánh giá chung (generic benchmarks) không phản ánh chính xác hiệu năng của mô hình trên các tác vụ nghiệp vụ cụ thể của sản phẩm.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Việc tự ý chọn mô hình tầm trung mà không làm rõ yêu cầu có thể dẫn đến việc không đạt chất lượng đầu ra hoặc lãng phí tài nguyên không cần thiết.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Dùng mô hình lớn nhất/mạnh nhất chỉ dựa trên giả định về chất lượng sẽ dễ làm tăng chi phí API và độ trễ (latency) lên rất cao mà chưa chắc đã cần thiết cho tính năng đó.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-073",
    "set": 2,
    "number": 73,
    "type": "single",
    "question": "<p>You are designing a Claude application that will process customer support tickets in two stages: a triage stage that classifies tickets and a response stage that drafts replies. The team is debating whether to use a single Claude call that handles both stages or separate Claude calls for each stage. How would you structure the application?<\/p>",
    "options": {
      "A": "<p>Use a single Claude call for triage and then use a non-Claude rule-based system for response generation, on the grounds that rule-based systems are more reliable for drafting replies.<\/p>",
      "B": "<p>Use multiple Claude calls in parallel that each draft a complete ticket reply, then have a fourth Claude call select the best one to send to the customer.<\/p>",
      "C": "<p>Use separate Claude calls for triage and response, because each stage has distinct inputs, outputs, and success criteria that benefit from focused prompts.<\/p>",
      "D": "<p>Use a single Claude call for both stages, on the grounds that a single call is cheaper than multiple calls in any production Claude application setup.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<b>Đáp án đúng là C: Use separate Claude calls for triage and response, because each stage has distinct inputs, outputs, and success criteria that benefit from focused prompts.<\/b><br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án C (Đúng):<\/b> Việc chia nhỏ quy trình phức tạp thành các lệnh gọi riêng biệt (multi-step workflow/chaining) cho từng giai đoạn (phân loại và soạn phản hồi) giúp mỗi prompt được tập trung tối đa vào mục tiêu cụ thể, dễ kiểm thử, tinh chỉnh và giảm khả năng sai sót so with việc bắt mô hình xử lý quá nhiều tác vụ cùng lúc.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Các hệ thống dựa trên quy tắc (rule-based) rất cứng nhắc và không thể linh hoạt soạn các câu trả lời phức tạp, tự nhiên cho hỗ trợ khách hàng như mô hình ngôn ngữ lớn (LLM).<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Việc gọi song song nhiều lượt tạo câu trả lời rồi dùng lượt thứ 4 để chọn là phương án cực kỳ tốn kém token/chi phí và gây ra độ trễ (latency) rất cao không cần thiết đối với bài toán cơ bản này.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Dù 1 lượt gọi có thể đơn giản về mặt kỹ thuật, nhưng không phải lúc nào nó cũng rẻ hơn hoặc hiệu quả hơn nếu prompt quá dài và kết quả trả về không chính xác do bị phân tán chú ý giữa phân loại và viết câu trả lời.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-074",
    "set": 2,
    "number": 74,
    "type": "single",
    "question": "<p>You are establishing the guardrail strategy for a Claude application. The team wants to ensure guardrail failure does not expose the application to unsafe behavior. The guardrail strategy would...<\/p>",
    "options": {
      "A": "<p>Layer multiple guardrails so a single guardrail failure does not expose the application to unsafe behavior.<\/p>",
      "B": "<p>Apply guardrails at the application output level only and route flagged responses to a human reviewer before they are delivered to the user.<\/p>",
      "C": "<p>Implement a single comprehensive system prompt guardrail and validate its coverage against the application's full range of expected inputs.<\/p>",
      "D": "<p>Apply guardrails at the model level only and rely on the model's built-in safety behaviors to handle any cases the guardrail does not explicitly cover.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<b>Đáp án đúng là A: Layer multiple guardrails so a single guardrail failure does not expose the application to unsafe behavior.<\/b><br/><b>Dịch câu hỏi:<\/b>Bạn đang xây dựng chiến lược hàng rào bảo vệ (guardrail strategy) cho một ứng dụng Claude. Đội ngũ muốn đảm bảo rằng nếu một guardrail bị thất bại thì ứng dụng vẫn không rơi vào hành vi không an toàn. Chiến lược guardrail này sẽ...<br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án A (Đúng):<\/b> Chiến lược phòng thủ nhiều lớp (defense-in-depth / layered guardrails) áp dụng các hàng rào bảo vệ ở cả đầu vào (input filtering), câu lệnh hệ thống (system prompt instructions), và đầu ra (output verification). Nhờ đó, nếu một lớp bị vượt qua hoặc thất bại, các lớp khác vẫn ngăn chặn được các hành vi không an toàn.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Chỉ áp dụng ở cấp độ output sẽ bỏ qua việc kiểm soát ngay từ input, dễ dẫn đến lãng phí chi phí API và tăng độ trễ lớn khi phải chuyển phản hồi cho con người duyệt thủ công.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Phụ thuộc vào duy nhất một system prompt guardrail là chiến lược rủi ro cao (single point of failure), dễ bị vượt qua bằng kỹ thuật prompt injection.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Chỉ phụ thuộc hoàn toàn vào tính năng an toàn có sẵn của mô hình (model-level) là không đủ vì mỗi ứng dụng có các quy tắc an toàn và ngữ cảnh nghiệp vụ riêng biệt.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-075",
    "set": 2,
    "number": 75,
    "type": "single",
    "question": "<p>You are writing a system prompt for a Claude application that needs to produce output in a specific JSON shape. The downstream system will reject any output that does not match the schema. Your prompt would need to...<\/p>",
    "options": {
      "A": "<p>Instruct Claude to use whichever output format it considers most appropriate for each request the application handles.<\/p>",
      "B": "<p>Instruct Claude to return JSON sometimes and free text other times so the application's output captures both formats.<\/p>",
      "C": "<p>Omit any reference to the format and rely on a post-processing step in the application to reshape Claude's output.<\/p>",
      "D": "<p>Include explicit constraints describing the required JSON schema and an instruction to produce only output matching that schema.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><b>Đáp án chính xác:<\/b> <b>D<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Đảm bảo định dạng đầu ra có cấu trúc (D):<\/b> Khi hệ thống nhận dữ liệu yêu cầu định dạng JSON nghiêm ngặt, thực hành tốt nhất trong Prompt Engineering là cung cấp định nghĩa schema rõ ràng (explicit JSON schema) ngay trong system prompt và yêu cầu mô hình <b>chỉ<\/b> trả về JSON tuân thủ đúng cấu trúc đó (không kèm văn bản dẫn dắt giải thích).<\/p><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>A &amp; B:<\/b> Cho phép mô hình tự do chọn định dạng hoặc trả về text tự do sẽ khiến hệ thống phía sau từ chối dữ liệu (do vi phạm cấu trúc yêu cầu).<\/p><\/li><li><p><b>C:<\/b> Nếu mô hình trả về dữ liệu sai định dạng hoặc không có cấu trúc ngay từ đầu, bước xử lý sau (post-processing) sẽ không đủ thông tin hoặc rất khó để parse/chuyển đổi lại chính xác.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-076",
    "set": 2,
    "number": 76,
    "type": "single",
    "question": "<p>Your Claude application returns confident-sounding answers, but occasionally those answers contain factual errors that downstream systems treat as ground truth. The team is concerned about the application's confidence-versus-accuracy gap. How would you address the gap?<\/p>",
    "options": {
      "A": "<p>Lower the model's temperature so the model's responses sound less confident and downstream systems are less likely to treat the responses as ground truth in normal operation.<\/p>",
      "B": "<p>Apply skepticism toward confident output by adding validation steps, sourcing requirements, or confidence calibration before treating outputs as ground truth.<\/p>",
      "C": "<p>Reject every response the application produces until a manual accuracy review is conducted on each response by a human reviewer before any downstream system uses it.<\/p>",
      "D": "<p>Add a disclaimer to every output telling users to verify the accuracy of the output and treat the disclaimer as the primary mechanism for managing the confidence-versus-accuracy gap.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p><b>Đáp án chính xác:<\/b> <b>B<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Xử lý hiện tượng Hallucination / Overconfidence (B):<\/b> LLM có thể đưa ra câu trả lời sai với giọng điệu rất tự tin. Giải pháp kỹ thuật chuẩn là thiết lập cơ chế kiểm soát chất lượng từ kiến trúc hệ thống: bổ sung các bước xác thực tự động (validation), yêu cầu mô hình trích dẫn nguồn tài liệu đối chiếu (RAG / sourcing), hoặc triển khai các lớp hiệu chỉnh độ tin cậy trước khi đưa dữ liệu sang các hệ thống phía sau.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Hạ <code>temperature<\/code> giúp mô hình đưa ra câu trả lời mang tính định hướng (deterministic) hơn nhưng <b>không làm thay đổi tone giọng<\/b> tự tin hay loại bỏ triệt để các lỗi thực tế.<\/p><\/li><li><p><b>C:<\/b> Bắt con người duyệt thủ công (human-in-the-loop) 100% mọi kết quả sẽ phá hỏng tính tự động hóa và khả năng mở rộng của hệ thống.<\/p><\/li><li><p><b>D:<\/b> Thêm tuyên bố miễn trừ trách nhiệm chỉ giải quyết mặt hiển thị với người dùng cuối, không ngăn được các <b>hệ thống phía sau (downstream systems)<\/b> xử lý sai dữ liệu lỗi.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-077",
    "set": 2,
    "number": 77,
    "type": "single",
    "question": "<p>Your team is choosing how to add a capability to a Claude application. You want to apply the appropriate option, whether built-in tool, custom tool, Skill, or MCP server, based on the use case. You would choose the option that...<\/p>",
    "options": {
      "A": "<p>Is the most familiar to the team based on prior experience with similar capabilities.<\/p>",
      "B": "<p>Is the newest available option among built-in tools, custom tools, Skills, and MCP servers.<\/p>",
      "C": "<p>Is the easiest to build given the team's current development tools and workflows.<\/p>",
      "D": "<p>Matches the use case's scope, reuse needs, and integration context.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><b>Đáp án đúng là D: Matches the use case's scope, reuse needs, and integration context.<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Đáp án D (Đúng):<\/b> Khi lựa chọn giữa các giải pháp mở rộng năng lực cho Claude (built-in tool, custom tool, Skill, hay MCP server), quyết định chuẩn nhất phải dựa trên phạm vi yêu cầu (scope), khả năng tái sử dụng (reuse needs), và ngữ cảnh tích hợp (integration context) của dự án.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Lựa chọn dựa trên thói quen hay sự quen thuộc của nhóm không bảo đảm giải pháp đó tối ưu về kiến trúc và kỹ thuật.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Lựa chọn chỉ vì công nghệ đó \"mới nhất\" là tư duy thiên lệch, dễ dẫn đến việc áp dụng sai mục đích.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Lựa chọn chỉ vì \"dễ làm nhất\" có thể bỏ qua các yếu tố quan trọng về khả năng mở rộng, bảo mật và khả năng tái sử dụng lâu dài.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-078",
    "set": 2,
    "number": 78,
    "type": "single",
    "question": "<p>A Claude application that worked well in testing is now occasionally returning outputs that mention information not present in the input. The development team initially assumed the model was hallucinating, so they asked you to troubleshoot. What would you do first?<\/p>",
    "options": {
      "A": "<p>Examine production traces to identify whether the issue is hallucination by the model, context loss, prompt injection, or another failure mode before recommending a fix.<\/p>",
      "B": "<p>Replace the current model with a larger one to reduce the chance of hallucination, on the grounds that larger models tend to hallucinate less in typical applications.<\/p>",
      "C": "<p>Apply a retrieval-augmented generation pattern to ground the responses in source content before any further investigation of the production traces.<\/p>",
      "D": "<p>Add a system prompt instruction telling the model not to invent information, on the grounds that prompt-level instructions are the fastest fix for hallucination concerns.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<b>Đáp án đúng là A: Examine production traces to identify whether the issue is hallucination by the model, context loss, prompt injection, or another failure mode before recommending a fix.<\/b><br/><b>Dịch câu hỏi:<\/b>Một ứng dụng Claude vốn hoạt động tốt khi thử nghiệm hiện thỉnh thoảng trả về kết quả chứa thông tin không xuất hiện trong đầu vào. Đội ngũ phát triển ban đầu giả định rằng mô hình bị ảo giác (hallucination) nên đã nhờ bạn xử lý sự cố. Bạn sẽ làm gì đầu tiên?<br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án A (Đúng):<\/b> Luôn phải điều tra và chẩn đoán nguyên nhân gốc rễ trước khi đưa ra giải pháp sửa chữa. Việc kiểm tra vết/nhật ký sản xuất (production traces) giúp xác định chính xác hiện tượng này xuất phát từ ảo giác của mô hình, mất ngữ cảnh (context loss), tấn công chèn lệnh (prompt injection) hay một chế độ lỗi khác.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Đổi sang mô hình lớn hơn là phương án tốn kém và chưa chắc giải quyết được vấn đề nếu nguyên nhân nằm ở prompt injection hoặc trôi ngữ cảnh.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Áp dụng RAG ngay lập tức khi chưa điều tra nguyên nhân sẽ làm tăng độ phức tạp của hệ thống mà không đảm bảo sửa đúng lỗi.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Thêm câu lệnh cấm bịa đặt vào system prompt chỉ là giải pháp tình thế, không xử lý triệt để nếu vấn đề đến từ kiến trúc luồng dữ liệu hay mã nguồn.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-079",
    "set": 2,
    "number": 79,
    "type": "single",
    "question": "<p>You are designing an agent that handles a multi-step research task. You want the agent to break the task into smaller pieces, hand each piece to a focused subagent, and consolidate the results. The agent pattern you would apply is...<\/p>",
    "options": {
      "A": "<p>An orchestrator and subagent pattern with specialized subagents assigned to each subtask.<\/p>",
      "B": "<p>A memory pattern that stores the entire research history in advance, before any subtask begins execution.<\/p>",
      "C": "<p>A context-window pruning pattern that drops each subtask's content after the agent moves on.<\/p>",
      "D": "<p>A single tool-use loop that includes every tool the agent might need across all subtasks.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<b>Đáp án đúng là A: An orchestrator and subagent pattern with specialized subagents assigned to each subtask.<\/b><br/><b>Dịch câu hỏi:<\/b>Bạn đang thiết kế một agent xử lý tác vụ nghiên cứu gồm nhiều bước. Bạn muốn agent chia nhỏ tác vụ thành các phần nhỏ hơn, giao từng phần cho một subagent chuyên biệt, và tổng hợp kết quả lại. Mẫu agent (agent pattern) bạn sẽ áp dụng là...<br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án A (Đúng):<\/b> Mô hình <b>Orchestrator-subagent pattern<\/b> (điều phối viên và agent phụ) chính là kiến trúc thiết kế chuẩn cho bài toán này. Trong đó, Orchestrator đóng vai trò phân tích yêu cầu, chia nhỏ nhiệm vụ, phân công cho các subagent chuyên biệt xử lý độc lập và thu thập/tổng hợp kết quả cuối cùng.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Lớp lưu trữ lịch sử (memory pattern) không có nhiệm vụ phân rã tác vụ hay điều phối xử lý.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Cắt tỉa cửa sổ ngữ cảnh (context-window pruning) chỉ là kỹ thuật tối ưu hóa dung lượng bộ nhớ token, không phải mẫu thiết kế luồng xử lý agent.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Sử dụng một vòng lặp tool duy nhất (single tool-use loop) với tất cả các tool sẽ làm tăng độ phức tạp của prompt, giảm độ chính xác và không đáp ứng được yêu cầu chia nhỏ tác vụ cho các subagent chuyên biệt.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-080",
    "set": 2,
    "number": 80,
    "type": "single",
    "question": "<p>You are deciding between Claude models for a task. The team has identified three relevant tradeoff dimensions: quality, latency, and cost. The right model is the one that...<\/p>",
    "options": {
      "A": "<p>Satisfies the task's latency requirement first, then is evaluated against quality and cost thresholds to confirm the selection is acceptable across all three dimensions.<\/p>",
      "B": "<p>Meets the task's cost target within a defined latency budget, with quality validated against a representative sample of inputs after the model is selected.<\/p>",
      "C": "<p>Fits the task's quality, latency, and cost requirements together, recognizing that improving one dimension typically affects the others.<\/p>",
      "D": "<p>Meets the task's quality requirements at an acceptable latency, with cost reviewed separately once the quality and latency bar has been established.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<b>Đáp án đúng là C: Fits the task's quality, latency, and cost requirements together, recognizing that improving one dimension typically affects the others.<\/b><br/><b>Dịch câu hỏi:<\/b>Bạn đang lựa chọn giữa các mô hình Claude cho một tác vụ. Đội ngũ đã xác định được ba chiều đánh đổi liên quan: chất lượng (quality), độ trễ (latency), và chi phí (cost). Mô hình phù hợp nhất là mô hình...<br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án C (Đúng):<\/b> Lựa chọn mô hình AI luôn là một bài toán cân bằng đồng thời cả 3 yếu tố: <b>Chất lượng - Độ trễ - Chi phí<\/b> (Quality, Latency, Cost). Việc tối ưu hóa một chiều thường đi kèm với sự đánh đổi ở các chiều khác (ví dụ: model có chất lượng cao nhất như Claude 3.5 Sonnet/Opus sẽ có chi phí cao hơn và độ trễ lớn hơn so with Claude 3.5 Haiku). Mô hình đúng nhất là mô hình đáp ứng hài hòa cả 3 tiêu chí theo yêu cầu của bài toán.<\/p><\/li><li><p><b>Đáp án A, B, D (Sai):<\/b> Việc ưu tiên riêng lẻ từng yếu tố trước rồi mới xem xét các yếu tố khác theo dạng đánh giá tách biệt không phản ánh đúng bản chất cân bằng (tradeoff) đồng thời giữa các tiêu chí khi thiết kế ứng dụng AI sản xuất (production AI system).<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-081",
    "set": 2,
    "number": 81,
    "type": "single",
    "question": "<p>Your Claude application's content policy specifies categories of content it should not produce under any circumstance. The application currently has no mechanism to enforce this policy, and content matching these categories is appearing in the application's output. How would you enforce the content policy?<\/p>",
    "options": {
      "A": "<p>Enhance the system prompt to contain explicit instructions for the categories to avoid, complete with examples of each category. Treat the strengthened prompt as the primary enforcement mechanism for the application's content policy across all responses.<\/p>",
      "B": "<p>Remove the content policy entirely and let any output reach users during normal operation, accepting whatever content the application produces in response to incoming traffic.<\/p>",
      "C": "<p>Move enforcement to users by asking them to report content policy violations after the violating content has already reached them in the application's responses.<\/p>",
      "D": "<p>Add deterministic output filtering that checks responses against the content policy before they reach users.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<b>Đáp án đúng là D: Add deterministic output filtering that checks responses against the content policy before they reach users.<\/b><br/><b>Dịch câu hỏi:<\/b>Chính sách nội dung (content policy) ứng dụng Claude của bạn quy định các danh mục nội dung không được phép tạo ra trong bất kỳ trường hợp nào. Ứng dụng hiện chưa có cơ chế thực thi chính sách này, và các nội dung thuộc danh mục cấm đang xuất hiện ở kết quả đầu ra. Bạn sẽ thực thi chính sách nội dung này như thế nào?<br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án D (Đúng):<\/b> Để đảm bảo nội dung vi phạm <b>không bao giờ<\/b> tiếp cận người dùng dưới bất kỳ hình thức nào, giải pháp an toàn và tin cậy nhất là thêm một lớp lọc đầu ra mang tính xác định (<b>deterministic output filtering / guardrail<\/b>). Lớp này sẽ chặn hoặc hủy phản hồi trước khi trả về cho người dùng nếu phát hiện vi phạm.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Dù việc cải thiện system prompt rất hữu ích, nhưng LLM vẫn có xác suất bị vượt qua bởi các kỹ thuật jailbreak/prompt injection. Do đó, chỉ dựa vào system prompt như cơ chế bảo vệ duy nhất là không đủ an toàn.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Bỏ qua chính sách an toàn và mặc kệ nội dung độc hại reaching người dùng là hoàn toàn sai nguyên tắc.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Đẩy trách nhiệm báo cáo vi phạm cho người dùng sau khi nội dung vi phạm đã được hiển thị là phương pháp thụ động, không ngăn chặn được tác hại thực tế.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-082",
    "set": 2,
    "number": 82,
    "type": "single",
    "question": "<p>You are building an agent that needs to call several internal APIs and a database in a structured, repeatable way. Your team has decided to use the Claude Agent SDK rather than build a custom loop. You are setting up the agent's tool definitions and execution loop. How would you set up the tools and execution loop?<\/p>",
    "options": {
      "A": "<p>Use the SDK's tool interface and let the SDK handle the loop, dispatch, and history.<\/p>",
      "B": "<p>Call the Messages API directly and let the model format its tool calls in plain text.<\/p>",
      "C": "<p>Use the SDK's tool interface and loop, with conversation history stored in a separate team database.<\/p>",
      "D": "<p>Use the SDK's tool interface and write the loop and history layer in the team's own code.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p><b>Đáp án chính xác:<\/b> <b>A<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Bản chất của Claude Agent SDK (A):<\/b> Điểm mạnh cốt lõi của việc sử dụng một Agent SDK chuyên dụng (thay vì tự viết code vòng lặp) là SDK đã tự động hóa toàn bộ việc quản lý vòng lặp thực thi (execution loop), điều phối cuộc gọi công cụ (tool dispatching), và duy trì ngữ cảnh/lịch sử cuộc trò chuyện (conversation history).<\/p><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>B:<\/b> Bỏ qua các tính năng của Agent SDK và quay lại cách làm thủ công với Messages API.<\/p><\/li><li><p><b>C &amp; D:<\/b> Đề bài đã nêu rõ nhóm quyết định <i>\"sử dụng Claude Agent SDK thay vì tự xây dựng một vòng lặp tùy chỉnh\"<\/i>, do đó việc tự viết code quản lý vòng lặp hoặc tự dựng cơ sở dữ liệu riêng để lưu lịch sử làm mất đi lợi ích của việc dùng SDK.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-083",
    "set": 2,
    "number": 83,
    "type": "single",
    "question": "<p>A teammate is reviewing the team's threat model for a Claude application and has asked you to identify the categories of AI-specific threats that the model should cover. The teammate has already listed traditional web application threats and wants to know what additional categories apply to a Claude application. Which AI-specific threat categories would you add?<\/p>",
    "options": {
      "A": "<p>Cross-site scripting and SQL injection, because these traditional web application threats apply with equal weight to any application that uses Claude in any way.<\/p>",
      "B": "<p>Network-level denial of service and physical infrastructure attacks, because these categories cover the threats most likely to affect any Claude application in production.<\/p>",
      "C": "<p>Prompt injection, data leakage from prompts or context, jailbreak attempts, and unsafe model output that bypasses application controls.<\/p>",
      "D": "<p>Supply chain attacks on the Claude SDK because the SDK itself is the only point of vulnerability that a Claude application introduces beyond traditional web application threats.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><b>Đáp án chính xác:<\/b> <b>C<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Mối đe dọa đặc thù AI/LLM (C):<\/b> Đây là các nguy cơ an ninh cốt lõi dành riêng cho các ứng dụng tích hợp LLM (như OWASP Top 10 for LLM Applications):<\/p><ul><li><p><b>Prompt Injection:<\/b> Kẻ tấn công tiêm câu lệnh thao túng mô hình.<\/p><\/li><li><p><b>Data Leakage:<\/b> Rò rỉ dữ liệu nhạy cảm từ prompt/context.<\/p><\/li><li><p><b>Jailbreak:<\/b> Bỏ qua các rào cản an toàn của mô hình.<\/p><\/li><li><p><b>Unsafe Output:<\/b> Đầu ra chứa mã độc hoặc hành vi ngoài ý muốn gây nguy hại đến hệ thống phía sau.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>A &amp; B:<\/b> XSS, SQL injection, Network DoS, hay tấn công hạ tầng vật lý là các mối đe dọa bảo mật web/hạ tầng truyền thống (đề bài đã nêu rõ đồng nghiệp đã liệt kê xong phần này và đang tìm mối đe dọa <i>đặc thù AI<\/i>).<\/p><\/li><li><p><b>D:<\/b> Tấn công chuỗi cung ứng (supply chain attack) là mối đe dọa phần mềm chung cho mọi thư viện/SDK, không phải mối đe dọa đặc thù duy nhất hay đại diện đầy đủ cho ứng dụng AI.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-084",
    "set": 2,
    "number": 84,
    "type": "single",
    "question": "<p>You are choosing between using STDIO-based communication and HTTP-based communication for an MCP server. The server will be invoked by a Claude Code session running locally. Which communication pattern would you use?<\/p>",
    "options": {
      "A": "<p>STDIO and HTTP simultaneously for redundancy, with the team running two communication patterns at the same time across Claude Code sessions.<\/p>",
      "B": "<p>HTTP on the grounds that HTTP is preferable to STDIO in any context the application might encounter during normal operation.<\/p>",
      "C": "<p>HTTP polling against the MCP server, treating HTTP as a substitute for the standard MCP communication patterns.<\/p>",
      "D": "<p>STDIO because STDIO is well-suited to local process communication and avoids unnecessary network setup.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<b>Đáp án đúng là D: STDIO because STDIO is well-suited to local process communication and avoids unnecessary network setup.<\/b><br/><b>Dịch câu hỏi:<\/b>Bạn đang chọn giữa việc sử dụng giao tiếp dựa trên STDIO và giao tiếp dựa trên HTTP cho một MCP server. Server này sẽ được gọi bởi một phiên Claude Code đang chạy cục bộ (locally). Bạn sẽ sử dụng mô hình giao tiếp nào?<br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án D (Đúng):<\/b> Khi MCP server và client (Claude Code) chạy trên cùng một máy cục bộ, <b>STDIO (Standard Input/Output)<\/b> là lựa chọn tối ưu và tiêu chuẩn. Giao thức này cho phép hai tiến trình giao tiếp trực tiếp với nhau nhanh chóng, an toàn và không tốn công cấu hình mạng, cổng (port) hay quản lý xác thực HTTP phức tạp.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Chạy đồng thời cả hai mô hình giao tiếp gây ra sự dư thừa không cần thiết và làm phức tạp hệ thống.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> HTTP không bắt buộc hay ưu việt hơn STDIO trong ngữ cảnh chạy tiến trình cục bộ (local process). HTTP thường chỉ được ưu tiên khi server chạy từ xa (remote server).<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> HTTP polling không phải là phương thức giao tiếp chuẩn của MCP và gây ra độ trễ (latency) cũng như lãng phí tài nguyên.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-085",
    "set": 2,
    "number": 85,
    "type": "single",
    "question": "<p>The product team has described a new Claude feature in business terms: \"agents should help our analysts produce client memos faster.\" You need to convert this into actionable technical requirements for the engineering team. Your first step would be to...<\/p>",
    "options": {
      "A": "<p>Ask the analysts about the current memo production process to see where they think Claude could be introduced as a prompt-driven drafting step.<\/p>",
      "B": "<p>Assess what similar agent-based features have been built internally or in the industry and use those precedents to scope the technical approach.<\/p>",
      "C": "<p>Examine what model capabilities and tier options are available and determine which best supports the memo drafting workflow described by the product team.<\/p>",
      "D": "<p>Interpret the functional and infrastructure requirements implied by the business goal.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<b>Đáp án đúng là D: Interpret the functional and infrastructure requirements implied by the business goal.<\/b><br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án D (Đúng):<\/b> Khi chuyển đổi một mục tiêu kinh doanh (\"giúp nhà phân tích tạo bản ghi nhớ khách hàng nhanh hơn\") thành các yêu cầu kỹ thuật thực thi được (actionable technical requirements), bước đầu tiên của kỹ sư/kiến trúc sư giải pháp là <b>phân tích và diễn giải các yêu cầu về chức năng (functional) cũng như hạ tầng/kiến trúc (infrastructure)<\/b> mà mục tiêu đó đòi hỏi (ví dụ: cần API gì, độ trễ ra sao, bảo mật dữ liệu thế nào, tích hợp hệ thống lưu trữ nào).<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Phỏng vấn nhà phân tích về quy trình làm việc là công việc thiên về Business Analyst / Product Owner để xác định yêu cầu nghiệp vụ, không phải là bước đầu tiên để chuyển đổi mục tiêu kinh doanh thành yêu cầu kỹ thuật cho đội ngũ engineering.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Khảo sát các giải pháp tương tự mang tính chất tham khảo, không giúp trực tiếp phân rã mục tiêu kinh doanh cụ thể hiện tại thành yêu cầu kỹ thuật thực tế.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Chọn model tier/capability quá sớm khi chưa làm rõ các yêu cầu về chức năng và hạ tầng là cách tiếp cận đi ngược quy trình (chọn công nghệ trước khi hiểu rõ bài toán).<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-086",
    "set": 2,
    "number": 86,
    "type": "single",
    "question": "<p>A Claude application is occasionally refusing to answer questions that should be in scope, including questions the application has answered correctly in the past. You want to investigate. What is the first step of your investigation?<\/p>",
    "options": {
      "A": "<p>Test whether removing or adjusting those instructions resolves the behavior.<\/p>",
      "B": "<p>Examine traces of the refused requests to identify what triggers the refusal, whether input patterns, system prompt content, or other context.<\/p>",
      "C": "<p>Assess whether the refusals cluster around specific input patterns, question types, or time periods by analyzing the distribution of refused requests in the logs.<\/p>",
      "D": "<p>Identify which questions have been refused and compare them against previously answered questions to determine what changed between the successful and refused interactions.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<b>Đáp án đúng là B: Examine traces of the refused requests to identify what triggers the refusal, whether input patterns, system prompt content, or other context.<\/b><br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án B (Đúng):<\/b> Bước đầu tiên trong quy trình điều tra/troubleshoot sự cố LLM từ chối trả lời (refusal) là kiểm tra vết (examine traces) hoặc nhật ký chi tiết của các request bị từ chối. Điều này giúp xác định nguyên nhân gốc rễ cụ thể kích hoạt hành vi từ chối (do mẫu đầu vào của người dùng, do nội dung system prompt quá nghiêm ngặt, hay do ngữ cảnh phụ trợ).<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Việc thử nghiệm gỡ bỏ hoặc điều chỉnh câu lệnh (A) là bước khắc phục/sửa lỗi, chỉ nên thực hiện sau khi đã điều tra và xác định được nguyên nhân.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Phân tích xu hướng/thống kê trên diện rộng (C) giúp hiểu quy mô ảnh hưởng nhưng không cung cấp ngay chi tiết kỹ thuật trực tiếp về nguyên nhân khiến một request bị kích hoạt từ chối như việc soi vết (trace analysis).<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> So sánh câu hỏi thành công và thất bại (D) chỉ mang tính cảm quan bề ngoài, không phản ánh đầy đủ các yếu tố ẩn bên trong như system prompt hay thông số API.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-087",
    "set": 2,
    "number": 87,
    "type": "single",
    "question": "<p>Your Claude application's outputs are inconsistent in format. The team's instructions are scattered across the system prompt and user messages, with some instructions stated only once and others repeated. How would you fix the inconsistency?<\/p>",
    "options": {
      "A": "<p>Move all instructions into the user message so the application's behavior is controlled at the input point.<\/p>",
      "B": "<p>Consolidate behavioral and format instructions in the system prompt and keep user messages focused on the user's input.<\/p>",
      "C": "<p>Place each instruction wherever the developer who first wrote it found most natural, retaining the original intent.<\/p>",
      "D": "<p>Repeat all instructions in both the system prompt and the user message so the model sees each instruction more than once.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p><b>Đáp án chính xác:<\/b> <b>B<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Nguyên tắc phân định Vai trò trong Prompt Engineering (B):<\/b> Thực hành tốt nhất khi thiết kế ứng dụng Prompting/Claude là tách biệt rõ ràng giữa <b>System Prompt<\/b> (nơi quy định vai trò, quy tắc hành vi chung và định dạng đầu ra cố định) và <b>User Message<\/b> (nơi cung cấp dữ liệu đầu vào hoặc yêu cầu cụ thể của từng lượt tương tác). Việc tập trung các hướng dẫn định dạng vào system prompt giúp mô hình tuân thủ nhất quán và tránh bị nhiễu.<\/p><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>A:<\/b> Đưa tất cả vào user message làm tăng nguy cơ mô hình bỏ qua hướng dẫn định dạng khi nội dung user input quá dài hoặc thay đổi liên tục.<\/p><\/li><li><p><b>C:<\/b> Việc để mỗi lập trình viên viết một kiểu không tuân theo chuẩn mực nào sẽ khiến prompt bị phân tán và gây ra hiện tượng không nhất quán hiện tại.<\/p><\/li><li><p><b>D:<\/b> Lặp lại thông tin ở cả hai nơi gây tốn token (tăng chi phí, tăng độ trễ) và có thể gây xung đột hoặc làm mô hình bị nhiễu do dư thừa ngữ cảnh.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-088",
    "set": 2,
    "number": 88,
    "type": "single",
    "question": "<p>Your agent makes 10 to 15 tool calls per task, and you have noticed it sometimes loses track of earlier results by the time it reaches later steps. The agent's context window is large enough to hold all the messages, but the relevant information appears to get buried as the conversation grows. How would you address this?<\/p>",
    "options": {
      "A": "<p>Switch to a different agentic framework that advertises automatic context-window management as a built-in feature.<\/p>",
      "B": "<p>Reduce the number of tool calls per task by combining several existing tools into larger, multi-purpose tools.<\/p>",
      "C": "<p>Increase the context window further so all tool outputs from every prior step remain in full detail throughout the task.<\/p>",
      "D": "<p>Apply a context-management pattern that summarizes or prunes older tool outputs while preserving the active task state.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><b>Đáp án chính xác:<\/b> <b>D<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Vấn đề \"Lost in the Middle\" và Quản lý ngữ cảnh (D):<\/b> Dù cửa sổ ngữ cảnh đủ lớn, các mô hình ngôn ngữ lớn (LLM) vẫn gặp hiện tượng suy giảm khả năng chú ý khi hội thoại quá dài (thông tin quan trọng bị \"vùi lấp\"). Giải pháp kiến trúc chuẩn là sử dụng chiến lược <b>context management<\/b> (tóm tắt kết quả cũ, nén lịch sử hoặc xóa bỏ/cắt tỉa các payload chi tiết không còn cần thiết) để giữ ngữ cảnh gọn gàng và tập trung vào trạng thái hiện tại.<\/p><\/li><li><p><b>Tại sao các phương án khác sai:<\/b><\/p><ul><li><p><b>A:<\/b> Đổi framework không giải quyết triệt để bản chất cách LLM xử lý thông tin dài và tốn công sức làm lại.<\/p><\/li><li><p><b>B:<\/b> Gộp công cụ làm giảm tính đơn nhiệm (single-responsibility) của công cụ, khiến mô hình khó chọn đúng hành vi và phức tạp hóa tham số.<\/p><\/li><li><p><b>C:<\/b> Tiếp tục tăng dung lượng ngữ cảnh chỉ làm trầm trọng thêm hiện tượng thông tin bị vùi lấp (bắt được ít thông tin cốt lõi hơn) và tăng đáng kể chi phí/độ trễ.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-089",
    "set": 2,
    "number": 89,
    "type": "single",
    "question": "<p>A teammate has asked you to explain the difference between context engineering and prompt engineering. They have heard the terms used interchangeably and are unsure how each applies to a Claude application that processes long-running multi-step tasks. How would you describe the distinction?<\/p>",
    "options": {
      "A": "<p>Prompt engineering focuses on the model's response, while context engineering focuses on the user's input across many sessions in a long-running multi-step Claude application.<\/p>",
      "B": "<p>Prompt engineering is the older term for prompt design, while context engineering is the newer term that has replaced it in modern Claude applications across the industry.<\/p>",
      "C": "<p>Prompt engineering shapes individual prompts for specific outputs, while context engineering manages how content flows across turns and steps and takes steps to keep relevant state visible.<\/p>",
      "D": "<p>Prompt engineering and context engineering each address content the team gives Claude, but the team can group them under a single workflow because the practices use overlapping techniques.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<b>Đáp án đúng là C: Prompt engineering shapes individual prompts for specific outputs, while context engineering manages how content flows across turns and steps and takes steps to keep relevant state visible.<\/b><br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án C (Đúng):<\/b><\/p><ul><li><p><b>Prompt engineering<\/b> tập trung vào việc thiết kế, tối ưu hóa nội dung và cấu trúc của từng câu lệnh (individual prompt) gửi tới mô hình để thu được kết quả đầu ra mong muốn cho tác vụ đó.<\/p><\/li><li><p><b>Context engineering<\/b> mang tính bao quát hơn, tập trung vào việc quản lý toàn bộ luồng thông tin (context window), trạng thái (state), lịch sử hội thoại và bộ nhớ qua nhiều lượt (turns) hoặc nhiều bước trong một ứng dụng xử lý tác vụ dài (long-running multi-step task) nhằm giúp mô hình giữ đúng ngữ cảnh.<\/p><\/li><\/ul><\/li><li><p><b>Đáp án A (Sai):<\/b> Mô tả này phân chia sai bản chất khái niệm.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Context engineering không phải là thuật ngữ mới thay thế cho prompt engineering, mà là hai khía cạnh bổ trợ cho nhau.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Việc gộp chung làm một sẽ làm mờ đi sự khác biệt rõ rệt về mặt kiến trúc giữa việc tối ưu từng câu lệnh và việc quản lý luồng dữ liệu/trạng thái trong ứng dụng.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-090",
    "set": 2,
    "number": 90,
    "type": "single",
    "question": "<p>The Anthropic API deprecated a request parameter that your Claude application uses in approximately 40 places across the codebase. The deprecation notice gives a six-month window before the parameter is removed and recommends a replacement parameter with slightly different semantics. You would respond to the deprecation by...<\/p>",
    "options": {
      "A": "<p>Migrating all 40 call sites in a single change near the removal date to ensure the deprecated parameter continues to work as long as possible.<\/p>",
      "B": "<p>Keeping the deprecated parameter in place while writing a wrapper function around it to insulate the rest of the codebase from the eventual change.<\/p>",
      "C": "<p>Adding regression tests to cover the parameter's behavior, then migrating call sites in batches that you validate against regression tests.<\/p>",
      "D": "<p>Swapping all 40 call sites in a single change right away to prevent drawn-out migration work that will delay ongoing functioning.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><b>Đáp án chính xác:<\/b> <b>C<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Chiến lược refactor an toàn (C):<\/b> Khi tham số mới có ngữ nghĩa hơi khác (slightly different semantics) và được sử dụng ở nhiều nơi (40 vị trí), việc thay đổi toàn bộ cùng lúc có rủi ro cao gây ra lỗi hệ thống. Phương pháp chuẩn là tạo <b>regression tests<\/b> trước để đảm bảo tính đúng đắn, sau đó thực hiện chuyển đổi theo từng đợt (in batches) và kiểm thử liên tục.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Trì hoãn đến sát thời hạn mới thay đổi hàng loạt làm tăng rủi ro gặp sự cố nghiêm trọng mà không có đủ thời gian sửa chữa.<\/p><\/li><li><p><b>B:<\/b> Giữ lại tham số cũ trong wrapper không giải quyết được vấn đề tham số đó sẽ bị Anthropic xóa hoàn toàn sau 6 tháng.<\/p><\/li><li><p><b>D:<\/b> Thay đổi toàn bộ 40 vị trí ngay lập tức mà không có bài kiểm thử bảo vệ có thể dẫn đến các lỗi logic ẩn do sự thay đổi về ngữ nghĩa của tham số mới.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-091",
    "set": 2,
    "number": 91,
    "type": "single",
    "question": "<p>Your Claude application's prompt was written months ago and has not been updated. The team has discovered through evals that the prompt produces good results on common cases but underperforms on a specific category of inputs that has grown in volume. How would you respond?<\/p>",
    "options": {
      "A": "<p>Iterate on the prompt to address the underperforming category, validate the change with evals, and continue refining as needed.<\/p>",
      "B": "<p>Tell users to avoid the underperforming category by adding warnings in the application's user interface about handled inputs.<\/p>",
      "C": "<p>Replace the prompt with a new one aligned to the underperforming category, treating any common-case performance change as a known tradeoff.<\/p>",
      "D": "<p>Add the underperforming category to a separate Claude application with its own prompt so the original prompt does not change.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<b>Đáp án đúng là A: Iterate on the prompt to address the underperforming category, validate the change with evals, and continue refining as needed.<\/b><br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án A (Đúng):<\/b> Quy trình chuẩn trong phát triển ứng dụng AI (Prompt Engineering dựa trên Evals) là tinh chỉnh prompt cải thiện trường hợp bị kém, sau đó chạy bộ kiểm thử (evals) để đảm bảo thay đổi này sửa được trường hợp lỗi mà không gây ảnh hưởng tiêu cực (regression) đến các trường hợp thông thường (common cases).<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Đưa ra cảnh báo cho người dùng tránh nhập dữ liệu là cách xử lý né tránh, không giải quyết vấn đề cốt lõi của ứng dụng.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Thay thế toàn bộ prompt và chấp nhận đánh đổi hiệu năng của các trường hợp thông thường là phương pháp thiếu căn cứ, gây hư hỏng trải nghiệm người dùng hiện tại.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Tách ra một ứng dụng Claude riêng biệt chỉ để xử lý một nhóm đầu vào là phương án làm phức tạp hóa kiến trúc ứng dụng một cách không cần thiết.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-092",
    "set": 2,
    "number": 92,
    "type": "single",
    "question": "<p>You are setting up a CI/CD pipeline for a new Claude application. The pipeline needs to run automated checks on every pull request before code can be merged. The CI/CD checks would include...<\/p>",
    "options": {
      "A": "<p>Automated tests of the Claude integration, linting, and any other standard quality gates the team applies to its other services.<\/p>",
      "B": "<p>A full end-to-end production deployment on every pull request to catch all possible issues before any code is merged into the main branch.<\/p>",
      "C": "<p>Automated tests of the Claude integration only, with linting handled separately during local development on each developer's machine.<\/p>",
      "D": "<p>Automated linting and security scanning, with Claude integration testing handled manually during pre- release verification by a designated reviewer.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p><b>Đáp án đúng là A: Automated tests of the Claude integration, linting, and any other standard quality gates the team applies to its other services.<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Đáp án A (Đúng):<\/b> Quy trình CI/CD tiêu chuẩn cho các ứng dụng tích hợp AI/LLM (như Claude) cần kết hợp đầy đủ giữa kiểm thử tự động phần tích hợp API, kiểm tra cú pháp/định dạng code (linting), kiểm tra bảo mật và các tiêu chuẩn chất lượng (quality gates) chung của dự án trước khi hợp nhất (merge) code.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Triển khai toàn bộ lên môi trường production cho mọi Pull Request là rất rủi ro, gây lãng phí tài nguyên và không đúng thực hành CI/CD tiêu chuẩn.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Chỉ kiểm thử tích hợp Claude mà bỏ qua linting trong CI/CD sẽ làm giảm tính đồng nhất và chất lượng mã nguồn chung của cả đội ngũ.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Việc kiểm thử tích hợp với Claude theo cách thủ công (manual) làm chậm tiến độ và giảm tính tự động hóa của quy trình CI/CD.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-093",
    "set": 2,
    "number": 93,
    "type": "single",
    "question": "<p>A teammate has asked you to explain why your Claude agent's tools include detailed descriptions in the tool definition, even when the tool name is already descriptive. The teammate suggests removing the descriptions to simplify the tool definitions. How would you respond?<\/p>",
    "options": {
      "A": "<p>Suggest replacing the descriptions with example calls embedded in the tool definition, treating example calls as a complete substitute for the prose description.<\/p>",
      "B": "<p>Agree with the teammate because tool names are sufficient for the model to choose the right tool on every request the agent handles.<\/p>",
      "C": "<p>Explain that the model uses the tool description to decide when to call the tool, and descriptions disambiguate cases where the tool name is not enough.<\/p>",
      "D": "<p>Suggest moving the descriptions out of the tool definition and into a separate documentation file the team maintains so the tool definitions stay short and the descriptions remain available.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<b>Đáp án đúng là C: Explain that the model uses the tool description to decide when to call the tool, and descriptions disambiguate cases where the tool name is not enough.<\/b><br/><b>Dịch câu hỏi:<\/b>Một đồng nghiệp bảo bạn giải thích lý do tại sao các công cụ (tools) của Claude agent lại bao gồm mô tả chi tiết trong phần định nghĩa tool (<code>tool definition<\/code>), ngay cả khi tên tool đã mang tính mô tả rõ ràng. Đồng nghiệp đó đề xuất xóa phần mô tả đi để làm gọn định nghĩa tool. Bạn sẽ phản hồi như thế nào?<br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án C (Đúng):<\/b> Mô hình ngôn ngữ (Claude) dựa rất nhiều vào phần mô tả (<code>description<\/code>) của tool để hiểu mục đích, ngữ cảnh sử dụng, định dạng tham số và phân biệt giữa các công cụ tương tự nhau. Tên tool chỉ cung cấp thông tin ngắn gọn, không đủ để mô hình đưa ra quyết định gọi tool chính xác trong các tình huống phức tạp.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Các ví dụ gọi mẫu (example calls) có thể hỗ trợ nhưng không thể thay thế hoàn toàn cho văn bản mô tả chức năng của tool.<\/p><\/li><li><p><b>Đáp án B (Sai):<\/b> Tên tool ngắn gọn hoàn toàn không đủ để đảm bảo mô hình chọn đúng công cụ trong mọi yêu cầu.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Nếu chuyển phần mô tả ra một tệp tài liệu riêng ngoài API definition, mô hình sẽ không nhận được thông tin này khi xử lý request, dẫn đến việc không biết cách dùng tool.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-094",
    "set": 2,
    "number": 94,
    "type": "single",
    "question": "<p>The team is debating whether to build a new capability as a custom tool or to use an existing built-in tool that nearly covers the use case but lacks one specific feature. How would you decide?<\/p>",
    "options": {
      "A": "<p>Evaluate whether the missing feature can be addressed by extending the built-in tool or warrants a custom tool, then choose accordingly.<\/p>",
      "B": "<p>Identify whether the team has previously built similar custom tools and use those precedents to determine which approach is more consistent with the existing codebase.<\/p>",
      "C": "<p>Examine the custom tool option by scoping the implementation effort and determining whether the additional flexibility justifies the development and maintenance cost.<\/p>",
      "D": "<p>Review the built-in tool's documentation and assess whether its existing capabilities are sufficient to cover the use case without any modification or extension.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p><b>Đáp án chính xác:<\/b> <b>A<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Bản chất vấn đề (A):<\/b> Khi một công cụ built-in đã đáp ứng gần đủ yêu cầu (nearly covers the use case), bước quyết định chuẩn mực là xem xét khả năng mở rộng/tùy biến tính năng còn thiếu đó từ công cụ built-in (ví dụ: bọc thêm logic, bổ sung wrapper/extension) trước khi quyết định viết hẳn một custom tool từ đầu. Điều này giúp tối ưu hóa công sức phát triển mà vẫn đảm bảo đủ tính năng.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>B:<\/b> Dựa vào tiền lệ quá khứ không giải quyết trực tiếp bài toán kỹ thuật hiện tại của công cụ.<\/p><\/li><li><p><b>C:<\/b> Chỉ tập trung đánh giá phương án custom tool mà bỏ qua việc xem xét khả năng mở rộng công cụ tích hợp sẵn.<\/p><\/li><li><p><b>D:<\/b> Đề bài đã khẳng định công cụ built-in <i>đang thiếu một tính năng cụ thể<\/i>, nên việc đánh giá xem nó có đủ mà không cần sửa đổi gì là không thực tế với đề bài.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCDV-F-095",
    "set": 2,
    "number": 95,
    "type": "single",
    "question": "<p>Your team uses several plugins across multiple Claude applications, and a recent plugin update introduced a regression. The team had not been tracking plugin versions, so the team cannot easily identify which version was previously working. How would you address this?<\/p>",
    "options": {
      "A": "<p>Stop using all plugins until the team can rebuild equivalent functionality directly into the application code, treating plugin avoidance as a way to remove version-related risk.<\/p>",
      "B": "<p>Add explicit plugin version tracking to the project's configuration so the team can identify, pin, and upgrade plugin versions deliberately.<\/p>",
      "C": "<p>Treat plugins as untrackable third-party code and rely on plugin authors to communicate breaking changes when they happen, with no internal version tracking.<\/p>",
      "D": "<p>Upgrade every plugin to the latest version on a regular cadence to keep version drift small, on the grounds that drift contributes to regression risk.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<b>Đáp án đúng là B: Add explicit plugin version tracking to the project's configuration so the team can identify, pin, and upgrade plugin versions deliberately.<\/b><br/><b>Giải thích:<\/b><br/><ul><li><p><b>Đáp án B (Đúng):<\/b> Bổ sung cơ chế theo dõi phiên bản plugin rõ ràng vào tệp cấu hình của dự án giúp đội ngũ có thể cố định (pin) các phiên bản hoạt động ổn định, dễ dàng phát hiện nguyên nhân khi có lỗi phát sinh và nâng cấp một cách có chủ đích (deliberately) thay vì phụ thuộc vào tự động cập nhật.<\/p><\/li><li><p><b>Đáp án A (Sai):<\/b> Ngừng sử dụng toàn bộ plugin và tự viết lại tính năng gây lãng phí thời gian, công sức và làm mất đi lợi ích tái sử dụng của hệ sinh thái plugin.<\/p><\/li><li><p><b>Đáp án C (Sai):<\/b> Phụ thuộc hoàn toàn vào tác giả plugin mà không tự quản lý phiên bản nội bộ là cực kỳ rủi ro đối với quy trình phát triển phần mềm chuyên nghiệp.<\/p><\/li><li><p><b>Đáp án D (Sai):<\/b> Tự động nâng cấp tất cả plugin lên bản mới nhất thường xuyên không giải quyết được gốc rễ vấn đề, thậm chí còn dễ làm tăng nguy cơ gặp lỗi do breaking changes từ các bản cập nhật mới.<\/p><\/li><\/ul>"
  }
];
