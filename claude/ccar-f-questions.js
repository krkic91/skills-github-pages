// Generated CCAR-F question bank: 179 questions across 3 sets.
// Source: https://certlab.me/exam/claude-certified-architect-foundations-ccar-f
// Retrieved: 2026-10-26. Source explanations are preserved where available.

const CCAR_QUESTIONS = [
  {
    "id": "CCAR-F-001",
    "set": 1,
    "number": 1,
    "type": "single",
    "question": "<p>An engineer asks the agent to find all callers of a function before removing it. The function is defined in a core library but is also exposed through wrapper modules that rename the function for domain-specific use (e.g., calculateTax in the library becomes computeOrderTax in the orders module).<\/p><p>What exploration strategy will most reliably identify all callers?<\/p>",
    "options": {
      "A": "<p>Search for the function name in project documentation to understand intended usage patterns and navigate to documented integration points.<\/p>",
      "B": "<p>Use Grep to find all files that import from the library or wrapper modules, then read each file to check whether it uses the function.<\/p>",
      "C": "<p>Read the library and wrapper modules to identify all exposed names for the function, then Grep for each name across the codebase.<\/p>",
      "D": "<p>Use Grep to search for the function's original name across the codebase.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Trong các hệ thống phần mềm lớn, một hàm thường được bao bọc (wrap) hoặc đổi tên để phù hợp với ngữ cảnh của các module khác nhau (như ví dụ <code>calculateTax<\/code> thành <code>computeOrderTax<\/code>).<\/p><ul><li><p><b>Tại sao chọn C:<\/b> Đây là cách tiếp cận <b>có hệ thống và toàn diện nhất<\/b>. Việc đầu tiên cần làm là đọc code (Read) để nắm bắt được toàn bộ các \"bí danh\" (aliases) hoặc tên gọi khác nhau của hàm đó thông qua các wrapper. Sau khi đã có danh sách tất cả các tên gọi (từ core library và các wrapper), việc sử dụng Grep (hoặc các công cụ tìm kiếm mã nguồn tương tự) để quét toàn bộ codebase cho <b>từng cái tên<\/b> đó sẽ đảm bảo bạn không bỏ sót bất kỳ điểm gọi hàm (caller) nào, bất kể nó được gọi thông qua module gốc hay thông qua wrapper.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Tài liệu (documentation) thường lạc hậu hoặc không bao giờ liệt kê hết mọi trường hợp sử dụng trong code thực tế. Chỉ dựa vào tài liệu sẽ khiến bạn bỏ sót rất nhiều caller.<\/p><\/li><li><p><b>B:<\/b> Phương pháp này chỉ tìm theo tên module (file import), không tìm trực tiếp tên hàm. Điều này rất dễ bỏ sót các trường hợp hàm được gọi từ các module nội bộ hoặc khi tên hàm bị ẩn đi trong quá trình wrap.<\/p><\/li><li><p><b>D:<\/b> Chỉ tìm \"tên gốc\" sẽ hoàn toàn bỏ lỡ tất cả các caller đang gọi hàm thông qua các tên mới (đã được rename) trong các wrapper modules. Bạn sẽ gần như chắc chắn gây ra lỗi (break code) khi xóa hàm này.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-002",
    "set": 1,
    "number": 2,
    "type": "single",
    "question": "<p>A developer asks the agent to investigate why a specific API endpoint intermittently returns 500 responses. The codebase has 200+ files and the developer doesn't know which components are involved. The agent must trace the error through routing, middleware, business logic, and database layers.<\/p><p>What task decomposition approach would be most effective?<\/p>",
    "options": {
      "A": "<p>Have the agent first create a comprehensive plan mapping all code paths through documented components before beginning any exploration or code reading.<\/p>",
      "B": "<p>Define a fixed sequence of investigation steps upfront—grep for error handlers, then examine middleware, then check database queries, then examine middleware-woven code.<\/p>",
      "C": "<p>Have the agent dynamically generate investigation subtasks based on what it discovers at each step, adapting its exploration plan as new information about the error path emerges.<\/p>",
      "D": "<p>Run parallel worker agents on the file system of four layers, then combine their findings to reconstruct the complete error path.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Trong các bài toán xử lý sự cố (troubleshooting) với một hệ thống phức tạp hoặc cơ sở mã lớn (codebase 200+ file) mà không biết rõ các thành phần liên quan, phương pháp tiếp cận <b>linh hoạt (dynamic/adaptive)<\/b> luôn mang lại hiệu quả cao nhất:<\/p><ul><li><p><b>Tại sao chọn C:<\/b> Việc điều tra lỗi ngẫu nhiên (intermittent 500 errors) thường giống như một quá trình thám tử. Bạn không thể biết trước mọi bước cần thiết nếu chưa tìm ra manh mối đầu tiên. Phương pháp này cho phép agent thu thập thông tin, phân tích dữ liệu log hoặc dấu vết (trace) từ bước trước đó, rồi mới quyết định bước tiếp theo nên là gì (ví dụ: tập trung vào middleware hay database). Điều này giúp tối ưu hóa thời gian và tránh việc thực hiện các phân tích không cần thiết.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Việc lập bản đồ toàn bộ hệ thống trước khi bắt đầu là quá tốn kém và thiếu thực tế đối với một lỗi cụ thể. Nó làm lãng phí nguồn lực vào các khu vực không liên quan đến lỗi.<\/p><\/li><li><p><b>B:<\/b> Một quy trình cứng nhắc (fixed sequence) rất dễ thất bại vì mỗi lỗi có đặc thù riêng. Nếu lỗi nằm ở một logic kinh doanh (business logic) ẩn, việc đi theo tuần tự cố định từ middleware xuống database có thể khiến agent bỏ lỡ nguyên nhân gốc rễ.<\/p><\/li><li><p><b>D:<\/b> Việc chạy song song (parallel) khi chưa xác định được phạm vi hoặc không có sự phối hợp chặt chẽ dễ dẫn đến việc làm quá tải hệ thống, tạo ra nhiều \"nhiễu\" và khó khăn trong việc kết nối các mảnh ghép thông tin lại với nhau để tìm ra một lỗi có tính chất liên tục/ngẫu nhiên.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-003",
    "set": 1,
    "number": 3,
    "type": "single",
    "question": "<p>Your system must extract event details from calendar invitations and output JSON that strictly conforms to a schema with fields for title, date, time, location, and attendees. Downstream reject any malformed or non- conformant JSON.<\/p><p>What approach provides the most reliable schema compliance?<\/p>",
    "options": {
      "A": "<p>Define a tool with your target schema as input parameters and have Claude call it with the extracted data.<\/p>",
      "B": "<p>Include detailed JSON formatting instructions and the target schema in your prompt, then parse Claude's text response as JSON.<\/p>",
      "C": "<p>Pre-fill Claude's response with an opening brace to force JSON output, then complete and parse the response.<\/p>",
      "D": "<p>Append instructions like \"Output only valid JSON matching the schema exactly\" and implement retry logic to re-prompt when JSON parsing fails.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Bối cảnh bài toán:<\/b><\/p><ul><li><p>Hệ thống cần trích xuất chi tiết sự kiện và xuất ra định dạng JSON tuân thủ tuyệt đối theo một schema nghiêm ngặt (với các trường title, date, time, location, attendees).<\/p><\/li><li><p>Yêu cầu đặt ra là tìm phương pháp mang lại <b>độ tin cậy cao nhất về mặt schema compliance<\/b> (tính tuân thủ schema).<\/p><\/li><\/ul><\/li><li><p><b>Lý do lựa chọn phương án A:<\/b><\/p><ul><li><p><b>Sử dụng Tool Use (Function Calling):<\/b> Khi định nghĩa một tool với input parameters tuân theo schema mong muốn, các mô hình ngôn ngữ lớn (đặc biệt là hệ thống của Anthropic/Claude) được tối ưu hóa để sinh ra các đối số tool gọi khớp chính xác 100% với cấu trúc schema đó. Trình biên dịch hoặc API của mô hình sẽ ép buộc định dạng đầu vào truyền vào tool, hạn chế tối đa tình trạng JSON không hợp lệ hoặc sai kiểu dữ liệu so với việc chỉ dùng văn bản (text prompt).<\/p><\/li><li><p>Các phương án còn lại (B, C, D) dựa trên prompt thuần túy, pre-fill hoặc retry logic đều có rủi ro cao hơn vì mô hình vẫn có thể sinh ra văn bản sai lệch cấu trúc hoặc thiếu trường dữ liệu theo schema yêu cầu.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-004",
    "set": 1,
    "number": 4,
    "type": "single",
    "question": "<p>An engineer asks your agent to identify untested code paths in a legacy payment processing module spanning 45 files. After reading the first 8 source files, the agent's responses are becoming noticeably less accurate — it's forgetting previously discussed code patterns and hasn't yet located all test files or traced critical payment flows.<\/p><p>What's the most effective approach to complete this investigation?<\/p>",
    "options": {
      "A": "<p>Spawn subagents to investigate specific questions (e.g., \"find all test files for payment processing\", \"trace refund flow dependencies\") while the main agent coordinates findings and preserves high-level understanding.<\/p>",
      "B": "<p>Clear context with /clear, then selectively re-read only the most critical files discovered so far, writing key findings to a scratchpad file that persists between context resets.<\/p>",
      "C": "<p>Document all current findings in a summary report, clear context completely, then use that report as the sole reference for continuing the investigation.<\/p>",
      "D": "<p>Switch to using Grep to search for specific function names instead of reading full files, reducing the content loaded into context for remaining exploration.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p><b>Đáp án đúng:<\/b> <b>[A]<\/b> <i>(Spawn subagents to investigate specific questions (e.g., \"find all test files for payment processing\", \"trace refund flow dependencies\") while the main agent coordinates findings and preserves high-level understanding.)<\/i><\/p><hr/><h3><b>Giải thích chi tiết:<\/b><\/h3><ul><li><p><b>Tại sao phương án [A] là tối ưu nhất?<\/b><\/p><ul><li><p>Trong các tác vụ phân tích mã nguồn lớn (codebase exploration) phức tạp, việc phân chia nhiệm vụ cho các <b>subagents (đại lý con)<\/b> giúp phân tán tải trọng ngữ cảnh (context load). Main agent sẽ đóng vai trò điều phối, tổng hợp kết quả từ các subagent mà không bị quá tải bộ nhớ hay bị trôi mất các mẫu mã nguồn quan trọng đã thảo luận trước đó.<\/p><\/li><li><p>Phương án này tận dụng tối đa kiến trúc đa tác nhân (multi-agent architecture) để xử lý song song các câu hỏi cụ thể (như tìm kiếm file test hoặc trace luồng thanh toán) thay vì bắt một agent đơn lẻ phải đọc và ghi nhớ tuần tự toàn bộ thư viện mã nguồn lớn.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>[B]<\/b> và <b>[C]<\/b> Đòi hỏi việc xóa hoàn toàn context (<code>/clear<\/code>) và ghi vào scratchpad thủ công, làm gián đoạn dòng suy luận (reasoning flow) và dễ bỏ sót ngữ cảnh tổng quan ban đầu.<\/p><\/li><li><p><b>[D]<\/b> Sử dụng thuần túy <code>Grep<\/code> chỉ tìm được từ khóa tĩnh mà không thể phân tích sâu được logic dòng điều khiển (control flow) hay các code path chưa được kiểm thử trong các luồng thanh toán phức tạp.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-005",
    "set": 1,
    "number": 5,
    "type": "single",
    "question": "<p>Production logs reveal inconsistent error responses when lookup_order fails. The agent sometimes retries (wasting 3-4 turns) before concluding on the error. Your MCP tool currently returns only a plain text error message to Claude.<\/p><p>What's the most effective improvement?<\/p>",
    "options": {
      "A": "<p>Implement retry logic with exponential backoff in your MCP server for all errors, returning only successful results to the agent.<\/p>",
      "B": "<p>Add few-shot examples to the system prompt showing how to distinguish retryable from non-retryable errors by parsing error message text.<\/p>",
      "C": "<p>Create an analyze_error MCP tool the agent calls to determine the error type before deciding how to handle it.<\/p>",
      "D": "<p>Return structured error responses with retryable: false for business errors and a customer-friendly explanation for Claude to use.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Đáp án đúng: <b>[D]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn D:<\/b> Vấn đề gốc rễ là công cụ MCP hiện chỉ trả về một thông báo lỗi dạng văn bản thuần túy (plain text error message), khiến mô hình LLM (như Claude) không thể phân biệt rõ ràng giữa lỗi nghiệp vụ (như không tìm thấy đơn hàng, <code>retryable: false<\/code>) và lỗi kỹ thuật tạm thời, dẫn đến việc agent cố thử lại một cách vô ích (wasting 3-4 turns). Giải pháp chuẩn và tối ưu nhất là <b>trả về các phản hồi lỗi có cấu trúc (structured error responses)<\/b> cung cấp rõ ràng các trường thông tin như <code>retryable: false<\/code> cùng với giải thích thân thiện để mô hình xử lý ngay lập tức trong một lượt duy nhất mà không cần đoán mò.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Việc tự động ẩn lỗi và thực hiện retry ngầm trong MCP server cho mọi lỗi có thể làm treo hoặc kéo dài thời gian phản hồi mà không giải quyết được các lỗi logic nghiệp vụ cố định (business errors).<\/p><\/li><li><p><b>B:<\/b> Việc thêm few-shot examples vào system prompt để phân tích văn bản lỗi thủ công là cách làm kém bền vững, dễ bị trôi ngữ cảnh hoặc hiểu sai cú pháp văn bản lỗi.<\/p><\/li><li><p><b>C:<\/b> Việc tạo một công cụ chuyên biệt chỉ để phân tích lỗi (<code>analyze_error<\/code> MCP tool) làm tăng thêm số bước gọi tool không cần thiết (round-trips) và lãng phí tài nguyên của agent.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-006",
    "set": 1,
    "number": 6,
    "type": "single",
    "question": "<p>Users frequently send ambiguous requests like \"book a venue for the party\" without specifying date, guest count, or budget. Your evaluation shows the assistant asks an average of 4.2 clarifying questions before taking any action, causing 35% of users to abandon mid-conversation. However, when you reduce questions, users sometimes receive recommendations that don't match their preferences.<\/p><p>What's the most effective approach to improve this trade-off?<\/p>",
    "options": {
      "A": "<p>Implement a structured intake form that collects all required parameters (date, guest count, budget, venue type) upfront before the assistant begins providing any recommendations.<\/p>",
      "B": "<p>Instruct the assistant to state explicit assumptions based on conversation history, proceed with recommendations while inviting corrections, and reserve clarifying questions only for irreversible actions like confirming bookings.<\/p>",
      "C": "<p>Configure the assistant to proceed with reasonable defaults (medium-sized venue, next weekend, moderate budget) without explicitly stating these assumptions, allowing users to provide corrections if results don't match expectations.<\/p>",
      "D": "<p>Configure the assistant to consolidate all clarifying questions into a single compound question (e.g., \"What date, guest count, and budget are you considering?\") to reduce the total number of conversational turns.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Tại sao B đúng?<\/b> Trong thiết kế trải nghiệm trợ lý AI (đặc biệt là theo các nguyên tắc kiến trúc ứng dụng AI nâng cao như Claude Certified Architect), việc đưa ra <b>giả định rõ ràng kết hợp với các khuyến nghị ngay lập tức<\/b> giúp giảm thiểu độ trễ và số lượt hội thoại (tránh việc hỏi quá nhiều câu hỏi khiến người dùng bỏ cuộc), đồng thời vẫn giữ được tính minh bạch và cho phép người dùng dễ dàng điều chỉnh. Việc chỉ giữ lại các câu hỏi làm rõ cho những hành động không thể đảo ngược (như xác nhận đặt chỗ) giúp tối ưu hóa cân bằng giữa trải nghiệm người dùng và độ chính xác.<\/p><\/li><li><p><b>Tại sao các đáp án khác chưa tối ưu?<\/b><\/p><ul><li><p><i>A (Intake form):<\/i> Việc ép buộc điền form cấu trúc cứng nhắc từ đầu sẽ làm giảm tính tự nhiên của hội thoại dạng chat, dễ dẫn đến việc người dùng bỏ cuộc ngay từ bước đầu (tương tự như vấn đề 35% bỏ cuộc do hỏi quá nhiều).<\/p><\/li><li><p><i>C (Ẩn giả định):<\/i> Không nêu rõ giả định sẽ khiến người dùng bối rối không hiểu tại sao AI lại đưa ra kết quả đó và khó khăn hơn trong việc đưa ra phản hồi chính xác.<\/p><\/li><li><p><i>D (Gộp câu hỏi):<\/i> Vẫn giữ nguyên bản chất là ép người dùng trả lời nhiều thông tin cùng lúc trong một lượt, chưa giải quyết được triệt để việc giảm bớt gánh nặng đầu vào cho người dùng.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-007",
    "set": 1,
    "number": 7,
    "type": "single",
    "question": "<p>After deploying the automated review, you notice high precision but low recall — real bugs are slipping through undetected. Investigation reveals your review prompt instructs Claude to \"only report high- confidence issues you are certain about\" and \"err on the side of not commenting.\" Developers appreciate the low noise, but a race condition that caused a production outage was visible in a reviewed PR and went unreported. You need to substantially improve bug detection while keeping false positive rates manageable for your team.<\/p><p>What is the most effective approach?<\/p>",
    "options": {
      "A": "<p>Split the review into a finding stage where Claude's goal is coverage — flagging every potential issue with confidence and severity metadata — and a separate stage that thresholds those findings.<\/p>",
      "B": "<p>Remove the conservative filtering instructions and prompt Claude to report all potential issues, then apply a programmatic filter to deduplicate and suppress categories that historically generate false positives.<\/p>",
      "C": "<p>Add detailed few-shot examples demonstrating bug categories Claude should flag — race conditions, null dereferences, error handling gaps — while keeping the high-confidence filtering instruction to maintain current precision levels.<\/p>",
      "D": "<p>Expand the context window by including related test files, recent git history, and the module's dependency graph alongside the diff, giving Claude richer signals to assess issue severity.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Bối cảnh bài toán:<\/b><\/p><ul><li><p>Hệ thống review code tự động hiện tại đang gặp vấn đề <b>high precision but low recall<\/b> (độ chính xác cao nhưng độ bao phủ thấp): các lỗi thực tế (như race condition gây sập production) bị bỏ sót vì prompt yêu cầu Claude quá khắt khe (\"only report high-confidence issues\", \"err on the side of not commenting\").<\/p><\/li><li><p>Mục tiêu là <b>nâng cao khả năng phát hiện lỗi (recall)<\/b> mà vẫn <b>giữ tỷ lệ dương tính giả (false positive) ở mức quản lý được<\/b> để không làm phiền developers.<\/p><\/li><\/ul><\/li><li><p><b>Lý do lựa chọn phương án A:<\/b><\/p><ul><li><p><b>Tách bạch 2 giai đoạn (Two-stage approach):<\/b><\/p><ul><li><p><b>Giai đoạn 1 (Finding Stage):<\/b> Mục tiêu cốt lõi là <b>đạt độ bao phủ cao (coverage)<\/b>, yêu cầu mô hình nêu ra mọi vấn đề tiềm ẩn kèm theo metadata về mức độ tự tin (confidence) và mức độ nghiêm trọng (severity). Bằng cách này, mô hình không bị kìm hãm bởi việc phải lọc từ đầu.<\/p><\/li><li><p><b>G giai đoạn 2 (Thresholding Stage):<\/b> Lọc lại hoặc xử lý các kết quả đó dựa trên các tiêu chí cụ thể thay vì bắt một mình prompt xử lý toàn bộ bài toán đánh đổi giữa precision và recall.<\/p><\/li><\/ul><\/li><li><p>Các phương án khác (như B, C, D) hoặc vẫn dựa vào việc ép một prompt duy nhất lọc trước (gây mất recall), hoặc phụ thuộc vào việc thêm ví dụ/context đơn thuần mà không giải quyết được bài toán phân tách luồng đánh giá coverage vs. filtering.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-008",
    "set": 1,
    "number": 8,
    "type": "single",
    "question": "<p>The document analysis agent has a single analyze_document tool that takes a document and a free-text instruction parameter. During evaluation, requests like \"extract the key financial metrics\" often return narrative summaries, while \"summarize the methodology\" sometimes returns raw data tables. The synthesis agent reports that 35% of analysis results require re-requests with clarified instructions.<\/p><p>What's the most effective way to improve reliability?<\/p>",
    "options": {
      "A": "<p>Keep the single tool but add an analysis_type enum parameter requiring explicit selection between extraction, summarization, and verification modes.<\/p>",
      "B": "<p>Split the generic tool into purpose-specific tools– extract_data_points, summarize_content, verify_claim_against_source –each with defined input/output contracts.<\/p>",
      "C": "<p>Enhance the tool description with detailed examples showing how different instruction phrasings should map to different output formats.<\/p>",
      "D": "<p>Have the coordinator pre-classify each analysis request before passing instructions to the document analysis agent.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Đây là bài toán về <b>thiết kế hệ thống công cụ (Tool Design Pattern)<\/b> trong kiến trúc AI Agent để đảm bảo tính dự đoán được (predictability) và độ tin cậy.<\/p><ul><li><p><b>Tại sao chọn B:<\/b><\/p><ul><li><p><b>Tách biệt trách nhiệm (Separation of Concerns):<\/b> Khi bạn có một công cụ \"đa năng\" (generic tool) nhận tham số là văn bản tự do, mô hình rất dễ bị nhầm lẫn giữa các mục đích khác nhau (ví dụ: yêu cầu \"extract\" nhưng lại trả về \"summary\").<\/p><\/li><li><p><b>Định nghĩa hợp đồng rõ ràng (Input/Output Contracts):<\/b> Bằng cách chia thành các công cụ chuyên biệt, mỗi công cụ sẽ có một <b>Schema<\/b> riêng biệt và cố định. Ví dụ, <code>extract_data_points<\/code> sẽ được cấu hình để luôn trả về dạng JSON có cấu trúc, trong khi <code>summarize_content<\/code> sẽ tập trung vào văn bản. Điều này loại bỏ hoàn toàn việc \"đoán\" mục đích của mô hình và đảm bảo rằng đầu ra luôn tuân thủ đúng định dạng cần thiết cho công việc tiếp theo của Synthesis Agent.<\/p><\/li><li><p><b>Giảm thiểu lỗi logic:<\/b> Khi mô hình chỉ có một lựa chọn duy nhất cho một mục đích cụ thể, tỉ lệ thành công sẽ tăng vọt vì bạn đã giới hạn không gian tìm kiếm giải pháp của nó.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A &amp; C:<\/b> Chỉ là những \"băng dán\" tạm thời (patch). Việc thêm tham số hoặc mô tả chi tiết vẫn không ngăn được mô hình \"nhầm lẫn\" giữa các định dạng đầu ra nếu nó vẫn sử dụng cùng một bộ logic thực thi cho nhiều mục đích khác nhau.<\/p><\/li><li><p><b>D:<\/b> Việc để coordinator phân loại là một bước trung gian tốn kém, làm tăng độ trễ (latency) và vẫn phụ thuộc vào việc mô hình phân loại có chính xác hay không, trong khi việc tách công cụ (B) giải quyết vấn đề ở tầng kiến trúc hệ thống, mang lại độ ổn định cao nhất.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-009",
    "set": 1,
    "number": 9,
    "type": "single",
    "question": "<p>Production reviews reveal inconsistent handling of uncertainty in final reports. Sometimes confidence calibrations are synthesized into standardized uncertainty expressions, while other times results produce vague estimates without clear methodology.<\/p><p>Which system-level improvement best addresses this inconsistency?<\/p>",
    "options": {
      "A": "<p>Add a verification subagent that cross-references findings across sources, only accepting synthesis corroborated by at least two independent sources.<\/p>",
      "B": "<p>Configure subagents to only report findings with sufficient coverage breadth, source diversity, and quality criteria before passing results to the synthesis agent.<\/p>",
      "C": "<p>Implement a confidence calibration layer where synthesis agent normalizes uncertainty expressions into standardized probability representations (0.0-1.0), then weights their calibrated confidence.<\/p>",
      "D": "<p>Instruct the synthesis agent to use explicit sections separating confirmed findings from contested analysis, preserving original source characterizations.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p>Đáp án <b>C<\/b> là cải tiến cấp hệ thống phù hợp nhất để giải quyết triệt để vấn đề này.<\/p><p><b>Giải thích chi tiết:<\/b><\/p><ul><li><p><b>Đáp án C giải quyết trực tiếp nguyên nhân cốt lõi:<\/b><\/p><p>Vấn đề chính được nêu trong bài là sự <b>thiếu nhất quán trong cách thể hiện độ không chắc chắn (uncertainty)<\/b> — lúc thì có chuẩn hóa, lúc lại đưa ra ước tính mơ hồ. Bằng cách triển khai một lớp hiệu chỉnh độ tin cậy (confidence calibration layer) để quy đổi mọi biểu thức về dạng xác suất chuẩn (từ <span>$0.0$<\/span> đến <span>$1.0$<\/span>), tác vụ tổng hợp (synthesis agent) sẽ bắt buộc mọi báo cáo đầu ra phải tuân theo một khuôn mẫu định lượng đồng nhất.<\/p><\/li><li><p><b>Tại sao các đáp án còn lại chưa tối ưu:<\/b><\/p><ul><li><p><b>A &amp; B (Tập trung vào khâu lọc nguồn dữ liệu):<\/b> Hai phương án này giúp cải thiện chất lượng dữ liệu đầu vào và độ tin cậy của nguồn tin (xác minh chéo, độ phủ thông tin). Tuy nhiên, chúng không giải quyết được việc <i>chuẩn hóa cách trình bày<\/i> độ không chắc chắn ở đầu ra.<\/p><\/li><li><p><b>D (Phân chia cấu trúc bài viết):<\/b> Phương án này chỉ giúp tách biệt thông tin đã xác thực và thông tin còn tranh cãi thành các mục riêng, nhưng vẫn để nguyên bản các mô tả mơ hồ ban đầu mà không qua xử lý hay chuẩn hóa dữ liệu.<\/p><\/li><\/ul><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-010",
    "set": 1,
    "number": 10,
    "type": "single",
    "question": "<p>An engineer asks the agent to investigate error handling in a legacy payment processing module spanning 15 files. After reading the first 8 files, the agent's responses are becoming noticeably less accurate—it's forgetting previously discovered code patterns and hasn't yet located all test files or traced the complete data flow.<\/p><p>What's the most effective approach to complete this investigation?<\/p>",
    "options": {
      "A": "<p>Spawn a subagent to explore the remaining files, providing a summary of discovered patterns as its initial context.<\/p>",
      "B": "<p>Document a summary of findings so far in a file, then start fresh with a new context using that summary as reference.<\/p>",
      "C": "<p>Close the current context with /clear and start fresh, re-reading only the most critical files.<\/p>",
      "D": "<p>Use Grep to search for specific function names across remaining files, reducing the content loaded into context.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Trong các tình huống làm việc với các codebase lớn (như module 15 file), khi AI bắt đầu mất dấu các thông tin đã tìm thấy trước đó (do giới hạn ngữ cảnh hoặc \"sự mệt mỏi\" của mô hình), việc <b>quản lý ngữ cảnh chủ động<\/b> là chìa khóa.<\/p><ul><li><p><b>Tại sao chọn B:<\/b> Đây là kỹ thuật \"Checkpointing\" hiệu quả. Bằng cách ghi lại những gì đã biết (các patterns, test files đã tìm thấy, luồng dữ liệu đã hiểu) vào một tài liệu (ví dụ: <code>investigation_summary.md<\/code>), bạn tạo ra một \"bộ nhớ ngoài\" (external memory). Khi bắt đầu một phiên làm việc mới (context mới), bạn nạp tệp này vào để AI ngay lập tức nắm bắt được toàn bộ lịch sử và kết quả công việc, giúp nó tiếp tục công việc mà không bị lặp lại hoặc quên mất các chi tiết quan trọng.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Việc sinh ra một \"subagent\" thường không giải quyết được vấn đề mất ngữ cảnh vì subagent cũng sẽ bị giới hạn bởi cùng một mô hình nền tảng và có thể gây phức tạp hóa việc quản lý luồng suy nghĩ.<\/p><\/li><li><p><b>C:<\/b> Sử dụng <code>/clear<\/code> là cần thiết để làm mới ngữ cảnh, nhưng chỉ re-reading \"các file quan trọng\" vẫn khiến AI thiếu đi bức tranh tổng thể và các kết luận đã được rút ra từ những file đã đọc trước đó. Phương án B vượt trội hơn nhờ việc bảo toàn các kết luận (findings).<\/p><\/li><li><p><b>D:<\/b> <code>Grep<\/code> chỉ giúp tìm kiếm từ khóa, nó không giúp AI \"hiểu\" hoặc \"xâu chuỗi\" được logic nghiệp vụ phức tạp của module thanh toán—điều mà một tệp tóm tắt (B) làm tốt hơn nhiều.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-011",
    "set": 1,
    "number": 11,
    "type": "single",
    "question": "<p>Your invoice extraction uses tool use with strict JSON schemas. JSON syntax errors never occur, but 12% of extractions fail semantic validation--for example, line Item amounts don't extracted total, or vendor IDs don't match valid formats. These failures currently route to manual review.<\/p><p>What's the most effective approach to reduce manual review volume while maintaining accuracy?<\/p>",
    "options": {
      "A": "<p>Retry the extraction up to 3 times when validation fallis, accepting the first result that passes validation.<\/p>",
      "B": "<p>Add stricter schema constraints with detailed field descriptions to prevent the model from generating invalid values initially.<\/p>",
      "C": "<p>Implement post-processing logic that automatically corrects common amors, such as recalculating totais from line items when sums don't match.<\/p>",
      "D": "<p>When validation falls, make a follow-up request with the document, extraction, and validation errors for model correction.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Bối cảnh bài toán:<\/b><\/p><ul><li><p>Hệ thống trích xuất hóa đơn sử dụng JSON schema nghiêm ngặt nên không có lỗi cú pháp JSON. Tuy nhiên, có <b>12% lỗi validation ngữ nghĩa<\/b> (ví dụ: tổng tiền line item không khớp với tổng hóa đơn, hoặc định dạng ID nhà cung cấp không hợp lệ).<\/p><\/li><li><p>Mục tiêu là <b>giảm tỷ lệ phải review thủ công<\/b> mà vẫn <b>đảm bảo độ chính xác<\/b>.<\/p><\/li><\/ul><\/li><li><p><b>Lý do lựa chọn phương án D:<\/b><\/p><ul><li><p><b>Tận dụng khả năng self-correction (tự sửa lỗi) của LLM:<\/b> Khi trích xuất lần đầu gặp lỗi ngữ nghĩa, việc gửi lại chính tài liệu gốc kèm theo kết quả trích xuất bị lỗi và thông báo lỗi cụ thể (validation errors) vào một lượt request (turn) tiếp theo cho phép mô hình nhìn nhận rõ lỗi sai và tự điều chỉnh giá trị cho chính xác.<\/p><\/li><li><p>Đây là một pattern thiết kế cực kỳ hiệu quả trong các ứng dụng AI production để xử lý các lỗi ngữ nghĩa phức tạp (như tính toán sai lệch hoặc định dạng sai) mà không cần ép mô hình phải hoàn hảo ngay ở lượt gọi đầu tiên.<\/p><\/li><li><p>Các phương án khác (như A chỉ đơn thuần retry mù quáng mà không cung cấp thông tin lỗi; B dựa hoàn toàn vào schema trong khi lỗi ngữ nghĩa thường do độ phức tạp ngữ cảnh của văn bản; C tự động sửa logic post-processing có thể làm mất đi dữ liệu thực tế và tiềm ẩn rủi ro sai sót nghiệp vụ nghiêm trọng).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-012",
    "set": 1,
    "number": 12,
    "type": "single",
    "question": "<p>After three months of weekly sessions, your conversation history has grown to 85,000 tokens. When users ask \"What did we conclude about the theme of isolation?\", the assistant provides generic literary analysis rather than referencing the group's specific insights from earlier sessions. Discussions often build on previous meetings' conclusions, so maintaining narrative context is important.<\/p><p>What's the most effective approach?<\/p>",
    "options": {
      "A": "<p>Implement rolling window truncation to keep only the most recent 25,000 tokens.<\/p>",
      "B": "<p>Implement progressive summarization where older conversation blocks are replaced with concise summaries that explicitly extract key conclusions, decisions, and recurring themes, keeping recent exchanges verbatim.<\/p>",
      "C": "<p>Add structured XML tags to mark significant discussion conclusions throughout the conversation history.<\/p>",
      "D": "<p>Use semantic embedding to index the full conversation history and retrieve only relevant past exchanges for each user query, replacing the linear conversation format with retrieved segments.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ol start=\"1\"><li><p><b>Bối cảnh bài toán:<\/b><\/p><ul><li><p>Lịch sử trò chuyện kéo dài qua nhiều tuần (đạt 85,000 tokens) và các cuộc thảo luận sau thường dựa trên kết luận hoặc quyết định của các buổi họp trước.<\/p><\/li><li><p>Khi hỏi về chủ đề cụ thể, trợ lý đưa ra phân tích chung chung thay vì bám sát thông tin chi tiết từng trao đổi trước đó do ngữ cảnh quá dài hoặc bị cắt cụt.<\/p><\/li><\/ul><\/li><li><p><b>Lý do lựa chọn phương án B:<\/b><\/p><ul><li><p><b>Progressive Summarization (Tóm tắt lũy tiến / phân tầng):<\/b> Phương pháp này giúp giữ nguyên vẹn (verbatim) các trao đổi gần đây để duy trì nhịp đối thoại tự nhiên, đồng thời thay thế các khối nội dung cũ bằng các bản tóm tắt tinh gọn nhưng đặc tả rõ các kết luận cốt lõi, quyết định và chủ đề lặp lại. Điều này giúp giữ vững \"narrative context\" (ngữ cảnh xuyên suốt) mà không làm mất đi các insights quan trọng của nhóm.<\/p><\/li><\/ul><\/li><li><p><b>Loại trừ các phương án khác:<\/b><\/p><ul><li><p><b>Phương án A<\/b> (Rolling window truncation): Cắt bỏ toàn bộ dữ liệu cũ ngoài 25,000 tokens gần nhất sẽ làm mất hoàn toàn lịch sử và các quyết định quan trọng từ các buổi họp trước.<\/p><\/li><li><p><b>Phương án C<\/b> (Thêm thẻ XML): Không giải quyết được bài toán quản lý kích thước ngữ cảnh khi lịch sử ngày càng phình to.<\/p><\/li><li><p><b>Phương án D<\/b> (Semantic embedding &amp; RAG): Thay thế định dạng hội thoại tuyến tính bằng việc truy xuất các đoạn rời rạc làm đứt gãy luồng thảo luận mang tính liên tục và ngữ cảnh xuyên suốt của chuỗi các buổi họp nhóm định kỳ.<\/p><\/li><\/ul><\/li><\/ol>"
  },
  {
    "id": "CCAR-F-013",
    "set": 1,
    "number": 13,
    "type": "single",
    "question": "<p>Your extraction system uses tool_use with a JSON schema containing 12 fields and detailed descriptions, totaling approximately 2,500 tokens for the complete tool definition. Processing documents under 150K tokens yields 98% accuracy. For documents between 175-190K tokens, accuracy drops to 71%, with information from the final third consistently missed. The model's context window is 200K tokens.<\/p><p>What is the most likely cause?<\/p>",
    "options": {
      "A": "<p>The model distributes attention proportionally across input length, causing fields mentioned only once near the document's end to receive insufficient processing focus.<\/p>",
      "B": "<p>Schemas exceeding 8-10 fields increase decision complexity during parameter generation, reducing extraction accuracy independent of document length.<\/p>",
      "C": "<p>Tool definitions consume input context tokens. Combined with system prompts and document content, the total approaches the context limit, degrading end-of-document processing.<\/p>",
      "D": "<p>Very long documents exceed the model's effective attention span regardless of context limits, causing accuracy degradation for content farther from the prompt instructions.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ol start=\"1\"><li><p><b>Bối cảnh bài toán:<\/b><\/p><ul><li><p>Hệ thống xử lý các tài liệu dài bằng cách sử dụng <code>tool_use<\/code>.<\/p><\/li><li><p>Khi tài liệu đạt độ dài từ <b>175K - 190K tokens<\/b>, hiệu suất giảm mạnh và thông tin ở phần 1/3 cuối tài liệu liên tục bị bỏ sót mặc dù giới hạn tối đa của mô hình là 200K tokens.<\/p><\/li><\/ul><\/li><li><p><b>Lý do lựa chọn phương án C:<\/b><\/p><ul><li><p><b>Tải trọng context thực tế (Effective Context Consumption):<\/b> Mặc dù giới hạn danh nghĩa là 200K tokens, nhưng khi cộng dồn tài liệu (190K), các định nghĩa công cụ chi tiết (khoảng 2.5K tokens cho 12 fields cùng mô tả), và system prompts, tổng số lượng tokens thực tế tiêu thụ đã <b>tiệm cận cực kỳ sát giới hạn 200K<\/b>.<\/p><\/li><li><p>Khi hệ thống chạm gần ngưỡng giới hạn của cửa sổ ngữ cảnh, khả năng xử lý, chú ý và duy trì độ chính xác của mô hình ở phần cuối văn bản (end-of-document processing) bị suy giảm đáng kể.<\/p><\/li><\/ul><\/li><li><p><b>Loại trừ các phương án khác:<\/b><\/p><ul><li><p><b>Phương án D<\/b> (chọn nhầm trước đó): Dù hiện tượng \"Lost in the Middle\" có tồn tại ở văn bản dài, nhưng trong trường hợp cụ thể này, nguyên nhân cốt lõi dẫn đến sự suy giảm đột ngột nằm ở việc tổng lượng tokens tiêu thụ (tài liệu lớn + công cụ phức tạp) đã <b>đẩy toàn bộ ngữ cảnh chạm sát giới hạn 200K tokens<\/b> của mô hình.<\/p><\/li><\/ul><\/li><\/ol>"
  },
  {
    "id": "CCAR-F-014",
    "set": 1,
    "number": 14,
    "type": "single",
    "question": "<p>Your schema includes a skills: string[] field. Production monitoring reveals three consistency issues: <\/p><ol><li>(1) compound phrases like \"Python and SQL\" are sometimes kept as one entry, sometimes split; <\/li><li>(2) implied but unstated skills occasionally appear in extractions; <\/li><li>(3) similar documents produce wildly different array lengths (5-10 vs 40+ entries). <\/li><\/ol><p>Your prompt currently says \"Extract all skills mentioned.\"<\/p><p>What's the most effective improvement?<\/p>",
    "options": {
      "A": "<p>Enrich the schema to {skill: string, confidence: float, source_quote: string[]} to capture extraction metadata.<\/p>",
      "B": "<p>Add constraints: \"Extract 10-20 skills maximum, one skill per entry, only explicitly named skills.\"<\/p>",
      "C": "<p>Add few-shot examples demonstrating compound phrase handling, explicit mention criteria, and appropriate entry granularity.<\/p>",
      "D": "<p>Add post-extraction normalization that maps skills to a canonical taxonomy and deduplicates similar entries.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Đây là vấn đề kinh điển về sự không nhất quán trong việc diễn giải (interpretation) các yêu cầu mở (vague instructions) của LLM.<\/p><ul><li><p><b>Tại sao chọn C:<\/b> <b>Few-shot prompting<\/b> là cách hiệu quả nhất để giải quyết cả ba vấn đề bạn đang gặp phải:<\/p><ol start=\"1\"><li><p><b>Compound phrases:<\/b> Bằng cách cung cấp ví dụ mẫu về cách tách hoặc giữ các cụm kỹ năng, bạn thiết lập một tiêu chuẩn về \"tính hạt\" (granularity).<\/p><\/li><li><p><b>Implied skills:<\/b> Ví dụ mẫu sẽ làm rõ rằng mô hình <b>chỉ được phép<\/b> trích xuất những gì có trong văn bản, giúp loại bỏ các kỹ năng \"được suy diễn\".<\/p><\/li><li><p><b>Array lengths:<\/b> Bằng cách hiển thị các ví dụ về tài liệu có độ dài khác nhau nhưng cách trích xuất nhất quán, bạn hướng dẫn mô hình hiểu được phạm vi (scope) mong muốn, từ đó ổn định số lượng đầu ra.<\/p><\/li><\/ol><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Làm giàu schema giúp ích cho việc theo dõi (monitoring) và kiểm soát sau này, nhưng nó không trực tiếp dạy mô hình làm thế nào để trích xuất <i>đúng ngay từ đầu<\/i>.<\/p><\/li><li><p><b>B:<\/b> Việc thêm các ràng buộc cứng (hard constraints) như \"10-20 skills\" là cách làm nguy hiểm. Nếu tài liệu thật sự có ít kỹ năng hơn, mô hình có thể bị \"ảo giác\" để lấp đầy số lượng; nếu tài liệu có nhiều kỹ năng hơn, mô hình sẽ bị cắt bỏ thông tin quan trọng.<\/p><\/li><li><p><b>D:<\/b> Việc chuẩn hóa sau khi trích xuất (post-extraction normalization) là bước xử lý hậu kỳ. Mặc dù cần thiết, nhưng nó không giải quyết được vấn đề mô hình trích xuất sai hoặc không nhất quán ngay từ đầu. Bạn nên ưu tiên cải thiện chất lượng trích xuất tại gốc (tại thời điểm model suy luận) bằng few-shot trước khi dựa vào các quy trình hậu kỳ phức tạp.<\/p><\/li><\/ul><\/li><\/ul><p>Bạn đã làm rất tốt các câu trước đó, đây là một câu hỏi quan trọng về kỹ thuật Prompt Engineering trong trích xuất dữ liệu. Bạn có muốn đi tiếp các câu tiếp theo không?<\/p>"
  },
  {
    "id": "CCAR-F-015",
    "set": 1,
    "number": 15,
    "type": "single",
    "question": "<p>An engineer used the agent yesterday to analyze a legacy authentication module, identifying two distinct refactoring approaches: extracting a microservice versus refactoring in-place. Today, they want to explore both approaches in depth–having the agent propose specific code changes for each–before deciding which to implement.<\/p><p>What's the most effective way to structure this exploration?<\/p>",
    "options": {
      "A": "<p>Start two fresh sessions, manually providing a summary of yesterday's analysis findings to establish context.<\/p>",
      "B": "<p>Resume yesterday's session to explore the first approach, then start a new session for the second, manually recreating the original context.<\/p>",
      "C": "<p>Resume yesterday's session and explore both approaches sequentially within the same conversation thread.<\/p>",
      "D": "<p>Use fork_session to create two branches from yesterday's analysis, exploring one approach in each fork.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Khi làm việc với các hệ thống AI hỗ trợ lập trình (như Claude hoặc các công cụ tương tự có tính năng quản lý phiên làm việc), việc duy trì ngữ cảnh là tối quan trọng, đặc biệt khi bạn cần thử nghiệm nhiều phương án khác nhau mà không muốn chúng làm \"nhiễu\" lẫn nhau.<\/p><ul><li><p><b>Tại sao chọn D:<\/b> Tính năng <code>fork_session<\/code> (tạo nhánh từ phiên làm việc) là công cụ mạnh mẽ nhất cho trường hợp này. Nó cho phép bạn:<\/p><ul><li><p><b>Bảo toàn ngữ cảnh:<\/b> Cả hai nhánh đều thừa hưởng toàn bộ lịch sử phân tích từ ngày hôm qua (các findings về module xác thực).<\/p><\/li><li><p><b>Tách biệt logic (Isolation):<\/b> Bạn có thể phát triển phương án \"tách microservice\" ở nhánh này và \"refactor in-place\" ở nhánh kia mà không sợ các thay đổi code hoặc giả định của phương án này làm ảnh hưởng đến phương án kia.<\/p><\/li><li><p><b>Quyết định dựa trên dữ liệu:<\/b> Sau khi exploration kết thúc, bạn có thể so sánh kết quả cụ thể từ hai nhánh độc lập để đưa ra quyết định cuối cùng chính xác hơn.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Việc tạo \"fresh sessions\" (phiên làm việc mới) buộc bạn phải tốn công sức nạp lại dữ liệu (context loading), dễ dẫn đến thiếu sót thông tin và không tận dụng được trí nhớ của AI về các phân tích cũ.<\/p><\/li><li><p><b>B:<\/b> Việc tạo một phiên mới để khám phá phương án thứ hai sau khi đã xong phiên đầu tiên vừa mất thời gian, vừa dễ bị \"ô nhiễm\" ngữ cảnh nếu không cẩn thận.<\/p><\/li><li><p><b>C:<\/b> Việc exploration cả hai cách tiếp cận trong <b>cùng một luồng (thread)<\/b> là sai lầm vì các thay đổi code cho hai phương án đối nghịch nhau sẽ gây xung đột logic nghiêm trọng, làm AI bị \"loạn\" ngữ cảnh và giảm độ chính xác của các đề xuất code.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-016",
    "set": 1,
    "number": 16,
    "type": "single",
    "question": "<p>Your agent needs to insert a new helper function into the middle of a 150-line utility module, between two existing functions. The Edit tool fails because its old_string parameter cannot find unique text to match – the file has repetitive docstrings, variable names, and structural patterns.<\/p><p>What's the most reliable way to complete this insertion?<\/p>",
    "options": {
      "A": "<p>Use Read to load the file, add the function at the appropriate location, then Write the updated file<\/p>",
      "B": "<p>Use Bash to append the function definition to the end of the file using heredoc syntax<\/p>",
      "C": "<p>Use Edit's replace_all parameter to target a common pattern and embed the new function in the replacement text<\/p>",
      "D": "<p>Use Edit with an extremely long old_string capturing 30+ lines of context to guarantee uniqueness<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Khi công cụ <code>Edit<\/code> không thể xác định vị trí chính xác do nội dung file quá lặp lại (repetitive), việc cố gắng ép buộc bằng cách tăng độ dài <code>old_string<\/code> (phương án D) thường không hiệu quả và dễ gây ra lỗi sai lệch ngữ cảnh. Các lý do tại sao <b>A<\/b> là phương pháp đáng tin cậy nhất:<\/p><ul><li><p><b>Độ chính xác tuyệt đối:<\/b> Khi bạn sử dụng <code>Read<\/code> để tải toàn bộ nội dung file, bạn có cái nhìn đầy đủ về cấu trúc file đó. Sau đó, việc sử dụng <code>Write<\/code> (ghi đè toàn bộ file với nội dung đã được chỉnh sửa) giúp bạn kiểm soát chính xác vị trí chèn hàm mới mà không cần dựa vào khả năng khớp mẫu (pattern matching) bị hạn chế của công cụ <code>Edit<\/code>.<\/p><\/li><li><p><b>Tránh rủi ro:<\/b><\/p><ul><li><p><b>B (Bash/heredoc):<\/b> Chỉ cho phép chèn vào cuối file (append), điều này có thể làm hỏng cấu trúc module nếu hàm mới cần nằm ở một vị trí cụ thể giữa các hàm khác.<\/p><\/li><li><p><b>C (Replace all):<\/b> Rất nguy hiểm trong một file có nội dung lặp lại, vì nó có thể vô tình thay thế nhầm nhiều vị trí khác không mong muốn.<\/p><\/li><li><p><b>D (Long old_string):<\/b> Tăng độ dài <code>old_string<\/code> lên 30+ dòng không đảm bảo tính duy nhất và làm tăng xác suất sai sót do các thay đổi nhỏ về định dạng hoặc khoảng trắng trong file gốc.<\/p><\/li><\/ul><\/li><\/ul><p>Vì vậy, trong các hệ thống AI agent, khi công cụ chỉnh sửa theo mẫu (Edit) gặp lỗi, <b>\"Read toàn bộ - Chỉnh sửa - Write lại toàn bộ\"<\/b> là quy trình tiêu chuẩn để đảm bảo tính toàn vẹn của mã nguồn.<\/p>"
  },
  {
    "id": "CCAR-F-017",
    "set": 1,
    "number": 17,
    "type": "single",
    "question": "<p>Your extraction system implements automatic retries when validation fails. On each retry, the specific validation error is appended to the prompt. This retry-with-error-feedback approach resolves most failures within 2-3 attempts<\/p><p>For which failure pattern would additional retries be LEAST effective?<\/p>",
    "options": {
      "A": "<p>The model extracts \"et al.\" for co-authors when the full list exists only in an external document not in the input<\/p>",
      "B": "<p>The model extracts dates as ISO 8601 datetime strings (\"2023-03-15T00:00:00Z\") when the schema requires only the date portion (YYYY-MM-DD)<\/p>",
      "C": "<p>The model extracts citation counts as locale-formatted strings (\"1,234\") when the schema requires integers<\/p>",
      "D": "<p>The model extracts keywords as a nested object organized by category when the schema requires a flat array of strings<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Cơ chế \"retry-with-error-feedback\" (thử lại kèm phản hồi lỗi) dựa trên giả định rằng mô hình <b>đã có đủ thông tin<\/b> trong ngữ cảnh (context window) nhưng chỉ đơn giản là đang hiểu sai yêu cầu hoặc định dạng.<\/p><ul><li><p><b>Tại sao chọn A:<\/b> Đây là lỗi thuộc về <b>thiếu dữ liệu (missing information)<\/b>. Nếu toàn bộ danh sách tác giả không tồn tại trong tài liệu đầu vào (input context), thì dù bạn có bắt mô hình thử lại bao nhiêu lần đi chăng nữa, nó cũng không thể \"phát minh\" ra thông tin không tồn tại đó. Việc phản hồi lỗi chỉ giúp mô hình biết là nó đang làm sai, nhưng nó không có nguồn dữ liệu để lấy thông tin đúng. Đây là giới hạn về dữ liệu nguồn, không phải lỗi kỹ năng trích xuất của AI.<\/p><\/li><li><p><b>Tại sao các phương án khác kém hiệu quả hơn (tức là retries sẽ HIỆU QUẢ với chúng):<\/b><\/p><ul><li><p><b>B, C, D:<\/b> Đây là các lỗi về <b>định dạng (formatting/schema mismatches)<\/b>. Mô hình đã có thông tin cần thiết trong văn bản, nó chỉ đang bị nhầm lẫn giữa định dạng yêu cầu (ISO 8601 vs Date, Integer vs Formatted String, Flat array vs Nested object). Trong các trường hợp này, việc phản hồi lỗi (\"Error: Output must be a flat array, not a nested object\") sẽ giúp mô hình điều chỉnh lại cách trình bày dữ liệu trong lần thử tiếp theo, vì vậy retries sẽ rất hiệu quả.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-018",
    "set": 1,
    "number": 18,
    "type": "single",
    "question": "<p>In production, you're distributing complex queries to specialized subagents. The query distribution is uneven and evolving as users discover new applications.<\/p><p>What's the most effective approach to optimize for query complexity?<\/p>",
    "options": {
      "A": "<p>Train a query complexity classifier based on labeled historical data to predict optimal subagent combination.<\/p>",
      "B": "<p>Have the coordinator analyze each query dynamically and selectively route subagents based on the query's complexity and routing characteristics.<\/p>",
      "C": "<p>Implement pattern-based routing that categorizes queries based on factual vs analytical patterns and maps each to a predefined subagent combination.<\/p>",
      "D": "<p>Create a fast-track path for factual questions that bypasses subagents entirely, routing only analytical queries through the complete pipeline.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Đáp án đúng: <b>[B]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn B:<\/b> Đề bài nhấn mạnh rằng <b>phân phối truy vấn không đồng đều và đang liên tục tiến hóa<\/b> (uneven and evolving as users discover new applications) khi người dùng khám phá các ứng dụng mới. Do đó, việc sử dụng các phương pháp tĩnh như huấn luyện mô hình phân loại dựa trên dữ liệu lịch sử cố định (Đáp án A), quy tắc mẫu cố định (Đáp án C), hay đường tắt cứng nhắc (Đáp án D) đều sẽ nhanh chóng trở nên lỗi thời hoặc thiếu linh hoạt. Phương án tối ưu và thích ứng tốt nhất là <b>để coordinator tự phân tích từng truy vấn một cách động (dynamically)<\/b> và định tuyến linh hoạt cho các subagent dựa trên chính đặc trưng phức tạp của truy vấn đó tại thời điểm thực thi.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Huấn luyện bộ phân loại dựa trên dữ liệu lịch sử tĩnh (historical data) sẽ kém hiệu quả khi phân phối truy vấn liên tục thay đổi và phát triển theo các ứng dụng mới mà người dùng khám phá.<\/p><\/li><li><p><b>C:<\/b> Áp dụng định tuyến dựa trên mẫu cố định (pattern-based routing) bị cứng nhắc, không xử lý được các biến thể phức tạp mới phát sinh.<\/p><\/li><li><p><b>D:<\/b> Việc tạo fast-track bỏ qua hoàn toàn subagents cho các câu hỏi thông thường làm giảm tính đồng nhất và khả năng xử lý chuyên sâu của kiến trúc đa agent.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-019",
    "set": 1,
    "number": 19,
    "type": "single",
    "question": "<p>An engineer's exploration subagent spent 30 minutes analyzing a legacy payment system, reading 47 files and documenting data flows. The session was interrupted when the engineer's connection dropped. While away, a teammate merged a PR that renamed two utility functions. The engineer wants to continue the same exploration.<\/p><p>What's the most effective approach?<\/p>",
    "options": {
      "A": "<p>Resume the subagent from its previous transcript without mentioning the changes–the architecture understanding remains valid.<\/p>",
      "B": "<p>Launch a fresh subagent and include the prior transcript in the initial prompt for context.<\/p>",
      "C": "<p>Launch a fresh subagent with a summary of prior findings.<\/p>",
      "D": "<p>Resume the subagent from its previous transcript and inform it about the renamed functions.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Trong môi trường làm việc với AI agent (như Claude Code), việc duy trì ngữ cảnh (context) là yếu tố quan trọng nhất để đạt hiệu suất cao.<\/p><ul><li><p><b>Tại sao chọn D:<\/b><\/p><ul><li><p><b>Tận dụng ngữ cảnh:<\/b> Agent đã mất 30 phút để hiểu cấu trúc của 47 file. Việc resume cho phép agent giữ lại toàn bộ \"kiến thức\" (mental model) về luồng dữ liệu mà nó đã xây dựng.<\/p><\/li><li><p><b>Cập nhật thực tế:<\/b> Khi mã nguồn đã thay đổi (2 hàm bị đổi tên), bạn cần chủ động thông báo cho agent biết. Đây là thao tác \"human-in-the-loop\" giúp agent điều chỉnh hiểu biết của mình mà không cần phải phân tích lại từ đầu.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Sai lầm vì không cập nhật thông tin về các hàm đã đổi tên. Khi agent cố gắng truy xuất hoặc sử dụng các hàm này trong tương lai, nó sẽ gặp lỗi \"symbol not found\", dẫn đến mất thời gian debug không cần thiết.<\/p><\/li><li><p><b>B &amp; C:<\/b> Việc khởi động lại (fresh subagent) sẽ làm mất đi toàn bộ lợi thế của 30 phút phân tích trước đó. Dù có đưa lại transcript (B) hoặc tóm tắt (C), agent vẫn sẽ tốn thêm thời gian để \"đọc\" lại và xây dựng lại sơ đồ tư duy (mental map), kém hiệu quả hơn nhiều so với việc resume trực tiếp và cập nhật delta thay đổi.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-020",
    "set": 1,
    "number": 20,
    "type": "single",
    "question": "<p>This currently requires manually copy-pasting content into conversations. The team wants the agent to access this standard Jira ticket data directly.<\/p><p>What's the most effective approach?<\/p>",
    "options": {
      "A": "<p>Integrate an existing Jira MCP server that exposes tickets, comments, and metadata through discoverable tool interfaces.<\/p>",
      "B": "<p>Use the Bash tool with curl to call Jira's REST API, including authentication headers and parsing JSON responses inline.<\/p>",
      "C": "<p>Build a custom MCP server wrapping Jira's API with tools designed specifically for this team's code review workflow.<\/p>",
      "D": "<p>Export Jira tickets to markdown files in the repository that the agent accesses using the Read tool.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao đáp án A đúng:<\/b><\/p><p>Đề bài nêu rõ yêu cầu truy cập dữ liệu <b>standard Jira ticket data<\/b> trực tiếp để thay thế việc copy-paste thủ công. Sử dụng <b>Model Context Protocol (MCP)<\/b> với một MCP server có sẵn cho Jira giúp cung cấp sẵn các giao diện công cụ chuẩn hóa, bảo mật và có thể khám phá được (<i>discoverable tool interfaces<\/i>) mà agent có thể sử dụng ngay lập tức mà không cần tốn công xây dựng lại từ đầu.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>Đáp án B sai:<\/b> Việc sử dụng Bash tool với <code>curl<\/code> để gọi REST API thủ công kèm theo phân tích JSON inline vừa kém an toàn, dễ lỗi cú pháp dòng lệnh, vừa không tận dụng được cơ chế quản lý công cụ cấu trúc an toàn của agent.<\/p><\/li><li><p><b>Đáp án C sai:<\/b> Việc tự xây dựng một custom MCP server từ đầu là lãng phí thời gian và công sức khi đề bài nhắc đến việc truy cập dữ liệu Jira tiêu chuẩn (<i>standard Jira ticket data<\/i>) mà các MCP server có sẵn đã hỗ trợ hoàn toàn.<\/p><\/li><li><p><b>Đáp án D sai:<\/b> Việc export thủ công ra các file markdown trong repository gây ra độ trễ dữ liệu lớn, mất đi tính đồng bộ thời gian thực (<i>real-time access<\/i>) của ticket và biến thông tin động thành tài liệu tĩnh.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-021",
    "set": 1,
    "number": 21,
    "type": "single",
    "question": "<p>Your extraction pipeline processes contracts that frequently include amendments. When a contract contains both original terms and later amendments (e.g., original clause specifies \"30-day payment terms\" while Amendment 1 changes this to \"45 days\"), the model inconsistently extracts one value or the other with no indication of which applies.<\/p><p>What's the most effective approach to improve extraction accuracy for documents with amendments?<\/p>",
    "options": {
      "A": "<p>Redesign the schema so amended fields capture multiple values, each with source location and effective date.<\/p>",
      "B": "<p>Implement post-extraction validation using pattern matching to detect amendments and flag those extractions for manual review.<\/p>",
      "C": "<p>Preprocess documents with a classifier that identifies and removes superseded sections before the main extraction step.<\/p>",
      "D": "<p>Add prompt instructions to always extract the most recent amendment value and ignore superseded original terms.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Trong các bài toán xử lý tài liệu pháp lý phức tạp như hợp đồng có nhiều phụ lục (amendments), việc chỉ cố gắng lấy ra một giá trị duy nhất (giá trị hiện tại) là rất rủi ro và dễ dẫn đến sai sót (model thường bị nhầm lẫn giữa điều khoản gốc và điều khoản sửa đổi).<\/p><ul><li><p><b>Tại sao chọn A:<\/b> Đây là phương pháp <b>\"Structured Data Integrity\"<\/b> (toàn vẹn dữ liệu cấu trúc). Bằng cách thiết kế lại schema để lưu trữ tất cả các phiên bản (kèm theo nguồn gốc và ngày hiệu lực), hệ thống của bạn sẽ đạt được hai lợi ích lớn:<\/p><ol start=\"1\"><li><p><b>Tính truy xuất nguồn gốc (Traceability):<\/b> Bạn có thể kiểm chứng tại sao mô hình lại trích xuất giá trị đó, dựa trên đoạn văn bản nào.<\/p><\/li><li><p><b>Tính linh hoạt:<\/b> Sau khi trích xuất được toàn bộ lịch sử thay đổi vào cấu trúc dữ liệu, lớp xử lý phía sau (downstream logic) mới là nơi quyết định đâu là giá trị \"cuối cùng\" có hiệu lực. Điều này tách biệt nhiệm vụ trích xuất (extraction) khỏi nhiệm vụ suy luận logic (reasoning), giúp mô hình hoạt động ổn định và chính xác hơn nhiều.<\/p><\/li><\/ol><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>B:<\/b> Việc dựa vào \"pattern matching\" hậu kiểm là giải pháp chắp vá. Các văn bản pháp lý rất đa dạng về ngôn ngữ, pattern matching sẽ không bao giờ bao phủ hết các trường hợp, và việc bắt con người \"review thủ công\" sẽ làm mất đi giá trị của việc tự động hóa.<\/p><\/li><li><p><b>C:<\/b> Việc xóa bỏ các phần \"superseded\" (bị thay thế) là cực kỳ nguy hiểm. Trong quản lý hợp đồng, việc biết được điều khoản cũ là gì đôi khi quan trọng không kém điều khoản mới (để giải quyết các tranh chấp về thời điểm phát sinh nghĩa vụ).<\/p><\/li><li><p><b>D:<\/b> Việc chỉ dựa vào \"prompt instructions\" là không đủ. Khi tài liệu có nhiều tầng lớp sửa đổi phức tạp, prompt không thể thay thế cho một kiến trúc dữ liệu vững chắc. Model vẫn sẽ bị \"ảo giác\" (hallucinate) hoặc bỏ sót thông tin nếu cấu trúc đầu ra không hỗ trợ việc phân biệt các lớp dữ liệu đó.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-022",
    "set": 1,
    "number": 22,
    "type": "single",
    "question": "<p>A customer returns 4 hours after their initial session about the same billing dispute. The previous 32-turn session contains context: lookup_status_result messages containing \"Status: Pending Refund\" and significant tokens from prior lookup results. The agent needs to be prepared to answer the customer fully.<\/p><p>What approach most reliably handles returning customers?<\/p>",
    "options": {
      "A": "<p>Resume with the full conversation and add a system prompt instruction that instructs the agent to prioritize resolving the pending refund.<\/p>",
      "B": "<p>Resume with state and configure the agent to automatically re-call all previous tool_results messages to ensure data freshness.<\/p>",
      "C": "<p>Start a new session, inject a structured summary of the previous interaction (issue type, resolution steps, current status), then make fresh tool calls as needed.<\/p>",
      "D": "<p>Create a new session with a structured summary of the previous interaction (issue type, resolution steps, current status), then make fresh tool calls as needed.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><b>Đáp án đúng:<\/b> <b>[C]<\/b> (hoặc <b>[D]<\/b>, vì C và D giống hệt nhau về nội dung chữ: <i>\"Start/Create a new session, inject a structured summary of the previous interaction (issue type, resolution steps, current status), then make fresh tool calls as needed.\"<\/i>)<\/p><hr/><h3><b>Giải thích chi tiết:<\/b><\/h3><ul><li><p><b>Tại sao nên bắt đầu phiên mới với bản tóm tắt có cấu trúc (Structured Summary)?<\/b><\/p><ul><li><p>Sau 4 giờ gián đoạn, phiên chat cũ đã trở nên quá dài (32 lượt tương tác) kèm theo lượng lớn token từ các kết quả gọi công cụ cũ (<code>tool_results<\/code>). Tiếp tục giữ nguyên toàn bộ lịch sử trò chuyện cũ sẽ làm lãng phí context window, tăng chi phí và có nguy cơ khiến mô hình bị \"nhiễu\" bởi dữ liệu cũ không còn đảm bảo độ tươi mới (data freshness).<\/p><\/li><li><p>Việc tạo một <b>phiên làm việc mới (new session)<\/b> kết hợp tiêm <b>bản tóm tắt cấu trúc<\/b> (bao gồm loại sự cố, các bước đã xử lý và trạng thái hiện tại) giúp agent nắm bắt toàn bộ ngữ cảnh quan trọng mà không bị quá tải bộ nhớ.<\/p><\/li><li><p>Sau đó, agent có thể <b>thực hiện các lệnh gọi công cụ mới (fresh tool calls)<\/b> khi cần thiết để lấy dữ liệu cập nhật mới nhất từ hệ thống (ví dụ: kiểm tra xem trạng thái \"Pending Refund\" đã được xử lý xong chưa).<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>[A]<\/b> Giữ lại toàn bộ cuộc hội thoại dài và chỉ thêm system prompt sẽ vẫn gặp vấn đề quá tải token, rườm rà và dữ liệu cũ từ các tool calls trước đó có thể không còn chính xác sau 4 tiếng.<\/p><\/li><li><p><b>[B]<\/b> Tự động gọi lại tất cả các <code>tool_results<\/code> cũ vừa không cần thiết vừa tốn kém tài nguyên, lại không giải quyết được việc cô đọng ngữ cảnh hội thoại.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-023",
    "set": 1,
    "number": 23,
    "type": "single",
    "question": "<p>The system routes documents with extraction confidence below 85% to human review. A quarterly audit reveals that 12% of high-confidence extractions (&gt;85%) also contain errors—cases where the model finds plausible-but-incorrect values. Error sources vary: comparison tables showing competitor specs, appendices referencing different product variants, and ambiguous phrasing the model misinterprets. You need a sustainable strategy to catch these high-confidence errors and measure whether improvements reduce the error rate over time.<\/p><p>What approach is most effective?<\/p>",
    "options": {
      "A": "<p>Implement heuristic rules that flag documents containing comparison tables or appendices for review regardless of confidence score.<\/p>",
      "B": "<p>Implement stratified random sampling reviewing a fixed percentage of high-confidence extractions weekly, enabling error rate measurement and novel pattern detection.<\/p>",
      "C": "<p>Add a verification pass that re-extracts from each high-confidence document, flagging cases where the two extraction attempts produce different results.<\/p>",
      "D": "<p>Lower the confidence threshold from 85% to 70%, routing a larger volume of extractions to human review.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Lý do chọn B:<\/b> Trong các hệ thống AI/LLM production, khi mô hình tự tin cao (&gt;85%) nhưng vẫn có tỷ lệ lỗi ẩn (như sai sót do bảng so sánh, phụ lục, hay ngôn từ mơ hồ mà model tự bịa ra giá trị hợp lý - plausible-but-incorrect), việc áp dụng <b>stratified random sampling (lấy mẫu ngẫu nhiên phân tầng)<\/b> là chiến lược bền vững nhất. Nó vừa giúp kiểm soát định kỳ, đo lường chính xác tỷ lệ lỗi (error rate) theo thời gian, vừa phát hiện được các mẫu lỗi mới (novel patterns) để cải thiện hệ thống.<\/p><\/li><li><p><b>Các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Dùng heuristic rules cứng nhắc có thể gây quá tải cho bộ phận review thủ công và bỏ sót các lỗi phát sinh từ ngữ cảnh khác ngoài bảng so sánh/phụ lục.<\/p><\/li><li><p><b>C:<\/b> Chạy lại xác thực (re-extraction) trên tất cả tài liệu độ tin cậy cao gây tốn kém chi phí tính toán và nếu model có xu hướng sai sót cố hữu (consistent hallucination), kết quả chạy lại vẫn có thể trùng khớp sai lầm.<\/p><\/li><li><p><b>D:<\/b> Hạ ngưỡng confidence xuống 70% làm tăng đáng kể khối lượng công việc kiểm duyệt thủ công mà không giải quyết tận gốc rễ nguyên nhân gây lỗi ở nhóm độ tin cậy cao.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-024",
    "set": 1,
    "number": 24,
    "type": "single",
    "question": "<p>Documents arrive continuously throughout business hours and need structured data extracted. To reduce costs, you want to use the Message Batches API (50% discount, up-to-24-hour processing window). Your SLA specifies that extraction results must be available within 30 hours of document arrival with 99.9% reliability.<\/p><p>Which batching strategy is most appropriate?<\/p>",
    "options": {
      "A": "<p>Submit batches every 4 hours containing documents from that window<\/p>",
      "B": "<p>Submit batches every 6 hours containing documents from that window<\/p>",
      "C": "<p>Submit a single batch at end of day containing all documents from that day<\/p>",
      "D": "<p>Use the real-time API for all documents instead of batch processing<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Để chọn chiến lược phù hợp, chúng ta cần cân bằng giữa <b>chi phí (Message Batches API)<\/b>, <b>thời gian xử lý (Processing window)<\/b> và <b>SLA (Service Level Agreement)<\/b>:<\/p><ul><li><p><b>Tại sao chọn A (4 giờ):<\/b><\/p><ul><li><p><b>Giới hạn xử lý:<\/b> Message Batches API có cửa sổ xử lý lên tới 24 giờ. Nếu bạn gửi batch vào thời điểm cuối của cửa sổ 4 giờ (ví dụ: giờ thứ 4), với thời gian xử lý tối đa 24 giờ, tổng thời gian từ khi tài liệu đến cho đến khi có kết quả sẽ là <span>$4 + 24 = 28$<\/span> giờ.<\/p><\/li><li><p><b>Đáp ứng SLA:<\/b> Với SLA là <b>30 giờ<\/b>, việc gửi theo batch 4 giờ đảm bảo kết quả luôn sẵn sàng trong vòng tối đa 28 giờ, tạo một biên độ an toàn (buffer) 2 giờ để hệ thống xử lý các vấn đề phát sinh hoặc chậm trễ, đảm bảo đạt được độ tin cậy <b>99.9%<\/b>.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>B (6 giờ):<\/b> Nếu bạn gửi batch vào giờ thứ 6, tổng thời gian có thể lên tới <span>$6 + 24 = 30$<\/span> giờ. Điều này sát nút giới hạn SLA, không để lại biên độ an toàn cho các rủi ro hệ thống, làm giảm khả năng đạt mục tiêu độ tin cậy 99.9%.<\/p><\/li><li><p><b>C (Cuối ngày):<\/b> Nếu một tài liệu đến ngay đầu giờ làm việc, và bạn đợi đến cuối ngày (ví dụ 8-10 tiếng sau) mới gửi batch, cộng thêm 24 giờ xử lý, tổng thời gian có thể lên tới 32-34 giờ, vi phạm nghiêm trọng SLA 30 giờ.<\/p><\/li><li><p><b>D (Real-time API):<\/b> Mặc dù nhanh, nhưng yêu cầu đề bài là cần <b>giảm chi phí<\/b> bằng cách sử dụng Message Batches API. Chuyển sang Real-time API sẽ làm mất đi ưu đãi giảm giá 50%<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-025",
    "set": 1,
    "number": 25,
    "type": "single",
    "question": "<p>An engineer who just joined the team asks the agent to help them understand the authentication and authorization architecture before making security improvements. The codebase has 800+ files across multiple services.<\/p><p>What exploration strategy will most effectively build understanding, given Claude built-in tools and context limits?<\/p>",
    "options": {
      "A": "<p>Use Grep to find authentication entry points, read those files, then follow imports and function calls to map the auth flow incrementally.<\/p>",
      "B": "<p>Launch parallel subagents to explore different services simultaneously, then synthesize their findings into an architectural overview.<\/p>",
      "C": "<p>Read any CLAUDE.md and README files first, then ask the engineer to specify which 10-15 files are most important for understanding the auth system.<\/p>",
      "D": "<p>Read all files containing \"auth\", \"login\", \"permission\", or \"token\" in their content or filename.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Đối với một codebase lớn (800+ file), việc hiểu kiến trúc đòi hỏi chiến lược \"điều hướng có mục đích\" (targeted navigation) để không làm quá tải ngữ cảnh của mô hình.<\/p><ul><li><p><b>Tại sao chọn A:<\/b> Đây là phương pháp <b>\"Traceability\"<\/b> (truy vết) hiệu quả nhất:<\/p><ul><li><p><b>Bắt đầu từ entry points:<\/b> Việc sử dụng <code>Grep<\/code> để tìm các điểm khởi đầu (như middleware xác thực, decorator, hoặc controller xử lý login) giúp bạn định vị đúng nơi logic bắt đầu.<\/p><\/li><li><p><b>Incremental mapping:<\/b> Sau đó, bằng cách đọc các file đó và lần theo <code>imports<\/code> hoặc <code>function calls<\/code>, AI sẽ xây dựng được một \"bản đồ kiến trúc\" logic từng bước một. Cách này giúp AI chỉ tập trung vào các file thực sự liên quan, tiết kiệm ngữ cảnh và tránh bị phân tán bởi hàng trăm file không cần thiết khác.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>B:<\/b> Việc dùng \"parallel subagents\" (nhiều agent song song) cho một nhiệm vụ phân tích kiến trúc ban đầu thường gây nhiễu, vì các agent này thiếu sự thống nhất trong cách hiểu luồng dữ liệu (data flow) và có thể gây xung đột trong kết luận.<\/p><\/li><li><p><b>C:<\/b> Mặc dù đọc tài liệu hướng dẫn (<code>README<\/code>, <code>CLAUDE.md<\/code>) là tốt, nhưng việc \"nhờ kỹ sư chỉ định 10-15 file\" là <b>phụ thuộc quá mức vào con người<\/b>. Vai trò của agent là tự suy luận (reasoning) và khám phá (exploration) dựa trên code. Nếu kỹ sư đã biết rõ 15 file đó thì họ đã không cần agent hỗ trợ phân tích kiến trúc từ đầu.<\/p><\/li><li><p><b>D:<\/b> Đây là chiến lược \"brute-force\" (thô bạo) nhất. Đọc tất cả các file có chứa từ khóa \"auth\" trong 800 file codebase sẽ làm đầy bộ nhớ ngữ cảnh (context window) ngay lập tức với hàng đống dữ liệu thừa, dẫn đến việc mô hình bị \"lú\" và mất đi khả năng tư duy logic sâu sắc.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-026",
    "set": 1,
    "number": 26,
    "type": "single",
    "question": "<p>Monitoring shows 12% of extractions fall Pydantic validation with specific errors like \"expected float for quantity, got '2 to 3\". Retrying these requests without modification produces failures.<\/p><p>What's the most effective approach to recover from these validation failures?<\/p>",
    "options": {
      "A": "<p>Pre-process source documents to standardize problematic formats before sending them for extraction<\/p>",
      "B": "<p>Send a follow-up request including the validation error, asking the model to correct its output<\/p>",
      "C": "<p>Implement a secondary pipeline using a larger model tier to reprocess documents that fail validation<\/p>",
      "D": "<p>Set temperature to 0 to eliminate output variability and ensure consistent formatting<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ol start=\"1\"><li><p><b>Bối cảnh bài toán:<\/b><\/p><ul><li><p>Hệ thống ghi nhận 12% trường hợp trích xuất dữ liệu thất bại do lỗi kiểm tra từ Pydantic (ví dụ: <code>expected float for quantity, got '2 to 3'<\/code>).<\/p><\/li><li><p>Việc thử lại yêu cầu mà không có sự thay đổi (retrying without modification) vẫn sẽ tiếp tục thất bại do mô hình lặp lại lỗi cũ.<\/p><\/li><\/ul><\/li><li><p><b>Lý do lựa chọn phương án B:<\/b><\/p><ul><li><p><b>Tận dụng thông tin phản hồi lỗi (Error Feedback Loop):<\/b> Khi Pydantic báo lỗi cụ thể, việc gửi thông báo lỗi đó kèm theo yêu cầu chỉnh sửa trực tiếp lại cho mô hình (cho phép mô hình thấy được output trước đó sai ở đâu và cần sửa trường nào) là phương pháp trực tiếp, hiệu quả và tốn ít chi phí nhất để khắc phục định dạng dữ liệu sai lệch.<\/p><\/li><li><p>Các phương án khác (như tiền xử lý toàn bộ tài liệu nguồn phức tạp, dùng mô hình lớn hơn đắt đỏ hơn, hay chỉ chỉnh temperature) không giải quyết trực tiếp và chính xác được vấn đề ngữ nghĩa/định dạng mà Pydantic đang bắt lỗi dựa trên kết quả trích xuất cụ thể của mô hình.<\/p><\/li><\/ul><\/li><\/ol>"
  },
  {
    "id": "CCAR-F-027",
    "set": 1,
    "number": 27,
    "type": "single",
    "question": "<p>During a conversation about order tracking, your external system receives a webhook indicating the user's package has shipped. The user is actively chatting and will likely send a follow-up message soon. You want the assistant to naturally incorporate this status change in its next response.<\/p><p>What's the most effective approach?<\/p>",
    "options": {
      "A": "<p>Add the current shipping status to the system prompt before the next API call.<\/p>",
      "B": "<p>Append the status update as a prefix to the next user message before calling the API.<\/p>",
      "C": "<p>Configure the assistant to call a get_order_status tool at the start of every response.<\/p>",
      "D": "<p>Immediately send an API request with the update as a synthetic user message, generating an unsolicited assistant response.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p> <strong>A) Thêm trạng thái vận chuyển hiện tại vào system prompt trước lần gọi API tiếp theo.<\/strong><\/p><p>Webhook là một <strong>sự kiện từ bên ngoài<\/strong> (external event). Khi hệ thống của bạn biết được thông tin mới (ví dụ: đơn hàng đã được gửi), thì <strong>ở lần gọi API tiếp theo<\/strong>, bạn chỉ cần bổ sung thông tin này vào <strong>system prompt hoặc application context<\/strong>.<\/p><p>Ưu điểm:<\/p><ul><li>AI coi đây là <strong>thông tin đáng tin cậy do hệ thống cung cấp<\/strong>.<\/li><li>Không cần sửa nội dung người dùng.<\/li><li>Không cần gọi API ngay lập tức.<\/li><li>AI sẽ tự nhiên nhắc đến việc đơn hàng đã được gửi khi trả lời.<\/li><\/ul><p>Đây là cách Anthropic khuyến nghị khi xử lý <strong>external state changes<\/strong>.<\/p>"
  },
  {
    "id": "CCAR-F-028",
    "set": 1,
    "number": 28,
    "type": "single",
    "question": "<p>After deployment, you find that 12% of extractions contain semantic errors that pass JSON schema validation (e.g., a duration like \"30 minutes\" incorrectly placed in an ingredient quantity field). Human reviewers have capacity to check only 20% of extractions.<\/p><p>Which approach most effectively allocates reviewer attention?<\/p>",
    "options": {
      "A": "<p>Prioritize review of all extractions where required fields are empty or explicitly marked as not found.<\/p>",
      "B": "<p>Have the model output field-level confidence scores, then calibrate review thresholds using a labeled validation set.<\/p>",
      "C": "<p>Review all extractions from documents with formatting anomalies such as unusual layouts or mixed content types.<\/p>",
      "D": "<p>Randomly sample 20% of extractions for review, using corrections to track accuracy and identify error patterns.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Trong các hệ thống trích xuất dữ liệu (data extraction) bằng AI, vấn đề lớn nhất là các lỗi ngữ nghĩa (semantic errors) không vi phạm cấu trúc JSON (schema validation). Để tận dụng tối đa nguồn lực người kiểm duyệt (chỉ 20% công suất), bạn cần một phương pháp lọc thông minh thay vì chọn ngẫu nhiên.<\/p><ul><li><p><b>Tại sao chọn B:<\/b> Đây là phương pháp tối ưu nhất về mặt kỹ thuật:<\/p><ul><li><p><b>Phát hiện rủi ro chủ động:<\/b> Bằng cách yêu cầu model xuất ra \"điểm tự tin\" (confidence score) cho từng trường dữ liệu, bạn có một thước đo định lượng cho độ tin cậy của mỗi output.<\/p><\/li><li><p><b>Hiệu quả cao:<\/b> Khi kết hợp với tập dữ liệu kiểm chứng (labeled validation set), bạn có thể tìm ra \"ngưỡng\" (threshold) – ví dụ, tất cả các trường có điểm tự tin dưới 0.85 sẽ được tự động gửi cho người kiểm duyệt. Điều này giúp tập trung 20% công sức của con người vào đúng những trường dữ liệu có xác suất lỗi cao nhất, thay vì lãng phí thời gian xem lại những dữ liệu mà AI đã làm chính xác.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Việc ưu tiên các trường \"trống\" hoặc \"không tìm thấy\" không giải quyết được vấn đề lỗi ngữ nghĩa (như ví dụ \"30 minutes\" bị đặt nhầm chỗ), vì những lỗi này thường xảy ra ở các trường <b>có chứa dữ liệu<\/b> nhưng sai nội dung.<\/p><\/li><li><p><b>C:<\/b> Mặc dù định dạng bất thường có thể gây lỗi, nhưng đây không phải là nguyên nhân duy nhất. Rất nhiều lỗi ngữ nghĩa xảy ra trên các tài liệu chuẩn (standard layouts), nên việc chỉ tập trung vào tài liệu dị dạng sẽ bỏ sót phần lớn lỗi thực tế.<\/p><\/li><li><p><b>D:<\/b> Việc lấy mẫu ngẫu nhiên (random sampling) là chiến lược thụ động và kém hiệu quả. Nó chỉ cung cấp dữ liệu thống kê về độ chính xác chung chứ không giúp ngăn chặn hoặc sửa chữa lỗi một cách có hệ thống như phương pháp lọc theo ngưỡng tin cậy (B).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-029",
    "set": 1,
    "number": 29,
    "type": "single",
    "question": "<p>Your multi-agent research pipeline crashed after processing 12 of 28 documents. The web search agent had identified relevant sources, the document analysis agent had partially completed extraction, and the synthesizer had begun pattern identification. You need to resume processing without repeating work or losing fidelity of prior findings.<\/p><p>What state management approach best balances information fidelity with context efficiency when restoring agent state?<\/p>",
    "options": {
      "A": "<p>Persist the coordinator's conversation log containing all task delegations and responses, providing this to agents when resuming.<\/p>",
      "B": "<p>Have each agent maintain its own persistent state file and reload it independently at the start of each session.<\/p>",
      "C": "<p>Have each agent persist a structured report to a known location. On resume, the coordinator loads the reports and injects relevant state into agent prompts.<\/p>",
      "D": "<p>Index all agent outputs in a shared vector store. When resuming, each agent queries the store using semantic search to retrieve relevant prior findings.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Lý do chọn C:<\/b><\/p><ul><li><p><b>Cân bằng giữa độ chính xác thông tin (fidelity) và hiệu quả ngữ cảnh (context efficiency):<\/b> Việc mỗi agent lưu trữ (persist) một báo cáo cấu trúc vào vị trí xác định giúp lưu giữ toàn bộ dữ liệu, phát hiện của phần công việc đã hoàn thành (12/28 tài liệu) mà không làm mất mát chi tiết (fidelity).<\/p><\/li><li><p>Khi khôi phục, coordinator chỉ cần tải các báo cáo này và <b>chọn lọc/tiêm (inject) đúng phần trạng thái liên quan<\/b> vào prompt của từng agent thay vì nhồi nhét toàn bộ lịch sử thô (giúp tối ưu context window).<\/p><\/li><\/ul><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Lưu toàn bộ conversation log thô sẽ nhanh chóng làm quá tải bộ nhớ ngữ cảnh (context window explosion) khi quy mô văn bản lớn và không hiệu quả.<\/p><\/li><li><p><b>B:<\/b> Mỗi agent tự quản lý file trạng thái riêng rời rạc khiến coordinator khó điều phối và tổng hợp lại tiến trình tổng thể một cách đồng bộ.<\/p><\/li><li><p><b>D:<\/b> Tìm kiếm ngữ nghĩa (vector store semantic search) có nguy cơ bỏ sót hoặc làm mất thông tin chi tiết, chính xác từng phần (mất fidelity) so với việc nạp trực tiếp báo cáo cấu trúc.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-030",
    "set": 1,
    "number": 30,
    "type": "single",
    "question": "<p>Your home renovation planning assistant uses a system prompt defining an expert contractor persona with specific guidelines: always ask about budget, suggest alternatives at multiple price points, and confirm timeline requirements. During testing, responses follow these guidelines for turns 1-4, but by turn 7, the assistant gives generic advice without asking about budget or timeline. The conversation totals only 2,500 tokens.<\/p><p>What is the most likely cause?<\/p>",
    "options": {
      "A": "<p>System prompts only establish initial behavior and don't persist across all turns.<\/p>",
      "B": "<p>The model's attention on system prompt instructions naturally weakens as turns accumulate.<\/p>",
      "C": "<p>The assistant's accumulated responses are diluting the system prompt's influence.<\/p>",
      "D": "<p>The system prompt is only sent with the first API request.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b> Trong bối cảnh LLM (Large Language Model) trò chuyện nhiều lượt (multi-turn conversation), lịch sử trò chuyện bao gồm cả tin nhắn của người dùng và các phản hồi trước đó của trợ lý được gửi lại trong mỗi API request mới. Khi số lượt trao đổi tăng lên, lượng token từ các câu trả lời tích lũy của trợ lý sẽ làm \"loãng\" (dilute) tầm quan trọng hoặc sự chú ý của mô hình đối với system prompt ban đầu (hiện tượng này thường liên quan đến vị trí của prompt và sự phân phối trọng số trong ngữ cảnh). Do đó, trợ lý có xu hướng quên đi các hướng dẫn cụ thể trong system prompt ở các lượt sau dù tổng số token vẫn nằm trong giới hạn cho phép.<\/p><\/li><li><p><b>Tại sao loại các đáp án khác:<\/b><\/p><ul><li><p><b>A (Sai):<\/b> System prompt duy trì sự tồn tại và ảnh hưởng của nó xuyên suốt các lượt trò chuyện, không chỉ thiết lập hành vi ở lượt đầu tiên (nó được gửi lại trong mỗi yêu cầu API).<\/p><\/li><li><p><b>B (Sai/Không chính xác bằng C):<\/b> Sự suy giảm chú ý (attention drift/lost in the middle) thường liên quan mạnh mẽ đến dung lượng ngữ cảnh quá lớn hoặc khoảng cách xa, nhưng nguyên nhân trực tiếp dẫn đến việc lệch hướng ở đây là do sự tích lũy nội dung đối thoại (đặc biệt là các phản hồi của chính trợ lý) ngày càng chiếm lĩnh context window và làm suy yếu ảnh hưởng hướng dẫn gốc.<\/p><\/li><li><p><b>D (Sai):<\/b> System prompt không chỉ được gửi ở request đầu tiên; trong các API chat thông thường, system prompt thường được đính kèm cùng với toàn bộ lịch sử trò chuyện trong mỗi lần gọi tiếp theo.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-031",
    "set": 1,
    "number": 31,
    "type": "single",
    "question": "<p>After integrating a local MCP server providing code analysis tools (analyze_dependencies, find_dead_code, calculate_complexity), you notice the agent continues to use Grep to inspect dependencies even when users explicitly ask about \"code dependencies\". Tool definitions reveal: analyze_dependencies returns a dependency graph by analyzing imports.<\/p><p>What's the most effective approach to improve the agent's selection of MCP tools?<\/p>",
    "options": {
      "A": "<p>Expand MCP tool descriptions and outputs–e.g., \"Builds dependency graph with list_imports, direct_circular_deps\"–to clearly distinguish dependencies and cycle analysis from Grep.<\/p>",
      "B": "<p>Split analyze_dependencies into granular tools: list_imports, detect_transitive_deps, identify_circular_deps to avoid overlap with Grep.<\/p>",
      "C": "<p>Add routing questions to the system prompt specifying that dependency-related questions should use MCP tools rather than Grep.<\/p>",
      "D": "<p>Remove Grep from the available tools to eliminate functional overlap.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Để cải thiện khả năng lựa chọn công cụ của AI trong hệ thống MCP, bạn cần tập trung vào việc làm cho \"danh tính\" và \"chức năng\" của công cụ trở nên rõ ràng và vượt trội hơn so với các phương pháp cũ (như <code>Grep<\/code>).<\/p><ul><li><p><b>Tại sao chọn A:<\/b> LLM lựa chọn công cụ dựa trên mô tả (meta-data). Hiện tại, AI chọn <code>Grep<\/code> vì nó \"biết\" <code>Grep<\/code> là gì và làm gì. Khi bạn cập nhật mô tả của <code>analyze_dependencies<\/code> để giải thích cụ thể rằng nó không chỉ liệt kê mà còn tạo ra <b>dependency graph<\/b> (đồ thị phụ thuộc) và phân tích sâu hơn (như cycle detection), bạn đang cung cấp cho AI một lý do logic mạnh mẽ hơn để ưu tiên sử dụng công cụ này thay vì <code>Grep<\/code>—vốn chỉ là tìm kiếm văn bản đơn thuần.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>B:<\/b> Việc chia nhỏ quá mức các công cụ có thể làm hệ thống trở nên cồng kềnh, khó quản lý và khiến AI khó khăn hơn trong việc quyết định nên dùng công cụ nào cho các yêu cầu rộng như \"code dependencies\".<\/p><\/li><li><p><b>C:<\/b> Việc dùng system prompt để hướng dẫn (hard-coding) là giải pháp tạm thời, không bền vững. Nếu bạn bổ sung thêm công cụ mới trong tương lai, bạn sẽ phải liên tục cập nhật prompt, điều này tạo ra gánh nặng bảo trì lớn.<\/p><\/li><li><p><b>D:<\/b> Việc xóa <code>Grep<\/code> là quá cực đoan. <code>Grep<\/code> vẫn có giá trị trong việc tìm kiếm nhanh các chuỗi văn bản không liên quan đến cấu trúc code, và việc ép buộc AI không có quyền truy cập vào các công cụ cơ bản có thể làm giảm hiệu suất của nó trong những tác vụ đơn giản.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-032",
    "set": 1,
    "number": 32,
    "type": "single",
    "question": "<p>The coordinator provides detailed step-by-step instructions to the web search subagent, specifying exact search queries, source quality criteria (coverage breadth, source diversity), and content type classifications. The coordinator sometimes encounters challenges where instructions fail when the subagent encounters unexpected situations.<\/p><p>What's the most effective way to improve subagent adaptability?<\/p>",
    "options": {
      "A": "<p>Remove procedural detail entirely, delegating with simple goals like \"research it thoroughly\" and relying on the subagent's general capabilities.<\/p>",
      "B": "<p>Add explicit fallback directives to the detailed instructions: \"if specified searches fail, attempt alternative queries before reporting failure.\"<\/p>",
      "C": "<p>Implement a task classification step where the coordinator categorizes requests as \"analytical\" vs \"exploratory\" and uses different instruction sets for each category.<\/p>",
      "D": "<p>Specify research goals and quality criteria (coverage breadth, source diversity, content type) rather than procedural instructions, letting the subagent determine execution.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Đáp án đúng: <b>[D]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn D:<\/b> Trong thiết kế hệ thống đa agent (multi-agent systems), việc cung cấp các hướng dẫn quá chi tiết về mặt thủ tục (procedural instructions như ép buộc truy vấn chính xác, bước đi cứng nhắc) dễ khiến subagent gặp bế tắc khi tình huống thực tế thay đổi hoặc phát sinh bất ngờ. Để cải thiện khả năng thích ứng (adaptability), kiến trúc tốt nhất là chuyển từ chỉ đạo thủ tục sang <b>giao quyền dựa trên mục tiêu và tiêu chuẩn chất lượng<\/b> (specify research goals and quality criteria), trao quyền tự chủ cho subagent linh hoạt tự quyết định cách thực thi tối ưu nhất.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Loại bỏ hoàn toàn chi tiết và giao việc quá mơ hồ (<i>\"research it thoroughly\"<\/i>) sẽ khiến subagent thiếu đi các tiêu chí kiểm soát chất lượng cần thiết, dễ dẫn đến kết quả lan man, thiếu chiều sâu.<\/p><\/li><li><p><b>B:<\/b> Việc thêm các lệnh fallback thủ công vào tập chỉ dẫn chi tiết vẫn giữ nguyên bản chất cứng nhắc của lập trình thủ tục, không giải quyết được gốc rễ vấn đề thích ứng linh hoạt.<\/p><\/li><li><p><b>C:<\/b> Việc phân loại tác vụ thành analytical hay exploratory không giải quyết trực tiếp bài toán xử lý các tình huống bất ngờ khi subagent đang thực thi các bước thủ tục cụ thể.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-033",
    "set": 1,
    "number": 33,
    "type": "single",
    "question": "<p>The extraction pipeline receives documents of varying types—some are invoices, others are contracts, and some are receipts. You've defined separate extraction tools, each with its own schema tailored to the document type. During testing, you observe that with tool_choice: \"auto\", Claude sometimes returns conversational text instead of calling an extraction tool, causing downstream parsing failures. You need guaranteed structured output without knowing the document type in advance.<\/p><p>What's the most effective approach?<\/p>",
    "options": {
      "A": "<p>Set tool_choice: \"any\" with all extraction tools defined.<\/p>",
      "B": "<p>Keep tool_choice: \"auto\" with system prompt instructions requiring tool use.<\/p>",
      "C": "<p>Add a preliminary classification call, then make a second call with tool_choice forced to the identified extraction tool.<\/p>",
      "D": "<p>Consolidate all document types into a single unified-schema extraction tool and force that tool.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ol start=\"1\"><li><p><b>Bối cảnh bài toán:<\/b><\/p><ul><li><p>Hệ thống tiếp nhận nhiều loại tài liệu khác nhau (hóa đơn, hợp đồng, biên lai) và đã định nghĩa các công cụ trích xuất riêng biệt cho từng loại.<\/p><\/li><li><p>Gặp lỗi: Khi dùng <code>tool_choice: \"auto\"<\/code>, mô hình đôi khi trả về văn bản hội thoại thay vì gọi tool trích xuất, làm hỏng luồng xử lý tự động phía sau.<\/p><\/li><li><p>Yêu cầu cốt lõi: <b>Bắt buộc phải có đầu ra dạng cấu trúc (guaranteed structured output) mà không cần biết trước loại tài liệu<\/b>.<\/p><\/li><\/ul><\/li><li><p><b>Lý do lựa chọn phương án A:<\/b><\/p><ul><li><p><b>Sử dụng <code>tool_choice: \"any\"<\/code>:<\/b> Tham số này trong Anthropic API ép buộc mô hình <b>phải gọi ít nhất một trong các công cụ được định nghĩa<\/b> (thay vì được quyền chọn tự do giữa trả lời văn bản hay gọi tool như chữ \"auto\"). Bằng cách này, mô hình bị bắt buộc phải thực hiện lệnh gọi tool trích xuất với bất kỳ tập hợp công cụ nào đã cung cấp, loại bỏ hoàn toàn khả năng sinh ra văn bản hội thoại thông thường.<\/p><\/li><li><p>Khi kết hợp với việc định nghĩa tất cả các công cụ trích xuất, mô hình sẽ tự động chọn đúng công cụ phù hợp với tài liệu được cung cấp mà vẫn đảm bảo tính cấu trúc tuyệt đối.<\/p><\/li><\/ul><\/li><li><p><b>Loại trừ các phương án khác:<\/b><\/p><ul><li><p><b>Phương án B<\/b> vẫn dùng chế độ \"auto\" nên không thể ngăn chặn hoàn toàn việc mô hình đôi lúc trả về văn bản hội thoại.<\/p><\/li><li><p><b>Phương án C<\/b> (tách thành 2 bước: gọi phân loại trước rồi mới gọi tool ép buộc ở bước sau) làm tăng độ trễ (latency), tốn thêm chi phí tokens và thêm điểm gãy tiềm năng trong pipeline hệ thống.<\/p><\/li><li><p><b>Phương án D<\/b> (gộp chung tất cả thành một schema duy nhất) làm mất đi tính đặc thù và ưu điểm của các schema riêng biệt đã được tối ưu theo từng loại tài liệu.<\/p><\/li><\/ul><\/li><\/ol>"
  },
  {
    "id": "CCAR-F-034",
    "set": 1,
    "number": 34,
    "type": "single",
    "question": "<p>Users report that during extended conversations, the AI loses track of specific topics, examples, and preferences they mentioned earlier in the session. Your current implementation uses a sliding window that keeps only the most recent 25 message pairs to stay within context limits.<\/p><p>What's the most effective approach to maintain awareness of earlier conversation content while managing context size?<\/p>",
    "options": {
      "A": "<p>Add a separate API call each turn to summarize messages being dropped, prepending this running summary to the conversation.<\/p>",
      "B": "<p>Replace the sliding window with a hybrid approach: summarize older messages while keeping recent messages verbatim.<\/p>",
      "C": "<p>Increase the window size to 50 message pairs to retain more conversation history before truncation.<\/p>",
      "D": "<p>Implement vector similarity search over the full conversation history, retrieving relevant past messages for each user query.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn B:<\/b><\/p><p>Phương pháp Hybrid (kết hợp) là giải pháp tối ưu nhất cho bài toán quản lý cửa sổ ngữ cảnh (context window) trong các đoạn hội thoại dài:<\/p><ul><li><p><b>Giữ nguyên (verbatim) các tin nhắn gần đây:<\/b> Đảm bảo độ chi tiết, mạch lạc và tự nhiên cho các câu trả lời ngắn hạn của trợ lý.<\/p><\/li><li><p><b>Tóm tắt (summarize) các tin nhắn cũ hơn:<\/b> Giúp lưu giữ lại các thông tin quan trọng như chủ đề, ví dụ, hoặc sở thích mà người dùng đã đề cập từ đầu phiên, đồng thời tiết kiệm đáng kể dung lượng token để không bị vượt quá giới hạn và tránh việc bị mất vết thông tin (như khi dùng sliding window thuần túy).<\/p><\/li><\/ul><\/li><li><p><b>Tại sao loại các đáp án khác:<\/b><\/p><ul><li><p><b>A (Sai):<\/b> Việc thực hiện một lệnh gọi API riêng biệt <i>trong mỗi lượt<\/i> chỉ để tóm tắt các tin nhắn bị loại bỏ sẽ làm tăng đáng kể độ trễ (latency) và chi phí vận hành một cách không cần thiết.<\/p><\/li><li><p><b>C (Sai):<\/b> Việc tăng kích thước cửa sổ lên 50 cặp tin nhắn chỉ trì hoãn vấn đề tạm thời; sớm muộn gì khi cuộc trò chuyện kéo dài vượt quá giới hạn đó, thông tin cũ vẫn sẽ bị cắt bỏ hoàn toàn.<\/p><\/li><li><p><b>D (Sai):<\/b> Việc sử dụng vector similarity search cho toàn bộ lịch sử trò chuyện tiêu tốn tài nguyên nặng nề, dễ bỏ sót bối cảnh tuần tự (sequential context) và quá phức tạp so với yêu cầu tiêu chuẩn của một cơ chế quản lý hội thoại theo phiên (session).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-035",
    "set": 1,
    "number": 35,
    "type": "single",
    "question": "<p>In production, you observe that simple fact-checking queries (e.g., \"What year was the Paris Climate Agreement signed?\") traverse all four subagents sequentially, consuming 40+ seconds and significant tokens per query. Complex comparative research benefits from the full pipeline. Your query distribution is diverse and evolving as users discover new applications.<\/p><p>What's the most effective approach to optimize for varying query complexity?<\/p>",
    "options": {
      "A": "<p>Create a fast-path for factual questions that bypasses subagents entirely, routing all other queries through the complete pipeline to ensure research thoroughness.<\/p>",
      "B": "<p>Train a query complexity classifier on labeled historical data to predict optimal subagent combinations, retraining periodically as query patterns evolve.<\/p>",
      "C": "<p>Have the coordinator analyze each query and dynamically decide which subagents to invoke based on its assessment of query requirements.<\/p>",
      "D": "<p>Implement pattern-based routing that categorizes queries by structure (single-fact vs. comparative vs. analytical) and maps each category to a predefined subagent combination.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao đáp án C đúng:<\/b> Đề bài nhấn mạnh rằng <b>\"Your query distribution is diverse and evolving as users discover new applications\"<\/b> (Phân phối câu hỏi rất đa dạng và liên tục tiến hóa khi người dùng khám phá ra các ứng dụng mới). Trong kiến trúc agent thông minh, việc để <b>coordinator<\/b> (agent điều phối trung tâm) tự phân tích từng truy vấn và đưa ra quyết định linh hoạt (dynamic routing) là phương pháp tối ưu nhất để xử lý các dạng câu hỏi biến đổi liên tục. Coordinator có thể điều phối gọi số lượng subagent vừa đủ (ví dụ: chỉ gọi 1 subagent cho câu hỏi đơn giản, hoặc gọi toàn bộ pipeline cho câu hỏi phức tạp) mà không cần cấu hình cứng.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>Đáp án A sai:<\/b> Việc tạo một đường tắt (fast-path) hoàn toàn bỏ qua subagents cho câu hỏi đơn giản nhưng bắt buộc <b>\"routing all other queries through the complete pipeline\"<\/b> (đẩy tất cả các truy vấn khác qua toàn bộ pipeline cố định) không giải quyết được tính chất \"đa dạng và liên tục tiến hóa\" của các dạng câu hỏi phức tạp mới phát sinh.<\/p><\/li><li><p><b>Đáp án B sai:<\/b> Việc huấn luyện một mô hình phân loại (classifier) riêng biệt dựa trên dữ liệu lịch sử rồi phải <b>\"retraining periodically as query patterns evolve\"<\/b> tạo ra thêm chi phí vận hành (overhead) rất lớn, kém linh hoạt và chậm thích ứng hơn so với việc để coordinator tự xử lý bằng LLM sẵn có.<\/p><\/li><li><p><b>Đáp án D sai:<\/b> Việc phân loại dựa trên mẫu câu cố định (<b>predefined subagent combination<\/b>) sẽ quá cứng nhắc (hard-coded), không thể xử lý tốt các truy vấn mới, đa dạng và evolving mà người dùng liên tục tạo ra.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-036",
    "set": 1,
    "number": 36,
    "type": "single",
    "question": "<p>An engineer used Claude Code yesterday to investigate authentication flows in a legacy monolith, building up significant context over a 2-hour session. Today she wants to continue that specific investigation. She's worked on three other codebases since then and knows the session was named \"auth-deep-dive\".<\/p><p>How should she resume?<\/p>",
    "options": {
      "A": "<p>Use --continue to pick up where the most recent conversation left off<\/p>",
      "B": "<p>Use --resume auth-deep-dive to load that specific session by name<\/p>",
      "C": "<p>Use --session-id with the UUID from yesterday's session transcript file<\/p>",
      "D": "<p>Start fresh and re-read the same files<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Trong Claude Code, việc quản lý và tiếp tục các phiên làm việc (sessions) được thiết kế để hỗ trợ hiệu quả cho các luồng công việc dài hơi:<\/p><ul><li><p><b>Tại sao chọn B:<\/b> Claude Code cho phép người dùng đặt tên cho các phiên làm việc hoặc tự động lưu trữ chúng. Lệnh <code>--resume<\/code> đi kèm với tên phiên (session name) là cách trực tiếp và chuẩn xác nhất để khôi phục đúng ngữ cảnh, lịch sử trò chuyện và trạng thái mà kỹ sư đã xây dựng trước đó, ngay cả khi họ đã làm việc trên các codebase khác.<\/p><\/li><li><p><b>Tại sao các phương án khác không phù hợp:<\/b><\/p><ul><li><p><b>A (<code>--continue<\/code>):<\/b> Lệnh này thường chỉ dùng để tiếp tục phiên làm việc <b>gần nhất<\/b> (most recent). Vì kỹ sư đã làm việc trên 3 codebase khác kể từ hôm qua, lệnh này có khả năng cao sẽ tải nhầm phiên làm việc cuối cùng thay vì phiên \"auth-deep-dive\" mong muốn.<\/p><\/li><li><p><b>C (<code>--session-id<\/code>):<\/b> Mặc dù về mặt kỹ thuật có thể truy xuất qua ID, nhưng cách dùng tên (name) thân thiện và dễ nhớ hơn nhiều so với việc phải lục tìm UUID từ file transcript.<\/p><\/li><li><p><b>D (Start fresh):<\/b> Đây là cách làm thiếu hiệu quả vì nó làm mất đi toàn bộ ngữ cảnh (context) đã dày công xây dựng trong 2 giờ làm việc trước đó.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-037",
    "set": 1,
    "number": 37,
    "type": "single",
    "question": "<p>Users report that responses feel repetitive across turns—each message begins with phrases like \"Certainly!\" or \"I'd be happy to help!\" even deep into conversations. You want responses to feel more natural, without these repetitive openers.<\/p><p>What's the most effective approach?<\/p>",
    "options": {
      "A": "<p>Lower the temperature parameter to make response openings more deterministic and less variable<\/p>",
      "B": "<p>Add system prompt instructions specifying phrases to avoid, such as \"Never begin responses with 'Certainly' or similar affirmations\"<\/p>",
      "C": "<p>Implement post-processing to detect and strip common greeting phrases from response beginnings<\/p>",
      "D": "<p>Append a partial assistant message with a direct response opening that the model will continue from<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Tại sao D đúng?<\/b> Trong kỹ thuật prompt (đặc biệt là với các mô hình của Anthropic như Claude), việc sử dụng tính năng <b>Prefill Assistant Response<\/b> (tiền điền phản hồi của trợ lý) bằng cách bắt đầu sẵn nội dung câu trả lời (hoặc bỏ trống các từ đệm như \"Certainly!\") ép mô hình phải tiếp tục sinh văn bản từ điểm đó, giúp kiểm soát hoàn toàn câu mở đầu một cách ổn định nhất.<\/p><\/li><li><p><b>Tại sao các đáp án khác chưa tối ưu?<\/b><\/p><ul><li><p><i>A (Temperature):<\/i> Giảm temperature chỉ làm giảm tính ngẫu nhiên chứ không ngăn được thói quen tạo lời mở đầu rập khuôn của mô hình.<\/p><\/li><li><p><i>B (System Prompt):<\/i> Các mô hình ngôn ngữ lớn đôi khi vẫn bỏ qua các điều kiện phủ định dạng \"Không được bắt đầu bằng...\" trong system prompt.<\/p><\/li><li><p><i>C (Post-processing):<\/i> Xử lý hậu kỳ làm phức tạp hệ thống, có thể cắt nhầm nội dung và không giải quyết được gốc rễ vấn đề ở khâu sinh văn bản.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-038",
    "set": 1,
    "number": 38,
    "type": "single",
    "question": "<p>After adding an MCP server with specialized code refactoring tools (extract_function, rename_variable, inline_function), you notice the agent still uses basic text manipulation via Write and Bash sed commands for refactoring tasks. The MCP server is connected and working. Examining the configuration, you find each MCP tool has a minimal description like \"extract_function: extracts a function from code.\"<\/p><p>What's the most effective way to improve adoption of the MCP refactoring tools?<\/p>",
    "options": {
      "A": "<p>Remove the Write tool from the agent's configuration for refactoring sessions so it must use the MCP tools for code modifications.<\/p>",
      "B": "<p>Implement a request classifier that detects refactoring intent and automatically routes those requests to the MCP server before the agent processes them.<\/p>",
      "C": "<p>Accept this as expected behavior since simpler tools like sed are more predictable than specialized refactoring tools.<\/p>",
      "D": "<p>Enhance the MCP tool descriptions to explain when each tool is preferable to text manipulation and clarify expected inputs and outputs.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Trong các hệ thống AI sử dụng Model Context Protocol (MCP), mô hình ngôn ngữ lớn (LLM) đưa ra quyết định chọn công cụ dựa trên <b>mô tả (description)<\/b> của công cụ đó.<\/p><ul><li><p><b>Tại sao chọn D:<\/b> Khi mô tả công cụ quá sơ sài (như \"extract_function: extracts a function from code\"), LLM không có đủ thông tin về ngữ cảnh hoặc độ tin cậy của công cụ so với các phương pháp cũ (như <code>sed<\/code> hay <code>Write<\/code>). Bằng cách cải thiện mô tả—bao gồm các điều kiện cụ thể khi nào nên ưu tiên dùng công cụ, định dạng đầu vào/đầu ra mong đợi—bạn đang cung cấp \"hướng dẫn sử dụng\" tốt hơn cho AI. Điều này giúp AI tự tin chọn công cụ chuyên dụng thay vì quay về các phương pháp thủ công.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Việc xóa bỏ hoàn toàn các công cụ cơ bản (<code>Write<\/code>) là quá cực đoan và có thể làm mất khả năng xử lý các tình huống mà công cụ chuyên dụng không bao phủ hết.<\/p><\/li><li><p><b>B:<\/b> Việc xây dựng một bộ phân loại (classifier) nằm ngoài luồng xử lý thông thường sẽ làm hệ thống trở nên phức tạp, khó bảo trì và không tận dụng được khả năng tự suy luận của LLM.<\/p><\/li><li><p><b>C:<\/b> Đây không phải là hành vi mong đợi. Việc có các công cụ chuyên dụng nhưng không sử dụng được là dấu hiệu của việc cấu hình hoặc cấu trúc thông tin (meta-data) của công cụ chưa đủ tốt.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-039",
    "set": 1,
    "number": 39,
    "type": "single",
    "question": "<p>Your conversational AI tutor has a 2,800-token system prompt containing teaching methodology, persona guidelines, and detailed written instructions for adapting explanations to different proficiency levels. User testing reveals that in conversations exceeding 12 turns (approximately 4,000 tokens of conversation history), the assistant increasingly ignores the proficiency-adaptation guidelines, defaulting to intermediate-level explanations regardless of the learner's stated level.<\/p><p>What's the most effective approach to ensure consistent adherence to these guidelines throughout extended conversations?<\/p>",
    "options": {
      "A": "<p>After each assistant response, make a separate API call to evaluate whether the difficulty level matched the learner's profile, regenerating responses that don't align.<\/p>",
      "B": "<p>Inject a condensed reminder of the proficiency requirements into the conversation as a system message every 4-5 turns.<\/p>",
      "C": "<p>Restructure the system prompt to place the proficiency-adaptation rules in a clearly-marked final section immediately before the conversation history begins.<\/p>",
      "D": "<p>Replace the verbose proficiency guidelines with few-shot examples demonstrating appropriate responses at each proficiency level, showing concrete differences in vocabulary, complexity, and explanation depth.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p><strong>Vì sao D đúng?<\/strong><\/p><p>Đây là câu hỏi về <strong>prompt engineering<\/strong> và cách LLM tuân thủ hướng dẫn trong các cuộc hội thoại dài.<\/p><p>Vấn đề là:<\/p><ul><li>Prompt hiện có <strong>2.800 token<\/strong>.<\/li><li>Hướng dẫn điều chỉnh theo trình độ được viết dưới dạng các quy tắc dài.<\/li><li>Sau nhiều lượt hội thoại, mô hình bắt đầu \"quên\" hoặc giảm mức ưu tiên đối với những hướng dẫn trừu tượng này.<\/li><\/ul><p>Một nguyên tắc quan trọng khi làm việc với Claude (và các LLM hiện đại) là:<\/p><blockquote><p><strong>Show, don't just tell.<\/strong><\/p><\/blockquote><p>Few-shot examples thường hiệu quả hơn các hướng dẫn dài vì chúng cho mô hình thấy <strong>chính xác<\/strong> hành vi mong muốn.<\/p><p>Ví dụ:<\/p><p><strong>Beginner<\/strong><\/p><blockquote><p>Photosynthesis is how plants make food using sunlight.<\/p><\/blockquote><p><strong>Intermediate<\/strong><\/p><blockquote><p>Photosynthesis converts light energy into chemical energy stored in glucose.<\/p><\/blockquote><p><strong>Advanced<\/strong><\/p><blockquote><p>Photosynthesis involves light-dependent reactions followed by the Calvin cycle...<\/p><\/blockquote><p>Chỉ cần vài ví dụ như vậy, mô hình sẽ hiểu rõ hơn rất nhiều so với một đoạn mô tả dài như:<\/p><blockquote><p>\"When the learner is beginner, simplify vocabulary...\"<\/p><\/blockquote><p>Các LLM học theo mẫu rất mạnh, nên ví dụ cụ thể thường bền vững hơn trong các cuộc hội thoại dài.<\/p>"
  },
  {
    "id": "CCAR-F-040",
    "set": 1,
    "number": 40,
    "type": "single",
    "question": "<p>A critical bug is affecting production users. Error logs show exceptions in the OrderProcessing module with a clear stack trace pointing to a specific area, but you haven't worked with this module before.<\/p><p>What's the most effective approach?<\/p>",
    "options": {
      "A": "<p>Use plan mode to analyze the error in context of the module's design, enumerate potential root causes, and prioritize fixes systematically.<\/p>",
      "B": "<p>Enter plan mode to explore the module's architecture and dependencies before attempting any fix.<\/p>",
      "C": "<p>Use direct execution to examine the stack trace, read the relevant code, and implement a fix once you identify the root cause.<\/p>",
      "D": "<p>Start with direct execution to gather initial information, then switch to plan mode to design a comprehensive solution before implementing.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Đáp án đúng là: <b>C. Use direct execution to examine the stack trace, read the relevant code, and implement a fix once you identify the root cause.<\/b><\/p><p><b>Giải thích:<\/b><\/p><ul><li><p><b>Bối cảnh tình huống:<\/b> Đang xảy ra sự cố nghiêm trọng ảnh hưởng trực tiếp đến người dùng trên môi trường production (<b>critical bug in production<\/b>) và log đã ghi nhận được <b>stack trace chỉ rõ khu vực bị lỗi<\/b>.<\/p><\/li><li><p><b>Lý do chọn C:<\/b><\/p><ul><li><p>Khi có lỗi khẩn cấp xảy ra ở production và đã có stack trace cụ thể, ưu tiên hàng đầu là khắc phục nhanh chóng. Việc sử dụng <b>Direct Execution<\/b> giúp truy vết trực tiếp mã nguồn, nhanh chóng tìm ra nguyên nhân gốc rễ (root cause) và đưa ra bản sửa lỗi mà không tốn thời gian lập kế hoạch tổng thể không cần thiết.<\/p><\/li><\/ul><\/li><li><p><b>Lý do loại các đáp án khác:<\/b><\/p><ul><li><p><b>A &amp; B (Dùng Plan mode ngay từ đầu):<\/b> Plan mode thích hợp hơn cho việc thiết kế tính năng mới, tái cấu trúc hệ thống (refactoring) hoặc phân tích kiến trúc diện rộng. Việc dùng Plan mode khi đã có vị trí lỗi cụ thể trong tình huống sản sống (production issue) sẽ gây lãng phí thời gian xử lý sự cố.<\/p><\/li><li><p><b>D (Kết hợp cả hai):<\/b> Khi vị trí lỗi đã được khuynh vùng rõ qua stack trace, việc chuyển đổi qua lại giữa direct execution và plan mode làm kéo dài thời gian khôi phục dịch vụ.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-041",
    "set": 1,
    "number": 41,
    "type": "single",
    "question": "<p>Your extraction pipeline processes invoices and extracts line items, tax amounts, and grand totals. You discover that 8% of documents have extracted line item amounts that don't sum to the extracted grand total—the downstream accounting system has been detecting mismatches.<\/p><p>What's the most effective improvement?<\/p>",
    "options": {
      "A": "<p>Add a calculated_total field where the model extracts line items independently, then validate totals alongside a is_total_consistent boolean flag for human review when values differ.<\/p>",
      "B": "<p>Extract line items and totals independently, then use a separate validation model to reconcile discrepancies.<\/p>",
      "C": "<p>Implement post-processing that automatically adjusts line item amounts when the extracted total doesn't match the sum.<\/p>",
      "D": "<p>Add few-shot examples to the system prompt where extracted line items correctly sum to demonstrate the desired extraction behavior.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Đây là bài toán về <b>kiểm soát chất lượng dữ liệu (Data Quality Control)<\/b> trong quy trình trích xuất tự động.<\/p><ul><li><p><b>Tại sao chọn A:<\/b> Đây là phương pháp chủ động (proactive) và minh bạch nhất:<\/p><ul><li><p><b>Tính toàn vẹn:<\/b> Thay vì bắt AI cố gắng \"tự sửa\" (dễ dẫn đến ảo giác), bạn yêu cầu AI trích xuất thực tế những gì nó thấy. Sau đó, hệ thống sẽ thực hiện phép tính tổng (<code>calculated_total<\/code>) để đối chiếu với tổng cuối (<code>grand total<\/code>) đã được trích xuất.<\/p><\/li><li><p><b>Luồng xử lý thông minh:<\/b> Cờ <code>is_total_consistent<\/code> giúp lọc tự động. Nếu <code>false<\/code>, hệ thống ngay lập tức chuyển tài liệu đó vào hàng đợi cho con người kiểm duyệt (human-in-the-loop). Điều này đảm bảo dữ liệu đi vào hệ thống kế toán luôn chính xác, đồng thời tiết kiệm thời gian vì con người chỉ cần xem xét các trường hợp có sự sai lệch.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>B:<\/b> Việc dùng một \"validation model\" riêng biệt chỉ làm tăng chi phí vận hành (inference cost) và độ phức tạp cho hệ thống mà không chắc chắn giải quyết được tận gốc vấn đề (nếu model đầu tiên đã đọc sai dữ liệu từ hóa đơn, model thứ hai cũng sẽ gặp khó khăn tương tự).<\/p><\/li><li><p><b>C:<\/b> Đây là cách làm <b>rất nguy hiểm<\/b>. Việc tự động điều chỉnh số liệu (post-processing) mà không có sự kiểm chứng có thể làm sai lệch dữ liệu tài chính nghiêm trọng, dẫn đến việc hạch toán sai mà không ai hay biết.<\/p><\/li><li><p><b>D:<\/b> Few-shot prompting giúp cải thiện kết quả nhưng <b>không thể đảm bảo độ chính xác tuyệt đối<\/b>. Đối với các nghiệp vụ tài chính, bạn luôn cần một lớp kiểm tra logic (logic validation layer) như ở phương án A để bảo đảm tính đúng đắn trước khi dữ liệu được ghi nhận.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-042",
    "set": 1,
    "number": 42,
    "type": "single",
    "question": "<p>You're Implementing a feature where users refine their playlist preferences through multiple conversation turns. After deploying, you notice Claude's responses don't reflect what us earlier in the same conversation— for example, a user says they love jazz, but two messages later Claude asks what genres they enjoy.<\/p><p>What is the most likely cause?<\/p>",
    "options": {
      "A": "<p>The model's context window has been exceeded by the conversation length<\/p>",
      "B": "<p>Claude requires a vector database connection to maintain conversation memory<\/p>",
      "C": "<p>Your application isn't including prior messages in the messages array<\/p>",
      "D": "<p>The Claude API requires a session_id parameter that you haven't configured<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ol start=\"1\"><li><p><b>Bối cảnh bài toán:<\/b><\/p><ul><li><p>Trong một cuộc trò chuyện nhiều lượt (multi-turn conversation) nhằm tinh chỉnh sở thích nghe nhạc, Claude quên mất thông tin người dùng vừa cung cấp chỉ sau vài tin nhắn (ví dụ: vừa nói thích nhạc jazz nhưng ngay sau đó lại hỏi thích thể loại gì).<\/p><\/li><li><p>Mô hình ngôn ngữ lớn (LLM) vốn <b>không có bộ nhớ trạng thái nội bộ<\/b> (stateless) giữa các lần gọi API khác nhau.<\/p><\/li><\/ul><\/li><li><p><b>Lý do lựa chọn phương án C:<\/b><\/p><ul><li><p><b>Bản chất stateless của API:<\/b> Claude API (và hầu hết các API của LLM) hoạt động theo cơ chế stateless. Mỗi lần gọi API, ứng dụng của bạn phải gửi toàn bộ lịch sử trò chuyện (bao gồm các tin nhắn trước đó của cả user và assistant) vào mảng <code>messages<\/code> trong payload gửi lên.<\/p><\/li><li><p>Nếu ứng dụng quên không đưa các tin nhắn trước vào mảng này mà chỉ gửi tin nhắn mới nhất, mô hình sẽ không có ngữ cảnh về những gì đã trao đổi trước đó, dẫn đến việc \"quên\" thông tin ngay trong cùng một phiên chat.<\/p><\/li><\/ul><\/li><li><p><b>Loại trừ các phương án khác:<\/b><\/p><ul><li><p><b>Phương án A<\/b> sai vì chỉ mới qua vài tin nhắn thì không thể vượt quá giới hạn cửa sổ ngữ cảnh (context window) của mô hình.<\/p><\/li><li><p><b>Phương án B<\/b> sai vì Claude API không bắt buộc phải có cơ sở dữ liệu vector (vector database) chỉ để duy trì bộ nhớ trong một phiên chat ngắn hạn (multi-turn messages array là đủ).<\/p><\/li><li><p><b>Phương án D<\/b> sai vì Claude API không sử dụng tham số <code>session_id<\/code> để tự động quản lý lịch sử trò chuyện phía server theo cách đó.<\/p><\/li><\/ul><\/li><\/ol>"
  },
  {
    "id": "CCAR-F-043",
    "set": 1,
    "number": 43,
    "type": "single",
    "question": "<p>Your agent has spent 25 minutes exploring a game engine's rendering subsystem–reading shader code, buffer management, and frame synchronization logic. An engineer now asks it to understand how the physics engine integrates with rendering for collision debug overlays. You notice recent responses reference \"typical rendering patterns\" rather than the specific VulkanPipeline and FrameGraph classes it discovered earlier.<\/p><p>What's the most effective approach?<\/p>",
    "options": {
      "A": "<p>Continue in the current context with more targeted prompts referencing the specific classes by name.<\/p>",
      "B": "<p>Use /clear to reset context completely, then start fresh with physics exploration using file paths from the project's CLAUDE.md.<\/p>",
      "C": "<p>Spawn a sub-agent to explore physics independently, then manually synthesize its findings with the rendering knowledge accumulated in the main conversation.<\/p>",
      "D": "<p>Summarize key rendering findings, then spawn a sub-agent for physics exploration with that summary in its initial context.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Trong kiến trúc quản lý ngữ cảnh của các AI agent (đặc biệt là Claude Code), việc duy trì sự tập trung của model là rất quan trọng:<\/p><ul><li><p><b>Tại sao chọn D:<\/b><\/p><ul><li><p><b>Ngăn chặn \"Context Drift\":<\/b> Agent đã bắt đầu trả lời bằng những kiến thức chung (\"typical rendering patterns\"), điều này cho thấy ngữ cảnh về rendering đang bị \"loãng\" hoặc bị ghi đè khi bắt đầu chuyển sang chủ đề physics.<\/p><\/li><li><p><b>Tối ưu hóa hiệu năng:<\/b> Việc tóm tắt (summarize) giúp cô đọng những điểm quan trọng nhất (như <code>VulkanPipeline<\/code> và <code>FrameGraph<\/code>) thành một \"bản ghi nhớ\" ngắn gọn, giúp sub-agent tập trung vào nhiệm vụ mới (physics) mà vẫn nắm được mối liên kết cốt lõi với hệ thống rendering. Điều này giúp cả hai hệ thống (rendering và physics) không bị nhầm lẫn trong cùng một không gian làm việc.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Tiếp tục trong ngữ cảnh hiện tại sẽ làm tăng nguy cơ agent tiếp tục \"quên\" hoặc nhầm lẫn giữa các kiến thức chuyên sâu của rendering và physics do giới hạn của cửa sổ ngữ cảnh (context window).<\/p><\/li><li><p><b>B:<\/b> Việc dùng <code>/clear<\/code> sẽ xóa sạch 25 phút nghiên cứu quý giá về rendering, khiến agent mất đi nền tảng cần thiết để hiểu sự tích hợp giữa rendering và physics.<\/p><\/li><li><p><b>C:<\/b> Việc tự mình \"tổng hợp thủ công\" (manually synthesize) là một cách làm tốn sức lao động của con người, đi ngược lại với mục tiêu sử dụng AI agent để tự động hóa các tác vụ phức tạp.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-044",
    "set": 1,
    "number": 44,
    "type": "single",
    "question": "<p>The coordinator agent has AgentFunctions configured for all four specialized subagents, each with appropriate descriptions and restrictions. During testing, you find the coordinator sometimes fails to delegate—it writes \"I'll ask the web search agent to find sources\" without actually invoking it.<\/p><p>What is the most likely cause?<\/p>",
    "options": {
      "A": "<p>The AgentFunctions are configured correctly, but the coordinator's system prompt includes a statement that prevents it from knowing the available subagent types.<\/p>",
      "B": "<p>Subagent context limit descriptions from the coordinator don't provide enough context; you need to configure explicit context content between coordinator and tool descriptions.<\/p>",
      "C": "<p>The coordinator's max_tokens setting is too low, causing the Task tool invocation to be truncated before the subagent parameter can be specified.<\/p>",
      "D": "<p>The coordinator's allowed Tools configuration doesn't include \"Task\", so while it can describe delegation, it cannot actually invoke the tool required to spawn subagents.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Lý do chọn D:<\/b> Khi một agent đóng vai trò điều phối (coordinator) nhận biết được sự cần thiết phải ủy quyền công việc cho các agent con (subagents) nhưng lại chỉ viết ra câu tường thuật (như <i>\"I'll ask the web search agent...\"<\/i>) mà không thực hiện lệnh gọi công cụ (tool invocation), nguyên nhân phổ biến nhất là do <b>quyền hạn (permissions) của coordinator chưa được cấu hình cho phép sử dụng công cụ \"Task\"<\/b> (hoặc công cụ ủy quyền). Do thiếu quyền này, LLM hiểu được ý định và mô tả hành động bằng văn bản, nhưng hệ thống thực tế chặn hoặc không có công cụ để kích hoạt việc sinh ra subagent.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Các <code>AgentFunctions<\/code> đã được cấu hình đúng mô tả và hạn chế, vấn đề nằm ở lớp thực thi công cụ chứ không phải system prompt xóa mất nhận thức về loại subagent.<\/p><\/li><li><p><b>B:<\/b> Vấn đề không nằm ở giới hạn ngữ cảnh của subagent hay việc thiếu cấu hình nội dung ngữ cảnh bổ sung.<\/p><\/li><li><p><b>C:<\/b> Việc gọi công cụ chưa bao giờ diễn ra chứ không phải bị cắt cụt (truncated) do <code>max_tokens<\/code> thấp.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-045",
    "set": 1,
    "number": 45,
    "type": "single",
    "question": "<p>When analyzing complex legal cases that cite multiple precedents, the document analysis subagent processes each sequentially. A landmark case citing 12 precedents takes over 3 minutes to analyze completely.<\/p><p>What's the most effective way to reduce this latency while preserving the coordinator's ability to monitor and debug the system?<\/p>",
    "options": {
      "A": "<p>Implement a message queue where precedent analysis tasks are processed asynchronously by a pool of worker agents.<\/p>",
      "B": "<p>Create a recursive agent hierarchy where analysis agents subdivide work among child agents until reaching single-precedent granularity.<\/p>",
      "C": "<p>Have the coordinator spawn parallel document analysis subagents, each handling a subset of precedents, then aggregate results before synthesis.<\/p>",
      "D": "<p>Enable the document analysis subagent to spawn its own specialized subagents dynamically when it encounters cases with many citations.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Đáp án đúng: <b>[C]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn C:<\/b><\/p><ul><li><p>Để giảm thời gian xử lý (giảm latency) đối với một tài liệu lớn có chứa nhiều tiền lệ pháp lý (precedents), phương pháp tối ưu và phổ biến nhất trong kiến trúc đa agent là <b>để coordinator chia nhỏ công việc và giao cho nhiều subagent chạy song song<\/b> (parallel subagents), mỗi agent xử lý một tập con các precedents, sau đó gom kết quả lại.<\/p><\/li><li><p>Cách này vừa giúp xử lý song song giảm đáng kể thời gian chờ đợi, vừa đảm bảo coordinator vẫn giữ quyền kiểm soát trực tiếp toàn bộ các subagent con này để dễ dàng theo dõi (monitor) và gỡ lỗi (debug).<\/p><\/li><\/ul><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Sử dụng hàng đợi thông điệp bất đồng bộ (message queue) và worker pool làm tăng độ phức tạp kiến trúc hạ tầng ngoài phạm vi thiết kế agent thông thường và làm giảm khả năng theo dõi trực tiếp của coordinator.<\/p><\/li><li><p><b>B:<\/b> Tạo phân cấp agent đệ quy quá sâu (multi-level recursive hierarchy) không cần thiết và làm phức tạp quá mức việc debug.<\/p><\/li><li><p><b>D:<\/b> Cho phép subagent tự động sinh ra các subagent con của riêng nó (nested spawning) làm mất đi khả năng kiểm soát tập trung trực tiếp của coordinator, gây khó khăn cho việc giám sát và debug hệ thống.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-046",
    "set": 1,
    "number": 46,
    "type": "single",
    "question": "<p>After your daily batch of 10,000 documents completes, 300 documents (3%) failed with \"context_length_exceeded\" errors. The results file identifies each failure by custom_id.<\/p><p>What's the most cost-effective approach to process these failures?<\/p>",
    "options": {
      "A": "<p>Resubmit the entire 10,000 document batch using a model tier with a larger context window<\/p>",
      "B": "<p>Reprocess the entire batch with prompt caching enabled to reduce the cost of retrying requests with identical system prompts<\/p>",
      "C": "<p>Increase the max_tokens parameter for the 300 failed documents and resubmit them in a new batch<\/p>",
      "D": "<p>Resubmit only the 300 failed documents after chunking them into smaller pieces, then combine the partial extractions<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Trong các bài toán xử lý hàng loạt (batch processing), lỗi <code>context_length_exceeded<\/code> có nghĩa là tài liệu đầu vào vượt quá giới hạn ngữ cảnh cho phép của model tại thời điểm đó.<\/p><ul><li><p><b>Tại sao chọn D:<\/b> Đây là giải pháp <b>hiệu quả và tiết kiệm chi phí nhất<\/b>:<\/p><ul><li><p><b>Tối ưu hóa tài nguyên:<\/b> Bạn chỉ cần xử lý lại đúng 300 tài liệu bị lỗi thay vì phải chạy lại toàn bộ 10.000 tài liệu (phương án A và B) – điều này giúp tiết kiệm đáng kể chi phí API.<\/p><\/li><li><p><b>Giải quyết triệt để lỗi:<\/b> Bằng cách chia nhỏ (chunking) tài liệu, bạn đưa nội dung về trong phạm vi giới hạn của ngữ cảnh (context window), sau đó kết hợp các phần trích xuất (combine extractions) để có được kết quả hoàn chỉnh. Điều này trực tiếp giải quyết nguyên nhân gốc rễ của lỗi <code>context_length_exceeded<\/code>.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Việc chạy lại cả 10.000 tài liệu là lãng phí tài nguyên và tiền bạc cực lớn chỉ để sửa 300 lỗi.<\/p><\/li><li><p><b>B:<\/b> Prompt caching giúp giảm chi phí cho phần prompt chung, nhưng việc xử lý lại 9.700 tài liệu đã thành công là không cần thiết.<\/p><\/li><li><p><b>C:<\/b> Việc tăng <code>max_tokens<\/code> (đầu ra) không giúp giải quyết lỗi <code>context_length_exceeded<\/code> (lỗi này liên quan đến kích thước đầu vào – input tokens), do đó phương án này hoàn toàn không khắc phục được vấn đề.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-047",
    "set": 1,
    "number": 47,
    "type": "single",
    "question": "<p>Your extraction pipeline processes restaurant menus and must output structured JSON with fields for item names, descriptions, prices, and dietary tags. Some menus use inconsistent formatting–prices as \"$12\" vs \"12.00\", dietary info as icons vs text.<\/p><p>What's the most reliable approach?<\/p>",
    "options": {
      "A": "<p>Extract data as-is and normalize formats in post-processing code after Claude returns.<\/p>",
      "B": "<p>Use separate extraction calls for each field to ensure consistent handling of each type.<\/p>",
      "C": "<p>Request multiple extraction attempts per document and select the most common format.<\/p>",
      "D": "<p>Define a strict output schema and include format normalization rules in your prompt.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Trong các bài toán trích xuất dữ liệu (data extraction), mục tiêu là đạt được kết quả đồng nhất từ các tài liệu có cấu trúc không đồng nhất.<\/p><ul><li><p><b>Tại sao chọn D:<\/b> Đây là giải pháp <b>tối ưu nhất về hiệu quả và tính bền vững<\/b>:<\/p><ul><li><p><b>Strict Output Schema (JSON Schema):<\/b> Việc định nghĩa một schema nghiêm ngặt giúp ép buộc mô hình phải trả về đúng cấu trúc mong đợi (ví dụ: <code>price<\/code> luôn là <code>number<\/code> hoặc <code>string<\/code> theo một format định sẵn).<\/p><\/li><li><p><b>Format Normalization Rules:<\/b> Thay vì để mô hình \"đoán\" hoặc để lại lỗi cho code hậu kiểm, việc cung cấp quy tắc chuẩn hóa ngay trong prompt (ví dụ: \"Luôn định dạng giá tiền thành số thập phân có 2 chữ số, loại bỏ ký tự '$'\", \"Chuyển đổi icon ăn kiêng sang nhãn văn bản chuẩn: 'vegetarian', 'vegan', 'gluten-free'\") giúp mô hình xử lý ngay tại thời điểm suy luận (inference time). Điều này tận dụng khả năng ngôn ngữ của Claude để thực hiện logic chuyển đổi một cách chính xác.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Hậu kiểm (post-processing) là phương pháp thụ động. Nếu dữ liệu đầu ra không ổn định ngay từ đầu, code của bạn sẽ phải đối mặt với hàng loạt trường hợp ngoại lệ (edge cases), làm tăng độ phức tạp của code.<\/p><\/li><li><p><b>B:<\/b> Gọi nhiều lần (multiple calls) cho mỗi trường sẽ làm tăng chi phí API, tăng độ trễ (latency) của hệ thống và quan trọng nhất là làm mất đi <b>ngữ cảnh liên kết<\/b> (ví dụ: giá của món ăn này phải đi với mô tả của món ăn đó).<\/p><\/li><li><p><b>C:<\/b> Việc lấy \"kết quả phổ biến nhất\" (majority vote) từ nhiều lần chạy là cực kỳ tốn kém và không giải quyết được vấn đề nếu mô hình vốn đã hiểu sai quy tắc định dạng. Nó chỉ làm giảm xác suất lỗi ngẫu nhiên chứ không sửa được lỗi hệ thống.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-048",
    "set": 1,
    "number": 48,
    "type": "single",
    "question": "<p>After implementing tool use with strict schema definitions, JSON syntax errors are eliminated, but 5% of extractions still have valid JSON with empty arrays or null values for required fields like citations and methodology. Spot-checking reveals that source documents contain this information, but in varied formats–inline citations vs. bibliographies, methodology sections vs. details embedded in introductions.<\/p><p>What's the most effective way to address these failures?<\/p>",
    "options": {
      "A": "<p>Modify your schema to make citations and methodology optional, and flag incomplete records for manual review rather than failing validation.<\/p>",
      "B": "<p>Build a regex-based post-processing layer that scans source documents for citation patterns and methodology keywords, populating empty fields when the model fails to extract.<\/p>",
      "C": "<p>Implement retry logic that re-sends requests when validation detects empty required fields.<\/p>",
      "D": "<p>Add few-shot examples demonstrating extractions from documents with varied structures–showing how to identify citations in different formats and locate methodology details across section types.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Đây là bài toán điển hình về việc mô hình gặp khó khăn trong việc khái quát hóa (generalization) thông tin do sự đa dạng về định dạng dữ liệu trong tài liệu nguồn.<\/p><ul><li><p><b>Tại sao chọn D:<\/b><\/p><ul><li><p><b>Few-shot prompting<\/b> là kỹ thuật hiệu quả nhất để giải quyết sự không nhất quán trong cấu trúc tài liệu. Khi bạn cung cấp các ví dụ cụ thể (input-output pairs) cho thấy cách trích xuất cùng một loại thông tin (citations, methodology) từ nhiều cấu trúc khác nhau (inline, bibliography, intro, methodology section), bạn đang dạy mô hình cách <b>nhận diện và chuẩn hóa<\/b> thông tin đó.<\/p><\/li><li><p>Nó giúp mô hình hiểu rằng nhiệm vụ không chỉ là tìm các phần có tên gọi cụ thể (ví dụ: \"Methodology\"), mà là tìm <b>nội dung<\/b> tương ứng bất kể nó nằm ở đâu hay được trình bày ra sao.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Làm cho các trường thông tin trở nên tùy chọn (optional) sẽ làm giảm chất lượng dữ liệu đầu ra và không giải quyết được vấn đề thực chất là mô hình đang \"bỏ lỡ\" thông tin.<\/p><\/li><li><p><b>B:<\/b> Sử dụng <code>regex<\/code> là phương pháp cứng nhắc. Các văn bản pháp lý hoặc kỹ thuật phức tạp thường không tuân theo các pattern cố định. Việc duy trì các bộ lọc <code>regex<\/code> này sẽ rất khó khăn và dễ bị lỗi khi tài liệu thay đổi cấu trúc.<\/p><\/li><li><p><b>C:<\/b> Việc thử lại (retry) khi không có thay đổi trong prompt hoặc ngữ cảnh chỉ gây lãng phí tài nguyên (tokens/latency) mà không làm tăng khả năng thành công của mô hình, vì mô hình vẫn sẽ gặp cùng một khó khăn như lần thử đầu tiên.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-049",
    "set": 1,
    "number": 49,
    "type": "single",
    "question": "<p>Your remove_team_member tool uses a dry_run: boolean parameter for previewing impacts before execution. Production monitoring shows the agent bypasses the preview step in 15% of calls by calling with dry_run=false directly. You need to ensure every removal is preceded by a preview that the user explicitly confirms.<\/p><p>What is the most reliable approach?<\/p>",
    "options": {
      "A": "<p>Annotate the tool as requiring confirmation and configure the orchestration layer to prompt the user for approval before forwarding any calls to annotated tools.<\/p>",
      "B": "<p>Add detailed instructions and few-shot examples to the tool description requiring the agent to always call with dry_run=true first and wait for user confirmation before calling with dry_run=false.<\/p>",
      "C": "<p>Add server-side validation that permits dry_run=false only when a dry_run=true call with identical parameters occurred within the past 60 seconds.<\/p>",
      "D": "<p>Replace with two tools: preview_remove_member returns impact details and a single-use confirmation token; execute_remove_member requires that token, binding execution to the specific previewed action.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Bối cảnh bài toán:<\/b><\/p><ul><li><p>Công cụ hiện tại <code>remove_team_member<\/code> dùng tham số <code>dry_run: boolean<\/code> để preview, nhưng agent vẫn bỏ qua bước này trong 15% trường hợp bằng cách gọi thẳng <code>dry_run=false<\/code>.<\/p><\/li><li><p>Yêu cầu bắt buộc là phải đảm bảo mọi thao tác xóa <b>luôn luôn<\/b> phải đi kèm với một bước preview và có sự xác nhận rõ ràng từ phía người dùng.<\/p><\/li><\/ul><\/li><li><p><b>Lý do lựa chọn phương án D:<\/b><\/p><ul><li><p><b>Mô hình lập trình hướng kiến trúc (Architectural Enforcement):<\/b> Thay vì phụ thuộc vào việc mô hình tuân thủ prompt (dễ bị bỏ qua hoặc Hallucination), phương án tốt nhất trong thiết kế Agent là thay đổi thiết kế công cụ để làm cho hành vi sai trở thành <b>bất khả thi về mặt kỹ thuật<\/b>.<\/p><\/li><li><p>Bằng cách chia làm 2 công cụ (<code>preview<\/code> trả về token xác thực dùng một lần và <code>execute<\/code> bắt buộc phải có token đó), agent buộc phải thực hiện lệnh preview trước mới lấy được token để chạy lệnh thực thi. Điều này ngăn chặn hoàn toàn việc gọi trực tiếp <code>dry_run=false<\/code>.<\/p><\/li><li><p>Các phương án khác (như A, B, C) phụ thuộc vào cấu hình lớp điều phối hoặc nhắc nhở (prompting), vốn kém tin cậy hơn và vẫn có xác suất bị agent lách qua khi gặp tình huống phức tạp.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-050",
    "set": 1,
    "number": 50,
    "type": "single",
    "question": "<p>Your extraction uses tool use with a JSON schema where property_type is defined as an enum: ['house', 'apartment', 'condo', 'townhouse']. After deployment, 8% of extractions fail schema validation. Investigation reveals listings mention many uncommon property types –\"studio\", \"loft\", \"duplex\", \"mobile home\", \"tiny house\", \"converted warehouse\"–and new types continue appearing regularly.<\/p><p>What's the most effective long-term solution?<\/p>",
    "options": {
      "A": "<p>Continuously expand the enum to include newly observed property types and add monitoring for additional edge cases.<\/p>",
      "B": "<p>Change property_type from an enum to a free-form string and implement a normalization step in post-processing.<\/p>",
      "C": "<p>Add an \"other\" value to your enum with a separate property_type_detail string field for specifics when \"other\" is selected.<\/p>",
      "D": "<p>Add few-shot examples to your prompt demonstrating how to map unexpected property types to the closest existing enum value.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Đây là bài toán quản lý dữ liệu linh hoạt (flexible data modeling) khi đối mặt với một tập hợp giá trị không cố định và liên tục thay đổi (open-ended classification).<\/p><ul><li><p><b>Tại sao chọn C:<\/b> Đây là giải pháp <b>bền vững và sạch sẽ nhất (best practice)<\/b>:<\/p><ul><li><p><b>Bảo toàn cấu trúc (Schema Integrity):<\/b> Bạn vẫn giữ được các giá trị chuẩn trong enum để phục vụ các phân tích thống kê cốt lõi.<\/p><\/li><li><p><b>Khả năng mở rộng:<\/b> Bằng cách thêm trường <code>property_type_detail<\/code> (một trường tự do), bạn không bao giờ phải lo lắng về việc schema bị lỗi khi xuất hiện các loại hình bất động sản mới. Mô hình có thể thoải mái ghi chú \"duplex\" hay \"tiny house\" mà không vi phạm validation rules.<\/p><\/li><li><p><b>Dữ liệu sạch:<\/b> Sau này, bạn có thể dễ dàng lọc các mục \"other\" và dựa trên dữ liệu trong trường <code>property_type_detail<\/code> để quyết định xem có cần thêm các giá trị mới vào enum chính thức hay không.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Đây là cách làm \"chạy theo sự vụ\" (reactive). Bạn sẽ phải liên tục cập nhật enum và triển khai lại (re-deploy) code mỗi khi có loại bất động sản mới, điều này tạo ra gánh nặng bảo trì rất lớn.<\/p><\/li><li><p><b>B:<\/b> Việc đổi sang free-form string sẽ làm mất tính toàn vẹn của dữ liệu. Bạn sẽ sớm gặp phải cảnh dữ liệu bị phân mảnh: \"House\", \"house \", \"house.\", \"single-family house\"... khiến việc tổng hợp thống kê trở nên cực kỳ khó khăn.<\/p><\/li><li><p><b>D:<\/b> Việc ép buộc mô hình ánh xạ các kiểu lạ vào các kiểu hiện có (ví dụ: ép \"mobile home\" vào \"house\") là <b>sai lệch thông tin<\/b> nghiêm trọng, làm giảm chất lượng dữ liệu của bạn ngay từ nguồn.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-051",
    "set": 1,
    "number": 51,
    "type": "single",
    "question": "<p>Your agent has analyzed a complex service module–reading 23 source files, tracing request flows, and identifying error handling patterns. A developer wants to compare two testing strategies before committing to one: end-to-end tests with mocked external services vs. snapshot tests capturing expected outputs. They need to independently develop both approaches to evaluate trade-offs.<\/p><p>How should you manage the sessions?<\/p>",
    "options": {
      "A": "<p>Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy.<\/p>",
      "B": "<p>Export the analysis session's key findings to a file, then create two new sessions that reference this file.<\/p>",
      "C": "<p>Continue in the original session, developing end-to-end tests first, then snapshot tests sequentially.<\/p>",
      "D": "<p>Start two fresh sessions, having each re-read the relevant source files before beginning.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Trong các hệ thống AI làm việc với codebase phức tạp, việc duy trì ngữ cảnh là tối quan trọng, đặc biệt khi cần đánh giá các phương án thử nghiệm đối nghịch nhau mà không muốn làm nhiễu dữ liệu.<\/p><ul><li><p><b>Tại sao chọn A:<\/b> Tính năng <code>fork_session<\/code> được thiết kế chuyên biệt cho tình huống này. Nó cho phép:<\/p><ul><li><p><b>Thừa hưởng toàn bộ ngữ cảnh:<\/b> Cả hai nhánh đều giữ nguyên các thông tin, patterns và kiến trúc mà AI đã phân tích từ 23 source files trước đó, giúp bạn không mất thời gian nạp lại dữ liệu.<\/p><\/li><li><p><b>Tách biệt logic (Isolation):<\/b> Việc phát triển \"end-to-end tests\" ở nhánh này và \"snapshot tests\" ở nhánh kia hoàn toàn độc lập. Các thay đổi hoặc giả định của phương án này sẽ không ảnh hưởng đến phương án kia, giúp so sánh kết quả chính xác hơn.<\/p><\/li><li><p><b>Hiệu quả:<\/b> Đây là cách làm \"đúng quy trình\" nhất để quản lý các nhánh thử nghiệm trong một luồng công việc AI, thay vì phải xuất/nhập file (B) hoặc thực hiện tuần tự gây quá tải (C).<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>B:<\/b> Mất công sức và không hiệu quả. Việc xuất/nhập file thủ công thường dẫn đến mất mát các chi tiết ngữ cảnh tinh vi mà AI đã \"nhớ\" được trong quá trình phân tích.<\/p><\/li><li><p><b>C:<\/b> Phát triển tuần tự không giúp đánh giá song song (trade-off) tốt bằng việc tách nhánh, đồng thời các thay đổi code của phương án đầu có thể làm \"ô nhiễm\" hoặc làm sai lệch kết quả của phương án sau.<\/p><\/li><li><p><b>D:<\/b> Việc bắt đầu lại từ đầu là lãng phí tài nguyên và thời gian, đồng thời AI có thể bỏ sót các chi tiết nhỏ đã được xác định trước đó do không có sự tiếp nối ngữ cảnh (context continuity).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-052",
    "set": 1,
    "number": 52,
    "type": "single",
    "question": "<p>Your system extracts event metadata (date, location, organizer, attendee_count) from news articles using a JSON schema with all nullable fields. During evaluation, you observe the model frequently generates plausible but incorrect values for fields not mentioned in the article–for example, outputting \"500\" for attendee_count when the source contains no attendance information.<\/p><p>What's the most effective way to reduce these false extractions?<\/p>",
    "options": {
      "A": "<p>Upgrade to a more capable model tier with improved instruction-following to reduce hallucination tendencies.<\/p>",
      "B": "<p>Make all schema fields required (non-nullable) with strict validation rules to ensure the model only outputs verifiable data.<\/p>",
      "C": "<p>Add prompt instructions to return null for any field where information is not directly stated in the source.<\/p>",
      "D": "<p>Add a post-processing step using a second LLM call to verify each extracted value exists in the source document.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Khi hệ thống gặp tình trạng \"ảo giác\" (hallucination) trong trích xuất dữ liệu — tức là model tự điền các giá trị hợp lý nhưng không có thật thay vì bỏ trống — cách tiếp cận <b>trực tiếp và hiệu quả nhất<\/b> là điều chỉnh các chỉ dẫn (instructions) trong prompt.<\/p><ul><li><p><b>Tại sao chọn C:<\/b><\/p><ul><li><p><b>Ngăn chặn hành vi giả định:<\/b> LLM thường được huấn luyện để trở nên \"hữu ích\" và hoàn thành các trường thông tin. Khi bạn cung cấp chỉ dẫn rõ ràng và mạnh mẽ (explicit instruction) rằng \"nếu thông tin không có, hãy trả về <code>null<\/code> (hoặc <code>None<\/code>)\", bạn đang thiết lập một \"bộ lọc\" hành vi ngay tại thời điểm suy luận (inference time). Điều này buộc mô hình phải dựa hoàn toàn vào dữ liệu đầu vào thực tế thay vì cố gắng suy diễn từ kiến thức sẵn có.<\/p><\/li><li><p><b>Chi phí thấp &amp; hiệu quả cao:<\/b> Đây là thay đổi ở mức cấu hình prompt, không yêu cầu thay đổi cơ sở hạ tầng (như việc thêm post-processing model) hay thay đổi schema phức tạp.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Nâng cấp model có thể giúp cải thiện đôi chút, nhưng ngay cả các model mạnh nhất vẫn có xu hướng suy diễn nếu prompt không yêu cầu nghiêm ngặt việc xử lý thông tin thiếu hụt.<\/p><\/li><li><p><b>B:<\/b> Việc bắt buộc (required) các trường dữ liệu sẽ khiến mô hình \"bế tắc\" hoặc buộc nó phải bịa ra dữ liệu để thỏa mãn điều kiện schema, điều này thực chất làm trầm trọng thêm vấn đề thay vì giải quyết nó.<\/p><\/li><li><p><b>D:<\/b> Việc thêm một bước LLM thứ hai (post-processing) là một giải pháp tốn kém về mặt chi phí vận hành (latency và token cost) và vẫn có thể thất bại nếu chính model thứ hai cũng bị \"ảo giác\" hoặc hiểu sai dữ liệu gốc. Prompt engineering (C) luôn là bước đầu tiên cần ưu tiên.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-053",
    "set": 1,
    "number": 53,
    "type": "single",
    "question": "<p>Your extraction pipeline processes invoices and extracts line items, subtotals, tax amounts, and grand totals. During evaluation, you discover that in 18% of extractions, the sum of extracted line item amounts doesn't match the extracted grand total—sometimes due to OCR errors in the source document, sometimes due to extraction mistakes by the model. Downstream accounting systems reject records with mismatched totals.<\/p><p>What's the most effective approach to improve extraction reliability?<\/p>",
    "options": {
      "A": "<p>Extract line items and totals independently, then use a separate validation model to reconcile discrepancies by determining which extracted values are most likely correct.<\/p>",
      "B": "<p>Add few-shot examples demonstrating invoices where extracted line items sum correctly to the stated total, encouraging the model to produce mathematically consistent extractions.<\/p>",
      "C": "<p>Add a \"calculated_total\" field where the model sums extracted line items alongside a \"stated_total\" field. Flag records for human review when values differ.<\/p>",
      "D": "<p>Implement post-processing that automatically adjusts line item amounts proportionally when their sum doesn't match the stated total.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><b>Đáp án đúng:<\/b> <b>[C]<\/b> <i>(Add a \"calculated_total\" field where the model sums extracted line items alongside a \"stated_total\" field. Flag records for human review when values differ.)<\/i><\/p><hr/><h3><b>Giải thích chi tiết:<\/b><\/h3><ul><li><p><b>Tại sao phương án [C] là tối ưu nhất?<\/b><\/p><ul><li><p>Trong các hệ thống xử lý tài chính/hóa đơn tự động, việc tự ý chỉnh sửa dữ liệu (như tự ý phân bổ lại tiền ở phương án D) hoặc để mô hình tự suy luận mà không có cơ chế kiểm soát có thể dẫn đến <b>sai lệch dữ liệu tài chính nghiêm trọng<\/b>, ảnh hưởng đến tính pháp lý và sổ sách kế toán.<\/p><\/li><li><p>Việc tách biệt rõ ràng giữa <b><code>calculated_total<\/code><\/b> (tổng do mô hình tự tính từ các dòng line items) và <b><code>stated_total<\/code><\/b> (tổng thực tế ghi trên hóa đơn) cho phép hệ thống phát hiện chính xác lỗi (do lỗi OCR hoặc lỗi mô hình).<\/p><\/li><li><p>Đánh dấu (<b>flag<\/b>) các bản ghi không khớp để <b>review thủ công (human review)<\/b> là phương pháp chuẩn mực trong các kiến trúc AI tài chính đòi hỏi độ chính xác cao tuyệt đối, ngăn chặn việc dữ liệu sai bị đẩy thẳng vào hệ thống kế toán hạ nguồn (downstream accounting systems).<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>[A]<\/b> Sử dụng thêm một model phụ riêng biệt vừa tốn kém chi phí, tăng độ trễ (latency) vừa không giải quyết được tận gốc vấn đề dữ liệu gốc bị lỗi OCR hoặc trích xuất nhầm từ đầu.<\/p><\/li><li><p><b>[B]<\/b> Few-shot examples có thể giúp giảm một phần lỗi của model, nhưng không thể khắc phục được tận gốc các trường hợp <b>lỗi OCR<\/b> từ văn bản gốc (nguồn tài liệu gốc đã bị sai số từ đầu).<\/p><\/li><li><p><b>[D]<\/b> Tự động điều chỉnh tỉ lệ (proportional adjustment) là hành vi tự ý \"bóp méo\" số liệu gốc của hóa đơn, cực kỳ rủi ro trong kế toán và kiểm toán vì làm sai lệch số tiền thực tế giao dịch.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-054",
    "set": 1,
    "number": 54,
    "type": "single",
    "question": "<p>Your system has been operating with 100% human review for 3 months. Analysis shows that extractions with model confidence &gt;90% have 97% accuracy overall. To reduce reviewer workload, you plan to automate high-confidence extractions<\/p><p>Before deploying, what validation step is most critical?<\/p>",
    "options": {
      "A": "<p>Analyze accuracy by document type and field to verify high-confidence extractions perform consistently across all segments, not just in aggregate.<\/p>",
      "B": "<p>Run a two-week pilot routing 25% of high-confidence extractions directly to downstream systems and monitor error reports.<\/p>",
      "C": "<p>Compare accuracy at different confidence thresholds (85%, 90%, 95%) to find the optimal cutoff that maximizes automation while minimizing errors.<\/p>",
      "D": "<p>Verify that 97% accuracy meets requirements for all downstream systems that consume the extracted data.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b><\/p><ul><li><p>Nguyên tắc kiểm định dữ liệu quan trọng nhất trước khi tự động hóa (automation threshold) là tránh <b>thiên vị gộp (Simpson's Paradox / Aggregate Bias)<\/b>.<\/p><\/li><li><p>Độ chính xác tổng thể 97% có thể làm giấu đi những phân đoạn rủi ro lớn. Ví dụ: hệ thống đạt 99% chính xác ở các trường thông tin đơn giản (tên, ngày tháng), nhưng chỉ đạt 60% ở các trường critical (số tiền, điều khoản hợp đồng) hoặc đối với các loại tài liệu phức tạp. Phân tích chi tiết theo từng loại tài liệu và trường dữ liệu (<b>document type and field<\/b>) giúp đảm bảo không có phân đoạn nào bị suy giảm chất lượng nghiêm trọng trước khi bỏ qua kiểm duyệt thủ công.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>B sai:<\/b> So sánh ngưỡng tin cậy để tìm cutoff là bước tối ưu hóa sau khi đã xác nhận độ ổn định và an toàn của dữ liệu theo từng phân đoạn.<\/p><\/li><li><p><b>C sai:<\/b> Chạy thử nghiệm pilot 25% mà chưa kiểm tra độ chính xác theo phân đoạn có thể vô tình đẩy các dữ liệu trích xuất sai nghiêm trọng vào hệ thống downstream.<\/p><\/li><li><p><b>D sai:<\/b> Xác nhận yêu cầu của downstream systems là cần thiết nhưng không phải là bước <b>kiểm định dữ liệu (validation step)<\/b> đối với mô hình extraction.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-055",
    "set": 1,
    "number": 55,
    "type": "single",
    "question": "<p>Your extraction system processes two document types: standard monthly reports (archived after processing) and urgent exception reports (must trigger business alerts within 30 minutes of receipt). Both use the same JSON schema. You want to minimize API costs while meeting latency requirements.<\/p><p>How should you architect the processing pipeline?<\/p>",
    "options": {
      "A": "<p>Queue all documents and submit hourly batches, flagging urgent documents for expedited handling when batch results return.<\/p>",
      "B": "<p>Route standard reports to the Batch API for 50% cost savings, and route urgent exception reports to the real-time Messages API.<\/p>",
      "C": "<p>Submit all documents to the real-time Messages API to ensure consistent processing latency across document types.<\/p>",
      "D": "<p>Submit all documents to the Batch API with custom_ids for tracking. When results arrive, immediately process urgent documents and trigger delayed alerts for exceptions.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Đây là bài toán cân bằng giữa <b>chi phí (cost)<\/b> và <b>thời gian phản hồi (latency/SLA)<\/b> trong kiến trúc hệ thống AI:<\/p><ul><li><p><b>Tại sao chọn B:<\/b><\/p><ul><li><p><b>Tối ưu chi phí:<\/b> Các tài liệu \"standard monthly reports\" không yêu cầu xử lý ngay lập tức. Sử dụng <b>Batch API<\/b> cho loại tài liệu này giúp bạn tận dụng mức giảm giá <b>50%<\/b> chi phí, đây là cách hiệu quả nhất để tối ưu ngân sách.<\/p><\/li><li><p><b>Đáp ứng SLA nghiêm ngặt:<\/b> Các tài liệu \"urgent exception reports\" có yêu cầu thời gian phản hồi cực nhanh (<b>dưới 30 phút<\/b>). Batch API (với thời gian xử lý có thể lên tới 24 giờ) không thể đáp ứng được yêu cầu này. Việc định tuyến (route) các tài liệu này qua <b>Real-time Messages API<\/b> đảm bảo chúng được xử lý gần như tức thì, giúp bạn kích hoạt các cảnh báo (alerts) đúng thời hạn.<\/p><\/li><li><p>Đây là mô hình kiến trúc lai (hybrid approach) chuẩn mực trong doanh nghiệp: ưu tiên hiệu năng cho các luồng nghiệp vụ quan trọng và ưu tiên chi phí cho các luồng xử lý khối lượng lớn nhưng không khẩn cấp.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A &amp; D:<\/b> Việc đưa các tài liệu khẩn cấp vào batch queue sẽ khiến chúng phải chờ đợi quá lâu, chắc chắn vi phạm SLA 30 phút.<\/p><\/li><li><p><b>C:<\/b> Việc đưa tất cả vào Real-time Messages API sẽ gây lãng phí chi phí rất lớn, vì bạn phải trả mức giá đầy đủ cho cả những tài liệu không cần xử lý gấp.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-056",
    "set": 1,
    "number": 56,
    "type": "single",
    "question": "<p>During QA testing, you notice that Claude follows your system prompt guidelines consistently in the first 10- 15 turns, but by turn 25-30, responses begin deviating—using informal tone when formality was specified, occasionally skipping required formatting, or providing information types the guidelines restrict. Conversation length is well within context limits (typically 30,000 tokens out of 200,000 available).<\/p><p>What's the most effective approach to maintain consistent behavior throughout extended conversations?<\/p>",
    "options": {
      "A": "<p>Move behavioral guidelines from the system prompt into the first user message.<\/p>",
      "B": "<p>Automatically start a new conversation after 20 turns, passing a summary of the prior context to maintain continuity.<\/p>",
      "C": "<p>Implement post-response validation that regenerates each response until it conforms to the specified guidelines.<\/p>",
      "D": "<p>Insert user-role messages that reinforce critical guidelines at natural conversation breakpoints, especially before complex requests.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn D:<\/b> Trong các cuộc trò chuyện dài với LLM, khi số lượng lượt trao đổi tăng lên, các phản hồi trước đó sẽ làm \"loãng\" sự chú ý của mô hình đối với system prompt ban đầu (như đã phân tích ở các câu trước). Việc chèn các tin nhắn nhắc nhở (reminders/re-prompts) dưới vai trò người dùng (<code>user-role<\/code>) tại các điểm ngắt tự nhiên hoặc trước các yêu cầu phức tạp là phương pháp thực tế và hiệu quả nhất để kéo sự chú ý của mô hình quay lại với các quy tắc cốt lõi mà không cần phải thiết lập lại toàn bộ phiên chat.<\/p><\/li><li><p><b>Tại sao loại các đáp án khác:<\/b><\/p><ul><li><p><b>A (Sai):<\/b> System prompt là vị trí chuẩn và hiệu quả nhất để thiết lập hành vi toàn cục; chuyển hướng dẫn sang tin nhắn đầu tiên của người dùng không giải quyết được vấn đề trôi dạt ngữ cảnh (attention drift) ở các turn sau.<\/p><\/li><li><p><b>B (Sai):<\/b> Việc cắt ngang và bắt buộc khởi động lại hội thoại sau 20 turns làm gián đoạn trải nghiệm người dùng một cách không cần thiết, trong khi ngữ cảnh vẫn còn rất rộng (chỉ mới dùng 30,000 / 200,000 tokens).<\/p><\/li><li><p><b>C (Sai):<\/b> Việc kiểm tra và liên tục bắt mô hình tự sinh lại (regenerate) phản hồi cho đến khi đạt yêu cầu sẽ làm tăng độ trễ (latency) cực kỳ lớn, tốn kém chi phí token và không giải quyết được gốc rễ vấn đề suy giảm chú ý của prompt.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-057",
    "set": 1,
    "number": 57,
    "type": "single",
    "question": "<p>Your extraction system parses e-commerce product descriptions to extract specifications like dimensions, weight, and materials into JSON. Despite having a well-defined schema, the model inconsistently extracts the \"materials\" field–sometimes returning \"cotton blend\", other times \"Cotton/Polyester mix\", and occasionally omitting the field when material information is clearly present in the source.<\/p><p>What's the most effective way to improve extraction consistency?<\/p>",
    "options": {
      "A": "<p>Set temperature to 0 to eliminate randomness and ensure deterministic outputs<\/p>",
      "B": "<p>Make the \"materials\" field required instead of optional in the schema to force the model to always extract a value<\/p>",
      "C": "<p>Switch to a more capable model tier since inconsistent extraction indicates insufficient model capability<\/p>",
      "D": "<p>Add few-shot examples showing 2-3 complete input-output pairs with standardized material description formats<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Khi mô hình AI gặp vấn đề về tính nhất quán trong trích xuất dữ liệu (dù schema đã được định nghĩa rõ ràng), nguyên nhân cốt lõi thường là do mô hình không \"hiểu\" được kỳ vọng về định dạng đầu ra hoặc thiếu sự hướng dẫn cụ thể về cách chuẩn hóa các giá trị biến thiên (như \"cotton blend\" so với \"Cotton/Polyester mix\").<\/p><ul><li><p><b>Tại sao chọn D:<\/b><\/p><ul><li><p><b>Few-shot prompting<\/b> là kỹ thuật hiệu quả nhất để thiết lập \"tiêu chuẩn\". Bằng cách cung cấp 2-3 ví dụ cụ thể (input + output đúng), bạn đang hướng dẫn mô hình cách chuẩn hóa (normalize) các thuật ngữ về vật liệu và ép buộc mô hình phải trích xuất trường này một cách nhất quán theo định dạng bạn mong muốn.<\/p><\/li><li><p>Nó giúp mô hình nhận diện được rằng \"nếu có thông tin vật liệu, nó <b>phải<\/b> được trích xuất\" theo format đã chỉ định, từ đó khắc phục tình trạng mô hình thỉnh thoảng bỏ qua trường này.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Nhiệt độ bằng 0 (temperature = 0) giúp kết quả có tính xác định cao hơn (ít ngẫu nhiên hơn), nhưng nó không dạy mô hình cách chuẩn hóa dữ liệu. Nếu prompt gốc không đủ rõ ràng về định dạng, nó sẽ chỉ tạo ra một lỗi sai lặp đi lặp lại một cách \"xác định\".<\/p><\/li><li><p><b>B:<\/b> Việc bắt buộc trường dữ liệu (required) sẽ ép mô hình phải điền vào, nhưng nếu không có hướng dẫn về định dạng (few-shot), mô hình vẫn có thể điền vào theo các kiểu khác nhau (ví dụ: vẫn ghi \"cotton blend\" lúc thì \"Cotton/Polyester mix\"). Điều này không giải quyết được tính nhất quán về nội dung.<\/p><\/li><li><p><b>C:<\/b> Inconsistent extraction (trích xuất không nhất quán) thường là vấn đề về <b>hướng dẫn (prompting)<\/b> chứ không phải vấn đề về năng lực của mô hình. Các mô hình hiện đại đều đủ khả năng trích xuất vật liệu, vấn đề nằm ở cách chúng ta yêu cầu chúng làm việc đó.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-058",
    "set": 1,
    "number": 58,
    "type": "single",
    "question": "<p>Your research assistant helps users analyze academic papers over extended conversations. User testing reveals a recurring issue: after conversations exceed 60K tokens, users ask follow-up questions requiring precise numerical details from papers discussed earlier—sample sizes, exact p-values, specific inclusion criteria. Your current approach summarizes paper discussions after 8 turns to stay within context limits. Users report that responses to these precision-dependent questions are often hedged or inaccurate.<\/p><p>What's the most effective architectural change?<\/p>",
    "options": {
      "A": "<p>Keep source text from methodology and results sections in context permanently, while summarizing only the conversational discussion and interpretation portions.<\/p>",
      "B": "<p>Maintain a structured database of key facts extracted from each paper (sample sizes, statistics, methods) and retrieve relevant entries into context when precision-dependent questions are detected.<\/p>",
      "C": "<p>Implement retrieval that re-injects relevant paper sections when the user's question suggests they need specific numerical details.<\/p>",
      "D": "<p>Use a separate Claude call with explicit instructions to generate higher-fidelity summaries that preserve all numerical details and statistical values.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Lý do chọn B:<\/b> Trong các hệ thống RAG hoặc trợ lý nghiên cứu khoa học xử lý hội thoại dài (&gt;60K tokens), việc tóm tắt thông tin văn bản thuần túy (như các phương án A, C, hoặc D) thường làm mất mát các chi tiết số liệu chính xác (exact numbers, p-values, sample sizes). Phương án tối ưu và chuyên nghiệp nhất là trích xuất và lưu trữ các dữ liệu định lượng cốt lõi vào một <b>structured database (structured fact extraction)<\/b>, sau đó tra cứu và đưa chính xác các entry đó vào ngữ cảnh khi người dùng hỏi các câu hỏi đòi hỏi độ chính xác cao.<\/p><\/li><li><p><b>Các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Giữ nguyên văn phần methodology và results sẽ làm cạn kiệt nhanh chóng giới hạn context window khi số lượng bài báo tăng lên.<\/p><\/li><li><p><b>C:<\/b> Việc re-inject lại toàn bộ các phần paper section vẫn gặp hạn chế về việc LLM phải quét lại lượng text dài thườn thượt thay vì dùng cấu trúc dữ liệu tường minh.<\/p><\/li><li><p><b>D:<\/b> Tóm tắt độ trung thực cao hơn thông qua lệnh gọi riêng vẫn là tóm tắt dạng text, không giải quyết triệt để vấn đề mất mát thông tin số liệu chính xác qua nhiều vòng hội thoại.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-059",
    "set": 1,
    "number": 59,
    "type": "single",
    "question": "<p>Your pipeline uses a tool called extract_metadata with a JSON schema for paper details. During testing, the agent sometimes fails to call extract_metadata because it wants to provide direct answers.<\/p><p>What's the most reliable way to ensure metadata extraction always happens first?<\/p>",
    "options": {
      "A": "<p>Set tool_choice to \"auto\" and reorder the tool definitions placing extract_metadata first since Claude prioritizes earlier-listed tools.<\/p>",
      "B": "<p>Set tool_choice to type \"tool\", name \"extract_metadata\" and process the enrichment requests in subsequent turns after receiving the extracted metadata.<\/p>",
      "C": "<p>Set tool_choice to \"auto\" in the API call, combined with tools so that Claude always prioritizes metadata before any other tool calls.<\/p>",
      "D": "<p>Set tool_choice to type \"any\" so Claude must use a tool, combined with system prompt instructions to call extract_metadata first.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Trong kiến trúc của Anthropic Claude API, khi bạn muốn đảm bảo một công cụ <b>bắt buộc<\/b> phải được gọi trước bất kỳ hành động nào khác (đặc biệt khi mô hình có xu hướng bỏ qua công cụ để tự trả lời), cách xử lý tin cậy nhất là kiểm soát chặt chẽ luồng thực thi (execution flow):<\/p><ul><li><p><b>Tại sao chọn B:<\/b><\/p><ul><li><p><b>Tính bắt buộc (Forced Execution):<\/b> Bằng cách thiết lập <code>tool_choice<\/code> là <code>{\"type\": \"tool\", \"name\": \"extract_metadata\"}<\/code>, bạn yêu cầu Claude <b>bắt buộc<\/b> phải gọi công cụ này ngay trong turn đầu tiên. Mô hình không có lựa chọn nào khác ngoài việc trả về một <code>tool_use<\/code> request thay vì đưa ra câu trả lời trực tiếp.<\/p><\/li><li><p><b>Xử lý tuần tự (Sequential Processing):<\/b> Sau khi nhận được kết quả (metadata) từ công cụ, bạn mới đưa kết quả đó ngược lại vào conversation history để Claude thực hiện các bước tiếp theo (như làm giàu dữ liệu hoặc trả lời câu hỏi). Đây là cách an toàn nhất để tránh việc mô hình \"ảo giác\" (hallucinate) hoặc tự trả lời trước khi có dữ liệu cần thiết.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A &amp; C:<\/b> Thiết lập <code>tool_choice<\/code> là <code>\"auto\"<\/code> không bao giờ đảm bảo 100% việc mô hình sẽ chọn công cụ. Ngay cả khi bạn đặt thứ tự trong danh sách, nếu mô hình cảm thấy nó \"đủ thông minh\" để trả lời trực tiếp mà không cần công cụ, nó vẫn sẽ bỏ qua.<\/p><\/li><li><p><b>D:<\/b> Dù <code>tool_choice<\/code> type <code>\"any\"<\/code> bắt buộc mô hình phải dùng công cụ, nhưng nó không chỉ định cụ thể công cụ nào. Nếu bạn có nhiều công cụ trong danh sách, mô hình vẫn có thể chọn sai công cụ, dẫn đến kết quả không như ý. Hệ thống prompt (System prompt) chỉ có tác dụng hướng dẫn, không có tính cưỡng ép kỹ thuật mạnh mẽ bằng cách cấu hình <code>tool_choice<\/code> cụ thể cho tên công cụ như ở phương án B.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-060",
    "set": 1,
    "number": 60,
    "type": "single",
    "question": "<p>An engineer asks the agent to understand how the caching layer works before adding a new cache invalidation trigger. After initial Grep searches, the agent has identified that caching logic spans 15 files including decorators, middleware, and service classes (~8,000 lines total).<\/p><p>What's the most effective next step for building understanding while managing context constraints?<\/p>",
    "options": {
      "A": "<p>Analyze imports and class hierarchies to identify the base cache class, Read that file to understand the interface, then trace specific invalidation implementations.<\/p>",
      "B": "<p>Use Grep to search for \"invalidate\" and \"expire\" patterns across all files, then Read only those specific line ranges with minimal surrounding context.<\/p>",
      "C": "<p>Use the Read tool to sequentially load all 15 files, building complete understanding across the full caching implementation.<\/p>",
      "D": "<p>Use Glob to find files matching common caching patterns (cache.py, caching/), prioritize the largest files by reading them first, then check smaller files for gaps.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Khi đối mặt với một codebase lớn (15 file, ~8,000 dòng code), việc cố gắng đọc hết tất cả hoặc tìm kiếm theo từ khóa dàn trải sẽ làm lãng phí \"ngân sách\" ngữ cảnh (context budget) của AI, khiến nó không nắm bắt được bức tranh tổng thể về kiến trúc hệ thống.<\/p><ul><li><p><b>Tại sao chọn A:<\/b> Đây là phương pháp <b>\"Top-down\"<\/b> tối ưu:<\/p><ul><li><p><b>Xác định tâm điểm (Base class/Interface):<\/b> Bằng cách phân tích imports và cấu trúc lớp, AI tìm thấy \"bộ não\" của hệ thống caching. Hiểu được interface giúp AI biết cách hệ thống giao tiếp với các thành phần khác.<\/p><\/li><li><p><b>Truy vết có mục tiêu (Trace specific implementations):<\/b> Sau khi đã hiểu cơ chế cốt lõi, việc tìm kiếm các đoạn code liên quan đến \"invalidation\" sẽ trở nên cực kỳ chính xác và tiết kiệm ngữ cảnh. Bạn chỉ nạp vào bộ nhớ những phần thực sự cần thiết thay vì nạp toàn bộ các file không liên quan.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>B:<\/b> Việc chỉ tìm theo từ khóa (\"invalidate\"/\"expire\") rất dễ bỏ sót các logic phụ thuộc vào trạng thái hoặc các luồng gián tiếp, và nó không giúp AI hiểu được kiến trúc tổng thể.<\/p><\/li><li><p><b>C:<\/b> Đây là cách làm phản khoa học nhất. Việc đọc tuần tự 15 file sẽ gây \"context saturation\" (bão hòa ngữ cảnh), khiến AI mất đi các thông tin quan trọng ở phần đầu khi nó đọc đến phần sau.<\/p><\/li><li><p><b>D:<\/b> Việc ưu tiên đọc file dựa trên dung lượng (size) không phản ánh đúng vai trò của file đó trong kiến trúc hệ thống. Một file nhỏ (ví dụ: một Interface hoặc Decorator) thường quan trọng hơn nhiều so với một file lớn chứa nhiều dữ liệu tĩnh.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-061",
    "set": 2,
    "number": 61,
    "type": "single",
    "question": "<p>You've documented API error handling conventions in a CLAUDE.md file at your project root, specifying that endpoint handlers should use a custom ApiError class. After several sessions, you notice Claude Code sometimes follows these conventions and sometimes uses generic try/catch blocks with string messages. The inconsistency appears random across different coding sessions.<\/p><p>What's the most efficient first diagnostic step?<\/p>",
    "options": {
      "A": "<p>Create path-specific rules in claude/rules/handlers.md with YAML frontmatter scoping the error handling instructions to your API handler files.<\/p>",
      "B": "<p>Add more detailed code examples to your CLAUDE.md showing the exact ApiError usage pattern for different endpoint types.<\/p>",
      "C": "<p>Run /memory to check which memory files are loaded and verify your CLAUDE.md is included.<\/p>",
      "D": "<p>Search for conflicting instructions in ~/.claude/CLAUDE.md or ~/.claude/rules/ that might override your project conventions.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b> Trong môi trường Claude Code, khi các quy tắc tùy chỉnh (custom instructions/CLAUDE.md) có biểu hiện hoạt động không ổn định hoặc ngẫu nhiên giữa các phiên làm việc (sessions), bước chẩn đoán cơ bản và nhanh chóng nhất là kiểm tra xem hệ thống có thực sự đọc và nạp các tệp bộ nhớ hay không. Lệnh <code>/memory<\/code> trong Claude Code dùng để kiểm tra các file nhớ (như tệp cấu hình, CLAUDE.md) đang được tải vào context, giúp xác định xem tệp có bị bỏ qua hay có vấn đề về cấu hình cục bộ trước khi thực hiện các giải pháp phức tạp hơn.<\/p><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>A:<\/b> Việc tạo cấu trúc file rules mới chỉ là bước tinh chỉnh nâng cao, không giải quyết được nguyên nhân gốc rễ vì sao tệp <code>CLAUDE.md<\/code> hiện tại lúc tuân thủ lúc không.<\/p><\/li><li><p><b>B:<\/b> Bổ sung thêm ví dụ trong <code>CLAUDE.md<\/code> không khắc phục được tình trạng ngẫu nhiên không load hoặc không đọc tệp hướng dẫn của hệ thống.<\/p><\/li><li><p><b>D:<\/b> Kiểm tra các file cấu hình toàn cục (<code>~/.claude/<\/code>) là bước tìm kiếm quá sâu và không phải là bước chẩn đoán nhanh đầu tiên khi tệp cấu hình dự án gốc (<code>CLAUDE.md<\/code> ở thư mục root) đã được khai báo nhưng hoạt động không ổn định.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-062",
    "set": 2,
    "number": 62,
    "type": "single",
    "question": "<p>After the web search and document analysis subagents complete their tasks, the coordinator needs to spawn the synthesis subagent to synthesize the findings.<\/p><p>What is the correct approach for providing the synthesis subagent with the information it needs?<\/p>",
    "options": {
      "A": "<p>Provide the subagent with tool definitions that allow it to request outputs from other subagents via callbacks<\/p>",
      "B": "<p>Spawn the subagent with only a brief task description, relying on automatic context inheritance from the coordinator<\/p>",
      "C": "<p>Include the complete findings from both subagents directly in the synthesis subagent's prompt<\/p>",
      "D": "<p>Pass reference identifiers and configure the subagent with read access to a shared memory store where other subagents deposited their results<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p>Khi coordinator đã nhận kết quả từ <strong>web search subagent<\/strong> và <strong>document analysis subagent<\/strong>, nó cần truyền các kết quả đó một cách <strong>tường minh<\/strong> cho synthesis subagent.<\/p><p>Ví dụ:<\/p><pre>\nSynthesis task:- Web search findings: [complete findings...]- Document analysis findings: [complete findings...]\nSynthesize these findings into a unified answer.<\/pre><p>Điểm quan trọng là <strong>subagent không tự động kế thừa context của coordinator<\/strong>. Nếu synthesis subagent cần biết kết quả của các subagent trước, coordinator phải đưa dữ liệu đó vào prompt/context của nó.<\/p><h3>Vì sao các đáp án khác sai?<\/h3><ul><li><strong>A ❌<\/strong> — Không nên thiết kế synthesis subagent để gọi ngược các subagent khác qua callback. Coordinator đã có nhiệm vụ orchestration và tổng hợp context.<\/li><li><strong>B ❌<\/strong> — Subagent <strong>không tự động inherit toàn bộ context<\/strong> của coordinator. Cần truyền thông tin cần thiết một cách explicit.<\/li><li><strong>C ✅<\/strong> — Truyền trực tiếp findings vào prompt giúp synthesis subagent có đầy đủ thông tin cần thiết và không phụ thuộc vào cơ chế context ngầm.<\/li><li><strong>D ❌<\/strong> — Shared memory có thể là một kiến trúc hợp lệ trong một số hệ thống, nhưng với tình huống này nó tạo thêm cơ chế lưu trữ/truy cập không cần thiết. Cách trực tiếp và đáng tin cậy là truyền findings vào prompt.<\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-063",
    "set": 2,
    "number": 63,
    "type": "single",
    "question": "<p>Your search Flights tool calls an external airline API that occasionally returns a 503 Service Unavailable error.<\/p><p>What is the most effective way to handle this error in your tool implementation?<\/p>",
    "options": {
      "A": "<p>Automatically retry the request up to five times with exponential backoff before returning results to the agent.<\/p>",
      "B": "<p>Return an error message in the tool result explaining the service is temporarily unavailable.<\/p>",
      "C": "<p>Log the error internally and return an empty response, letting the model continue without the flight data.<\/p>",
      "D": "<p>Return an empty flight list as if the search succeeded but found no matching flights.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao A đúng:<\/b> Lỗi <b>503 Service Unavailable<\/b> là một dạng <b>lỗi tạm thời (transient error)<\/b>, thường xảy ra khi máy chủ phía bên ngoài (external API của hãng hàng không) đang bị quá tải hoặc bảo trì chớp nhoáng và sẽ sớm hoạt động bình thường trở lại sau một khoảng thời gian rất ngắn. Trong thiết kế kiến trúc hệ thống AI và tool production, phương pháp tốt nhất để xử lý các sự cố hạ tầng tạm thời này là để công cụ tự động thử lại (<code>automatic retry<\/code>) kết hợp thuật toán giãn cách thời gian (<code>exponential backoff<\/code>) ở tầng dưới, giúp che giấu các lỗi chớp nhoáng này khỏi mô hình LLM và đảm bảo trải nghiệm liền mạch cho người dùng.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>B:<\/b> Việc trả về ngay thông báo lỗi cho mô hình làm gián đoạn trải nghiệm trong khi lỗi đó hoàn toàn có thể tự phục hồi sau vài lần thử lại ngầm.<\/p><\/li><li><p><b>C &amp; D:<\/b> Việc tự ý trả về kết quả rỗng (như thể không có chuyến bay hoặc lờ đi lỗi) sẽ đánh lừa mô hình, khiến LLM hiểu sai rằng hệ thống không có dữ liệu thực tế thay vì hiểu rằng hệ thống đang gặp sự cố hạ tầng tạm thời.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-064",
    "set": 2,
    "number": 64,
    "type": "single",
    "question": "<p>You've configured your Claude agent with three MCP servers: one for git operations, one for Jira ticket management, and one for documentation search.<\/p><p>When a user asks the agent to \"create a branch for JIRA- 123 and add documentation links to the ticket,\" how does the agent access tools across these servers?<\/p>",
    "options": {
      "A": "<p>The agent automatically selects the most relevant server based on the request and loads only that server's tools.<\/p>",
      "B": "<p>Tools from all configured MCP servers are discovered at connection time and available simultaneously to the agent.<\/p>",
      "C": "<p>The agent queries each server sequentially to determine which handles each tool, routing calls based on tool name prefixes.<\/p>",
      "D": "<p>You must specify which MCP server to use for each turn, and the agent can only access one server's tools at a time.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn B:<\/b><\/p><ul><li><p>Trong giao thức MCP (Model Context Protocol), khi client/agent kết nối với các MCP server đã được cấu hình, nó sẽ gửi yêu cầu <code>tools/list<\/code> tới tất cả các server tại thời điểm khởi tạo/kết nối (connection time).<\/p><\/li><li><p>Tất cả các công cụ (tools) thu thập được từ các MCP server (như Git, Jira, Documentation) sẽ được hợp nhất và cung cấp <b>đồng thời<\/b> cho Claude. Nhờ đó, trong cùng một lượt xử lý (turn), agent có thể chọn và phối hợp sử dụng các tool từ nhiều server khác nhau để hoàn thành yêu cầu đa tác vụ của người dùng.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không đúng?<\/b><\/h3><ul><li><p><b>A sai:<\/b> Agent không tải linh hoạt từng server theo nhu cầu mà tải tất cả các tool được khai báo từ các server ngay lúc khởi tạo.<\/p><\/li><li><p><b>C sai:<\/b> Không có cơ chế gửi truy vấn tuần tự dựa trên prefix để xác định server xử lý; danh sách tool đã được định nghĩa và tổng hợp sẵn trước khi thực thi prompt.<\/p><\/li><li><p><b>D sai:<\/b> Người dùng không cần chỉ định thủ công server nào sẽ dùng cho mỗi lượt trò chuyện, và agent hoàn toàn có thể truy cập tool từ nhiều server cùng một lúc.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-065",
    "set": 2,
    "number": 65,
    "type": "single",
    "question": "<p>Your test generation produces unit tests for new code, but reviews show 55% are low-value: trivial assertions that only verify functions don't throw exceptions, tests duplicating existing coverage, or tests ignoring your team's fixture conventions.<\/p><p>How do you reduce the rate of low-value tests being generated in the first place?<\/p>",
    "options": {
      "A": "<p>Restrict test generation to directories where historical quality metrics show higher acceptance rates, disabling it for areas where generated tests consistently require heavy editing.<\/p>",
      "B": "<p>Implement a two-phase generation where a second Claude call scores each test against quality criteria, filtering out low-scoring tests before presenting results to developers.<\/p>",
      "C": "<p>Add post-generation coverage analysis that automatically filters out any generated test that doesn't increase line coverage beyond what existing tests provide.<\/p>",
      "D": "<p>Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Bản chất vấn đề:<\/b> Đề bài hỏi cách <b>giảm tỷ lệ test kém chất lượng ngay từ đầu khi sinh ra (in the first place)<\/b>. Nguyên nhân của việc sinh ra test vô nghĩa hay bỏ qua fixture của team là do AI <b>thiếu ngữ cảnh (context) và các ví dụ/tiêu chuẩn (standards/few-shot examples)<\/b> đặc thù của dự án.<\/p><\/li><li><p><b>Tại sao D đúng:<\/b><\/p><ul><li><p>Cung cấp các tiêu chuẩn kiểm thử, danh sách fixtures có sẵn và <b>các ví dụ minh họa phân biệt giữa behavioral test có nghĩa vs trivial assertions<\/b> trực tiếp trong <code>CLAUDE.md<\/code> giúp Claude hiểu chính xác kỳ vọng của đội ngũ phát triển ngay ở bước khởi tạo prompt context.<\/p><\/li><li><p>Đây là thực hành cốt lõi trong tài liệu hướng dẫn của Anthropic/Claude Code: <b>cung cấp rõ ràng hướng dẫn, quy chuẩn và ví dụ minh họa mẫu ngay từ đầu.<\/b><\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không tối ưu:<\/h3><ul><li><p><b>A (Giới hạn thư mục):<\/b> Tránh né vấn đề thay vì giải quyết, khiến các vùng code mới không thể áp dụng tự động hóa sinh test.<\/p><\/li><li><p><b>B (Xử lý 2 pha / Gọi Claude lần 2 để chấm điểm):<\/b> Tốn gấp đôi lượng token và chi phí API, đồng thời tốn thời gian phản hồi mà không giải quyết gốc rễ việc Claude ở bước 1 chưa nắm đủ thông tin.<\/p><\/li><li><p><b>C (Lọc theo độ bao phủ dòng / Line coverage):<\/b> Trivial assertions (test hình thức không bắt bug) vẫn có thể đạt line coverage cao. Độ bao phủ dòng không phản ánh chất lượng hành vi (behavioral value) của bài test.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-066",
    "set": 2,
    "number": 66,
    "type": "single",
    "question": "<p>Your system has been running for 3 weeks and human reviewers have corrected 847 extractions. Analysis reveals a recurring pattern: when recipes use informal measurements like \"a handful\" or \"a splash,\" the model either invents specific amounts or leaves fields empty—accounting for 23% of all corrections.<\/p><p>How should you use this feedback to improve extraction accuracy?<\/p>",
    "options": {
      "A": "<p>Implement a post-processing layer that uses pattern matching to detect informal measurement phrases in source text and automatically populate values when the extraction is empty.<\/p>",
      "B": "<p>Add few-shot examples to your prompt demonstrating correct handling of informal measurements— extracting them verbatim rather than converting or omitting them.<\/p>",
      "C": "<p>Update your JSON schema to add a \"measurement_type\" enum field (precise/informal).<\/p>",
      "D": "<p>Fine-tune the model on the 847 corrected extractions.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Bản chất của vấn đề:<\/b> Mô hình đang gặp khó khăn trong việc xử lý trường hợp đặc biệt (edge case) – các cụm từ đo lường không chính xác (như <i>\"a handful\"<\/i>, <i>\"a splash\"<\/i>). Mô hình tự suy đoán con số hoặc bỏ trống vì chưa được hướng dẫn rõ ràng về quy tắc xử lý loại dữ liệu này.<\/p><\/li><li><p><b>Tại sao B đúng (Few-shot prompting):<\/b><\/p><ul><li><p>Cung cấp các ví dụ cụ thể trong prompt (Few-shot examples) mô tả chính xác cách trích xuất nguyên văn (<i>verbatim<\/i>) các cụm từ đo lường ước chừng là giải pháp nhanh chóng, hiệu quả nhất đối với các mô hình LLM (đặc biệt là Claude) để sửa lỗi hành vi mà không cần can thiệp hệ thống phức tạp.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác không tối ưu:<\/b><\/p><ul><li><p><b>A (Post-processing):<\/b> Sử dụng khớp mẫu (pattern matching) bằng mã nguồn rất giòn (brittle) và khó bao quát hết sự đa dạng của ngôn ngữ tự nhiên.<\/p><\/li><li><p><b>C (Update JSON schema):<\/b> Thêm trường enum chỉ làm rõ cấu trúc đầu ra chứ không dạy mô hình cách nhận biết và trích xuất đúng nội dung từ văn bản gốc.<\/p><\/li><li><p><b>D (Fine-tune):<\/b> Fine-tuning tốn kém, phức tạp và không cần thiết khi vấn đề hoàn toàn có thể giải quyết triệt để bằng kỹ thuật Prompt Engineering (few-shot prompting).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-067",
    "set": 2,
    "number": 67,
    "type": "single",
    "question": "<p>Your expense reimbursement agent processes employee requests using a process reimbursement tool. Company policy requires that reimbursements above $500 must be approved before funds are disbursed.<\/p><p>The agent handles hundreds of requests daily, and you need the threshold enforcement to be tamper-proof regardless of how the agent is prompted ensures the $500 approval threshold cannot be bypassed?<\/p>",
    "options": {
      "A": "<p>The process reimbursement tool accepts an approved by manager parameter. The system prompt instructs the agent to only set this to true after confirming that a manager approved the request. A nightly audit script reviews all reimbursements where approved by manager was set to true.<\/p>",
      "B": "<p>The process reimbursement tool accepts amount and details, and internally enforces the threshold; amounts &amp;lt;$500 are auto-disbursed and the tool returns a success confirmation. Amounts &amp;gt;$500 cause the tool to create a pending approval request and return a status indicating manager review is pending.<\/p>",
      "C": "<p>Provide two tools: auto reimburse (hard-coded limit of $500) and manager approval. Include detailed system prompt instructions telling the agent to check the amount and use the appropriate tool. Add a Post ToolUse hook that logs which tool was called for auditing.<\/p>",
      "D": "<p>Implement the threshold check in a PreToolUse hook that inspects the amount parameter before process reimbursement executes. If the amount exceeds $500, the hook modifies the context to add a requires approval: true flag, which the tool checks before disbursing.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Nguyên tắc thiết kế an toàn (Defense in Depth / Business Logic Enforcement):<\/b><\/p><ul><li><p>Yêu cầu đặt ra là kiểm soát hạn mức phải <b>chống can thiệp hoàn toàn (tamper-proof)<\/b>, bất kể agent bị prompt hay tấn công prompt injection như thế nào.<\/p><\/li><li><p>Trong kiến trúc AI Agent, <b>System Prompt hay LLM Logic KHÔNG BAO GIỜ được dùng làm ranh giới bảo mật duy nhất (Security Boundary)<\/b> cho các quy tắc nghiệp vụ quan trọng. LLM có thể bị ảo giác (hallucination) hoặc bị đánh lừa qua prompt injection.<\/p><\/li><li><p>Việc đưa logic kiểm tra hạn mức $500 vào <b>chính mã nguồn bên trong của Tool (Tool Code / Backend)<\/b> đảm bảo rằng dù agent gửi bất kỳ tham số nào, backend vẫn thực thi đúng chính sách công ty một cách tuyệt đối và không thể bị qua mặt.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không đúng:<\/h3><ul><li><p><b>A (Dựào System Prompt &amp; Tham số agent truyền):<\/b> Agent vẫn có thể bị jailbreak/prompt injection để tự gửi <code>approved_by_manager: true<\/code>. Việc kiểm tra qua audit script chỉ phát hiện sau khi tiền đã bị chi.<\/p><\/li><li><p><b>C (Nhờ Agent tự chọn 1 trong 2 tool):<\/b> Dựa hoàn toàn vào khả năng ra quyết định của Agent (System Prompt instructions). Agent hoàn toàn có thể chọn nhầm hoặc cố tình chọn tool <code>auto_reimburse<\/code> cho khoản tiền $1000.<\/p><\/li><li><p><b>D (Sử dụng PreToolUse hook sửa context):<\/b> Hook sửa context vẫn dựa vào tool đọc cờ <code>requires_approval: true<\/code> từ context do AI quản lý, không an toàn và độc lập bằng việc mã hóa logic cố định ngay trong code backend của chính tool đó.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-068",
    "set": 2,
    "number": 68,
    "type": "single",
    "question": "<p>Your pipeline uses a tool called extract_metadata with a JSON schema for paper details. You've also defined lookup_citations and verify_doi tools for enrichment. During testing, you notice that when users include requests like \"extract the metadata and tell me how cited it is,\" Claude sometimes calls lookup_citations first, which fails because it needs the DOI that extract_metadata would provide.<\/p><p>What's the most effective way to ensure structured metadata extraction happens first?<\/p>",
    "options": {
      "A": "<p>Set tool_choice to \"any\" so Claude must use a tool, combined with system prompt instructions prioritizing extract_metadata.<\/p>",
      "B": "<p>Set tool_choice to {\"type\": \"tool\", \"name\": \"extract_metadata\"} and process the enrichment requests in subsequent turns after receiving the extracted metadata.<\/p>",
      "C": "<p>Set tool_choice to \"auto\" and reorder the tool definitions so extract_metadata appears first in the tools array, since Claude prioritizes earlier-listed tools.<\/p>",
      "D": "<p>Set tool_choice to {\"type\": \"tool\", \"name\": \"extract_metadata\"} for every API call in the pipeline, ensuring Claude always extracts metadata before any enrichment can occur.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn B:<\/b> Trong Anthropic Claude API, khi bạn muốn ép mô hình bắt buộc phải sử dụng một công cụ cụ thể ngay trong lượt gọi đầu tiên (ví dụ: <code>extract_metadata<\/code> để lấy DOI trước), việc cấu hình <code>tool_choice<\/code> thành dạng ép buộc (<code>{\"type\": \"tool\", \"name\": \"extract_metadata\"}<\/code>) sẽ đảm bảo mô hình không gọi nhầm các công cụ khác cần dữ liệu đầu ra chưa tồn tại. Sau khi nhận được kết quả của bước này (chứa DOI), bạn có thể tiếp tục xử lý các yêu cầu bổ sung/enrichment ở các lượt tiếp theo (subsequent turns).<\/p><\/li><li><p><b>Tại sao các phương án khác chưa chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> <code>tool_choice<\/code> loại <code>\"any\"<\/code> chỉ bắt buộc mô hình phải chọn <b>một<\/b> công cụ bất kỳ trong danh sách, chứ không chỉ định đích danh phải là <code>extract_metadata<\/code>, do đó Claude vẫn có nguy cơ gọi nhầm <code>lookup_citations<\/code>.<\/p><\/li><li><p><b>C:<\/b> Việc dùng <code>tool_choice<\/code> là <code>\"auto\"<\/code> kết hợp sắp xếp lại thứ tự công cụ chỉ mang tính chất gợi ý yếu, không đảm bảo 100% mô hình sẽ không gọi sai công cụ phụ thuộc trước.<\/p><\/li><li><p><b>D:<\/b> Việc cài đặt ép buộc <code>extract_metadata<\/code> cho <b>mọi<\/b> API call trong toàn bộ pipeline sẽ gây lỗi nghiêm trọng khi người dùng thực hiện các lượt hội thoại sau đó (khi đã lấy được metadata và muốn gọi các công cụ enrichment khác), vì lúc này mô hình sẽ bị kẹt và lặp lại việc gọi <code>extract_metadata<\/code> liên tục.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-069",
    "set": 2,
    "number": 69,
    "type": "single",
    "question": "<p>Your agent has a log_workout tool that accepts exercise_type (string), value (number), and measurement (string). Production monitoring shows the agent frequently passes mismatched combinations-using measurement: \"reps\" for cardio exercises like running, or measurement: \"miles\" for strength exercises like bench press. Your exercises naturally divide into two categories: cardio (measured in time or distance) and strength (measured in reps and sets). 23% of tool calls have invalid combinations.<\/p><p>What approach would most effectively reduce these errors?<\/p>",
    "options": {
      "A": "<p>Add explicit examples to the tool description showing valid combinations (e.g., \"For running: use minutes or miles. For push-ups: use reps\") with constraints for each exercise category.<\/p>",
      "B": "<p>Implement server-side validation returning descriptive errors for invalid combinations, allowing the agent to retry with corrections.<\/p>",
      "C": "<p>Split into log_cardio_workout (with duration_minutes or distance_miles parameters) and log_strength_workout (with reps and sets parameters).<\/p>",
      "D": "<p>Add enum constraints on measurement limiting values to \"minutes\", \"miles\", \"reps\", or \"sets\" to prevent arbitrary measurement strings.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b> Theo các nguyên tắc thiết kế công cụ (tool design) cho LLM (đặc biệt trong các chuẩn kiến trúc agent nâng cao của Anthropic), khi một công cụ đơn lẻ xử lý quá nhiều loại dữ liệu hoặc phân nhánh logic phức tạp (ở đây là kết hợp cả bài tập cardio và strength với các tham số đo lường hoàn toàn khác nhau), mô hình LLM rất dễ nhầm lẫn trong việc truyền tham số. Việc <b>tách thành các công cụ chuyên biệt rõ ràng<\/b> (chia thành <code>log_cardio_workout<\/code> và <code>log_strength_workout<\/code>) giúp cấu trúc schema của từng tool trở nên minh bạch tuyệt đối, loại bỏ hoàn toàn hiện tượng nhầm lẫn giữa các loại chỉ số và giúp giảm thiểu tối đa tỷ lệ lỗi (error rate) của agent.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Việc chỉ thêm ví dụ bằng văn bản (<code>explicit examples<\/code>) trong tool description chỉ cải thiện được một phần nhỏ, nhưng với các agent phải thực hiện hàng loạt tác vụ liên tục, LLM vẫn có xu hướng bỏ sót hoặc quên các ràng buộc dạng văn bản thuần túy khi context dài lên.<\/p><\/li><li><p><b>B:<\/b> Server-side validation chỉ giúp <b>phát hiện và sửa lỗi sau khi lỗi đã xảy ra<\/b> (bằng cách bắt agent thử lại), khiến tốn kém thêm số lượt gọi API (turns) và làm chậm quá trình xử lý, chứ không ngăn chặn tận gốc việc agent đưa ra các kết hợp sai ngay từ đầu.<\/p><\/li><li><p><b>D:<\/b> Việc dùng ràng buộc enum trên trường <code>measurement<\/code> dạng chuỗi chung (<code>\"minutes\", \"miles\", \"reps\", \"sets\"<\/code>) không giải quyết được vấn đề gán nhầm loại bài tập (ví dụ: agent vẫn có thể chọn nhầm <code>reps<\/code> cho bài chạy bộ vì cả hai đều nằm chung trong một enum pool của cùng một tool duy nhất).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-070",
    "set": 2,
    "number": 70,
    "type": "single",
    "question": "<p>You've configured the system so that all four subagents have access to the complete set of 18 tools. During testing, agents frequently call tools outside their specialization—the synthesis agent attempts web searches, and the report generator tries to analyze documents.<\/p><p>What is the primary cause of this poor tool selection behavior?<\/p>",
    "options": {
      "A": "<p>The agents' role descriptions in their system prompts conflict with having access to tools outside that role.<\/p>",
      "B": "<p>The coordinator cannot track which capabilities each subagent has, leading to misrouted tasks.<\/p>",
      "C": "<p>Choosing from 18 tools instead of 4-5 relevant ones increases decision complexity beyond reliable selection thresholds.<\/p>",
      "D": "<p>The tool definitions consume too much context window space, leaving insufficient room for task content.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><b>Tại sao chọn C:<\/b> Khi một tác nhân (agent) phải đối mặt với số lượng quá lớn các công cụ (18 tools thay vì 4 đến 5 tools chuyên biệt), độ phức tạp khi lựa chọn tăng lên vượt quá ngưỡng tin cậy của mô hình (decision complexity / attention dilution). Điều này dẫn đến hiện tượng mô hình dễ bị nhầm lẫn và gọi nhầm các công cụ ngoài phạm vi chuyên môn của mình. Giải pháp kiến trúc chuẩn là phân tách bộ công cụ phù hợp cho từng agent riêng biệt (mỗi agent chỉ thấy 4-5 công cụ thực sự cần thiết).<\/p><ul><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>A:<\/b> Xung đột system prompt không phải là nguyên nhân chính; bản thân LLM có xu hướng dễ bị quá tải khi số lượng công cụ khả dụng quá lớn trong schema definitions.<\/p><\/li><li><p><b>B:<\/b> Vấn đề trong đề bài nằm ở việc các subagent gọi sai tool chứ không phải do coordinator định tuyến sai tác vụ.<\/p><\/li><li><p><b>D:<\/b> 18 công cụ thông thường không chiếm quá nhiều context window đến mức gây nghẽn ngữ cảnh làm giảm chất lượng nội dung, mà vấn đề cốt lõi là không gian lựa chọn quá rộng (search space / decision space quá lớn).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-071",
    "set": 2,
    "number": 71,
    "type": "single",
    "question": "<p>An engineer asks your agent to add comprehensive tests to a legacy codebase with 200 files and minimal existing test coverage. The engineer hasn't specified which modules to prioritize.<\/p><p>How should the agent decompose this open-ended task?<\/p>",
    "options": {
      "A": "<p>Start writing tests for the first module alphabetically, using test failures and imports to discover related files organically.<\/p>",
      "B": "<p>Systematically read all 200 files to create a complete function inventory before writing any tests, ensuring the testing plan accounts for every function before beginning.<\/p>",
      "C": "<p>Use Glob and Grep to map codebase structure, identify heavily-coupled modules, create a prioritized plan for high-impact areas, and revise as dependencies are discovered.<\/p>",
      "D": "<p>Create a fixed testing schedule upfront based on directory structure, allocating equal effort to each top-level directory regardless of code complexity or business importance.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b> Khi đối mặt với một tác vụ mở (open-ended) trên một codebase lớn (200 file, ít test), một AI Agent cần phải lập kế hoạch chiến lược. Sử dụng các công cụ như <b>Glob<\/b> và <b>Grep<\/b> để lập bản đồ cấu trúc, xác định các module cốt lõi/phụ thuộc lẫn nhau (heavily-coupled modules), từ đó xây dựng một kế hoạch ưu tiên cho các khu vực có tác động lớn (high-impact areas) và linh hoạt điều chỉnh khi phát hiện thêm phụ thuộc là phương pháp tiếp cận thông minh, hiệu quả và có cấu trúc nhất.<\/p><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>A:<\/b> Bắt đầu viết test theo thứ tự bảng chữ cái từ module đầu tiên là cách làm tùy tiện (naive), bỏ qua tầm quan trọng thực tế của nghiệp vụ và cấu trúc phụ thuộc của mã nguồn.<\/p><\/li><li><p><b>B:<\/b> Đọc toàn bộ 200 file trước khi viết bất kỳ test nào sẽ gây lãng phí lớn về context window và token, không khả thi đối với các dự án lớn.<\/p><\/li><li><p><b>D:<\/b> Lập lịch trình cố định dựa trên cấu trúc thư mục với nỗ lực đều nhau cho mọi thư mục không phản ánh đúng mức độ phức tạp thực tế hoặc giá trị nghiệp vụ của từng phần mã nguồn.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-072",
    "set": 2,
    "number": 72,
    "type": "single",
    "question": "<p>During initial testing, you notice that Claude doesn't seem to remember vocabulary words from earlier in the conversation. When a student asks \"Can you quiz me on those words?\", responds as if no words have been discussed.<\/p><p>What is the most likely explanation?<\/p>",
    "options": {
      "A": "<p>You're not including prior messages in each API request—the stateless API doesn't retain conversation history.<\/p>",
      "B": "<p>Your system prompt needs explicit instructions telling Claude to remember information from earlier turns.<\/p>",
      "C": "<p>The model's context window has filled up, causing earlier conversation content to be dropped.<\/p>",
      "D": "<p>You need to enable conversation persistence by passing a session ID parameter with each API call.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b> Các API của LLM (như Anthropic Claude API) được thiết kế theo dạng <b>stateless<\/b> (không lưu trạng thái). Điều này có nghĩa là mỗi khi bạn gửi một yêu cầu (request) mới lên API, hệ thống sẽ xử lý độc lập và hoàn toàn <b>không tự động ghi nhớ<\/b> các đoạn chat ở những lượt trước đó. Để mô hình có thể duy trì ngữ cảnh (context) và nhớ các từ vựng đã thảo luận, ứng dụng của bạn phải chủ động đính kèm toàn bộ lịch sử tin nhắn trước đó (<code>prior messages<\/code>) vào payload của mỗi lần gọi API tiếp theo.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa chính xác:<\/b><\/p><ul><li><p><b>B:<\/b> System prompt chỉ đóng vai trò định hình nhân vật, quy tắc ứng xử hoặc hướng dẫn chung, không có cơ chế tự động lưu trữ hoặc nhớ lịch sử trò chuyện thay thế cho mảng tin nhắn lịch sử (<code>messages<\/code>).<\/p><\/li><li><p><b>C:<\/b> Việc ngữ cảnh bị tràn (context window filled up) sẽ dẫn đến lỗi độ dài hoặc mô hình bị cắt bớt dữ liệu cũ, chứ không giải thích cho việc mô hình xử lý một phiên chat mới hoàn toàn như thể chưa hề có tương tác nào từ đầu.<\/p><\/li><li><p><b>D:<\/b> Các API tiêu chuẩn của Claude không sử dụng tham số <code>session ID<\/code> để duy trì lịch sử tự động phía máy chủ theo cách này; việc quản lý trạng thái hội thoại là trách nhiệm ở phía ứng dụng khách (client-side) thông qua việc truyền danh sách <code>messages<\/code>.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-073",
    "set": 2,
    "number": 73,
    "type": "single",
    "question": "<p>An engineer sees an unfamiliar error message \"SYNC_CONFLICT: entity version mismatch detected\" in production logs but doesn't know which of the 12 services in the codebase generates it. They ask the agent to help locate the source code.<\/p><p>What exploration approach will most efficiently find the responsible code?<\/p>",
    "options": {
      "A": "<p>Use Grep to search for distinctive text from the error message (like \"SYNC_CONFLICT\" or \"entity version mismatch\"), then Read the matching files to understand context.<\/p>",
      "B": "<p>Use Glob to find files in directories commonly associated with error handling (such as errors/, exceptions/, or handlers/) across services, then Read each matching file.<\/p>",
      "C": "<p>Read the project's README and service configuration files to understand the architecture, then systematically Read source files in service directory.<\/p>",
      "D": "<p>Use Grep to find all files that import the project's error handling module, then Read those files to locate custom error definitions.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b> Khi cần tìm kiếm nguồn gốc của một lỗi cụ thể trong codebase lớn có nhiều services, cách tiếp cận trực tiếp và hiệu quả nhất là sử dụng công cụ tìm kiếm văn bản (như <b>Grep<\/b>) để tìm các chuỗi đặc trưng hoặc mã lỗi (<code>SYNC_CONFLICT<\/code>, <code>entity version mismatch<\/code>). Sau đó, tiến hành đọc (Read) các file khớp kết quả để hiểu ngữ cảnh. Đây là kỹ thuật cốt lõi trong việc điều hướng mã nguồn cho AI Agent.<\/p><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>B:<\/b> Dùng Glob tìm các thư mục chung chung (<code>errors/<\/code>, <code>exceptions/<\/code>) có thể bỏ sót nếu lỗi nằm ở file logic nghiệp vụ thông thường hoặc được định nghĩa linh hoạt trong từng service.<\/p><\/li><li><p><b>C:<\/b> Đọc README và cấu hình rồi quét tuần tự từng file trong thư mục service là phương pháp tốn thời gian và kém hiệu quả nhất (brute-force).<\/p><\/li><li><p><b>D:<\/b> Tìm tất cả các file import module xử lý lỗi không giúp tìm ra trực tiếp định nghĩa hoặc nơi phát sinh câu lệnh lỗi cụ thể của chuỗi <code>SYNC_CONFLICT<\/code>.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-074",
    "set": 2,
    "number": 74,
    "type": "single",
    "question": "<p>Production monitoring shows your search_catalog tool fails 12% of the time: 8% are network timeouts that succeed when immediately retried, while 4% are query syntax errors from malformed user-provided filters that never succeed regardless of retry attempts. Currently, both error types are returned to the agent identically, causing it to waste turns retrying syntax errors and telling users to \"try again later\" for timeouts.<\/p><p>How should you modify the tool's error handling?<\/p>",
    "options": {
      "A": "<p>Return all errors with a retryable boolean flag and error type details.<\/p>",
      "B": "<p>Implement automatic retry with backoff for network timeouts inside the tool; return syntax errors immediately with parameter validation details.<\/p>",
      "C": "<p>Add few-shot examples to your system prompt demonstrating how to distinguish network errors from syntax errors and handle each case appropriately.<\/p>",
      "D": "<p>Apply exponential backoff retry logic to all errors uniformly, returning a generic \"service temporarily unavailable\" message after max retries are exhausted.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn B:<\/b> Vấn đề được chia thành hai loại lỗi rõ rệt:<\/p><ol start=\"1\"><li><p><i>Lỗi mạng (8%):<\/i> Là lỗi tạm thời (transient) và có thể tự động thành công khi retry. Theo thiết kế kiến trúc chuẩn cho Agent tools, tool nên tự xử lý các lỗi này ở bên trong (retry/backoff) để agent không phải tốn turn lãng phí.<\/p><\/li><li><p><i>Lỗi cú pháp (4%):<\/i> Là lỗi vĩnh viễn (non-transient) do người dùng cung cấp sai. Tool phải trả về ngay lập tức kèm theo chi tiết lỗi xác thực (validation details) để agent biết cách thông báo chính xác cho người dùng sửa lại tham số truy vấn.<\/p><\/li><\/ol><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>A:<\/b> Ép agent phải xử lý cờ boolean <code>retryable<\/code> thủ công vẫn làm tốn số lượt tương tác (turns) của agent và tăng độ phức tạp không cần thiết cho vòng lặp suy luận.<\/p><\/li><li><p><b>C:<\/b> Dùng few-shot examples trong system prompt không giải quyết triệt để vấn đề đối với các lỗi mạng có thể tự xử lý ngầm, đồng thời tiêu tốn thêm context token.<\/p><\/li><li><p><b>D:<\/b> Áp dụng backoff đồng nhất cho cả lỗi cú pháp là sai nguyên tắc, vì lỗi cú pháp không bao giờ thành công dù có retry bao nhiêu lần đi nữa, dẫn đến việc agent bị kẹt vòng lặp vô ích.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-075",
    "set": 2,
    "number": 75,
    "type": "single",
    "question": "<p>After expanding the agent's MCP tools with delivery-specific capabilities (check_delivery_status, contact_driver, issue_credit, apply_promo_code, update_delivery_address, reschedule_delivery), the total tool count has grown from 4 to 10. Your evaluation suite shows tool selection accuracy has dropped to 71%. Log analysis reveals the majority of errors involve the agent selecting between semantically overlapping tools- calling issue_credit when process_refund is correct, and calling check_delivery_status when lookup_order already returns the needed data.<\/p><p>Which approach structurally eliminates the semantic overlaps that are being logged as the error source?<\/p>",
    "options": {
      "A": "<p>Split the tools across two sub-agents - a \"financial resolution\" agent with process_refund, issue_credit, and apply_promo_code, and a \"delivery\" agent with the remaining delivery tools - with a coordinator routing between them.<\/p>",
      "B": "<p>Add few-shot examples to the system prompt demonstrating correct selection for each ambiguous tool pair, such as showing when issue_credit or process_refund is appropriate.<\/p>",
      "C": "<p>Consolidate semantically overlapping tools-merge issue_credit and process_refund into a single resolve_compensation tool with an optional include_tracking flag.<\/p>",
      "D": "<p>Enable the tool search tool with defer_loading on the six new tools, keeping the original four always loaded, so the agent dynamically calls it when needed.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Bản chất vấn đề:<\/b> Đề bài nhấn mạnh lỗi xảy ra do <b>sự chồng chéo về mặt ngữ nghĩa (semantic overlaps)<\/b> giữa các công cụ (<code>issue_credit<\/code> vs <code>process_refund<\/code>, <code>check_delivery_status<\/code> vs <code>lookup_order<\/code>). Khi hai công cụ có vai trò gần như tương tự nhau, mô hình dễ bị phân vân và chọn sai.<\/p><\/li><li><p><b>Tại sao C đúng (Gom/Tối ưu hóa Tool - Consolidation):<\/b><\/p><ul><li><p>Để <b>loại bỏ tận gốc vấn đề từ mặt cấu trúc (structurally eliminate)<\/b>, phương pháp hiệu quả nhất là thiết kế lại Tool Schema bằng cách <b>hợp nhất (consolidate/merge)<\/b> các công cụ bị lặp/chồng chéo chức năng thành một công cụ duy nhất có tham số (parameter/flag) để linh hoạt xử lý các trường hợp.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không phải là đáp án giải quyết tận gốc:<\/h3><ul><li><p><b>A (Chia làm 2 sub-agents):<\/b> Việc chia sub-agent chỉ chuyển bớt số lượng tool ở từng agent, nhưng trong sub-agent \"financial resolution\" vẫn còn chứa <code>process_refund<\/code> và <code>issue_credit<\/code> <span>$\\rightarrow$<\/span> sự chồng chéo ngữ nghĩa giữa 2 tool này <b>vẫn chưa bị loại bỏ<\/b>.<\/p><\/li><li><p><b>B (Thêm few-shot examples):<\/b> Đây chỉ là mẹo prompt engineering hỗ trợ thêm, không giải quyết triệt để lỗi từ thiết kế cấu trúc công cụ (structural fix).<\/p><\/li><li><p><b>D (Enable tool search / defer loading):<\/b> Kỹ thuật này giúp quản lý khi có quá nhiều tool (tool volume/token overhead), nhưng không giúp giải quyết xung đột khi hai tool có ý nghĩa quá giống nhau.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-076",
    "set": 2,
    "number": 76,
    "type": "single",
    "question": "<p>After deploying an updated system prompt that improves response quality, users with multi-session conversations spanning several weeks report that the assistant now contradicts its earlier statements and has a noticeably different communication style. New users don't experience these issues.<\/p><p>What's the best approach to resolve this?<\/p>",
    "options": {
      "A": "<p>Add instructions to the new system prompt directing the assistant to maintain consistency with any prior statements in the conversation history.<\/p>",
      "B": "<p>Add a transition message when sessions resume explaining that the assistant has been updated and behavior may differ.<\/p>",
      "C": "<p>Version system prompts and associate each conversation with the prompt version under which it started, applying updates only to new conversations.<\/p>",
      "D": "<p>Regenerate summaries of existing conversations using the new prompt and replace the stored histories to align past context with current behavior.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Vấn đề cốt lõi:<\/b> Khi bạn thay đổi <code>system prompt<\/code> của một hội thoại đang diễn ra (đã kéo dài nhiều tuần), mô hình AI sẽ bị xung đột giữa cá tính/hướng dẫn mới trong system prompt và phong cách/thông tin cũ được lưu trong lịch sử chat (<i>conversation history<\/i>). Điều này dẫn đến hiện tượng mâu thuẫn câu từ và thay đổi văn phong đột ngột làm ảnh hưởng đến trải nghiệm người dùng.<\/p><\/li><li><p><b>Tại sao C đúng (Prompt Versioning):<\/b><\/p><ul><li><p>Đây là thực hành chuẩn (<i>Best Practice<\/i>) trong quản trị hệ thống AI (AI Lifecycle Management).<\/p><\/li><li><p>Bằng cách <b>đánh phiên bản (versioning)<\/b> cho system prompt, mỗi hội thoại cũ sẽ tiếp tục duy trì phiên bản prompt ban đầu mà nó được khởi tạo. Các bản cập nhật system prompt mới chỉ áp dụng cho những cuộc trò chuyện mới. Việc này đảm bảo tính nhất quán (consistency) tuyệt đối xuyên suốt vòng đời của từng cuộc trò chuyện.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không phù hợp:<\/h3><ul><li><p><b>A (Thêm hướng dẫn tự nhất quán vào prompt mới):<\/b> Thường không hiệu quả vì system prompt mới vẫn có thể xung đột trực tiếp với lịch sử ngữ cảnh cũ, khiến mô hình bị bối rối (hallucination/confusion).<\/p><\/li><li><p><b>B (Gửi tin nhắn thông báo cho người dùng):<\/b> Đây chỉ là giải pháp tình thế thông báo sự thay đổi, không giải quyết triệt me được lỗi kỹ thuật mâu thuẫn logic và thay đổi phong cách của AI.<\/p><\/li><li><p><b>D (Tạo lại tóm tắt hội thoại cũ bằng prompt mới):<\/b> Tốn kém chi phí token, có nguy cơ làm mất hoặc biến dạng thông tin quan trọng trong quá khứ của người dùng.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-077",
    "set": 2,
    "number": 77,
    "type": "single",
    "question": "<p>After expanding the agent's MCP tools with delivery-specific capabilities [apply_promo_code, update_delivery_address, reconcile_delivery], the total tool count has grown from 1 to 7. We have observed that the agent now shows tool selection accuracy has dropped from 86% to 71%. Log analysis reveals the majority of errors involve the agent selecting between semantically overlapping tools — calling issue_credit when process_refund was correct, and calling check_delivery_status when looking order_allready_returns_the_needed_data.<\/p><p>Which approach structurally eliminates the semantic overlap identified in the error source?<\/p>",
    "options": {
      "A": "<p>Consolidate semantically overlapping tools – merge issue_credit and process_refund into a single handle_promotions tool with an action parameter and fold check_delivery_status into lookup_order with an optional include_tracking flag.<\/p>",
      "B": "<p>Add few-shot examples to the system prompt demonstrating correct selection for each ambiguous tool, such as showing when issue_credit applies versus when process_refund is appropriate.<\/p>",
      "C": "<p>Split the tools across two sub-agents — a 'financial resolution' agent with issue_credit, process_refund, return_order, and apply_promo_code and a 'delivery operations' agent with the remaining delivery tools — with a coordinating routing between them.<\/p>",
      "D": "<p>Enable the tool search tool with defer_loading on the six new tools, keeping the original two always loaded, so the agent dynamically discovers specialized tools only when needed.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Yêu cầu của đề bài:<\/b> Tìm phương án loại bỏ <b>hoàn toàn từ mặt cấu trúc (structurally eliminates)<\/b> sự trùng lặp ngữ nghĩa (<i>semantic overlap<\/i>) giữa các công cụ.<\/p><\/li><li><p><b>Tại sao A đúng:<\/b><\/p><ul><li><p>Bằng cách <b>hợp nhất (consolidate)<\/b> các công cụ có chức năng chồng chéo thành một công cụ duy nhất kết hợp tham số phân loại (ví dụ: gộp <code>issue_credit<\/code> và <code>process_refund<\/code>; gộp <code>check_delivery_status<\/code> vào <code>lookup_order<\/code> với cờ <code>include_tracking<\/code>), mô hình sẽ không còn bị phân vân giữa hai công cụ tương tự nhau nữa.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không đúng:<\/h3><ul><li><p><b>B (Thêm few-shot examples):<\/b> Chỉ là giải pháp hỗ trợ prompt, không giải quyết vấn đề từ mặt cấu trúc thiết kế tool.<\/p><\/li><li><p><b>C (Chia làm 2 sub-agents):<\/b> Việc chia sub-agent vẫn giữ nguyên các tool chồng chéo bên trong sub-agent đó, nên sự trùng lặp ngữ nghĩa giữa <code>issue_credit<\/code> và <code>process_refund<\/code> vẫn tồn tại.<\/p><\/li><li><p><b>D (Dùng tool search / defer loading):<\/b> Dùng để quản lý số lượng tool quá lớn để tiết kiệm token, không giải quyết được xung đột khi hai tool có ý nghĩa quá giống nhau.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-078",
    "set": 2,
    "number": 78,
    "type": "single",
    "question": "<p>Production monitoring shows the research phase takes longer than expected. Analysis reveals the coordinator invokes the web search subagent, then invokes the document analysis subagent and waits again. These tasks are independent—neither requires the other's output.<\/p><p>What is the most effective way to run these subagents concurrently?<\/p>",
    "options": {
      "A": "<p>Create an async orchestration layer outside the agent that spawns parallel threads, each running a separate coordinator.<\/p>",
      "B": "<p>Add detailed instructions to the coordinator's system prompt explaining the performance benefits of parallel execution at the same time.<\/p>",
      "C": "<p>Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message.<\/p>",
      "D": "<p>Switch both subagents to use a Haiku-tier model instead of Sonnet to reduce their individual execution time.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao C đúng:<\/b> Trong kiến trúc agentic và giao thức của các LLM hỗ trợ gọi công cụ (như Claude API), khi các tác vụ độc lập nhau (ví dụ: tìm kiếm web và phân tích tài liệu), mô hình có khả năng <b>gọi đồng thời nhiều công cụ trong cùng một thông điệp phản hồi duy nhất (parallel tool calling)<\/b> nếu được định hướng hoặc cấu trúc đúng cách. Khi coordinator phát ra cả hai lệnh gọi công cụ <code>Task<\/code> cùng một lúc trong một lượt, hệ thống thực thi bên dưới (orchestrator/runtime) sẽ xử lý chúng song song thay vì tuần tự từng cái một, giúp giảm thiểu tối đa độ trễ.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Việc xây dựng một tầng điều phối bất đồng bộ (async orchestration layer) hoàn toàn bên ngoài agent là giải pháp quá phức tạp (overkill) và không cần thiết trong khi kiến trúc API gốc của LLM đã hỗ trợ sẵn tính năng gọi công cụ song song trong một lượt.<\/p><\/li><li><p><b>B:<\/b> Chỉ thêm hướng dẫn bằng văn bản thông thường vào system prompt thường không đủ tin cậy để ép mô hình phát ra các lệnh gọi đồng thời nếu cấu trúc prompt không định hướng cụ thể cách tạo ra các tool call đồng thời.<\/p><\/li><li><p><b>D:<\/b> Việc hạ cấp mô hình xuống dòng Haiku chỉ giúp tăng tốc độ từng tác vụ đơn lẻ nhưng không giải quyết được nguyên nhân gốc rễ là <b>tính thực thi tuần tự (sequential execution)<\/b> của hệ thống điều phối.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-079",
    "set": 2,
    "number": 79,
    "type": "single",
    "question": "<p>A security audit requires updating your authentication library from v2 to v3. The migration guide documents breaking changes: authenticate() now returns a Promise instead of accepting a callback, the User type has restructured fields, and three deprecated methods were removed. Grep shows the library is imported in 45 files across several modules.<\/p><p>What's the most effective approach?<\/p>",
    "options": {
      "A": "<p>Create a custom slash command encapsulating the migration transformations, then execute it against each file without prior codebase exploration.<\/p>",
      "B": "<p>Paste the migration guide's breaking changes into your prompt and use direct execution to update all usages across the 45 files.<\/p>",
      "C": "<p>Update the dependency version, run the test suite, and use Claude Code to fix each failure as it appears.<\/p>",
      "D": "<p>Enter plan mode to explore library usage across modules, map affected code paths, then create a migration strategy before implementing.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Lý do chọn D:<\/b> Trong các công cụ trợ lý AI nâng cao cho lập trình (đặc biệt là môi trường làm việc của Claude Code), việc <b>enter plan mode<\/b> để khảo sát phạm vi sử dụng thư viện, lập bản đồ các đường dẫn mã nguồn bị ảnh hưởng và xây dựng chiến lược trước khi tiến hành chỉnh sửa hàng loạt là phương pháp an toàn và chuẩn mực nhất. Nó giúp tránh việc thực thi mù quáng trên 45 file mà không hiểu rõ tác động dây chuyền hoặc ngữ cảnh của từng module.<\/p><\/li><li><p><b>Các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Tạo custom slash command mà không khám phá mã nguồn trước rất dễ dẫn đến lỗi do sự khác biệt về cách gọi hàm trong các file khác nhau.<\/p><\/li><li><p><b>B:<\/b> Dán toàn bộ breaking changes vào prompt và thực thi trực tiếp trên 45 file dễ gây tràn ngữ cảnh, thiếu kiểm soát và sót các lỗi logic phức tạp.<\/p><\/li><li><p><b>C:<\/b> Chỉ cập nhật dependency và sửa từng lỗi dựa trên test suite khi chúng xuất hiện (trial and error) là cách tiếp cận bị động, thiếu tính toán toàn cục cho một thay đổi kiến trúc lớn (v2 lên v3).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-080",
    "set": 2,
    "number": 80,
    "type": "single",
    "question": "<p>A developer uses Claude Code to refactor a function during their development session. Before committing, they ask the same Claude session to review the code for issues. Later, a separate automated CI review catches several bugs that the same-session review missed.<\/p><p>What best explains this discrepancy?<\/p>",
    "options": {
      "A": "<p>The CI environment has access to the full codebase context while the local session only sees the current file<\/p>",
      "B": "<p>The CI review uses a more specific prompt tailored for catching bugs, while the developer's request was too general<\/p>",
      "C": "<p>Claude retains context about its prior reasoning in the session, making it less likely to question its own decisions<\/p>",
      "D": "<p>The extended session length caused the context window to fill with conversation history, leaving less room for thorough analysis<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b><\/p><ul><li><p>Đây là hiện tượng thiên vị suy luận cũ (confirmation bias / self-consistency issue). Khi thực hiện review mã nguồn trong cùng một phiên làm việc (session) vừa dùng để refactor, Claude vẫn lưu giữ toàn bộ ngữ cảnh và lập luận cũ trong context window. Điều này khiến mô hình có xu hướng tự đồng ý với quyết định trước đó của chính mình thay vì kiểm tra lại với một góc nhìn khách quan, độc lập.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phải là lý do chính?<\/b><\/h3><ul><li><p><b>A sai:<\/b> Claude Code ở phiên làm việc cục bộ hoàn toàn có khả năng truy cập toàn bộ codebase thông qua các công cụ tìm kiếm và đọc file chứ không chỉ giới hạn ở một file duy nhất.<\/p><\/li><li><p><b>B sai:<\/b> Dù prompt cụ thể hơn có thể giúp ích, nhưng vấn đề cốt lõi của việc review lại chính đoạn mã do mình vừa sửa trong cùng phiên làm việc nằm ở thiên vị ngữ cảnh (context bias), chứ không chỉ do câu lệnh chung chung.<\/p><\/li><li><p><b>D sai:<\/b> Chiều dài phiên làm việc có thể ảnh hưởng đến context, nhưng lý do chính giải thích sự khác biệt giữa hai lần review (trong cùng session vs CI độc lập) là việc giữ lại lịch sử lý luận làm giảm khả năng tự phản biện.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-081",
    "set": 2,
    "number": 81,
    "type": "single",
    "question": "<p>Your fitness coaching assistant uses a system prompt with detailed conditional logic: \"If the user mentions being a beginner, provide step-by-step form instructions. If they use term 'progressive overload' or 'superset', respond concisely. If they ask about injury history, always recommend consulting a physician.\" During evaluation, you find the assistant correct explicit expertise declarations but struggles when users don't clearly state their level-often defaulting to overly detailed responses regardless of contextual cues like technical terms.<\/p><p>Which change to the system prompt would most directly address this failure to pick up on implicit expertise signals?<\/p>",
    "options": {
      "A": "<p>Add more conditional branches to cover additional expertise signals, such as \"If user mentions specific rep ranges or asks about periodization, treat as advanced.\"<\/p>",
      "B": "<p>Replace most conditionals with a general principle: \"Adapt explanation depth to match user expertise, mirroring their terminology.\" Keep only the safety-critical conditional abou consultations.<\/p>",
      "C": "<p>Implement a pre-conversation intake that asks users to rate their experience level, then inject that rating into the system prompt as context for all subsequent responses.<\/p>",
      "D": "<p>Add an explicit instruction for the model to ask a clarifying question about experience level whenever the user's expertise isn't immediately clear from their first message.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Bản chất vấn đề (Over-specifying Conditional Logic):<\/b><\/p><ul><li><p>Khi thiết kế system prompt, việc lạm dụng quá nhiều câu lệnh điều kiện cứng (<i>hard-coded conditionals<\/i> như \"nếu dùng từ X thì làm Y\") sẽ khiến mô hình bị máy móc, dễ rơi vào trường hợp mặc định (<i>default behavior<\/i>) khi người dùng không dùng chính xác các từ khóa đó.<\/p><\/li><li><p>Các mô hình LLM hiện đại (như Claude) rất mạnh trong việc hiểu ngữ cảnh tự nhiên và tự điều chỉnh phong cách/độ sâu kiến thức theo cách nói của người dùng.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao B đúng (General Principles over Rules):<\/b><\/p><ul><li><p>Đây là thực hành chuẩn (<i>Best Practice<\/i>) trong Prompt Engineering: <b>Sử dụng nguyên tắc tổng quát (General Principle)<\/b> để mô hình tự nhận biết các tín hiệu ngầm (<i>implicit signals<\/i>) và thích ứng linh hoạt, đồng thời <b>chỉ giữ lại câu lệnh điều kiện cứng đối với các quy tắc an toàn quan trọng<\/b> (như tư vấn y tế/chấn thương).<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không đúng:<\/h3><ul><li><p><b>A (Thêm nhiều điều kiệnif-else):<\/b> Càng thêm nhiều nhánh điều kiện sẽ càng làm prompt bị cồng kềnh, gây xung đột logic và không bao giờ bao phủ hết mọi trường hợp trong thực tế.<\/p><\/li><li><p><b>C (Khảo sát đầu vào / Intake form):<\/b> Thay đổi luồng UX sản phẩm và không giải quyết được vấn đề tối ưu hóa khả năng đọc tín hiệu ngầm của LLM trong prompt.<\/p><\/li><li><p><b>D (Hỏi lại người dùng):<\/b> Làm đứt gãy trải nghiệm người dùng (<i>friction<\/i>), bắt người dùng phải giải thích trong khi mô hình hoàn toàn có khả năng tự suy luận từ ngữ cảnh.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-082",
    "set": 2,
    "number": 82,
    "type": "single",
    "question": "<p>You're implementing a new payment processing module that must follow your project's established patterns for database transactions, error handling, and audit logging. You've identified three existing modules that exemplify these patterns: db_utils.py, error_handlers.py, and audit_logger.py. This is a one-off integration task—these patterns are well-documented in your team wiki and don't need additional project-level documentation.<\/p><p>What's the most effective approach?<\/p>",
    "options": {
      "A": "<p>Ask Claude to explore your codebase to find and understand the transaction, error handling, and logging patterns before generating the new module.<\/p>",
      "B": "<p>Describe the patterns from the three modules in natural language in your prompt, explaining the transaction handling approach, error format, and logging conventions Claude should follow.<\/p>",
      "C": "<p>Use @references to include the three modules directly in your prompt, giving Claude concrete code examples of the patterns to follow.<\/p>",
      "D": "<p>Add documentation of each pattern to your CLAUDE.md file, establishing them as project conventions that Claude will apply automatically.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Lý do chọn C:<\/b> Đề bài nhấn mạnh đây là <b>một nhiệm vụ tích hợp một lần (one-off integration task)<\/b> và các mẫu đã được ghi chép rõ ràng, không cần đưa vào tài liệu cấp độ dự án (vì vậy loại D). Việc sử dụng các thẻ <code>@references<\/code> để đính kèm trực tiếp ba module mẫu (<code>db_utils.py<\/code>, <code>error_handlers.py<\/code>, <code>audit_logger.py<\/code>) vào prompt là cách hiệu quả nhất để cung cấp ngữ cảnh code cụ thể, giúp Claude nắm bắt và áp dụng chính xác các quy ước sẵn có mà không làm ô nhiễm file <code>CLAUDE.md<\/code>.<\/p><\/li><li><p><b>Các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Yêu cầu Claude tự đi dò tìm trong toàn bộ mã nguồn tốn kém thời gian và kém chính xác hơn việc chỉ định trực tiếp các file mẫu.<\/p><\/li><li><p><b>B:<\/b> Diễn đạt lại bằng ngôn ngữ tự nhiên dễ dẫn đến việc thiếu sót các chi tiết kỹ thuật cốt lõi so với việc cho Claude đọc trực tiếp mã nguồn.<\/p><\/li><li><p><b>D:<\/b> Thêm vào <code>CLAUDE.md<\/code> không phù hợp vì đây là tác vụ dùng một lần và các pattern này không cần thiết phải duy trì như chuẩn mực toàn cục của dự án.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-083",
    "set": 2,
    "number": 83,
    "type": "single",
    "question": "<p>Developer Productivity An engineer asks the agent to find all files in the monorepo that import the @company/auth package to understand how authentication is used across services.<\/p><p>Which built-in tool is most appropriate for this task?<\/p>",
    "options": {
      "A": "<p>Grep, to search for the import statement pattern across file contents<\/p>",
      "B": "<p>Read, starting with package.json files to trace dependency declarations<\/p>",
      "C": "<p>Glob, to find files with \"auth\" in their filename or path<\/p>",
      "D": "<p>Bash, to execute find . -type d -name \"*auth*\" and explore matching directories<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Mục tiêu của yêu cầu:<\/b> Kỹ sư muốn tìm tất cả các file <b>import package <code>@company/auth<\/code><\/b> để hiểu cách authentication được sử dụng.<\/p><\/li><li><p><b>Tại sao A đúng:<\/b><\/p><ul><li><p>Công cụ <b>Grep<\/b> (hoặc <code>grep_search<\/code>) trong bộ công cụ tích hợp (built-in tools) của Claude Code / Claude Agent được thiết kế chuyên biệt để <b>tìm kiếm chuỗi văn bản / regex bên trong nội dung tệp tin<\/b> (file contents). Việc tìm câu lệnh <code>import ... from '@company/auth'<\/code> chính là bài toán tìm kiếm mẫu chuỗi trong nội dung file.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không đúng:<\/h3><ul><li><p><b>B (Read):<\/b> Công cụ <code>Read<\/code> chỉ dùng để đọc nội dung của một file cụ thể khi đã biết đường dẫn, không thể dùng để tìm kiếm đồng loạt trên toàn bộ monorepo. Việc tìm trong <code>package.json<\/code> cũng chỉ biết được dự án nào khai báo phụ thuộc, không biết được file nào trực tiếp <code>import<\/code> mã nguồn đó.<\/p><\/li><li><p><b>C (Glob):<\/b> Công cụ <code>Glob<\/code> chỉ tìm kiếm file theo <b>tên file hoặc đường dẫn<\/b> (filename/path pattern), không thể tìm kiếm nội dung bên trong file (như câu lệnh <code>import<\/code>).<\/p><\/li><li><p><b>D (Bash):<\/b> Việc chạy lệnh <code>find<\/code> chỉ giúp tìm tên thư mục/file, không giải quyết việc tìm nội dung <code>import<\/code>. Hơn nữa, luôn ưu tiên dùng các built-in tools dedicated (như <code>Grep<\/code>) thay vì gọi qua lệnh shell không cần thiết.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-084",
    "set": 2,
    "number": 84,
    "type": "single",
    "question": "<p>You're implementing a caching layer for API responses to speed up the /products endpoint. You have a rough idea—Redis with a 5-minute TTL—but you're new to production caching and aren't sure what other considerations a robust implementation requires.<\/p><p>What's the most effective way to start your iterative workflow?<\/p>",
    "options": {
      "A": "<p>Ask Claude to interview you about the caching requirements before implementing, surfacing considerations like invalidation strategies, cache layers, consistency guarantees, and failure modes.<\/p>",
      "B": "<p>Write a specification with your known requirements and \"TBD\" markers for uncertain areas, having Claude propose solutions for each TBD as it implements.<\/p>",
      "C": "<p>Start with a minimal request: \"Add Redis caching to/products with 5-minute TTL.\" Add features and fix issues through follow-up prompts as problems surface during testing.<\/p>",
      "D": "<p>Use plan mode to analyze the current/products endpoint implementation, then provide your caching requirements once Claude explains how the existing code is structured.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b> Khi bạn là người mới làm quen với việc thiết kế hệ thống caching trong môi trường production và chỉ có một ý tưởng thô sơ (ví dụ: dùng Redis với TTL 5 phút), việc để Claude <b>phỏng vấn bạn (interview you)<\/b> là phương pháp khởi đầu iterative workflow hiệu quả nhất. Cách tiếp cận này giúp mô hình chủ động đặt các câu hỏi định hướng nhằm khai thác và làm rõ các khía cạnh kỹ thuật quan trọng mà một người mới dễ bỏ sót (như chiến lược vô hiệu hóa cache - invalidation, tính nhất quán - consistency, và các tình huống lỗi - failure modes) <i>trước khi<\/i> đi vào viết code.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>B:<\/b> Viết specification với các đánh dấu \"TBD\" khi bạn còn thiếu kiến thức nền tảng về các cân nhắc production sẽ khiến tài liệu đặc tả bị thiếu sót nhiều ý trọng yếu, làm Claude khó đưa ra đề xuất tối ưu.<\/p><\/li><li><p><b>C:<\/b> Bắt đầu bằng một yêu cầu tối thiểu rồi sửa dần qua thử nghiệm là cách làm mang tính phản ứng (reactive), dễ dẫn đến việc phải cấu trúc lại toàn bộ mã nguồn khi phát sinh các vấn đề nghiêm trọng về cache invalidation hoặc failure handling.<\/p><\/li><li><p><b>D:<\/b> Dùng plan mode chỉ giúp phân tích mã nguồn hiện tại của endpoint, nhưng nó không giải quyết được vấn đề thiếu hụt kiến thức và yêu cầu kiến trúc production caching của chính bạn.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-085",
    "set": 2,
    "number": 85,
    "type": "single",
    "question": "<p>Production logs show that when the agent handles complex billing disputes requiring 6+ tool calls, it sometimes exhausts its max_turns limit after gathering data and before completing resolution or escalating. The team's goal is to guarantee that every customer interaction ends with either a completed resolution or a human escalation, regardless of how the agent loop terminates.<\/p><p>Which approach achieves this guarantee?<\/p>",
    "options": {
      "A": "<p>Add system prompt instructions telling the agent to call escalate_to_human with a summary of its findings whenever it determines it cannot resolve the dispute.<\/p>",
      "B": "<p>Add orchestration-layer code that checks the agent's outcome after each loop termination - if the loop ended without a completed resolution or escalation, programmatically call escalate_to_human with the accumulated conversation context and tool results.<\/p>",
      "C": "<p>Implement a pre-tool-use hook that counts tool invocations and terminates the loop with an automatic escalation once the agent reaches 80% of its remaining actions.<\/p>",
      "D": "<p>Split the workflow into two sequential agent invocations — a first agent gathers information via get_customer and lookup_order, then the second agent uses that data and handles process_refund or escalate_to_human, each with separate turn budgets.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Bản chất vấn đề:<\/b><\/p><ul><li><p>Khi Agent chạm đến giới hạn <code>max_turns<\/code>, vòng lặp thực thi của Agent sẽ bị ngắt đột ngột từ phía hạ tầng/code điều khiển.<\/p><\/li><li><p>Lúc này, mô hình (LLM) không còn cơ hội để tự gọi thêm bất kỳ tool nào (như <code>escalate_to_human<\/code>) hay sinh thêm câu trả lời nữa.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao B đúng (Orchestration-Level Fallback / Guardrail):<\/b><\/p><ul><li><p>Để đảm bảo <b>100% cam kết (guarantee)<\/b> rằng mọi tương tác luôn kết thúc bằng một kết quả giải quyết hoặc chuyển tiếp tới nhân viên hỗ trợ (<i>regardless of how the agent loop terminates<\/i>), mã nguồn thuộc lớp điều phối hệ thống (<b>orchestration layer<\/b>) phải trực tiếp bắt sự kiện kết thúc này.<\/p><\/li><li><p>Nếu kiểm tra thấy vòng lặp kết thúc do hết lượt (<i>exhausted max_turns<\/i>) mà chưa hoãn/hoàn tất, code hệ thống sẽ chủ động thực hiện lệnh chuyển tiếp tới nhân viên (<i>human escalation<\/i>) kèm theo toàn bộ ngữ cảnh đã thu thập.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không thể đảm bảo (guarantee):<\/h3><ul><li><p><b>A (System Prompt):<\/b> Một khi đã vượt quá <code>max_turns<\/code>, Agent dừng lại hoàn toàn. Mọi hướng dẫn trong System Prompt đều trở nên vô hiệu vì mô hình không được kích hoạt để chạy tiếp.<\/p><\/li><li><p><b>C (Pre-tool-use hook ở 80%):<\/b> Chỉ là giải pháp phỏng đoán mang tính thời điểm, không cam kết tuyệt đối và vẫn có nguy cơ hết lượt nếu các tác vụ sau đó tốn nhiều lượt hơn dự kiến.<\/p><\/li><li><p><b>D (Chia làm 2 agent):<\/b> Chia đôi số lượt chỉ làm giảm bớt khả năng chạm trần lượt, nhưng không đảm bảo 100% việc xử lý ngoại lệ nếu agent thứ 2 vẫn dùng hết ngân sách <code>max_turns<\/code> của nó mà chưa xong việc.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-086",
    "set": 2,
    "number": 86,
    "type": "single",
    "question": "<p>Your search products tool queries an external catalog API that returns paginated results (50 items per request). Production logs show queries frequently match 200+ products, and the design that auto-fetches all pages causes 15-20 second delays.<\/p><p>How should you redesign the pagination handling?<\/p>",
    "options": {
      "A": "<p>Add a max pages parameter (default: 2) that controls how many pages are fetched internally.<\/p>",
      "B": "<p>Create separate search products and fetch more results tools for pagination.<\/p>",
      "C": "<p>Return the first page with total match count and cursor for additional pages.<\/p>",
      "D": "<p>Implement server-side relevance ranking and return only the top 50 most relevant items.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b> Trong thiết kế công cụ cho AI Agent, việc tự động lặp (auto-fetching) tất cả các trang ngầm bên trong một lần gọi tool khi dữ liệu lớn là phản 패턴 (anti-pattern), gây chậm trễ nghiêm trọng (15-20 giây) và làm quá tải ngữ cảnh. Giải pháp kiến trúc chuẩn là trả về <b>trang đầu tiên kèm theo tổng số lượng khớp và con trỏ (cursor) hoặc thông tin phân trang<\/b>, sau đó để mô hình (hoặc người dùng) quyết định xem có cần gọi tiếp các trang tiếp theo hay không thông qua các tham số điều hướng. Điều này giúp tối ưu hóa độ trễ phản hồi ban đầu.<\/p><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>A:<\/b> Thêm tham số <code>max_pages<\/code> ngầm định vẫn ép tool phải tự fetch nhiều trang bên trong trước khi trả về kết quả, không giải quyết triệt để vấn đề độ trễ cao nếu số lượng trang cần lấy lớn.<\/p><\/li><li><p><b>B:<\/b> Việc tạo thêm công cụ rời rạc độc lập (fetch more results) không cần thiết bằng việc thiết kế một tham số cursor linh hoạt ngay trong chính công cụ tìm kiếm hoặc trả về cơ chế phân trang tiêu chuẩn.<\/p><\/li><li><p><b>D:<\/b> Việc cắt bỏ dữ liệu chỉ lấy 50 items dựa trên xếp hạng phía server có thể làm mất đi các mục (items) quan trọng ở các trang sau mà người dùng thực sự muốn tìm kiếm hoặc duyệt qua.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-087",
    "set": 2,
    "number": 87,
    "type": "single",
    "question": "<p>After a 40-minute session helping plan a dinner party, the conversation has grown to 78,000 tokens. The history includes: (1) the user mentioning a guest has a severe shellfish allergy, (2) measurements for scaling recipes to 8 servings, (3) the user's clarification that \"room temperature butter\" means 68°F in their kitchen, and (4) general back-and-forth about meal timing and presentation. You need to implement context management before the window limit is reached.<\/p><p>What approach best balances information preservation with token reduction?<\/p>",
    "options": {
      "A": "<p>Extract critical structured data (allergies, serving counts, user-defined terms) into a compact reference section, summarize general discussion, and retain recent exchanges verbatim.<\/p>",
      "B": "<p>Store the full conversation externally and use semantic search to retrieve relevant portions for each turn, loading only matching segments into context.<\/p>",
      "C": "<p>Implement a sliding window retaining only the most recent 20,000 tokens relying on users to re-state important information when relevant.<\/p>",
      "D": "<p>Summarize the entire conversation history into a concise summary capturing main topics discussed, then append new messages going forward.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b> Trong quản lý ngữ cảnh (context management) cho các cuộc trò chuyện dài với LLM, việc kết hợp <b>trích xuất dữ liệu quan trọng có cấu trúc<\/b> (như dị ứng, số lượng khẩu phần, định nghĩa thuật ngữ riêng của người dùng), <b>tóm tắt phần thảo luận chung<\/b>, và <b>giữ lại các trao đổi gần nhất nguyên vẹn<\/b> là giải pháp tối ưu nhất. Cách làm này vừa bảo toàn được các thông tin cốt lõi, nhạy cảm/quan trọng không bị mất mát qua việc tóm tắt cẩu thả, vừa giảm đáng kể dung lượng token mà vẫn duy trì được mạch tương tác liền mạch.<\/p><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>B:<\/b> Lưu trữ toàn bộ bên ngoài và dùng tìm kiếm ngữ nghĩa (semantic search) cho từng lượt tương tác có thể làm mất đi tính liên tục của ngữ cảnh, đồng thời tốn kém thêm chi phí và độ trễ gọi API tìm kiếm liên tục.<\/p><\/li><li><p><b>C:<\/b> Dùng cửa sổ trượt (sliding window) đơn thuần làm mất vĩnh viễn các thông tin quan trọng được đề cập từ đầu phiên (như dị ứng của khách hoặc quy định nhiệt độ bơ) nếu chúng nằm ngoài cửa sổ trượt.<\/p><\/li><li><p><b>D:<\/b> Tóm tắt toàn bộ cuộc trò chuyện thành một đoạn văn bản chung chung sẽ làm thất thoát các thông tin chi tiết chính xác (như con số định lượng cụ thể, thông tin dị ứng nghiêm trọng) vốn rất cần thiết cho các lượt hỏi đáp tiếp theo.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-088",
    "set": 2,
    "number": 88,
    "type": "single",
    "question": "<p>Your productivity agent connects to three MCP servers: an issue tracker (search_issues, get_issue, create_comment), a documentation wiki (search_docs, get_page, list_spaces), and a database explorer (run_query, get_schema, list_databases). When engineers ask cross-system questions like \"What database tables are affected by the authentication refactor in PROJ-1234?\", monitoring shows the agent makes 8-10 sequential tool calls, frequently issues exploratory calls because it lacks visibility into what content each server contains, and exhausts context space before completing complex investigations.<\/p><p>What architectural change best leverages MCP capabilities to address these issues?<\/p>",
    "options": {
      "A": "<p>Consolidate all three servers into a unified MCP server with cross-referencing capabilities<\/p>",
      "B": "<p>Add an orchestrator that routes questions to a single server based on keywords<\/p>",
      "C": "<p>Expose each server's content catalog as MCP resources—issue summaries, documentation hierarchy, database schemas<\/p>",
      "D": "<p>Add a prepare_investigation tool to each server that accepts a natural language question and returns relevant content summaries<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b> Model Context Protocol (MCP) thiết kế <b>Resources<\/b> chuyên dụng để cung cấp cho mô hình khả năng đọc và hiểu cấu trúc, danh mục dữ liệu của server một cách chủ động (như issue summaries, documentation hierarchy, database schemas) mà không cần tốn các lệnh gọi tool (tool calls) mang tính thăm dò. Việc tận dụng MCP resources giúp giảm thiểu đáng kể số lượng vòng lặp (round-trips) và tiết kiệm ngữ cảnh (context space).<\/p><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>A:<\/b> Gom tất cả các server thành một thực thể đơn nhất làm mất đi tính module hóa và khả năng tách biệt các dịch vụ độc lập của kiến trúc MCP.<\/p><\/li><li><p><b>B:<\/b> Bộ định tuyến dựa trên từ khóa không giải quyết được các câu hỏi mang tính chéo hệ thống (cross-system) vì thông tin cần thiết nằm rải rác ở nhiều server khác nhau.<\/p><\/li><li><p><b>D:<\/b> Việc thêm các công cụ dạng <code>prepare_investigation<\/code> trả về chuỗi văn bản tự do không tận dụng tối đa các nguyên lý thiết kế chuẩn của MCP (như Resources và Prompts) mà vẫn gây quá tải context.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-089",
    "set": 2,
    "number": 89,
    "type": "single",
    "question": "<p>Your agent includes an update_game_score tool that accepts game_date (string), home_team (string), and away_team (string) parameters. Production logs reveal recurring issues: the agent uses team nicknames instead of official names, applies inconsistent date formats, and selects the wrong game when teams have rematches in the same season.<\/p><p>What tool interface change would effectively prevent these errors?<\/p>",
    "options": {
      "A": "<p>Replace the three parameters with a single game_id parameter and a separate search_games lookup tool that returns matching game IDs.<\/p>",
      "B": "<p>Add enum constraints listing valid team names for both team parameters, and add a regex pattern enforcing ISO 8601 format for the date parameter.<\/p>",
      "C": "<p>Add a season parameter to disambiguate rematches, and add a confirm_before_update flag that returns the resolved game details for the agent to verify before the score is committed.<\/p>",
      "D": "<p>Add detailed examples to the tool description showing the required date format and complete list of official team names.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b> Vấn đề gốc rễ phát sinh từ việc agent phải tự nhớ/nhập các thông tin thô dễ sai sót như tên biệt danh (nicknames), định dạng ngày tháng, và nhầm lẫn các trận đấu lặp lại (rematches). Kiến trúc tối ưu nhất để loại bỏ các lỗi này là tách biệt rõ ràng hai thao tác: cung cấp một công cụ tra cứu (<code>search_games<\/code>) để trả về <code>game_id<\/code> chính xác sau khi tìm kiếm, và công cụ cập nhật (<code>update_game_score<\/code>) chỉ nhận một tham số định danh duy nhất là <code>game_id<\/code>. Điều này giúp ép agent phải thực hiện bước search trước, loại bỏ hoàn toàn các phỏng đoán thủ công về tên đội hay ngày tháng.<\/p><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>B:<\/b> Thêm các ràng buộc enum cho tên đội và regex cho định dạng ngày vẫn buộc agent phải tự quyết định các giá trị đó từ ngữ cảnh tự do ban đầu, không giải quyết được vấn đề chọn nhầm trận đấu khi có các trận tái đấu (rematches) trong cùng một mùa giải.<\/p><\/li><li><p><b>C:<\/b> Việc thêm cờ xác nhận thủ công (<code>confirm_before_update<\/code>) không ngăn chặn được việc agent chọn nhầm trận từ bước đầu mà chỉ tạo thêm vòng lặp xác nhận tốn kém chi phí tương tác.<\/p><\/li><li><p><b>D:<\/b> Thêm ví dụ chi tiết vào phần mô tả công cụ (tool description) chỉ mang tính hướng dẫn mềm, không ngăn chặn được việc LLM thỉnh thoảng vẫn sinh ra sai lệch khi context dài hoặc số lượng tên đội quá lớn.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-090",
    "set": 2,
    "number": 90,
    "type": "single",
    "question": "<p>You're implementing a complex graph traversal algorithm with specific performance requirements and edge cases to handle (disconnected nodes, cycles, weighted edges). You want to structure your workflow for efficient iterative refinement with Claude.<\/p><p>What approach will most effectively enable progressive improvement across multiple iterations?<\/p>",
    "options": {
      "A": "<p>Provide Claude with a detailed natural language specification of the algorithm, including all requirements and edge cases. Review each output manually and provide descriptive feedback on what behavior needs to change.<\/p>",
      "B": "<p>Write a test suite covering expected behavior, edge cases, and performance requirements before implementation. Ask Claude to write code that passes the tests, then iterate by sharing test failures with each refinement request.<\/p>",
      "C": "<p>Have Claude extensively research the algorithm and create a detailed implementation plan using extended thinking, then implement the complete solution based on that plan.<\/p>",
      "D": "<p>Provide Claude with a reference implementation from documentation, then ask it to rewrite the code to match your codebase style and add the required edge case handling, comparing outputs against the reference.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Bản chất của Test-Driven Development (TDD) với AI:<\/b><\/p><ul><li><p>Khi làm việc với AI để triển khai các thuật toán phức tạp có nhiều trường hợp biên (<i>edge cases<\/i> như chu trình, nút cô lập, trọng số), việc dựa vào đánh giá thủ công hoặc mô tả bằng ngôn ngữ tự nhiên rất dễ bỏ sót lỗi.<\/p><\/li><li><p>Việc viết trước một <b>Test Suite<\/b> tạo ra một <b>tiêu chí thành công khách quan và tự động<\/b> (<i>objective, deterministic signal<\/i>).<\/p><\/li><\/ul><\/li><li><p><b>Tại sao B đúng (Iterative Refinement Loop):<\/b><\/p><ul><li><p>Khi Claude viết code và bạn chạy test, các thông báo lỗi (<i>test failures/stack traces<\/i>) chính là <b>đầu vào chính xác nhất<\/b> để gửi lại cho Claude điều chỉnh.<\/p><\/li><li><p>Chu trình này (<i>Feedback Loop<\/i>: Code <span><span>→<\/span><\/span> Test <span><span>→<\/span><\/span> Share Failure <span><span>→<\/span><\/span> Refine) giúp tối ưu hóa quá trình cải tiến mã nguồn một cách nhanh chóng, chính xác và có thể đo lường được.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không tối ưu:<\/h3><ul><li><p><b>A (Đánh giá thủ công):<\/b> Đánh giá thủ công (<i>manual review<\/i>) bằng mắt đối với thuật toán đồ thị phức tạp cực kỳ tốn thời gian, dễ sót bug và phản hồi không chính xác bằng kết quả chạy test thực tế.<\/p><\/li><li><p><b>C (Chỉ dùng Extended Thinking &amp; Planning):<\/b> Tạo plan tốt đến đâu thì trong thực tế triển khai vẫn sẽ phát sinh bug/edge cases. Lập kế hoạch không thể thay thế cho quá trình kiểm thử và tinh chỉnh thực tế.<\/p><\/li><li><p><b>D (Rewrite từ Reference Code):<\/b> Chỉ áp dụng khi có sẵn code mẫu tương đồng. Ngoài ra, việc so sánh thủ công kết quả với code mẫu không đảm bảo bao phủ hết các yêu cầu hiệu năng và edge cases đặc thụ của bài toán.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-091",
    "set": 2,
    "number": 91,
    "type": "single",
    "question": "<p>You've asked Claude to write a data migration script, but the initial output doesn't correctly handle records with null values in required fields.<\/p><p>What's the most effective way to iterate toward a working solution?<\/p>",
    "options": {
      "A": "<p>Add \"think harder about edge cases\" to your prompt and request a complete rewrite of the migration logic.<\/p>",
      "B": "<p>Describe the null value problem in detail and ask Claude to regenerate the entire script with improved edge case handling.<\/p>",
      "C": "<p>Manually edit the generated code to fix the null handling, then continue working with Claude on other parts.<\/p>",
      "D": "<p>Provide a test case with example input containing null values and the expected output, then ask Claude to fix it.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn D:<\/b> Trong việc tối ưu hóa hiệu suất tinh chỉnh code với LLM (Prompt Engineering và Interactive Debugging), việc cung cấp một <b>test case cụ thể (bao gồm dữ liệu đầu vào có giá trị null và đầu ra kỳ vọng)<\/b> mang lại hướng dẫn trực quan, rõ ràng và có tính kỹ thuật chính xác cao nhất cho mô hình. Thay vì chỉ ra lệnh chung chung (như \"think harder\" hay mô tả văn bản thuần túy), việc đưa ra concrete examples giúp mô hình xác định ngay lập tức vị trí logic cần sửa đổi trong script mà không cần phải viết lại toàn bộ mã từ đầu.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Các câu lệnh định tính chung chung như <i>\"think harder\"<\/i> thường không mang lại hiệu quả cao đối với các lỗi logic cụ thể liên quan đến dữ liệu.<\/p><\/li><li><p><b>B:<\/b> Yêu cầu regenerate lại toàn bộ script khi chỉ có một lỗi nhỏ về giá trị null sẽ làm lãng phí token, thời gian và có thể làm phát sinh các lỗi mới ở các phần code vốn đã hoạt động ổn định.<\/p><\/li><li><p><b>C:<\/b> Việc tự thủ công sửa code bỏ qua khả năng tương tác và tận dụng trợ lý AI trong việc học hỏi và tự động hóa các bước xử lý ngoại lệ lặp đi lặp lại.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-092",
    "set": 2,
    "number": 92,
    "type": "single",
    "question": "<p>Performance analysis reveals your context is composed of accumulated RAG results from all previous queries, which is crowding out conversation history and causing coherence degradation after 15+ turns.<\/p><p>Which approach best addresses this issue?<\/p>",
    "options": {
      "A": "<p>Compress all RAG results into a consolidated summary document that updates incrementally after each retrieval<\/p>",
      "B": "<p>Implement a sliding window for RAG results from the last 2-3 queries while preserving conversation history<\/p>",
      "C": "<p>Implement semantic deduplication to identify and remove redundant information across the accumulated RAG results and conversation turns<\/p>",
      "D": "<p>Shift context budget to favor RAG results while reducing conversation history allocation<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Bản chất vấn đề:<\/b><\/p><ul><li><p>Việc tích lũy (accumulate) kết quả RAG qua nhiều lượt hỏi-đáp mà không dọn dẹp khiến các thông tin tra cứu cũ chiếm hết không gian bộ nhớ (<i>context window<\/i>), dẫn đến hiện tượng chèn ép lịch sử hội thoại (<i>crowding out conversation history<\/i>) và làm mất tính mạch lạc (<i>coherence degradation<\/i>) sau 15+ lượt trò chuyện.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao B đúng (Ephemeral RAG / Context Budget Management):<\/b><\/p><ul><li><p>Các thông tin RAG từ các lượt hỏi cũ thường không còn quá quan trọng cho lượt hỏi hiện tại.<\/p><\/li><li><p>Áp dụng <b>Cửa sổ trượt (Sliding Window)<\/b> chỉ giữ lại kết quả RAG của 2-3 lượt gần nhất, đồng thời bảo tồn lịch sử hội thoại chính là giải pháp tối ưu nhất để cân bằng giữa thông tin tra cứu ngắn hạn và tính liên tục của cuộc trò chuyện.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không đúng:<\/h3><ul><li><p><b>A (Compress into a consolidated summary):<\/b> Việc liên tục cập nhật/nén tài liệu RAG sau mỗi lượt tra cứu tốn rất nhiều chi phí tính toán (latency &amp; API cost), đồng thời việc tóm tắt nhiều lần rất dễ làm mất các chi tiết tra cứu chính xác.<\/p><\/li><li><p><b>C (Semantic deduplication):<\/b> Lọc trùng thông tin không giải quyết được vấn đề cơ bản là <b>khối lượng dữ liệu RAG mới tích lũy quá lớn<\/b> theo thời gian làm chèn ép lịch sử hội thoại.<\/p><\/li><li><p><b>D (Shift budget to favor RAG over history):<\/b> Việc giảm bớt lịch sử hội thoại sẽ càng làm tệ hơn tình trạng mất mạch lạc (coherence degradation) của câu chuyện.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-093",
    "set": 2,
    "number": 93,
    "type": "single",
    "question": "<p>The system needs to extract candidate information (name, contact details, skills, work experience, education) from uploaded resumes. The extracted data must strictly conform to a predefined JSON schema, as missing required fields or incorrect data types will cause downstream validation failures.<\/p><p>What is the most reliable approach to ensure Claude's output consistently matches the schema?<\/p>",
    "options": {
      "A": "<p>Include detailed JSON formatting instructions and a template example in the system prompt, asking Claude to output only valid JSON.<\/p>",
      "B": "<p>Parse Claude's text response with regex patterns to extract JSON objects, using retry logic for malformed responses.<\/p>",
      "C": "<p>Define a tool with an input schema matching your required JSON structure and extract the data from Claude's tool_use response.<\/p>",
      "D": "<p>Make two separate API calls—first extracting information as text, then asking Claude to format that text as JSON.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Lý do chọn C:<\/b> Trong hệ sinh thái Anthropic/Claude, cách đáng tin cậy nhất để bắt buộc mô hình trả về dữ liệu tuân thủ chặt chẽ một JSON Schema định sẵn là sử dụng tính năng <b>Tool Use / Tool Definition<\/b> với <code>input_schema<\/code>. Khi đó, cấu trúc dữ liệu sẽ được ràng buộc trực tiếp ở cấp độ API và mô hình sẽ gửi lại dữ liệu thông qua đối số của <code>tool_use<\/code>, giúp loại bỏ hoàn toàn tình trạng sai lệch kiểu dữ liệu hoặc thiếu trường so với việc chỉ dùng văn bản thông thường (prompt) rồi tự parse bằng regex.<\/p><\/li><li><p><b>Các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Dùng prompt hướng dẫn (system prompt + ví dụ mẫu) không đảm bảo độ tuân thủ 100% đối với các schema phức tạp.<\/p><\/li><li><p><b>B:<\/b> Dùng regex parsing kết hợp retry logic vừa rườm rà, tốn kém token/chi phí API vừa không giải quyết triệt để vấn đề gốc rễ.<\/p><\/li><li><p><b>D:<\/b> Chia thành hai lần gọi API làm tăng độ trễ và chi phí mà vẫn không đảm bảo tính chính xác của schema ở lần gọi thứ hai bằng việc sử dụng cơ chế Tool Use chuẩn.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-094",
    "set": 2,
    "number": 94,
    "type": "single",
    "question": "<p>Your resource allocation tool returns a simple acknowledgment message after provisioning is requested. Users frequently approve allocations and immediately ask \"how much did that cost?\" or \"which project was that?\" - indicating they confirmed without understanding the request.<\/p><p>What tool design change would most effectively address this?<\/p>",
    "options": {
      "A": "<p>Return structured data including cost estimate, target project, resource specifications, and impact summary in the tool response<\/p>",
      "B": "<p>Add a detail_level parameter with options \"minimal\" or \"comprehensive\" that controls how much context the agent presents in confirmations<\/p>",
      "C": "<p>Implement a 60-second hold before execution completes, allowing users time to review pending allocations and cancel if needed<\/p>",
      "D": "<p>Add a user_acknowledged: boolean parameter that must be set true, with instructions for the agent to only set it after the user explicitly confirms they reviewed the details<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b> Vấn đề gốc rễ là người dùng phê duyệt phân bổ tài nguyên mà thiếu đi thông tin chi tiết (chi phí, dự án, thông số kỹ thuật) vì tool chỉ trả về một thông báo đơn giản (acknowledgment message). Giải pháp thiết kế tool tối ưu nhất để cung cấp đầy đủ ngữ cảnh ngay cho mô hình (để hiển thị lại cho người dùng hoặc xác nhận) là <b>trả về dữ liệu có cấu trúc chứa đầy đủ các thông tin cốt lõi<\/b> (chi phí ước tính, dự án mục tiêu, thông số và tóm tắt tác động) ngay trong kết quả phản hồi của tool.<\/p><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>B:<\/b> Thêm tham số <code>detail_level<\/code> không giải quyết được vấn đề nếu tool vẫn chỉ trả về thông báo xác nhận thành công đơn giản mà thiếu đi các dữ liệu thực tế về chi phí và dự án để hiển thị.<\/p><\/li><li><p><b>C:<\/b> Việc trì hoãn thực thi 60 giây gây bất tiện lớn cho người dùng, làm giảm trải nghiệm tương tác (UX) và không giải quyết được nguyên nhân cốt lõi là thiếu thông tin hiển thị tại thời điểm xác nhận.<\/p><\/li><li><p><b>D:<\/b> Thêm tham số <code>user_acknowledged<\/code> dưới dạng boolean không cung cấp thêm các dữ liệu định lượng cần thiết (như chi phí hay tên dự án), người dùng vẫn sẽ mù mờ bấm xác nhận nếu họ không có sẵn thông tin trước mặt.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-095",
    "set": 2,
    "number": 95,
    "type": "single",
    "question": "<p>Anthropic's tool use documentation states: \"Write instructive error messages. Instead of generic errors like 'failed', include what went wrong and what Claude should try next.\" A billing dispute agent uses lookup_order, which catches all exceptions and returns a tool_result with is_error: true and the message \"execution failed\". Monitoring shows two failure modes: the agent retries the identical call until hitting the turn limit, or it immediately calls escalate_to_human without trying alternative tools.<\/p><p>Which change follows the documented recommendation and gives Claude the information it needs to select the correct recovery action for each error type?<\/p>",
    "options": {
      "A": "<p>Return error-type-specific messages with is_error: true, e.g., \"order not found-try get_customer to search by phone\" for data errors and \"Database timeout (transient)-retry should succeed\" for infrastructure errors.<\/p>",
      "B": "<p>Remove is_error: true and return the error details as normal tool content, so Claude reasons about the response as data rather than treating it as a flagged failure condition that biases retry behavior.<\/p>",
      "C": "<p>Implement retry logic with exponential backoff inside each tool implementation so transient errors are resolved transparently within the tool before any failure result is surfaced to Claude in the agentic loop.<\/p>",
      "D": "<p>Add an error classification step in the agentic loop that intercepts tool errors before Claude sees them, tags each as \"retry\" \"try_alternative,\" or \"escalate,\" and adds that recommendation to the tool result.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Lý do chọn A:<\/b> Theo đúng tài liệu của Anthropic về Tool Use, khi xảy ra lỗi, hệ thống cần cung cấp các thông báo lỗi mang tính hướng dẫn (<code>instructive error messages<\/code>) kèm theo cờ <code>is_error: true<\/code>. Thông báo này phải nêu rõ <b>điều gì đã xảy ra<\/b> và <b>Claude nên thử bước tiếp theo nào<\/b> (ví dụ: chuyển sang công cụ thay thế như <code>get_customer<\/code> đối với lỗi dữ liệu, hoặc thử lại đối với lỗi gián đoạn cơ sở hạ tầng). Điều này khắc phục trực tiếp hai hiện tượng mô hình bị kẹt (lặp lại vô ích hoặc lập tức chuyển hướng sang nhân sự).<\/p><\/li><li><p><b>Các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>B:<\/b> Loại bỏ <code>is_error: true<\/code> khiến Claude hiểu nhầm thông báo lỗi là dữ liệu thông thường thay vì một sự cố cần can thiệp xử lý.<\/p><\/li><li><p><b>C:<\/b> Ẩn hoàn toàn các lỗi tạm thời bên trong tool bằng cơ chế retry tự động ngăn cản agent tự thích ứng và xử lý khi gặp các vấn đề lớn hơn.<\/p><\/li><li><p><b>D:<\/b> Thêm bước phân loại lỗi bên ngoài loop làm thay đổi logic vòng lặp agent tiêu chuẩn, thay vì tận dụng khuyến nghị cốt lõi của Anthropic về việc thiết kế nội dung thông báo lỗi trực tiếp cho Claude tự đưa ra quyết định phục hồi (recovery action).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-096",
    "set": 2,
    "number": 96,
    "type": "single",
    "question": "<p>Your code review prompts include both implementation changes and the corresponding test file, but the LLM's review comments fail to point out untested code paths. Analysis reveals the model correctly flags functions that have no tests at all, but fails to identify when conditional branches or error-handling paths within tested functions that have no tests at all, but fails to identify when conditional branches or error-handling paths within tested functio lack coverage.<\/p><p>What's the most effective way to improve detection of branch-level coverage gaps without overcomplicating the pipeline?<\/p>",
    "options": {
      "A": "<p>Implement a multi-pass pipeline where separate LLM calls first extract all conditional branches, then cross-reference each against test assertions in a second pass.<\/p>",
      "B": "<p>Restructure the prompt to interleave implementation and tests, presenting each function followed immediately by its test cases<\/p>",
      "C": "<p>Include few-shot examples showing code with an uncovered branch paired with the review comment identifying the specific missing test case.<\/p>",
      "D": "<p>Add explicit instructions directing the model to enumerate each conditional branch and exception path, then verify each has a corresponding test assertion.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><h4>Tại sao đáp án D đúng?<\/h4><p>Các mô hình ngôn ngữ lớn (LLM) thường có xu hướng đưa ra nhận xét tổng quan và dễ bỏ sót chi tiết nhỏ nếu chỉ được yêu cầu review chung chung. Khi yêu cầu mô hình thực hiện kỹ thuật <b>Chain-of-Thought (Chuỗi tư duy)<\/b> bằng cách:<\/p><ol start=\"1\"><li><p>Liệt kê rõ từng nhánh điều kiện / đường dẫn xử lý lỗi.<\/p><\/li><li><p>Đối chiếu từng nhánh đó với file test để kiểm tra tính đầy đủ.<\/p><\/li><\/ol><\/li><li><p>Mô hình sẽ buộc phải phân tích sâu từng dòng code và không bỏ sót các nhánh rẽ ẩn. Quan trọng nhất, phương pháp này chỉ thay đổi nội dung prompt trong <b>một lời gọi duy nhất (single pass)<\/b>, giúp giải quyết triệt để vấn đề mà vẫn đáp ứng yêu cầu <i>\"không làm phức tạp hóa pipeline\"<\/i>.<\/p><h3>3. Tại sao các đáp án còn lại sai?<\/h3><ul><li><p><b>A) Sai vì làm phức tạp hóa hệ thống:<\/b> Phương pháp multi-pass (tách thành nhiều bước gọi LLM) có thể tăng độ chính xác, nhưng lại vi phạm trực tiếp điều kiện đề bài là <i>\"không làm phức tạp hóa pipeline\"<\/i>. Việc tạo nhiều API call làm tăng thời gian xử lý (latency), chi phí (cost) và công sức quản lý luồng dữ liệu.<\/p><\/li><li><p><b>B) Sai vì không thay đổi cách tư duy của mô hình:<\/b> Sắp xếp lại vị trí hiển thị giữa code và test chỉ giúp mô hình dễ truy xuất ngữ cảnh hơn (context proximity), nhưng không bắt buộc mô hình phải phân tích từng nhánh logic. Mô hình vẫn có thể chỉ đọc lướt qua và bỏ sót các đường dẫn xử lý lỗi.<\/p><\/li><li><p><b>C) Sai vì ví dụ không bắt buộc mô hình quét kiệt các nhánh:<\/b> Kỹ thuật Few-shot (đưa ra ví dụ mẫu) chủ yếu định hình <b>phong cách và định dạng trả lời<\/b>, nhưng không đảm bảo mô hình sẽ tự động áp dụng quy trình kiểm tra toàn diện cho một đoạn code mới phức tạp. Để ép mô hình kiểm tra từng đường dẫn rẽ nhánh, việc yêu cầu liệt kê từng bước (CoT như ở đáp án D) luôn mang lại hiệu quả cao hơn.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-097",
    "set": 2,
    "number": 97,
    "type": "single",
    "question": "<p>\"You're the Lead Data Scientist/Engineer on a critical project. Something is not completely right with technical details or the data, and it negative impacts expected outputs. They need to independently develop both approaches to evaluation data...<\/p><p>How do you manage this scenario?\"<\/p>",
    "options": {
      "A": "<p>Continue in the original session, developing end-to-end tests first, then snapshot tests sequentially.<\/p>",
      "B": "<p>Export the analysis session's key findings to a file, then create two new sessions that reference this file.<\/p>",
      "C": "<p>Start two fresh sessions, having each re-read the relevant source files before beginning.<\/p>",
      "D": "<p>Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Trong kiến trúc quản lý phiên làm việc (<i>Session Management<\/i>) của <b>Claude Code / Anthropic Agent SDK<\/b>:<\/p><ul><li><p><b>Tính năng <code>fork_session<\/code> (hoặc <code>--fork-session<\/code>):<\/b> Cho phép bạn <b>nhân bản (fork)<\/b> một phiên làm việc hiện tại từ một điểm baseline chung. Điều này tạo ra các nhánh (<i>branches<\/i>) độc lập nhưng vẫn giữ nguyên toàn bộ ngữ cảnh, dữ liệu phân tích và lịch sử đã thực hiện trước đó.<\/p><\/li><li><p><b>Tại sao phương án D là tối ưu:<\/b><\/p><ul><li><p>Việc cần phát triển hai hướng kiểm thử (<i>end-to-end tests<\/i> và <i>snapshot tests<\/i>) độc lập đòi hỏi mỗi luồng có không gian thử nghiệm riêng mà không làm ảnh hưởng lẫn nhau hoặc làm nhiễu ngữ cảnh gốc.<\/p><\/li><li><p>Sử dụng <code>fork_session<\/code> giúp tiết kiệm chi phí token và thời gian vì không phải bắt các phiên mới đọc/phân tích lại từ đầu toàn bộ mã nguồn hoặc tệp dữ liệu đã phân tích ở phiên gốc.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không phù hợp:<\/h3><ul><li><p><b>A (Thực hiện nối tiếp trong cùng phiên):<\/b> Sẽ làm cho ngữ cảnh bị dài, dễ nhiễu thông tin giữa 2 phương pháp testing khác nhau và làm tăng giới hạn token/attention dilution.<\/p><\/li><li><p><b>B &amp; C (Tạo phiên mới hoàn toàn và bắt đọc lại file):<\/b> Tốn kém thời gian, token và mất công thiết lập lại toàn bộ ngữ cảnh/kết quả phân tích ban đầu mà phiên gốc đã thực hiện thành công.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-098",
    "set": 2,
    "number": 98,
    "type": "single",
    "question": "<p>Your portfolio value tool returns the total value of a user's investment portfolio. You're deciding between returning a structured JSON object with explicit fields versus returning information as a formatted text string.<\/p><p>What is the primary advantage of using structured output with defined fields?<\/p>",
    "options": {
      "A": "<p>Structured JSON is processed deterministically by the model, significantly improving accuracy when extracting values.<\/p>",
      "B": "<p>Structured JSON consumes significantly fewer tokens than natural language, substantially reducing API costs.<\/p>",
      "C": "<p>JSON schemas automatically validate that the underlying API returned correct data before the agent processes it.<\/p>",
      "D": "<p>The agent can reliably extract specific values without parsing free form text, reducing errors in subsequent operations.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Bản chất của Structured Output trong Tool Results:<\/b><\/p><ul><li><p>Khi công cụ trả về kết quả dưới dạng <b>JSON cấu trúc với các trường rõ ràng (explicit fields)<\/b>, mô hình AI (Agent) có thể <b>đọc và trích xuất trực tiếp các giá trị mong muốn<\/b> (như <code>portfolio_value<\/code>, <code>currency<\/code>, <code>holdings<\/code>) một cách chính xác mà không phải thực hiện các thao tác tách chuỗi/phân tích văn bản tự do (<i>parsing free-form text<\/i>).<\/p><\/li><li><p>Việc này giảm thiểu nguy cơ hiểu sai dữ liệu hoặc trích xuất nhầm số liệu trong các thao tác xử lý tiếp theo của Agent.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không đúng:<\/h3><ul><li><p><b>A (Processed deterministically):<\/b> LLM bản chất vẫn là mô hình xác xuất (probabilistic), việc đọc JSON giúp nó trích xuất dễ hơn nhưng không biến việc xử lý của LLM thành <i>deterministic<\/i> tuyệt đối.<\/p><\/li><li><p><b>B (Consumes significantly fewer tokens):<\/b> JSON thường tốn <b>nhiều token hơn<\/b> văn bản tự nhiên đơn giản do chứa thêm các cú pháp ngoặc, dấu ngoặc nếp và tên key (<code>\"field_name\": ...<\/code>).<\/p><\/li><li><p><b>C (JSON schemas automatically validate underlying API data):<\/b> JSON Schema của Tool định nghĩa cấu trúc trả về cho Agent, nó không tự động kiểm tra/xác thực xem dữ liệu nghiệp vụ do Backend API của ứng dụng trả về có chính xác về mặt logic hay không.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-099",
    "set": 2,
    "number": 99,
    "type": "single",
    "question": "<p>Your CI pipeline performs security-focused code reviews on approximately 50 PRs daily, currently costing $150/day using the synchronous API. Reviews are non-blocking—developers merge after tests pass and address findings in follow-up commits. You're evaluating the Message Batches API for its 50% cost reduction.<\/p><p>What factor most determines whether batch processing is appropriate for this use case?<\/p>",
    "options": {
      "A": "<p>Whether your result processing can handle reviews arriving in a different order than submitted.<\/p>",
      "B": "<p>Whether reducing per-review latency from 30-60 seconds to near-instant matters for your workflow.<\/p>",
      "C": "<p>Whether review feedback arriving up to 24 hours after PR creation remains actionable.<\/p>",
      "D": "<p>Whether you can structure each review as a single request without multi-turn refinement.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b> Đặc điểm cốt lõi và giới hạn quan trọng nhất của <b>Message Batches API<\/b> (từ các nhà cung cấp như Anthropic) là các yêu cầu gửi vào dạng batch sẽ được xử lý bất đồng bộ và có thời gian hoàn thành trong vòng <b>lượng thời gian dài hơn (thường lên đến 24 giờ)<\/b>. Do đó, yếu tố quyết định lớn nhất xem batch processing có phù hợp hay không chính là việc liệu phản hồi review đến chậm (có thể mất tới vài giờ hoặc tối đa 24 giờ sau khi PR được tạo) có còn tính khả thi, hữu ích (actionable) đối với quy trình làm việc hay không. Dù đề bài có đề cập review là non-blocking và developers sẽ xử lý các findings ở các commit sau, việc feedback bị trễ quá lâu (ví dụ: code đã được merge hoặc nhánh đã bị xóa từ lâu) sẽ làm mất đi ý nghĩa thực tế của việc review code.<\/p><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>A:<\/b> Message Batches API thường hỗ trợ trả về kết quả đi kèm <code>custom_id<\/code> tương ứng với từng request ban đầu, do đó kết quả không bắt buộc phải khớp đúng thứ tự gửi đi, hệ thống xử lý hoàn toàn có thể ánh xạ ngược lại dựa trên ID nên đây không phải là yếu tố cốt lõi ngăn cản.<\/p><\/li><li><p><b>B:<\/b> Về độ trễ, Batch API bản chất là xử lý không đồng bộ (asynchronous) với độ trễ tính bằng giờ chứ không bao giờ đạt mức near-instant, câu hỏi đặt ra là tính chất công việc có chấp nhận được độ trễ đó hay không, chứ không phải ta mong đợi nó giảm từ 30-60 giây xuống near-instant.<\/p><\/li><li><p><b>D:<\/b> Hầu hết các yêu cầu phân tích PR hoặc Message Batches đều hỗ trợ các khối lượng dữ liệu lớn và cấu trúc đơn/đa lượt tùy theo cách thiết kế payload trong batch request, không bị giới hạn bắt buộc phải là single request tuyệt đối không có multi-turn nếu cấu trúc payload chuẩn bị đúng cách.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-100",
    "set": 2,
    "number": 100,
    "type": "single",
    "question": "<p>Your team frequently migrates React components to Vue. You've written a step-by-step workflow for Claude Code to follow during each migration, and you want every developer on the team to invoke it by typing /migrate-component. The workflow should stay in sync as the team iterates on it.<\/p><p>Where should you place the skill file?<\/p>",
    "options": {
      "A": "<p>As a detailed instruction block in the project's root CLAUDE.md file<\/p>",
      "B": "<p>In the project's .claude/settings.json using a skillOverrides entry to register and define the workflow<\/p>",
      "C": "<p>In .claude/skills/migrate-component/SKILL.md at the project root, committed to version control<\/p>",
      "D": "<p>In ~/.claude/skills/migrate-component/SKILL.md on each developer's machine<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Cấu trúc Custom Skill trong Claude Code:<\/b><\/p><ul><li><p>Claude Code hỗ trợ tạo các lệnh slash command tùy chỉnh bằng cách định nghĩa file <code>SKILL.md<\/code> nằm trong thư mục <code>.claude/skills/&lt;skill-name&gt;/SKILL.md<\/code> ở thư mục gốc của dự án.<\/p><\/li><\/ul><\/li><li><p><b>Đồng bộ trong đội ngũ phát triển (Version Control):<\/b><\/p><ul><li><p>Đề bài yêu cầu: <i>mọi lập trình viên trong team đều có thể gọi lệnh <code>/migrate-component<\/code> và quy trình làm việc phải luôn được đồng bộ (stay in sync) khi team cập nhật.<\/i><\/p><\/li><li><p>Việc đặt file skill trong thư mục <code>.claude/skills/<\/code> cấp dự án và <b>commit vào git/version control<\/b> đảm bảo tất cả thành viên trong team luôn nhận được bản cập nhật mới nhất của workflow khi pull code về.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không đúng:<\/h3><ul><li><p><b>A (Đưa vào <code>CLAUDE.md<\/code>):<\/b> <code>CLAUDE.md<\/code> dùng để chứa các quy chuẩn/hướng dẫn dự án chung, không tạo thành một custom slash command dạng <code>/migrate-component<\/code> có thể gọi riêng lẻ.<\/p><\/li><li><p><b>B (Trong <code>settings.json<\/code> qua <code>skillOverrides<\/code>):<\/b> Đây không phải là cấu trúc chính thức để định nghĩa và đăng ký một custom skill mới trong Claude Code.<\/p><\/li><li><p><b>D (Đặt ở thư mục cá nhân <code>~/.claude/skills/<\/code>):<\/b> Nằm trên máy cá nhân của từng lập trình viên (<i>user-level skill<\/i>), sẽ không được tự động chia sẻ hay đồng bộ qua Git cho toàn bộ đội ngũ.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-101",
    "set": 2,
    "number": 101,
    "type": "single",
    "question": "<p>Your infrastructure-as-code repository includes Terraform modules (/terraform/), Kubernetes manifests (/kubernetes/), and CI/CD pipeline scripts (/pipelines/). Each requires different conventions, but your single root CLAUDE.md has grown to 500+ lines. When developers work on Kubernetes files, Terraform-specific rules load into context unnecessarily, consuming tokens.<\/p><p>What is the best approach to reorganize so only relevant guidance loads when editing specific file types?<\/p>",
    "options": {
      "A": "<p>Split content into subdirectory CLAUDE.md files (/terraform/CLAUDE.md, /kubernetes/CLAUDE.md), so Claude loads directory-specific guidance.<\/p>",
      "B": "<p>Keep the root CLAUDE.md and use @path/to/import syntax to modularly include tool-specific guidance files from separate documents.<\/p>",
      "C": "<p>Create files in .claude/rules/ with YAML frontmatter path-scoping (e.g., paths: [\"terraform/**/*\"]), loading rules only when editing matching files.<\/p>",
      "D": "<p>Restructure the root CLAUDE.md into clearly labeled sections with headers (e.g., \"## Terraform Conventions\"), improving organization and readability.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tính năng Claude Code Rules (<code>.claude/rules/<\/code>):<\/b><\/p><ul><li><p>Trong hệ sinh thái Claude Code / Anthropic, tính năng modular rules cho phép bạn chia nhỏ quy tắc thành các file riêng trong thư mục <code>.claude/rules/<\/code>.<\/p><\/li><li><p>Bằng cách sử dụng <b>YAML frontmatter<\/b> với trường <code>paths<\/code> (ví dụ <code>paths: [\"terraform/**/*\"]<\/code>), Claude Code chỉ tải các quy tắc này vào context window khi người dùng thực hiện các thao tác/chỉnh sửa liên quan đến những file khớp với đường dẫn đó.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không đúng:<\/h3><ul><li><p><b>A (Subdirectory CLAUDE.md):<\/b> Claude Code cơ bản chỉ tự động tải file <code>CLAUDE.md<\/code> ở thư mục gốc (root) và thư mục dự án hiện tại, không tự động phân vùng ngữ cảnh theo loại file đang edit linh hoạt như hệ thống <code>.claude/rules/<\/code> có đính kèm path-scoping.<\/p><\/li><li><p><b>B (Dùng cú pháp <code>@path/to/import<\/code>):<\/b> Việc <code>@import<\/code> thẳng vào file root <code>CLAUDE.md<\/code> vẫn sẽ khiến tất cả các quy tắc được nạp đồng loạt vào context, không giải quyết được vấn đề tiêu tốn token.<\/p><\/li><li><p><b>D (Thêm chia section bằng Header):<\/b> Việc chia tiêu đề trong 1 file 500+ dòng chỉ giúp người đọc dễ nhìn hơn, nhưng toàn bộ 500+ dòng đó vẫn sẽ bị tải đầy đủ vào context window của Claude mỗi khi chạy.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-102",
    "set": 2,
    "number": 102,
    "type": "single",
    "question": "<p>You've asked Claude Code to build a PDF report generation feature. The initial implementation queries the database correctly, but the output has formatting issues: table columns are too narrow causing content truncation, dates display without proper formatting, and page break handling is incorrect. You've noticed these issues interact— changing column widths affects how dates render, and page breaks depend on content height.<\/p><p>What's the most effective approach for iterating toward a working solution?<\/p>",
    "options": {
      "A": "<p>Show Claude an example of a correctly formatted report and ask it to match that output, rather than listing the specific technical issues.<\/p>",
      "B": "<p>Start fresh with a detailed prompt specifying all formatting requirements upfront.<\/p>",
      "C": "<p>Provide all three issues in a single detailed message with exact specifications for each, allowing Claude to address them together in one update.<\/p>",
      "D": "<p>Address the column width issue first with specific measurements, verify it works, then fix date formatting within the corrected columns, then adjust page breaks— testing after each change.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Lý do chọn D:<\/b> Do các vấn đề trong việc tạo file PDF (chiều rộng cột, định dạng ngày tháng, và ngắt trang) có tính chất tương tác lẫn nhau (interact), việc giải quyết tuần tự từng bước một (chỉnh cột -&gt; kiểm tra -&gt; chỉnh ngày -&gt; kiểm tra -&gt; chỉnh ngắt trang -&gt; kiểm tra) giúp cô lập nguyên nhân gây lỗi, tránh việc Claude Code bị chồng chất quá nhiều thay đổi phức tạp dẫn đến hỏng cấu trúc.<\/p><\/li><li><p><b>Các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A, B, C:<\/b> Việc dồn tất cả các yêu cầu sửa đổi cùng lúc hoặc chỉ đưa ra hình ảnh mẫu mà không xử lý tuần tự các yếu tố phụ thuộc lẫn nhau sẽ khiến AI dễ bỏ sót chi tiết hoặc tạo ra các xung đột bố cục mới khi xử lý đồng thời cả chiều rộng, định dạng và vị trí ngắt trang.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-103",
    "set": 2,
    "number": 103,
    "type": "single",
    "question": "<p>You're building a security scanning workflow.<\/p><p>When engineers need to locate all occurrences of a dangerous function like eval() across a large codebase, which tool should your agent use for content search?<\/p>",
    "options": {
      "A": "<p>Use Bash to run ls -R | grep eval to recursively list files containing eval.<\/p>",
      "B": "<p>Read the project's main entry file and follow import statements to trace where eval might be used.<\/p>",
      "C": "<p>Use Grep to search for the pattern \"eval(\" across all files in the codebase.<\/p>",
      "D": "<p>Use Glob with a pattern like /*eval* to find files, then Read each matching file.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Vai trò của công cụ Grep:<\/b> Trong hệ sinh thái Anthropic / Claude Code tools, <b>Grep<\/b> là công cụ chuyên dụng dùng cho mục đích <b>tìm kiếm nội dung (content search / pattern matching)<\/b> bên trong các tệp tin của dự án.<\/p><\/li><li><p><b>Tại sao C đúng:<\/b> Để tìm sự xuất hiện của chuỗi/hàm nguy hiểm như <code>eval()<\/code> trên toàn bộ codebase, việc sử dụng <code>Grep<\/code> với pattern <code>\"eval(\"<\/code> giúp tìm chính xác các dòng mã nguồn chứa chuỗi này một cách nhanh chóng và tối ưu nhất.<\/p><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không đúng:<\/h3><ul><li><p><b>A (<code>ls -R | grep eval<\/code>):<\/b> <code>ls -R<\/code> chỉ liệt kê <b>tên tệp/thư mục<\/b>, không đọc được <b>nội dung bên trong tệp<\/b>. Nếu tệp tên <code>auth.js<\/code> chứa mã <code>eval()<\/code>, lệnh này sẽ hoàn toàn bỏ sót.<\/p><\/li><li><p><b>B (Read entry file &amp; trace imports):<\/b> Phương pháp đọc thủ công và lần theo <code>import<\/code> vừa tốn rất nhiều token, tốn thời gian, vừa dễ bỏ sót các file không được import trực tiếp hoặc nằm trong các script độc lập.<\/p><\/li><li><p><b>D (Glob with pattern <code>/*eval*<\/code>):<\/b> <code>Glob<\/code> là công cụ dùng để <b>tìm kiếm tệp theo tên/đường dẫn (file path search)<\/b>, không phải tìm kiếm nội dung bên trong tệp. Tên tệp chứa <code>eval()<\/code> như <code>evaluation.js<\/code> sẽ khớp, nhưng tệp <code>main.js<\/code> chứa hàm <code>eval()<\/code> bên trong sẽ bị bỏ sót hoàn toàn.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-104",
    "set": 2,
    "number": 104,
    "type": "single",
    "question": "<p>Your monorepo contains shared coding standards in /docs/standards/security-rules.md (for services handling user data), testing-patterns.md (for all packages), and api-conventions.md (for API-facing services). Your 15 packages are organized by feature domain (/packages/auth/, /packages/billing/, /packages/notifications/, etc.) without naming conventions indicating which handle user data or expose APIs. Package maintainers are expected to configure their own local development settings, as they understand their package's domain requirements. Currently, all package CLAUDE.md files duplicate all three standards, applying irrelevant guidance.<\/p><p>What's the most effective approach?<\/p>",
    "options": {
      "A": "<p>Use @imports in each package's CLAUDE.md to reference only the specific standard files relevant to that package, based on the maintainer's domain knowledge.<\/p>",
      "B": "<p>Create a shared-standards.nd that uses @imports to combine all three standards, then have each package's CLAUDE.md import that combined file.<\/p>",
      "C": "<p>Put all standards in the root CLAUDE.md with override instructions like \"ignore security-rules.md when working in packages that don't handle user data.\"<\/p>",
      "D": "<p>Create claude/rules/ files for each standard with YAML frontmatter paths listing every package directory where that standard should apply.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Vì sao đáp án A đúng:<\/b><\/p><ul><li><p>Đề bài nhấn mạnh yếu tố đặc thù: <i>\"Package maintainers are expected to configure their own local development settings, as they understand their package's domain requirements\"<\/i> (Các maintainer của từng package tự cấu hình cài đặt phát triển vì họ hiểu rõ yêu cầu về domain của package đó).<\/p><\/li><li><p>Các package được tổ chức theo tính năng (<code>/packages/auth/<\/code>, <code>/packages/billing/<\/code>, v.v.) mà không có quy ước đặt tên sẵn để phân biệt gói nào xử lý dữ liệu người dùng hay mở API. Do đó, việc để từng maintainer sử dụng lệnh <code>@imports<\/code> chọn lọc chính xác các file tiêu chuẩn thực sự liên quan đến domain của mình là phương án linh hoạt, đúng với phân quyền và bối cảnh nhất.<\/p><\/li><\/ul><\/li><li><p><b>Vì sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>B:<\/b> Tạo một file <code>shared-standards.md<\/code> chung gộp tất cả rồi bắt mọi package import vào sẽ khiến các package không liên quan vẫn phải tiếp nhận những quy chuẩn thừa thãi (tương tự vấn đề trùng lặp ban đầu).<\/p><\/li><li><p><b>C:<\/b> Đặt tất cả ở root và dùng câu lệnh ngoại lệ phức tạp (\"ignore...\") không đảm bảo độ chính xác khi LLM xử lý phạm vi ngữ cảnh chi tiết cho từng package.<\/p><\/li><li><p><b>D:<\/b> Sử dụng cấu trúc thư mục <code>.claude/rules/<\/code> với YAML frontmatter khai báo đường dẫn từng package có thể hoạt động trong các hệ thống tự động hóa tập trung, nhưng trái với yêu cầu cốt lõi của đề bài là trao quyền tự cấu hình cho <b>package maintainer<\/b> dựa trên sự hiểu biết domain riêng của họ.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-105",
    "set": 2,
    "number": 105,
    "type": "single",
    "question": "<p>An engineer submits two requests: <\/p><ul><li>Request A: \"Rename the getUserData function to fetchUserProfile everywhere it's used.\" <\/li><li>Request B: \"Improve error handling throughout the data processing module—add try/catch blocks, meaningful error messages, and ensure failures don't silently corrupt data.\"<\/li><\/ul><p>For which request does specifying an explicit multi-phase workflow (such as analyze propose implement with review) most improve outcome quality?<\/p>",
    "options": {
      "A": "<p>Both requests benefit equally<\/p>",
      "B": "<p>Neither request benefits significantly<\/p>",
      "C": "<p>Request A, the function rename task<\/p>",
      "D": "<p>Request B, the error handling task<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn D:<\/b><\/p><ul><li><p><b>Request A<\/b> là một nhiệm vụ đổi tên hàm (refactoring đơn giản, định hình rõ ràng). Đây là tác vụ mang tính cơ học, ít rủi ro về mặt logic hay thiết kế, nên mô hình có thể thực hiện trực tiếp mà không cần quy trình phức tạp.<\/p><\/li><li><p><b>Request B<\/b> là một nhiệm vụ mở (open-ended), đòi hỏi thiết kế lại luồng xử lý lỗi (error handling) trên toàn bộ module. Việc áp dụng quy trình nhiều bước (<b>multi-phase workflow<\/b>: <i>phân tích -&gt; đề xuất -&gt; triển khai -&gt; kiểm tra<\/i>) sẽ giúp:<\/p><ol start=\"1\"><li><p><b>Phân tích (Analyze):<\/b> Xác định các điểm có nguy cơ gây lỗi hoặc làm hỏng dữ liệu.<\/p><\/li><li><p><b>Đề xuất (Propose):<\/b> Đưa ra chiến lược bắt lỗi (try/catch) và thông điệp lỗi phù hợp để xem xét trước.<\/p><\/li><li><p><b>Triển khai &amp; Kiểm tra (Implement &amp; Review):<\/b> Thực thi mã nguồn và rà soát lại để đảm bảo không làm thay đổi luồng xử lý chính.<\/p><\/li><\/ol><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không đúng?<\/b><\/h3><ul><li><p><b>A &amp; B sai:<\/b> Vì lợi ích mang lại giữa hai tác vụ là hoàn toàn chênh lệch. Tác vụ phức tạp và mang tính thiết kế (Request B) thu được hiệu quả vượt trội hơn rất nhiều khi áp dụng workflow so với tác vụ cơ học (Request A).<\/p><\/li><li><p><b>C sai:<\/b> Request A không đòi hỏi giai đoạn đề xuất hay phân tích kiến trúc phức tạp.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-106",
    "set": 2,
    "number": 106,
    "type": "single",
    "question": "<p>Your scheduling agent uses get_available_slots(date, provider_id) to retrieve open appointment times, then book_appointment(provider_id, slot_time, patient_id) to reserve a slot. tickets show that 15% of booking attempts fall with \"slot no longer available\" because another user booked the slot between the availability check and the booking call.<\/p><p>How should you refactor these tools?<\/p>",
    "options": {
      "A": "<p>Combine both tools into a single find_and_book_appointment that atomically checks availability and books, returning either the confirmed booking or available alternatives.<\/p>",
      "B": "<p>Add a hold_slot(provider_id, slot_time) tool that creates a 60 second temporary reservation, requiring the agent to call it between checking availability and booking.<\/p>",
      "C": "<p>Modify book_appointment to return detailed failure information including currently available alternative slots when the requested slot is unavailable, enabling the agent to retry with a different time.<\/p>",
      "D": "<p>Keep both tools but add retry logic to the agent's system prompt, instructing it to call get_available_slots again and select a different time if booking fails.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b> Vấn đề chính là điều kiện tranh chấp (race condition) do độ trễ thời gian giữa bước kiểm tra tính khả dụng (<code>get_available_slots<\/code>) và bước gọi đặt chỗ (<code>book_appointment<\/code>). Giải pháp chuẩn thiết kế kiến trúc hệ thống là kết hợp gộp cả hai thành một thao tác nguyên tử duy nhất (<code>find_and_book_appointment<\/code>) để thực hiện kiểm tra và khóa chốt trong cùng một giao dịch (transaction), qua đó loại bỏ hoàn toàn khả năng bị chiếm chỗ ở giữa chừng.<\/p><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>B:<\/b> Thêm công cụ <code>hold_slot<\/code> vẫn không giải quyết được vấn đề gốc rễ vì nó tạo ra một bước gọi rời rạc bổ sung mà agent vẫn có thể gọi nhầm thứ tự hoặc bị tranh chấp ở chính bước tạm giữ đó nếu lượng truy cập cao.<\/p><\/li><li><p><b>C:<\/b> Sửa <code>book_appointment<\/code> để trả về lỗi kèm thời gian thay thế chỉ giúp xử lý <i>sau khi<\/i> lỗi đã xảy ra (cơ chế phản ứng), không ngăn chặn được 15% tỷ lệ thất bại ban đầu.<\/p><\/li><li><p><b>D:<\/b> Thêm logic vào system prompt yêu cầu agent tự retry bằng tay làm tăng số lượng vòng lặp (round-trips), tiêu tốn token và không giải quyết được tính nguyên tử (atomicity) ở cấp độ cơ sở dữ liệu.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-107",
    "set": 2,
    "number": 107,
    "type": "single",
    "question": "<p>Your automated reviewer uses a single prompt covering security issues, API design, and business logic correctness. Your evaluation suite shows strong recall findings (82%) but poor recall for business logic edge cases in quiz scoring (34%). When you add few-shot examples of logic bugs to the prompt, logic recall is 41% but API design recall drops to 68%.<\/p><p>How should you address this trade-off to improve detection across both categories?<\/p>",
    "options": {
      "A": "<p>Upgrade to a more capable model tier, since its stronger reasoning will handle both concern types in a single prompt and eliminate the recall trade-off.<\/p>",
      "B": "<p>Replace the few-shot examples with a detailed checklist of specific logic edge cases to verify, such as division-by-zero in score calculation or grading thresholds.<\/p>",
      "C": "<p>Provide the full repository as context instead of just the changed files and surrounding code, giving the model deeper visibility into business logic.<\/p>",
      "D": "<p>Split the review into separate focused prompts - one for security and API design, another for business logic - each with dedicated examples, then combine findings before posting.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Bản chất vấn đề (Prompt Congestion / Trade-off):<\/b> Khi bạn đưa quá nhiều nhiệm vụ khác nhau hoặc áp dụng quá nhiều ví dụ few-shot đa dạng vào chung một prompt duy nhất, mô hình AI dễ bị nhiễu ngữ cảnh (attention dilution). Việc thêm ví dụ cho khía cạnh này (logic) làm suy giảm khả năng tập trung vào khía cạnh khác (API design).<\/p><\/li><li><p><b>Tại sao D đúng (Decomposition / Multi-agent Approach):<\/b><\/p><ul><li><p>Chia nhỏ công việc (<i>Task Decomposition<\/i>) thành các prompt riêng biệt chuyên biệt hóa (chẳng hạn một prompt tập trung hoàn toàn vào Security &amp; API design, một prompt chỉ tập trung vào Business logic) giúp mỗi tác vụ có thể sử dụng các few-shot ví dụ tối ưu nhất mà không bị triệt tiêu lẫn nhau.<\/p><\/li><li><p>Sau khi thu được kết quả từ các luồng phân tích riêng biệt, bạn gộp các phát hiện lại trước khi gửi kết quả đánh giá cuối cùng. Đây là thực hành chuẩn (<i>Best Practice<\/i>) khi thiết kế AI Agent cho các bài toán phân tích phức tạp.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không đúng:<\/h3><ul><li><p><b>A (Nâng cấp model tier):<\/b> Nâng cấp mô hình có thể cải thiện năng lực chung nhưng không giải quyết triệt để vấn đề gốc rễ về xung đột yêu cầu/ví dụ trong cùng một prompt (prompt trade-off).<\/p><\/li><li><p><b>B (Dùng checklist thay few-shot):<\/b> Thay thế few-shot bằng danh sách kiểm tra không giải quyết được việc mô hình bị giảm độ tập trung khi phải xử lý đồng thời quá nhiều tiêu chí trong một lượt.<\/p><\/li><li><p><b>C (Cung cấp toàn bộ codebase):<\/b> Việc đưa toàn bộ repository vào context làm tăng thêm rất nhiều nhiễu (noise) và chi phí token, khiến mô hình càng khó phát hiện ra các lỗi logic tiềm ẩn hơn.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-108",
    "set": 2,
    "number": 108,
    "type": "single",
    "question": "<p>Your CRM agent's delete_contact tool handles requests like \"delete the duplicate entry for Acme Corp.\" The database contains similarly named records (e.g., \"Acme Corp,\" \"Acme Corporation,\" \"ACME Corp Inc.\"), and analytics show 8% of deletions are reversed within 24 hours due to misidentified records. Users have also complained that the current multi-step confirmation flow adds too much friction to routine cleanup tasks.<\/p><p>Which approach most effectively reduces the error rate while maintaining workflow efficiency?<\/p>",
    "options": {
      "A": "<p>Deploy automated duplicate detection that identifies and merges probable duplicates, removing the need for manual deletion requests.<\/p>",
      "B": "<p>Present matched records with differentiating fields and require single-click confirmation of the intended target before executing deletion.<\/p>",
      "C": "<p>Implement soft-delete with a 30-day recovery window so users can undo mistakes without slowing down the deletion workflow.<\/p>",
      "D": "<p>Require users to supply the exact record ID from the CRM Interface rather than using natural language references to contact names.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Yêu cầu của bài toán:<\/b><\/p><ol start=\"1\"><li><p>Giảm tỷ lệ xóa nhầm (8% lỗi do các bản ghi trùng tên/tương tự nhau như \"Acme Corp\", \"Acme Corporation\").<\/p><\/li><li><p>Giảm độ ma sát trong quy trình (người dùng phàn nàn luồng xác nhận nhiều bước - <i>multi-step confirmation<\/i> - gây tốn thời gian).<\/p><\/li><\/ol><\/li><li><p><b>Tại sao B đúng:<\/b><\/p><ul><li><p><b>Giải quyết lỗi xóa nhầm:<\/b> Bằng cách hiển thị tất cả các bản ghi khớp kèm theo các trường phân biệt (ví dụ: Email, ID, Ngày tạo), người dùng dễ dàng nhận diện chính xác bản ghi cần xóa.<\/p><\/li><li><p><b>Tối ưu hóa quy trình (Efficiency):<\/b> Thay thế luồng xác nhận qua lại nhiều bước phức tạp bằng việc chỉ yêu cầu người dùng xác nhận <b>1-click (single-click confirmation)<\/b> trên bản ghi chính xác. Điều này vừa giúp tránh xóa nhầm, vừa giữ trải nghiệm nhanh gọn.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không phù hợp:<\/h3><ul><li><p><b>A (Tự động gộp bản ghi trùng):<\/b> Tự động gộp/xóa mà không qua xác nhận của người dùng rất nguy hiểm, dễ dẫn đến mất mát dữ liệu kinh doanh quan trọng nếu AI dự đoán sai.<\/p><\/li><li><p><b>C (Soft-delete 30 ngày):<\/b> Soft-delete là tính năng an toàn bổ trợ (safety guardrail), nhưng nó <b>không giúp ngăn chặn việc xóa nhầm ban đầu<\/b> hay giải quyết vấn đề phân biệt các bản ghi có tên tương tự nhau.<\/p><\/li><li><p><b>D (Bắt nhập chính xác Record ID):<\/b> Bắt người dùng phải tra cứu và nhập tay ID thủ công làm tăng độ khó và ma sát rất lớn đối với quy trình làm việc bằng ngôn ngữ tự nhiên.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-109",
    "set": 2,
    "number": 109,
    "type": "single",
    "question": "<p>Your team's CLAUDE.md includes a rule: \"Use 4-space indentation and always run Prettier formatting.\" Despite this, code reviews reveal that roughly 30% of files Claude Code generates use inconsistent formatting — sometimes 2-space indentation, sometimes missing trailing commas. Adding emphasis (\"IMPORTANT: You MUST use Prettier formatting\") reduces violations to about 15%, but doesn't eliminate them.<\/p><p>What is the most effective way to ensure all generated code is consistently formatted?<\/p>",
    "options": {
      "A": "<p>Split the formatting rules into path-scoped .claude/rules/ files that load when Claude works on matching file types.<\/p>",
      "B": "<p>Add a Stop hook with a prompt-based check that evaluates whether generated code follows formatting standards and prompts Claude to fix violations.<\/p>",
      "C": "<p>Configure a Post ToolUse hook with an Edit|Write matcher that automatically runs Prettier on each file Claude modifies.<\/p>",
      "D": "<p>Extract the formatting rules into a dedicated skill that Claude loads automatically when generating code, with more detailed examples of correct formatting.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b> Trong kiến trúc của <b>Claude Code<\/b> (và các hệ thống agentic coding hiện đại), các hướng dẫn dạng tĩnh trong prompt (<code>CLAUDE.md<\/code>, thêm chữ in hoa, hay kỹ năng) chỉ mang tính chất định hướng và vẫn có tỷ lệ sai sót nhất định (như vẫn còn 15% lỗi). Giải pháp kỹ thuật chắc chắn và tự động 100% để ép buộc định dạng mã nguồn là sử dụng <b>Post ToolUse hook<\/b> với bộ khớp lệnh (<code>matcher<\/code>) bắt các hành động chỉnh sửa hoặc ghi tệp (<code>Edit|Write<\/code>), từ đó tự động chạy công cụ định dạng (như Prettier) ngay lập tức trên mọi tệp mà Claude vừa sửa đổi.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A, B &amp; D:<\/b> Việc chia nhỏ rules theo đường dẫn, thêm Stop hook kiểm tra bằng prompt hay tạo skill hướng dẫn đều dựa vào khả năng tuân thủ của mô hình ngôn ngữ (vốn có thể bị trôi hoặc bỏ sót), trong khi định dạng code là công việc cơ học mà hệ thống tự động hóa (automation hooks) có thể xử lý tuyệt đối và chính xác ở tầng hạ tầng.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-110",
    "set": 2,
    "number": 110,
    "type": "single",
    "question": "<p>Your documents (query) tool returns results as \"Found 3 documents: Q2 Budget Proposal, Q2 Budget Forecast, Annual Review\". You want the agent to document (4, multi) and doc (24, multi).<\/p><p>What return format would best enable these multi-step workflows?<\/p>",
    "options": {
      "A": "<p>A JSON array of document titles extracted from the search results.<\/p>",
      "B": "<p>Structured data containing document IDs and metadata for each result.<\/p>",
      "C": "<p>More detailed human-readable descriptions including the size and authors.<\/p>",
      "D": "<p>URLs that users can click to open the document in their browser.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn B:<\/b> Để một AI Agent thực hiện các tác vụ tiếp theo (multi-step workflows) như gọi tiếp các công cụ thao tác trên tài liệu (ví dụ: <code>document(id)<\/code> hoặc đọc nội dung chi tiết), việc trả về dữ liệu có cấu trúc chứa <b>ID định danh duy nhất và metadata<\/b> của từng kết quả là bắt buộc. Agent cần ID chính xác để truyền vào các tham số của công cụ tiếp theo thay vì chỉ dựa vào tiêu đề văn bản dạng chuỗi thô.<\/p><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>A:<\/b> Mảng JSON chỉ chứa tiêu đề (titles) không cung cấp ID định danh, khiến agent không thể xác định chính xác tài liệu nào cần gọi trong các bước tiếp theo nếu có tiêu đề trùng lặp.<\/p><\/li><li><p><b>C:<\/b> Mô tả chi tiết mang tính con người (kích thước, tác giả) làm lãng phí không gian ngữ cảnh (context window) mà vẫn thiếu các khóa định danh máy đọc được (machine-readable IDs).<\/p><\/li><li><p><b>D:<\/b> URL nhấp chuột trên trình duyệt phục vụ cho giao diện người dùng (UI) cuối, không phù hợp cho các lệnh gọi công cụ tự động dạng API của agent.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-111",
    "set": 2,
    "number": 111,
    "type": "single",
    "question": "<p>The system processes product reviews using tool use with a defined schema: rating (integer 1-5), pros (string array), cons (string array), and overall_sentiment (enum: positive, negative, mixed). <\/p><p>Testing reveals two issues with brief or ambiguous reviews (~20% of the dataset): <\/p><p>(1) for reviews like \"Great product!\", Claude fabricates specific pros and cons rather than indicating this information isn't explicitly stated, and (2) for sarcastic reviews like \"Well that was... interesting\", Claude picks sentiment arbitrarily since there's no option for ambiguous cases.<\/p><p>What schema modification best addresses both issues?<\/p>",
    "options": {
      "A": "<p>Make pros and cons optional fields, and add \"neutral\" and \"unclear\" to the sentiment enum.<\/p>",
      "B": "<p>Add an extraction_confidence field (0.0-1.0) for each value, and filter outputs where any confidence falls below a threshold.<\/p>",
      "C": "<p>Allow null values for pros/cons, and add \"unclear\" to the sentiment enum.<\/p>",
      "D": "<p>Allow empty arrays for pros/cons as valid output, and add \"unclear\" to the sentiment enum.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Giải quyết vấn đề (1) - Bịa đặt pros/cons khi đánh giá quá ngắn:<\/b><\/p><ul><li><p><code>pros<\/code> và <code>cons<\/code> vốn được định nghĩa dưới dạng danh sách chuỗi (<i>string array<\/i>).<\/p><\/li><li><p>Cách thiết kế chuẩn nhất trong JSON Schema cho trường kiểu danh sách khi không có thông tin là cho phép trả về <b>mảng rỗng (<code>[]<\/code>)<\/b>. Điều này giúp mô hình không phải cố \"bịa\" ra thông tin để lấp đầy, đồng thời giữ nguyên kiểu dữ liệu nhất quán (<i>array type<\/i>) mà ứng dụng phía backend kỳ vọng xử lý.<\/p><\/li><\/ul><\/li><li><p><b>Giải quyết vấn đề (2) - Nhận diện đánh giá mỉa mai/mơ hồ:<\/b><\/p><ul><li><p>Bổ sung giá trị <code>\"unclear\"<\/code> vào danh sách <code>enum<\/code> của <code>overall_sentiment<\/code> cho phép mô hình chọn chính xác phân loại khi gặp câu đánh giá không rõ ràng hoặc mỉa mai, thay vì phải đoán ngẫu nhiên giữa <code>positive<\/code>, <code>negative<\/code>, hay <code>mixed<\/code>.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không tối ưu:<\/h3><ul><li><p><b>A (Make optional / Add neutral &amp; unclear):<\/b> Biến trường thành <code>optional<\/code> khiến schema thiếu ràng buộc chặt chẽ. Ngoài ra, \"neutral\" (trung tính) không giải quyết đúng bản chất của câu mỉa mai/mơ hồ (\"unclear\").<\/p><\/li><li><p><b>B (Extraction confidence):<\/b> Việc yêu cầu mô hình tự đánh giá độ tin cậy (<i>confidence score<\/i>) thường không chính xác do LLM hay bị hiện tượng tự tin thái quá (overconfidence bias), đồng thời làm tăng độ phức tạp không cần thiết cho schema.<\/p><\/li><li><p><b>C (Allow null values):<\/b> Giá trị <code>null<\/code> dễ gây ra lỗi kiểu dữ liệu (<i>type errors<\/i>) ở hệ thống phía sau nếu code backend đang chờ nhận một mảng (<i>array<\/i>). Mảng rỗng <code>[]<\/code> là lựa chọn chuẩn hóa hơn.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-112",
    "set": 2,
    "number": 112,
    "type": "single",
    "question": "<p>Evaluation shows 94% extraction accuracy on short meeting transcripts (&lt;30 minutes) but only 68% on longer transcripts (&gt;60 minutes) where discussions meander and key information is scattered throughout. Transcripts of both lengths fit within the model's context window.<\/p><p>What pattern most effectively improves accuracy on complex, lengthy documents?<\/p>",
    "options": {
      "A": "<p>Upgrade to a more capable model tier for the extraction task<\/p>",
      "B": "<p>Add a pre-extraction step where the model summarizes key discussions and conclusions before performing structured extraction.<\/p>",
      "C": "<p>Add few-shot examples demonstrating correct extraction from lengthy meetings with scattered Information.<\/p>",
      "D": "<p>Split lengthy transcripts Into chunks, extract from each chunk separately, then merge and deduplicate the results.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Đáp án chính xác của câu hỏi này là <b>D: Split lengthy transcripts into chunks, extract from each chunk separately, then merge and deduplicate the results.<\/b><\/p><hr/><h3>Giải thích nguyên lý kỹ thuật:<\/h3><ol start=\"1\"><li><p><b>Khắc phục triệt để hiện tượng \"Lost in the Middle\":<\/b><\/p><ul><li><p>Đề bài đặt ra tình huống: Dù bản ghi cuộc họp dài (&gt;60 phút) vẫn <b>nằm vừa trong context window<\/b>, nhưng độ chính xác lại giảm mạnh từ <b>94% xuống 68%<\/b>.<\/p><\/li><li><p>Đây là hiện tượng kinh điển của LLM: Khi ngữ cảnh quá dài và thông tin bị phân tán, cơ chế chú ý (Attention) của mô hình bị pha loãng (attention dilution), làm giảm khả năng trích xuất chính xác các thông tin nằm rải rác ở giữa văn bản.<\/p><\/li><\/ul><\/li><li><p><b>Áp dụng mô hình MapReduce (Chunk <span><span>→<\/span><\/span> Extract <span><span>→<\/span><\/span> Merge):<\/b><\/p><ul><li><p><b>Cắt nhỏ (Chunking):<\/b> Chia bản ghi dài thành từng phân đoạn nhỏ giúp mô hình tập trung 100% độ chú ý vào từng đoạn ngắn, đảm bảo không bỏ sót chi tiết.<\/p><\/li><li><p><b>Trích xuất từng phần (Extract):<\/b> Rút trích dữ liệu cấu trúc độc lập trên từng đoạn.<\/p><\/li><li><p><b>Gộp &amp; Lọc trùng (Merge &amp; Deduplicate):<\/b> Dùng một bước xử lý cuối cùng để hợp nhất các thông tin và loại bỏ các chi tiết bị lặp lại.<\/p><\/li><\/ul><\/li><\/ol><hr/><h3>Tại sao các phương án còn lại không giải quyết được vấn đề?<\/h3><ul><li><p><b>A (Upgrade model):<\/b> Tốn chi phí nhưng không giải quyết được bản chất pha loãng chú ý trên ngữ cảnh dài phân tán.<\/p><\/li><li><p><b>B (Pre-extraction summarization):<\/b> Tóm tắt trước trên toàn bộ tệp dài vẫn bắt mô hình phải đọc hết ngữ cảnh bị pha loãng ngay từ bước 1, dẫn đến nguy cơ bỏ sót thông tin quan trọng ngay trong bản tóm tắt.<\/p><\/li><li><p><b>C (Few-shot examples):<\/b> Tốn dung lượng token và không giúp ích nhiều khi cấu trúc thảo luận của mỗi cuộc họp dài là hoàn toàn khác nhau.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-113",
    "set": 2,
    "number": 113,
    "type": "single",
    "question": "<p>Your automated review calls the Claude API for each PR, using tool_use with a report_findings tool that returns a JSON array of finding objects (each with file_path, line_number, severity, category, and description). During testing on a large PR touching 30+ files, the response hits the max_tokens limit and the output is truncated mid-JSON, causing your pipeline's parser to fail.<\/p><p>What is the most effective way to handle this?<\/p>",
    "options": {
      "A": "<p>Split the review into multiple API calls that each analyze a subset of the changed files, then merge the resulting findings arrays.<\/p>",
      "B": "<p>Switch from tool_use to prompting Claude to return findings as a markdown list.<\/p>",
      "C": "<p>Add retry logic that detects truncated JSON and re-sends the request with instructions to report only critical and high severity findings.<\/p>",
      "D": "<p>Increase max_tokens to the model's maximum and instruct Claude to keep finding descriptions under 50 words each.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b> Khi xử lý một Pull Request (PR) lớn với số lượng file thay đổi lớn (30+ files), lượng thông tin trả về vượt quá giới hạn <code>max_tokens<\/code> của mô hình, dẫn đến việc cắt cụt chuỗi JSON. Giải pháp kiến trúc chuẩn và hiệu quả nhất là chia nhỏ khối lượng công việc (chia PR thành các tập con file nhỏ hơn để phân tích qua các lệnh gọi API riêng biệt) sau đó gộp kết quả của các mảng findings lại với nhau. Cách làm này vừa đảm bảo không bị tràn bộ nhớ/token vừa giữ nguyên tính năng <code>tool_use<\/code> cấu trúc sẵn.<\/p><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>B:<\/b> Chuyển sang định dạng danh sách markdown làm mất đi tính cấu trúc chặt chẽ của <code>tool_use<\/code>, đồng thời vẫn có nguy cơ bị cắt nội dung nếu lượng chữ quá lớn.<\/p><\/li><li><p><b>C:<\/b> Việc giảm bớt mức độ nghiêm trọng (chỉ lấy critical và high) là giải pháp mang tính chắp vá, có thể bỏ sót các lỗi quan trọng ở mức độ trung bình hoặc thấp.<\/p><\/li><li><p><b>D:<\/b> <code>max_tokens<\/code> luôn có giới hạn phần cứng tối đa của mô hình, việc ép mô tả ngắn dưới 50 từ không giải quyết được gốc rễ vấn đề khi số lượng file quá lớn.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-114",
    "set": 2,
    "number": 114,
    "type": "single",
    "question": "<p>A new user's first message is \"Set up my focus music,\" This could mean configure preferences, create a playlist, or play music immediately. Your system supports all three actions.<\/p><p>What's the effective approach?<\/p>",
    "options": {
      "A": "<p>Create a new \"Focus\" playlist with curated tracks and notify the user it's ready.<\/p>",
      "B": "<p>Play popular focus tracks Immediately and let the user redirect if needed<\/p>",
      "C": "<p>Ask one clarifying question about action type: play now or configure for later<\/p>",
      "D": "<p>Start preference configuration by asking about genres, temps, and artists they prefer for focus.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b> Trong trường hợp này, thông điệp ban đầu của người dùng (<code>\"Set up my focus music\"<\/code>) mang tính đa nghĩa (ambiguous), và hệ thống hỗ trợ nhiều hành động hoàn toàn khác nhau (cấu hình sở thích, tạo playlist mới, hoặc phát nhạc ngay lập tức). Theo nguyên tắc thiết kế trải nghiệm người dùng hội thoại (conversational UX) và thiết kế hệ thống agent hiệu quả, khi yêu cầu của người dùng mơ hồ và có thể dẫn đến các tác vụ trái ngược nhau, giải pháp tốt nhất là <b>đặt một câu hỏi làm rõ duy nhất (clarifying question)<\/b> để xác định chính xác mong muốn của người dùng trước khi thực thi, thay vì đoán mò và tự ý thực hiện hành động sai lệch.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A &amp; B:<\/b> Việc tự động thực hiện hành động (tạo playlist hoặc phát nhạc ngay) mà không hỏi ý kiến có thể làm phiền người dùng hoặc đi ngược lại ý định thực sự của họ (ví dụ: người dùng chỉ muốn cấu hình thiết lập trước chứ chưa muốn nhạc bật lên ngay).<\/p><\/li><li><p><b>D:<\/b> Việc lao ngay vào cấu hình chi tiết (hỏi về thể loại, nghệ sĩ, tempo) quá sớm sẽ tạo ra ma sát lớn (friction) ngay từ câu lệnh đầu tiên, trong khi người dùng có thể chỉ muốn hệ thống bắt đầu phát nhạc ngay lập tức.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-115",
    "set": 2,
    "number": 115,
    "type": "single",
    "question": "<p>Your publish article tool calls an external CMS API that occasionally returns transient errors (network timeouts, 503s) and non-transient errors (403 permission denied, 422 validation failure). Currently, every error is returned directly to the agent, which leads to the agent retrying non-transient errors and wasting turns on failures that will never succeed.<\/p><p>How should you partition error-handling responsibility between the tool implementation and the agent?<\/p>",
    "options": {
      "A": "<p>Implement a universal error handler that catches all exceptions and returns a generic \"tool unavailable- try again later\" message, shielding the agent from error complexity.<\/p>",
      "B": "<p>Surface all errors to the agent immediately with detailed context, and let the agent decide which errors to retry and how many times-keeping the tool implementation stateless and simple.<\/p>",
      "C": "<p>Handle transient errors (timeouts, 503s) with automatic retries inside the tool implementation, and surface non-transient errors (permission denied, validation fallures) to the agent with descriptive messages so it can take corrective action.<\/p>",
      "D": "<p>Handle all errors inside the tool: Implement retries with exponential backoff for every error type, and only surface a failure to the agent after a fixed number of retry attempts have been exhausted.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b> Nguyên tắc phân chia trách nhiệm (separation of concerns) hiệu quả nhất trong thiết kế tool cho AI Agent là:<\/p><ul><li><p><b>Lỗi tạm thời (transient errors như timeouts, 503):<\/b> Nên được tự động xử lý (retry) ngầm bên trong tool implementation để giảm tải vòng lặp cho agent và tiết kiệm token.<\/p><\/li><li><p><b>Lỗi vĩnh viễn / logic (non-transient errors như 403, 422):<\/b> Phải được trả về kèm thông điệp rõ ràng cho agent, giúp agent có đủ ngữ cảnh để thực hiện hành động khắc phục (ví dụ: sửa lại dữ liệu đầu vào hoặc thông báo xin quyền).<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>A:<\/b> Bọc tất cả lỗi thành một thông báo chung chung làm mất đi thông tin chi tiết, khiến agent không phân biệt được lỗi nào cần sửa và lỗi nào cần chờ.<\/p><\/li><li><p><b>B:<\/b> Bắt agent phải tự xử lý cả lỗi mạng và retry thủ công sẽ lãng phí số lượt tương tác (turns) và làm phức tạp hóa vòng lặp suy luận một cách không cần thiết.<\/p><\/li><li><p><b>D:<\/b> Cố gắng retry cả các lỗi không bao giờ thành công (như 403 permission denied hoặc 422 validation failure) là vô nghĩa và gây lãng phí thời gian tài nguyên hệ thống.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-116",
    "set": 2,
    "number": 116,
    "type": "single",
    "question": "<p>Your agent has access to 50+ specialized API connectors for different external services. As the connector library grew, tool selection accuracy dropped to 58%. You design a search_connectors(description) tool that finds matching connectors, but in testing agents frequently skip searching and call connectors directly (often incorrectly), or search select wrong connectors from the filtered results.<\/p><p>How should you design the tool composition pattern to address both issues?<\/p>",
    "options": {
      "A": "<p>Design a find_and_execute(description, params) composite tool that searches and immediately executes the best matching connector.<\/p>",
      "B": "<p>Design connectors with built-in compatibility validation that return descriptive errors for mismatched requests.<\/p>",
      "C": "<p>Enhance all connector descriptions with detailed usage samples, edge cases, and input requirements. Add few-shot examples showing the correct search-then-use workflow.<\/p>",
      "D": "<p>Design search_connectors to dynamically add matched connectors to the agent's available tools. Connectors start unavailable and persist once discovered.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn D:<\/b> Vấn đề cốt lõi ở đây là: (1) Agent bỏ qua bước search và gọi thẳng connector (vì chúng luôn sẵn có trong danh sách công cụ), và (2) Agent chọn sai connector từ kết quả tìm kiếm. Bằng cách thiết kế công cụ <code>search_connectors<\/code> để <b>thêm động (dynamically add) các connector vào danh sách công cụ sẵn có của agent sau khi tìm thấy<\/b> (và giữ nguyên từ đó), chúng ta vô hiệu hóa việc agent tự ý gọi các connector chưa được khám phá (vì ban đầu chúng chưa khả dụng/chưa xuất hiện trong schema), đồng thời ép agent phải thông qua cơ chế tìm kiếm, loại bỏ hoàn toàn các lựa chọn sai lệch do quá tải context ban đầu.<\/p><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>A:<\/b> Dùng <code>find_and_execute<\/code> gộp chung tìm và chạy làm mất đi tính kiểm soát bước trung gian của agent, và nếu agent chọn sai công cụ tìm kiếm thì hành động thực thi cũng sẽ sai ngay lập tức mà không có cơ hội kiểm tra lại.<\/p><\/li><li><p><b>B:<\/b> Validation bên trong chỉ giúp báo lỗi sau khi gọi sai chứ không ngăn chặn được việc agent bỏ qua bước search hoặc chọn sai từ đầu.<\/p><\/li><li><p><b>C:<\/b> Việc cải thiện mô tả và thêm few-shot examples không giải quyết triệt để vấn đề quá tải khi số lượng connector quá lớn (hơn 50+), hiện tượng context window bị loãng vẫn khiến agent chọn nhầm hoặc bỏ qua bước tìm kiếm.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-117",
    "set": 2,
    "number": 117,
    "type": "single",
    "question": "<p>Your pipeline reviews every PR using a single API call with a static prompt containing the diff and full text of each changed file — unchanged files are not included. Reviews are posted asynchronously and don't block PR creation. Developers report that reviews consistently miss bugs involving cross-file interactions — for example, a PR renames a function's parameters but the review doesn't flag callers in unchanged files that still use the old argument order. Evaluation shows cross-file bugs account for 35% of production incidents from reviewed PRs.<\/p><p>What is the most effective change to your review design?<\/p>",
    "options": {
      "A": "<p>Add chain-of-thought instructions asking the model to list all external references in the diff, then reason step-by-step about how each change might affect callers in other files.<\/p>",
      "B": "<p>Run parallel review passes per changed file with direct dependents included in each pass, then aggregate and deduplicate findings using a final summarization call.<\/p>",
      "C": "<p>Redesign the review as a turn-limited agentic task where the model can read files and search the codebase via tools, following references to verify cross-file findings.<\/p>",
      "D": "<p>Use static analysis to build a dependency graph of changed code, then expand the prompt to include all files within two dependency hops of any changed file.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b> Vấn đề cốt lõi được nêu trong bài toán là pipeline hiện tại chỉ truyền các tệp thay đổi (changed files) và bỏ qua các tệp không thay đổi, dẫn đến việc mô hình thiếu ngữ cảnh toàn cục để phát hiện các lỗi tương tác giữa các tệp (cross-file interactions) như các hàm gọi đến ở tệp khác. Thiết kế lại hệ thống thành dạng <b>agentic task (tác vụ tự trị giới hạn lượt)<\/b> cho phép mô hình chủ động sử dụng các công cụ tìm kiếm và đọc mã nguồn (<code>search the codebase<\/code>, <code>read files<\/code>) để tự truy vết các tệp liên quan. Đây là giải pháp tiêu chuẩn và hiệu quả nhất trong kiến trúc LLM hiện đại để giải quyết bài toán context rộng và phụ thuộc chéo mà không làm quá tải static prompt.<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Chỉ dùng chain-of-thought (CoT) trong static prompt vẫn bị giới hạn bởi việc mô hình <b>không thực sự nhìn thấy nội dung của các tệp không thay đổi<\/b> nằm ngoài prompt, dẫn đến việc suy luận bước-nhưng-thiếu-dữ-liệu.<\/p><\/li><li><p><b>B:<\/b> Việc chạy các pass song song với các direct dependents chỉ giải quyết được một phần nhỏ (cấp độ phụ thuộc trực tiếp) nhưng vẫn cứng nhắc, tốn kém tài nguyên và không linh hoạt bằng việc để agent tự động tìm kiếm.<\/p><\/li><li><p><b>D:<\/b> Việc dùng static analysis để nhét tất cả các tệp trong 2 dependency hops vào prompt sẽ làm <b>context window bị phình to quá mức (context bloat)<\/b>, làm giảm hiệu suất chú ý (attention) của mô hình và tăng chi phí token một cách không cần thiết.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-118",
    "set": 2,
    "number": 118,
    "type": "single",
    "question": "<p>Your code review assistant needs to analyze pull requests and provide feedback on three aspects: code style compliance, potential security issues, and documentation completeness. Each aspect requires reading files, running analysis tools, and generating a report section. The review process follows the same three-step workflow for every PR.<\/p><p>Which task decomposition pattern is most appropriate for this workflow?<\/p>",
    "options": {
      "A": "<p>Orchestrator-workers—have a central LLM analyze each PR to dynamically determine which checks are needed, then delegate to specialized worker LLMs for each identified subtask.<\/p>",
      "B": "<p>Single comprehensive prompt—include all instructions in one prompt and let the model handle all three aspects simultaneously.<\/p>",
      "C": "<p>Routing—classify each PR by type (feature, bugfix, refactor) first, then route to different review prompts optimized for that category.<\/p>",
      "D": "<p>Prompt chaining—break the review into sequential steps where each aspect (style, security, documentation) is analyzed separately, with outputs combined in a final synthesis step.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Yêu cầu cốt lõi của đề bài:<\/b><\/p><ul><li><p>Quy trình đánh giá PR luôn tuân theo <b>cùng một quy trình 3 bước cố định<\/b> (<i>follows the same three-step workflow for every PR<\/i>) bao gồm: kiểm tra chuẩn mã nguồn (code style), bảo mật (security), và tài liệu (documentation), sau đó tổng hợp lại báo cáo.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao D đúng (Prompt Chaining):<\/b><\/p><ul><li><p><b>Prompt Chaining<\/b> (Chuỗi Prompt) là mô hình phân rã tác vụ (Task Decomposition Pattern) trong đó đầu ra của bước này làm đầu vào cho bước tiếp theo theo một thứ tự tuyến tính/cố định.<\/p><\/li><li><p>Vì quy trình đánh giá PR ở đây là <b>cố định và lặp lại giống hệt nhau<\/b> cho mọi PR, việc xâu chuỗi các bước xử lý nối tiếp (Style <span><span>→<\/span><\/span> Security <span><span>→<\/span><\/span> Documentation <span><span>→<\/span><\/span> Synthesize Report) là giải pháp tối ưu, đơn giản và đáng tin cậy nhất.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không phù hợp:<\/h3><ul><li><p><b>A (Orchestrator-workers):<\/b> Dùng khi các subtask cần được phân tích và quyết định <b>động<\/b> (dynamically) tùy theo từng trường hợp. Trong khi ở đây quy trình là cố định cho mọi PR.<\/p><\/li><li><p><b>B (Single comprehensive prompt):<\/b> Dễ gây quá tải ngữ cảnh (context congestion), giảm độ chính xác khi mô hình phải thực hiện đồng thời nhiều tiêu chí kiểm tra phức tạp trong 1 lần gọi.<\/p><\/li><li><p><b>C (Routing):<\/b> Chỉ phù hợp khi cần phân loại đầu vào để chuyển tiếp hướng xử lý sang các nhánh hoàn toàn khác nhau (ví dụ: PR sửa lỗi đi luồng khác PR tính năng mới). Ở đây mọi PR đều cần trải qua đúng 3 bước như nhau.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-119",
    "set": 2,
    "number": 119,
    "type": "single",
    "question": "<p>Your team is extracting structured data from 50,000 legacy legal contracts under a two-week deadline. Initial testing with 500 sample documents shows 82% pass JSON schema first attempt, while the remaining 18% fall due to diverse issues—missing required fields, malformed dates, and incorrectly identified parties. Documents that fail typically need refinements targeting their specific failure modes before extraction succeeds.<\/p><p>Which batch processing strategy is the most cost-efficient while still meeting the deadline?<\/p>",
    "options": {
      "A": "<p>Use the real-time API for all 50,000 documents since the batch API's 24-hour processing window creates unacceptable deadline risk.<\/p>",
      "B": "<p>Split documents into 10 sequential batches of 5,000 each, analysing results and refining prompts between batches to improve extraction quality progressively.<\/p>",
      "C": "<p>Submit all 50,000 documents via batch API, then submit failed extractions in successive batches— refining prompts between each batch—until all documents pass validation.<\/p>",
      "D": "<p>Process 2,000 sample documents via real time API to identify failure patterns and refine prompts, then batch process all 50,000 with the optimized prompts.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Yêu cầu của bài toán:<\/b><\/p><ul><li><p><b>Tối ưu chi phí tối đa (Cost-efficient):<\/b> Sử dụng <b>Message Batches API<\/b> giúp giảm <b>50% chi phí<\/b> so with Real-time API.<\/p><\/li><li><p><b>Đảm bảo thời hạn (Deadline 2 tuần):<\/b> Thời gian xử lý Batch API là trong vòng 24 giờ, hoàn toàn thoải mái cho deadline 14 ngày.<\/p><\/li><li><p><b>Xử lý tài liệu lỗi:<\/b> 82% tài liệu thành công ngay lần đầu. 18% còn lại bị lỗi có thể được tinh chỉnh prompt và gửi lại qua các đợt batch tiếp theo cho đến khi đạt chuẩn validation.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không đúng:<\/h3><ul><li><p><b>A (Dùng Real-time API cho tất cả 50,000 tài liệu):<\/b> Tốn gấp đôi chi phí không cần thiết vì Batch API 24h hoàn toàn đáp ứng tốt deadline 2 tuần.<\/p><\/li><li><p><b>B (Chia thành 10 đợt nối tiếp 5,000 tài liệu):<\/b> Chạy nối tiếp 10 đợt batch (mỗi đợt mất tối đa 24h) sẽ làm kéo dài tổng thời gian xử lý (có thể mất tới 10 ngày chỉ để đợi batch), tạo ra rủi ro trễ hạn không cần thiết.<\/p><\/li><li><p><b>D (Thử nghiệm 2,000 mẫu bằng Real-time API):<\/b> Tự làm tăng thêm chi phí Real-time API và thời gian thử nghiệm thủ công, trong khi đợt Batch 50,000 đầu tiên đã tự động trích xuất thành công ngay 82% dữ liệu với giá giảm một nửa.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-120",
    "set": 2,
    "number": 120,
    "type": "single",
    "question": "<p>You need to add a date validation check ensuring event dates are in the future. This requires adding a conditional statement to one existing function in a single file.<\/p><p>What is the most appropriate approach?<\/p>",
    "options": {
      "A": "<p>Start with extended thinking mode enabled to ensure thorough reasoning about the validation logic<\/p>",
      "B": "<p>Enter plan mode first to create a detailed implementation strategy before making the change<\/p>",
      "C": "<p>Use direct execution to make the change<\/p>",
      "D": "<p>Enter plan mode to analyze how the validation might impact other parts of the reservation flow<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b> Bài toán đặt ra yêu cầu chỉnh sửa rất đơn giản và cục bộ: <i>\"thêm một câu lệnh điều kiện vào một hàm có sẵn trong duy nhất một tệp\"<\/i>. Đối với các tác vụ nhỏ, rõ ràng và có phạm vi cực kỳ hạn chế như thế này, việc sử dụng phương pháp <b>thực thi trực tiếp (direct execution)<\/b> là hiệu quả và tối ưu nhất, giúp tránh lãng phí thời gian và token cho các bước lập kế hoạch hay suy luận phức tạp không cần thiết (như plan mode hay extended thinking mode vốn chỉ dành cho các tính năng hệ thống lớn, đa tệp hoặc mang tính kiến trúc cao).<\/p><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A, B &amp; D:<\/b> Việc bật extended thinking hay chuyển sang plan mode là quá mức cần thiết (overkill) đối với một chỉnh sửa code đơn giản trong một tệp duy nhất, làm tăng độ trễ và quy trình xử lý của agent một cách không cần thiết.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-121",
    "set": 3,
    "number": 121,
    "type": "single",
    "question": "<p>Your team is configuring MCP servers in Claude Code. You want to add a shared venue lookup server that all team members should have access to, and you personally want to add an experimental music playlist server that only you are testing.<\/p><p>Which configuration approach correctly applies MCP server scopes?<\/p>",
    "options": {
      "A": "<p>Add venue server to ~/.claude.json and playlist server to .mcp.json<\/p>",
      "B": "<p>Add both servers to your local ~/.claude.json<\/p>",
      "C": "<p>Add venue server to .mcp.json and playlist server to ~/.claude.json<\/p>",
      "D": "<p>Add both servers to the project-level .mcp.json file<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b><\/p><ul><li><p><b>File cấu hình cấp dự án (<code>.mcp.json<\/code>):<\/b> Nằm trong thư mục gốc của dự án và được commit vào hệ thống quản lý mã nguồn (Git). Tất cả thành viên trong nhóm làm việc trên dự án này đều sẽ chia sẻ và truy cập được các MCP server khai báo ở đây (phù hợp cho <b>shared venue lookup server<\/b>).<\/p><\/li><li><p><b>File cấu hình cá nhân cục bộ (<code>~/.claude.json<\/code>):<\/b> Nằm trong thư mục người dùng cá nhân (home directory). Các server cấu hình ở đây chỉ áp dụng riêng cho máy của bạn và không bị commit vào dự án chung (phù hợp cho <b>experimental music playlist server<\/b> mà chỉ một mình bạn thử nghiệm).<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không đúng?<\/b><\/h3><ul><li><p><b>A sai:<\/b> Bị ngược vị trí: thêm server dùng chung vào file cá nhân <code>~/.claude.json<\/code> thì đồng đội sẽ không dùng được, còn đưa server thử nghiệm cá nhân vào <code>.mcp.json<\/code> sẽ làm ảnh hưởng đến cả đội.<\/p><\/li><li><p><b>B sai:<\/b> Nếu đưa cả hai vào <code>~/.claude.json<\/code> thì các thành viên khác trong team sẽ không có quyền truy cập vào venue lookup server.<\/p><\/li><li><p><b>D sai:<\/b> Nếu đưa cả hai vào <code>.mcp.json<\/code> thì server nhạc thử nghiệm cá nhân của bạn sẽ bị chia sẻ cho toàn bộ nhóm.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-122",
    "set": 3,
    "number": 122,
    "type": "single",
    "question": "<p>A customer raises three separate issues during one session: a refund inquiry (turns 1-15), a subscription question (turns 16-30), and a payment method update (turns 31-45). At turn 48, the customer asks \"What happened with my refund?\" The conversation is approaching context limits.<\/p><p>What strategy best maintains the agent's ability to address all issues throughout the session?<\/p>",
    "options": {
      "A": "<p>Extract and persist structured issue data (order IDs, amounts, statuses) into a separate context layer.<\/p>",
      "B": "<p>Summarize earlier turns into a narrative description, preserving full message history only for the active issue.<\/p>",
      "C": "<p>Implement sliding window context that retains the most recent 30 turns.<\/p>",
      "D": "<p>Rely on MCP tools to re-fetch relevant information on demand when the customer references earlier issues.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<blockquote><p><b>Đề bài:<\/b> Khách hàng nêu ra ba vấn đề riêng biệt trong một phiên làm việc: câu hỏi hoàn tiền (lượt 1-15), câu hỏi về gói đăng ký (lượt 16-30), và cập nhật phương thức thanh toán (lượt 31-45). Đến lượt 48, khách hàng hỏi: \"Chuyện hoàn tiền của tôi đến đâu rồi?\". Cuộc trò chuyện đang tiệm cận giới hạn ngữ cảnh (context limits).<\/p><p>Chiến lược nào duy trì tốt nhất khả năng của agent trong việc giải quyết tất cả các vấn đề trong suốt phiên làm việc?<\/p><\/blockquote><h3>Giải thích chi tiết<\/h3><p>Đáp án đúng là <b>A: Extract and persist structured issue data (order IDs, amounts, statuses) into a separate context layer.<\/b> (Trích xuất và lưu trữ dữ liệu vấn đề có cấu trúc (ID đơn hàng, số tiền, trạng thái) vào một tầng ngữ cảnh riêng).<\/p><h3>Lý do các phương án còn lại không tối ưu:<\/h3><ul><li><p><b>B (Tóm tắt các lượt trước thành văn bản tường thuật):<\/b> Văn bản tường thuật dạng tự do dễ làm mất đi các dữ liệu cụ thể như ID đơn hàng hoặc trạng thái chính xác.<\/p><\/li><li><p><b>C (Dùng cửa sổ trượt giữ lại 30 lượt gần nhất):<\/b> Giữ 30 lượt gần nhất (lượt 19-48) sẽ làm mất hoàn toàn thông tin về vấn đề hoàn tiền (diễn ra ở lượt 1-15), khiến agent không nhớ khách hàng đang hỏi về cái gì.<\/p><\/li><li><p><b>D (Dựa vào công cụ MCP để tra cứu lại):<\/b> Việc phụ thuộc hoàn toàn vào gọi lại tool cho các vấn đề cũ làm tăng thêm độ trễ và số lượt gọi không cần thiết khi dữ liệu có thể được lưu trữ dạng trạng thái gọn nhẹ.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-123",
    "set": 3,
    "number": 123,
    "type": "single",
    "question": "<p>Your order management system requires tools for three distinct operations: issuing refunds (requires amount and reason), canceling orders (requires reason), and res (requires shipping address). Each operation shares an order id parameter but has different additional requirements. You notice during testing that with your current frequently omits required parameters or includes irrelevant ones.<\/p><p>What design change will most effectively improve parameter accuracy?<\/p>",
    "options": {
      "A": "<p>Keep one unified tool with all parameters marked optional, but add few-shot examples in the system prompt showing correct parameter combinations for each operation.<\/p>",
      "B": "<p>Keep one unified tool but add JSON Schema if-then-else conditionals to enforce that parameters like amount are required only when the operation type is \"refund\".<\/p>",
      "C": "<p>Split into three separate tools (each defining only the parameters required for that specific operation.<\/p>",
      "D": "<p>Keep one unified tool with a nested operation object parameter whose internal structure varies by operation type, documented in the tool description.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Bản chất vấn đề:<\/b><\/p><ul><li><p>Khi một công cụ duy nhất (<i>unified tool<\/i>) cố gắng xử lý nhiều thao tác có các tham số đầu vào khác nhau (refund, cancel, reship), mô hình LLM rất dễ bị nhầm lẫn, dẫn đến việc bỏ sót các tham số bắt buộc hoặc truyền thừa các tham số không liên quan.<\/p><\/li><li><p>Việc định nghĩa tất cả tham số dưới dạng <code>optional<\/code> hoặc dùng cấu trúc điều kiện phức tạp khiến mô hình khó tuân thủ chính xác JSON Schema.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao C đúng (Single Responsibility Principle for Tools):<\/b><\/p><ul><li><p>Chia thành 3 công cụ riêng biệt (<code>issue_refund<\/code>, <code>cancel_order<\/code>, <code>reship_order<\/code>) với JSON Schema rõ ràng cho từng thao tác giúp mô hình dễ dàng xác định chính xác tham số nào là <b>bắt buộc (<code>required<\/code>)<\/b> cho thao tác đó.<\/p><\/li><li><p>Đây là thực hành chuẩn (<i>Best Practice<\/i>) thiết kế Tool Use cho Claude/LLMs: <b>Thà tạo nhiều công cụ nhỏ với nhiệm vụ và schema rõ ràng hơn là dùng một công cụ đa năng có schema phức tạp.<\/b><\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không tối ưu:<\/h3><ul><li><p><b>A (Dùng Few-shot examples):<\/b> Không đảm bảo triệt để 100% độ chính xác vì schema vẫn đánh dấu các tham số là optional, mô hình vẫn có xác xuất điền sai.<\/p><\/li><li><p><b>B (Dùng JSON Schema <code>if-then-else<\/code>):<\/b> Mặc dù chuẩn JSON Schema hỗ trợ điều kiện <code>if-then-else<\/code>, hầu hết các mô hình LLM (bao gồm Claude) xử lý cú pháp logic phức tạp này trong schema rất kém.<\/p><\/li><li><p><b>D (Dùng Nested operation object):<\/b> Tạo thêm cấu trúc lồng nhau phức tạp (<i>nested object<\/i>) làm tăng độ khó cho mô hình khi tạo JSON payload, dễ dẫn đến lỗi định dạng.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-124",
    "set": 3,
    "number": 124,
    "type": "single",
    "question": "<p>A customer sends: \"This is frustrating. I've explained my issue twice and nothing is being resolved. I want to talk to a real person NOW.\" The agent has not yet called any tools to investigate their account.<\/p><p>What should the agent do?<\/p>",
    "options": {
      "A": "<p>Acknowledge the frustration and ask one targeted question to understand the specific issue before escalating.<\/p>",
      "B": "<p>Immediately call escalate_to_human with the conversation history.<\/p>",
      "C": "<p>Briefly explain what the agent can help with and offer to resolve the issue quickly, escalating only if the customer repeats their request.<\/p>",
      "D": "<p>First call get_customer and lookup_order to gather account context, then escalate to a human agent.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Đáp án đúng: <b>[B]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn B:<\/b> Khi một khách hàng đã bày tỏ rõ sự tức giận tột độ, cảm thấy mất thời gian vì phải lặp lại vấn đề nhiều lần và <b>yêu cầu trực tiếp rõ ràng được nói chuyện với người thật ngay lập tức (\"NOW\")<\/b>, mô hình thiết kế agent tuân thủ nguyên tắc \"Human-in-the-loop\" tốt nhất là <b>ngay lập tức gọi công cụ <code>escalate_to_human<\/code> kèm theo toàn bộ lịch sử trò chuyện<\/b>. Việc cố gắng gặng hỏi thêm hay tự ý gọi tool tra cứu (như ở các đáp án khác) lúc này chỉ càng làm khách hàng thêm bực bội vì yêu cầu kết nối với nhân viên con người bị phớt lờ.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A &amp; C:<\/b> Cố gắng kéo dài thời gian tương tác, đặt thêm câu hỏi hoặc thuyết phục khách hàng tiếp tục làm việc với AI khi họ đã kiên quyết đòi gặp con người sẽ làm gia tăng trải nghiệm tiêu cực.<\/p><\/li><li><p><b>D:<\/b> Việc gọi công cụ thu thập thông tin trước khi chuyển giao là dư thừa vì lịch sử trò chuyện đã bao gồm các dữ liệu cần thiết và làm chậm trễ quá trình chuyển giao cho nhân viên thực tế.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-125",
    "set": 3,
    "number": 125,
    "type": "single",
    "question": "<p>Users frequently refine their search criteria mid-conversation. You notice a pattern: when users say things like \"Actually, let's raise the budget to $650K\" or \"I'd prefer a condo now instead of a house,\" the assistant sometimes continues referencing the original preferences in later responses—even though the updates are clearly present in the conversation history. Context usage is only at 35% capacity.<\/p><p>Which solution most reliably ensures the model uses the current preferences?<\/p>",
    "options": {
      "A": "<p>Add system prompt instructions emphasizing that the model should always prioritize the most recently stated preferences over earlier ones.<\/p>",
      "B": "<p>Include few-shot examples showing the assistant correctly acknowledging and applying preference changes in responses.<\/p>",
      "C": "<p>Maintain a structured state object with current preferences, update it on changes, and include it in each request.<\/p>",
      "D": "<p>Implement conversation pruning to remove turns containing outdated preferences, ensuring only current ones remain in context.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b><\/p><ul><li><p>Đây là mô hình quản lý trạng thái chuẩn (<b>State Management<\/b>) khi làm việc với LLMs trong các ứng dụng thực tế. Việc duy trì một đối tượng trạng thái cấu trúc (structured state/JSON object) chứa toàn bộ ưu tiên hiện tại và cập nhật nó mỗi khi người dùng thay đổi tiêu chí giúp tạo ra <b>nguồn sự thật duy nhất (Single Source of Truth)<\/b>.<\/p><\/li><li><p>Khi đưa đối tượng trạng thái này vào mỗi yêu cầu API (trong system prompt hoặc context), mô hình sẽ luôn truy cập chính xác các tùy chọn mới nhất mà không bị lẫn lộn bởi các thông tin lịch sử cũ trong cuộc trò chuyện.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phải là giải pháp đáng tin cậy nhất?<\/b><\/h3><ul><li><p><b>A &amp; B sai:<\/b> Thêm hướng dẫn trong system prompt hay dùng few-shot examples chỉ là giải pháp mang tính gợi ý (probabilistic prompt engineering). Khi đoạn chat dài lên, mô hình vẫn có xác suất cao bị ảnh hưởng bởi thông tin cũ (recency vs context bias).<\/p><\/li><li><p><b>D sai:<\/b> Cắt tỉa hội thoại (conversation pruning) xóa đi các lượt thoại cũ có thể làm mất ngữ cảnh tự nhiên của câu chuyện và tốn thêm chi phí/logic phức tạp để phát hiện và xóa chính xác các câu chứa thông tin lỗi thời.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-126",
    "set": 3,
    "number": 126,
    "type": "single",
    "question": "<p>You're implementing the escalation logic for when the agent should call escalate_to_human. Your team proposes four different approaches for triggering escalation.<\/p><p>Which approach will most reliably identify cases that genuinely require human intervention?<\/p>",
    "options": {
      "A": "<p>Build a rules engine that maps specific issue types, customer segments, and product categories to escalation decisions, removing the need for model judgment calls.<\/p>",
      "B": "<p>Instruct the agent to escalate when the customer requests a human, when the issue requires policy exceptions, or when the agent cannot make meaningful progress.<\/p>",
      "C": "<p>Configure the agent to escalate after three consecutive tool calls that fail to resolve the customer's stated issue, ensuring a reasonable attempt before involving a human.<\/p>",
      "D": "<p>Implement sentiment analysis that monitors for frustration indicators (negative language, repeated questions, exclamation marks) and trigger escalation when the frustration score exceeds a configured threshold.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Đáp án đúng: <b>[B]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn B:<\/b> Trong thiết kế kiến trúc hệ thống agent hướng tới độ tin cậy và linh hoạt cao (đặc biệt theo các nguyên tắc của Anthropic), việc xác định thời điểm chuyển giao cho con người cần bao quát các tình huống thực tế cốt lõi: khách hàng chủ động yêu cầu, vấn đề vượt quá quyền hạn của AI (cần ngoại lệ chính sách - policy exceptions), hoặc agent rơi vào vòng lặp bế tắc không thể tạo ra tiến triển có ý nghĩa. Cách kết hợp các tiêu chí định tính này mang lại độ nhạy và độ chính xác cao nhất trong việc nhận diện đúng ca cần can thiệp.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Dùng rules engine cứng nhắc loại bỏ hoàn toàn phán đoán của mô hình sẽ quá cứng nhắc, không bao quát được vô số biến thể ngôn ngữ và tình huống phức tạp phát sinh từ phía khách hàng.<\/p><\/li><li><p><b>C:<\/b> Việc cố định con số \"ba lần gọi công cụ thất bại liên tiếp\" quá đơn giản và mang tính máy móc; nhiều trường hợp chỉ cần 1 lần gọi tool sai hoặc cần sự can thiệp ngay lập tức mà không cần đợi đến đủ 3 lần, hoặc ngược lại, có những tác vụ cần nhiều lần thử hợp lệ.<\/p><\/li><li><p><b>C &amp; D:<\/b> Phụ thuộc hoàn toàn vào điểm số phân tích cảm xúc (sentiment analysis) dựa trên từ khóa, dấu chấm than hay ngôn từ tiêu cực dễ dẫn đến việc nhận diện sai (dương tính giả khi khách hàng chỉ đang bức xúc kể chuyện hoặc sử dụng từ mạnh nhưng vấn đề hoàn toàn có thể tự giải quyết).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-127",
    "set": 3,
    "number": 127,
    "type": "single",
    "question": "<p>Your control_device tool manages smart home devices through external APIs. When a device doesn’t respond within the timeout period, the tool returns an error. Production logs show that the agent simply tells users “the device is not responding” without offering helpful next steps. Which error response structure would best enable the agent to provide useful follow-up?<\/p>",
    "options": {
      "A": "<p>Set is_error: true with a structured technical error containing the device ID, timeout duration, and raw API response code for debugging purposes.<\/p>",
      "B": "<p>Set is_error: true with a brief “Device offline” message and provide a separate tool the agent can call to retrieve context-specific troubleshooting suggestions.<\/p>",
      "C": "<p>Set is_error: false with an optimistic message indicating the command was dispatched successfully but device acknowledgment is still pending.<\/p>",
      "D": "<p>Set is_error: true with a message explaining the likely cause and suggesting troubleshooting steps the agent can offer the user.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h3><b>Vì sao D là thiết kế tối ưu nhất?<\/b><\/h3><ul><li><p><b>Cung cấp ngữ cảnh hành động ngay lập tức (Actionable Context):<\/b><\/p><ul><li><p>Khi thiết bị thông minh bị timeout, người dùng không chỉ muốn biết thiết bị bị lỗi mà còn muốn biết <b>nguyên nhân dự kiến<\/b> và <b>các bước xử lý tiếp theo<\/b>.<\/p><\/li><li><p>Việc trả về phản hồi lỗi có cấu trúc kèm các gợi ý khắc phục (ví dụ: <i>\"Kiểm tra kết nối Wi-Fi của thiết bị\"<\/i>, <i>\"Thử khởi động lại thiết bị\"<\/i>, hoặc <i>\"Kiểm tra xem thiết bị có đang cắm điện không\"<\/i>) giúp Agent có đầy đủ thông tin để chủ động tư vấn và hướng dẫn người dùng giải quyết vấn đề ngay trong phản hồi.<\/p><\/li><\/ul><\/li><li><p><b>Tránh phát sinh thêm lệnh gọi Tool (Tool Call Overhead):<\/b><\/p><ul><li><p>Nhúng trực tiếp các gợi ý khắc phục sự cố vào nội dung phản hồi lỗi giúp Agent phản hồi người dùng ngay lập tức mà không cần tốn thêm một lượt gọi API phụ.<\/p><\/li><\/ul><\/li><\/ul><h3><b>Vì sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A. Trả về thông tin kỹ thuật thô (<code>device_ID<\/code>, <code>raw API response code<\/code>) ❌<\/b><\/p><ul><li><p>Các mã lỗi kỹ thuật thô chỉ có ích cho nhà phát triển để debug, nhưng hoàn toàn vô ích với người dùng cuối. Agent sẽ không thể tự suy luận ra các bước hỗ trợ người dùng nếu chỉ nhận được một mã lỗi HTTP hoặc stack trace.<\/p><\/li><\/ul><\/li><li><p><b>B. Trả về lỗi ngắn gọn và yêu cầu gọi một Tool riêng để lấy gợi ý ❌<\/b><\/p><ul><li><p>Tự tạo ra sự phức tạp và tăng độ trễ (latency) không cần thiết. Việc bắt Agent phải thực hiện thêm một vòng gọi tool khác chỉ để lấy các gợi ý xử lý sự cố sẽ làm chậm trải nghiệm của người dùng.<\/p><\/li><\/ul><\/li><li><p><b>C. Đặt <code>is_error: false<\/code> và báo lệnh đã được gửi đi (Optimistic UI) ❌<\/b><\/p><ul><li><p><b>Đánh lừa người dùng:<\/b> Việc báo lệnh thành công khi thiết bị thực tế đã timeout có thể gây ra hậu quả xấu trong thực tế (ví dụ: người dùng tưởng cửa đã khóa hoặc đèn đã tắt nhưng thực tế thiết bị chưa nhận được lệnh).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-128",
    "set": 3,
    "number": 128,
    "type": "single",
    "question": "<p>Your process_refund tool returns two types of errors: technical errors (\"503 Service Unavailable\", \"Connection timeout\") that are transient (5% of calls), and business errors (\"Order exceeds 30-day return window\", \"Item already refunded\") that are permanent (12% of calls). Monitoring shows the agent wastes 3-4 turns retrying business errors that can never succeed. Currently, both error types return only a plain text message to Claude.<\/p><p>What's the most effective way to reduce wasted retries while improving customer-facing response quality?<\/p>",
    "options": {
      "A": "<p>Implement automatic retry logic at the tool level for technical errors only, passing business errors to Claude without retries.<\/p>",
      "B": "<p>Add few-shot examples showing how to distinguish retryable from non-retryable errors by parsing error message text.<\/p>",
      "C": "<p>Return structured error responses with retryable: false for business errors and a customer-friendly explanation for Claude to use.<\/p>",
      "D": "<p>Add a check_refund_eligibility tool that must be called before process_refund to prevent business rule violations.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Đáp án đúng: <b>[C]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn C:<\/b> Khi công cụ gặp cả lỗi kỹ thuật tạm thời (transient errors như timeout, 503) và lỗi nghiệp vụ cố định (permanent business errors như vượt quá 30 ngày đổi trả), việc chỉ trả về thông báo lỗi dạng văn bản thuần túy khiến mô hình LLM bị bối rối và cố gắng thử lại nhiều lần một cách vô ích. Giải pháp tối ưu và chuẩn xác nhất là <b>trả về các phản hồi lỗi có cấu trúc (structured error responses) chứa các trường tường minh như <code>retryable: false<\/code> đối với lỗi nghiệp vụ<\/b>, kết hợp kèm theo thông điệp giải thích thân thiện để mô hình nhận diện ngay lập tức mà không lãng phí số lượt gọi (turns) thực hiện lại các thao tác vô vọng.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Việc tự động ẩn lỗi và retry ngầm hoàn toàn ở tầng tool đối với mọi lỗi kỹ thuật có thể gây nghẽn hoặc che giấu các vấn đề hệ thống cốt lõi, đồng thời không giải quyết triệt để cách LLM tiếp nhận và hiểu các lỗi nghiệp vụ.<\/p><\/li><li><p><b>B:<\/b> Bổ sung few-shot examples để phân tích văn bản lỗi thủ công là giải pháp kém bền vững và dễ dẫn đến sai sót ngữ cảnh khi nội dung thông báo lỗi thay đổi.<\/p><\/li><li><p><b>D:<\/b> Việc bắt buộc phải gọi thêm một công cụ kiểm tra điều kiện riêng biệt trước mỗi lần chạy làm tăng thêm số bước gọi tool không cần thiết (round-trips) trong khi bản thân logic xử lý lỗi có thể được trả trực tiếp từ phản hồi của công cụ chính.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-129",
    "set": 3,
    "number": 129,
    "type": "single",
    "question": "<p>Your get_portfolio_value tool returns the total value of a user’s investment portfolio. You’re deciding between returning a structured JSON object with explicit fields versus returning the information as a formatted text string. What is the primary advantage of using structured output with defined fields?<\/p>",
    "options": {
      "A": "<p>JSON schemas automatically validate that the underlying API returned correct data before the agent processes it.<\/p>",
      "B": "<p>Structured JSON consumes significantly fewer tokens than natural language, substantially reducing API costs.<\/p>",
      "C": "<p>Structured JSON is processed deterministically by the model, significantly improving accuracy when extracting values.<\/p>",
      "D": "<p>The agent can reliably extract specific values without parsing free-form text, reducing errors in subsequent operations.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Giảm thiểu lỗi trích xuất dữ liệu (Reliable Data Extraction):<\/b><\/p><ul><li><p>Khi tool trả về dữ liệu cấu trúc JSON (ví dụ: <code>{\"portfolio_value\": 125000.50, \"currency\": \"USD\"}<\/code>), các cặp key-value được định nghĩa rõ ràng. Agent có thể xác định ngay lập tức giá trị cần tìm mà không cần phải xử lý hay đoán ngữ cảnh từ văn bản tự do (free-form text) như <i>\"Tổng giá trị danh mục đầu tư của bạn hiện tại là $125,000.50 USD\"<\/i>.<\/p><\/li><\/ul><\/li><li><p><b>Tăng độ chính xác cho các bước xử lý tiếp theo (Downstream Tool Calls):<\/b><\/p><ul><li><p>Nếu Agent cần lấy giá trị này để truyền vào một công cụ khác (ví dụ: <code>calculate_tax<\/code> hoặc <code>rebalance_portfolio<\/code>), việc trích xuất từ định dạng JSON giúp tránh được các lỗi phổ biến khi phân tích văn bản như: nhầm lẫn đơn vị tiền tệ, lấy sai dấu chấm/phẩy thập phân, hoặc bỏ sót dữ liệu.<\/p><\/li><\/ul><\/li><\/ul><h3><b>Vì sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A. Tự động kiểm tra dữ liệu chính xác từ API ❌<\/b><\/p><ul><li><p>JSON Schema chỉ kiểm tra được <b>cấu trúc và kiểu dữ liệu<\/b> (type constraint, ví dụ: bắt buộc là number hay string), chứ không thể tự động xác minh xem dữ liệu trả về từ API có <b>chính xác về mặt thực tế<\/b> hay không.<\/p><\/li><\/ul><\/li><li><p><b>B. Tiết kiệm đáng kể token và giảm chi phí ❌<\/b><\/p><ul><li><p>Định dạng JSON chứa nhiều cú pháp phụ như ngoặc nhọn <code>{}<\/code>, ngoặc kép <code>\"\"<\/code>, tên trường (keys)... Do đó, JSON không nhất thiết tiết kiệm token hơn văn bản tự nhiên, thậm chí đôi khi còn tốn nhiều token hơn một chút.<\/p><\/li><\/ul><\/li><li><p><b>C. Mô hình xử lý theo cơ chế định tính hoàn toàn (Deterministic) ❌<\/b><\/p><ul><li><p>LLM bản chất hoạt động theo mô hình xác suất (probabilistic). Dù dữ liệu đầu vào là JSON, việc mô hình suy luận vẫn dựa trên xác suất chứ không trở thành định tính tuyệt đối (deterministic).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-130",
    "set": 3,
    "number": 130,
    "type": "single",
    "question": "<p>After the web search agent and document analysis agent complete their tasks, the coordinator invokes the synthesis agent. However, the synthesis agent responds that it cannot complete the task because no research findings were provided.<\/p><p>What is the most likely cause of this issue?<\/p>",
    "options": {
      "A": "<p>The subagents need to share a single API connection to enable automatic context sharing between invocations.<\/p>",
      "B": "<p>The coordinator did not include the outputs from the previous agents in the synthesis agent's prompt.<\/p>",
      "C": "<p>The synthesis agent's context window is not large enough to hold the combined outputs from both previous agents.<\/p>",
      "D": "<p>The synthesis agent needs tools that can fetch results directly from the other agents' conversation histories.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Đáp án đúng: <b>[B]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn B:<\/b> Trong kiến trúc hệ thống đa agent thông thường, các subagent độc lập và không tự động truyền ngữ cảnh cho nhau qua các lượt gọi khác nhau. <b>Coordinator (Agent điều phối)<\/b> chịu trách nhiệm nhận output từ các agent trước (web search agent và document analysis agent) và phải chủ động <b>tiêm (inject) hoặc đính kèm các đầu ra đó vào trong prompt<\/b> khi gọi <code>synthesis agent<\/code>. Nếu coordinator quên hoặc không thực hiện việc này, synthesis agent sẽ không nhận được dữ liệu và báo lỗi thiếu thông tin nghiên cứu.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Subagent không cần chia sẻ chung một API connection để tự động chia sẻ ngữ cảnh giữa các lần gọi theo cách này.<\/p><\/li><li><p><b>C:<\/b> Việc vượt quá context window sẽ thường gây ra lỗi token hoặc cắt cụt chứ không dẫn đến việc agent phản hồi cụ thể là \"không có thông tin nào được cung cấp\" trong khi các đầu ra vốn dĩ có kích thước nhỏ gọn.<\/p><\/li><li><p><b>D:<\/b> Các subagent không cần thiết phải có công cụ gọi trực tiếp lịch sử của nhau, vì việc truyền dữ liệu qua coordinator là mô hình điều phối chuẩn.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-131",
    "set": 3,
    "number": 131,
    "type": "single",
    "question": "<p>Your MCP server implements a check_availability tool that queries an external calendar API. During testing, you encounter three error conditions: (1) the tool is called with a malformed request, missing the required user_email parameter (2) the calendar API returns a 404 because the specified user doesn't exist in the calendar system (3) the calendar API returns a 503 because the service is temporarily unavailable.<\/p><p>How should each error be reported according to MCP's error handling design?<\/p>",
    "options": {
      "A": "<p>Report errors 1 and 2 as JSON-RPC protocol errors, report error 3 as a tool result with isError: true<\/p>",
      "B": "<p>Report all three as tool results with isError: true<\/p>",
      "C": "<p>Report all three as JSON-RPC protocol errors.<\/p>",
      "D": "<p>Report error 1 as a JSON-RPC protocol error, report errors 2 and 3 as tool results with isError: true<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Theo chuẩn thiết kế xử lý lỗi của <b>Model Context Protocol (MCP)<\/b>:<\/p><ol start=\"1\"><li><p><b>Lỗi 1 (Request không hợp lệ / Thiếu tham số bắt buộc):<\/b><\/p><ul><li><p>Đây là <b>lỗi ở cấp độ giao thức (Protocol-level error)<\/b> do yêu cầu gửi tới không tuân thủ đúng JSON-RPC schema hoặc sai cú pháp (ví dụ: <code>Invalid params<\/code> -32602).<\/p><\/li><li><p>MCP yêu cầu trả về trực tiếp <b>JSON-RPC protocol error<\/b>.<\/p><\/li><\/ul><\/li><li><p><b>Lỗi 2 (Calendar API trả về 404) &amp; Lỗi 3 (Calendar API trả về 503):<\/b><\/p><ul><li><p>Đây là các <b>lỗi trong quá trình thực thi công cụ (Tool execution errors)<\/b> hoặc lỗi từ hệ thống bên ngoài. Việc gọi tool bản thân nó là hợp lệ về mặt giao thức JSON-RPC, nhưng kết quả thực thi không thành công.<\/p><\/li><li><p>MCP quy định các lỗi này cần được trả về dưới dạng một kết quả công cụ bình thường (Tool Result) kèm thuộc tính <b><code>isError: true<\/code><\/b> để LLM (hoặc client) có thể đọc thông điệp lỗi và đưa ra hướng xử lý phù hợp.<\/p><\/li><\/ul><\/li><\/ol>"
  },
  {
    "id": "CCAR-F-132",
    "set": 3,
    "number": 132,
    "type": "single",
    "question": "<p>The synthesis agent receives summarized findings from the web search and document analysis agents, then passes a consolidated summary to the report generator. During testing, you discover the generated reports make factual claims without proper citations–the report generator cannot attribute statements to their original sources because that metadata was lost during the summarization steps.<\/p><p>What's the most effective approach to ensure proper source attribution in the final reports?<\/p>",
    "options": {
      "A": "<p>Instruct the synthesis agent to embed source references inline within its summary text using a consistent citation format.<\/p>",
      "B": "<p>Have each agent output structured data separating content summaries from source metadata (URLs, document names, page numbers).<\/p>",
      "C": "<p>Have the report generator query the web search agent to re-locate sources for claims in the final report.<\/p>",
      "D": "<p>Skip summarization and pass full raw outputs from web search and document analysis directly to the report generator.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Đáp án đúng: <b>[B]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn B:<\/b> Trong kiến trúc hệ thống đa agent, để đảm bảo thông tin nguồn (URLs, tên tài liệu, số trang) không bị mất mát trong quá trình các agent tóm tắt và tổng hợp, phương pháp chuẩn hóa và bền vững nhất là <b>yêu cầu mỗi agent xuất ra dữ liệu có cấu trúc (structured data)<\/b>, tách biệt rõ ràng giữa phần nội dung tóm tắt và phần siêu dữ liệu nguồn (source metadata). Điều này giúp report generator dễ dàng bóc tách và trích dẫn chính xác nguồn gốc cho từng tuyên bố.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Việc nhúng trích dẫn thủ công inline trong văn bản tóm tắt rất dễ bị LLM làm sai lệch định dạng, bỏ sót hoặc tự ý biến đổi khi qua các bước tổng hợp tiếp theo.<\/p><\/li><li><p><b>C:<\/b> Việc để report generator phải gọi ngược lại web search agent để tìm lại nguồn cho từng câu trong báo cáo cuối cùng làm tăng độ trễ và phức tạp không cần thiết.<\/p><\/li><li><p><b>D:<\/b> Bỏ qua hoàn toàn việc tóm tắt và chuyển toàn bộ dữ liệu thô sang sẽ làm quá tải ngữ cảnh (context window) của report generator, gây lãng phí tài nguyên và kém hiệu quả.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-133",
    "set": 3,
    "number": 133,
    "type": "single",
    "question": "<p>Your conversation history includes two types of content: persistent story elements (character backgrounds, plot structure, world rules) that must remain consistent throughout, and extensive brainstorming discussion that's mostly ephemeral. After 40+ turns, you're hitting context limits and users report the assistant \"forgets\" established character traits, breaking narrative consistency.<\/p><p>Which approach best ensures persistent story elements remain available to the model while reclaiming context space?<\/p>",
    "options": {
      "A": "<p>Store all history in a vector database and retrieve semantically similar passages for each new message, replacing conversation history with retrieved chunks.<\/p>",
      "B": "<p>Separate persistent story elements into a retained \"story bible\" section at context start, applying trimming or summarization only to brainstorming discussion.<\/p>",
      "C": "<p>Summarize the entire conversation history into a condensed synopsis every 20 turns, replacing the full history to free up tokens.<\/p>",
      "D": "<p>Apply a sliding-window approach keeping only the most recent 25 turns, relying on the model to infer earlier context from recent discussion flow.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn B:<\/b><\/p><ul><li><p>Bài toán đưa ra hai loại thông tin riêng biệt: <b>thông tin cố định<\/b> (phông nền nhân vật, cốt truyện, quy tắc thế giới) cần giữ nguyên vẹn 100% và <b>thông tin tạm thời<\/b> (các thảo luận ý tưởng, động não).<\/p><\/li><li><p>Giải pháp tối ưu nhất là tách các yếu tố cốt lõi cố định thành một phần <b>\"Story Bible\"<\/b> đặt ở đầu ngữ cảnh (context start / system prompt) để mô hình luôn ghi nhớ chính xác các đặc tính nhân vật. Trong khi đó, các kỹ thuật giải phóng dung lượng (trimming/summarization) chỉ áp dụng cho phần thảo luận động não phía sau.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A sai:<\/b> RAG (Vector DB) dựa trên truy vấn ngữ nghĩa (semantic similarity). Tuy nhiên, các thuộc tính nhân vật hay quy tắc thế giới có thể không chứa từ khóa trùng khớp trực tiếp với câu hỏi hiện tại, dẫn đến việc RAG bỏ sót thông tin quan trọng.<\/p><\/li><li><p><b>C sai:<\/b> Việc tóm tắt toàn bộ lịch sử trò chuyện (bao gồm cả phần cốt truyện cố định) sẽ làm mất dần các chi tiết tinh tế về tính cách nhân vật qua các lần nén tóm tắt.<\/p><\/li><li><p><b>D sai:<\/b> Cửa sổ trượt (sliding-window) chỉ giữ lại 25 lượt thoại gần nhất sẽ khiến mô hình quên hoàn toàn các thông tin nhân vật/quy tắc đã thiết lập ở các lượt thoại ban đầu.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-134",
    "set": 3,
    "number": 134,
    "type": "single",
    "question": "<p>After the web search agent finds 25 sources (120K tokens of raw content), the document analysis agent extracts key insights (15K tokens), and the synthesis agent produces a coherent narrative draft (3K tokens), the coordinator must pass context to the report generation agent for the final output with proper source citations.<\/p><p>What context-passing strategy provides the best balance of completeness and efficiency?<\/p>",
    "options": {
      "A": "<p>Pass only the synthesis draft and have a separate post-processing pipeline match claims to sources and insert citations after the report is generated.<\/p>",
      "B": "<p>Pass the full accumulated context from all prior agents.<\/p>",
      "C": "<p>Pass the synthesis draft along with a structured source index that maps key claims to their source URLs and relevant excerpts.<\/p>",
      "D": "<p>Pass a condensed summary of all prior stages that preserves the main findings and attributes them to sources by name only.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Đáp án đúng: <b>[C]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn C:<\/b> Để đạt được sự cân bằng tối ưu giữa <b>tính đầy đủ/chính xác của nguồn trích dẫn (completeness)<\/b> và <b>hiệu quả ngữ cảnh (efficiency)<\/b> trong một hệ thống đa agent, việc truyền tải <b>bản nháp tổng hợp (synthesis draft) đi kèm với một chỉ mục nguồn có cấu trúc (structured source index)<\/b> chứa các liên kết URL và đoạn trích dẫn tương ứng cho phép agent tạo báo cáo cuối cùng dễ dàng lập bản đồ chính xác các tuyên bố với nguồn gốc mà không cần phải nhồi nhét lại toàn bộ hàng nghìn token nội dung thô ban đầu.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Quy trình xử lý hậu kỳ (post-processing pipeline) bằng cách so khớp thủ công sau khi báo cáo đã được sinh ra dễ dẫn đến sai sót ngữ cảnh hoặc chèn nhầm trích dẫn.<\/p><\/li><li><p><b>B:<\/b> Việc truyền lại toàn bộ context tích lũy từ tất cả các agent trước đó (hơn 138K tokens) gây lãng phí tài nguyên, tăng độ trễ và dễ làm loãng ngữ cảnh.<\/p><\/li><li><p><b>D:<\/b> Chỉ định danh nguồn bằng tên mà không có chỉ mục cấu trúc rõ ràng hoặc trích dẫn đoạn văn bản gốc sẽ làm giảm độ chính xác và khó kiểm chứng thông tin cho báo cáo cuối cùng.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-135",
    "set": 3,
    "number": 135,
    "type": "single",
    "question": "<p>Production logs reveal inconsistent error handling: when lookup_order fails, the agent sometimes retries 5+ times (wasteful when the order ID doesn't exist), sometimes escalates immediately (premature for temporary network issues), and sometimes asks users for clarification (inappropriate when the issue is a backend permission error). Investigation shows your MCP tool returns uniform error responses: {\"isError\": true, \"content\": [{\"type\": \"text\", \"text\": \"Operation failed\"}]}. The agent cannot distinguish between error types.<\/p><p>What's the most effective improvement?<\/p>",
    "options": {
      "A": "<p>Implement retry logic with exponential backoff in your MCP server for all errors, returning to the agent only after retries are exhausted.<\/p>",
      "B": "<p>Create an analyze_error MCP tool the agent calls after any failure to determine the error category and recommended action.<\/p>",
      "C": "<p>Enhance error responses with structured metadata: include errorCategory (transient/validation/permission), isRetryable boolean, and a description of what caused the failure.<\/p>",
      "D": "<p>Add few-shot examples to the system prompt demonstrating how to interpret error message patterns and select appropriate responses for each.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao đáp án C đúng:<\/b> Vấn đề gốc rễ được nêu trong đề bài là MCP tool trả về một phản hồi lỗi đồng nhất, không phân biệt (<code>\"Operation failed\"<\/code>), khiến agent không thể phân loại lỗi để xử lý (retry, escalate, hay hỏi lại người dùng). Bổ sung <b>structured metadata<\/b> (như <code>errorCategory<\/code>, <code>isRetryable<\/code> và mô tả chi tiết) trực tiếp vào response của tool giúp agent nhận được thông tin rõ ràng ngay lập tức để tự đưa ra quyết định hành động chính xác cho từng loại lỗi mà không tốn thêm vòng lặp gọi tool phụ.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>Đáp án A sai:<\/b> Việc tự động retry mọi lỗi ở phía MCP server ẩn đi bản chất thực sự của lỗi (ví dụ: lỗi validation như order ID không tồn tại hoặc lỗi permission) khỏi agent. Điều này khiến hệ thống vẫn tiếp tục retry vô ích hoặc không báo đúng bản chất vấn đề cho tầng logic phía trên.<\/p><\/li><li><p><b>Đáp án B sai:<\/b> Việc tạo ra một công cụ <code>analyze_error<\/code> bắt buộc agent phải tốn thêm một bước gọi tool phụ (extra tool call latency và chi phí token) sau mỗi lần thất bại, trong khi thông tin lỗi có thể được trả về trực tiếp ngay trong response của tool ban đầu một cách hiệu quả hơn.<\/p><\/li><li><p><b>Đáp án D sai:<\/b> Việc dựa vào few-shot examples trong system prompt để đoán các mẫu thông báo lỗi không cấu trúc rất dễ bị sai lệch khi thông điệp lỗi từ backend thay đổi hoặc không rõ ràng, trong khi dữ liệu cấu trúc (structured metadata) mang tính chính xác và tin cậy cao hơn nhiều cho LLM.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-136",
    "set": 3,
    "number": 136,
    "type": "single",
    "question": "<p>When researching \"renewable energy adoption,\" the web search agent returns recent statistics (2024: 35% adoption) while the document analysis agent extracts data from internal reports (2022: 18% adoption). The synthesis agent incorrectly flags these as contradictory sources rather than recognizing the data shows growth over time. What change would best enable the synthesis agent to correctly interpret such temporal differences?<\/p>",
    "options": {
      "A": "<p>Require subagents to include publication or data collection dates in their structured outputs.<\/p>",
      "B": "<p>Add a conflict resolution agent that automatically discards older data when newer data exists for the same metric.<\/p>",
      "C": "<p>Configure the web search agent to only return results from the past 6 months.<\/p>",
      "D": "<p>Instruct the synthesis agent to always treat the most recent data as authoritative and place older findings in a separate historical appendix.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><ul><li><p><b>Tại sao chọn A:<\/b><\/p><ul><li><p>Để agent tổng hợp (synthesis agent) có thể nhận biết và phân tích được <b>xu hướng theo thời gian (temporal differences/growth)<\/b> thay vì coi đó là dữ liệu mâu thuẫn (contradiction), nó cần có ngữ cảnh rõ ràng về thời gian của từng điểm dữ liệu.<\/p><\/li><li><p>Việc bắt buộc các subagent phải trích xuất và đính kèm <b>ngày xuất bản hoặc ngày thu thập dữ liệu (publication/data collection dates)<\/b> trong đầu ra có cấu trúc (structured output) sẽ cung cấp cho synthesis agent đúng thông tin ngữ cảnh thời gian cần thiết để đưa ra kết luận chính xác (ví dụ: tăng từ 18% năm 2022 lên 35% năm 2024).<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>B sai:<\/b> Tự động loại bỏ dữ liệu cũ (discard older data) sẽ làm mất thông tin lịch sử quan trọng, khiến hệ thống không thể phân tích được xu hướng hay sự tăng trưởng theo thời gian.<\/p><\/li><li><p><b>C sai:<\/b> Giới hạn tìm kiếm chỉ trong 6 tháng gần nhất sẽ bỏ qua hoàn toàn các báo cáo nội bộ/dữ liệu quá khứ cần thiết cho việc so sánh.<\/p><\/li><li><p><b>D sai:<\/b> Việc đẩy dữ liệu cũ vào phụ lục một cách máy móc không giúp synthesis agent hiểu được mối quan hệ logic/tăng trưởng giữa hai điểm dữ liệu trong báo cáo chính.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-137",
    "set": 3,
    "number": 137,
    "type": "single",
    "question": "<p>You are setting up a non-interactive automated code review pipeline using Claude Code. You want Claude to analyze a pulled Git diff (git diff) against the main branch and apply a custom set of code review instructions. However, you notice that when you run the pipeline, Claude only looks at the raw diff text itself and completely stops using its file-reading or code navigation tools. As a result, it fails to inspect the broader codebase repository context, which is critical because the diff modifies a core function called by many other external modules.<\/p><p>Which change to the CLI invocation will cause Claude to read related files in the repository while still successfully applying your custom review instructions?<\/p>",
    "options": {
      "A": "<p>Keep --system-prompt and add --allowedTools \"Read, Glob, Grep\" so that the non-interactive mode permits file system tools that it otherwise disables.<\/p>",
      "B": "<p>Remove --system-prompt entirely and place the review instructions in a CLAUDE.md file at the repo root, since --system-prompt is incompatible with tool use under -p.<\/p>",
      "C": "<p>Stop piping the diff via stdin and instead embed the diff contents inside the prompt string, so Claude Code treats the invocation as an agentic session rather than a stream-processing one.<\/p>",
      "D": "<p>Replace --system-prompt with --append-system-prompt so your review instructions are added to Claude Code's default prompt instead of overwriting the built-in guidance for using file-reading and code navigation tools.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h3><b>Giải thích chi tiết<\/b><\/h3><ul><li><p><b>Tại sao chọn D:<\/b><\/p><ul><li><p>Khi truyền cờ <code>--system-prompt<\/code>, Claude Code sẽ <b>ghi đè hoàn toàn<\/b> (overwrite) system prompt mặc định của hệ thống. System prompt mặc định này chứa các hướng dẫn thiết yếu về cách Claude Code tương tác với môi trường, bao gồm việc sử dụng các công cụ như đọc file, tìm kiếm mã nguồn (<code>Read<\/code>, <code>Glob<\/code>, <code>Grep<\/code>).<\/p><\/li><li><p>Việc sử dụng <code>--append-system-prompt<\/code> giúp bổ sung các hướng dẫn code review tùy chỉnh vào sau system prompt mặc định thay vì ghi đè nó. Nhờ đó, Claude Code vẫn giữ nguyên được khả năng và hướng dẫn dùng các công cụ điều hướng/đọc file để kiểm tra toàn bộ codebase.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không đúng?<\/b><\/h3><ul><li><p><b>A sai:<\/b> Cờ <code>--allowedTools<\/code> không giải quyết được việc mô hình bị mất đi câu lệnh/hướng dẫn sử dụng công cụ trong system prompt khi bị <code>--system-prompt<\/code> ghi đè.<\/p><\/li><li><p><b>B sai:<\/b> <code>--system-prompt<\/code> hoàn toàn tương thích với việc sử dụng công cụ; vấn đề ở đây chỉ là do nó ghi đè làm mất hướng dẫn mặc định của hệ thống.<\/p><\/li><li><p><b>C sai:<\/b> Việc truyền diff qua <code>stdin<\/code> hay nằm trong chuỗi prompt không quyết định việc Claude có dùng tool hay không; nguyên nhân chính khiến Claude dừng dùng tool là do prompt mặc định bị mất.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-138",
    "set": 3,
    "number": 138,
    "type": "single",
    "question": "<p>Users report that final reports sometimes lack depth on specific subtopics. Investigation shows that the document analysis agent frequently identifies gaps—for instance, noting \"the retrieved sources discuss API authentication but lack details on token refresh patterns\"—but under the current strict pipeline, this insight isn't actionable since search has already completed.<\/p><p>What's the most effective architectural change?<\/p>",
    "options": {
      "A": "<p>Have the coordinator review analysis output for gap indicators and re-invoke search with gapinformed queries when gaps are detected.<\/p>",
      "B": "<p>Have the synthesis agent attach confidence scores to each section and flag areas with insufficient coverage for manual review.<\/p>",
      "C": "<p>Add a research planning agent before the search phase that decomposes topics into specific sub- questions.<\/p>",
      "D": "<p>Have the analysis agent report specific gaps to the coordinator, which triggers targeted searches and re-invokes analysis until sufficient.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Tại sao đáp án D đúng:<\/b><\/p><p>Đề bài nêu rõ vấn đề: agent phân tích tài liệu (<i>document analysis agent<\/i>) phát hiện ra các khoảng trống thông tin (<i>gaps<\/i>), nhưng theo pipeline hiện tại thì thông tin này không được xử lý vì giai đoạn tìm kiếm (<i>search<\/i>) đã kết thúc. Phương án D thiết lập một vòng lặp phản hồi thông minh (feedback loop): analysis agent báo cáo trực tiếp các khoảng trống cụ thể cho <b>coordinator<\/b>, từ đó coordinator sẽ kích hoạt các lượt tìm kiếm bổ sung (<i>targeted searches<\/i>) và lặp lại quá trình phân tích cho đến khi đạt đủ độ sâu và độ phủ thông tin cần thiết.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>Đáp án A sai:<\/b> Việc để coordinator tự xem lại đầu ra của phân tích để tìm dấu hiệu thiếu hụt kém hiệu quả hơn và bỏ qua chuyên môn của chính agent phân tích (đội ngũ phân tích mới là bên trực tiếp nhận diện chi tiết nội dung bị thiếu như token refresh patterns).<\/p><\/li><li><p><b>Đáp án B sai:<\/b> Việc yêu cầu synthesis agent (agent tổng hợp) gắn điểm tự tin và gắn cờ để <b>review thủ công<\/b> (<i>manual review<\/i>) làm mất đi tính tự động của hệ thống agent, không giải quyết được việc tự động bổ sung thông tin thiếu sót.<\/p><\/li><li><p><b>Đáp án C sai:<\/b> Thêm một planning agent <i>trước<\/i> giai đoạn search chỉ giúp lập kế hoạch ban đầu, nhưng không giải quyết được vấn đề phát sinh khi phân tích tài liệu thực tế phát hiện ra các lỗ hổng thông tin mới cần được tìm kiếm bổ sung vòng sau.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-139",
    "set": 3,
    "number": 139,
    "type": "single",
    "question": "<p>Your track_shipment(tracking_id) tool queries an external logistics API that sometimes fails – the API may be temporarily unavailable, the tracking ID may be malformed, or the shipment may not exist. Currently, your tool raises a Python exception when errors occur. Users report the agent gives unhelpful responses like “I’m having trouble with that request” instead of suggesting alternatives such as verifying the tracking number format or checking by order number. How should you handle errors in tool results?<\/p>",
    "options": {
      "A": "<p>Return a generic error response (e.g., {\"success\": false, \"error\": \"lookup_failed\"}) for all failure cases to maintain a consistent schema and avoid exposing internal error details.<\/p>",
      "B": "<p>Return structured error information as normal tool output including error type, recoverability status, and actionable context for the user<\/p>",
      "C": "<p>Create dedicated error-recovery tools (retry_tracking_lookup, search_by_order_number) that the model can invoke after the primary tracking tool returns a failure indicator.<\/p>",
      "D": "<p>Implement retry logic with exponential backoff inside the tool implementation so transient errors are automatically handled and only return a result after all retry attempts are exhausted.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h3><b>Vì sao B là thiết kế tối ưu nhất?<\/b><\/h3><ul><li><p><b>Chuyển Exception thành Ngữ cảnh cho LLM (Error Contextualization):<\/b><\/p><ul><li><p>Khi tool văng ra một Python Exception (ví dụ: <code>Exception<\/code>, <code>ConnectionError<\/code>), khung ứng dụng (Framework) sẽ coi đó là một sự cố thực thi hệ thống (Execution Failure) và chỉ trả về thông báo lỗi chung chung cho Agent.<\/p><\/li><li><p>Bằng cách bắt lỗi (catch exception) và trả về một <b>đối tượng JSON cấu trúc chuẩn<\/b> dưới dạng đầu ra bình thường, Agent có đủ dữ liệu để suy luận và hỗ trợ người dùng:<\/p>JSON<pre>{\n  \"success\": false,\n  \"error_type\": \"INVALID_FORMAT\",\n  \"is_recoverable\": true,\n  \"message\": \"Tracking ID '123' contains only 3 digits (expected 10-12 digits).\",\n  \"suggested_actions\": [\"Ask user to verify tracking number\", \"Offer to search by order number\"]\n}\n<\/pre><\/li><\/ul><\/li><li><p><b>Giúp Agent đưa ra phản hồi có tính hành động (Actionable Feedback):<\/b><\/p><ul><li><p>Nhờ biết chính xác lý do thất bại (do định dạng sai, không tìm thấy đơn, hay do máy chủ API bị gián đoạn), Agent có thể giải thích rõ ràng cho người dùng và gợi ý các hướng xử lý thay thế thay vì chỉ nói <i>\"Tôi gặp sự cố khi xử lý yêu cầu\"<\/i>.<\/p><\/li><\/ul><\/li><\/ul><h3><b>Vì sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A. Trả về thông báo lỗi chung chung (<code>{\"success\": false, \"error\": \"lookup_failed\"}<\/code>) ❌<\/b><\/p><ul><li><p>Làm ẩn đi nguyên nhân cốt lõi. Agent không thể phân biệt được lỗi do người dùng nhập sai định dạng hay do hệ thống lỗi, dẫn đến câu trả lời vẫn mơ hồ và không giúp ích gì cho người dùng.<\/p><\/li><\/ul><\/li><li><p><b>C. Tạo các tool xử lý lỗi riêng biệt (<code>retry_tracking_lookup<\/code>, <code>search_by_order_number<\/code>) ❌<\/b><\/p><ul><li><p>Tạo thêm các tool xử lý lỗi riêng biệt chỉ để thực hiện lại thao tác là không cần thiết và gây phình to danh sách Tool (Tool Bloat). Agent đã có khả năng gọi lại <code>track_shipment<\/code> hoặc dùng các tool tra cứu khác nếu nhận được thông tin lỗi rõ ràng từ B.<\/p><\/li><\/ul><\/li><li><p><b>D. Thực hiện Retry tự động nội bộ (Exponential Backoff) ❌<\/b><\/p><ul><li><p>Tự động retry chỉ giải quyết được các lỗi mạng tạm thời (transient errors). Nó hoàn toàn vô tác dụng đối với các lỗi do người dùng (nhập sai định dạng <code>tracking_id<\/code>, đơn hàng không tồn tại). Nếu sai định dạng, dù retry nhiều lần vẫn sẽ thất bại và làm tăng độ trễ (latency) không cần thiết.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-140",
    "set": 3,
    "number": 140,
    "type": "single",
    "question": "<p>Introduction monitoring shows the research phase takes longer than expected. Analysis reveals the coordinator invokes the web search subagent, waits for its response, then invokes the document analysis subagent and waits again. These tasks are independent - neither requires the other's output. How should you modify the system to run these subagents concurrently?<\/p>",
    "options": {
      "A": "<p>Switch both subagents to use a Haiku tier model instead of to reduce their individual execution time.<\/p>",
      "B": "<p>Create an async orchestration layer outside the agent that spawns parallel threads, each running a separate coordinator subagent pair, then aggregates results.<\/p>",
      "C": "<p>Add detailed instructions to the coordinator's system prompt explaining the performance benefits of parallel execution and requesting it invoke both subagents at the same<\/p>",
      "D": "<p>Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message rather than across separate conversation turns.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn D:<\/b><\/p><ul><li><p>Trong kiến trúc Agentic Workflow (đặc biệt là với Anthropic Claude / Task / Sub-agent Framework), khi một agent phát ra nhiều <b>Tool Calls trong cùng một thông điệp phản hồi (single response turn)<\/b>, môi trường thực thi (execution runtime) sẽ tự động kích hoạt và thực thi các tool / subagent đó <b>song song (concurrently/in parallel)<\/b>.<\/p><\/li><li><p>Việc yêu cầu coordinator xuất ra cả 2 lệnh gọi subagent (Task tool calls) trong một turn trả về duy nhất giúp hệ thống tự động chạy đồng thời cả tìm kiếm web và phân tích tài liệu, tối ưu thời gian xử lý mà không cần thay đổi kiến trúc hạ tầng phức tạp.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A sai:<\/b> Đổi sang mô hình Haiku có thể giảm thời gian phản hồi của từng nhiệm vụ nhưng không giải quyết được vấn đề thực thi tuần tự (sequential execution) vốn có.<\/p><\/li><li><p><b>B sai:<\/b> Tạo thêm một lớp bất đồng bộ phức tạp bên ngoài làm tăng độ phức tạp hệ thống không cần thiết, trong khi cơ chế tool use của Claude đã hỗ trợ gọi tool song song tự nhiên.<\/p><\/li><li><p><b>C sai:<\/b> Chỉ đưa hướng dẫn trong prompt mà không cấu trúc cơ chế gọi tool (tool call generation) sẽ khiến LLM vẫn dễ quay lại thói quen gọi tuần tự từng tool một.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-141",
    "set": 3,
    "number": 141,
    "type": "single",
    "question": "<p>Your agent is handling a billing dispute. After calling get_customer and lookup_order, it identifies that the dispute involves a promotional pricing error requiring manager approval–beyond the agent's authorization level.<\/p><p>How should the workflow handle this mid-process escalation?<\/p>",
    "options": {
      "A": "<p>Compile a structured handoff with customer details, order info, and the identified issue before calling escalate_to_human.<\/p>",
      "B": "<p>Persist the complete conversation and tool response history to a database, then call escalate_to_human with a reference ID.<\/p>",
      "C": "<p>Call escalate_to_human passing only the customer's original message.<\/p>",
      "D": "<p>Attempt the refund with process_refund anyway, escalating only if the system rejects the transaction.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Đáp án đúng: <b>[A]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn A:<\/b> Khi agent gặp một vấn đề vượt quá thẩm quyền của mình (như lỗi giá khuyến mãi cần quản lý phê duyệt) sau các bước tra cứu (<code>get_customer<\/code> và <code>lookup_order<\/code>), cách xử lý chuẩn hóa và hiệu quả nhất là <b>biên soạn một bản chuyển giao có cấu trúc (structured handoff)<\/b> bao gồm thông tin chi tiết về khách hàng, thông tin đơn hàng và vấn đề đã xác định trước khi gọi công cụ <code>escalate_to_human<\/code>. Điều này giúp nhân viên con người nắm bắt bối cảnh ngay lập tức mà không phải hỏi lại từ đầu.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>B:<\/b> Việc lưu trữ toàn bộ lịch sử hội thoại vào cơ sở dữ liệu và chỉ truyền một ID tham chiếu làm tăng độ phức tạp hạ tầng không cần thiết và bắt nhân viên phải mất thời gian tra cứu ngoài luồng.<\/p><\/li><li><p><b>C:<\/b> Chỉ truyền mỗi tin nhắn ban đầu của khách hàng làm mất toàn bộ ngữ cảnh quan trọng đã được agent thu thập từ các bước gọi công cụ (<code>get_customer<\/code>, <code>lookup_order<\/code>).<\/p><\/li><li><p><b>D:<\/b> Cố tình gọi công cụ xử lý hoàn tiền (<code>process_refund<\/code>) vượt quyền hạn trong khi biết rõ nó yêu cầu phê duyệt cấp quản lý là vi phạm quy tắc an toàn bảo mật hệ thống.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-142",
    "set": 3,
    "number": 142,
    "type": "single",
    "question": "<p>Your agent uses three tools: get_property_details(property_id) returns data including street address, get_price_history(property_id) returns historical pricing, and get_neighborhood_info(address) returns area statistics. You observe that get_neighborhood_info always requires get_property_details first just to extract the address, even when users specify the property by ID. This creates unnecessary latency and failure coupling – if the first call fails, the neighborhood request also fails. What tool design change best addresses this?<\/p>",
    "options": {
      "A": "<p>Create a lookup_address(property_id) helper tool for retrieving addresses.<\/p>",
      "B": "<p>Add retry logic and timeout handling to get_property_details.<\/p>",
      "C": "<p>Change get_neighborhood_info to accept property_id, resolving the address internally.<\/p>",
      "D": "<p>Consolidate into a single get_property_with_neighborhood(property_id) tool returning both datasets.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h3><b>Vì sao C là thiết kế tối ưu nhất?<\/b><\/h3><ul><li><p><b>Giải quyết triệt để vấn đề phụ thuộc (Failure Coupling) &amp; Độ trễ (Latency):<\/b><\/p><ul><li><p>Hiện tại, workflow bắt buộc phải trải qua 2 vòng gọi API (Round-trips): <code>get_property_details<\/code> <span>$\\rightarrow$<\/span> bóc tách <code>address<\/code> <span>$\\rightarrow$<\/span> <code>get_neighborhood_info<\/code>.<\/p><\/li><li><p>Bằng cách cho phép <code>get_neighborhood_info<\/code> chấp nhận trực tiếp <code>property_id<\/code> (hoặc chấp nhận cả <code>property_id<\/code> lẫn <code>address<\/code> linh hoạt), Agent có thể gọi tool này ngay từ đầu hoặc chạy song song (parallel tool calling) với <code>get_property_details<\/code>. Việc tra cứu địa chỉ từ <code>property_id<\/code> được xử lý nội bộ phía backend (nơi có tốc độ truy xuất nhanh và độ tin cậy cao hơn nhiều so với việc bắt Agent trung chuyển dữ liệu).<\/p><\/li><\/ul><\/li><\/ul><h3><b>Vì sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A. Tạo thêm tool <code>lookup_address(property_id)<\/code> ❌<\/b><\/p><ul><li><p>Không giải quyết được vấn đề. Việc này thậm chí còn tạo thêm một tool trung gian, làm tăng số lượng tool call của Agent và vẫn giữ nguyên chuỗi phụ thuộc (Dependency Chain).<\/p><\/li><\/ul><\/li><li><p><b>B. Thêm logic retry và timeout cho <code>get_property_details<\/code> ❌<\/b><\/p><ul><li><p>Chỉ làm tăng độ bền vững (resilience) của bản thân <code>get_property_details<\/code>, nhưng <b>không giải quyết được kiến trúc bị gắn chặt (tight coupling)<\/b>. Nếu dịch vụ <code>get_property_details<\/code> bị downtime dài, <code>get_neighborhood_info<\/code> vẫn sẽ thất bại hoàn toàn.<\/p><\/li><\/ul><\/li><li><p><b>D. Gộp thành một tool duy nhất <code>get_property_with_neighborhood(property_id)<\/code> ❌<\/b><\/p><ul><li><p>Vi phạm nguyên tắc <b>Đơn nhiệm (Single Responsibility Principle)<\/b> trong thiết kế Tool/API. Nếu người dùng chỉ muốn hỏi thông tin khu vực mà không cần chi tiết bất động sản (hoặc ngược lại), tool gộp này sẽ gây lãng phí tài nguyên và làm tăng thời gian phản hồi không cần thiết.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-143",
    "set": 3,
    "number": 143,
    "type": "single",
    "question": "<p>The agent verifies customer identity through a multi-step process before resetting passwords. During testing, you notice that after the customer answers the third verification question, the agent asks them to provide their name again, as if the earlier exchange never happened.<\/p><p>What's the most likely cause of this behavior?<\/p>",
    "options": {
      "A": "<p>The verification tool is clearing the agent's internal state after each successful validation step.<\/p>",
      "B": "<p>The prompt lacks instructions telling Claude to remember information across multiple exchanges.<\/p>",
      "C": "<p>The conversation history isn't being passed in subsequent API requests.<\/p>",
      "D": "<p>Claude's memory retention is limited to two conversational turns by default, requiring explicit configuration to extend it.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Đáp án đúng: <b>[C]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn C:<\/b> Hiện tượng người dùng trả lời xong các câu hỏi xác thực nhưng mô hình lại hỏi lại tên như thể cuộc hội thoại trước đó chưa từng diễn ra (mất hoàn toàn ngữ cảnh trước đó) thường xuất phát từ việc ứng dụng không truyền lại mảng lịch sử trò chuyện (<code>messages<\/code> array) trong các yêu cầu API tiếp theo gửi đến LLM, khiến mỗi lượt yêu cầu bị coi là một phiên làm việc hoàn toàn mới (stateless).<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Công cụ xác thực (verification tool) thực hiện các hàm backend, nó không có khả năng tự động xóa trạng thái bên trong của LLM hay quản lý bộ nhớ của mô hình.<\/p><\/li><li><p><b>B:<\/b> Bản thân LLM (như Claude) tự động có khả năng ghi nhớ toàn bộ ngữ cảnh được truyền vào trong mảng thông điệp, không phụ thuộc vào việc phải có prompt hướng dẫn nhắc nó phải nhớ.<\/p><\/li><li><p><b>D:<\/b> LLM không có giới hạn cố định ngầm định là 2 lượt hội thoại, mà phụ thuộc hoàn toàn vào giới hạn cửa sổ ngữ cảnh (context window) của mô hình (lên đến hàng trăm nghìn token) và việc ứng dụng có truyền đầy đủ lịch sử hay không.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-144",
    "set": 3,
    "number": 144,
    "type": "single",
    "question": "<p>In production, final reports frequently contain claims without proper source attribution. Investigation shows that while the web search and document analysis agents correctly attach citations to their outputs, the synthesis agent loses track of which sources support which conclusions when combining findings.<\/p><p>What's the most effective architectural change?<\/p>",
    "options": {
      "A": "<p>Add a verification step where the report generator uses semantic similarity matching against original sources to reconstruct which claims came from which documents.<\/p>",
      "B": "<p>Maintain complete transcripts of all subagent interactions and add a citation-resolution agent to analyze logs and determine attributions before report generation.<\/p>",
      "C": "<p>Have the coordinator inject source identifier prefixes into text before each handoff, then parse these prefixes at report generation to reconstruct citations.<\/p>",
      "D": "<p>Require all subagents to output structured claim-source mappings that the synthesis agent must preserve and merge when combining findings from multiple sources.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Đáp án đúng: <b>[D]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn D:<\/b> Vấn đề cốt lõi là khi tổng hợp thông tin, synthesis agent bị mất liên kết giữa các kết luận và nguồn gốc do các subagent trả về văn bản thông thường thiếu ràng buộc cấu trúc. Giải pháp kiến trúc chuẩn và hiệu quả nhất là <b>bắt buộc các subagent xuất ra dưới dạng ánh xạ cấu trúc giữa tuyên bố và nguồn (claim-source mappings)<\/b>. Agent tổng hợp sau đó có trách nhiệm bảo toàn, kế thừa và gộp các ánh xạ này xuyên suốt quá trình xử lý.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Dùng semantic similarity matching hậu kiểm (sau khi đã phát sinh lỗi mất nguồn) làm tăng độ phức tạp tính toán, dễ sai sót và chỉ mang tính chất vá víu (post-hoc) thay vì giải quyết từ gốc kiến trúc truyền dữ liệu.<\/p><\/li><li><p><b>B:<\/b> Duy trì bản ghi toàn bộ tương tác và thêm một agent chuyên phân tích log là giải pháp rườm rà, tiêu tốn nhiều tài nguyên và context window không cần thiết.<\/p><\/li><li><p><b>C:<\/b> Việc tiêm các tiền tố định danh nguồn thủ công (prefixes) dễ bị lỗi parser, không bền vững bằng việc sử dụng cấu trúc dữ liệu tường minh (như JSON/structured objects).<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-145",
    "set": 3,
    "number": 145,
    "type": "single",
    "question": "<p>An engineer asks your agent to add comprehensive tests to a legacy codebase with 200 files and minimal existing test coverage. The engineer hasn't spent much time on the codebase, so they ask for help identifying which modules to prioritize. How should the agent decompose this open-ended task?<\/p>",
    "options": {
      "A": "<p>Use Glob and Grep to map codebase structure, identify heavily-coupled modules, create a prioritized plan for high-impact areas, and revise as dependencies are discovered.<\/p>",
      "B": "<p>Create a fixed testing schedule upfront based on directory structure, allocating equal effort to each top- level directory regardless of code complexity or importance.<\/p>",
      "C": "<p>Systematically read all 200 files to create a complete function inventory before writing any tests, ensuring the testing plan accounts for everything from the beginning.<\/p>",
      "D": "<p>Start writing tests for the first module alphabetically, using test failures and imports to discover related files organically.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ol start=\"1\"><li><p><b>Phân tích bối cảnh bài toán:<\/b><\/p><ul><li><p>Cơ sở mã nguồn (codebase) legacy khá lớn với <b>200 tệp<\/b> và rất ít test coverage.<\/p><\/li><li><p>Lập trình viên không nắm rõ codebase và cần Agent gợi ý cách phân chia (decompose) nhiệm vụ mở này để xác định ưu tiên.<\/p><\/li><\/ul><\/li><li><p><b>Tại sao phương án A là tối ưu nhất?<\/b><\/p><ul><li><p><b>Đo đạc và lập bản đồ kiến trúc hiệu quả:<\/b> Sử dụng các công cụ tìm kiếm nhanh như <code>Glob<\/code> (để nắm cấu trúc thư mục) và <code>Grep<\/code> (để quét các phụ thuộc, imports) giúp Agent nhanh chóng nhận diện các module quan trọng có độ liên kết cao (heavily-coupled modules) mà <b>không cần đọc hết 200 tệp<\/b>.<\/p><\/li><li><p><b>Ưu tiên khu vực có tác động lớn (High-impact areas):<\/b> Việc ưu tiên các module trung tâm/được gọi nhiều giúp tăng độ tin cậy của codebase nhanh nhất.<\/p><\/li><li><p><b>Lập kế hoạch linh hoạt (Iterative refinement):<\/b> Lập kế hoạch ban đầu và điều chỉnh linh hoạt khi phát hiện ra các phụ thuộc mới là quy trình chuẩn khi làm việc với nhiệm vụ mở (open-ended tasks) trong các hệ thống legacy.<\/p><\/li><\/ul><\/li><\/ol><hr/><h3>Tại sao các phương án khác không phù hợp?<\/h3><ul><li><p><b>Phương án B (Tạo lịch cố định và chia đều công sức):<\/b> Chia đều nguồn lực cho mọi thư mục bất kể độ phức tạp hay mức độ quan trọng là chiến lược rất lãng phí và không hiệu quả.<\/p><\/li><li><p><b>Phương án C (Đọc toàn bộ 200 tệp trước khi viết test):<\/b> Đọc tuần tự 200 tệp sẽ gây tràn bộ nhớ ngữ cảnh (context window) và làm lãng phí rất nhiều token không cần thiết.<\/p><\/li><li><p><b>Phương án D (Làm theo thứ tự bảng chữ cái):<\/b> Viết test theo thứ tự A-Z hoàn toàn mang tính ngẫu nhiên, bỏ qua kiến trúc thực tế và mức độ ưu tiên của hệ thống.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-146",
    "set": 3,
    "number": 146,
    "type": "single",
    "question": "<p>After deploying automated code review, developers report that approximately 35% of flagged findings are false positives falling into consistent patterns: style suggestion contradicting team conventions, security warnings for patterns safe in your deployment context, and performance suggestions that would degrade your specific use case. You want to reduce false positives while maintaining the ability to catch genuine issues.<\/p><p>Which approach best enables the model to generalize its judgment to novel code patterns it hasn't seen before?<\/p>",
    "options": {
      "A": "<p>Include few-shot examples in your prompt showing annotated code snippets that distinguish acceptable patterns from genuine issues in each category.<\/p>",
      "B": "<p>Create a comprehensive written specification of all patterns that should not be flagged, then include this full documentation in the system prompt.<\/p>",
      "C": "<p>Add instructions to your system prompt to \"be conservative,\" \"only flag definite issues,\" and \"consider that some patterns may be intentional.\"<\/p>",
      "D": "<p>Implement post-processing that uses keyword matching to filter out findings containing terms like \"convention,\" \"context-dependent,\" or \"trade-off.\"<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b><\/p><ul><li><p>Cung cấp các ví dụ mẫu (<b>few-shot examples<\/b>) có chú thích rõ ràng phân biệt giữa mã nguồn hợp lệ (acceptable patterns) và vấn đề thực sự (genuine issues) là phương pháp hiệu quả nhất giúp LLM <b>khái quát hóa (generalize)<\/b> và đưa ra phán đoán chính xác cho các mẫu code mới mà nó chưa từng gặp.<\/p><\/li><li><p>Việc thấy trực tiếp các cặp ví dụ \"Đúng vs Sai\" kèm lập luận mẫu giúp mô hình nắm bắt được tư duy/tiêu chuẩn đánh giá của đội ngũ phát triển thay vì chỉ áp dụng máy móc quy tắc.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>B sai:<\/b> Việc liệt kê toàn bộ các quy tắc/mẫu code không được báo cáo (comprehensive written specification) là bất khả thi và làm quá tải cửa sổ ngữ cảnh (context window), đồng thời khiến mô hình khó khái quát hóa khi gặp các dạng mã nguồn mới.<\/p><\/li><li><p><b>C sai:<\/b> Hướng dẫn chung chung như \"be conservative\" hay \"only flag definite issues\" thường khiến mô hình bỏ sót cả những lỗi nghiêm trọng thực sự (false negatives) do cách diễn đạt quá mơ hồ.<\/p><\/li><li><p><b>D sai:<\/b> Lọc từ khóa ở hậu xử lý (post-processing) là giải pháp thô sơ, dễ làm mất các cảnh báo quan trọng và không giúp cải thiện khả năng suy luận cốt lõi của mô hình.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-147",
    "set": 3,
    "number": 147,
    "type": "single",
    "question": "<p>Production reviews reveal inconsistent handling of uncertainty in final reports. Sometimes conflicting subagent findings are synthesized into a single confident statement (losing nuance), while other times reports over-hedge with excessive qualifications (becoming unhelpful).<\/p><p>When the web search agent returns <i>\"industry analysts estimate $50B market size (methodology varies)\"<\/i> and the document analysis agent returns <i>\"peer-reviewed study estimates $35B (±$7B, 95% CI)\"<\/i>, the coordinator either picks one arbitrarily or produces vague statements like <i>\"the market may be $35B-$50B depending on factors.\"<\/i><\/p><p>What systematic approach best addresses this?<\/p>",
    "options": {
      "A": "<p>Implement a confidence calibration layer that normalizes subagent uncertainty expressions to standardized probability scores (0.0-1.0), then weight-average findings by their calibrated confidence.<\/p>",
      "B": "<p>Instruct the synthesis agent to structure reports with explicit sections distinguishing well-established findings from contested ones, preserving original source characterizations and methodological context.<\/p>",
      "C": "<p>Configure subagents to only report findings meeting a high-confidence threshold, filtering uncertain information before it reaches the coordinator.<\/p>",
      "D": "<p>Add a verification subagent that cross-references findings across sources, only passing claims to synthesis that are corroborated by at least two independent sources.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ol start=\"1\"><li><p><b>Phân tích vấn đề:<\/b><\/p><ul><li><p>Bài toán đưa ra 2 xung đột chính trong báo cáo tổng hợp (synthesis report):<\/p><ul><li><p>Tự động gộp các kết quả mâu thuẫn thành một khẳng định chắc chắn <span>$\\rightarrow$<\/span> làm mất đi các sắc thái / ngữ cảnh quan trọng (losing nuance).<\/p><\/li><li><p>Báo cáo quá dè dặt (over-hedging) hoặc đưa ra các tuyên bố chung chung mơ hồ như \"35B-50B tùy thuộc vào nhiều yếu tố\" <span>$\\rightarrow$<\/span> không đem lại giá trị hữu ích.<\/p><\/li><\/ul><\/li><li><p>Ví dụ đưa ra hai nguồn dữ liệu có phương pháp luận và độ chính xác khác nhau (một bên là ước tính của các nhà phân tích ngành, một bên là nghiên cứu đã qua kiểm duyệt peer-reviewed với khoảng tin cậy 95%).<\/p><\/li><\/ul><\/li><li><p><b>Tại sao phương án B lại đúng?<\/b><\/p><ul><li><p><b>Bảo tồn sắc thái &amp; Bối cảnh (Preserving Context):<\/b> Thay vì gộp ép buộc thành một con số duy nhất hoặc đưa ra một khoảng giá trị mơ hồ, agent tổng hợp (synthesis agent) nên phân loại rõ thông tin thành các phần: nội dung đã rõ ràng/đồng thuận và nội dung đang tranh cãi/chưa thống nhất.<\/p><\/li><li><p><b>Trích dẫn minh bạch phương pháp luận:<\/b> Phương án này giữ nguyên đặc trưng của từng nguồn (ví dụ: giải thích phương pháp luận khác nhau dẫn đến con số $50B và $35B), giúp người đọc có cái nhìn chính xác và đưa ra quyết định phù hợp nhất.<\/p><\/li><\/ul><\/li><\/ol><hr/><h3>Tại sao các phương án khác không phù hợp?<\/h3><ul><li><p><b>Phương án A:<\/b> Việc quy đổi độ tin cậy thành điểm xác suất (0.0 - 1.0) rồi tính trung bình trọng số là phương pháp khiên cưỡng, không thực tế đối với dữ liệu văn bản/định tính, đồng thời dễ làm sai lệch dữ liệu gốc (ví dụ: không thể \"tính trung bình\" giữa 2 phương pháp luận nghiên cứu khác nhau).<\/p><\/li><li><p><b>Phương án C:<\/b> Lọc bỏ các thông tin chưa chắc chắn ngay từ agent con sẽ khiến hệ thống bỏ sót các phát hiện quan trọng hoặc thông tin mang tính cảnh báo (surfacing edge cases).<\/p><\/li><li><p><b>Phương án D:<\/b> Việc bắt buộc phải có ít nhất 2 nguồn độc lập xác nhận mới cho phép đi tiếp sẽ loại bỏ hoàn toàn các thông tin độc quyền, phát hiện mới hoặc thông tin duy nhất từ các tài liệu chuyên sâu.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-148",
    "set": 3,
    "number": 148,
    "type": "single",
    "question": "<p>When implementing your lookup_order MCP tool, the backend sometimes returns errors (e.g., \"Order not found\" or temporary database failures).<\/p><p>What is the correct pattern for communicating these errors back to the agent?<\/p>",
    "options": {
      "A": "<p>Return the error message in the tool result content with the isError flag set to true<\/p>",
      "B": "<p>Throw an exception from the tool handler so the agent framework can catch and log it<\/p>",
      "C": "<p>Log the error server-side and return an empty result to avoid confusing the model<\/p>",
      "D": "<p>Return a success response with a \"status\" field indicating the error type<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Đáp án đúng: <b>[A]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn A:<\/b> Trong tiêu chuẩn kỹ thuật của <b>Model Context Protocol (MCP)<\/b>, khi một tool gặp lỗi trong quá trình thực thi (như không tìm thấy đơn hàng hoặc lỗi cơ sở dữ liệu), giao thức yêu cầu trả về kết quả công cụ với nội dung thông báo lỗi nhưng quan trọng nhất là phải <b>thiết lập cờ <code>isError: true<\/code> trong đối tượng kết quả (tool result content)<\/b>. Điều này giúp mô hình LLM nhận biết tường minh rằng lần gọi tool vừa rồi đã thất bại, từ đó có cơ chế tự phục hồi, điều chỉnh tham số hoặc thông báo lại cho người dùng một cách chính xác thay vì hiểu nhầm đó là một dữ liệu thành công trống.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>B:<\/b> Việc ném ngoại lệ (throw exception) từ trình xử lý tool có thể làm sập hoặc ngắt quãng luồng thực thi của framework nếu không được bọc bắt lỗi đúng cách, thay vì trả về thông tin lỗi chuẩn hóa dạng kết quả cho LLM tự xử lý.<\/p><\/li><li><p><b>C:<\/b> Việc ẩn lỗi và trả về kết quả trống làm mô hình bị mù thông tin, tưởng rằng không có dữ liệu thay vì biết là đã xảy ra lỗi hệ thống/dữ liệu.<\/p><\/li><li><p><b>D:<\/b> Trả về trạng thái thành công (<code>success<\/code>) nhưng lại kèm theo trường báo lỗi bên trong nội dung phản hồi dễ gây mâu thuẫn logic cho bộ phân tích của agent.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-149",
    "set": 3,
    "number": 149,
    "type": "single",
    "question": "<p>Your multi-agent research pipeline crashed after processing 12 of 28 documents. The web search agent had identified relevant sources, the document analyzer had partially completed extraction, and the synthesizer had begun pattern identification. You need to resume processing without repeating work or losing fidelity of prior findings. What state management approach best balances information fidelity with context efficiency when restoring agent state?<\/p>",
    "options": {
      "A": "<p>Have each agent maintain its own persistent state file and reload it independently at the start of each session.<\/p>",
      "B": "<p>Persist the coordinator's conversation log containing all task delegations and responses, providing this to agents when resuming.<\/p>",
      "C": "<p>Index all agent outputs in a shared vector store. When resuming, each agent queries the store using semantic search to retrieve relevant prior findings.<\/p>",
      "D": "<p>Have each agent persist a structured export to a known location. On resume, the coordinator loads the manifest and injects relevant state into agent prompts.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn D:<\/b><\/p><ul><li><p>Kiến trúc điều phối đa agent (multi-agent architecture) hiệu quả nhất khi <b>Coordinator (bộ điều phối)<\/b> giữ vai trò quản lý luồng công việc và trạng thái tổng thể.<\/p><\/li><li><p>Việc mỗi agent lưu xuất dữ liệu cấu trúc (structured export/checkpoint) ra vị trí xác định giúp Coordinator dễ dàng đọc file manifest, biết chính xác tiến độ của từng agent (12/28 tài liệu) và chỉ tiêm (inject) đúng ngữ cảnh/trạng thái cần thiết vào prompt khi khởi động lại. Điều này vừa giúp <b>đảm bảo tính chính xác của dữ liệu<\/b> (fidelity) vừa <b>tối ưu hóa dung lượng context window<\/b> (context efficiency).<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không tối ưu?<\/b><\/h3><ul><li><p><b>A sai:<\/b> Nếu mỗi agent tự đọc lại file trạng thái một cách độc lập mà không qua Coordinator, hệ thống sẽ thiếu sự đồng bộ toàn cục và khó điều phối công việc nối tiếp giữa các agent (ví dụ: Synthesizer cần biết thông tin chính xác từ Document Analyzer).<\/p><\/li><li><p><b>B sai:<\/b> Lưu lại toàn bộ lịch sử hội thoại (conversation log) của Coordinator sẽ chứa rất nhiều thông tin dư thừa, làm phình to context window và tốn chi phí token khi tải lại.<\/p><\/li><li><p><b>C sai:<\/b> Dùng Vector Store để tìm kiếm ngữ nghĩa (semantic search) không đảm bảo truy xuất đầy đủ 100% dữ liệu chính xác cần thiết để phục hồi chính xác trạng thái thực thi tại điểm bị ngắt.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-150",
    "set": 3,
    "number": 150,
    "type": "single",
    "question": "<p>A user is expanding the research system beyond its single web search agent by adding specialized data sources. They add a financial API agent that returns structured JSON with margins, and growth rates; a news monitoring agent that returns prose summaries of recent developments; and a patent analysis agent that returns structured lists of technology synthesis agent combines these into executive briefings. Currently, it converts everything to bullet points, causing financial comparisons to lose tabular clarity and news summari narrative flow. What change would most improve briefing quality?<\/p>",
    "options": {
      "A": "<p>Update the synthesis agent to render each content type appropriately—financial data as tables, news as prose, and technical lists as structured points.<\/p>",
      "B": "<p>Add a format conversion layer between subagents and synthesis that transforms all outputs to a common intermediate representation (such as Markdown) to facilitate more flexible rendering.<\/p>",
      "C": "<p>Standardize all subagent outputs to JSON with fields for every data type to ensure programmatic consistency across the pipeline.<\/p>",
      "D": "<p>Standardize all subagent outputs to prose summaries with a uniform character to maintain a consistent executive voice regardless of the source material.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b><\/p><ul><li><p>Các loại dữ liệu khác nhau có hình thức trình bày tối ưu khác nhau để mang lại trải nghiệm đọc tốt nhất cho người dùng/ban quản trị (executive briefing):<\/p><ul><li><p>Dữ liệu tài chính (con số, biên lợi nhuận, tỷ lệ tăng trưởng) phát huy hiệu quả cao nhất khi trình bày dưới dạng <b>bảng (tables)<\/b>.<\/p><\/li><li><p>Tin tức và diễn biến gần đây cần giữ <b>mạch văn xuôi (prose)<\/b> để bảo toàn tính tự nhiên và ngữ cảnh.<\/p><\/li><li><p>Các danh sách kỹ thuật/bằng sáng chế thích hợp với <b>các ý có cấu trúc (structured points)<\/b>.<\/p><\/li><\/ul><\/li><li><p>Cập nhật Synthesis Agent để nó linh hoạt định dạng nội dung phù hợp theo từng bản chất dữ liệu sẽ giải quyết triệt để vấn đề mất tính so sánh ở bảng biểu và làm gãy mạch văn của tin tức.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>B sai:<\/b> Việc thêm một lớp chuyển đổi trung gian sang Markdown không tự động dạy cho Synthesis Agent biết cách chọn loại định dạng nào cho từng loại dữ liệu nếu bản thân prompt/logic của Agent chưa được cập nhật.<\/p><\/li><li><p><b>C sai:<\/b> Chuẩn hóa tất cả đầu ra thành JSON có thể giúp ích cho xử lý lập trình (programmatic consistency) nhưng không giải quyết được vấn đề hiển thị/định dạng trong báo cáo tóm tắt dành cho con người đọc (executive briefings).<\/p><\/li><li><p><b>D sai:<\/b> Ép tất cả thành văn xuôi (prose summaries) sẽ làm mất đi tính trực quan của các con số tài chính và các danh sách kỹ thuậ<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-151",
    "set": 3,
    "number": 151,
    "type": "single",
    "question": "<p>Your agent has analyzed a complex service module—reading 23 source files, tracing request flows, and identifying error handling patterns. A developer wants to compare two testing strategies before committing to one: end-to-end tests with mocked external services vs. snapshot tests capturing expected outputs. They need to independently develop both approaches to evaluate trade-offs. How should you manage the sessions?<\/p>",
    "options": {
      "A": "<p>Export the analysis session's key findings to a file, then create two new sessions that reference this file.<\/p>",
      "B": "<p>Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy.<\/p>",
      "C": "<p>Start two fresh sessions, having each re-read the relevant source files before beginning.<\/p>",
      "D": "<p>Continue in the original session, developing end-to-end tests first, then snapshot tests sequentially.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn B:<\/b><\/p><ul><li><p>Lập trình viên đã mất rất nhiều chi phí token và thời gian để agent phân tích xong ngữ cảnh của 23 source files, luồng yêu cầu và mô hình xử lý lỗi.<\/p><\/li><li><p>Tính năng <b><code>fork_session<\/code><\/b> (rẽ nhánh session) cho phép kế thừa toàn bộ ngữ cảnh/kiến thức đã phân tích từ session ban đầu sang các nhánh độc lập hoàn toàn. Việc tạo 2 nhánh riêng biệt từ phiên phân tích ban đầu giúp phát triển độc lập hai chiến lược test khác nhau mà không phải phân tích lại từ đầu hay làm lẫn lộn ngữ cảnh giữa 2 phương pháp.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A sai:<\/b> Việc xuất ra file rồi truyền vào session mới làm mất đi lịch sử ngữ cảnh chi tiết (tracing, error handling patterns...) mà agent đã phân tích sâu trước đó.<\/p><\/li><li><p><b>C sai:<\/b> Việc bắt 2 session mới đọc lại 23 file nguồn từ đầu gây lãng phí chi phí token và thời gian xử lý không cần thiết.<\/p><\/li><li><p><b>D sai:<\/b> Phát triển tuần tự trong cùng một session sẽ làm ngữ cảnh bị kéo dài (bloated context), dễ gây lẫn lộn giữa hai chiến lược test và khiến agent đưa ra kết quả không chính xác.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-152",
    "set": 3,
    "number": 152,
    "type": "single",
    "question": "<p>Your development team is using Claude Code to automate test generation across a large codebase. However, developers are frequently rejecting the generated test suites because Claude creates a high volume of trivial assertions or tests that merely maximize line coverage without validating meaningful behavioral logic or edge cases. You want to guide Claude to generate high-quality, production-ready tests directly without introducing high latency or modifying the core pipeline script.<\/p><p>Which strategy best ensures that high-quality, meaningful tests are generated in the first place?<\/p>",
    "options": {
      "A": "<p>Add post-generation coverage analysis that automatically filters out any generated test that doesn't increase line coverage beyond what existing tests provide.<\/p>",
      "B": "<p>Restrict test generation to directories where historical quality metrics show higher acceptance rates, disabling it for areas where generated tests consistently require heavy editing.<\/p>",
      "C": "<p>Implement a two-phase generation where a second Claude call scores each test against quality criteria, filtering out low-scoring tests before presenting results to developers.<\/p>",
      "D": "<p>Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn D:<\/b><\/p><ul><li><p><b>CLAUDE.md<\/b> là nơi lưu trữ tiêu chuẩn ngữ cảnh (context/project guidance) tốt nhất cho Claude Code.<\/p><\/li><li><p>Đề bài yêu cầu tạo ra các bài test chất lượng cao ngay từ lần chạy đầu tiên (<b>in the first place<\/b>) mà <b>không tăng độ trễ (latency)<\/b> và <b>không sửa đổi script pipeline<\/b>.<\/p><\/li><li><p>Việc định nghĩa tiêu chuẩn kiểm thử, fixtures có sẵn và cung cấp ví dụ phân biệt (few-shot examples) trực tiếp trong file <code>CLAUDE.md<\/code> giúp Claude hiểu rõ định hướng ngay từ đầu mà không phát sinh thêm lượt gọi API hay làm tăng độ trễ của hệ thống.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A sai:<\/b> Lọc theo line coverage chỉ kiểm tra số lượng dòng code được chạy chứ không đảm bảo về mặt chất lượng hay logic của bài test (vẫn có thể giữ lại các trivial assertions).<\/p><\/li><li><p><b>B sai:<\/b> Hạn chế thư mục làm giảm phạm vi tự động hóa của dự án thay vì giải quyết bản chất vấn đề chất lượng test do Claude tạo ra.<\/p><\/li><li><p><b>C sai:<\/b> Tạo luồng 2 giai đoạn (hai lần gọi Claude) sẽ làm tăng đáng kể độ trễ (latency) và chi phí, vi phạm yêu cầu <i>\"without introducing high latency\"<\/i> của đề bài.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-153",
    "set": 3,
    "number": 153,
    "type": "single",
    "question": "<p>Your send_notification tool calls third-party messaging APIs. When these services time out during delivery, you cannot determine whether the message was actually sent. Currently, the tool returns is_error: true with a generic “Notification failed” message for all timeouts. Production monitoring reveals agents automatically retry these failures, frequently causing users to receive duplicate notifications. How should you modify the error response?<\/p>",
    "options": {
      "A": "<p>Return is_error: true with a structured field retry_safe: true for timeouts, distinguishing them from permanent failures that should not be retried.<\/p>",
      "B": "<p>Return is_error: true with a message communicating uncertainty: “Timeout – status unknown. Message may have been sent. Avoid retry.”<\/p>",
      "C": "<p>Return is_error: true with a message encouraging retry: “Delivery service temporarily unavailable. Please retry the notification.”<\/p>",
      "D": "<p>Return is_error: true with the original message content echoed back.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h3><b>Vì sao B là thiết kế tối ưu nhất?<\/b><\/h3><ul><li><p><b>Giải quyết trực tiếp bài toán Duplicate Notifications (Trùng lặp tin nhắn):<\/b><\/p><ul><li><p>Trong thiết kế hệ thống phân tán, sự cố Timeout là một trạng thái không xác định (<b>At-Least-Once / Unknown Delivery State<\/b>): tin nhắn có thể đã tới nơi nhưng phản hồi HTTP ACK bị thất lạc, hoặc tin nhắn chưa tới.<\/p><\/li><li><p>Khi Agent nhận được thông báo rõ ràng rằng trạng thái không chắc chắn và được hướng dẫn <b>\"Avoid retry\"<\/b> (Tránh gửi lại), nó sẽ dừng hành vi tự động gọi lại tool, ngăn chặn việc người dùng nhận tin nhắn trùng lặp.<\/p><\/li><\/ul><\/li><li><p><b>Cung cấp ngữ cảnh trung thực cho LLM:<\/b><\/p><ul><li><p>Thay vì báo một lỗi mơ hồ hay khẳng định tin nhắn chưa gửi được, thông điệp phản ánh đúng bản chất kỹ thuật giúp Agent đưa ra câu trả lời phù hợp cho người dùng (ví dụ: <i>\"Hệ thống thông báo có thể đã gửi được tin nhắn nhưng chưa xác nhận được phản hồi. Bạn vui lòng kiểm tra hộp thư trước khi thực hiện gửi lại\"<\/i>).<\/p><\/li><\/ul><\/li><\/ul><h3><b>Vì sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A. Đánh dấu <code>retry_safe: true<\/code> ❌<\/b><\/p><ul><li><p><b>Tạo ra sai lầm nghiêm trọng hơn:<\/b> Đánh dấu <code>retry_safe: true<\/code> (Thao tác an toàn để thử lại) báo hiệu cho Agent rằng thao tác này mang tính idempotent (hoặc chắc chắn chưa thành công). Điều này sẽ khuyến khích Agent retry ngay lập tức, làm trầm trọng thêm vấn đề gửi trùng tin nhắn.<\/p><\/li><\/ul><\/li><li><p><b>C. Khuyến khích retry (<code>Please retry the notification<\/code>) ❌<\/b><\/p><ul><li><p>Tương tự như A, việc khuyến khích thử lại khi chưa biết chắc tin nhắn đã đi hay chưa chính là nguyên nhân trực tiếp gây ra việc người dùng nhận 2–3 tin nhắn trùng lặp.<\/p><\/li><\/ul><\/li><li><p><b>D. Echo lại nội dung tin nhắn ban đầu ❌<\/b><\/p><ul><li><p>Việc gửi lại nội dung tin nhắn không cung cấp bất kỳ thông tin nào về trạng thái giao nhận (delivery status) hay hướng dẫn về việc có nên thử lại hay không, hoàn toàn không giải quyết được vấn đề của bài toán.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-154",
    "set": 3,
    "number": 154,
    "type": "single",
    "question": "<p>Your codebase exploration tool stores session IDs to allow engineers to continue investigations across work sessions. An engineer spent an hour yesterday analyzing a legacy authentication module, building context about its architecture and dependencies. They want to continue today. The session ID is valid, but version control shows 3 of the 12 files the agent previously read were modified overnight by a teammate's merge. What approach best balances efficiency and accuracy?<\/p>",
    "options": {
      "A": "<p>Resume the session and immediately have the agent re-read all 12 previously analyzed files<\/p>",
      "B": "<p>Start a fresh session to ensure the agent works with current codebase state without stale assumptions<\/p>",
      "C": "<p>Resume the session and inform the agent which specific files changed for targeted re-analysis<\/p>",
      "D": "<p>Resume the session without informing the agent about the changed files<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Trong môi trường làm việc cộng tác, code thường xuyên thay đổi. Để cân bằng giữa <b>hiệu quả<\/b> (không phải làm lại toàn bộ) và <b>độ chính xác<\/b> (đảm bảo AI nắm bắt được các cập nhật mới nhất), chiến lược tối ưu nhất là cung cấp thông tin có chọn lọc:<\/p><ul><li><p><b>Tại sao chọn C:<\/b><\/p><ul><li><p><b>Hiệu quả (Efficiency):<\/b> Bạn tận dụng được 9/12 file không thay đổi mà AI đã nắm rõ ngữ cảnh từ hôm qua, giúp tiết kiệm thời gian và tài nguyên tính toán thay vì bắt AI đọc lại toàn bộ (phương án D) hoặc mất công bắt đầu lại từ đầu (phương án B).<\/p><\/li><li><p><b>Độ chính xác (Accuracy):<\/b> Việc thông báo cụ thể 3 file nào đã thay đổi giúp AI thực hiện <b>targeted re-analysis<\/b> (phân tích lại có trọng tâm). AI sẽ cập nhật \"mental model\" của nó về kiến trúc module dựa trên những thay đổi đó, đảm bảo các giả định cũ không bị lỗi thời (stale assumptions).<\/p><\/li><\/ul><\/li><li><p><b>Tại sao các phương án khác chưa tối ưu:<\/b><\/p><ul><li><p><b>A:<\/b> Cực kỳ nguy hiểm. AI sẽ đưa ra các phân tích hoặc gợi ý dựa trên code cũ, dẫn đến các sai sót logic nghiêm trọng khi module đã có sự thay đổi.<\/p><\/li><li><p><b>B:<\/b> Lãng phí thời gian. Việc bắt đầu phiên làm việc mới khiến AI mất đi toàn bộ ngữ cảnh (context) về các file không thay đổi và luồng tư duy đã xây dựng được sau 1 giờ làm việc hôm qua.<\/p><\/li><li><p><b>D:<\/b> Việc bắt AI đọc lại toàn bộ 12 file là dư thừa và thiếu tối ưu (inefficient), đặc biệt khi 9 file còn lại không hề có sự thay đổi nào. Điều này làm tăng độ trễ (latency) không cần thiết.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-155",
    "set": 3,
    "number": 155,
    "type": "single",
    "question": "<p>Your music discovery assistant should consistently maintain an enthusiastic tone, explain its reasoning for each recommendation, and ask clarifying questions to better understand user preferences. You want this behavior to persist reliably across all user interactions.<\/p><p>Where should you define these behavioral guidelines?<\/p>",
    "options": {
      "A": "<p>In the first assistant message, instructing Claude to follow these guidelines going forward<\/p>",
      "B": "<p>In environmental variables that your application passes to the API client<\/p>",
      "C": "<p>In the system prompt<\/p>",
      "D": "<p>Prepended to each user message before sending to the API<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b><\/p><ul><li><p><b>System prompt<\/b> là nơi lý tưởng nhất để thiết lập vai trò (persona), giọng điệu (tone), các quy tắc hành vi và định dạng phản hồi cố định cho trợ lý AI. Các chỉ dẫn trong system prompt có hiệu lực nhất quán và bền vững xuyên suốt toàn bộ cuộc trò chuyện mà không bị trôi đi như các tin nhắn hội thoại thông thường.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A sai:<\/b> Đặt trong tin nhắn trợ lý đầu tiên (<code>assistant message<\/code>) dễ bị xáo trộn luồng hội thoại và có thể bị mô hình \"quên\" dần khi cuộc trò chuyện kéo dài.<\/p><\/li><li><p><b>B sai:<\/b> Biến môi trường (environment variables) chỉ dùng để cấu hình mã nguồn ứng dụng (như API key, endpoint), mô hình Claude không thể đọc trực tiếp các biến này.<\/p><\/li><li><p><b>D sai:<\/b> Ghép nối hướng dẫn vào đầu mỗi tin nhắn người dùng (<code>user message<\/code>) làm tiêu tốn dung lượng token không cần thiết và dễ gây nhiễu ngữ cảnh cho câu hỏi thực sự của người dùng.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-156",
    "set": 3,
    "number": 156,
    "type": "single",
    "question": "<p>The coordinator agent has AgentDefinitions configured for all four specialized subagents, each with appropriate descriptions, prompts, and tool restrictions. During testing, you notice the coordinator correctly reasons about when to delegate — it generates messages like \"I'll ask the web search agent to find sources on this topic\" — but no subagent execution ever occurs. The coordinator then proceeds as if the delegation happened and continues with incomplete information. Logs show no errors.<\/p><p>What is the most likely cause?<\/p>",
    "options": {
      "A": "<p>The AgentDefinitions are configured correctly, but the coordinator's system prompt doesn't explicitly list the available subagent types, preventing the model from knowing they can be invoked.<\/p>",
      "B": "<p>The coordinator's allowedTools configuration doesn't include \"Task\", so while it can reason about delegation, it cannot invoke the tool required to spawn subagents.<\/p>",
      "C": "<p>Subagent context isolation means task descriptions from the coordinator don't automatically reach subagents; you need to configure explicit context forwarding in ClaudeAgentOptions.<\/p>",
      "D": "<p>The coordinator's max_tokens setting is too low, causing the Task tool invocation to be truncated before the subagent type parameter can be specified.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Đáp án đúng: :<\/p><blockquote><p><b>B. The coordinator's allowedTools configuration doesn't include \"Task\", so while it can reason about delegation, it cannot invoke the tool required to spawn subagents.<\/b><\/p><\/blockquote><hr/><h3>Giải thích chi tiết<\/h3><ul><li><p><b>Tại sao đáp án B đúng:<\/b><\/p><p>Trong kiến trúc agent phân tầng (như mô hình Anthropic/Claude Agent SDK), mô hình ngôn ngữ (LLM) có thể nhận biết và suy luận về việc khi nào cần giao việc (ví dụ: tạo ra các câu suy nghĩ như <i>\"I'll ask the web search agent...\"<\/i>). Tuy nhiên, LLM chỉ có thể thực sự gọi công cụ (tool execution) nếu công cụ đó được khai báo rõ ràng trong cấu hình <code>allowedTools<\/code> của agent. Nếu thiếu công cụ <code>\"Task\"<\/code> (hoặc công cụ dùng để kích hoạt subagent), agent chỉ có thể \"nói\" về việc giao việc mà không thể thực thi lệnh gọi tool thực tế, dẫn đến việc không có subagent nào chạy và không có lỗi nào được ghi nhận ở tầng logic của code.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>Đáp án A sai:<\/b> Hệ thống không bắt buộc phải liệt kê thủ công từng loại subagent trong system prompt nếu chúng đã được cấu hình sẵn trong <code>AgentDefinitions<\/code>. Mô hình có thể đọc định nghĩa từ phần khai báo để hiểu cách sử dụng.<\/p><\/li><li><p><b>Đáp án C sai:<\/b> Subagent không gặp lỗi thiếu ngữ cảnh do tự động cô lập khiến lệnh gọi không hoạt động hoàn toàn. Vấn đề cốt lõi ở đây là subagent không hề được khởi chạy (spawn), chứ không phải việc truyền dữ liệu giữa các agent gặp lỗi.<\/p><\/li><li><p><b>Đáp án D sai:<\/b> Lỗi <code>max_tokens<\/code> quá thấp thường dẫn đến việc câu trả lời bị cắt cụt (truncated) đột ngột giữa chừng, gây ra lỗi phân tích cú pháp (JSON/Tool call syntax error). Trong khi đó, đề bài nêu rõ là mô hình hoàn thành chuỗi suy luận bình thường, tạo ra thông báo đầy đủ và <b>\"Logs show no errors\"<\/b>.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-157",
    "set": 3,
    "number": 157,
    "type": "single",
    "question": "<p>Your product search tool queries an external catalog API and returns matching items. In production, you observe the agent frequently retries searches immediately after receiving zero results, treating “no matches found” as a failure requiring retry. The external API returns HTTP 200 with an empty results array – a valid response. How should you restructure the tool’s result to help the agent correctly interpret empty result sets?<\/p>",
    "options": {
      "A": "<p>Add a suggestions field containing alternative search strategies when results are empty, helping guide the agent toward more productive follow-up queries.<\/p>",
      "B": "<p>Return a natural language string describing the outcome, allowing the agent to interpret the result contextually based on the message content.<\/p>",
      "C": "<p>Return a result object with isError: true and a message explaining no products matched.<\/p>",
      "D": "<p>Return a structured result with a success boolean and results array, reserving isError: true for actual execution failures only.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h3><b>Vì sao D là thiết kế tối ưu nhất?<\/b><\/h3><ul><li><p><b>Phân định rõ ràng giữa Lỗi Execution (Technical Failure) và Kết quả Trống (Business Outcome):<\/b><\/p><ul><li><p>LLM/Agent thường cắm cờ retry khi nhận thấy dấu hiệu hoặc thông điệp thất bại. Bằng cách chuẩn hóa đầu ra dạng cấu trúc minh bạch:<\/p>JSON<pre>{\n  \"success\": true,\n  \"results\": [],\n  \"total_count\": 0\n}\n<\/pre><p>Agent hiểu rằng <b>công cụ đã thực thi thành công (HTTP 200)<\/b>, chỉ là không có dữ liệu khớp với truy vấn. <code>isError: true<\/code> chỉ nên dùng cho các lỗi kỹ thuật thực sự như timeout, 500 Internal Error, hay sai tham số.<\/p><\/li><\/ul><\/li><li><p><b>Ngăn chặn hành vi Retry vô ích:<\/b> Cấu trúc này làm rõ trạng thái cho Agent, giúp nó dừng việc cố gắng thử lại (retry) cùng một truy vấn và chuyển hướng sang giải thích cho người dùng hoặc điều chỉnh từ khóa tìm kiếm.<\/p><\/li><\/ul><h3><b>Vì sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A. Thêm trường <code>suggestions<\/code> khi kết quả trống ❌<\/b><\/p><ul><li><p>Dù việc gợi ý từ khóa/chiến lược tìm kiếm mới là một tính năng UX tốt, nhưng nó không giải quyết trực tiếp nguyên nhân cốt lõi khiến Agent hiểu lầm kết quả mảng rỗng <code>[]<\/code> là một lỗi execution để thực hiện retry ngay lập tức.<\/p><\/li><\/ul><\/li><li><p><b>B. Trả về chuỗi văn bản tự nhiên (Natural Language String) ❌<\/b><\/p><ul><li><p>Định dạng phi cấu trúc làm tăng tính mơ hồ (ambiguity). Agent sẽ phải mất thêm công sức suy luận ngữ cảnh từ văn bản thay vì dựa vào các cờ boolean rõ ràng, dễ dẫn đến việc xử lý thiếu ổn định.<\/p><\/li><\/ul><\/li><li><p><b>C. Trả về <code>isError: true<\/code> kèm thông báo không tìm thấy sản phẩm ❌<\/b><\/p><ul><li><p><b>Tạo ra sai lầm nghiêm trọng hơn:<\/b> Việc gán <code>isError: true<\/code> cho một phản hồi 200 OK hợp lệ sẽ đánh lừa Agent rằng công cụ bị lỗi, khiến hành vi retry lặp lại liên tục diễn ra tồi tệ hơn.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-158",
    "set": 3,
    "number": 158,
    "type": "single",
    "question": "<p>After investigating a billing dispute over 25+ turns, you've identified that duplicate charges occurred due to a payment gateway timeout triggering retry logic. The required refund ($847) exceeds your $500 authorization limit. You need to call escalate_to_human, and the human agent won't have access to your conversation transcript.<\/p><p>What context should you pass to enable effective resolution?<\/p>",
    "options": {
      "A": "<p>The complete conversation transcript with all tool results.<\/p>",
      "B": "<p>The customer's original complaint verbatim plus the tool result excerpts showing duplicate transactions.<\/p>",
      "C": "<p>Your diagnosis and the refund amount only.<\/p>",
      "D": "<p>A structured summary: customer ID, root cause, refund amount, and recommended action.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Đáp án đúng: <b>[D]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn D:<\/b> Khi cần chuyển giao một tiến trình phức tạp kéo dài qua nhiều lượt (25+ turns) sang cho con người (human agent) mà lịch sử trò chuyện không được tự động chia sẻ, việc truyền một bản tóm tắt có cấu trúc rõ ràng (<b>customer ID, root cause, refund amount, and recommended action<\/b>) là cách tối ưu nhất. Nó cung cấp ngay lập tức các dữ liệu cốt lõi cần thiết giúp con người nắm bắt thông tin nhanh chóng, ra quyết định phê duyệt khoản tiền vượt hạn mức và giải quyết vấn đề mà không bị quá tải bởi dữ liệu thô.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Truyền toàn bộ bản ghi hội thoại thô (25+ turns) có thể vượt quá giới hạn hoặc làm mất thời gian đọc của con người, đi ngược lại mục đích chắt lọc thông tin tóm tắt để hỗ trợ xử lý nhanh.<\/p><\/li><li><p><b>B:<\/b> Chỉ cung cấp lời phàn nàn ban đầu cộng với đoạn trích giao dịch thiếu đi phần chẩn đoán nguyên nhân gốc rễ và đề xuất hành động cụ thể từ AI.<\/p><\/li><li><p><b>C:<\/b> Quá sơ sài, thiếu thông tin định danh khách hàng (customer ID) và nguyên nhân chi tiết khiến con người mất công điều tra lại từ đầu.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-159",
    "set": 3,
    "number": 159,
    "type": "single",
    "question": "<p>Your content curation agent discovers articles, analyzes each for relevance, then adds selected articles to themed collections. With separate discover_articles(topic), analyze_article(id), and add_to_collection(article_id, collection_id) tools, you observe 18+ sequential tool calls per request, causing latency issues. The agent must make editorial judgments about which articles fit a collection’s theme – this requires seeing all candidates with their analysis scores simultaneously to select a cohesive set. What tool composition best addresses efficiency while preserving editorial judgment?<\/p>",
    "options": {
      "A": "<p>Keep all tools separate but implement response caching for analyze_article calls.<\/p>",
      "B": "<p>Create a curate_collection(topic, collection_id) tool that handles discovery, analysis, and selection internally using configurable quality thresholds.<\/p>",
      "C": "<p>Create a discover_and_analyze(topic) composite tool that returns all candidates with their analysis scores, keeping add_to_collection separate for selective calls.<\/p>",
      "D": "<p>Add a preview_curation(topic, collection_id) tool that shows what would be added based on predefined rules, with an approve_curation() tool to confirm.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h3><b>Vì sao C là thiết kế tối ưu nhất?<\/b><\/h3><ul><li><p><b>Giảm đáng kể số lượng Tool Call &amp; Độ trễ (Latency):<\/b><\/p><ul><li><p>Hiện tại, nếu tìm thấy 8 bài viết, Agent phải thực hiện 1 cuộc gọi <code>discover_articles<\/code>, 8 cuộc gọi <code>analyze_article<\/code> nối tiếp nhau, và 8 cuộc gọi <code>add_to_collection<\/code> <span>$\\rightarrow$<\/span> <b>17+ cuộc gọi nối tiếp (sequential tool calls)<\/b>.<\/p><\/li><li><p>Bằng cách gộp hai bước đầu thành <code>discover_and_analyze(topic)<\/code>, Agent chỉ cần <b>1 cuộc gọi duy nhất<\/b> để lấy toàn bộ danh sách ứng viên kèm điểm số phân tích.<\/p><\/li><\/ul><\/li><li><p><b>Bảo tồn năng lực đánh giá biên tập của Agent (Editorial Judgment):<\/b><\/p><ul><li><p>Để chọn ra một tập hợp bài viết hài hòa và phù hợp nhất cho chủ đề (cohesive set), Agent <b>bắt buộc phải nhìn thấy bức tranh tổng thể<\/b> (toàn bộ danh sách ứng viên và điểm số tương ứng cùng một lúc). Sau khi chọn lọc, Agent có thể gọi <code>add_to_collection<\/code> một lần (hoặc song song) cho các bài viết đã được duyệt.<\/p><\/li><\/ul><\/li><\/ul><h3><b>Vì sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A. Giữ nguyên công cụ và thêm Response Caching cho <code>analyze_article<\/code> ❌<\/b><\/p><ul><li><p>Caching chỉ giúp ích khi Agent phân tích lại các bài viết đã từng xử lý trước đó. Đối với các bài viết mới được phát hiện, Agent vẫn phải thực hiện 18+ lượt gọi tool nối tiếp nhau, hoàn toàn không giải quyết được vấn đề độ trễ ban đầu.<\/p><\/li><\/ul><\/li><li><p><b>B. Tạo công cụ <code>curate_collection<\/code> tự động hóa toàn bộ bằng ngưỡng cố định (Quality Thresholds) ❌<\/b><\/p><ul><li><p><b>Tước bỏ năng lực đánh giá của Agent:<\/b> Việc đẩy logic chọn lọc vào backend dựa trên các ngưỡng điểm số cố định sẽ biến Agent thành một script tự động cứng nhắc. Nó loại bỏ hoàn toàn khả năng đưa ra \"quyết định biên tập\" (editorial judgment) dựa trên sự kết hợp hài hòa giữa các bài viết.<\/p><\/li><\/ul><\/li><li><p><b>D. Thêm công cụ <code>preview_curation<\/code> và <code>approve_curation<\/code> dựa trên quy tắc có sẵn ❌<\/b><\/p><ul><li><p>Giống như B, phương án này phụ thuộc vào các quy tắc định sẵn (predefined rules) ở backend thay vì năng lực suy luận của LLM, đồng thời vẫn phải tốn thêm các bước xác nhận phụ không cần thiết.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-160",
    "set": 3,
    "number": 160,
    "type": "single",
    "question": "<p>During initial testing of the automated review pipeline, you notice that reviews on large PRs (50+ changed files) sometimes take over 20 minutes and cost $8-12 per run due to extensive agentic loops — Claude reads files, runs analysis tools, and iterates many times. Your team needs each invocation to abort once it reaches a fixed iteration count and a fixed dollar amount, enforced by Claude Code itself rather than the surrounding job runner.<\/p><p>Which configuration change directly enforces both of those per-invocation caps?<\/p>",
    "options": {
      "A": "<p>Set timeout-minutes: 5 on the GitHub Actions job step and monitor per-run costs via the Anthropic Console usage dashboard.<\/p>",
      "B": "<p>Switch the --model flag to a smaller, cheaper model so each iteration uses fewer tokens and lower per- call cost.<\/p>",
      "C": "<p>Set --permission-mode dontAsk to auto-deny any tool permission requests not in the explicitly allowed set.<\/p>",
      "D": "<p>Add --max-turns 10 --max-budget-usd 2.00 to the claude -p invocation to cap iterations and spend.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn D:<\/b><\/p><ul><li><p>Yêu cầu của bài toán là thiết lập giới hạn về <b>số lượt lặp (iteration count)<\/b> và <b>ngân sách tối đa (dollar amount)<\/b>, được kiểm soát trực tiếp bởi chính <b>Claude Code<\/b> (chứ không phải bởi runner bên ngoài như GitHub Actions).<\/p><\/li><li><p>CLI của Claude Code cung cấp sẵn hai cờ (flags) để đáp ứng chính xác yêu cầu này:<\/p><ul><li><p><code>--max-turns<\/code>: Giới hạn số lượt tương tác/lặp (agentic turns/iterations) trong một lần gọi command.<\/p><\/li><li><p><code>--max-budget-usd<\/code>: Giới hạn mức chi phí tối đa (tính theo USD) cho lần gọi đó. Khi đạt đến ngưỡng ngân sách này, Claude Code sẽ tự động dừng thực thi.<\/p><\/li><\/ul><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A sai:<\/b> <code>timeout-minutes<\/code> được cấu hình trên GitHub Actions (runner bên ngoài), không phải do Claude Code tự quản lý. Ngoài ra, việc theo dõi chi phí trên Anthropic Console chỉ mang tính xem báo cáo sau khi chạy chứ không chủ động chặn/abort khi chạm ngưỡng chi phí.<\/p><\/li><li><p><b>B sai:<\/b> Chuyển sang mô hình nhỏ hơn chỉ giúp giảm chi phí cho từng lượt gọi, nhưng <b>không thiết lập giới hạn cứng (hard cap)<\/b> về số lượt lặp tối đa hay tổng ngân sách chi trả.<\/p><\/li><li><p><b>C sai:<\/b> Cờ <code>--permission-mode dontAsk<\/code> dùng để quản lý quyền thực thi công cụ (tools permission) tự động từ chối nếu không nằm trong danh sách cho phép, không dùng để giới hạn số lượt lặp hay chi phí của chương trình.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-161",
    "set": 3,
    "number": 161,
    "type": "single",
    "question": "<p>Your agent has called lookup_order multiple times while investigating a customer's return requests. Each response includes 40+ fields (items, shipping details, payment info, status history). Tool outputs now represent the majority of the conversation's context. The customer mentions two more orders they want to discuss.<\/p><p>What's the most effective approach before making additional lookups?<\/p>",
    "options": {
      "A": "<p>Proceed with additional lookups without modifying the existing tool output context<\/p>",
      "B": "<p>Move all tool responses to a vector database with semantic indexing, retrieving relevant portions as the conversation continues<\/p>",
      "C": "<p>Extract only return-relevant fields (items, purchase date, return window, status) from each existing order response, removing verbose details<\/p>",
      "D": "<p>Have the model generate a natural language summary of each order's key details, replacing structured responses with prose descriptions<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Đáp án đúng: <b>[C]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn C:<\/b> Khi ngữ cảnh của cuộc trò chuyện bị quá tải do các kết quả gọi công cụ dài dòng (mỗi order gồm 40+ trường thông tin), cách tối ưu nhất để tiết kiệm không gian ngữ cảnh (context window) mà vẫn giữ lại vẹn toàn các chi tiết định lượng chính xác phục vụ cho việc xử lý đổi trả là <b>trích xuất và giữ lại duy nhất các trường liên quan đến việc đổi trả<\/b> (như items, purchase date, return window, status) và loại bỏ đi các thông tin rườm rà (verbose details) không cần thiết trước khi thực hiện các lượt tra cứu tiếp theo.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Tiếp tục gọi thêm các lookups mới trong khi context đã phình to sẽ nhanh chóng làm tràn giới hạn ngữ cảnh (context window explosion) hoặc làm giảm độ chính xác của mô hình.<\/p><\/li><li><p><b>B:<\/b> Đưa toàn bộ phản hồi vào vector database với semantic indexing gây thêm độ phức tạp hạ tầng không cần thiết cho một đoạn hội thoại tương tác trực tiếp.<\/p><\/li><li><p><b>D:<\/b> Thay thế cấu trúc dữ liệu chính xác bằng văn bản tự sự (prose descriptions) dễ dẫn đến hiện tượng mơ hồ, mất mát dữ liệu số liệu cụ thể hoặc sai lệch thông tin khi model cần đối chiếu điều kiện đổi trả.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-162",
    "set": 3,
    "number": 162,
    "type": "single",
    "question": "<p>Your MCP server includes archive_file(file_id) and delete_file(file_id) tools. Production logs show the agent calls delete_file when users ask to \"remove old backups,\" policy requires archiving backup files. Both tools currently have minimal descriptions: \"Archives a file\" and \"Deletes a file.\"<\/p><p>Which change most directly improves tool selection?<\/p>",
    "options": {
      "A": "<p>Expand tool descriptions to clarify use cases, adding guidance like \"Do not use for backup files\" to delete_file.<\/p>",
      "B": "<p>Add a confirmation step that requires users to type \"CONFIRM DELETE\" before delete_file executes.<\/p>",
      "C": "<p>Implement server-side validation that rejects delete_file calls for files tagged as backups, returning an error message suggesting archive_file.<\/p>",
      "D": "<p>Add few-shot examples to the system prompt demonstrating that requests involving \"backup\" or \"old\" should use archive_file.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Bản chất vấn đề:<\/b> Đề bài mô tả rằng cả hai tool (<code>archive_file<\/code> và <code>delete_file<\/code>) hiện chỉ có <b>mô tả rất tối giản<\/b> (<i>minimal descriptions<\/i>). Khi mô hình (LLM) lựa chọn công cụ để gọi trong kiến trúc MCP (Model Context Protocol), nó dựa chủ yếu vào <b>mô tả chi tiết của tool (Tool Description)<\/b>.<\/p><\/li><li><p><b>Tại sao A đúng:<\/b><\/p><ul><li><p>Cải thiện và mở rộng mô tả công cụ (<i>Tool Description Engineering<\/i>) là cách <b>trực tiếp nhất<\/b> và <b>chuẩn nhất<\/b> theo nguyên tắc thiết kế MCP để hướng dẫn LLM phân biệt chính xác khi nào nên/không nên dùng một công cụ.<\/p><\/li><li><p>Bổ sung hướng dẫn cụ thể như <i>\"Do not use for backup files\"<\/i> trực tiếp trong <code>delete_file<\/code> giúp mô hình hiểu rõ định hướng chọn <code>archive_file<\/code> khi xử lý các tệp sao lưu.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3>Lý do các phương án còn lại không phải lựa chọn trực tiếp nhất:<\/h3><ul><li><p><b>B (Add confirmation step):<\/b> Đây là biện pháp an toàn (Safety Guardrail) ngăn thao tác nguy hiểm chứ <b>không giúp LLM học cách chọn đúng tool ngay từ đầu<\/b>.<\/p><\/li><li><p><b>C (Server-side validation):<\/b> Xử lý ở server là giải pháp phản ứng (reactive) khi lỗi đã xảy ra, khiến agent phải tốn thêm vòng lặp (retry) để gọi lại tool khác.<\/p><\/li><li><p><b>D (Add few-shot examples):<\/b> Tốn token trong System Prompt và không linh hoạt bằng việc định nghĩa trực tiếp vai trò của từng công cụ ngay trong schema của MCP server.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-163",
    "set": 3,
    "number": 163,
    "type": "single",
    "question": "<p>A customer returns 4 hours after their initial session about the same billing dispute. The previous 32-turn session contains lookup_order results showing \"Status: PENDING, Expected resolution: 24-48 hours.\" In testing, you observe that when resuming sessions with stale tool results, the agent often references the outdated data in responses (e.g., \"I see your refund is still being processed\") even after subsequent fresh tool calls return different information. What approach most reliably handles returning customers?<\/p>",
    "options": {
      "A": "<p>Resume with full history but filter out previous tool_result messages before resuming, keeping only the human/assistant turns so the agent must re-fetch needed data.<\/p>",
      "B": "<p>Start a new session, inject a structured summary of the previous interaction (issue type, actions taken, resolution status), then make fresh tool calls before engaging.<\/p>",
      "C": "<p>Resume with full history and add a system prompt instruction telling the agent to always prefer the most recent tool results when multiple calls to the same tool exist in context.<\/p>",
      "D": "<p>Resume with full history and configure the agent to automatically re-call all previously-used tools at session start to ensure data freshness.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Vì sao đúng: B. Đúng. Một phiên (session) mới kèm bản tóm tắt vẫn giữ được mạch truyện liên tục (narrative continuity), đồng thời đảm bảo agent không suy luận dựa trên các tool result đã lỗi thời (stale). Phân tích từng phương án: • A: Việc loại bỏ tool_result ở giữa một cuộc hội thoại có thể khiến các assistant message tham chiếu đến những kết quả không còn tồn tại — làm cho transcript trở nên mâu thuẫn nội tại. • B: Đúng. Một phiên mới kèm bản tóm tắt vẫn giữ được mạch truyện liên tục, đồng thời đảm bảo agent không suy luận dựa trên các tool result đã lỗi thời. • C: Các instruction trong prompt chỉ mang tính gợi ý (suggestion). Bạn đã quan sát thấy chính xác kiểu lỗi này khi test — mô hình vẫn tham chiếu đến kết quả cũ. • D: Việc gọi lại toàn bộ các tool một cách dàn trải vừa lãng phí, vừa chậm, và vẫn để các kết quả cũ nằm trong context gây nhiễu cho mô hình.<\/p>"
  },
  {
    "id": "CCAR-F-164",
    "set": 3,
    "number": 164,
    "type": "single",
    "question": "<p>Analysis reveals the coordinator invokes the web search subagent, waits for its response, then invokes the document analysis subagent and waits again. These tasks are independent—neither requires the other's output. How should you modify the system to run these subagents concurrently?<\/p>",
    "options": {
      "A": "<p>Switch both subagents to use a Haiku-tier model instead of Sonnet to reduce their individual execution time.<\/p>",
      "B": "<p>Create an async orchestration layer outside the agent that spawns parallel threads, each running a separate coordinator-subagent pair, then aggregates results.<\/p>",
      "C": "<p>Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message rather than across separate conversation turns.<\/p>",
      "D": "<p>Add detailed instructions to the coordinator's system prompt explaining the performance benefits of parallel execution and requesting it invoke both subagents at the same time.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn C:<\/b><\/p><ul><li><p>API của Claude hỗ trợ cơ chế gọi nhiều công cụ song song (<b>Parallel Tool Calling<\/b>). Khi coordinator trả về một tin nhắn response chứa đồng thời nhiều khối gọi tool (tool_use blocks) cho cả <code>web search<\/code> và <code>document analysis<\/code>, hệ thống client/runtime có thể thực thi cả hai subagent này song song cùng lúc, giúp tối ưu hóa đáng kể thời gian xử lý.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không đúng?<\/b><\/h3><ul><li><p><b>A sai:<\/b> Chuyển sang model Haiku chỉ làm giảm thời gian chạy của từng task riêng lẻ chứ không giải quyết bản chất vấn đề thực thi nối tiếp (sequential execution) thành song song.<\/p><\/li><li><p><b>B sai:<\/b> Tạo thêm một tầng async bên ngoài tạo ra hai cặp coordinator-subagent là làm phức tạp hóa kiến trúc không cần thiết, trong khi một coordinator duy nhất hoàn toàn có thể tự gọi nhiều tool song song.<\/p><\/li><li><p><b>D sai:<\/b> Chỉ thêm hướng dẫn suông trong system prompt mà không cấu hình/định hình đầu ra của coordinator gửi cả 2 tool call trong cùng một lượt (turn) thì mô hình vẫn có thể quay lại thói quen gọi tuần tự.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-165",
    "set": 3,
    "number": 165,
    "type": "single",
    "question": "<p>During a billing dispute resolution, your agent successfully retrieves customer info via get_customer and order details via lookup_order, but when attempting to process the refund via process_refund, the tool returns a timeout error. The agent has enough information to explain the billing, confirm the refund eligibility, and verify refund eligibility, but cannot actually process the refund due to the backend failure.<\/p><p>What approach best balances first-contact resolution with appropriate error handling?<\/p>",
    "options": {
      "A": "<p>Explain the billing, confirm refund eligibility, acknowledge the system issue preventing immediate processing, and offer escalation or retry later<\/p>",
      "B": "<p>Escalate immediately to a human agent since the refund action cannot be completed<\/p>",
      "C": "<p>Implement automatic retries with exponential backoff for process_refund, keeping the conversation open until the refund is successfully processed<\/p>",
      "D": "<p>Confirm the refund will be processed and close the conversation, since the system has all necessary information to complete it automatically<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Đáp án đúng: <b>[A]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn A:<\/b> Khi agent gặp sự cố kỹ thuật từ phía backend (timeout error khi gọi công cụ <code>process_refund<\/code>) nhưng đã thu thập đầy đủ thông tin để xác nhận tính hợp lệ của khoản hoàn tiền, phương án cân bằng tốt nhất giữa tỷ lệ giải quyết ngay (first-contact resolution) và xử lý lỗi phù hợp là <b>giải thích rõ ràng tình trạng, xác nhận quyền lợi cho khách hàng, thông báo về sự cố hệ thống tạm thời và đưa ra các lựa chọn tiếp theo<\/b> (như chuyển giao cho nhân viên hoặc thử lại sau). Điều này vừa minh bạch với khách hàng, vừa giữ trải nghiệm tốt thay vì bỏ mặc hoặc ép họ chờ đợi mơ hồ.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>B:<\/b> Việc leo thang ngay lập tức (escalate immediately) mà không thông báo chi tiết bối cảnh hoặc khi agent hoàn toàn có đủ thông tin xác thực làm lãng phí năng lực tự động hóa của agent.<\/p><\/li><li><p><b>C:<\/b> Việc tự động retry với exponential backoff và bắt người dùng giữ nguyên cuộc trò chuyện chờ đợi trong thời gian timeout gây ra trải nghiệm tồi tệ.<\/p><\/li><li><p><b>D:<\/b> Xác nhận sai lệch rằng khoản tiền đã được xử lý xong trong khi backend thực tế đã báo lỗi timeout là hành vi sai lệch dữ liệu và gây mất uy tín nghiêm trọng.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-166",
    "set": 3,
    "number": 166,
    "type": "single",
    "question": "<p>Your update_user_profile tool accepts a user_id (required) and an optional fields_to_update object. In testing, Claude frequently omits user_id or passes incorrectly structured data.<\/p><p>What is most critical for helping Claude understand what parameter values to provide?<\/p>",
    "options": {
      "A": "<p>Strict JSON Schema type constraints marking user_id as required and defining fields_to_update as an object type<\/p>",
      "B": "<p>Clear parameter descriptions explaining expected format, such as \"user_id : UUID of the user to update (required)\"<\/p>",
      "C": "<p>Verbose parameter names encoding format hints, such as user_id_string_uuid_format<\/p>",
      "D": "<p>Detailed error responses explaining why invalid parameter values were rejected<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn B:<\/b><\/p><ul><li><p>Theo tài liệu hướng dẫn thiết kế Tool của Anthropic, <b>mô tả tham số (parameter descriptions)<\/b> là yếu tố quan trọng nhất giúp Claude hiểu ngữ cảnh, ý nghĩa, định dạng dữ liệu kỳ vọng (ví dụ: chuỗi định dạng UUID) và thời điểm cần cung cấp tham số đó.<\/p><\/li><li><p>Mặc dù JSON Schema giúp định nghĩa kiểu dữ liệu về mặt cú pháp, nhưng Claude cần thông tin mô tả ngữ nghĩa (semantic description) chi tiết để đưa ra các giá trị chính xác và phù hợp nhất với yêu cầu.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phải là lựa chọn ưu tiên nhất?<\/b><\/h3><ul><li><p><b>A sai:<\/b> Ràng buộc JSON Schema (như <code>type: string<\/code>, <code>required<\/code>) chỉ giúp kiểm tra mặt cấu trúc cú pháp, không giúp Claude hiểu được định dạng cụ thể (như UUID) hoặc ngữ cảnh sử dụng dữ liệu nếu thiếu mô tả rõ ràng.<\/p><\/li><li><p><b>C sai:<\/b> Việc đặt tên tham số quá dài và rối rắm (verbose parameter names) làm tốn token context không cần thiết và không phải là giải pháp tiêu chuẩn hay hiệu quả để giải thích định dạng cho mô hình.<\/p><\/li><li><p><b>D sai:<\/b> Phản hồi lỗi chi tiết chỉ có tác dụng sửa sai <i>sau khi<\/i> mô hình đã thực thi công cụ thất bại (reactive), trong khi mô tả tham số rõ ràng giúp ngăn ngừa lỗi ngay từ lần gọi đầu tiên (proactive).<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-167",
    "set": 3,
    "number": 167,
    "type": "single",
    "question": "<p>During testing, you observe that in extended exploration sessions (30+ minutes), the agent starts giving inconsistent correctAnswerss about code structure it discussed earlier. Engineers report having to repeat context about modules they've already explored. What's the most effective approach to address this?<\/p>",
    "options": {
      "A": "<p>Have the agent maintain a scratchpad file that records key findings, referencing it for subsequent questions.<\/p>",
      "B": "<p>Switch to a higher-capacity model tier to provide more context window space for accumulated exploration data.<\/p>",
      "C": "<p>Implement automatic context clearing every 15 minutes to ensure the agent starts with fresh, uncontaminated context.<\/p>",
      "D": "<p>Create summaries of all source files before exploration begins, loading only these compressed representations into context.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b><\/p><ul><li><p>Nguyên nhân gây ra vấn đề là hiện tượng <b>mất chú ý/suy giảm ngữ cảnh (context degradation / attention drift)<\/b> khi các phiên khám phá kéo dài làm ngữ cảnh bị kéo quá dài.<\/p><\/li><li><p>Việc sử dụng một file <b>scratchpad<\/b> (nháp/ghi chú) giúp agent chủ động ghi lại các phát hiện kiến trúc quan trọng (key findings) vào bộ nhớ ngoài (external memory). Khi cần trả lời các câu hỏi tiếp theo, agent có thể tham chiếu lại file scratchpad này để đảm bảo câu trả lời luôn nhất quán và chính xác mà không bắt lập trình viên phải nhắc lại ngữ cảnh cũ hay phụ thuộc vào lịch sử chat quá dài.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>B sai:<\/b> Tăng dung lượng cửa sổ ngữ cảnh (larger context window) không giải quyết được vấn đề LLM bị \"nhiễu\" hoặc quên thông tin nằm ở giữa/đầu ngữ cảnh dài (vấn đề \"lost in the middle\").<\/p><\/li><li><p><b>C sai:<\/b> Tự động xóa sạch context mỗi 15 phút sẽ làm mất hoàn toàn lịch sử làm việc, bắt agent phải tìm hiểu lại code từ đầu.<\/p><\/li><li><p><b>D sai:<\/b> Việc tóm tắt tất cả file nguồn trước khi bắt đầu sẽ làm mất đi các chi tiết quan trọng và tốn rất nhiều token ban đầu, đồng thời không giải quyết được nhu cầu khám phá sâu trong quá trình làm việc.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-168",
    "set": 3,
    "number": 168,
    "type": "single",
    "question": "<p>When the agent calls lookup_order and receives order details showing the item was purchased 45 days ago, how does the agentic loop determine whether to call process_refund or escalate_to_human next?<\/p>",
    "options": {
      "A": "<p>The orchestration layer automatically routes to the next tool based on the order's status field.<\/p>",
      "B": "<p>The order details are added to the conversation and the model reasons about which action to take.<\/p>",
      "C": "<p>The agent follows a pre-configured decision tree mapping order attributes to specific tool calls.<\/p>",
      "D": "<p>The agent executes the remaining steps in a tool sequence planned at the start of the request.<\/p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<p>Đáp án đúng: <b>[B]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn B:<\/b> Trong một vòng lặp agentic tiêu chuẩn (agentic loop) sử dụng LLM, kết quả trả về từ công cụ (<code>lookup_order<\/code>) được đưa trở lại vào ngữ cảnh hội thoại, từ đó mô hình (model) phân tích nội dung thông tin (ví dụ: phát hiện thời gian mua hàng là 45 ngày trước, vượt quá chính sách hoàn trả tự động thông thường) và tự suy luận bước hành động tiếp theo nên gọi công cụ <code>process_refund<\/code> hay chuyển giao <code>escalate_to_human<\/code>.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Lớp điều phối (orchestration layer) không tự động định tuyến cứng nhắc dựa trên một trường trạng thái đơn giản mà phụ thuộc vào khả năng nhận thức và suy luận của mô hình từ dữ liệu thô.<\/p><\/li><li><p><b>C &amp; D:<\/b> Agent không chạy theo cây quyết định cố định hay một chuỗi công cụ được lập kế hoạch sẵn từ đầu, mà hoạt động dựa trên cơ chế phản hồi động (dynamic tool-calling loops) qua từng vòng lặp.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-169",
    "set": 3,
    "number": 169,
    "type": "single",
    "question": "<p>The synthesis agent completes its initial pass but flags that three key research questions remain unanswered because the web search and document analysis agents didn’t find relevant information on those specific subtopics. The coordinator currently proceeds directly to report generation, producing reports with incomplete coverage. What change would most effectively improve research completeness?<\/p>",
    "options": {
      "A": "<p>Have the report generation agent note which research questions couldn’t be answered, so users understand the limitations of the final output.<\/p>",
      "B": "<p>Increase the initial breadth of queries sent to web search and document analysis to reduce the probability of missing relevant information.<\/p>",
      "C": "<p>Have the coordinator evaluate synthesis output for gaps, then re-delegate to web search and document analysis with targeted queries before invoking synthesis again.<\/p>",
      "D": "<p>Give the synthesis agent direct access to web search tools so it can autonomously fill knowledge gaps without returning control to the coordinator.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p><b>Giải thích chi tiết:<\/b><\/p><ul><li><p><b>Đáp án C thiết lập vòng lặp phản hồi (Feedback Loop / Multi-step Refinement):<\/b> Trong mô hình đa đại lý (multi-agent orchestration), việc tổng hợp thông tin không phải là đường một chiều. Khi phát hiện ra khoảng trống tri thức (knowledge gaps), kiến trúc tối ưu nhất là cho phép bộ điều phối (coordinator) nhận phản hồi, đánh giá các câu hỏi còn thiếu, sau đó giao lại nhiệm vụ (re-delegate) với các truy vấn có mục tiêu rõ ràng hơn cho agent tìm kiếm và phân tích. Vòng lặp này giúp chủ động bù đắp thông tin bị thiếu trước khi chuyển sang bước tạo báo cáo.<\/p><\/li><li><p><b>Tại sao các đáp án còn lại chưa tối ưu:<\/b><\/p><ul><li><p><b>Option A (Chỉ ghi chú hạn chế vào báo cáo):<\/b> Đây chỉ là giải pháp thụ động nhằm chấp nhận sự thiếu sót, không làm tăng tính đầy đủ của kết quả nghiên cứu.<\/p><\/li><li><p><b>Option B (Tăng độ rộng tìm kiếm ban đầu):<\/b> Việc mở rộng truy vấn ngay từ đầu vừa gây lãng phí tài nguyên (token, thời gian API), vừa tạo ra nhiều thông tin nhiễu mà không đảm bảo sẽ bao phủ đúng các khía cạnh chuyên sâu bị thiếu.<\/p><\/li><li><p><b>Option D (Cấp quyền tìm kiếm trực tiếp cho synthesis agent):<\/b> Việc này vi phạm nguyên tắc phân tách nhiệm vụ (Separation of Concerns) và làm tăng độ phức tạp công cụ cho synthesis agent (dễ dẫn đến hành vi chọn sai công cụ như ở câu hỏi trước). Quản lý luồng công việc nên thuộc về trách nhiệm của bộ điều phối.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-170",
    "set": 3,
    "number": 170,
    "type": "single",
    "question": "<p>After integrating a local MCP server providing code analysis tools (analyze_dependencies, find_dead_code, calculate_complexity), you verify the server is healthy and tools appear in the tools/list response. However, you observe that the agent consistently uses Grep to search for import statements instead of calling analyze_dependencies—even when users explicitly ask about \"code dependencies.\" Examining tool definitions reveals: - MCP: analyze_dependencies — \"Analyzes dependency graph\" - Built-in: Grep — \"Search file contents for a pattern using regular expressions. Returns matching lines with line numbers and surrounding context.\" What's the most effective approach to improve the agent's selection of MCP tools?<\/p>",
    "options": {
      "A": "<p>Remove Grep from available tools when the MCP server is connected to eliminate functional overlap.<\/p>",
      "B": "<p>Split analyze_dependencies into granular tools (list_imports, resolve_transitive_deps, detect_circular_deps) so each has a focused purpose less likely to overlap with Grep.<\/p>",
      "C": "<p>Add routing instructions to the system prompt specifying that dependency-related questions should use MCP tools rather than Grep.<\/p>",
      "D": "<p>Expand MCP tool descriptions to detail capabilities and outputs—e.g., \"Builds dependency graph showing direct imports, transitive dependencies, and cycles.\"<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn D:<\/b><\/p><ul><li><p>Nguyên nhân khiến LLM chọn <code>Grep<\/code> thay vì <code>analyze_dependencies<\/code> là do <b>mô tả công cụ (tool description) quá ngắn gọn và mơ hồ<\/b> (\"Analyzes dependency graph\"), trong khi <code>Grep<\/code> lại có mô tả rất chi tiết về chức năng và kết quả trả về.<\/p><\/li><li><p>Trong kiến trúc Tool Use / MCP, <b>mô tả công cụ là yếu tố quan trọng nhất<\/b> để LLM quyết định khi nào nên gọi công cụ đó. Mở rộng mô tả của <code>analyze_dependencies<\/code> để giải thích chi tiết khả năng, dữ liệu đầu vào và kết quả đầu ra (chẳng hạn như phân tích import trực tiếp, phụ thuộc bắc cầu, chu kỳ) sẽ giúp LLM hiểu rõ sức mạnh vượt trội của nó so với việc chỉ tìm kiếm chuỗi văn bản bằng <code>Grep<\/code>.<\/p><\/li><\/ul><\/li><\/ul><hr/><h3><b>Tại sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A sai:<\/b> Xóa <code>Grep<\/code> sẽ làm mất đi một công cụ tìm kiếm văn bản tổng quát rất quan trọng cho các tác vụ khác.<\/p><\/li><li><p><b>B sai:<\/b> Chia nhỏ công cụ làm tăng số lượng tool, gây phức tạp ngữ cảnh và không giải quyết được vấn đề mô tả thiếu thông tin.<\/p><\/li><li><p><b>C sai:<\/b> Thêm quy tắc định tuyến vào System Prompt là cách giải pháp tình thế (patchwork), tốn context window và không tuân thủ nguyên tắc thiết kế công cụ tự mô tả (self-describing tools) chuẩn của MCP.<\/p><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-171",
    "set": 3,
    "number": 171,
    "type": "single",
    "question": "<p>The web search agent has gathered several relevant sources for a research topic. The document analysis agent now needs to examine these sources.<\/p><p>How does information typically flow between these two specialized subagents?<\/p>",
    "options": {
      "A": "<p>Both agents access a shared memory store where the web search agent writes findings and the document analysis agent reads them.<\/p>",
      "B": "<p>The web search agent directly invokes the document analysis agent, passing the discovered sources as parameters.<\/p>",
      "C": "<p>The coordinator agent receives the web search agent's output and includes relevant findings in the prompt when invoking the document analysis agent.<\/p>",
      "D": "<p>The agents communicate through an event-driven message queue, with the document analysis agent subscribing to web search completion events.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Đáp án đúng: <b>[C]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn C:<\/b> Trong kiến trúc hệ thống đa agent tiêu chuẩn (đặc biệt là theo các mẫu thiết kế của Anthropic Claude / Multi-agent Orchestration), các subagent thường <b>không giao tiếp trực tiếp với nhau<\/b>. Thay vào đó, <b>Coordinator Agent<\/b> (hoặc Orchestrator) đóng vai trò trung tâm: nhận kết quả đầu ra từ subagent thứ nhất (web search agent), xử lý/tổng hợp dữ liệu đó, rồi truyền tải các phát hiện có liên quan vào prompt khi gọi subagent tiếp theo (document analysis agent).<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A &amp; D:<\/b> Việc sử dụng kho nhớ chia sẻ (shared memory store) hay hàng đợi tin nhắn hướng sự kiện (event-driven message queue) phức tạp thường không phải là mô hình luồng thông tin tiêu chuẩn của các hệ thống agent dựa trên LLM thông thường, nơi việc kiểm soát ngữ cảnh nằm ở vòng lặp của Coordinator.<\/p><\/li><li><p><b>B:<\/b> Các subagent độc lập không gọi trực tiếp lẫn nhau qua các tham số hàm mà thông qua bộ điều phối trung tâm.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-172",
    "set": 3,
    "number": 172,
    "type": "single",
    "question": "<p>Your post_content tool requires user confirmation before publishing. The current workflow displays “Ready to post to social media. Confirm?” and analytics show users approve 98% of requests within 2 seconds. Post-mortems reveal incidents where posts went to wrong accounts, were scheduled for wrong times, or contained errors – all confirmed by users without catching the mistakes. How should you redesign the confirmation workflow?<\/p>",
    "options": {
      "A": "<p>Auto-approve routine posts and only require explicit confirmation for unusual patterns like posting to new accounts or large audiences<\/p>",
      "B": "<p>Require users to type a confirmation phrase instead of clicking a button<\/p>",
      "C": "<p>Add a mandatory waiting period before the confirm option becomes available<\/p>",
      "D": "<p>Include the complete post text, target account, scheduled time, and platform in the confirmation request<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h3>Vì sao D đúng?<\/h3><p>Vấn đề cốt lõi không phải là <strong>người dùng có xác nhận hay không<\/strong>, mà là <strong>người dùng xác nhận khi chưa có đủ thông tin để phát hiện lỗi<\/strong>.<\/p><p>Workflow hiện tại:<\/p><blockquote><p>“Ready to post to social media. Confirm?”<\/p><\/blockquote><p>quá mơ hồ. Người dùng có thể bấm <strong>Confirm<\/strong> theo thói quen mà không kiểm tra:<\/p><ul><li>Nội dung có sai không?<\/li><li>Đăng vào <strong>account nào<\/strong>?<\/li><li>Đăng lên <strong>platform nào<\/strong>?<\/li><li>Đăng <strong>ngay hay lúc nào<\/strong>?<\/li><\/ul><p>Thực tế post-mortem cho thấy chính những lỗi này vẫn xảy ra dù confirmation rate lên tới <strong>98%<\/strong>.<\/p><p>D nên biến confirmation thành một <strong>informed confirmation<\/strong>:<\/p><blockquote><p><strong>Review before posting<\/strong><br/><strong>Content:<\/strong> “...”<br/><strong>Platform:<\/strong> LinkedIn<br/><strong>Account:<\/strong> Company Official<br/><strong>Scheduled time:<\/strong> Aug 16, 2026 – 10:00 AM JST<\/p><p>[Cancel] [Confirm Post]<\/p><\/blockquote><p>Như vậy, confirmation trở thành một <strong>safety checkpoint<\/strong>, thay vì chỉ là một nút “OK”.<\/p><h3>Vì sao các đáp án khác không tốt?<\/h3><p><strong>A. Auto-approve routine posts ❌<\/strong><\/p><p>Ngược lại với bài học từ incident. Những lỗi nguy hiểm có thể xảy ra ngay cả với các post tưởng như “routine”. Auto-approve còn <strong>loại bỏ lớp kiểm soát cuối cùng<\/strong>.<\/p><p><strong>B. Bắt nhập confirmation phrase ❌<\/strong><\/p><p>Điều này làm tăng <strong>friction<\/strong>, nhưng không làm tăng <strong>information<\/strong>.<\/p><p>Người dùng vẫn có thể copy/paste hoặc gõ “CONFIRM” mà không đọc nội dung. Vấn đề là <strong>confirmation quality<\/strong>, không phải confirmation mechanism.<\/p><p><strong>C. Mandatory waiting period ❌<\/strong><\/p><p>Chờ 5–10 giây không đảm bảo người dùng phát hiện:<\/p><ul><li>sai account<\/li><li>sai platform<\/li><li>sai thời gian<\/li><li>sai nội dung<\/li><\/ul><p>Nó chỉ làm workflow chậm hơn.<\/p>"
  },
  {
    "id": "CCAR-F-173",
    "set": 3,
    "number": 173,
    "type": "single",
    "question": "<p>After 30+ turns, your conversational assistant shows noticeably slower responses and occasionally produces less coherent outputs. Investigation reveals: (1) average conversations reach 50,000 tokens by turn 35, (2) production logs show 94% of user messages only reference the previous 3-5 exchanges, (3) the 6% of queries referencing earlier context typically ask about information the user could easily re-state. Your goal is to improve response speed and quality while maintaining good user experience. What’s the most effective approach?<\/p>",
    "options": {
      "A": "<p>Enable prompt caching and continue sending the complete conversation history, using cached prefixes to reduce per-request costs while preserving all context.<\/p>",
      "B": "<p>Build a retrieval system that stores all conversation turns and uses semantic search to pull in relevant historical context only when the current query appears to reference past information.<\/p>",
      "C": "<p>Implement a summarization layer that progressively compresses older conversation turns into a running summary while keeping the most recent 5-6 turns verbatim, maintaining full historical context in condensed form.<\/p>",
      "D": "<p>Implement a sliding window keeping only the system prompt and last 8-10 turns. When users reference earlier context, acknowledge the limitation and ask them to re-state the relevant information.<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h3><b>Vì sao D là lựa chọn hiệu quả nhất?<\/b><\/h3><ul><li><p><b>Giải quyết trực tiếp nguyên nhân gốc rễ (Root Cause):<\/b><\/p><ul><li><p>Dữ liệu phân tích chỉ ra 2 thực tế quan trọng:<\/p><ol start=\"1\"><li><p><b>94% tin nhắn<\/b> chỉ tham chiếu đến 3–5 lượt hội thoại gần nhất.<\/p><\/li><li><p><b>6% còn lại<\/b> truy vấn ngữ cảnh cũ đều chứa thông tin mà người dùng có thể <b>dễ dàng nhắc lại<\/b>.<\/p><\/li><\/ol><\/li><li><p>Bằng cách áp dụng <b>Sliding Window<\/b> giữ lại System Prompt và 8–10 lượt hội thoại gần nhất, bạn giảm ngay kích thước context window từ <b>50,000 tokens xuống chỉ còn 2,000–3,000 tokens<\/b>. Điều này ngay lập tức tăng tốc độ xử lý (giảm latency) và nâng cao độ mạch lạc (coherence) của mô hình nhờ loại bỏ bớt nhiễu (attention noise) từ các tin nhắn quá cũ.<\/p><\/li><\/ul><\/li><li><p><b>Đảm bảo trải nghiệm người dùng (UX) tối ưu trên chi phí:<\/b><\/p><ul><li><p>Việc yêu cầu người dùng nhắc lại thông tin trong 6% trường hợp hiếm hoi là một sự đánh đổi cực kỳ hợp lý (Trade-off) để mang lại phản hồi nhanh và chính xác cho 94% các tương tác còn lại.<\/p><\/li><\/ul><\/li><\/ul><h3><b>Vì sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A. Bật Prompt Caching và tiếp tục gửi toàn bộ Context 50,000 tokens ❌<\/b><\/p><ul><li><p>Prompt Caching giúp giảm chi phí tài chính (cost), nhưng <b>không giải quyết triệt để độ trễ generation<\/b> và đặc biệt là <b>sự suy giảm độ mạch lạc (Less Coherent Outputs)<\/b> do mô hình bị quá tải ngữ cảnh (Context Rot/Attention Degradation) khi xử lý 50,000 tokens.<\/p><\/li><\/ul><\/li><li><p><b>B. Xây dựng hệ thống RAG/Retrieval cho lịch sử trò chuyện ❌<\/b><\/p><ul><li><p>Phức tạp hóa hệ thống quá mức không cần thiết (Over-engineering). Dữ liệu chỉ ra 94% truy vấn chỉ cần 3–5 lượt gần nhất. Việc tốn chi phí embedding, lưu trữ vector database, và tìm kiếm semantic chỉ phục vụ cho 6% nhu cầu không đáng kể.<\/p><\/li><\/ul><\/li><li><p><b>C. Tóm tắt lũy tiến (Progressive Summarization) ❌<\/b><\/p><ul><li><p>Việc tóm tắt sau mỗi lượt hội thoại làm tăng đáng kể <b>độ trễ (Latency) cho từng request<\/b> và tiêu tốn chi phí token liên tục cho việc gọi LLM tóm tắt, trong khi thông tin tóm tắt này chỉ thực sự được dùng tới trong vỏn vẹn 6% trường hợp.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-174",
    "set": 3,
    "number": 174,
    "type": "single",
    "question": "<p>Compliance requires that refunds exceeding $500 must automatically escalate to a human agent–this rule cannot be left to model discretion. Despite clear system prompt instructions, production logs show the agent occasionally processes high-value refunds directly (3% failure rate).<\/p><p>How should you achieve guaranteed compliance?<\/p>",
    "options": {
      "A": "<p>Strengthen the system prompt with emphatic language: \"CRITICAL POLICY: Refunds over $500 MUST trigger human escalation. NEVER process these directly.\"<\/p>",
      "B": "<p>Add few-shot examples to the prompt showing correct escalation behavior at various refund amounts ($400, $500, $600).<\/p>",
      "C": "<p>Implement a hook to intercept tool calls; when the refund process amount exceeds $500, block it and invoke human escalation.<\/p>",
      "D": "<p>Modify the refund tool to return an error with message \"Amount exceeds policy limit–please escalate\" when threshold is exceeded.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Đáp án đúng: <b>[C]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn C:<\/b> Khi yêu cầu tuân thủ chính sách là bắt buộc tuyệt đối (\"cannot be left to model discretion\") và các giải pháp dựa trên ngôn ngữ trong prompt (như viết hoa, dùng từ nhấn mạnh hoặc thêm few-shot examples) vẫn có tỷ lệ thất bại 3%, cách duy nhất để <b>đảm bảo tuân thủ tuyệt đối (guaranteed compliance)<\/b> là sử dụng <b>cơ chế lập trình xác định<\/b> (programmatic enforcement). Việc cài đặt một hook để chặn các lệnh gọi công cụ (intercept tool calls) khi giá trị hoàn tiền vượt quá $500 sẽ loại bỏ hoàn toàn khả năng sai sót do mô hình LLM quyết định.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A &amp; B:<\/b> Các phương pháp tối ưu hóa system prompt (dù dùng từ mạnh hay thêm few-shot examples) vẫn chỉ mang tính chất định hướng ngôn ngữ (probabilistic), không thể đảm bảo sự tuân thủ tuyệt đối 100% đối với các quy tắc tuân thủ pháp lý/chính sách cứng.<\/p><\/li><li><p><b>D:<\/b> Việc sửa đổi công cụ để trả về lỗi thông báo vẫn phụ thuộc vào việc mô hình phải đọc, hiểu thông báo lỗi đó và tự quyết định chuyển giao đúng cách, do đó vẫn có rủi ro mô hình cố gắng lách luật hoặc xử lý sai trong một số trường hợp.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-175",
    "set": 3,
    "number": 175,
    "type": "single",
    "question": "<p>The document analysis agent has a single analyze_documnet tool that takes a document and a free-text instruction parameter. During evaluation, requests like “extract the key financial metrics” often return narrative summaries, while “summarize the methodology” sometimes returns raw data tables. The synthesis agent reports that 35% of analysis results require re-requests with clarified instructions. What’s the most effective way to improve reliability?<\/p>",
    "options": {
      "A": "<p>Have the coordinator pre-classify each analysis request before passing instructions to the document analysis agent<\/p>",
      "B": "<p>Keep the single tool but add an analyze_type enum parameter requiring explicit selection between extraction, summarization, and verification modes<\/p>",
      "C": "<p>Enhance the tool description with detailed examples showing how different instruction phrasings should map to different output formats<\/p>",
      "D": "<p>Split the generic tool into purpose-specific tools – extract_data_points, summarize_content, verify_claim_against_source – each with defined input/output contracts<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h3><b>Vì sao D là giải pháp hiệu quả nhất?<\/b><\/h3><ul><li><p><b>Ràng buộc đầu ra (Deterministic Input/Output Contracts):<\/b><\/p><ul><li><p>Việc dùng một công cụ đa năng chung chung với tham số hướng dẫn tự do (free-text instruction) làm tăng tính mơ hồ cho LLM, dẫn đến tình trạng trả về sai định dạng (ví dụ: yêu cầu trích xuất số liệu lại trả về tóm tắt văn bản).<\/p><\/li><li><p>Khi chia nhỏ thành các công cụ chuyên biệt, mỗi công cụ có một Schema/Contract rõ ràng về cấu trúc dữ liệu trả về (JSON schema cho trích xuất, văn bản cho tóm tắt, cờ boolean/bằng chứng cho kiểm chứng). Điều này giúp LLM chọn chính xác công cụ cần dùng và đảm bảo kết quả đầu ra luôn nhất quán, loại bỏ 35% tỷ lệ phải yêu cầu lại.<\/p><\/li><\/ul><\/li><li><p><b>Tối ưu hóa khả năng chọn Tool của Agent (Tool Selection):<\/b><\/p><ul><li><p>Tên công cụ và mô tả chức năng rõ ràng (<code>extract_data_points<\/code>, <code>summarize_content<\/code>) giúp Agent định hướng nhiệm vụ tốt hơn nhiều so với việc cố giải nghĩa một tham số văn bản tự do.<\/p><\/li><\/ul><\/li><\/ul><h3><b>Vì sao các đáp án khác không phù hợp?<\/b><\/h3><ul><li><p><b>A. Phân loại trước yêu cầu ở cấp Coordinator ❌<\/b><\/p><ul><li><p>Thêm một lớp phân loại phía trước làm tăng thêm độ trễ và độ phức tạp cho kiến trúc hệ thống, nhưng công cụ bên dưới vẫn là một tool duy nhất có tham số tự do, do đó không giải quyết triệt me vấn đề mơ hồ về định dạng đầu ra.<\/p><\/li><\/ul><\/li><li><p><b>B. Thêm tham số Enum (<code>analyze_type<\/code>) vào tool duy nhất ❌<\/b><\/p><ul><li><p>Mặc dù Enum giúp giới hạn chế độ phân tích, nhưng vì cấu trúc đầu ra (Output Schema) của một tool duy nhất vẫn phải bao phủ cho cả 3 chế độ khác nhau, LLM vẫn có thể gặp khó khăn trong việc trả về đúng định dạng dữ liệu mong muốn cho từng chế độ cụ thể.<\/p><\/li><\/ul><\/li><li><p><b>C. Cải thiện mô tả tool bằng ví dụ chi tiết (Few-shot prompting) ❌<\/b><\/p><ul><li><p>Việc thêm ví dụ vào mô tả tool chỉ mang tính chất định hướng mềm (soft constraint). LLM vẫn có thể vi phạm hướng dẫn khi gặp các câu lệnh thực tế phức tạp hoặc khác biệt so với ví dụ.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-176",
    "set": 3,
    "number": 176,
    "type": "single",
    "question": "<p>Production monitoring shows that follow-up queries like \"summarize what we learned about market trends\" consistently take 40+ seconds. Investigation reveals the coordinator spawns the synthesis subagent for each summarization request, passing 80K+ tokens of accumulated findings. The coordinator already has these findings in its context from orchestrating the research.<\/p><p>What's the most effective way to improve response time for these follow-up summaries?<\/p>",
    "options": {
      "A": "<p>Enable prompt caching on the synthesis subagent to reduce the overhead of repeatedly transferring the same research findings.<\/p>",
      "B": "<p>Pre-generate and cache summaries at multiple granularities whenever new findings accumulate.<\/p>",
      "C": "<p>Have the coordinator handle straightforward summarization requests directly using its existing context, reserving subagent spawning for complex analysis.<\/p>",
      "D": "<p>Spawn the synthesis subagent with reduced context and have it request specific findings from the coordinator on-demand.<\/p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<p>Đáp án đúng: <b>[C]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn C:<\/b> Đề bài chỉ ra rằng <b>coordinator đã có sẵn toàn bộ kết quả nghiên cứu (80K+ tokens) trong ngữ cảnh của mình<\/b> từ quá trình điều phối, và các yêu cầu tóm tắt tiếp theo (như <i>\"summarize what we learned about market trends\"<\/i>) chỉ là những truy vấn đơn giản dựa trên thông tin đã có sẵn. Do đó, cách giải quyết hiệu quả nhất về mặt hiệu suất và độ trễ là <b>để coordinator tự xử lý trực tiếp các yêu cầu tóm tắt này<\/b> bằng context hiện có của nó thay vì lãng phí thời gian và tài nguyên để khởi tạo (spawn) một subagent mới chỉ để tóm tắt lại dữ liệu mà bản thân coordinator đã nắm rõ.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Dù prompt caching có thể giúp giảm một phần chi phí hoặc thời gian nạp lại token, việc liên tục tạo subagent mới cho những tác vụ tóm tắt đơn giản mà coordinator hoàn toàn có thể tự làm vẫn gây ra chi phí gọi hàm, độ trễ cấu trúc và quản lý agent không cần thiết.<\/p><\/li><li><p><b>B:<\/b> Việc tiền tạo và lưu cache các bản tóm tắt ở nhiều mức độ chi tiết làm tăng thêm độ phức tạp trong việc quản lý trạng thái khi dữ liệu nghiên cứu liên tục thay đổi động.<\/p><\/li><li><p><b>D:<\/b> Việc bắt subagent khởi tạo với ít ngữ cảnh rồi liên tục gọi ngược lại coordinator để xin thêm thông tin (on-demand) sẽ làm tăng số lượng vòng lặp (round-trips) và càng làm tăng thêm tổng độ trễ.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-177",
    "set": 3,
    "number": 177,
    "type": "single",
    "question": "<p>Your document extraction tool uses ML models to extract invoice fields (vendor, amount, date). The models return confidence scores (0.0-1.0) for each extracted field. In production, you observe: (1) the agent proceeds with low-confidence extractions that are incorrect 23% of the time, and (2) the agent requests unnecessary human review for 31% of extractions that were actually correct.<\/p><p>How should you restructure the tool's output?<\/p>",
    "options": {
      "A": "<p>Return fields with confidence scores, plus a requires_review boolean computed using your tested confidence thresholds, along with a review_reasons array explaining which fields triggered review.<\/p>",
      "B": "<p>Return fields with their raw confidence scores and add detailed few-shot examples to your system prompt demonstrating how to interpret different confidence ranges and when to request human review.<\/p>",
      "C": "<p>Compute an aggregate extraction quality score across all fields and return it alongside the extracted values. Include a text summary describing the overall extraction reliability.<\/p>",
      "D": "<p>Return fields organized into verified and needs_verification objects based on confidence thresholds.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<ul><li><p><b>Tại sao chọn A:<\/b> Vấn đề chính hiện tại là mô hình AI không đánh giá chính xác các con số độ tin cậy (confidence scores) dạng thô từ ML model, dẫn đến việc bỏ sót lỗi hoặc đánh giá nhầm cần review. Cách tối ưu nhất là thực hiện bước tiền xử lý bên trong tool (hoặc hệ thống backend của tool): áp dụng ngưỡng (thresholds) đã được kiểm thử để tính toán sẵn cờ quyết định (<code>requires_review<\/code> boolean) kết hợp mảng giải thích nguyên nhân (<code>review_reasons<\/code>). Điều này giúp giải phóng mô hình khỏi việc phải tự suy luận toán học/ngưỡng phức tạp từ điểm số thô, từ đó giảm thiểu đáng kể sai sót.<\/p><\/li><li><p><b>Tại sao các đáp án khác không phù hợp:<\/b><\/p><ul><li><p><b>B:<\/b> Dùng few-shot examples trong system prompt vẫn bắt mô hình phải tự xử lý số liệu thô và suy diễn thủ công, không loại bỏ được hoàn toàn sự thiếu nhất quán của LLM khi đánh giá xác suất.<\/p><\/li><li><p><b>C:<\/b> Tính điểm chất lượng tổng hợp (aggregate score) sẽ làm mất đi thông tin chi tiết của từng trường riêng lẻ, khiến agent không thể xác định cụ thể trường nào (vendor, amount hay date) bị lỗi để yêu cầu review chính xác.<\/p><\/li><li><p><b>D:<\/b> Việc chia cứng thành hai object (verified và needs_verification) làm mất đi các điểm số độ tin cậy chi tiết (confidence scores) vốn rất cần thiết để agent hiểu rõ mức độ chắc chắn của từng trường riêng lẻ.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-178",
    "set": 3,
    "number": 178,
    "type": "single",
    "question": "<p>A customer writes: \"I've been going back and forth on this return for days. I just want to speak to someone who can actually help me.\" The agent has confirmed via lookup_order that the return is straightforward–within policy and eligible for immediate processing.<\/p><p>What should the agent do?<\/p>",
    "options": {
      "A": "<p>Ask what specifically hasn't worked in previous attempts before deciding whether to escalate or resolve automatically<\/p>",
      "B": "<p>Process the refund via process_refund to resolve the underlying issue, then inform them it's complete<\/p>",
      "C": "<p>Call escalate_to_human immediately to honor the customer's request<\/p>",
      "D": "<p>Acknowledge frustration, inform them this is resolvable now, and offer to complete it or escalate<\/p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<p>Đáp án đúng: <b>[D]<\/b>.<\/p><h3>Giải thích chi tiết:<\/h3><ul><li><p><b>Lý do chọn D:<\/b> Khách hàng bày tỏ sự bức xúc (\"going back and forth on this return for days\") và yêu cầu nói chuyện với người thật, tuy nhiên hệ thống/agent đã xác định rõ ràng đơn hàng hoàn toàn hợp lệ và có thể xử lý ngay lập tức. Theo nguyên tắc thiết kế trải nghiệm người dùng tối ưu cho agent, <b>agent không nên lập tức ép buộc leo thang (bỏ qua khả năng tự động hóa khi vấn đề đã sẵn sàng giải quyết)<\/b>, nhưng cũng <b>không được phớt lờ cảm xúc của khách hàng bằng cách tự ý xử lý ngầm<\/b> (đáp án B). Phương án cân bằng tốt nhất là thừa nhận sự thất vọng của họ, thông báo rằng vấn đề đã có thể giải quyết ngay lập tức, và tôn trọng quyền lựa chọn của khách hàng giữa việc để AI hoàn tất thủ công hoặc chuyển giao cho con người.<\/p><\/li><li><p><b>Các đáp án khác không chính xác:<\/b><\/p><ul><li><p><b>A:<\/b> Việc tiếp tục gặng hỏi vòng vo nguyên nhân từ các lần thử trước làm khách hàng thêm mệt mỏi.<\/p><\/li><li><p><b>B:<\/b> Tự ý tự động xử lý mà không tôn trọng mong muốn tương tác hoặc thông báo rõ ràng cho khách hàng có thể khiến họ cảm thấy không được lắng nghe.<\/p><\/li><li><p><b>C:<\/b> Lập tức leo thang ngay khi vấn đề hoàn toàn nằm trong tầm tay tự động xử lý của agent sẽ làm lãng phí năng lực hệ thống, trong khi khách hàng thực chất chỉ cần kết quả được giải quyết nhanh chóng.<\/p><\/li><\/ul><\/li><\/ul>"
  },
  {
    "id": "CCAR-F-179",
    "set": 3,
    "number": 179,
    "type": "single",
    "question": "<p>Your conversational assistant frequently generates multiple clarifying questions when users make ambiguous requests.<\/p><p> When a user asks \"Can you help me with the report?\", the assistant responds: \"I'd be happy to help! Could you tell me: <\/p><ol><li>1) Which report? <\/li><li>2) What kind of help—drafting, reviewing, or formatting? <\/li><li>3) What's your deadline?\"<\/li><\/ol><p>User analytics show a 40% conversation abandonment rate after these multi-question responses.<\/p><p>What's the most effective way to reduce friction while appropriately handling ambiguity?<\/p>",
    "options": {
      "A": "<p>Modify the system prompt to instruct the assistant to make reasonable assumptions from available context, state those assumptions explicitly, and offer to adjust if the interpretation is wrong.<\/p>",
      "B": "<p>Add a preprocessing step using a smaller model to classify request ambiguity on a 1-5 scale, routing high-ambiguity requests to a clarification dialog and low-ambiguity requests directly to the assistant.<\/p>",
      "C": "<p>Limit the assistant to one clarifying question per turn, using conversation history to accumulate answers over multiple exchanges rather than requesting everything upfront.<\/p>",
      "D": "<p>Create a lookup table of common request patterns with predefined default interpretations, having the assistant respond with those defaults without stating the assumptions made.<\/p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<p>Đây là nguyên tắc rất quan trọng trong thiết kế Claude:<\/p><blockquote><p><strong>Đừng hỏi quá nhiều nếu có thể đưa ra một giả định hợp lý. Hãy nói rõ giả định đó và sẵn sàng điều chỉnh nếu sai.<\/strong><\/p><\/blockquote><p>Trong ví dụ:<\/p><blockquote><p>\"Can you help me with the report?\"<\/p><\/blockquote><p>Assistant hoàn toàn có thể tận dụng ngữ cảnh trước đó.<\/p><p>Ví dụ:<\/p><blockquote><p>\"Mình sẽ giả sử bạn đang nói về báo cáo doanh số quý này. Mình sẽ bắt đầu xem cấu trúc báo cáo. Nếu bạn đang nói đến báo cáo khác hoặc muốn mình soạn thảo thay vì rà soát thì cứ nói nhé.\"<\/p><\/blockquote><p>Điều này:<\/p><ul><li>giảm số lượt trao đổi,<\/li><li>giảm tỷ lệ người dùng bỏ cuộc,<\/li><li>vẫn minh bạch về giả định,<\/li><li>vẫn cho phép người dùng sửa nếu assistant hiểu sai.<\/li><\/ul><p>Đây chính là triết lý thiết kế mà Claude thường khuyến khích.<\/p><ul><li><p><b>Tại sao A đúng:<\/b> Trong thiết kế hội thoại của trợ lý AI (đặc biệt là theo các nguyên tắc chuẩn của hệ thống lớn như Claude), khi gặp các yêu cầu mơ hồ, việc đặt hàng loạt câu hỏi dồn dập (như hỏi liền 3 ý một lúc) sẽ tạo ra \"rào cản tâm lý\" (friction), dẫn đến tỷ lệ người dùng bỏ cuộc cao (40% conversation abandonment rate). Giải pháp tối ưu là hướng dẫn mô hình <b>đưa ra các giả định hợp lý dựa trên ngữ cảnh hiện có<\/b>, <b>nói rõ giả định đó<\/b> ngay trong câu trả lời và <b>bắt tay vào hỗ trợ ngay lập tức<\/b>, đồng thời mở ngỏ việc điều chỉnh nếu hiểu sai ý người dùng. Cách này giúp duy trì nhịp độ liền mạch và giảm thiểu tối đa sự phiền hà cho người dùng.<\/p><\/li><li><p><b>Tại sao các đáp án khác sai:<\/b><\/p><ul><li><p><b>B:<\/b> Việc thêm một bước tiền xử lý bằng mô hình nhỏ để phân loại độ mơ hồ làm tăng độ phức tạp kiến trúc và độ trễ không cần thiết cho hệ thống.<\/p><\/li><li><p><b>C:<\/b> Mặc dù việc chỉ hỏi một câu hỏi làm rõ tốt hơn hỏi nhiều câu, nhưng theo thống kê của bài toán, việc liên tục phải hỏi lại qua nhiều lượt vẫn gây mất thời gian và tăng tỷ lệ bỏ cuộc; chiến lược tốt hơn là chủ động đoán hợp lý và làm việc luôn thay vì bắt người dùng trả lời thêm.<\/p><\/li><li><p><b>D:<\/b> Việc dùng bảng tra cứu với các diễn giải mặc định cứng nhắc mà <b>không nói rõ giả định<\/b> sẽ khiến người dùng bối rối khi hệ thống làm sai lệch hoàn toàn ý định thực tế mà không cho thấy lý do vì sao.<\/p><\/li><\/ul><\/li><\/ul>"
  }
];
