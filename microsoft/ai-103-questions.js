const MICROSOFT_QUESTIONS = [
  {
    "id": "AI-103-001",
    "exam": "AI-103",
    "number": 1,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong></p><p><strong>Case Study</strong> </p><p><strong>Overview</strong> - Company Information Contoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-based solutions by using Microsoft Foundry. </p><p><strong>Existing Environment</strong> - <strong>Identity Environment</strong> Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities that enable agents to access organizational resources and services. Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions. The team collaborates with solution architects, DevOps engineers, and security engineers to design, implement, monitor, and secure AI applications. Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before solution deployments. </p><p>Generative Environment Contoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2. Project1 Project1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests. </p><p>Agent1 uses a base model deployment. A safety evaluation pipeline is NOT enabled. Tool invocation approval workflows are NOT enabled. Conversation memory constraints are NOT configured. </p><p>Agent1 interacts with customers by using digital support channels and answers general questions about Contoso products. </p><p>Project1 is deployed to an Azure region located in the European Union (EU). Agent1Dev Team will use Project1 to optimize and maintain Agent1. </p><p>Project2 Project2 contains a deployed video generation model. The marketing department at Contoso has access to Project2 and plans to use the model to develop a video creation solution. Development of the solution is incomplete. </p><p>Data Environment Contoso stores product-related information in Azure resources that support AI applications. The Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products. The product sheets include specifications, feature descriptions, and product support information that Agent1 can use to answer customer questions. The product sheets are stored in the PDF format. Problem Statements Agent1 has only general knowledge of the Contoso products. A recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT been processed yet. </p><p>Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when responding to customer questions. The finance department reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in vendor contracts. The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently. </p><p><strong>Requirements - Planned Changes</strong> Contoso plans to implement a solution for Project1 that analyzes vendor invoices by evaluating both visual layout and textual content so invoice details can be verified against vendor contract terms. Contoso will update the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses. Agent1 must retrieve and use detailed product information from product sheets stored in storage1. An indexing solution must enable Agent1 to answer customer questions. The video creation solution must be completed. </p><p><strong>Technical Requirements</strong> The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity. Product sheets must be processed by an indexing pipeline that enables semantic and vector search. Responses generated using product sheet information must be relevant, complete, and accurate. Agent1 must answer natural-language questions about product details. </p><p>The model version used by Agent1 must remain consistent to ensure stable responses. Data processed by the model must remain within the EU. Security and Compliance Requirements API keys must NOT be used to access Foundry-deployed models. Access to Azure resources must follow least privilege. </p><p>Developers must authenticate to Microsoft Foundry resources by using Microsoft Entra authentication. Access to Project1 must be assigned to Agent1Dev Team by using security group SC_Agent1_Dev and to Agent1Test Team by using security group SC_Agent1_Test. Agent1 must never reveal customer information, even if a document containing customer data is added erroneously to the product-sheet repository. Product sheets might contain images with embedded text, and Agent1 must be protected from malicious instructions hidden within images. </p><p><strong>Business Requirements</strong> Users interacting with Agent1 must have a personalized experience in future interactions, including retaining conversation context and recalling relevant information from previous interactions. Agent1 must answer questions only about products sold by Contoso. You need to configure the model deployment for Agent1 to meet the technical requirements. What should you configure? </p><p>To answer, select the appropriate options in the answer area. <em>Each correct selection is worth one point.</em></p><p><em><img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-1.webp\"/></em></p>",
    "options": {
      "A": "<p>Deployment type: Standard; Version update policy: Opt out of automatic model version upgrades</p>",
      "B": "<p>Deployment type: Standard; Version update policy: Upgrade once a new default version becomes available</p>",
      "C": "<p>Deployment type: Global Provisioned; Version update policy: Opt out of automatic model version upgrades</p>",
      "D": "<p>Deployment type: Global Standard; Version update policy: Once the current version expires</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Standard phù hợp với nhu cầu biến động mà không cần thông lượng đặt trước; tắt tự động nâng cấp phiên bản giúp giữ phiên bản mô hình ổn định.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Deployment type: Standard; Version update policy: Upgrade once a new default version becomes available:</strong> Phần <strong>Deployment type: Standard</strong> phù hợp với tải biến động, nhưng <strong>Upgrade once a new default version becomes available</strong> sẽ tự đổi model ngay khi có default mới. Đề yêu cầu phản hồi ổn định, nên policy này phá vỡ yêu cầu giữ nguyên phiên bản; phải chọn <strong>Opt out of automatic model version upgrades</strong>.</li><li><strong>C. Deployment type: Global Provisioned; Version update policy: Opt out of automatic model version upgrades:</strong> <strong>Opt out of automatic model version upgrades</strong> giữ phiên bản ổn định, nhưng <strong>Global Provisioned</strong> là capacity/throughput được đặt trước. Đề nêu rõ lưu lượng biến động <em>without requiring reserved throughput capacity</em>, vì vậy provisioned capacity là thừa và không đúng ràng buộc; chọn <strong>Standard</strong>.</li><li><strong>D. Deployment type: Global Standard; Version update policy: Once the current version expires:</strong> <strong>Global Standard</strong> không phải deployment <strong>Standard</strong> được yêu cầu cho phạm vi triển khai này; quan trọng hơn, <strong>Once the current version expires</strong> vẫn cho phép model bị thay khi version hết hạn. Nó không bảo đảm phản hồi luôn nhất quán, nên thiếu ràng buộc opt-out tự động nâng cấp.</li></ul>"
  },
  {
    "id": "AI-103-002",
    "exam": "AI-103",
    "number": 2,
    "missingImages": 0,
    "question": "<p><strong>Overview -\nCompany Information</strong> - Contoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-based solutions by using Microsoft Foundry.</p><p><strong>Existing Environment -\nIdentity Environment</strong> - Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities that enable agents to access organizational resources and services. Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions. The team collaborates with solution architects, DevOps engineers, and security engineers to design, implement. monitor, and secure AI applications. Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the solution deployments.</p><p><strong>Generative Environment</strong> - Contoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.</p><p><strong>Project1</strong> - Project1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests. Agent1 has the following configurations: Agent1 uses a base model deployment. A safety evaluation pipeline is NOT enabled. Tool invocation approval workflows are NOT enabled. Conversation memory constraints are NOT configured. Agent1 interacts with customers by using digital support channels and answers general questions about Contoso products. Project1 is deployed to an Azure region located in the European Union (EU). Agent1Dev Team will use Project1 to optimize and maintain Agent1.</p><p><strong>Project2</strong> - Project2 contains a deployed video generation model. The marketing department at Contoso has access to Project2 and plans to use the model to develop a video creation solution. Development of the solution is incomplete.</p><p><strong>Data Environment</strong> - Contoso stores product-related information in Azure resources that support AI applications. The Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products. The product sheets include specifications, feature descriptions, and product support information that Agent1 can use to answer customer questions. The product sheets are stored in the PDF format.</p><p><strong>Problem Statements</strong> - Contoso identifies the following issues:</p><ul><li>Agent1 has only general knowledge of the Contoso products.</li><li>A recent chat interaction with Agent1 was analyzed for sentiment. </li><li>The results of the analysis have NOT been processed yet.</li><li>Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when responding to customer questions.</li><li>The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in the vendor contracts. </li><li>The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently.</li></ul><p><strong>Requirements -\nPlanned Changes</strong> - Contoso plans to implement the following changes:</p><ul><li>Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout and the textual content of the invoices, so that the invoice details can be verified against the vendor contract terms.</li><li>Update the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses.</li><li>Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.</li><li>Implement an indexing solution for the product sheets that Agent1 can use to answer customer questions.</li><li>Complete the development of the video creation solution.</li></ul><p><strong>Technical Requirements</strong> - Contoso identifies the following technical requirements:</p><ul><li>The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity.</li><li>The product sheets must be processed by using an indexing pipeline that enables semantic and vector search, so that Agent1 can retrieve the relevant product information.</li><li>Responses generated by using the product sheet information must be relevant, complete, and accurate.</li><li>Agent1 must be able to use the product sheets to answer natural language questions about product details.</li><li>The model version used by Agent1 must remain consistent to ensure stable responses.</li><li>The data processed by the model must remain within the EU.</li><li>Security and Compliance Requirements Contoso identifies the following security and compliance requirements:<ul><li>API keys must NOT be used to access Foundry-deployed models.</li><li>Access to the Azure resources must follow the principle of least privilege.</li><li>The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra authentication.</li><li>Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group named SC_Agent1_Dev.</li><li>Access to Project1 must be assigned to the members of Agent1Test Team by using a security group named SC_Agent1_Test. Agent1 must never reveal customer information, even if a document that contains customer data is added erroneously to the product sheet repository in storage1.</li><li>The product sheets might contain images that include embedded text. </li><li>Agent1 must be protected from malicious instructions potentially hidden within the images.</li></ul></li></ul><p><strong>Business Requirements</strong> - Contoso identifies the following business requirements:</p><ul><li>Users that interact with Agent1 must have a personalized experience in future interactions, including the ability for Agent1 to retain conversation context and recall relevant information from previous interactions.</li><li>Agent1 must answer questions only about the products sold by Contoso.</li><li>You need to configure Agent1 to meet the security and compliance requirements.</li></ul><p>What should you use?</p>",
    "options": {
      "A": "<p>self-harm content filtering</p>",
      "B": "<p>prompt shields</p>",
      "C": "<p>Personally identifiable information (PII) Detection</p>",
      "D": "<p>violence content filtering</p>"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Prompt shields giảm thiểu chỉ dẫn độc hại ẩn trong hình ảnh hoặc tài liệu, còn PII Detection giúp ngăn thông tin khách hàng bị tiết lộ. Bộ lọc self-harm và violence chỉ xử lý các nhóm nội dung gây hại cụ thể nên không đáp ứng yêu cầu bảo mật và quyền riêng tư này.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. self-harm content filtering:</strong> <strong>self-harm content filtering</strong> chỉ phân loại/chặn nội dung tự gây hại. Nó không phát hiện prompt injection được giấu trong ảnh/tài liệu và cũng không phát hiện PII trong câu trả lời, nên không xử lý hai rủi ro mà đề nêu.</li><li><strong>D. violence content filtering:</strong> <strong>violence content filtering</strong> chỉ xử lý nội dung bạo lực. Nó không kiểm tra chỉ dẫn độc hại ẩn trong product sheet và không ngăn dữ liệu nhận dạng khách hàng bị lộ; cần Prompt shields và PII Detection thay vì bộ lọc này.</li></ul>"
  },
  {
    "id": "AI-103-003",
    "exam": "AI-103",
    "number": 3,
    "missingImages": 0,
    "question": "<p>You are planning a Microsoft Foundry project named Project1 that will contain multiple agents. Each agent will access the same Azure AI Search resource.\nYou need to recommend a solution to centrally manage the Azure AI Search credentials within Project1. The solution must be implemented across all the agents.\nWhat should you recommend?</p>",
    "options": {
      "A": "<p>Enable role-based access control (RBAC) for the Azure AI Search resource</p>",
      "B": "<p>Disable key-based access control on the Azure AI Search resource</p>",
      "C": "<p>Add a connection to the Azure AI Search resource</p>",
      "D": "<p>Create a managed private endpoint that connects to the Azure AI Search resource</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Thêm một connection cấp project để lưu trữ và quản lý tập trung thông tin xác thực của Azure AI Search. Các agent trong Project1 có thể dùng connection dùng chung thay vì cấu hình thông tin xác thực riêng cho từng agent.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Enable role-based access control (RBAC) for the Azure AI Search resource:</strong> “Enable role-based access control (RBAC) for the Azure AI Search resource” sai vì RBAC quyết định ai được quyền dùng resource, không tạo project connection dùng chung hoặc lưu credentials của connection; đây không phải capability mà đề cần. Thêm một connection cấp project để lưu trữ và quản lý tập trung thông tin xác thực của Azure AI Search.</li><li><strong>B. Disable key-based access control on the Azure AI Search resource:</strong> “Disable key-based access control on the Azure AI Search resource” sai vì Việc tắt key-based access chỉ đổi authentication policy, không tạo shared connection để agent sử dụng; đây không phải capability mà đề cần. Thêm một connection cấp project để lưu trữ và quản lý tập trung thông tin xác thực của Azure AI Search.</li><li><strong>D. Create a managed private endpoint that connects to the Azure AI Search resource:</strong> “Create a managed private endpoint that connects to the Azure AI Search resource” sai vì Private endpoint chỉ tạo đường mạng riêng, không cấu hình agent connection hoặc quản lý credentials tập trung; đây không phải capability mà đề cần. Thêm một connection cấp project để lưu trữ và quản lý tập trung thông tin xác thực của Azure AI Search.</li></ul>"
  },
  {
    "id": "AI-103-004",
    "exam": "AI-103",
    "number": 4,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong></p><p>Your company is piloting a customer support agent in a Microsoft Foundry project name Project1. Project1 is connected to an existing Application Insights resource, and the company’s support team reviews runs in the Traces tab. The Foundry Agent Service is configured to perform the following actions: </p><ul><li>Retrieve the Application Insights connection string by calling project_client.telemetry.get_application_insights_connection_string(). </li><li>Call configure_azure_monitor(connection_string=...) to enable telemetry. </li><li>A separate LangChain service is configured to use OpenTelemetry and has the following configurations: <ul><li>Uses AzureAIOpenTelemetryTracer(connection_string=..., enable_content_recording=False) </li><li>Passes the tracer by using config={“callbacks”:[azure_tracer]} </li><li>Company policy has the following requirements: <ul><li>Telemetry from LangChain and OpenTelemetry must be distinguishable within the same Application Insights resource. </li><li>Secrets and credentials must NOT be stored in prompts, tool arguments, or span attributes. </li></ul></li></ul></li></ul><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No. </p><p><strong>NOTE:</strong> Each correct selection is worth one point.</p><p><img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-4.webp\"/></p>",
    "options": {
      "A": "<p>Yes; Yes; No</p>",
      "B": "<p>No; Yes; No</p>",
      "C": "<p>No; No; Yes</p>",
      "D": "<p>Yes; No; Yes</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Mệnh đề 1 — Không: LangChain phải được instrument bằng tracer và truyền qua cấu hình callback; chỉ bật Azure Monitor không tự động trace các thao tác LangChain. Mệnh đề 2 — Có: OTEL_SERVICE_NAME nằm trong metadata của telemetry resource, vì vậy các giá trị khác nhau giúp Application Insights phân biệt các service trong cùng một resource. Mệnh đề 3 — Không: enable_content_recording=False tắt việc ghi nội dung prompt và tool, nhờ đó bí mật và dữ liệu nhạy cảm không bị lưu trong span.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Yes; Yes; No:</strong> “Yes; Yes; No” sai vì “Yes; Yes; No” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Có: OTEL_SERVICE_NAME nằm trong metadata của telemetry resource, vì vậy các giá trị khác nhau giúp Application Insights phân biệt các service trong cùng một resource.</li><li><strong>C. No; No; Yes:</strong> “No; No; Yes” sai vì “No; No; Yes” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Có: OTEL_SERVICE_NAME nằm trong metadata của telemetry resource, vì vậy các giá trị khác nhau giúp Application Insights phân biệt các service trong cùng một resource.</li><li><strong>D. Yes; No; Yes:</strong> “Yes; No; Yes” sai vì “Yes; No; Yes” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Có: OTEL_SERVICE_NAME nằm trong metadata của telemetry resource, vì vậy các giá trị khác nhau giúp Application Insights phân biệt các service trong cùng một resource.</li></ul>"
  },
  {
    "id": "AI-103-005",
    "exam": "AI-103",
    "number": 5,
    "missingImages": 0,
    "question": "<p><strong>DRAG DROP</strong></p><p>You have a Microsoft Foundry project that processes procurement documents submitted by suppliers. You need to implement two pipelines by using Azure Content Understanding in Foundry Tools. The solution must meet the following requirements: </p><ul><li>Include a pipeline named Pipeline1 that supports cost-effective, high-volume processing of standalone PDF invoices. </li><li>Include a pipeline named Pipeline2 that supports cross-document validation by using multi-step reasoning and reference data. </li></ul><p>How should you configure each pipeline? </p><p>To answer, drag the appropriate configurations to the correct pipelines. Each configuration may be used once, more than once, of not at all. You may need to drag the split bar between panes or scroll to view content. </p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.</em><em><img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-5.webp\"/></em></p>",
    "options": {
      "A": "<p>Pipeline1: Single-file task in standard mode; Pipeline2: Multi-file task in pro mode</p>",
      "B": "<p>Pipeline1: Multi-file task in standard mode; Pipeline2: Single-file task in pro mode</p>",
      "C": "<p>Pipeline1: Single-file task in pro mode; Pipeline2: Multi-file task in standard mode</p>",
      "D": "<p>Pipeline1: Multi-file task in pro mode; Pipeline2: Single-file task in standard mode</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Pipeline1 nên dùng single-file task ở standard mode vì hóa đơn là tài liệu độc lập và standard mode phù hợp cho xử lý số lượng lớn, tiết kiệm chi phí. Pipeline2 nên dùng multi-file task ở pro mode vì việc kiểm tra chéo nhiều tài liệu, dùng dữ liệu tham chiếu và suy luận nhiều bước cần năng lực cao hơn của pro mode trên nhiều file. Các phương án còn lại không khớp về số lượng tài liệu hoặc dùng chế độ xử lý không phù hợp.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Pipeline1: Multi-file task in standard mode; Pipeline2: Single-file task in pro mode:</strong> “Pipeline1: Multi-file task in standard mode; Pipeline2: Single-file task in pro mode” sai vì Nó chọn Pipeline1: “Multi-file task in standard mode” instead of “Single-file task in standard mode”; Pipeline2: “Single-file task in pro mode” instead of “Multi-file task in pro mode”; đây là điểm khác trực tiếp với đáp án. Pipeline1 nên dùng single-file task ở standard mode vì hóa đơn là tài liệu độc lập và standard mode phù hợp cho xử lý số lượng lớn, tiết kiệm chi phí.</li><li><strong>C. Pipeline1: Single-file task in pro mode; Pipeline2: Multi-file task in standard mode:</strong> “Pipeline1: Single-file task in pro mode; Pipeline2: Multi-file task in standard mode” sai vì Nó chọn Pipeline1: “Single-file task in pro mode” instead of “Single-file task in standard mode”; Pipeline2: “Multi-file task in standard mode” instead of “Multi-file task in pro mode”; đây là điểm khác trực tiếp với đáp án. Pipeline1 nên dùng single-file task ở standard mode vì hóa đơn là tài liệu độc lập và standard mode phù hợp cho xử lý số lượng lớn, tiết kiệm chi phí.</li><li><strong>D. Pipeline1: Multi-file task in pro mode; Pipeline2: Single-file task in standard mode:</strong> “Pipeline1: Multi-file task in pro mode; Pipeline2: Single-file task in standard mode” sai vì Nó chọn Pipeline1: “Multi-file task in pro mode” instead of “Single-file task in standard mode”; Pipeline2: “Single-file task in standard mode” instead of “Multi-file task in pro mode”; đây là điểm khác trực tiếp với đáp án. Pipeline1 nên dùng single-file task ở standard mode vì hóa đơn là tài liệu độc lập và standard mode phù hợp cho xử lý số lượng lớn, tiết kiệm chi phí.</li></ul>"
  },
  {
    "id": "AI-103-006",
    "exam": "AI-103",
    "number": 6,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> </p><p>You have a Python application named App1 that integrates with a Microsoft Foundry project named Project1. You need to ensure that App1 meets the following requirements: Authenticates by using a Microsoft Entra managed identity Sends prompts to a deployed model by using the Azure OpenAI Responses API How should you complete the Python code? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE</strong>: Each correct selection is worth one point.</p><p><img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-6.webp\"/></p>",
    "options": {
      "A": "<p>configuration 1: DefaultAzureCredential; configuration 2: create</p>",
      "B": "<p>configuration 1: AzureKeyCredential; configuration 2: create</p>",
      "C": "<p>configuration 1: ClientSecretCredential; configuration 2: retrieve</p>",
      "D": "<p>configuration 1: DefaultAzureCredential; configuration 2: compact</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. DefaultAzureCredential lấy token từ managed identity khi App1 chạy trên Azure, không cần lưu API key hoặc client secret. Responses API tạo một phản hồi mới từ model bằng openai_client.responses.create(...). B dùng API key thay vì managed identity. C dùng thông tin xác thực client secret và retrieve dùng để lấy một response đã tồn tại, không phải gửi prompt mới. D có kiểu credential đúng, nhưng compact không phải thao tác để tạo response từ prompt.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. configuration 1: AzureKeyCredential; configuration 2: create:</strong> “configuration 1: AzureKeyCredential; configuration 2: create” sai vì Nó chọn configuration 1: “AzureKeyCredential” instead of “DefaultAzureCredential”; đây là điểm khác trực tiếp với đáp án. DefaultAzureCredential lấy token từ managed identity khi App1 chạy trên Azure, không cần lưu API key hoặc client secret.</li><li><strong>C. configuration 1: ClientSecretCredential; configuration 2: retrieve:</strong> “configuration 1: ClientSecretCredential; configuration 2: retrieve” sai vì Nó chọn configuration 1: “ClientSecretCredential” instead of “DefaultAzureCredential”; configuration 2: “retrieve” instead of “create”; đây là điểm khác trực tiếp với đáp án. DefaultAzureCredential lấy token từ managed identity khi App1 chạy trên Azure, không cần lưu API key hoặc client secret.</li><li><strong>D. configuration 1: DefaultAzureCredential; configuration 2: compact:</strong> “configuration 1: DefaultAzureCredential; configuration 2: compact” sai vì Nó chọn configuration 2: “compact” instead of “create”; đây là điểm khác trực tiếp với đáp án. DefaultAzureCredential lấy token từ managed identity khi App1 chạy trên Azure, không cần lưu API key hoặc client secret.</li></ul>"
  },
  {
    "id": "AI-103-007",
    "exam": "AI-103",
    "number": 7,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong></p><p>You have a Microsoft Foundry project that contains a workflow for a customer support triage process.\nYou have an Ask a question node that stores user responses in a local variable named Var01.\nYou need to create the following Power Fx expressions:\nAn if/else condition expression that ensures that Var01 contains a value\nA Send message expression that returns the stored user response in uppercase\nHow should you configure the expressions? </p><p>To answer, select the appropriate options in the answer area.</p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em><em><img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-7.webp\"/></em></p>",
    "options": {
      "A": "<p>If/else: Not(IsBlank(Local.Var01)); Send message: {Upper(Local.Var01)}</p>",
      "B": "<p>If/else: IsBlank(Local.Var01); Send message: {Upper(Local.Var01)}</p>",
      "C": "<p>If/else: IsEmpty(Local.Var01); Send message: {Local.Var01}</p>",
      "D": "<p>If/else: Not(IsBlank(Local.Var01)); Send message: {Upper(Var01)}</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. IsBlank(Local.Var01) kiểm tra local variable có trống hay không, nên Not(IsBlank(Local.Var01)) chỉ đúng khi Var01 có giá trị. Biểu thức gửi message phải tham chiếu local variable và áp dụng Upper, do đó {Upper(Local.Var01)} trả về phản hồi đã lưu dưới dạng chữ hoa. B đúng khi giá trị đang trống. C không chuyển phản hồi thành chữ hoa. D bỏ phạm vi Local cần thiết để tham chiếu local variable của workflow.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. If/else: IsBlank(Local.Var01); Send message: {Upper(Local.Var01)}:</strong> “If/else: IsBlank(Local.Var01); Send message: {Upper(Local.Var01)}” sai vì Nó chọn If/else: “IsBlank(Local.Var01)” instead of “Not(IsBlank(Local.Var01))”; đây là điểm khác trực tiếp với đáp án. Var01) kiểm tra local variable có trống hay không, nên Not(IsBlank(Local.</li><li><strong>C. If/else: IsEmpty(Local.Var01); Send message: {Local.Var01}:</strong> “If/else: IsEmpty(Local.Var01); Send message: {Local.Var01}” sai vì Nó chọn If/else: “IsEmpty(Local.Var01)” instead of “Not(IsBlank(Local.Var01))”; Send message: “{Local.Var01}” instead of “{Upper(Local.Var01)}”; đây là điểm khác trực tiếp với đáp án. Var01) kiểm tra local variable có trống hay không, nên Not(IsBlank(Local.</li><li><strong>D. If/else: Not(IsBlank(Local.Var01)); Send message: {Upper(Var01)}:</strong> “If/else: Not(IsBlank(Local.Var01)); Send message: {Upper(Var01)}” sai vì Nó chọn Send message: “{Upper(Var01)}” instead of “{Upper(Local.Var01)}”; đây là điểm khác trực tiếp với đáp án. Var01) kiểm tra local variable có trống hay không, nên Not(IsBlank(Local.</li></ul>"
  },
  {
    "id": "AI-103-008",
    "exam": "AI-103",
    "number": 8,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong></p><p>You have a Microsoft Foundry project that contains a customer support agent built by using the Foundry Agent Service. The agent uploads user-provided screenshots to Azure Storage through a ticketing tool and receives a blob URL for additional reasoning. You need to use image moderation during agent runs and prevent harmful content from being returned during runs. Azure AI Content Safety must access the images by using the blob URL. The solution must follow the principle of least privilege. What should you configure for Content Safety? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.</em><em><img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-8.webp\"/></em></p>",
    "options": {
      "A": "<p>Guardrails: Select User input, Output, Tool response, and Tool call and set Action to Block; Storage access: A system-assigned managed identity assigned the Storage Blob Data Reader role</p>",
      "B": "<p>Guardrails: Select User input and Output and set Action to Annotate; Storage access: Storage account access keys</p>",
      "C": "<p>Guardrails: Select User input and Tool response and set Action to Annotate; Storage access: A system-assigned managed identity assigned the Storage Blob Data Contributor role</p>",
      "D": "<p>Guardrails: Select Tool call and set Action to Block; Storage access: A user-assigned identity assigned the Storage Queue Data Contributor role</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Để kiểm duyệt nội dung độc hại liên quan đến hình ảnh trong toàn bộ agent run và ngăn nội dung đó được trả về, cấu hình tất cả nguồn liên quan (user input, output, tool response và tool call) với hành động Block. Content Safety chỉ cần đọc hình tại blob URL, nên system-assigned managed identity có vai trò Storage Blob Data Reader đáp ứng nguyên tắc đặc quyền tối thiểu. B dùng access key và chỉ Annotate nên vừa không dùng xác thực keyless vừa không chặn nội dung. C cấp quyền Contributor nhiều hơn nhu cầu đọc và Annotate không ngăn nội dung độc hại. D chỉ bao phủ tool call và vai trò Queue không thể đọc blob.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Guardrails: Select User input and Output and set Action to Annotate; Storage access: Storage account access keys:</strong> “Guardrails: Select User input and Output and set Action to Annotate; Storage access: Storage account access keys” sai vì Nó chọn Guardrails: “Select User input and Output and set Action to Annotate” instead of “Select User input, Output, Tool response, and Tool call and set Action to Block”; Storage access: “Storage account access keys” instead of “A system-assigned managed identity assigned the Storage Blob Data Reader role”; đây là điểm khác trực tiếp với đáp án. Để kiểm duyệt nội dung độc hại liên quan đến hình ảnh trong toàn bộ agent run và ngăn nội dung đó được trả về, cấu hình tất cả nguồn liên quan (user input, output, tool response…</li><li><strong>C. Guardrails: Select User input and Tool response and set Action to Annotate; Storage access: A system-assigned managed identity assigned the Storage Blob Data Contributor role:</strong> “Guardrails: Select User input and Tool response and set Action to Annotate; Storage access: A system-assigned managed identity assigned the Storage Blob Data Contributor role” sai vì Nó chọn Guardrails: “Select User input and Tool response and set Action to Annotate” instead of “Select User input, Output, Tool response, and Tool call and set Action to Block”; Storage access: “A system-assigned managed identity assigned the Storage Blob Data Contributor role” instead of “A system-assigned managed identity assigned the Storage Blob Data Reader role”; đây là điểm khác trực tiếp với đáp án. Content Safety chỉ cần đọc hình tại blob URL, nên system-assigned managed identity có vai trò Storage Blob Data Reader đáp ứng nguyên tắc đặc quyền tối thiểu.</li><li><strong>D. Guardrails: Select Tool call and set Action to Block; Storage access: A user-assigned identity assigned the Storage Queue Data Contributor role:</strong> “Guardrails: Select Tool call and set Action to Block; Storage access: A user-assigned identity assigned the Storage Queue Data Contributor role” sai vì Nó chọn Guardrails: “Select Tool call and set Action to Block” instead of “Select User input, Output, Tool response, and Tool call and set Action to Block”; Storage access: “A user-assigned identity assigned the Storage Queue Data Contributor role” instead of “A system-assigned managed identity assigned the Storage Blob Data Reader role”; đây là điểm khác trực tiếp với đáp án. Content Safety chỉ cần đọc hình tại blob URL, nên system-assigned managed identity có vai trò Storage Blob Data Reader đáp ứng nguyên tắc đặc quyền tối thiểu.</li></ul>"
  },
  {
    "id": "AI-103-009",
    "exam": "AI-103",
    "number": 9,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains three agents as shown in the following table.<br/><img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-9.webp\"/></p><p>You need to orchestrate the agents to ensure that the customer requests meet the following requirements:<br/>Support a deterministic, step-based process that uses conditional branching and shared state across the agents.<br/>Optionally trigger a ticket action based on the triage result.<br/>The solution must minimize development effort.<br/>What should you include in the solution?</p>",
    "options": {
      "A": "<p>a workflow</p>",
      "B": "<p>threads and runs without a workflow</p>",
      "C": "<p>a multi-agent group chat session</p>",
      "D": "<p>separate agent runs coordinated in the application code</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Workflow cung cấp thứ tự bước xác định, rẽ nhánh theo điều kiện và trạng thái dùng chung giữa các bước agent mà cần ít code tùy chỉnh. Workflow có thể chạy TriageAgent trước, gọi PolicyAgent khi cần và chỉ gọi ActionAgent dựa trên kết quả phân loại. Chỉ dùng threads và runs không cung cấp cơ chế điều phối cần thiết. Group chat phù hợp với tương tác cộng tác, không mang tính xác định. Điều phối các run riêng trong application code có thể làm được nhưng cần nhiều công sức phát triển hơn.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. threads and runs without a workflow:</strong> “threads and runs without a workflow” sai vì “threads and runs without a workflow” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Chỉ dùng threads và runs không cung cấp cơ chế điều phối cần thiết.</li><li><strong>C. a multi-agent group chat session:</strong> “a multi-agent group chat session” sai vì “a multi-agent group chat session” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Group chat phù hợp với tương tác cộng tác, không mang tính xác định.</li><li><strong>D. separate agent runs coordinated in the application code:</strong> “separate agent runs coordinated in the application code” sai vì “separate agent runs coordinated in the application code” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Workflow cung cấp thứ tự bước xác định, rẽ nhánh theo điều kiện và trạng thái dùng chung giữa các bước agent mà cần ít code tùy chỉnh.</li></ul>"
  },
  {
    "id": "AI-103-010",
    "exam": "AI-103",
    "number": 10,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent. The agent uses Azure Speech in Foundry Tools.\nYou fine-tune a baseline speech to text model for the en-us locale and publish the model.\nThe agent calls the Speech to text REST API and returns an error message indicating that the project ID is invalid.\nYou need to set the project property to the correct ID.\n</p><p>To what should you set the project property?</p>",
    "options": {
      "A": "<p>the project URL</p>",
      "B": "<p>the custom speech project ID</p>",
      "C": "<p>the project ID</p>",
      "D": "<p>the custom speech endpoint URL</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Thuộc tính project của Speech to text REST API phải chứa Custom Speech project ID của mô hình speech-to-text đã fine-tune. Project URL và custom speech endpoint URL là các URL, không phải mã định danh cần dùng. Project ID chung chung không xác định cụ thể Custom Speech project được dùng bởi mô hình đã publish.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. the project URL:</strong> “the project URL” sai vì “the project URL” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Project URL và custom speech endpoint URL là các URL, không phải mã định danh cần dùng.</li><li><strong>C. the project ID:</strong> “the project ID” sai vì “the project ID” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Thuộc tính project của Speech to text REST API phải chứa Custom Speech project ID của mô hình speech-to-text đã fine-tune.</li><li><strong>D. the custom speech endpoint URL:</strong> “the custom speech endpoint URL” sai vì “the custom speech endpoint URL” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Project URL và custom speech endpoint URL là các URL, không phải mã định danh cần dùng.</li></ul>"
  },
  {
    "id": "AI-103-011",
    "exam": "AI-103",
    "number": 11,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong></p><p>You have a Microsoft Foundry project that contains an agent named PaymentAgent. PaymentAgent includes a function tool that issues customer refunds by using an external API. You are creating a workflow in YAML. You need to ensure that the workflow pauses for human approval and continues with the refund step only after approval is granted. How should you complete the workflow definition? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-11.webp\"/></em></p>",
    "options": {
      "A": "<p>configuration 1: ask_question; configuration 2: approval == \"approved\"</p>",
      "B": "<p>configuration 1: basic_chat; configuration 2: approval == \"approved\"</p>",
      "C": "<p>configuration 1: ask_question; configuration 2: propose_refund.output != null</p>",
      "D": "<p>configuration 1: data_transformation; configuration 2: true</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Bước ask_question tạm dừng workflow và thu thập phản hồi phê duyệt từ con người. Bước execute_refund chỉ nên chạy khi giá trị approval bằng \"approved\". Basic chat không cung cấp điểm dừng phê duyệt rõ ràng cần thiết trong tình huống này. Kiểm tra proposal có output chỉ xác nhận đã có đề xuất, không xác nhận con người đã phê duyệt. Điều kiện true sẽ bỏ qua hoàn toàn cổng phê duyệt.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. configuration 1: basic_chat; configuration 2: approval == \"approved\":</strong> “configuration 1: basic_chat; configuration 2: approval == \"approved\"” sai vì Nó chọn configuration 1: “basic_chat” instead of “ask_question”; đây là điểm khác trực tiếp với đáp án. Bước execute_refund chỉ nên chạy khi giá trị approval bằng \"approved\".</li><li><strong>C. configuration 1: ask_question; configuration 2: propose_refund.output != null:</strong> “configuration 1: ask_question; configuration 2: propose_refund.output != null” sai vì Nó chọn configuration 2: “propose_refund.output != null” instead of “approval == \"approved\"”; đây là điểm khác trực tiếp với đáp án. Bước ask_question tạm dừng workflow và thu thập phản hồi phê duyệt từ con người.</li><li><strong>D. configuration 1: data_transformation; configuration 2: true:</strong> “configuration 1: data_transformation; configuration 2: true” sai vì Nó chọn configuration 1: “data_transformation” instead of “ask_question”; configuration 2: “true” instead of “approval == \"approved\"”; đây là điểm khác trực tiếp với đáp án. Bước execute_refund chỉ nên chạy khi giá trị approval bằng \"approved\".</li></ul>"
  },
  {
    "id": "AI-103-012",
    "exam": "AI-103",
    "number": 12,
    "missingImages": 0,
    "question": "<p>You have an Azure Speech in Foundry Tools resource that hosts a custom speech to text model deployed to a custom endpoint. An agent uses the endpoint to perform real-time speech recognition.\n</p><p>You are approaching the expiration date of the custom speech to text model.\n</p><p>What is the expected behavior when the model expires?</p>",
    "options": {
      "A": "<p>Speech recognition requests will return a 4xx error until a new custom model is deployed.</p>",
      "B": "<p>Speech recognition requests will continue to use the expired custom model until the model is removed manually.</p>",
      "C": "<p>Speech recognition requests will fall back to the most recent base model for the same locale.</p>",
      "D": "<p>The custom model will be deleted automatically when the model expires.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>C là đúng. Khi custom speech-to-text model đã triển khai hết hạn, các request đến custom endpoint sẽ chuyển sang dùng base model mới nhất cho cùng locale. Endpoint không tiếp tục phục vụ custom model đã hết hạn, không nhất thiết trả về lỗi 4xx chỉ vì custom model hết hạn, và việc hết hạn không tự động xóa custom model.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Speech recognition requests will return a 4xx error until a new custom model is deployed.:</strong> “Speech recognition requests will return a 4xx error until a new custom model is deployed” sai vì “Speech recognition requests will return a 4xx error until a new custom model is deployed” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Khi custom speech-to-text model đã triển khai hết hạn, các request đến custom endpoint sẽ chuyển sang dùng base model mới nhất cho cùng locale.</li><li><strong>B. Speech recognition requests will continue to use the expired custom model until the model is removed manually.:</strong> “Speech recognition requests will continue to use the expired custom model until the model is removed manually” sai vì Manual review là bước con người tự xác minh; đây không phải capability mà đề cần. Khi custom speech-to-text model đã triển khai hết hạn, các request đến custom endpoint sẽ chuyển sang dùng base model mới nhất cho cùng locale.</li><li><strong>D. The custom model will be deleted automatically when the model expires.:</strong> “The custom model will be deleted automatically when the model expires” sai vì Việc xóa file thay đổi nội dung dự án; đây không phải capability mà đề cần. Khi custom speech-to-text model đã triển khai hết hạn, các request đến custom endpoint sẽ chuyển sang dùng base model mới nhất cho cùng locale.</li></ul>"
  },
  {
    "id": "AI-103-013",
    "exam": "AI-103",
    "number": 13,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains a model deployment.\nYou have an application that calls the deployment by using the Azure OpenAI v1 API and DefaultAzureCredential.\n</p><p>The developers at your company receive HTTP 403 errors when they send inference requests, even after running az login.\n</p><p>You need to ensure that the developers can perform model inference. </p><p>The solution must follow the principle of least privilege.</p><p>\nWhich role-based access control (RBAC) role should you assign to the developers?</p>",
    "options": {
      "A": "<p>Cognitive Services User</p>",
      "B": "<p>Cognitive Services OpenAI User</p>",
      "C": "<p>Contributor</p>",
      "D": "<p>Cognitive Services Data Reader</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Cognitive Services OpenAI User cấp quyền gọi các Azure OpenAI inference API bằng xác thực Microsoft Entra ID, khắc phục lỗi 403 đồng thời tuân thủ đặc quyền tối thiểu. Cognitive Services User không phải data-plane role dành cho Azure OpenAI inference. Contributor cấp quyền quản lý tài nguyên quá rộng và không cần thiết cho việc inference. Cognitive Services Data Reader dành cho đọc dữ liệu, không cấp quyền model inference của Azure OpenAI.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Cognitive Services User:</strong> “Cognitive Services User” sai vì “Cognitive Services User” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Cognitive Services User không phải data-plane role dành cho Azure OpenAI inference.</li><li><strong>C. Contributor:</strong> “Contributor” sai vì “Contributor” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Cognitive Services User không phải data-plane role dành cho Azure OpenAI inference.</li><li><strong>D. Cognitive Services Data Reader:</strong> “Cognitive Services Data Reader” sai vì “Cognitive Services Data Reader” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Cognitive Services User không phải data-plane role dành cho Azure OpenAI inference.</li></ul>"
  },
  {
    "id": "AI-103-014",
    "exam": "AI-103",
    "number": 14,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent. </p><p>The agent has a Model Context Protocol (MCP) tool that queries a knowledge base stored in Azure AI Search. </p><p>Some agent runs return answers from the base model without invoking the knowledge base, which results in responses without grounded citations. </p><p>You are provided with the following code snippet that runs the agent. <img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-14.webp\"/></p><p>You need to add the correct tool_choice parameter to the code to deterministically force the agent to invoke the MCP tool on each run. </p><p>What should you add?</p>",
    "options": {
      "A": "<p>tool_choice={\"required\"}</p>",
      "B": "<p>tool_choice={\"auto\"}</p>",
      "C": "<p>tool_choice={\"type\": \"knowledge_base\"}</p>",
      "D": "<p>tool_choice={\"type\": \"mcp\"}</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Đặt tool_choice thành required buộc agent phải gọi ít nhất một tool có sẵn trong mọi lần chạy, ngăn agent chỉ trả lời từ base model. auto cho phép model tự quyết định có cần tool hay không, vì vậy vẫn có thể bỏ qua MCP tool truy vấn knowledge base. knowledge_base và mcp không phải các giá trị tool_choice phù hợp để thể hiện chính sách bắt buộc gọi tool trong mọi run.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. tool_choice={\"auto\"}:</strong> “tool_choice={\"auto\"}” sai vì “tool_choice={\"auto\"}” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Đặt tool_choice thành required buộc agent phải gọi ít nhất một tool có sẵn trong mọi lần chạy, ngăn agent chỉ trả lời từ base model.</li><li><strong>C. tool_choice={\"type\": \"knowledge_base\"}:</strong> “tool_choice={\"type\": \"knowledge_base\"}” sai vì “tool_choice={\"type\": \"knowledge_base\"}” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. knowledge_base và mcp không phải các giá trị tool_choice phù hợp để thể hiện chính sách bắt buộc gọi tool trong mọi run.</li><li><strong>D. tool_choice={\"type\": \"mcp\"}:</strong> “tool_choice={\"type\": \"mcp\"}” sai vì “tool_choice={\"type\": \"mcp\"}” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. knowledge_base và mcp không phải các giá trị tool_choice phù hợp để thể hiện chính sách bắt buộc gọi tool trong mọi run.</li></ul>"
  },
  {
    "id": "AI-103-015",
    "exam": "AI-103",
    "number": 15,
    "missingImages": 0,
    "question": "<p><strong>DRAG DROP</strong></p><p>You have a Microsoft Foundry project that contains a customer support agent grounded in internal documentation. </p><p>After a recent update, users report the following issues: </p><ul><li>Some answers are unsupported by retrieved documents. </li><li>A small number of responses are flagged for policy violations. </li><li>You need to evaluate each issue. </li></ul><p>Which observability signals should you use for each issue? </p><p>To answer, drag the appropriate observability signals to the correct issues. Each observability signal may be used once, more than once, or not at all. You may need to drag the spit bar between panes or scroll to view content. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point. Select the correct issue/observability-signal combination.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-15.webp\"/></em></p>",
    "options": {
      "A": "<p>Unsupported answers: Groundedness evaluator; Policy violations: Safety evaluation signal</p>",
      "B": "<p>Unsupported answers: Token usage; Policy violations: Groundedness evaluator</p>",
      "C": "<p>Unsupported answers: Latency breakdown; Policy violations: Token usage</p>",
      "D": "<p>Unsupported answers: Safety evaluation signal; Policy violations: Trace timing</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Groundedness evaluator so sánh response với các tài liệu đã truy xuất và phát hiện các claim không được hỗ trợ bởi ngữ cảnh grounding. Safety evaluation signal đo các nguy cơ và vi phạm liên quan đến chính sách. Token usage và latency hữu ích để phân tích chi phí, hiệu năng; trace timing giúp giải thích hành vi thực thi, nhưng không xác định response có grounded hoặc an toàn theo chính sách hay không.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Unsupported answers: Token usage; Policy violations: Groundedness evaluator:</strong> “Unsupported answers: Token usage; Policy violations: Groundedness evaluator” sai vì Nó chọn Unsupported answers: “Token usage” instead of “Groundedness evaluator”; Policy violations: “Groundedness evaluator” instead of “Safety evaluation signal”; đây là điểm khác trực tiếp với đáp án. Groundedness evaluator so sánh response với các tài liệu đã truy xuất và phát hiện các claim không được hỗ trợ bởi ngữ cảnh grounding.</li><li><strong>C. Unsupported answers: Latency breakdown; Policy violations: Token usage:</strong> “Unsupported answers: Latency breakdown; Policy violations: Token usage” sai vì Nó chọn Unsupported answers: “Latency breakdown” instead of “Groundedness evaluator”; Policy violations: “Token usage” instead of “Safety evaluation signal”; đây là điểm khác trực tiếp với đáp án. Token usage và latency hữu ích để phân tích chi phí, hiệu năng</li><li><strong>D. Unsupported answers: Safety evaluation signal; Policy violations: Trace timing:</strong> “Unsupported answers: Safety evaluation signal; Policy violations: Trace timing” sai vì Nó chọn Unsupported answers: “Safety evaluation signal” instead of “Groundedness evaluator”; Policy violations: “Trace timing” instead of “Safety evaluation signal”; đây là điểm khác trực tiếp với đáp án. Safety evaluation signal đo các nguy cơ và vi phạm liên quan đến chính sách.</li></ul>"
  },
  {
    "id": "AI-103-016",
    "exam": "AI-103",
    "number": 16,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project named Project1 that contains an agent. The agent uses an OpenAPI 3.0 specification to call an external weather service.\n</p><p>The weather service requires a key to be passed in an HTTP header. The key value is stored as a connection in Project1.\n</p><p>You need to ensure that the key value from the connection is included automatically whenever the OpenAPI tool is invoked.\n</p><p>What should you configure in the OpenAPI specification?</p>",
    "options": {
      "A": "<p>a header parameter defined for each operation</p>",
      "B": "<p>an Azure Key Vault connection</p>",
      "C": "<p>an API key security scheme</p>",
      "D": "<p>a Bearer token security scheme</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>C là đúng. Hãy định nghĩa API key security scheme trong OpenAPI, với vị trí key là HTTP header mà dịch vụ yêu cầu. Khi tool được kết nối với connection của Project1, Foundry có thể tự động áp dụng key đã lưu cho các request dùng security scheme này. Header parameter khai báo thủ công không mô tả cơ chế xác thực và không tự liên kết với secret trong connection. Azure Key Vault connection không phải là OpenAPI security definition. Bearer scheme dành cho bearer token, không dành cho API key qua header.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. a header parameter defined for each operation:</strong> “a header parameter defined for each operation” sai vì “a header parameter defined for each operation” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Hãy định nghĩa API key security scheme trong OpenAPI, với vị trí key là HTTP header mà dịch vụ yêu cầu.</li><li><strong>B. an Azure Key Vault connection:</strong> “an Azure Key Vault connection” sai vì Kết nối mạng chỉ cho phép giao tiếp với dịch vụ; đây không phải capability mà đề cần. Azure Key Vault connection không phải là OpenAPI security definition.</li><li><strong>D. a Bearer token security scheme:</strong> “a Bearer token security scheme” sai vì “a Bearer token security scheme” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Hãy định nghĩa API key security scheme trong OpenAPI, với vị trí key là HTTP header mà dịch vụ yêu cầu.</li></ul>"
  },
  {
    "id": "AI-103-017",
    "exam": "AI-103",
    "number": 17,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that serves a high-volume chat app.\n</p><p>Most requests are simple FAQs, but some require advanced reasoning.\n</p><p>You need to reduce costs and latency for common queries, without degrading the quality of the responses to complex questions.\n</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Route all the requests to a smaller model.</p>",
      "B": "<p>Use a model cascade that routes the requests to different models.</p>",
      "C": "<p>Increase the value of the max_tokens parameter for all the requests.</p>",
      "D": "<p>Route all the requests to the most capable model.</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Model cascade gửi các FAQ đơn giản đến model nhỏ hơn, nhanh hơn và có chi phí thấp hơn; đồng thời định tuyến các yêu cầu phức tạp đến model mạnh hơn. Cách này giảm chi phí và độ trễ mà không làm giảm chất lượng ở các tình huống cần suy luận nâng cao. A có thể làm giảm chất lượng câu trả lời phức tạp, C thường tăng chi phí và độ trễ nhưng không chọn model phù hợp, còn D giữ chất lượng nhưng đưa mọi request qua model đắt hơn và chậm hơn.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Route all the requests to a smaller model.:</strong> “Route all the requests to a smaller model” sai vì “Route all the requests to a smaller model” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Model cascade gửi các FAQ đơn giản đến model nhỏ hơn, nhanh hơn và có chi phí thấp hơn</li><li><strong>C. Increase the value of the max_tokens parameter for all the requests.:</strong> “Increase the value of the max_tokens parameter for all the requests” sai vì “Increase the value of the max_tokens parameter for all the requests” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Model cascade gửi các FAQ đơn giản đến model nhỏ hơn, nhanh hơn và có chi phí thấp hơn</li><li><strong>D. Route all the requests to the most capable model.:</strong> “Route all the requests to the most capable model” sai vì “Route all the requests to the most capable model” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Model cascade gửi các FAQ đơn giản đến model nhỏ hơn, nhanh hơn và có chi phí thấp hơn</li></ul>"
  },
  {
    "id": "AI-103-018",
    "exam": "AI-103",
    "number": 18,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> </p><p>You have a Microsoft Foundry project that contains an internal Q&amp;A agent. Users report the following issues when they ask the agent questions: </p><ul><li>An increase in the following response: No relevant information found” </li><li>Periodic HTTP 429 rate limit exceeded errors during peak hours </li></ul><p>You need to identify whether each issue is caused by model unavailability, resource limits, or inference failures. </p><p>What should you do? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-18.webp\"/></em></p>",
    "options": {
      "A": "<p>Metrics: Model Availability Rate and Provisioned Utilization; Diagnostic log: RequestResponse</p>",
      "B": "<p>Metrics: Only Tokens Cache Match Rate; Diagnostic log: AllMetrics</p>",
      "C": "<p>Metrics: Only Total Requests filtered to status code 200; Diagnostic log: audit</p>",
      "D": "<p>Metrics: Time To Response and Total Tokens; Diagnostic log: trace</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Model Availability Rate giúp xác định model có sẵn sàng hay không, còn Provisioned Utilization cho biết giới hạn công suất hoặc tài nguyên có góp phần gây lỗi 429 vào giờ cao điểm hay không. Diagnostic log RequestResponse ghi lại chi tiết request và response, bao gồm thông tin lỗi, giúp điều tra inference failure và hành vi “No relevant information found”. Cache-match rate, chỉ đếm request thành công, latency và token metrics hữu ích trong các trường hợp hẹp hơn nhưng không đồng thời chẩn đoán availability, cạn tài nguyên và inference failure. Audit và trace log không cung cấp mức chi tiết request/response tương đương cho yêu cầu này.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Metrics: Only Tokens Cache Match Rate; Diagnostic log: AllMetrics:</strong> “Metrics: Only Tokens Cache Match Rate; Diagnostic log: AllMetrics” sai vì Nó chọn Metrics: “Only Tokens Cache Match Rate” instead of “Model Availability Rate and Provisioned Utilization”; Diagnostic log: “AllMetrics” instead of “RequestResponse”; đây là điểm khác trực tiếp với đáp án. Cache-match rate, chỉ đếm request thành công, latency và token metrics hữu ích trong các trường hợp hẹp hơn nhưng không đồng thời chẩn đoán availability, cạn tài nguyên và…</li><li><strong>C. Metrics: Only Total Requests filtered to status code 200; Diagnostic log: audit:</strong> “Metrics: Only Total Requests filtered to status code 200; Diagnostic log: audit” sai vì Nó chọn Metrics: “Only Total Requests filtered to status code 200” instead of “Model Availability Rate and Provisioned Utilization”; Diagnostic log: “audit” instead of “RequestResponse”; đây là điểm khác trực tiếp với đáp án. Diagnostic log RequestResponse ghi lại chi tiết request và response, bao gồm thông tin lỗi, giúp điều tra inference failure và hành vi “No relevant information found”.</li><li><strong>D. Metrics: Time To Response and Total Tokens; Diagnostic log: trace:</strong> “Metrics: Time To Response and Total Tokens; Diagnostic log: trace” sai vì Nó chọn Metrics: “Time To Response and Total Tokens” instead of “Model Availability Rate and Provisioned Utilization”; Diagnostic log: “trace” instead of “RequestResponse”; đây là điểm khác trực tiếp với đáp án. Diagnostic log RequestResponse ghi lại chi tiết request và response, bao gồm thông tin lỗi, giúp điều tra inference failure và hành vi “No relevant information found”.</li></ul>"
  },
  {
    "id": "AI-103-019",
    "exam": "AI-103",
    "number": 19,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains a high-traffic agent.\nAfter a recent update, operational costs increase significantly.\nMonitoring confirms that the volume of user traffic to the agent remains unchanged.\nYou suspect that changes to the request or response characteristics are causing the increase. You need to identify whether the additional costs are driven by the model input size, the model output size, or expanded tool usage.\n</p><p>Which observability capability should you use?</p>",
    "options": {
      "A": "<p>latency</p>",
      "B": "<p>evaluation metrics</p>",
      "C": "<p>run success rate</p>",
      "D": "<p>token usage</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. Token usage cho biết mức tiêu thụ input và output token, từ đó có thể phát hiện prompt lớn hơn, response dài hơn hoặc context liên quan đến tool tăng lên đang làm chi phí tăng dù lưu lượng không thay đổi. Latency đo thời gian thực thi, evaluation metrics đánh giá chất lượng response, còn run success rate đo kết quả hoàn thành; không công cụ nào trong số đó xác định trực tiếp nguồn chi phí dựa trên token.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. latency:</strong> “latency” sai vì “latency” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Token usage cho biết mức tiêu thụ input và output token, từ đó có thể phát hiện prompt lớn hơn, response dài hơn hoặc context liên quan đến tool tăng lên đang làm chi phí tăng dù…</li><li><strong>B. evaluation metrics:</strong> “evaluation metrics” sai vì “evaluation metrics” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Latency đo thời gian thực thi, evaluation metrics đánh giá chất lượng response, còn run success rate đo kết quả hoàn thành</li><li><strong>C. run success rate:</strong> “run success rate” sai vì “run success rate” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Latency đo thời gian thực thi, evaluation metrics đánh giá chất lượng response, còn run success rate đo kết quả hoàn thành</li></ul>"
  },
  {
    "id": "AI-103-020",
    "exam": "AI-103",
    "number": 20,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong></p><p>You have a Microsoft Foundry project that contains an agent. The agent uses tools to retrieve internal content and call external APIs. The agent is configured to let the model decide when to call the tools. You need to publish the agent for a compliance workflow. The solution must meet the following requirements: Each workflow run must include a retrieval step before generating a response. Tool calls must authenticate by using the published agent’s own identity. Tool access must use an identity isolated from other project resources. Tool access must use support audit tracing. What should you do? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-20.webp\"/></em></p>",
    "options": {
      "A": "<p>tool_choice: required; authentication: Using a distinct agent identity bound to the client application</p>",
      "B": "<p>tool_choice: auto; authentication: Using the shared project agent identity</p>",
      "C": "<p>tool_choice: none; authentication: Storing API keys in prompts</p>",
      "D": "<p>tool_choice: required; authentication: Using the shared project agent identity</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. tool_choice: required buộc phải có tool call trong mọi run, bảo đảm bước retrieval xảy ra trước khi response được tạo. Distinct agent identity được gắn với client application cung cấp identity tách biệt khỏi các project resource khác, hỗ trợ xác thực không dùng key dưới danh tính published agent và tạo tool access có thể trace để audit. auto vẫn có thể bỏ qua retrieval. none ngăn dùng tool. API key trong prompt vi phạm yêu cầu không đặt secret trong prompt. Shared project identity không tách biệt với các project resource khác.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. tool_choice: auto; authentication: Using the shared project agent identity:</strong> “tool_choice: auto; authentication: Using the shared project agent identity” sai vì Nó chọn tool_choice: “auto” instead of “required”; authentication: “Using the shared project agent identity” instead of “Using a distinct agent identity bound to the client application”; đây là điểm khác trực tiếp với đáp án. Distinct agent identity được gắn với client application cung cấp identity tách biệt khỏi các project resource khác, hỗ trợ xác thực không dùng key dưới danh tính published agent…</li><li><strong>C. tool_choice: none; authentication: Storing API keys in prompts:</strong> “tool_choice: none; authentication: Storing API keys in prompts” sai vì Nó chọn tool_choice: “none” instead of “required”; authentication: “Storing API keys in prompts” instead of “Using a distinct agent identity bound to the client application”; đây là điểm khác trực tiếp với đáp án. Distinct agent identity được gắn với client application cung cấp identity tách biệt khỏi các project resource khác, hỗ trợ xác thực không dùng key dưới danh tính published agent…</li><li><strong>D. tool_choice: required; authentication: Using the shared project agent identity:</strong> “tool_choice: required; authentication: Using the shared project agent identity” sai vì Nó chọn authentication: “Using the shared project agent identity” instead of “Using a distinct agent identity bound to the client application”; đây là điểm khác trực tiếp với đáp án. Distinct agent identity được gắn với client application cung cấp identity tách biệt khỏi các project resource khác, hỗ trợ xác thực không dùng key dưới danh tính published agent…</li></ul>"
  },
  {
    "id": "AI-103-021",
    "exam": "AI-103",
    "number": 21,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project named Project1 that contains the following:</p><ul><li>\nAn OpenAPI tool that calls an external API\n</li><li>A project connection named Connection1 that stores the API key of the external API\n</li><li>When an agent calls the OpenAPI tool, the API returns a 401 unauthorized error, and traces show that the API key header is NOT being sent.\n</li></ul><p>You need to ensure that the OpenAPI tool automatically includes the API key from Connection1 on all requests.\n</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Enable identity passthrough so that the tool uses the Microsoft Entra token of the caller.</p>",
      "B": "<p>Add the API key header manually to the OpenAPI specification.</p>",
      "C": "<p>Configure the tool to use the default connection of Project1.</p>",
      "D": "<p>Connect the tool to Connection1.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. Kết nối OpenAPI tool với Connection1 sẽ liên kết tool với API-key credential đã lưu, để Foundry tự động đính kèm header key cần thiết cho các request. Identity passthrough gửi Microsoft Entra token của người gọi, không đáp ứng external API yêu cầu API key riêng. Thêm header thủ công vào specification không tự điền secret được lưu trong Connection1 một cách an toàn. Default project connection không thay thế việc liên kết rõ ràng tool này với connection chứa key cần dùng.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Enable identity passthrough so that the tool uses the Microsoft Entra token of the caller.:</strong> “Enable identity passthrough so that the tool uses the Microsoft Entra token of the caller” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Identity passthrough gửi Microsoft Entra token của người gọi, không đáp ứng external API yêu cầu API key riêng.</li><li><strong>B. Add the API key header manually to the OpenAPI specification.:</strong> “Add the API key header manually to the OpenAPI specification” sai vì Manual review là bước con người tự xác minh; đây không phải capability mà đề cần. Kết nối OpenAPI tool với Connection1 sẽ liên kết tool với API-key credential đã lưu, để Foundry tự động đính kèm header key cần thiết cho các request.</li><li><strong>C. Configure the tool to use the default connection of Project1.:</strong> “Configure the tool to use the default connection of Project1” sai vì Kết nối mạng chỉ cho phép giao tiếp với dịch vụ; đây không phải capability mà đề cần. Default project connection không thay thế việc liên kết rõ ràng tool này với connection chứa key cần dùng.</li></ul>"
  },
  {
    "id": "AI-103-022",
    "exam": "AI-103",
    "number": 22,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains a customer support agent. The agent calls an internal knowledge API tool before generating responses.\nUsers report the following issues:\nSome requests take more than 15 seconds to complete.\nSome responses are incorrect, even when the knowledge API returns the expected data.\nYou need to inspect individual agent runs to view the ordered sequence of large language model (LLM) calls, tool invocations, and timing information.\nWhich observability capability should you use?</p>",
    "options": {
      "A": "<p>token usage</p>",
      "B": "<p>monitoring</p>",
      "C": "<p>safety metrics</p>",
      "D": "<p>tracing</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. Tracing cung cấp góc nhìn theo từng run, có thứ tự, về LLM calls, tool invocations, input/output và các timing span. Nhờ đó có thể chẩn đoán cả bước chậm lẫn vấn đề suy luận xảy ra sau khi knowledge API trả về dữ liệu hợp lệ. Token usage tập trung vào mức tiêu thụ và chi phí, monitoring cho sức khỏe vận hành tổng hợp, còn safety metrics đo các kết quả liên quan đến an toàn; không lựa chọn nào cung cấp execution path có thứ tự cho một run riêng lẻ.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. token usage:</strong> “token usage” sai vì “token usage” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Token usage tập trung vào mức tiêu thụ và chi phí, monitoring cho sức khỏe vận hành tổng hợp, còn safety metrics đo các kết quả liên quan đến an toàn</li><li><strong>B. monitoring:</strong> “monitoring” sai vì “monitoring” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Token usage tập trung vào mức tiêu thụ và chi phí, monitoring cho sức khỏe vận hành tổng hợp, còn safety metrics đo các kết quả liên quan đến an toàn</li><li><strong>C. safety metrics:</strong> “safety metrics” sai vì “safety metrics” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Token usage tập trung vào mức tiêu thụ và chi phí, monitoring cho sức khỏe vận hành tổng hợp, còn safety metrics đo các kết quả liên quan đến an toàn</li></ul>"
  },
  {
    "id": "AI-103-023",
    "exam": "AI-103",
    "number": 23,
    "missingImages": 0,
    "question": "<p><strong>Note:</strong> This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\n</p><p>You have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses.\n</p><p>You discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model.\n</p><p>You need to implement controls to mitigate the risk.\n</p><p><strong>Solution</strong>: You configure a prompt shield for user prompts.\n</p><p>Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Prompt shield cho user prompts bảo vệ trước các nỗ lực prompt injection trong văn bản được người dùng cung cấp trực tiếp. Rủi ro ở đây còn bao gồm hình ảnh không an toàn và chỉ dẫn ẩn bên trong hình ảnh. Chỉ dùng user-prompt shield không kiểm duyệt nội dung hình ảnh hoặc kiểm tra riêng phần nội dung trích xuất từ hình để phát hiện indirect prompt injection, nên không đáp ứng đầy đủ mục tiêu.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Yes:</strong> “Yes” sai vì “Yes” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Prompt shield cho user prompts bảo vệ trước các nỗ lực prompt injection trong văn bản được người dùng cung cấp trực tiếp.</li></ul>"
  },
  {
    "id": "AI-103-024",
    "exam": "AI-103",
    "number": 24,
    "missingImages": 0,
    "question": "<p><strong>Note</strong>: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\n</p><p>You have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses.\n</p><p>You discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model.\n</p><p>You need to implement controls to mitigate the risk.\n</p><p><strong>Solution</strong>: You configure image moderation to block unsafe content before processing the images.\n</p><p>Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Image moderation có thể chặn nội dung hình ảnh không an toàn trước khi model xử lý, nhưng không phát hiện riêng các chỉ dẫn prompt injection ẩn trong một hình ảnh nhìn bề ngoài an toàn. Rủi ro nêu ra gồm cả hình ảnh không an toàn và chỉ dẫn nhằm thao túng model, nên chỉ image moderation không đáp ứng đầy đủ mục tiêu. Cần thêm prompt shield hoặc biện pháp bảo vệ indirect prompt injection tương đương cho các chỉ dẫn ẩn.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Yes:</strong> “Yes” sai vì “Yes” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Image moderation có thể chặn nội dung hình ảnh không an toàn trước khi model xử lý, nhưng không phát hiện riêng các chỉ dẫn prompt injection ẩn trong một hình ảnh nhìn bề ngoài…</li></ul>"
  },
  {
    "id": "AI-103-025",
    "exam": "AI-103",
    "number": 25,
    "missingImages": 0,
    "question": "<p><strong>Note</strong>: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\n</p><p>You have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses.\n</p><p>You discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model.\n</p><p>You need to implement controls to mitigate the risk.\n</p><p><strong>Solution</strong>: You configure a prompt shield for documents.\n</p><p>Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Prompt shield cho documents được thiết kế để phát hiện indirect prompt injection trong tài liệu do người dùng cung cấp, bao gồm các chỉ dẫn có thể nằm trong nội dung được trích xuất. Trong tình huống này, hình ảnh được xử lý để lấy text trước khi generative model phản hồi, vì vậy document prompt shield giảm thiểu rủi ro thao túng bằng chỉ dẫn ẩn. Image moderation có thể được dùng như một lớp kiểm soát bổ sung cho nội dung hình ảnh không an toàn, nhưng document prompt shield đáp ứng mục tiêu giảm thiểu rủi ro chỉ dẫn ẩn đã nêu.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. No:</strong> “No” sai vì “No” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Prompt shield cho documents được thiết kế để phát hiện indirect prompt injection trong tài liệu do người dùng cung cấp, bao gồm các chỉ dẫn có thể nằm trong nội dung được trích…</li></ul>"
  },
  {
    "id": "AI-103-026",
    "exam": "AI-103",
    "number": 26,
    "missingImages": 0,
    "question": "<p><strong>Note</strong>: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\n</p><p>You have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses.\n</p><p>You discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model.\n</p><p>You need to implement controls to mitigate the risk.\n</p><p><strong>Solution</strong>: You configure protected material detection.\n</p><p>Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Protected material detection xác định text và code có nội dung được bảo hộ hoặc có bản quyền. Tính năng này không kiểm duyệt hình ảnh không an toàn và cũng không phát hiện hoặc chặn các chỉ dẫn ẩn nhằm thao túng model. Vì vậy, nó không giảm thiểu rủi ro an toàn hình ảnh và indirect prompt injection trong tình huống này. Thay vào đó, hãy dùng image moderation và các biện pháp bảo vệ prompt injection như prompt shields phù hợp.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Yes:</strong> “Yes” sai vì “Yes” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Protected material detection xác định text và code có nội dung được bảo hộ hoặc có bản quyền.</li></ul>"
  },
  {
    "id": "AI-103-027",
    "exam": "AI-103",
    "number": 27,
    "missingImages": 0,
    "question": "<p><strong>Overview -\nCompany Information</strong> -\nContoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-based solutions by using Microsoft Foundry.\n</p><p><strong>Existing Environment -\nIdentity Environment</strong> -\nContoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities that enable agents to access organizational resources and services.\nContoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions.\nThe team collaborates with solution architects, DevOps engineers, and security engineers to design, implement. monitor, and secure AI applications.\nContoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the solution deployments.\n</p><p><strong>Generative Environment </strong>-\nContoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.\n</p><p><strong><em>Project1</em></strong> -\nProject1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests.\nAgent1 has the following configurations:\n</p><ul><li>Agent1 uses a base model deployment.\nA safety evaluation pipeline is NOT enabled.\n</li><li>Tool invocation approval workflows are NOT enabled.\n</li><li>Conversation memory constraints are NOT configured.\nAgent1 interacts with customers by using digital support channels and answers general questions about Contoso products.\n</li><li>Project1 is deployed to an Azure region located in the European Union (EU).\n</li><li>Agent1Dev Team will use Project1 to optimize and maintain Agent1.\n</li></ul><p><strong><em>Project2</em></strong> -\nProject2 contains a deployed video generation model. The marketing department at Contoso has access to Project2 and plans to use the model to develop a video creation solution.\nDevelopment of the solution is incomplete.\n</p><p><strong>Data Environment</strong> -\nContoso stores product-related information in Azure resources that support AI applications.\nThe Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products.\nThe product sheets include specifications, feature descriptions, and product support information that Agent1 can use to answer customer questions. The product sheets are stored in the PDF format.\n</p><p><strong>Problem Statements </strong>-\nContoso identifies the following issues:\n</p><ul><li>Agent1 has only general knowledge of the Contoso products.\n</li><li>A recent chat interaction with Agent1 was analyzed for sentiment. </li><li>The results of the analysis have NOT been processed yet.\n</li><li>Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when responding to customer questions.\n</li><li>The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in the vendor contracts. </li><li>The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently.\n</li></ul><p><strong>Requirements -\nPlanned Changes</strong> -\nContoso plans to implement the following changes:\n</p><ul><li>Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout and the textual content of the invoices, so that the invoice details can be verified against the vendor contract terms.\n</li><li>Update the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses.\n</li><li>Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.\n</li><li>Implement an indexing solution for the product sheets that Agent1 can use to answer customer questions.\n</li><li>Complete the development of the video creation solution.\n</li></ul><p><strong>Technical Requirements</strong> -\nContoso identifies the following technical requirements:\n</p><ul><li>The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity.\n</li><li>The product sheets must be processed by using an indexing pipeline that enables semantic and vector search, so that Agent1 can retrieve the relevant product information.\n</li><li>Responses generated by using the product sheet information must be relevant, complete, and accurate.\n</li><li>Agent1 must be able to use the product sheets to answer natural language questions about product details.\n</li><li>The model version used by Agent1 must remain consistent to ensure stable responses.\n</li><li>The data processed by the model must remain within the EU.\n</li></ul><p>Security and Compliance Requirements\nContoso identifies the following security and compliance requirements:\n</p><ul><li>API keys must NOT be used to access Foundry-deployed models.\n</li><li>Access to the Azure resources must follow the principle of least privilege.\n</li><li>The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra authentication.\n</li><li>Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group named SC_Agent1_Dev.\n</li><li>Access to Project1 must be assigned to the members of Agent1Test Team by using a security group named SC_Agent1_Test.\n</li><li>Agent1 must never reveal customer information, even if a document that contains customer data is added erroneously to the product sheet repository in storage1.\n</li><li>The product sheets might contain images that include embedded text. </li><li>Agent1 must be protected from malicious instructions potentially hidden within the images.\n</li></ul><p><strong>Business Requirements</strong> -\nContoso identifies the following business requirements:\n</p><ul><li>Users that interact with Agent1 must have a personalized experience in future interactions, including the ability for Agent1 to retain conversation context and recall relevant information from previous interactions.\n</li><li>Agent1 must answer questions only about the products sold by Contoso.\n</li><li>You need to recommend a solution to assess the responses generated by Agent1 when the agent uses the product information stored in storage1. </li></ul><p>The solution must meet the technical requirements.\nWhat should you include in the recommendation?</p>",
    "options": {
      "A": "<p>a Retrieval Augmented Generation (RAG) evaluator</p>",
      "B": "<p>a custom guardrail</p>",
      "C": "<p>model fine-tuning</p>",
      "D": "<p>a groundedness evaluator</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. RAG evaluator đánh giá toàn bộ luồng retrieval-augmented generation, bao gồm chất lượng truy xuất và các tiêu chí chất lượng response như relevance, completeness và groundedness. Điều này khớp trực tiếp với yêu cầu đánh giá response của Agent1 khi dùng thông tin sản phẩm từ storage1. Groundedness evaluator đo response có được hỗ trợ bởi context hay không, nhưng không đánh giá đầy đủ hệ thống RAG một cách rộng hơn. Custom guardrail kiểm soát hành vi runtime thay vì đánh giá chất lượng response RAG. Fine-tuning thay đổi model và không phải là giải pháp evaluation.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. a custom guardrail:</strong> “a custom guardrail” sai vì “a custom guardrail” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. RAG evaluator đánh giá toàn bộ luồng retrieval-augmented generation, bao gồm chất lượng truy xuất và các tiêu chí chất lượng response như relevance, completeness và groundedness.</li><li><strong>C. model fine-tuning:</strong> “model fine-tuning” sai vì “model fine-tuning” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. RAG evaluator đánh giá toàn bộ luồng retrieval-augmented generation, bao gồm chất lượng truy xuất và các tiêu chí chất lượng response như relevance, completeness và groundedness.</li><li><strong>D. a groundedness evaluator:</strong> “a groundedness evaluator” sai vì “a groundedness evaluator” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. RAG evaluator đánh giá toàn bộ luồng retrieval-augmented generation, bao gồm chất lượng truy xuất và các tiêu chí chất lượng response như relevance, completeness và groundedness.</li></ul>"
  },
  {
    "id": "AI-103-028",
    "exam": "AI-103",
    "number": 28,
    "missingImages": 0,
    "question": "<p>You need to configure Agent1 to answer customer questions about only the Contoso products. The solution must meet the business requirements.\nWhat should you do?</p>",
    "options": {
      "A": "<p>Modify the system message instructions.</p>",
      "B": "<p>Add few-shot examples.</p>",
      "C": "<p>Apply top-p sampling.</p>",
      "D": "<p>Increase the value of the temperature parameter.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. System message instructions xác định hành vi và phạm vi cố định của agent, nên có thể yêu cầu rõ Agent1 chỉ trả lời câu hỏi về sản phẩm Contoso và từ chối yêu cầu không liên quan. Few-shot examples có thể hướng dẫn hành vi, nhưng ít có tính bắt buộc và kém tin cậy hơn system instruction đối với ràng buộc phạm vi cứng. Top-p và temperature kiểm soát độ ngẫu nhiên của response, không kiểm soát chủ đề agent được phép trả lời.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Add few-shot examples.:</strong> “Add few-shot examples” sai vì “Add few-shot examples” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Few-shot examples có thể hướng dẫn hành vi, nhưng ít có tính bắt buộc và kém tin cậy hơn system instruction đối với ràng buộc phạm vi cứng.</li><li><strong>C. Apply top-p sampling.:</strong> “Apply top-p sampling” sai vì “Apply top-p sampling” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. System message instructions xác định hành vi và phạm vi cố định của agent, nên có thể yêu cầu rõ Agent1 chỉ trả lời câu hỏi về sản phẩm Contoso và từ chối yêu cầu không liên quan.</li><li><strong>D. Increase the value of the temperature parameter.:</strong> “Increase the value of the temperature parameter” sai vì “Increase the value of the temperature parameter” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. System message instructions xác định hành vi và phạm vi cố định của agent, nên có thể yêu cầu rõ Agent1 chỉ trả lời câu hỏi về sản phẩm Contoso và từ chối yêu cầu không liên quan.</li></ul>"
  },
  {
    "id": "AI-103-029",
    "exam": "AI-103",
    "number": 29,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project.\nYou plan to build a customer support solution that contains an agent. The solution must meet the following requirements:\n</p><ul><li>Provide accurate, context-aware responses grounded in internal product documentation stored in Azure AI Search.\n</li><li>Require deep, multi-step reasoning across long contexts.\n</li><li>Generate detailed natural language responses.\n</li></ul><p>Which type of model should you use to power the agent?</p>",
    "options": {
      "A": "<p>a multimodal model</p>",
      "B": "<p>a small language model (SLM)</p>",
      "C": "<p>a key phrase extraction model</p>",
      "D": "<p>a large language model (LLM)</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. LLM phù hợp để tổng hợp kết quả truy xuất từ Azure AI Search thành câu trả lời ngôn ngữ tự nhiên chi tiết và thực hiện suy luận nhiều bước trên ngữ cảnh dài. Multimodal model cần thiết khi input cốt lõi yêu cầu hiểu hình ảnh, âm thanh hoặc modality khác, điều này không được nêu trong đề. SLM có thể giảm chi phí và độ trễ cho tác vụ đơn giản hơn nhưng không phù hợp bằng với yêu cầu suy luận và long context ở đây. Key phrase extraction là tác vụ NLP hẹp, không phải loại model dùng cho agent reasoning và response generation.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. a multimodal model:</strong> “a multimodal model” sai vì “a multimodal model” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Multimodal model cần thiết khi input cốt lõi yêu cầu hiểu hình ảnh, âm thanh hoặc modality khác, điều này không được nêu trong đề.</li><li><strong>B. a small language model (SLM):</strong> “a small language model (SLM)” sai vì “a small language model (SLM)” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Key phrase extraction là tác vụ NLP hẹp, không phải loại model dùng cho agent reasoning và response generation.</li><li><strong>C. a key phrase extraction model:</strong> “a key phrase extraction model” sai vì “a key phrase extraction model” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Key phrase extraction là tác vụ NLP hẹp, không phải loại model dùng cho agent reasoning và response generation.</li></ul>"
  },
  {
    "id": "AI-103-030",
    "exam": "AI-103",
    "number": 30,
    "missingImages": 0,
    "question": "<p><strong>DRAG DROP</strong> - You have a Microsoft Foundry project that contains a deployed ticket-triage agent. You discover that sometimes the agent responds without calling any tools, even when a tool is required. </p><p>You need to ensure that the agent calls a tool during execution. </p><p>How should you complete the Python code? </p><p>To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. </p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-30.webp\"/></em></p>",
    "options": {
      "A": "<p>\"tool_choice\": \"required\"</p>",
      "B": "<p>\"tool_choice\": \"auto\"</p>",
      "C": "<p>\"response_format\": \"required\"</p>",
      "D": "<p>\"type\": \"tools\"</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Đặt run payload thành \"tool_choice\": \"required\" để buộc agent phải gọi ít nhất một tool có sẵn trong quá trình thực thi. auto để model tự quyết định việc chọn tool, nên model vẫn có thể phản hồi mà không gọi tool. response_format kiểm soát cấu trúc response của model, không kiểm soát tool invocation. type và tools không phải tổ hợp key/value dùng để bắt buộc gọi tool trong run payload.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. \"tool_choice\": \"auto\":</strong> “\"tool_choice\": \"auto\"” sai vì Nó chọn \"tool_choice\": “\"auto\"” instead of “\"required\"”; đây là điểm khác trực tiếp với đáp án. Đặt run payload thành \"tool_choice\": \"required\" để buộc agent phải gọi ít nhất một tool có sẵn trong quá trình thực thi.</li><li><strong>C. \"response_format\": \"required\":</strong> “\"response_format\": \"required\"” sai vì “\"response_format\": \"required\"” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Đặt run payload thành \"tool_choice\": \"required\" để buộc agent phải gọi ít nhất một tool có sẵn trong quá trình thực thi.</li><li><strong>D. \"type\": \"tools\":</strong> “\"type\": \"tools\"” sai vì “\"type\": \"tools\"” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. type và tools không phải tổ hợp key/value dùng để bắt buộc gọi tool trong run payload.</li></ul>"
  },
  {
    "id": "AI-103-031",
    "exam": "AI-103",
    "number": 31,
    "missingImages": 0,
    "question": "<p>You are building a web app named App1 that generates responses by using a model deployed to a Microsoft Foundry project named Project1.</p><p>\nBefore sending the prompts to the model, App1 must retrieve documents by using Azure AI Search.\n</p><p>You need to integrate Project1 and App1. </p><p>The solution must meet the following requirements:\n</p><ul><li>Multiple client applications must use the same search configuration.\n</li><li>A security policy must prevent key-based authentication.\n</li><li>Administrative effort must be minimized.\n</li></ul><p>What should you do?</p>",
    "options": {
      "A": "<p>Create a custom HTTP connection in Foundry and manually configure Azure AI Search endpoints per application.</p>",
      "B": "<p>Configure an Azure AI Search connection in Project1 and reference the connection in each application.</p>",
      "C": "<p>Call Azure AI Search directly from each application by using Microsoft Entra authentication.</p>",
      "D": "<p>Enable a managed identity for each application and call Azure AI Search directly.</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Azure AI Search connection trong Project1 tập trung endpoint và cấu hình xác thực để nhiều client application có thể tham chiếu cùng một cấu hình. Nó hỗ trợ xác thực Microsoft Entra không dùng key và giảm công sức quản trị vì chỉ cần quản lý thiết lập một lần ở cấp project. A yêu cầu cấu hình thủ công theo từng application. C và D có thể dùng xác thực không key nhưng vẫn lặp lại việc tích hợp trực tiếp và cấu hình ở từng application, làm tăng công sức quản trị.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Create a custom HTTP connection in Foundry and manually configure Azure AI Search endpoints per application.:</strong> “Create a custom HTTP connection in Foundry and manually configure Azure AI Search endpoints per application” sai vì Connection là binding có thể tái sử dụng để project/agent truy cập external resource; đây không phải capability mà đề cần. Azure AI Search connection trong Project1 tập trung endpoint và cấu hình xác thực để nhiều client application có thể tham chiếu cùng một cấu hình.</li><li><strong>C. Call Azure AI Search directly from each application by using Microsoft Entra authentication.:</strong> “Call Azure AI Search directly from each application by using Microsoft Entra authentication” sai vì “Call Azure AI Search directly from each application by using Microsoft Entra authentication” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure AI Search connection trong Project1 tập trung endpoint và cấu hình xác thực để nhiều client application có thể tham chiếu cùng một cấu hình.</li><li><strong>D. Enable a managed identity for each application and call Azure AI Search directly.:</strong> “Enable a managed identity for each application and call Azure AI Search directly” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Azure AI Search connection trong Project1 tập trung endpoint và cấu hình xác thực để nhiều client application có thể tham chiếu cùng một cấu hình.</li></ul>"
  },
  {
    "id": "AI-103-032",
    "exam": "AI-103",
    "number": 32,
    "missingImages": 0,
    "question": "<p><strong>DRAG DROP</strong> - You have a Microsoft Foundry project that contains an agent used by the financial analysts at your company. </p><p>You need to optimize the agent workflow by providing additional data access and processing capabilities. </p><p>The solution must meet the following requirements: </p><ul><li>Ensure that the agent can perform calculations during conversations. </li><li>Ensure that the agent can access up-to-date information from public websites. </li><li>Ensure that the agent can retrieve information from documents uploaded directly to the agent. </li></ul><p>What should you use for each requirement? </p><p>To answer, drag the appropriate tools to the correct requirements. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.</p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point</em>.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-32.webp\"/></p>",
    "options": {
      "A": "<p>Public websites: Grounding with Bing Search; Calculations: Code interpreter; Uploaded documents: File search</p>",
      "B": "<p>Public websites: Computer use; Calculations: Microsoft Fabric; Uploaded documents: Grounding with Bing Search</p>",
      "C": "<p>Public websites: File search; Calculations: Grounding with Bing Search; Uploaded documents: Code interpreter</p>",
      "D": "<p>Public websites: Microsoft Fabric; Calculations: File search; Uploaded documents: Computer use</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Grounding with Bing Search truy xuất thông tin mới nhất từ các website công khai. Code interpreter thực hiện các phép tính trong cuộc hội thoại. File search truy xuất nội dung liên quan từ các tài liệu được upload trực tiếp vào agent. Computer use dùng để tương tác với giao diện đồ họa, Microsoft Fabric là nền tảng dữ liệu và phân tích; cả hai không thay thế các built-in tool phù hợp với yêu cầu đã nêu.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Public websites: Computer use; Calculations: Microsoft Fabric; Uploaded documents: Grounding with Bing Search:</strong> “Public websites: Computer use; Calculations: Microsoft Fabric; Uploaded documents: Grounding with Bing Search” sai vì Nó chọn Public websites: “Computer use” instead of “Grounding with Bing Search”; Calculations: “Microsoft Fabric” instead of “Code interpreter”; Uploaded documents: “Grounding with Bing Search” instead of “File search”; đây là điểm khác trực tiếp với đáp án. Grounding with Bing Search truy xuất thông tin mới nhất từ các website công khai.</li><li><strong>C. Public websites: File search; Calculations: Grounding with Bing Search; Uploaded documents: Code interpreter:</strong> “Public websites: File search; Calculations: Grounding with Bing Search; Uploaded documents: Code interpreter” sai vì Nó chọn Public websites: “File search” instead of “Grounding with Bing Search”; Calculations: “Grounding with Bing Search” instead of “Code interpreter”; Uploaded documents: “Code interpreter” instead of “File search”; đây là điểm khác trực tiếp với đáp án. Grounding with Bing Search truy xuất thông tin mới nhất từ các website công khai.</li><li><strong>D. Public websites: Microsoft Fabric; Calculations: File search; Uploaded documents: Computer use:</strong> “Public websites: Microsoft Fabric; Calculations: File search; Uploaded documents: Computer use” sai vì Nó chọn Public websites: “Microsoft Fabric” instead of “Grounding with Bing Search”; Calculations: “File search” instead of “Code interpreter”; Uploaded documents: “Computer use” instead of “File search”; đây là điểm khác trực tiếp với đáp án. File search truy xuất nội dung liên quan từ các tài liệu được upload trực tiếp vào agent.</li></ul>"
  },
  {
    "id": "AI-103-033",
    "exam": "AI-103",
    "number": 33,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains a prompt agent used by a customer support web app.\n</p><p>The agent is invoked from a Python service that does NOT run in the Foundry portal.\n</p><p>You need to implement end-to-end tracing to capture latency breakdowns and exceptions across agent runs.\n</p><p>Which two components can you use? </p><p>Each correct answer presents a complete solution.\n</p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>a Log Analytics workspace</p>",
      "B": "<p>Application Insights</p>",
      "C": "<p>OpenTelemetry</p>",
      "D": "<p>the Azure Monitor Agent</p>",
      "E": "<p>Microsoft Sentinel</p>"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B và C là đúng. Application Insights có thể thu thập và phân tích distributed telemetry, gồm thời lượng request, dependency call, exception và end-to-end trace từ Python service và agent workflow. OpenTelemetry cung cấp chuẩn instrumentation trung lập với nhà cung cấp để tạo và truyền span xuyên suốt service và agent run, gồm latency breakdown và exception. Log Analytics workspace lưu trữ và truy vấn log nhưng tự nó không phải giải pháp instrumentation end-to-end tracing. Azure Monitor Agent thu thập telemetry hạ tầng từ máy. Microsoft Sentinel là nền tảng SIEM cho phân tích bảo mật, không phải application tracing.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. a Log Analytics workspace:</strong> “a Log Analytics workspace” sai vì “a Log Analytics workspace” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Log Analytics workspace lưu trữ và truy vấn log nhưng tự nó không phải giải pháp instrumentation end-to-end tracing.</li><li><strong>D. the Azure Monitor Agent:</strong> “the Azure Monitor Agent” sai vì “the Azure Monitor Agent” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure Monitor Agent thu thập telemetry hạ tầng từ máy.</li><li><strong>E. Microsoft Sentinel:</strong> “Microsoft Sentinel” sai vì “Microsoft Sentinel” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Microsoft Sentinel là nền tảng SIEM cho phân tích bảo mật, không phải application tracing.</li></ul>"
  },
  {
    "id": "AI-103-034",
    "exam": "AI-103",
    "number": 34,
    "missingImages": 0,
    "question": "<p>You have a customer support agent that uses the Microsoft Foundry Agent Service.\n</p><p>Sometimes, customers return to a session days later to continue the same support case, and the agent must resume with the full historical context. </p><p>The agent must provide the following:\n</p><ul><li>Multi-turn continuity within the session\n</li><li>Cross-session continuity for the same case\n</li><li>Access to the full interaction history, including user messages, agent messages, tool calls, and tool outputs\n</li><li>You need to ensure that the agent automatically reloads the complete history on each new turn.\n</li></ul><p>What should you do?</p>",
    "options": {
      "A": "<p>Create and reuse a conversation by storing the conversation’s ID and supplying the ID on subsequent requests.</p>",
      "B": "<p>Persist only the final model response stored in the client application and prepend the response to future prompts.</p>",
      "C": "<p>Enable memory summarization on the agent definition to persist the context automatically.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Lưu conversation ID cho support case và gửi lại ID đó trong các request sau. Agent Service khi đó có thể tải lại toàn bộ trạng thái conversation, gồm user message, agent message, tool call và tool output. B chỉ lưu một response nên làm mất phần còn lại của lịch sử tương tác và tool history. C có thể giảm kích thước context bằng tóm tắt, nhưng không thay thế việc lưu và tái sử dụng conversation ID khi cần tự động có đầy đủ lịch sử.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Persist only the final model response stored in the client application and prepend the response to future prompts.:</strong> “Persist only the final model response stored in the client application and prepend the response to future prompts” sai vì “Persist only the final model response stored in the client application and prepend the response to future prompts” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. B chỉ lưu một response nên làm mất phần còn lại của lịch sử tương tác và tool history.</li><li><strong>C. Enable memory summarization on the agent definition to persist the context automatically.:</strong> “Enable memory summarization on the agent definition to persist the context automatically” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Agent Service khi đó có thể tải lại toàn bộ trạng thái conversation, gồm user message, agent message, tool call và tool output.</li></ul>"
  },
  {
    "id": "AI-103-035",
    "exam": "AI-103",
    "number": 35,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You have a Microsoft Foundry project that contains a deployed chat model. </p><p>You have a Python service that sends API requests to the model. </p><p>The service is integrated with an automated validation system that compares generated outputs against approved response patterns. </p><p>Stakeholders report that small wording differences are causing validation mismatches. </p><p>You need to update the request parameters to improve output stability. </p><p>The solution must maximize reasoning quality. </p><p>How should you complete the Python code? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-35.webp\"/></em></p>",
    "options": {
      "A": "<p>temperature: 0; effort: \"high\"</p>",
      "B": "<p>temperature: 1; effort: \"medium\"</p>",
      "C": "<p>temperature: 2; effort: \"high\"</p>",
      "D": "<p>temperature: 0; effort: \"low\"</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Đặt temperature bằng 0 để giảm tối đa tính ngẫu nhiên khi lấy mẫu và làm wording nhất quán nhất có thể cho hệ thống validation tự động. Đặt effort thành high để tối đa hóa chất lượng suy luận của model. B và C tạo thêm ngẫu nhiên, làm tăng biến thể wording. D ổn định nhưng dùng effort low, nên không đáp ứng yêu cầu tối đa hóa reasoning quality.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. temperature: 1; effort: \"medium\":</strong> “temperature: 1; effort: \"medium\"” sai vì Nó chọn temperature: “1” instead of “0”; effort: “\"medium\"” instead of “\"high\"”; đây là điểm khác trực tiếp với đáp án. Đặt effort thành high để tối đa hóa chất lượng suy luận của model.</li><li><strong>C. temperature: 2; effort: \"high\":</strong> “temperature: 2; effort: \"high\"” sai vì Nó chọn temperature: “2” instead of “0”; đây là điểm khác trực tiếp với đáp án. Đặt effort thành high để tối đa hóa chất lượng suy luận của model.</li><li><strong>D. temperature: 0; effort: \"low\":</strong> “temperature: 0; effort: \"low\"” sai vì Nó chọn effort: “\"low\"” instead of “\"high\"”; đây là điểm khác trực tiếp với đáp án. D ổn định nhưng dùng effort low, nên không đáp ứng yêu cầu tối đa hóa reasoning quality.</li></ul>"
  },
  {
    "id": "AI-103-036",
    "exam": "AI-103",
    "number": 36,
    "missingImages": 0,
    "question": "<p>You have a chat app in a Microsoft Foundry project and an Azure AI Search vectorized index.\n</p><p>You need to connect to the index to meet the following requirements:\n</p><ul><li>Complex questions must retrieve information from multiple chunks.\n</li><li>Multi-turn conversations must influence retrieval planning.\n</li><li>Retrievals must run in parallel to reduce latency.\n</li></ul><p>Which retrieval approach should you use?</p>",
    "options": {
      "A": "<p>iterative retrieval</p>",
      "B": "<p>agentic Retrieval Augmented Generation (RAG)</p>",
      "C": "<p>chain of thought</p>",
      "D": "<p>classic Retrieval Augmented Generation (RAG)</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Agentic RAG dùng agent để lập kế hoạch và thực thi retrieval, có thể phân rã câu hỏi phức tạp thành nhiều retrieval action, đưa ngữ cảnh hội thoại nhiều lượt vào quá trình lập kế hoạch và có thể chạy retrieval song song để giảm độ trễ. Iterative retrieval thường lặp retrieval theo tuần tự và không mặc định cung cấp khả năng planning cùng parallelism như yêu cầu. Chain of thought là kỹ thuật suy luận, không phải kiến trúc retrieval. Classic RAG thường lấy context trong một giai đoạn retrieval đơn giản hơn, không có agent-led planning xuyên suốt các lượt hội thoại.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. iterative retrieval:</strong> “iterative retrieval” sai vì “iterative retrieval” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Agentic RAG dùng agent để lập kế hoạch và thực thi retrieval, có thể phân rã câu hỏi phức tạp thành nhiều retrieval action, đưa ngữ cảnh hội thoại nhiều lượt vào quá trình lập kế…</li><li><strong>C. chain of thought:</strong> “chain of thought” sai vì “chain of thought” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Chain of thought là kỹ thuật suy luận, không phải kiến trúc retrieval.</li><li><strong>D. classic Retrieval Augmented Generation (RAG):</strong> “classic Retrieval Augmented Generation (RAG)” sai vì “classic Retrieval Augmented Generation (RAG)” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Classic RAG thường lấy context trong một giai đoạn retrieval đơn giản hơn, không có agent-led planning xuyên suốt các lượt hội thoại.</li></ul>"
  },
  {
    "id": "AI-103-037",
    "exam": "AI-103",
    "number": 37,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You need to recommend a plan to create a customer support agent by using the Microsoft Foundry Agent Service. </p><p>The agent must meet the following requirements: </p><ul><li>Retain user preferences across multiple conversations. </li><li>Enable users to provide contextual grounding by directly uploading documents during a chat. </li><li>Which Foundry capability should you recommend for each requirement? </li></ul><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-37.webp\"/></em></p>",
    "options": {
      "A": "<p>Agent memory that uses persistent storage; File search tool</p>",
      "B": "<p>Conversation history; Azure AI Search tool</p>",
      "C": "<p>Orchestration-managed session context; Code interpreter tool</p>",
      "D": "<p>Agent memory that uses persistent storage; Azure AI Search tool</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Agent memory sử dụng persistent storage có thể lưu sở thích của người dùng xuyên qua các cuộc hội thoại riêng biệt. Conversation history và orchestration-managed session context chỉ phù hợp với phạm vi cuộc hội thoại hoặc phiên workflow. File search tool cho phép người dùng tải trực tiếp tài liệu trong lúc chat và dùng các tài liệu đó làm ngữ cảnh grounding. Azure AI Search phù hợp khi truy vấn một search index có sẵn, còn Code interpreter dùng để chạy mã và tính toán, không phải để truy xuất grounding từ tài liệu tải lên.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Conversation history; Azure AI Search tool:</strong> “Conversation history; Azure AI Search tool” sai vì “Conversation history; Azure AI Search tool” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. File search tool cho phép người dùng tải trực tiếp tài liệu trong lúc chat và dùng các tài liệu đó làm ngữ cảnh grounding.</li><li><strong>C. Orchestration-managed session context; Code interpreter tool:</strong> “Orchestration-managed session context; Code interpreter tool” sai vì “Orchestration-managed session context; Code interpreter tool” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. File search tool cho phép người dùng tải trực tiếp tài liệu trong lúc chat và dùng các tài liệu đó làm ngữ cảnh grounding.</li><li><strong>D. Agent memory that uses persistent storage; Azure AI Search tool:</strong> “Agent memory that uses persistent storage; Azure AI Search tool” sai vì “Agent memory that uses persistent storage; Azure AI Search tool” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Agent memory sử dụng persistent storage có thể lưu sở thích của người dùng xuyên qua các cuộc hội thoại riêng biệt.</li></ul>"
  },
  {
    "id": "AI-103-038",
    "exam": "AI-103",
    "number": 38,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent. </p><p>The agent generates summaries from retrieved policy documents.\n</p><p>You need to improve response completeness. </p><p>The solution must be implemented in the logic of the application code before responses are returned.\n</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Add a retry evaluation before the responses are returned.</p>",
      "B": "<p>Decrease the value of the max_tokens parameter.</p>",
      "C": "<p>Switch to Retrieval Augmented Generation (RAG).</p>",
      "D": "<p>Replace the model with a smaller deployment.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Retry evaluation có thể đánh giá độ đầy đủ của câu trả lời trong logic ứng dụng trước khi trả về cho người dùng. Khi đánh giá cho thấy câu trả lời chưa đầy đủ, ứng dụng có thể thử lại hoặc tinh chỉnh lần sinh nội dung. Giảm max_tokens có thể làm đầu ra bị cắt ngắn. Agent đã dùng các tài liệu được truy xuất, nên chỉ chuyển sang RAG không bổ sung logic đánh giá trước khi trả kết quả. Dùng model deployment nhỏ hơn cũng không phải cách trực tiếp để cải thiện tính đầy đủ.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Decrease the value of the max_tokens parameter.:</strong> “Decrease the value of the max_tokens parameter” sai vì “Decrease the value of the max_tokens parameter” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Retry evaluation có thể đánh giá độ đầy đủ của câu trả lời trong logic ứng dụng trước khi trả về cho người dùng.</li><li><strong>C. Switch to Retrieval Augmented Generation (RAG).:</strong> “Switch to Retrieval Augmented Generation (RAG)” sai vì “Switch to Retrieval Augmented Generation (RAG)” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Retry evaluation có thể đánh giá độ đầy đủ của câu trả lời trong logic ứng dụng trước khi trả về cho người dùng.</li><li><strong>D. Replace the model with a smaller deployment.:</strong> “Replace the model with a smaller deployment” sai vì “Replace the model with a smaller deployment” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Dùng model deployment nhỏ hơn cũng không phải cách trực tiếp để cải thiện tính đầy đủ.</li></ul>"
  },
  {
    "id": "AI-103-039",
    "exam": "AI-103",
    "number": 39,
    "missingImages": 0,
    "question": "<p>You have a customer support agent built by using the Microsoft Foundry Agent Service. </p><p>The agent calls an Azure OpenAI model deployment.\n</p><p>During load testing, calls intermittently fail and return an HTTP 429 rate limit exceeded error.\n</p><p>You need to handle throttling to reduce call failures and improve reliability under load. </p><p>The solution must remain within the service and model limits.\n</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Create a new thread and retry the calls immediately.</p>",
      "B": "<p>Reduce the number of registered tools.</p>",
      "C": "<p>Implement a retry policy that uses exponential backoff and jitter.</p>",
      "D": "<p>Spit uploaded content into smaller files.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>C là đúng. HTTP 429 cho biết yêu cầu đang bị throttling. Retry với exponential backoff và jitter ngẫu nhiên sẽ giãn các lần thử lại theo thời gian, tránh việc nhiều request cùng retry đồng loạt, từ đó tăng độ tin cậy mà vẫn tôn trọng giới hạn của service và model. Retry ngay lập tức có thể làm throttling nặng hơn. Số lượng tool đã đăng ký và kích thước file tải lên không trực tiếp xử lý tình trạng model bị giới hạn tốc độ request.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Create a new thread and retry the calls immediately.:</strong> “Create a new thread and retry the calls immediately” sai vì “Create a new thread and retry the calls immediately” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Retry với exponential backoff và jitter ngẫu nhiên sẽ giãn các lần thử lại theo thời gian, tránh việc nhiều request cùng retry đồng loạt, từ đó tăng độ tin cậy mà vẫn tôn trọng…</li><li><strong>B. Reduce the number of registered tools.:</strong> “Reduce the number of registered tools” sai vì “Reduce the number of registered tools” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Retry với exponential backoff và jitter ngẫu nhiên sẽ giãn các lần thử lại theo thời gian, tránh việc nhiều request cùng retry đồng loạt, từ đó tăng độ tin cậy mà vẫn tôn trọng…</li><li><strong>D. Spit uploaded content into smaller files.:</strong> “Spit uploaded content into smaller files” sai vì “Spit uploaded content into smaller files” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Retry với exponential backoff và jitter ngẫu nhiên sẽ giãn các lần thử lại theo thời gian, tránh việc nhiều request cùng retry đồng loạt, từ đó tăng độ tin cậy mà vẫn tôn trọng…</li></ul>"
  },
  {
    "id": "AI-103-040",
    "exam": "AI-103",
    "number": 40,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You have a Microsoft Foundry project that contains an agent. </p><p>You use a GitHub Actions workflow for CI/CD. </p><p>You need to configure the workflow to automatically evaluate the agent when a pull request (PR) is created and prevent branches from merging if the evaluation results do NOT meet the defined thresholds. </p><p>How should you configure the workflow? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-40.webp\"/></em></p>",
    "options": {
      "A": "<p>An Azure Login action that uses OpenID Connect (OIDC); Fail</p>",
      "B": "<p>A personal access token (PAT); Lock the target branch</p>",
      "C": "<p>A user-assigned managed identity; Send an alert</p>",
      "D": "<p>An Azure Login action that uses OpenID Connect (OIDC); Send an alert</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Dùng Azure Login action với OpenID Connect (OIDC) của GitHub Actions để lấy Azure credential ngắn hạn mà không phải lưu secret dài hạn như PAT. Khi kết quả evaluation không đạt ngưỡng, workflow phải Fail để required status check của PR bị fail; branch protection sau đó sẽ chặn merge. Lock target branch không phải cơ chế chuẩn để gate PR, còn chỉ gửi alert thì không thể chặn merge.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. A personal access token (PAT); Lock the target branch:</strong> “A personal access token (PAT); Lock the target branch” sai vì “A personal access token (PAT); Lock the target branch” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Dùng Azure Login action với OpenID Connect (OIDC) của GitHub Actions để lấy Azure credential ngắn hạn mà không phải lưu secret dài hạn như PAT.</li><li><strong>C. A user-assigned managed identity; Send an alert:</strong> “A user-assigned managed identity; Send an alert” sai vì “A user-assigned managed identity; Send an alert” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Dùng Azure Login action với OpenID Connect (OIDC) của GitHub Actions để lấy Azure credential ngắn hạn mà không phải lưu secret dài hạn như PAT.</li><li><strong>D. An Azure Login action that uses OpenID Connect (OIDC); Send an alert:</strong> “An Azure Login action that uses OpenID Connect (OIDC); Send an alert” sai vì “An Azure Login action that uses OpenID Connect (OIDC); Send an alert” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Dùng Azure Login action với OpenID Connect (OIDC) của GitHub Actions để lấy Azure credential ngắn hạn mà không phải lưu secret dài hạn như PAT.</li></ul>"
  },
  {
    "id": "AI-103-041",
    "exam": "AI-103",
    "number": 41,
    "missingImages": 0,
    "question": "<p><strong>Note:</strong> This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\n</p><p>You have a Microsoft Foundry project that contains an agent. </p><p>The agent generates summaries from retrieved policy documents.\n</p><p>Users report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content.\n</p><p>You need to improve response completeness.\n</p><p><strong>Solution</strong>: You increase the value of the max_tokens parameter.\n</p><p>Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Nếu câu trả lời bỏ sót các điều khoản vốn đã có trong nội dung được truy xuất, giới hạn output token quá thấp có thể khiến phần tóm tắt bị cắt ngắn. Tăng max_tokens giúp model có đủ dung lượng đầu ra để bao gồm thêm các điều khoản pháp lý bắt buộc. Thay đổi này không bảo đảm tính đầy đủ tuyệt đối trong mọi trường hợp, nhưng nó xử lý nguyên nhân do đầu ra bị cắt ngắn như tình huống đã nêu.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. No:</strong> “No” sai vì “No” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Nếu câu trả lời bỏ sót các điều khoản vốn đã có trong nội dung được truy xuất, giới hạn output token quá thấp có thể khiến phần tóm tắt bị cắt ngắn.</li></ul>"
  },
  {
    "id": "AI-103-042",
    "exam": "AI-103",
    "number": 42,
    "missingImages": 0,
    "question": "<p><strong>Note</strong>: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\n</p><p>You have a Microsoft Foundry project that contains an agent. </p><p>The agent generates summaries from retrieved policy documents.\n</p><p>Users report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content.\n</p><p>You need to improve response completeness.\n</p><p><strong>Solution</strong>: You add a reflection pass that regenerates the response if the required clauses are missing.\n</p><p>Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Reflection pass kiểm tra phần tóm tắt đã tạo với các điều khoản bắt buộc trước khi trả kết quả. Nếu thiếu nội dung cần thiết, ứng dụng có thể tạo lại hoặc chỉnh sửa câu trả lời dựa trên phản hồi đó. Cách này trực tiếp cải thiện tính đầy đủ của câu trả lời, kể cả khi các điều khoản cần thiết đã được truy xuất thành công.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. No:</strong> “No” sai vì “No” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Reflection pass kiểm tra phần tóm tắt đã tạo với các điều khoản bắt buộc trước khi trả kết quả.</li></ul>"
  },
  {
    "id": "AI-103-043",
    "exam": "AI-103",
    "number": 43,
    "missingImages": 0,
    "question": "<p><strong>Note</strong>: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\n</p><p>You have a Microsoft Foundry project that contains an agent. </p><p>The agent generates summaries from retrieved policy documents.\n</p><p>Users report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content.\n</p><p>You need to improve response completeness.\n</p><p><strong>Solution</strong>: You increase the value of the temperature parameter.\n</p><p>Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Tăng temperature làm tăng tính ngẫu nhiên khi lấy mẫu và sự biến thiên của câu trả lời; nó không bảo đảm các điều khoản bắt buộc được đưa vào. Với phần tóm tắt có yêu cầu pháp lý, tính ngẫu nhiên cao hơn còn có thể khiến mức độ bao phủ kém dự đoán hơn. Thay vào đó, nên dùng kiểm tra tính đầy đủ rõ ràng, reflection/retry pass, hướng dẫn cụ thể và giới hạn output token phù hợp.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Yes:</strong> “Yes” sai vì “Yes” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Tăng temperature làm tăng tính ngẫu nhiên khi lấy mẫu và sự biến thiên của câu trả lời</li></ul>"
  },
  {
    "id": "AI-103-044",
    "exam": "AI-103",
    "number": 44,
    "missingImages": 0,
    "question": "<p><strong>Note</strong>: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\n</p><p>You have a Microsoft Foundry project that contains an agent. </p><p>The agent generates summaries from retrieved policy documents.\n</p><p>Users report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content.\n</p><p>You need to improve response completeness.\n</p><p><strong>Solution</strong>: You run an evaluation flow that scores responses for completeness and blocks responses that fall below a defined threshold.\n</p><p>Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Evaluation flow có thể chấm điểm tính đầy đủ của từng câu trả lời trước khi phát hành. Chặn các đầu ra dưới ngưỡng đã định sẽ ngăn những phần tóm tắt pháp lý chưa đầy đủ đến tay người dùng. Flow cũng có thể tạo một cổng để retry hoặc khắc phục, giúp yêu cầu về tính đầy đủ được thực thi thay vì chỉ được theo dõi.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. No:</strong> “No” sai vì “No” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Evaluation flow có thể chấm điểm tính đầy đủ của từng câu trả lời trước khi phát hành.</li></ul>"
  },
  {
    "id": "AI-103-045",
    "exam": "AI-103",
    "number": 45,
    "missingImages": 0,
    "question": "<p>You are creating an image-editing workflow in a Microsoft Foundry project.\nThe workflow must meet the following requirements:\n</p><ul><li>Ensure that background objects can be removed by applying a mask-based inpainting edit.\n</li><li>Preserve the original lighting and style of the edited images.\n</li><li>Use the built-in image editing controls, NOT a custom model.\n</li></ul><p>You need to ensure that image edits apply exclusively inside the masked area.\n</p><p>How should you configure the workflow?</p>",
    "options": {
      "A": "<p>Set generation mode to image_variation and provide the original image as a reference.</p>",
      "B": "<p>Enable text_to_image mode and a prompt describing the desired background removal.</p>",
      "C": "<p>Enable image_to_image mode and a high-strength value to regenerate the full image based on the prompt.</p>",
      "D": "<p>Enable mask_inpainting and supply both the input image and a mask indicating which part of the image to modify.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. Mask inpainting chỉnh sửa ảnh đầu vào chỉ trong vùng được chỉ định bởi mask. Đây là built-in control dành cho việc xóa hoặc thay thế cục bộ, giúp giữ lại ánh sáng, phong cách và toàn bộ pixel bên ngoài mask. Image variation, text-to-image và image-to-image với strength cao có thể làm thay đổi phạm vi ảnh rộng hơn và không giới hạn chỉnh sửa riêng trong vùng mask.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Set generation mode to image_variation and provide the original image as a reference.:</strong> “Set generation mode to image_variation and provide the original image as a reference” sai vì “Set generation mode to image_variation and provide the original image as a reference” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Image variation, text-to-image và image-to-image với strength cao có thể làm thay đổi phạm vi ảnh rộng hơn và không giới hạn chỉnh sửa riêng trong vùng mask.</li><li><strong>B. Enable text_to_image mode and a prompt describing the desired background removal.:</strong> “Enable text_to_image mode and a prompt describing the desired background removal” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Image variation, text-to-image và image-to-image với strength cao có thể làm thay đổi phạm vi ảnh rộng hơn và không giới hạn chỉnh sửa riêng trong vùng mask.</li><li><strong>C. Enable image_to_image mode and a high-strength value to regenerate the full image based on the prompt.:</strong> “Enable image_to_image mode and a high-strength value to regenerate the full image based on the prompt” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Image variation, text-to-image và image-to-image với strength cao có thể làm thay đổi phạm vi ảnh rộng hơn và không giới hạn chỉnh sửa riêng trong vùng mask.</li></ul>"
  },
  {
    "id": "AI-103-046",
    "exam": "AI-103",
    "number": 46,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that generates product marketing images from text prompts.\n</p><p>After publishing several images, the legal team at your company identifies a competitor’s logo on a sign in the background of an image.\n</p><p>You need to remove only the logo, while preserving the rest of the image.\n</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Apply a mask-based inpainting edit to the part of the image that contains the logo.</p>",
      "B": "<p>Increase the prompt guidance strength.</p>",
      "C": "<p>Modify the original prompt to exclude brand names.</p>",
      "D": "<p>Rerun the prompt by using a different random seed.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Mask-based inpainting giới hạn vùng tạo lại vào khu vực logo đã chọn, nên có thể xóa hoặc thay thế logo trong khi giữ nguyên phần ảnh bên ngoài mask. Tăng prompt guidance, sửa prompt hoặc dùng random seed khác sẽ tạo ảnh mới hay thay đổi hành vi sinh ảnh rộng hơn; các cách đó không thể chỉnh riêng logo hiện có một cách đáng tin cậy.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Increase the prompt guidance strength.:</strong> “Increase the prompt guidance strength” sai vì “Increase the prompt guidance strength” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Mask-based inpainting giới hạn vùng tạo lại vào khu vực logo đã chọn, nên có thể xóa hoặc thay thế logo trong khi giữ nguyên phần ảnh bên ngoài mask.</li><li><strong>C. Modify the original prompt to exclude brand names.:</strong> “Modify the original prompt to exclude brand names” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Mask-based inpainting giới hạn vùng tạo lại vào khu vực logo đã chọn, nên có thể xóa hoặc thay thế logo trong khi giữ nguyên phần ảnh bên ngoài mask.</li><li><strong>D. Rerun the prompt by using a different random seed.:</strong> “Rerun the prompt by using a different random seed” sai vì “Rerun the prompt by using a different random seed” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Tăng prompt guidance, sửa prompt hoặc dùng random seed khác sẽ tạo ảnh mới hay thay đổi hành vi sinh ảnh rộng hơn</li></ul>"
  },
  {
    "id": "AI-103-047",
    "exam": "AI-103",
    "number": 47,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent.\n</p><p>The agent ingests scanned PDF vendor invoices that contain tables and embedded QR codes.\n</p><p>The agent must preserve the PDF layout in the extracted output to ensure that downstream processing can reference sections and tables.\n</p><p>You plan to call Azure Content Understanding in Foundry Tools.\n</p><p>You need to extract content and layout elements and detect QR codes without requiring a language model deployment.\n</p><p>Which built-in analyzer should you use?</p>",
    "options": {
      "A": "<p>prebuilt-documentFieldSchema</p>",
      "B": "<p>prebuilt-read</p>",
      "C": "<p>prebuilt-documentSearch</p>",
      "D": "<p>prebuilt-layout</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. Analyzer prebuilt-layout trích xuất nội dung tài liệu cùng các thành phần cấu trúc bố cục như section và table, đồng thời hỗ trợ phát hiện barcode/QR code. Đây là built-in analyzer phù hợp khi xử lý phía sau phải giữ ngữ cảnh layout và không cần model LLM deployment. prebuilt-read tập trung vào trích xuất văn bản, còn documentFieldSchema và documentSearch phục vụ các mục đích khác.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. prebuilt-documentFieldSchema:</strong> “prebuilt-documentFieldSchema” sai vì “prebuilt-documentFieldSchema” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Analyzer prebuilt-layout trích xuất nội dung tài liệu cùng các thành phần cấu trúc bố cục như section và table, đồng thời hỗ trợ phát hiện barcode/QR code.</li><li><strong>B. prebuilt-read:</strong> “prebuilt-read” sai vì “prebuilt-read” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Analyzer prebuilt-layout trích xuất nội dung tài liệu cùng các thành phần cấu trúc bố cục như section và table, đồng thời hỗ trợ phát hiện barcode/QR code.</li><li><strong>C. prebuilt-documentSearch:</strong> “prebuilt-documentSearch” sai vì “prebuilt-documentSearch” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Analyzer prebuilt-layout trích xuất nội dung tài liệu cùng các thành phần cấu trúc bố cục như section và table, đồng thời hỗ trợ phát hiện barcode/QR code.</li></ul>"
  },
  {
    "id": "AI-103-048",
    "exam": "AI-103",
    "number": 48,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent and an image generation model deployment.\nThe agent generates original images from user-supplied product photos.\nYou need to ensure that the generated images maintain the product identity and visual characteristics of the provided photo.\nWhat should you do?</p>",
    "options": {
      "A": "<p>Set the input_fidelity parameter to high.</p>",
      "B": "<p>Apply a groundedness detection filter.</p>",
      "C": "<p>Include a prompt and input image in the request.</p>",
      "D": "<p>Decrease the value of the temperature parameter.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Đặt input_fidelity thành high để ưu tiên giữ lại danh tính và các đặc điểm trực quan của ảnh sản phẩm được cung cấp khi sinh ảnh. Việc gửi prompt cùng input image là cần thiết cho request có điều kiện theo ảnh, nhưng tự nó không chỉ định mức độ cần giữ nguyên đặc điểm ảnh tham chiếu. Groundedness detection dùng để kiểm chứng claim theo nguồn, còn temperature không phải là control cho độ trung thực với ảnh đầu vào.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Apply a groundedness detection filter.:</strong> “Apply a groundedness detection filter” sai vì “Apply a groundedness detection filter” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Groundedness detection dùng để kiểm chứng claim theo nguồn, còn temperature không phải là control cho độ trung thực với ảnh đầu vào.</li><li><strong>C. Include a prompt and input image in the request.:</strong> “Include a prompt and input image in the request” sai vì “Include a prompt and input image in the request” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Việc gửi prompt cùng input image là cần thiết cho request có điều kiện theo ảnh, nhưng tự nó không chỉ định mức độ cần giữ nguyên đặc điểm ảnh tham chiếu.</li><li><strong>D. Decrease the value of the temperature parameter.:</strong> “Decrease the value of the temperature parameter” sai vì “Decrease the value of the temperature parameter” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Đặt input_fidelity thành high để ưu tiên giữ lại danh tính và các đặc điểm trực quan của ảnh sản phẩm được cung cấp khi sinh ảnh.</li></ul>"
  },
  {
    "id": "AI-103-049",
    "exam": "AI-103",
    "number": 49,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You have a Microsoft Foundry project that contains an agent. The agent accepts user-uploaded screenshots and uses a multimodal chat model. </p><p>Some screenshots contain potentially malicious embedded text. </p><p>You need to prevent a prompt injection attack and ensure that third-party content is treated as lower trust. </p><p>How should you configure prompt shields for document attacks? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-49.webp\"/></em></p>",
    "options": {
      "A": "<p>Set action to block; Enable Spotlighting.</p>",
      "B": "<p>Set action to annotate; Create a custom blocklist.</p>",
      "C": "<p>Disable the shield; Use optical character recognition (OCR) to extract the text from the images first.</p>",
      "D": "<p>Set action to block; Use optical character recognition (OCR) to extract the text from the images first.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Đặt document prompt shield action là block để nội dung bị phát hiện là document attack không thể tác động đến agent run. Bật Spotlighting để phân biệt rõ nội dung bên thứ ba không đáng tin với instruction đáng tin cậy, giảm khả năng embedded text bị xem như một lệnh. Annotate không ngăn attack đã phát hiện tiếp tục, disable loại bỏ lớp bảo vệ, còn OCR chỉ trích xuất text chứ không tạo cơ chế phân ranh giới độ tin cậy.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Set action to annotate; Create a custom blocklist.:</strong> “Set action to annotate; Create a custom blocklist” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Đặt document prompt shield action là block để nội dung bị phát hiện là document attack không thể tác động đến agent run.</li><li><strong>C. Disable the shield; Use optical character recognition (OCR) to extract the text from the images first.:</strong> “Disable the shield; Use optical character recognition (OCR) to extract the text from the images first” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Đặt document prompt shield action là block để nội dung bị phát hiện là document attack không thể tác động đến agent run.</li><li><strong>D. Set action to block; Use optical character recognition (OCR) to extract the text from the images first.:</strong> “Set action to block; Use optical character recognition (OCR) to extract the text from the images first” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Đặt document prompt shield action là block để nội dung bị phát hiện là document attack không thể tác động đến agent run.</li></ul>"
  },
  {
    "id": "AI-103-050",
    "exam": "AI-103",
    "number": 50,
    "missingImages": 0,
    "question": "<p>You are deploying a support agent that enables users to upload photos.\nYou need to automatically classify uploaded images for harmful content. The solution must block content based on severity levels.\nWhat should you do?</p>",
    "options": {
      "A": "<p>Apply keyword scanning to optical character recognition (OCR) output by using Azure Vision in Foundry Tools.</p>",
      "B": "<p>Enable prompt shields.</p>",
      "C": "<p>Use blocklists.</p>",
      "D": "<p>Implement image moderation.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. Image moderation phân loại nội dung hình ảnh theo các harm category và trả về severity level để tự động chặn nội dung. OCR keyword scanning chỉ đánh giá text đã trích xuất, prompt shields tập trung vào rủi ro prompt injection, còn blocklists so khớp các từ/thuật ngữ chỉ định thay vì đánh giá harmful visual content theo mức độ nghiêm trọng.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Apply keyword scanning to optical character recognition (OCR) output by using Azure Vision in Foundry Tools.:</strong> “Apply keyword scanning to optical character recognition (OCR) output by using Azure Vision in Foundry Tools” sai vì “Apply keyword scanning to optical character recognition (OCR) output by using Azure Vision in Foundry Tools” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. OCR keyword scanning chỉ đánh giá text đã trích xuất, prompt shields tập trung vào rủi ro prompt injection, còn blocklists so khớp các từ/thuật ngữ chỉ định thay vì đánh giá…</li><li><strong>B. Enable prompt shields.:</strong> “Enable prompt shields” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. OCR keyword scanning chỉ đánh giá text đã trích xuất, prompt shields tập trung vào rủi ro prompt injection, còn blocklists so khớp các từ/thuật ngữ chỉ định thay vì đánh giá…</li><li><strong>C. Use blocklists.:</strong> “Use blocklists” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Image moderation phân loại nội dung hình ảnh theo các harm category và trả về severity level để tự động chặn nội dung.</li></ul>"
  },
  {
    "id": "AI-103-051",
    "exam": "AI-103",
    "number": 51,
    "missingImages": 0,
    "question": "<p>You have an app named App1 that uses a Microsoft Foundry multimodal model deployment.\n</p><p>App1 runs optical character recognition (OCR) on uploaded images and appends the OCR output to the prompt as additional context.\n</p><p>Some uploaded images contain embedded text.\n</p><p>You need to prevent potentially malicious instructions from being processed by the model.\n</p><p>What should you use?</p>",
    "options": {
      "A": "<p>image moderation</p>",
      "B": "<p>prompt shields for documents</p>",
      "C": "<p>protected material text</p>",
      "D": "<p>prompt shields for user prompts</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. OCR output từ ảnh được tải lên là nội dung tài liệu bên thứ ba, có thể chứa indirect prompt-injection instruction. Prompt shields for documents được thiết kế để phát hiện loại instruction độc hại này trong tài liệu và nội dung không đáng tin trước khi model xử lý. Image moderation đánh giá harmful visual content, protected material text phát hiện text có bản quyền, còn prompt shields for user prompts dành cho instruction trực tiếp do người dùng nhập.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. image moderation:</strong> “image moderation” sai vì “image moderation” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Image moderation đánh giá harmful visual content, protected material text phát hiện text có bản quyền, còn prompt shields for user prompts dành cho instruction trực tiếp do người…</li><li><strong>C. protected material text:</strong> “protected material text” sai vì “protected material text” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Image moderation đánh giá harmful visual content, protected material text phát hiện text có bản quyền, còn prompt shields for user prompts dành cho instruction trực tiếp do người…</li><li><strong>D. prompt shields for user prompts:</strong> “prompt shields for user prompts” sai vì “prompt shields for user prompts” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Image moderation đánh giá harmful visual content, protected material text phát hiện text có bản quyền, còn prompt shields for user prompts dành cho instruction trực tiếp do người…</li></ul>"
  },
  {
    "id": "AI-103-052",
    "exam": "AI-103",
    "number": 52,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent.\n</p><p>You need to process mixed-format documents that contain scanned text, tables, and multicolumn layouts.</p><p>The extracted content must preserve the document structure and be converted into the Markdown format for downstream reasoning.\n</p><p>What should you configure first?</p>",
    "options": {
      "A": "<p>an Azure Language in Foundry Tools text analysis model deployment</p>",
      "B": "<p>a generative chat completion request</p>",
      "C": "<p>an Azure OpenAI Responses API call that uses a multimodal model</p>",
      "D": "<p>an Azure Content Understanding in Foundry Tools analyzer</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. Hãy cấu hình Azure Content Understanding analyzer trước để trích xuất scanned text và cấu trúc layout—bao gồm table và nội dung nhiều cột—rồi tạo Markdown có cấu trúc cho bước reasoning phía sau. Azure Language text analysis không phải pipeline trích xuất tài liệu giữ nguyên layout. Chat completion và multimodal Responses API có thể reasoning trên nội dung, nhưng không phải built-in bước phân tích tài liệu đầu tiên để chuyển đổi cấu trúc một cách đáng tin cậy.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. an Azure Language in Foundry Tools text analysis model deployment:</strong> “an Azure Language in Foundry Tools text analysis model deployment” sai vì “an Azure Language in Foundry Tools text analysis model deployment” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Hãy cấu hình Azure Content Understanding analyzer trước để trích xuất scanned text và cấu trúc layout—bao gồm table và nội dung nhiều cột—rồi tạo Markdown có cấu trúc cho bước…</li><li><strong>B. a generative chat completion request:</strong> “a generative chat completion request” sai vì “a generative chat completion request” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Hãy cấu hình Azure Content Understanding analyzer trước để trích xuất scanned text và cấu trúc layout—bao gồm table và nội dung nhiều cột—rồi tạo Markdown có cấu trúc cho bước…</li><li><strong>C. an Azure OpenAI Responses API call that uses a multimodal model:</strong> “an Azure OpenAI Responses API call that uses a multimodal model” sai vì “an Azure OpenAI Responses API call that uses a multimodal model” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Hãy cấu hình Azure Content Understanding analyzer trước để trích xuất scanned text và cấu trúc layout—bao gồm table và nội dung nhiều cột—rồi tạo Markdown có cấu trúc cho bước…</li></ul>"
  },
  {
    "id": "AI-103-053",
    "exam": "AI-103",
    "number": 53,
    "missingImages": 0,
    "question": "<p>You have an application that processes scanned PDF invoices. </p><p>The invoices have varied layouts and include multipage tables.\n</p><p>You have a pipeline that uses optical character recognition (OCR) and extracts totals and invoice numbers. </p><p>The results are often incorrect because the document structure is ignored.\n</p><p>You need to implement a solution that provides OCR, layout analysis, and template-generalizing field extraction. </p><p>The solution must NOT require training a custom model. </p><p>The solution must minimize administrative effort.\n</p><p>What should you include in the solution?</p>",
    "options": {
      "A": "<p>Azure Language in Foundry Tools</p>",
      "B": "<p>Azure Content Understanding in Foundry Tools</p>",
      "C": "<p>an Azure Machine Learning model</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Azure Content Understanding cung cấp sẵn OCR, layout analysis và field extraction có thể khái quát trên các template tài liệu khác nhau, bao gồm layout hóa đơn phức tạp và nhiều trang. Giải pháp này không cần huấn luyện hay vận hành custom model, nên giảm công sức quản trị. Azure Language tập trung vào phân tích văn bản hơn là layout tài liệu có cấu trúc và field extraction. Azure Machine Learning model sẽ đòi hỏi thêm công việc phát triển, huấn luyện và vận hành.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Azure Language in Foundry Tools:</strong> “Azure Language in Foundry Tools” sai vì “Azure Language in Foundry Tools” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure Content Understanding cung cấp sẵn OCR, layout analysis và field extraction có thể khái quát trên các template tài liệu khác nhau, bao gồm layout hóa đơn phức tạp và nhiều…</li><li><strong>C. an Azure Machine Learning model:</strong> “an Azure Machine Learning model” sai vì “an Azure Machine Learning model” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure Machine Learning model sẽ đòi hỏi thêm công việc phát triển, huấn luyện và vận hành.</li></ul>"
  },
  {
    "id": "AI-103-054",
    "exam": "AI-103",
    "number": 54,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent.\n</p><p>The agent uses a knowledge source built from documents stored in Azure Blob Storage. </p><p>The documents include digitally scanned PDFs that contain multipage tables.\n</p><p>You have an ingestion job that extracts only plain text, causing loss of table structure, headings, and page-number metadata.\n</p><p>Users frequently ask questions that require the retrieval of specific table rows across the pages.\n</p><p>You need to configure an ingestion job for a Retrieval Augmented Generation (RAG) pipeline that performs optical character recognition (OCR) on scanned PDFs, preserves tables and headings as structure-aware chunks, and stores page-number metadata with each chunk.\nHow should you configure the ingestion job?</p>",
    "options": {
      "A": "<p>Use advanced data parsing to reingest the documents.</p>",
      "B": "<p>Use OCR and page-level chunking.</p>",
      "C": "<p>Use page-level OCR extraction and store each page as a single chunk.</p>",
      "D": "<p>Use basic parsing and fixed-size chunking.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Advanced data parsing reingest tài liệu với xử lý nhận biết cấu trúc, bao gồm OCR cho scanned PDF, bảo toàn heading và table, đồng thời lưu page-level metadata cho các chunk. Điều này hỗ trợ truy xuất đúng row trong bảng mà vẫn giữ context của tài liệu. OCR với page-level chunking thông thường hoặc một chunk cho cả trang không bảo toàn đủ cấu trúc table và heading cần cho truy xuất có mục tiêu. Basic parsing và fixed-size chunking vẫn giữ hạn chế chỉ có plain text.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Use OCR and page-level chunking.:</strong> “Use OCR and page-level chunking” sai vì “Use OCR and page-level chunking” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Advanced data parsing reingest tài liệu với xử lý nhận biết cấu trúc, bao gồm OCR cho scanned PDF, bảo toàn heading và table, đồng thời lưu page-level metadata cho các chunk.</li><li><strong>C. Use page-level OCR extraction and store each page as a single chunk.:</strong> “Use page-level OCR extraction and store each page as a single chunk” sai vì “Use page-level OCR extraction and store each page as a single chunk” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Advanced data parsing reingest tài liệu với xử lý nhận biết cấu trúc, bao gồm OCR cho scanned PDF, bảo toàn heading và table, đồng thời lưu page-level metadata cho các chunk.</li><li><strong>D. Use basic parsing and fixed-size chunking.:</strong> “Use basic parsing and fixed-size chunking” sai vì “Use basic parsing and fixed-size chunking” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Basic parsing và fixed-size chunking vẫn giữ hạn chế chỉ có plain text.</li></ul>"
  },
  {
    "id": "AI-103-055",
    "exam": "AI-103",
    "number": 55,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent.\n</p><p>The agent uses Azure AI Search as the retriever.\n</p><p>You plan to ingest PDF into an Azure AI Search index to ensure that the agent can ground responses in texts in both documents and embedded images.\n</p><p>Users require citations that link to the source files.\n</p><p>You need to ensure that during indexing, the images are extracted into a structure that can be used as input for the built-in optical character recognition (OCR) skill.\n</p><p>Which indexing approach should you use?</p>",
    "options": {
      "A": "<p>an indexer to extract image data into a normalized_images collection</p>",
      "B": "<p>a Shaper skill to restructure the OCR input</p>",
      "C": "<p>a skillset to run the OCR skill directly against the content field of the index</p>",
      "D": "<p>the outputFieldMappings parameter to write image data to a searchable field</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Hãy cấu hình indexer trích xuất ảnh nhúng vào collection normalized_images. Built-in OCR skill sau đó có thể xử lý từng normalized image trong quá trình skillset enrichment, đồng thời metadata file nguồn được giữ lại để tạo citation. Shaper skill có thể định hình lại enrichment output sau khi trích xuất nhưng không tự trích ảnh. Content field chứa text chứ không phải image object; outputFieldMappings ghi enrichment output vào index field chứ không tạo normalized image sẵn sàng cho OCR.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. a Shaper skill to restructure the OCR input:</strong> “a Shaper skill to restructure the OCR input” sai vì “a Shaper skill to restructure the OCR input” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Built-in OCR skill sau đó có thể xử lý từng normalized image trong quá trình skillset enrichment, đồng thời metadata file nguồn được giữ lại để tạo citation.</li><li><strong>C. a skillset to run the OCR skill directly against the content field of the index:</strong> “a skillset to run the OCR skill directly against the content field of the index” sai vì “a skillset to run the OCR skill directly against the content field of the index” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Built-in OCR skill sau đó có thể xử lý từng normalized image trong quá trình skillset enrichment, đồng thời metadata file nguồn được giữ lại để tạo citation.</li><li><strong>D. the outputFieldMappings parameter to write image data to a searchable field:</strong> “the outputFieldMappings parameter to write image data to a searchable field” sai vì “the outputFieldMappings parameter to write image data to a searchable field” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Hãy cấu hình indexer trích xuất ảnh nhúng vào collection normalized_images.</li></ul>"
  },
  {
    "id": "AI-103-056",
    "exam": "AI-103",
    "number": 56,
    "missingImages": 0,
    "question": "<p>You need to recommend an invoice review solution that resolves the issue reported by the finance department.\n</p><p>What should you include in the recommendation?</p>",
    "options": {
      "A": "<p>chat completions</p>",
      "B": "<p>Azure Document Intelligence in Foundry Tools</p>",
      "C": "<p>Azure Content Understanding in Foundry Tools</p>",
      "D": "<p>Image Analysis</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>C là đúng. Azure Content Understanding trong Foundry Tools được thiết kế để phân tích cả bố cục trực quan và nội dung văn bản của tài liệu phức tạp, bao gồm hóa đơn có bảng, logo và layout thay đổi. Nó hỗ trợ trích xuất thông tin có cấu trúc để đối chiếu chi tiết hóa đơn với điều khoản hợp đồng nhà cung cấp. Chat completions và Image Analysis riêng lẻ không cung cấp pipeline document understanding cần thiết. Azure Document Intelligence có thể trích xuất field tài liệu, nhưng Azure Content Understanding là capability của Foundry Tools trực tiếp đáp ứng yêu cầu phân tích hóa đơn đa phương thức trong tình huống này.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. chat completions:</strong> “chat completions” sai vì “chat completions” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure Content Understanding trong Foundry Tools được thiết kế để phân tích cả bố cục trực quan và nội dung văn bản của tài liệu phức tạp, bao gồm hóa đơn có bảng, logo và layout…</li><li><strong>B. Azure Document Intelligence in Foundry Tools:</strong> “Azure Document Intelligence in Foundry Tools” sai vì “Azure Document Intelligence in Foundry Tools” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure Document Intelligence có thể trích xuất field tài liệu, nhưng Azure Content Understanding là capability của Foundry Tools trực tiếp đáp ứng yêu cầu phân tích hóa đơn đa…</li><li><strong>D. Image Analysis:</strong> “Image Analysis” sai vì “Image Analysis” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure Content Understanding trong Foundry Tools được thiết kế để phân tích cả bố cục trực quan và nội dung văn bản của tài liệu phức tạp, bao gồm hóa đơn có bảng, logo và layout…</li></ul>"
  },
  {
    "id": "AI-103-057",
    "exam": "AI-103",
    "number": 57,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent.\nThe knowledge source for the agent is a set of scanned PDF troubleshooting guides stored in Azure Blob Storage. </p><p>The guide pages contain two-column layouts and tables.\n</p><p>You use Azure Content Understanding in Foundry Tools to process the PDFs.\n</p><p>You plan to ingest the processed content into an index for Retrieval Augmented Generation (RAG) and store extracted fields for downstream automation.\n</p><p>Stakeholders must be able to verify where each extracted field value came from in the original PDF and route low-reliability extractions for manual review.\n</p><p>You need to ensure that the Content Understanding document analyzer output includes a per-field confidence score and source grounding to locations within the source document.\n</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Set enableSegment to true.</p>",
      "B": "<p>Provide labeled samples.</p>",
      "C": "<p>Enable estimateFieldSourceAndConfidence.</p>",
      "D": "<p>Configure the analyzer to use generative extraction for all fields.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>C là đúng. Bật estimateFieldSourceAndConfidence để output có, cho từng extracted field, confidence score ước lượng và source grounding chỉ đến vị trí tương ứng trong tài liệu gốc. Nhờ đó stakeholder có thể kiểm tra provenance và chuyển kết quả confidence thấp sang manual review. Segmentation kiểm soát việc tách tài liệu, labeled samples dùng cho huấn luyện hoặc hướng dẫn, còn chỉ dùng generative extraction không bảo đảm có vị trí nguồn và confidence estimate theo từng field.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Set enableSegment to true.:</strong> “Set enableSegment to true” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Bật estimateFieldSourceAndConfidence để output có, cho từng extracted field, confidence score ước lượng và source grounding chỉ đến vị trí tương ứng trong tài liệu gốc.</li><li><strong>B. Provide labeled samples.:</strong> “Provide labeled samples” sai vì “Provide labeled samples” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Segmentation kiểm soát việc tách tài liệu, labeled samples dùng cho huấn luyện hoặc hướng dẫn, còn chỉ dùng generative extraction không bảo đảm có vị trí nguồn và confidence…</li><li><strong>D. Configure the analyzer to use generative extraction for all fields.:</strong> “Configure the analyzer to use generative extraction for all fields” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Segmentation kiểm soát việc tách tài liệu, labeled samples dùng cho huấn luyện hoặc hướng dẫn, còn chỉ dùng generative extraction không bảo đảm có vị trí nguồn và confidence…</li></ul>"
  },
  {
    "id": "AI-103-058",
    "exam": "AI-103",
    "number": 58,
    "missingImages": 0,
    "question": "<p>You are building a speech processing solution in Microsoft Foundry for a customer support platform.\n</p><p>The platform will transcribe live phone calls, so that supervisors at your company can view call transcripts and detect issues while the calls are in progress. </p><p>The call audio will arrive as a continuous stream from the telephony system.\n</p><p>You need to ensure that the call transcripts appear within only a few seconds of the audio stream.\n</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Use text to speech by using a custom neural voice.</p>",
      "B": "<p>Use speech translation to generate the transcripts into multiple languages.</p>",
      "C": "<p>Run a batch transcription job on recorded audio files.</p>",
      "D": "<p>Use real-time speech to text to process streaming audio input.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. Real-time speech to text được thiết kế cho audio stream liên tục và trả về kết quả transcript tạm thời lẫn cuối cùng với độ trễ thấp, giúp supervisor xem transcript cuộc gọi chỉ sau vài giây. Batch transcription xử lý bản ghi đã hoàn tất nên không phù hợp với cuộc gọi đang diễn ra. Text to speech tạo audio chứ không chuyển âm thanh thành văn bản, còn speech translation bổ sung dịch ngôn ngữ nhưng không phải yêu cầu của tình huống này.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Use text to speech by using a custom neural voice.:</strong> “Use text to speech by using a custom neural voice” sai vì “Use text to speech by using a custom neural voice” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Real-time speech to text được thiết kế cho audio stream liên tục và trả về kết quả transcript tạm thời lẫn cuối cùng với độ trễ thấp, giúp supervisor xem transcript cuộc gọi chỉ…</li><li><strong>B. Use speech translation to generate the transcripts into multiple languages.:</strong> “Use speech translation to generate the transcripts into multiple languages” sai vì “Use speech translation to generate the transcripts into multiple languages” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Text to speech tạo audio chứ không chuyển âm thanh thành văn bản, còn speech translation bổ sung dịch ngôn ngữ nhưng không phải yêu cầu của tình huống này.</li><li><strong>C. Run a batch transcription job on recorded audio files.:</strong> “Run a batch transcription job on recorded audio files” sai vì “Run a batch transcription job on recorded audio files” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Real-time speech to text được thiết kế cho audio stream liên tục và trả về kết quả transcript tạm thời lẫn cuối cùng với độ trễ thấp, giúp supervisor xem transcript cuộc gọi chỉ…</li></ul>"
  },
  {
    "id": "AI-103-059",
    "exam": "AI-103",
    "number": 59,
    "missingImages": 0,
    "question": "<p>You are creating an agent workflow in a Microsoft Foundry project to support natural voice interactions.\n</p><p>The agent must receive continuous audio input, convert the input into text for reasoning, and then return spoken responses to a user. </p><p>The workflow must meet the following requirements:\n</p><ul><li>Support turn-taking dynamics, where the agent begins to generate the speech output before the user finishes speaking.\n</li><li>Operate with low latency to maintain conversational experience.\n</li><li>You need to enable both speech to text and text to speech in a real-time agent interaction.\n</li></ul><p>What should you do?</p>",
    "options": {
      "A": "<p>Use batch transcription to convert the audio input and return text responses from the agent.</p>",
      "B": "<p>Use real-time speech to text for incoming audio and text to speech for agent responses.</p>",
      "C": "<p>Use an embeddings model to encode the audio, and then decode the audio into text and speech.</p>",
      "D": "<p>Use speech translation to convert the audio into another language and return the translated text.</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Real-time speech to text xử lý audio stream đầu vào liên tục với độ trễ thấp, còn text to speech chuyển câu trả lời đã tạo của agent thành âm thanh. Kết hợp lại, chúng hỗ trợ workflow tương tác bằng giọng nói với streaming input và spoken output, bao gồm turn-taking có phản hồi nhanh. Batch transcription phải chờ audio đã ghi, embeddings không cung cấp speech recognition hay speech synthesis, còn speech translation không cần thiết khi mục tiêu là tương tác giọng nói trong cùng ngôn ngữ.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Use batch transcription to convert the audio input and return text responses from the agent.:</strong> “Use batch transcription to convert the audio input and return text responses from the agent” sai vì “Use batch transcription to convert the audio input and return text responses from the agent” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Real-time speech to text xử lý audio stream đầu vào liên tục với độ trễ thấp, còn text to speech chuyển câu trả lời đã tạo của agent thành âm thanh.</li><li><strong>C. Use an embeddings model to encode the audio, and then decode the audio into text and speech.:</strong> “Use an embeddings model to encode the audio, and then decode the audio into text and speech” sai vì “Use an embeddings model to encode the audio, and then decode the audio into text and speech” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Real-time speech to text xử lý audio stream đầu vào liên tục với độ trễ thấp, còn text to speech chuyển câu trả lời đã tạo của agent thành âm thanh.</li><li><strong>D. Use speech translation to convert the audio into another language and return the translated text.:</strong> “Use speech translation to convert the audio into another language and return the translated text” sai vì “Use speech translation to convert the audio into another language and return the translated text” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Real-time speech to text xử lý audio stream đầu vào liên tục với độ trễ thấp, còn text to speech chuyển câu trả lời đã tạo của agent thành âm thanh.</li></ul>"
  },
  {
    "id": "AI-103-060",
    "exam": "AI-103",
    "number": 60,
    "missingImages": 0,
    "question": "<p>You have an application named App1 that uses Azure Speech in Foundry Tools to transcribe live calls.\n</p><p>Transcript segments often contain both English and Spanish. </p><p>App1 sends each segment to Azure Translator in Foundry Tools to translate to another language.\n</p><p>Sometimes, mixed-language segments result in incomplete or incorrect translations.\n</p><p>You need to reduce translation errors. </p><p>The solution must ensure that the entire transcript is translated successfully.</p><p>\nWhat should you do before sending the segments to Translator?</p>",
    "options": {
      "A": "<p>Use document translation to translate the entire transcript as a single document.</p>",
      "B": "<p>Split the mixed-language segments into single-language segments and translate each segment separately.</p>",
      "C": "<p>Enable automatic language detection for the translation request.</p>",
      "D": "<p>Specify English as the source language in the translation request for all the segments.</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Hãy tách segment có nhiều ngôn ngữ nguồn thành các đơn vị chỉ có một ngôn ngữ trước khi dịch. Khi đó Translator có source language nhất quán cho từng request và tránh việc một phần mixed-language segment bị dịch sai hoặc bỏ sót. Automatic language detection có thể nhận diện ngôn ngữ chủ đạo của request nhưng không giải quyết đáng tin cậy nhiều ngôn ngữ trong cùng segment. Đặt English cho tất cả segment sẽ xử lý sai nội dung tiếng Tây Ban Nha, còn document translation không phù hợp với các live transcript segment có độ trễ thấp.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Use document translation to translate the entire transcript as a single document.:</strong> “Use document translation to translate the entire transcript as a single document” sai vì “Use document translation to translate the entire transcript as a single document” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Đặt English cho tất cả segment sẽ xử lý sai nội dung tiếng Tây Ban Nha, còn document translation không phù hợp với các live transcript segment có độ trễ thấp.</li><li><strong>C. Enable automatic language detection for the translation request.:</strong> “Enable automatic language detection for the translation request” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Automatic language detection có thể nhận diện ngôn ngữ chủ đạo của request nhưng không giải quyết đáng tin cậy nhiều ngôn ngữ trong cùng segment.</li><li><strong>D. Specify English as the source language in the translation request for all the segments.:</strong> “Specify English as the source language in the translation request for all the segments” sai vì “Specify English as the source language in the translation request for all the segments” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Khi đó Translator có source language nhất quán cho từng request và tránh việc một phần mixed-language segment bị dịch sai hoặc bỏ sót.</li></ul>"
  },
  {
    "id": "AI-103-061",
    "exam": "AI-103",
    "number": 61,
    "missingImages": 0,
    "question": "<p>You need to configure an indexing pipeline for Agent1 to retrieve the relevant product information in storage1. </p><p>The solution must meet the technical requirement.\n</p><p>Which two built-in skills should you use? </p><p>Each correct answer presents part of the solution.\n</p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>Azure OpenAI Embedding</p>",
      "B": "<p>Entity Recognition</p>",
      "C": "<p>Text Split</p>",
      "D": "<p>Merge</p>",
      "E": "<p>Language Detection</p>",
      "F": "<p>key phrase extraction</p>"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A và C là đúng. Text Split skill chia nội dung product sheet thành các chunk phù hợp, còn Azure OpenAI Embedding skill tạo vector representation cho các chunk đó. Kết hợp lại, chúng đáp ứng yêu cầu semantic search và vector search để Agent1 truy xuất thông tin sản phẩm liên quan cho câu hỏi ngôn ngữ tự nhiên. Entity Recognition, Merge, Language Detection và key phrase extraction có thể làm giàu văn bản nhưng không tạo chunked vector index mà tình huống yêu cầu.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Entity Recognition:</strong> “Entity Recognition” sai vì “Entity Recognition” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Text Split skill chia nội dung product sheet thành các chunk phù hợp, còn Azure OpenAI Embedding skill tạo vector representation cho các chunk đó.</li><li><strong>D. Merge:</strong> “Merge” sai vì “Merge” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Text Split skill chia nội dung product sheet thành các chunk phù hợp, còn Azure OpenAI Embedding skill tạo vector representation cho các chunk đó.</li><li><strong>E. Language Detection:</strong> “Language Detection” sai vì “Language Detection” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Text Split skill chia nội dung product sheet thành các chunk phù hợp, còn Azure OpenAI Embedding skill tạo vector representation cho các chunk đó.</li><li><strong>F. key phrase extraction:</strong> “key phrase extraction” sai vì “key phrase extraction” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Text Split skill chia nội dung product sheet thành các chunk phù hợp, còn Azure OpenAI Embedding skill tạo vector representation cho các chunk đó.</li></ul>"
  },
  {
    "id": "AI-103-062",
    "exam": "AI-103",
    "number": 62,
    "missingImages": 0,
    "question": "<p>You need to recommend a solution to support the planned changes and technical requirements for Agent1 to use the product information stored in storage1.\n</p><p>What should you include in the recommendation?</p>",
    "options": {
      "A": "<p>Azure Translator in Foundry Tools</p>",
      "B": "<p>Grounding with Bing Search</p>",
      "C": "<p>Azure AI Search</p>",
      "D": "<p>Azure Document intelligence in Foundry Tools</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>C là đúng. Azure AI Search cung cấp semantic và vector search index cần thiết để truy xuất nội dung liên quan từ product sheet trong storage1 và grounding câu trả lời ngôn ngữ tự nhiên của Agent1. Azure Translator không cung cấp retrieval. Grounding with Bing Search dùng cho nội dung web công khai, không phải tài liệu sản phẩm nội bộ của Contoso. Azure Document Intelligence có thể trích xuất nội dung tài liệu nhưng tự nó không cung cấp semantic/vector retrieval index theo yêu cầu.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Azure Translator in Foundry Tools:</strong> “Azure Translator in Foundry Tools” sai vì “Azure Translator in Foundry Tools” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure Translator không cung cấp retrieval.</li><li><strong>B. Grounding with Bing Search:</strong> “Grounding with Bing Search” sai vì “Grounding with Bing Search” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Grounding with Bing Search dùng cho nội dung web công khai, không phải tài liệu sản phẩm nội bộ của Contoso.</li><li><strong>D. Azure Document intelligence in Foundry Tools:</strong> “Azure Document intelligence in Foundry Tools” sai vì “Azure Document intelligence in Foundry Tools” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure Document Intelligence có thể trích xuất nội dung tài liệu nhưng tự nó không cung cấp semantic/vector retrieval index theo yêu cầu.</li></ul>"
  },
  {
    "id": "AI-103-063",
    "exam": "AI-103",
    "number": 63,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project named Project1.\n</p><p>Project1 contains an application that processes PDF vendor invoices.\n</p><p>You need to configure Azure Document Intelligence in Foundry Tools to generate a Markdown output that preserves the sections and table structure of the PDFs. </p><p>The solution must minimize development effort.\n</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Configure output=figures when you analyze the PDF.</p>",
      "B": "<p>Configure content=markdown when you analyze the document.</p>",
      "C": "<p>Increase the confidence threshold.</p>",
      "D": "<p>Set the output_content_format=ContentFormat.MARKDOWN value.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. Hãy đặt output_content_format thành ContentFormat.MARKDOWN khi phân tích tài liệu. Built-in Markdown output giữ lại cấu trúc như section và table, đồng thời tránh phải tự hậu xử lý. output=figures yêu cầu figure output chứ không phải structured Markdown; content=markdown không phải configuration parameter phù hợp; còn confidence threshold ảnh hưởng việc chấp nhận kết quả trích xuất chứ không thay đổi output format.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Configure output=figures when you analyze the PDF.:</strong> “Configure output=figures when you analyze the PDF” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. output=figures yêu cầu figure output chứ không phải structured Markdown</li><li><strong>B. Configure content=markdown when you analyze the document.:</strong> “Configure content=markdown when you analyze the document” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. content=markdown không phải configuration parameter phù hợp</li><li><strong>C. Increase the confidence threshold.:</strong> “Increase the confidence threshold” sai vì “Increase the confidence threshold” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. còn confidence threshold ảnh hưởng việc chấp nhận kết quả trích xuất chứ không thay đổi output format.</li></ul>"
  },
  {
    "id": "AI-103-064",
    "exam": "AI-103",
    "number": 64,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that ingests scanned PDF invoices stored in Azure Blob Storage. </p><p>Each invoice contains printed fine items and has a table-based layout.\n</p><p>Extracted results are stored as structured JSON and used as grounding data for an agent in a Retrieval Augmented Generation (RAG) solution.\n</p><p>You need to create a single analyzer that meets the following requirements:\n</p><ul><li>Extracts the invoice number, invoice date, vendor name, and total amount across varying templates\n</li><li>Returns confidence scores so that results with confidence below 0.80 can be routed for supervisor review\n</li></ul><p>What should you use?</p>",
    "options": {
      "A": "<p>a Foundry agent that has groundedness guardrails enabled to extract invoice fields and confidence scores</p>",
      "B": "<p>a custom Azure Content Understanding in Foundry Tools analyzer that defines the required fields as the extracted fields and the returned confidence scores for routing</p>",
      "C": "<p>the Azure Content Understanding in Foundry Tools prebuilt-layout analyzer</p>",
      "D": "<p>the Azure Content Understanding in Foundry Tools prebuilt-documentSearch analyzer and search.score from the Azure AI Search results for routing</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Custom Azure Content Understanding analyzer cho phép định nghĩa các invoice field cần trích xuất trên nhiều template khác nhau và trả về confidence value theo field để route record dưới ngưỡng 0.80. Groundedness guardrail đánh giá câu trả lời của model có được hỗ trợ bởi nguồn hay không; nó không phải công cụ trích xuất structured invoice field. Prebuilt-layout analyzer trích xuất layout element nhưng không định nghĩa business field cần thiết. Azure AI Search search.score đo độ liên quan khi retrieval, không phải confidence của invoice field đã trích xuất.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. a Foundry agent that has groundedness guardrails enabled to extract invoice fields and confidence scores:</strong> “a Foundry agent that has groundedness guardrails enabled to extract invoice fields and confidence scores” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Custom Azure Content Understanding analyzer cho phép định nghĩa các invoice field cần trích xuất trên nhiều template khác nhau và trả về confidence value theo field để route…</li><li><strong>C. the Azure Content Understanding in Foundry Tools prebuilt-layout analyzer:</strong> “the Azure Content Understanding in Foundry Tools prebuilt-layout analyzer” sai vì “the Azure Content Understanding in Foundry Tools prebuilt-layout analyzer” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Custom Azure Content Understanding analyzer cho phép định nghĩa các invoice field cần trích xuất trên nhiều template khác nhau và trả về confidence value theo field để route…</li><li><strong>D. the Azure Content Understanding in Foundry Tools prebuilt-documentSearch analyzer and search.score from the Azure AI Search results for routing:</strong> “the Azure Content Understanding in Foundry Tools prebuilt-documentSearch analyzer and search.score from the Azure AI Search results for routing” sai vì “the Azure Content Understanding in Foundry Tools prebuilt-documentSearch analyzer and search.score from the Azure AI Search results for routing” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Custom Azure Content Understanding analyzer cho phép định nghĩa các invoice field cần trích xuất trên nhiều template khác nhau và trả về confidence value theo field để route…</li></ul>"
  },
  {
    "id": "AI-103-065",
    "exam": "AI-103",
    "number": 65,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that uses Azure AI Search to ground an agent in internal documentation.\n</p><p>After a recent content update, users report that the agent’s answers have become less accurate.\n</p><p>You need to identify whether the retrieved content is negatively influencing the model’s generated responses.\n</p><p>Which observability signal should you review?</p>",
    "options": {
      "A": "<p>indexer status and failure history</p>",
      "B": "<p>latency breakdown traces</p>",
      "C": "<p>prediction drift metrics</p>",
      "D": "<p>groundedness evaluation metrics</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. Groundedness evaluation metrics đánh giá liệu câu trả lời được tạo có được hỗ trợ bởi retrieved context hay không. Xem các metric này sẽ cho biết liệu nội dung đã cập nhật được truy xuất có đang dẫn đến câu trả lời không được hỗ trợ hoặc thiếu chính xác không. Indexer status chỉ ra ingestion failure, latency trace chỉ ra bottleneck về thời gian, còn prediction drift metric liên quan đến thay đổi hành vi của predictive model thay vì grounding của generative response.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. indexer status and failure history:</strong> “indexer status and failure history” sai vì “indexer status and failure history” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Indexer status chỉ ra ingestion failure, latency trace chỉ ra bottleneck về thời gian, còn prediction drift metric liên quan đến thay đổi hành vi của predictive model thay vì…</li><li><strong>B. latency breakdown traces:</strong> “latency breakdown traces” sai vì “latency breakdown traces” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Groundedness evaluation metrics đánh giá liệu câu trả lời được tạo có được hỗ trợ bởi retrieved context hay không.</li><li><strong>C. prediction drift metrics:</strong> “prediction drift metrics” sai vì “prediction drift metrics” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Groundedness evaluation metrics đánh giá liệu câu trả lời được tạo có được hỗ trợ bởi retrieved context hay không.</li></ul>"
  },
  {
    "id": "AI-103-066",
    "exam": "AI-103",
    "number": 66,
    "missingImages": 0,
    "question": "<p>You need to ensure that the marketing department can generate videos by using the model deployed to Project2.</p><p>How should you complete the Python code? </p><p>To answer, select the appropriate options in the answer area.</p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-66.webp\"/></em></p>",
    "options": {
      "A": "<p>create; retrieve</p>",
      "B": "<p>list; download_content</p>",
      "C": "<p>retrieve; create</p>",
      "D": "<p>download_content; list</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Gọi client.videos.create để gửi request tạo video bất đồng bộ. Video object trả về sau đó được polling bằng client.videos.retrieve(video.id) cho đến khi status là completed, failed hoặc cancelled. list trả về một collection thay vì status của một video cụ thể, còn download_content chỉ dùng sau khi tạo xong nếu cần tải nội dung video xuống.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. list; download_content:</strong> “list; download_content” sai vì “list; download_content” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. list trả về một collection thay vì status của một video cụ thể, còn download_content chỉ dùng sau khi tạo xong nếu cần tải nội dung video xuống.</li><li><strong>C. retrieve; create:</strong> “retrieve; create” sai vì “retrieve; create” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. id) cho đến khi status là completed, failed hoặc cancelled.</li><li><strong>D. download_content; list:</strong> “download_content; list” sai vì “download_content; list” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. list trả về một collection thay vì status của một video cụ thể, còn download_content chỉ dùng sau khi tạo xong nếu cần tải nội dung video xuống.</li></ul>"
  },
  {
    "id": "AI-103-067",
    "exam": "AI-103",
    "number": 67,
    "missingImages": 0,
    "question": "<p>You need to configure personalized user interactions for Agent1. </p><p>The solution must meet the business requirements.\n</p><p>What should you include in the solution?</p>",
    "options": {
      "A": "<p>knowledge</p>",
      "B": "<p>memory</p>",
      "C": "<p>guardrails</p>",
      "D": "<p>tools</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Memory cho phép Agent1 giữ conversation context và gọi lại thông tin liên quan từ các tương tác trước, đúng với yêu cầu tạo trải nghiệm cá nhân hóa cho các lần tương tác sau. Knowledge cung cấp thông tin bên ngoài hoặc được index, guardrails giới hạn hành vi và an toàn, còn tools giúp agent thực hiện action hoặc truy cập service; không lựa chọn nào trong các lựa chọn đó tự cung cấp persistent user-specific conversational context.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. knowledge:</strong> “knowledge” sai vì “knowledge” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Knowledge cung cấp thông tin bên ngoài hoặc được index, guardrails giới hạn hành vi và an toàn, còn tools giúp agent thực hiện action hoặc truy cập service</li><li><strong>C. guardrails:</strong> “guardrails” sai vì “guardrails” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Knowledge cung cấp thông tin bên ngoài hoặc được index, guardrails giới hạn hành vi và an toàn, còn tools giúp agent thực hiện action hoặc truy cập service</li><li><strong>D. tools:</strong> “tools” sai vì “tools” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Knowledge cung cấp thông tin bên ngoài hoặc được index, guardrails giới hạn hành vi và an toàn, còn tools giúp agent thực hiện action hoặc truy cập service</li></ul>"
  },
  {
    "id": "AI-103-068",
    "exam": "AI-103",
    "number": 68,
    "missingImages": 0,
    "question": "<p>You need to ensure that Agent1Dev Team can access Agent1. </p><p>The solution must meet the security and compliance requirements.</p><p>How should you complete the Python code? </p><p>To answer, select the appropriate options in the answer area.</p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-68.webp\"/></em></p>",
    "options": {
      "A": "<p>DefaultAzureCredential(); get</p>",
      "B": "<p>AzureKeyCredential(); get</p>",
      "C": "<p>DefaultAzureCredential(); create_version</p>",
      "D": "<p>None; get_version</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. DefaultAzureCredential sử dụng xác thực Microsoft Entra, đáp ứng yêu cầu không được dùng API key. Sau khi thành viên SC_Agent1_Dev được gán RBAC role phù hợp trên project, SDK có thể dùng Entra credential của họ. Dùng project_client.agents.get(agent_name=myAgent) để lấy Agent1 đã tồn tại. AzureKeyCredential dùng key, create_version tạo agent version thay vì lấy agent hiện có, còn get_version dành cho một version cụ thể chứ không phải thao tác truy vấn agent cơ bản trong code này.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. AzureKeyCredential(); get:</strong> “AzureKeyCredential(); get” sai vì “AzureKeyCredential(); get” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. AzureKeyCredential dùng key, create_version tạo agent version thay vì lấy agent hiện có, còn get_version dành cho một version cụ thể chứ không phải thao tác truy vấn agent cơ bản…</li><li><strong>C. DefaultAzureCredential(); create_version:</strong> “DefaultAzureCredential(); create_version” sai vì “DefaultAzureCredential(); create_version” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. DefaultAzureCredential sử dụng xác thực Microsoft Entra, đáp ứng yêu cầu không được dùng API key.</li><li><strong>D. None; get_version:</strong> “None; get_version” sai vì “None; get_version” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. AzureKeyCredential dùng key, create_version tạo agent version thay vì lấy agent hiện có, còn get_version dành cho một version cụ thể chứ không phải thao tác truy vấn agent cơ bản…</li></ul>"
  },
  {
    "id": "AI-103-069",
    "exam": "AI-103",
    "number": 69,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains a Retrieval Augmented Generation (RAG) chat solution used by customer support agents.\n</p><p>You are adding an automated pre-production evaluation step to a CI/CD pipeline named Pipeline1. </p><p>The evaluation will run against a labeled test dataset that contains support questions and the expected grounding context.\n</p><p>You need to ensure that Pipeline1 fails if unsupported content or a retrieval mismatch exceeds a defined threshold:\n</p><ul><li>Responses include claims not supported by the retrieved source content\n</li><li>Retrieved source content does not align with the labeled expected context\n</li></ul><p>Which two built-in evaluators should you use in Pipeline1? </p><p>Each correct answer presents pat of the solution.\n</p><p><strong>NOTE</strong>:<em> Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>Retrieval</p>",
      "B": "<p>Fluency</p>",
      "C": "<p>Coherence</p>",
      "D": "<p>Groundedness</p>",
      "E": "<p>Response Completeness</p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A và D là đúng. Groundedness evaluator phát hiện claim trong câu trả lời được tạo không được nội dung nguồn đã truy xuất hỗ trợ. Retrieval evaluator đánh giá liệu retrieved context có khớp với expected context trong labeled test dataset hay không. Fluency và coherence đánh giá chất lượng diễn đạt, còn Response Completeness kiểm tra mức độ bao phủ chứ không kiểm tra retrieval alignment hoặc source support.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Fluency:</strong> “Fluency” sai vì “Fluency” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Fluency và coherence đánh giá chất lượng diễn đạt, còn Response Completeness kiểm tra mức độ bao phủ chứ không kiểm tra retrieval alignment hoặc source support.</li><li><strong>C. Coherence:</strong> “Coherence” sai vì “Coherence” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Fluency và coherence đánh giá chất lượng diễn đạt, còn Response Completeness kiểm tra mức độ bao phủ chứ không kiểm tra retrieval alignment hoặc source support.</li><li><strong>E. Response Completeness:</strong> “Response Completeness” sai vì “Response Completeness” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Fluency và coherence đánh giá chất lượng diễn đạt, còn Response Completeness kiểm tra mức độ bao phủ chứ không kiểm tra retrieval alignment hoặc source support.</li></ul>"
  },
  {
    "id": "AI-103-070",
    "exam": "AI-103",
    "number": 70,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains a support-ticket triage agent built by using the Foundry Agent Service.\n</p><p>The agent uses tool to classify the ticket type and sot the ticket priority.\n</p><p>Sometimes, the same support case continues across multiple sessions over several days.\n</p><p>You need to persist state by using a durable ID to ensure that the agent can automatically reuse the full interaction history. </p><p>The solution must preserve previous user messages, tool calls and tool outputs across turns and sessions.\n</p><p>Which runtime component should you use?</p>",
    "options": {
      "A": "<p>output item</p>",
      "B": "<p>agent</p>",
      "C": "<p>conversation</p>",
      "D": "<p>response</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>C là đúng. Conversation có durable ID và lưu toàn bộ interaction history, bao gồm user message, agent response, tool call và tool output. Dùng lại ID của nó trong các request sau để tiếp tục cùng một support case qua nhiều turn và session. Agent là worker đã cấu hình, response là kết quả của một lần thực thi, còn output item là một phần của kết quả đó; không thành phần nào trong các lựa chọn này là persistent history container cần thiết.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. output item:</strong> “output item” sai vì “output item” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Agent là worker đã cấu hình, response là kết quả của một lần thực thi, còn output item là một phần của kết quả đó</li><li><strong>B. agent:</strong> “agent” sai vì “agent” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Conversation có durable ID và lưu toàn bộ interaction history, bao gồm user message, agent response, tool call và tool output.</li><li><strong>D. response:</strong> “response” sai vì “response” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Conversation có durable ID và lưu toàn bộ interaction history, bao gồm user message, agent response, tool call và tool output.</li></ul>"
  },
  {
    "id": "AI-103-071",
    "exam": "AI-103",
    "number": 71,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You have a Microsoft Founcy project that contains a Retrieval Augmented Generation (RAG) solution. </p><p>You need to run a pre-production evaluation by using labeled CSV dataset that contains the query, context, response and ground truth. </p><p>The evaluation must measure the following: </p><ul><li>Whether responses address the user query </li><li>Whether responses are supported by the provided context </li><li>Whether responses contain sensitive or proprietary information </li></ul><p>Which AI quality evaluation metrics should you use? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-71.webp\"/></em></p>",
    "options": {
      "A": "<p>Groundedness and Relevance; Protected material</p>",
      "B": "<p>Coherence and Fluency; Hateful and unfair content</p>",
      "C": "<p>GPT similarity and F1 score; Indirect attack</p>",
      "D": "<p>Groundedness and ROUGE score; Violent content</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Groundedness đo liệu response có được context cung cấp hỗ trợ hay không, còn Relevance đo liệu response có trả lời đúng user query hay không. Protected material evaluator phát hiện protected/proprietary material trong response. Coherence và fluency đánh giá chất lượng diễn đạt; GPT similarity/F1 và ROUGE so sánh nội dung với ground truth nhưng không trực tiếp kết hợp grounding với query relevance, còn harmful-content và indirect-attack evaluator nhắm tới rủi ro khác.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Coherence and Fluency; Hateful and unfair content:</strong> “Coherence and Fluency; Hateful and unfair content” sai vì “Coherence and Fluency; Hateful and unfair content” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Groundedness đo liệu response có được context cung cấp hỗ trợ hay không, còn Relevance đo liệu response có trả lời đúng user query hay không.</li><li><strong>C. GPT similarity and F1 score; Indirect attack:</strong> “GPT similarity and F1 score; Indirect attack” sai vì “GPT similarity and F1 score; Indirect attack” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. GPT similarity/F1 và ROUGE so sánh nội dung với ground truth nhưng không trực tiếp kết hợp grounding với query relevance, còn harmful-content và indirect-attack evaluator nhắm…</li><li><strong>D. Groundedness and ROUGE score; Violent content:</strong> “Groundedness and ROUGE score; Violent content” sai vì “Groundedness and ROUGE score; Violent content” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Groundedness đo liệu response có được context cung cấp hỗ trợ hay không, còn Relevance đo liệu response có trả lời đúng user query hay không.</li></ul>"
  },
  {
    "id": "AI-103-072",
    "exam": "AI-103",
    "number": 72,
    "missingImages": 0,
    "question": "<p>You plan to configure an evaluation in Microsoft Foundry for a Retrieval Augmented Generation (RAG) chat app.\n</p><p>You need to provide scores for groundedness, relevance, and harmful content categories.\n</p><p>Which two evaluation categories can you use? </p><p>Each correct answer presents a complete solution.\n</p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>risk and safety metrics</p>",
      "B": "<p>fluency evaluator</p>",
      "C": "<p>similarity evaluators</p>",
      "D": "<p>AI quality (NLP) metrics</p>",
      "E": "<p>AI quality (AI assisted) metrics</p>"
    },
    "answer": [
      "A",
      "E"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A và E là đúng. Risk and safety metrics cung cấp evaluation cho các harmful content category. AI quality (AI assisted) metrics bao gồm model-assisted evaluator như groundedness và relevance, dùng để đánh giá RAG response theo query và context. Fluency chỉ đo mức độ trôi chảy, similarity evaluator so sánh output với reference answer, còn AI quality (NLP) metrics là text metric truyền thống chứ không phải model-assisted RAG quality evaluation cần thiết.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. fluency evaluator:</strong> “fluency evaluator” sai vì “fluency evaluator” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Fluency chỉ đo mức độ trôi chảy, similarity evaluator so sánh output với reference answer, còn AI quality (NLP) metrics là text metric truyền thống chứ không phải model-assisted…</li><li><strong>C. similarity evaluators:</strong> “similarity evaluators” sai vì “similarity evaluators” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Fluency chỉ đo mức độ trôi chảy, similarity evaluator so sánh output với reference answer, còn AI quality (NLP) metrics là text metric truyền thống chứ không phải model-assisted…</li><li><strong>D. AI quality (NLP) metrics:</strong> “AI quality (NLP) metrics” sai vì “AI quality (NLP) metrics” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Fluency chỉ đo mức độ trôi chảy, similarity evaluator so sánh output với reference answer, còn AI quality (NLP) metrics là text metric truyền thống chứ không phải model-assisted…</li></ul>"
  },
  {
    "id": "AI-103-073",
    "exam": "AI-103",
    "number": 73,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent. </p><p>The agent uses two tools to perform the following actions:\n</p><ul><li>Use Azure AI Search to retrieve answers from a private product documentation index.\n</li><li>Use the web search tool to retrieve public information on the internet.\n</li></ul><p>You need to ensure that for a specific run, the agent deterministically retrieves information only from the internet.\n</p><p>To what should you set tool_choice?</p>",
    "options": {
      "A": "<p>{“type”: “bing_grouding”}</p>",
      "B": "<p>{“type”: “azure_ai-search”}</p>",
      "C": "<p>“auto”</p>",
      "D": "<p>“required”</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Chỉ định rõ Bing grounding/web-search tool trong tool_choice để ép tool đó cho run này; agent sẽ truy xuất thông tin công khai trên internet thay vì dùng Azure AI Search tool. auto để model tự chọn tool, required chỉ bắt buộc có ít nhất một tool call nhưng không chọn riêng internet tool, còn type Azure AI Search sẽ ép truy xuất tài liệu sản phẩm riêng tư.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. {“type”: “azure_ai-search”}:</strong> “{“type”: “azure_ai-search”}” sai vì Nó chọn {“type”: ““azure_ai-search”}” instead of ““bing_grouding”}”; đây là điểm khác trực tiếp với đáp án. auto để model tự chọn tool, required chỉ bắt buộc có ít nhất một tool call nhưng không chọn riêng internet tool, còn type Azure AI Search sẽ ép truy xuất tài liệu sản phẩm riêng…</li><li><strong>C. “auto”:</strong> ““auto”” sai vì ““auto”” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. auto để model tự chọn tool, required chỉ bắt buộc có ít nhất một tool call nhưng không chọn riêng internet tool, còn type Azure AI Search sẽ ép truy xuất tài liệu sản phẩm riêng…</li><li><strong>D. “required”:</strong> ““required”” sai vì ““required”” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. auto để model tự chọn tool, required chỉ bắt buộc có ít nhất một tool call nhưng không chọn riêng internet tool, còn type Azure AI Search sẽ ép truy xuất tài liệu sản phẩm riêng…</li></ul>"
  },
  {
    "id": "AI-103-074",
    "exam": "AI-103",
    "number": 74,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains a customer support agent built on a deployed chat model.\n</p><p>The agent responses are validated by using an automated testing system that compares generated answers to stored expected outputs. </p><p>Identical prompts must return consistent response to prevent automated test failures.\n</p><p>You need to reduce response variability, without modifying the prompt or reducing factual accuracy.\n</p><p>What should you do for the model?</p>",
    "options": {
      "A": "<p>Increase the max_tokens parameter.</p>",
      "B": "<p>Remove stop sequences from the requests.</p>",
      "C": "<p>Decrease the temperature parameter.</p>",
      "D": "<p>Increase the temperature parameter.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>C là đúng. Giảm temperature làm giảm tính ngẫu nhiên khi sampling, nên các prompt giống nhau tạo output nhất quán hơn trong khi model vẫn có thể dùng cùng factual context. max_tokens kiểm soát giới hạn độ dài output, còn stop sequence kiểm soát nơi generation kết thúc; cả hai không phải control chính để giảm biến thiên do sampling. Tăng temperature làm tăng tính ngẫu nhiên, vì vậy tăng khả năng automated test bị mismatch.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Increase the max_tokens parameter.:</strong> “Increase the max_tokens parameter” sai vì “Increase the max_tokens parameter” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Giảm temperature làm giảm tính ngẫu nhiên khi sampling, nên các prompt giống nhau tạo output nhất quán hơn trong khi model vẫn có thể dùng cùng factual context.</li><li><strong>B. Remove stop sequences from the requests.:</strong> “Remove stop sequences from the requests” sai vì “Remove stop sequences from the requests” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Giảm temperature làm giảm tính ngẫu nhiên khi sampling, nên các prompt giống nhau tạo output nhất quán hơn trong khi model vẫn có thể dùng cùng factual context.</li><li><strong>D. Increase the temperature parameter.:</strong> “Increase the temperature parameter” sai vì “Increase the temperature parameter” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Giảm temperature làm giảm tính ngẫu nhiên khi sampling, nên các prompt giống nhau tạo output nhất quán hơn trong khi model vẫn có thể dùng cùng factual context.</li></ul>"
  },
  {
    "id": "AI-103-075",
    "exam": "AI-103",
    "number": 75,
    "missingImages": 0,
    "question": "<p>You are developing prompts for a Micosoft Foundry project that classifies incoming support tickets by category.\n</p><p>You need to improve accuracy by showing the model how correct classifications look, without retaining the model or storing knowledge permanently.\n</p><p>Which prompt engineering approach should you use?</p>",
    "options": {
      "A": "<p>Retrieval Augmented Generation (RAG)</p>",
      "B": "<p>zero-shot learning</p>",
      "C": "<p>chain of thought</p>",
      "D": "<p>few-shot learning</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. Few-shot prompting đặt các ví dụ ticket đã được phân loại đúng trực tiếp trong prompt, cho model thấy mẫu input-to-category mong muốn ở request hiện tại. Nó không fine-tune hay thay đổi model vĩnh viễn. Zero-shot không cung cấp ví dụ, chain of thought dùng để hướng dẫn các bước suy luận thay vì minh họa category label, còn RAG truy xuất thông tin bên ngoài thay vì đưa ví dụ phân loại vào prompt.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Retrieval Augmented Generation (RAG):</strong> “Retrieval Augmented Generation (RAG)” sai vì “Retrieval Augmented Generation (RAG)” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Zero-shot không cung cấp ví dụ, chain of thought dùng để hướng dẫn các bước suy luận thay vì minh họa category label, còn RAG truy xuất thông tin bên ngoài thay vì đưa ví dụ phân…</li><li><strong>B. zero-shot learning:</strong> “zero-shot learning” sai vì “zero-shot learning” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Zero-shot không cung cấp ví dụ, chain of thought dùng để hướng dẫn các bước suy luận thay vì minh họa category label, còn RAG truy xuất thông tin bên ngoài thay vì đưa ví dụ phân…</li><li><strong>C. chain of thought:</strong> “chain of thought” sai vì “chain of thought” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Zero-shot không cung cấp ví dụ, chain of thought dùng để hướng dẫn các bước suy luận thay vì minh họa category label, còn RAG truy xuất thông tin bên ngoài thay vì đưa ví dụ phân…</li></ul>"
  },
  {
    "id": "AI-103-076",
    "exam": "AI-103",
    "number": 76,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent for a customer support chat app. </p><p>The agent uses a memory store and a memory search tool.\n</p><p>You need to ensure that the conversation history does NOT persist across separate sessions.\n</p><p>To what should you set the scope of the memory tool?</p>",
    "options": {
      "A": "<p>session</p>",
      "B": "<p>{{$conversationId}}</p>",
      "C": "<p>{{$userId}}</p>",
      "D": "<p>global</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Đặt scope của memory tool là session để cô lập history trong session hiện tại và ngăn nó được dùng lại ở session riêng biệt. Conversation ID hoặc user ID có thể lưu/truy xuất memory cho conversation hoặc user đó xuyên các lần tương tác, còn global làm memory được chia sẻ rộng rãi. Những lựa chọn đó không đáp ứng yêu cầu không persist qua các session riêng biệt.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. {{$conversationId}}:</strong> “{{$conversationId}}” sai vì “{{$conversationId}}” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Đặt scope của memory tool là session để cô lập history trong session hiện tại và ngăn nó được dùng lại ở session riêng biệt.</li><li><strong>C. {{$userId}}:</strong> “{{$userId}}” sai vì “{{$userId}}” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Đặt scope của memory tool là session để cô lập history trong session hiện tại và ngăn nó được dùng lại ở session riêng biệt.</li><li><strong>D. global:</strong> “global” sai vì “global” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Đặt scope của memory tool là session để cô lập history trong session hiện tại và ngăn nó được dùng lại ở session riêng biệt.</li></ul>"
  },
  {
    "id": "AI-103-077",
    "exam": "AI-103",
    "number": 77,
    "missingImages": 0,
    "question": "<p><strong>DRAG DROP</strong> - You have a Microsoft Foundry project that contains an agent. </p><p>You need to enable long-term memory to ensure that the agent can recall user preferences across separate conversations. </p><p>Stored memories must be isolated per authenticated user without the client application manually generating user IDs. </p><p>How should you complete the Python code? </p><p>To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. </p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-77.webp\"/></em></p>",
    "options": {
      "A": "<p>scope: \"{{$userId}}\"; tools: [memory_tool]</p>",
      "B": "<p>scope: \"session\"; tools: [memory_tool]</p>",
      "C": "<p>scope: \"{{$conversationId}}\"; tools: [mem_store_name]</p>",
      "D": "<p>scope: \"{{$userId}}\"; tools: [mem_store_name]</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Dùng {{$userId}} làm memory scope để Foundry sử dụng identity của user đã xác thực, cô lập và truy xuất preference của chính user đó qua các cuộc hội thoại riêng biệt mà client không phải tự tạo ID. Thêm memory_tool object đã tạo vào tools dưới dạng [memory_tool] để agent có thể gọi nó. Scope session và {{$conversationId}} giới hạn history theo session hoặc conversation nên không cung cấp cross-conversation user memory, còn mem_store_name là string chứ không phải callable tool object.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. scope: \"session\"; tools: [memory_tool]:</strong> “scope: \"session\"; tools: [memory_tool]” sai vì Nó chọn scope: “\"session\"” instead of “\"{{$userId}}\"”; đây là điểm khác trực tiếp với đáp án. Thêm memory_tool object đã tạo vào tools dưới dạng [memory_tool] để agent có thể gọi nó.</li><li><strong>C. scope: \"{{$conversationId}}\"; tools: [mem_store_name]:</strong> “scope: \"{{$conversationId}}\"; tools: [mem_store_name]” sai vì Nó chọn scope: “\"{{$conversationId}}\"” instead of “\"{{$userId}}\"”; tools: “[mem_store_name]” instead of “[memory_tool]”; đây là điểm khác trực tiếp với đáp án. Scope session và {{$conversationId}} giới hạn history theo session hoặc conversation nên không cung cấp cross-conversation user memory, còn mem_store_name là string chứ không…</li><li><strong>D. scope: \"{{$userId}}\"; tools: [mem_store_name]:</strong> “scope: \"{{$userId}}\"; tools: [mem_store_name]” sai vì Nó chọn tools: “[mem_store_name]” instead of “[memory_tool]”; đây là điểm khác trực tiếp với đáp án. Dùng {{$userId}} làm memory scope để Foundry sử dụng identity của user đã xác thực, cô lập và truy xuất preference của chính user đó qua các cuộc hội thoại riêng biệt mà client…</li></ul>"
  },
  {
    "id": "AI-103-078",
    "exam": "AI-103",
    "number": 78,
    "missingImages": 0,
    "question": "<p>You have a web app named App1 that processes user prompts by integrating with a Microsoft Foundry project named Project1. </p><p>App1 performs the following actions:\n</p><ul><li>Sends prompts directly to a model by using the Azure OpenAI Responses API\n</li><li>Invokes the Azure AI Content Safety tool by using a Foundry connection within the same request\n</li></ul><p>You need to configure end-to-end visibility into each step of the request workflow.\n</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Enable logging by using the client SDK for Content Safety.</p>",
      "B": "<p>Enable logging by using Foundry Local.</p>",
      "C": "<p>Enable application tracing in Project1.</p>",
      "D": "<p>Route requests through the Azure OpenAI endpoint.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>C là đúng. Bật application tracing trong Foundry project để capture end-to-end request workflow, bao gồm model call qua Responses API và Content Safety tool invocation qua connection như các trace step có tương quan. Content Safety client-SDK logging chỉ bao phủ interaction của SDK đó. Foundry Local dùng cho local development, còn route request qua Azure OpenAI endpoint tự nó không cung cấp quan sát xuyên các bước.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Enable logging by using the client SDK for Content Safety.:</strong> “Enable logging by using the client SDK for Content Safety” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Content Safety client-SDK logging chỉ bao phủ interaction của SDK đó.</li><li><strong>B. Enable logging by using Foundry Local.:</strong> “Enable logging by using Foundry Local” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Bật application tracing trong Foundry project để capture end-to-end request workflow, bao gồm model call qua Responses API và Content Safety tool invocation qua connection như…</li><li><strong>D. Route requests through the Azure OpenAI endpoint.:</strong> “Route requests through the Azure OpenAI endpoint” sai vì “Route requests through the Azure OpenAI endpoint” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Foundry Local dùng cho local development, còn route request qua Azure OpenAI endpoint tự nó không cung cấp quan sát xuyên các bước.</li></ul>"
  },
  {
    "id": "AI-103-079",
    "exam": "AI-103",
    "number": 79,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You have a Microsoft Foundry project that contains two agents named PolicyWriter and RskReviewer. </p><p>PolicyWriter generates daft updates for customer polices, and RiskReviewer reviews the drafts. </p><p>In the visual builder, you need to create a workflow that meets the following requirements: </p><ul><li>Finalizes low-risk updates without manual intervention </li><li>Ensures predictable execution across the agents </li><li>Requires user approval for highs updates </li></ul><p>What should you configure? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE</strong>:<em> Each comet selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-79.webp\"/></em></p>",
    "options": {
      "A": "<p>The sequential template that passes outputs node-by-node; Add a Conditional statement.</p>",
      "B": "<p>The group chat template to dynamically route control between the agents; Add an Ask a question node.</p>",
      "C": "<p>The human-in-the-loop template that pauses execution of the workflow for input; Add a Basic chat node.</p>",
      "D": "<p>The sequential template that passes outputs node-by-node; Add a Basic chat node.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Sequential template chuyển output từ PolicyWriter sang RiskReviewer theo thứ tự cố định, có thể dự đoán. Thêm Conditional statement sau risk review để rẽ nhánh: draft low-risk tiếp tục finalize tự động, còn draft high-risk đi vào approval path. Group chat route control động nên kém xác định hơn. Human-in-the-loop template sẽ pause mọi workflow nếu không có logic bổ sung, còn Basic chat node không tạo risk-based approval gate.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. The group chat template to dynamically route control between the agents; Add an Ask a question node.:</strong> “The group chat template to dynamically route control between the agents; Add an Ask a question node” sai vì “The group chat template to dynamically route control between the agents; Add an Ask a question node” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Human-in-the-loop template sẽ pause mọi workflow nếu không có logic bổ sung, còn Basic chat node không tạo risk-based approval gate.</li><li><strong>C. The human-in-the-loop template that pauses execution of the workflow for input; Add a Basic chat node.:</strong> “The human-in-the-loop template that pauses execution of the workflow for input; Add a Basic chat node” sai vì “The human-in-the-loop template that pauses execution of the workflow for input; Add a Basic chat node” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Human-in-the-loop template sẽ pause mọi workflow nếu không có logic bổ sung, còn Basic chat node không tạo risk-based approval gate.</li><li><strong>D. The sequential template that passes outputs node-by-node; Add a Basic chat node.:</strong> “The sequential template that passes outputs node-by-node; Add a Basic chat node” sai vì “The sequential template that passes outputs node-by-node; Add a Basic chat node” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Human-in-the-loop template sẽ pause mọi workflow nếu không có logic bổ sung, còn Basic chat node không tạo risk-based approval gate.</li></ul>"
  },
  {
    "id": "AI-103-080",
    "exam": "AI-103",
    "number": 80,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent named Agent1.\n</p><p>Agent runs successful, but Foundry Control Plane does NOT display values for error rates, runs, and token usage, and the Traces tab is empty.\n</p><p>You need to ensure that Found Control Plane displays the appropriate values for Agent1.\n</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Update Agent1 to a new version.</p>",
      "B": "<p>Restart Agent from Foundry Control Plan</p>",
      "C": "<p>Assign to a Log Analytics workspace to Agent1.</p>",
      "D": "<p>Enable Application Insights for Agent1.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. Bật Application Insights cho Agent1 để thu thập và hiển thị operational telemetry như run, error rate, token usage và trace trong Foundry Control Plane. Tạo agent version mới hoặc restart agent không cấu hình telemetry. Log Analytics workspace có thể lưu và truy vấn monitoring data, nhưng chỉ gán workspace cho agent không tự bật Application Insights telemetry và trace collection của agent.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Update Agent1 to a new version.:</strong> “Update Agent1 to a new version” sai vì “Update Agent1 to a new version” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Bật Application Insights cho Agent1 để thu thập và hiển thị operational telemetry như run, error rate, token usage và trace trong Foundry Control Plane.</li><li><strong>B. Restart Agent from Foundry Control Plan:</strong> “Restart Agent from Foundry Control Plan” sai vì “Restart Agent from Foundry Control Plan” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Bật Application Insights cho Agent1 để thu thập và hiển thị operational telemetry như run, error rate, token usage và trace trong Foundry Control Plane.</li><li><strong>C. Assign to a Log Analytics workspace to Agent1.:</strong> “Assign to a Log Analytics workspace to Agent1” sai vì “Assign to a Log Analytics workspace to Agent1” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Log Analytics workspace có thể lưu và truy vấn monitoring data, nhưng chỉ gán workspace cho agent không tự bật Application Insights telemetry và trace collection của agent.</li></ul>"
  },
  {
    "id": "AI-103-081",
    "exam": "AI-103",
    "number": 81,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent.\n</p><p>The agent uses Azure Content Understanding in Foundry Too to process vendor onboarding packets. </p><p>The packs include digital PDFs that contain tables and hyperlinks.\n</p><p>The extracted content is indexed for search and provided to a downstream agent in the Markdown format.\n</p><p>You need to generate a Markdown output that has a layout and a semantic structure optimized for Retrieval Augmented Generation (RAG) workflows.\n</p><p>Which built-in analyzer should you use?</p>",
    "options": {
      "A": "<p>prebuilt-documentFieldSchema</p>",
      "B": "<p>prebuilt-documentSearch</p>",
      "C": "<p>prebuilt-read</p>",
      "D": "<p>prebuilt-layout</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Prebuilt-documentSearch analyzer tạo Markdown được thiết kế cho search và RAG, giữ lại layout và bổ sung semantic structure phù hợp cho retrieval và grounding ở bước sau. Prebuilt-layout tập trung trích xuất structural layout element, nhưng prebuilt-documentSearch là analyzer được tối ưu cho searchable Markdown sẵn sàng dùng cho RAG. Prebuilt-read tập trung vào text extraction, còn prebuilt-documentFieldSchema phục vụ field-schema scenario thay vì document representation hướng RAG.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. prebuilt-documentFieldSchema:</strong> “prebuilt-documentFieldSchema” sai vì “prebuilt-documentFieldSchema” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Prebuilt-documentSearch analyzer tạo Markdown được thiết kế cho search và RAG, giữ lại layout và bổ sung semantic structure phù hợp cho retrieval và grounding ở bước sau.</li><li><strong>C. prebuilt-read:</strong> “prebuilt-read” sai vì “prebuilt-read” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Prebuilt-documentSearch analyzer tạo Markdown được thiết kế cho search và RAG, giữ lại layout và bổ sung semantic structure phù hợp cho retrieval và grounding ở bước sau.</li><li><strong>D. prebuilt-layout:</strong> “prebuilt-layout” sai vì “prebuilt-layout” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Prebuilt-layout tập trung trích xuất structural layout element, nhưng prebuilt-documentSearch là analyzer được tối ưu cho searchable Markdown sẵn sàng dùng cho RAG.</li></ul>"
  },
  {
    "id": "AI-103-082",
    "exam": "AI-103",
    "number": 82,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent.\n</p><p>The agent uses Azure AI Search for Retrieval Augmented Generation (RAG).\n</p><p>You plan to ingest and index PDF product manuals.\n</p><p>You need to build a solution that supports semantic similarity matching. </p><p>The solution must ensure that the agent retrieves relevant data when user questions use different wording than the product manuals.\n</p><p>Which indexing approach should you use?</p>",
    "options": {
      "A": "<p>vector search</p>",
      "B": "<p>semantic ranking</p>",
      "C": "<p>suggesters</p>",
      "D": "<p>analyzers</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Vector search dùng embedding để biểu diễn nội dung manual và câu hỏi người dùng theo ngữ nghĩa, nên vẫn có thể retrieval khi cách diễn đạt khác nhau. Semantic ranking sắp xếp lại kết quả keyword search và thường dùng cùng vector search, nhưng không phải indexing approach tạo semantic-similarity matching. Suggester tạo type-ahead suggestion, còn analyzer tokenize và chuẩn hóa văn bản cho lexical search.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. semantic ranking:</strong> “semantic ranking” sai vì “semantic ranking” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Semantic ranking sắp xếp lại kết quả keyword search và thường dùng cùng vector search, nhưng không phải indexing approach tạo semantic-similarity matching.</li><li><strong>C. suggesters:</strong> “suggesters” sai vì “suggesters” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Semantic ranking sắp xếp lại kết quả keyword search và thường dùng cùng vector search, nhưng không phải indexing approach tạo semantic-similarity matching.</li><li><strong>D. analyzers:</strong> “analyzers” sai vì “analyzers” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Semantic ranking sắp xếp lại kết quả keyword search và thường dùng cùng vector search, nhưng không phải indexing approach tạo semantic-similarity matching.</li></ul>"
  },
  {
    "id": "AI-103-083",
    "exam": "AI-103",
    "number": 83,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry agent that grounds responses from an Azure Search index that contains the following:\n</p><ul><li>Searchable text fields for product names and product codes\n</li><li>A vector field that stores embeddings for product descriptions\n</li></ul><p>You need to ensure that users can query the index by using the following:\n</p><ul><li>Exact product names or codes\n</li><li>Natural language descriptions of the products\n</li></ul><p>What should you configure?</p>",
    "options": {
      "A": "<p>vector search only</p>",
      "B": "<p>hybrid search</p>",
      "C": "<p>keyword search only</p>",
      "D": "<p>semantic search only</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Hybrid search kết hợp keyword/text search—phù hợp cho exact product name và code—with vector search, giúp match natural-language description theo ngữ nghĩa. Vector-only search có thể không tối ưu cho exact identifier, keyword-only search bỏ lỡ semantic similarity, còn semantic search riêng lẻ là ranking capability chứ không phải cách retrieval kết hợp keyword và vector cần thiết ở đây.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. vector search only:</strong> “vector search only” sai vì “vector search only” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Hybrid search kết hợp keyword/text search—phù hợp cho exact product name và code—with vector search, giúp match natural-language description theo ngữ nghĩa.</li><li><strong>C. keyword search only:</strong> “keyword search only” sai vì “keyword search only” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Hybrid search kết hợp keyword/text search—phù hợp cho exact product name và code—with vector search, giúp match natural-language description theo ngữ nghĩa.</li><li><strong>D. semantic search only:</strong> “semantic search only” sai vì “semantic search only” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Vector-only search có thể không tối ưu cho exact identifier, keyword-only search bỏ lỡ semantic similarity, còn semantic search riêng lẻ là ranking capability chứ không phải cách…</li></ul>"
  },
  {
    "id": "AI-103-084",
    "exam": "AI-103",
    "number": 84,
    "missingImages": 0,
    "question": "<p>You have an Azure AI Search indexer that ingests PDF policy manuals.\n</p><p>Client applications must display page-level citations that have bounding polygons for both text and images.\n</p><p>You need to add a single built-in multimodal content extraction skill to the Azure AI Search skillset. </p><p>The solution must meet the following requirements:\n</p><ul><li>Provide text and image location metadata.\n</li><li>Extract tables that span multiple pages.\n</li></ul><p>What should you add?</p>",
    "options": {
      "A": "<p>Document Extraction</p>",
      "B": "<p>Azure Content Understanding in Foundry Tools</p>",
      "C": "<p>GenAI Prompt</p>",
      "D": "<p>Document Layout</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. Hãy thêm Document Layout skill vào Azure AI Search skillset. Đây là built-in multimodal extraction skill giúp giữ cấu trúc tài liệu và tạo location information cho text/ảnh, gồm bounding polygon, đồng thời xử lý table trải qua nhiều trang. Document Extraction riêng lẻ không cung cấp layout-aware multimodal output theo yêu cầu. Azure Content Understanding là capability của Foundry Tools chứ không phải single skillset skill được yêu cầu trong Azure AI Search, còn GenAI Prompt dùng cho prompt-based enrichment thay vì deterministic layout extraction.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Document Extraction:</strong> “Document Extraction” sai vì “Document Extraction” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Document Extraction riêng lẻ không cung cấp layout-aware multimodal output theo yêu cầu.</li><li><strong>B. Azure Content Understanding in Foundry Tools:</strong> “Azure Content Understanding in Foundry Tools” sai vì “Azure Content Understanding in Foundry Tools” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure Content Understanding là capability của Foundry Tools chứ không phải single skillset skill được yêu cầu trong Azure AI Search, còn GenAI Prompt dùng cho prompt-based…</li><li><strong>C. GenAI Prompt:</strong> “GenAI Prompt” sai vì “GenAI Prompt” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure Content Understanding là capability của Foundry Tools chứ không phải single skillset skill được yêu cầu trong Azure AI Search, còn GenAI Prompt dùng cho prompt-based…</li></ul>"
  },
  {
    "id": "AI-103-085",
    "exam": "AI-103",
    "number": 85,
    "missingImages": 0,
    "question": "<p>You are building an Azure AI Search indexing pipeline named Pipeline1 that ingests invoices stored in Azure Blob Storage. </p><p>The invoices are stored as scanned images.\n</p><p>You need to enable users to search invoice data across the invoice fields.\n</p><p>Which built-in skill should you add to the skillset of Pipeline1?</p>",
    "options": {
      "A": "<p>Text Split</p>",
      "B": "<p>Text Translation</p>",
      "C": "<p>optical character recognition (OCR)</p>",
      "D": "<p>Image Analysis</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>C là đúng. Thêm OCR skill để trích xuất searchable text từ scanned invoice image, bao gồm các invoice field value có thể được index và query. Text Split chỉ hoạt động sau khi đã có text, Text Translation thay đổi ngôn ngữ của text, còn Image Analysis trích xuất visual insight nhưng không phải skill chính để biến invoice text trong ảnh scan thành searchable field content.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Text Split:</strong> “Text Split” sai vì “Text Split” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Text Split chỉ hoạt động sau khi đã có text, Text Translation thay đổi ngôn ngữ của text, còn Image Analysis trích xuất visual insight nhưng không phải skill chính để biến…</li><li><strong>B. Text Translation:</strong> “Text Translation” sai vì “Text Translation” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Text Split chỉ hoạt động sau khi đã có text, Text Translation thay đổi ngôn ngữ của text, còn Image Analysis trích xuất visual insight nhưng không phải skill chính để biến…</li><li><strong>D. Image Analysis:</strong> “Image Analysis” sai vì “Image Analysis” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Text Split chỉ hoạt động sau khi đã có text, Text Translation thay đổi ngôn ngữ của text, còn Image Analysis trích xuất visual insight nhưng không phải skill chính để biến…</li></ul>"
  },
  {
    "id": "AI-103-086",
    "exam": "AI-103",
    "number": 86,
    "missingImages": 0,
    "question": "<p><strong>DRAG DROP</strong> - You have a Microsoft Foundry project that uses Azure Content Understanding in Foundry Tools to analyze marketing videos. </p><p>Video segmentation is enabled. </p><p>You need to configure an analyzer to output a generated JSON field that describes the color scheme of each video segment. </p><p>How should you configure the analyzer? </p><p>To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. </p><p><strong>NOTE</strong>:<em> Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-86.webp\"/></em></p>",
    "options": {
      "A": "<p>Field value type: string; Field method: generate</p>",
      "B": "<p>Field value type: table; Field method: classify</p>",
      "C": "<p>Field value type: group; Field method: generate</p>",
      "D": "<p>Field value type: string; Field method: classify</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Mô tả color scheme là free-form text được tạo sinh, nên cấu hình field value type là string và field method là generate. classify chọn từ các category đã xác định trước và sẽ cần fixed class list; table dành cho tabular output, còn group dành cho group/collection structure chứ không phải một mô tả được tạo cho mỗi video segment.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Field value type: table; Field method: classify:</strong> “Field value type: table; Field method: classify” sai vì Nó chọn Field value type: “table” instead of “string”; Field method: “classify” instead of “generate”; đây là điểm khác trực tiếp với đáp án. Mô tả color scheme là free-form text được tạo sinh, nên cấu hình field value type là string và field method là generate.</li><li><strong>C. Field value type: group; Field method: generate:</strong> “Field value type: group; Field method: generate” sai vì Nó chọn Field value type: “group” instead of “string”; đây là điểm khác trực tiếp với đáp án. Mô tả color scheme là free-form text được tạo sinh, nên cấu hình field value type là string và field method là generate.</li><li><strong>D. Field value type: string; Field method: classify:</strong> “Field value type: string; Field method: classify” sai vì Nó chọn Field method: “classify” instead of “generate”; đây là điểm khác trực tiếp với đáp án. Mô tả color scheme là free-form text được tạo sinh, nên cấu hình field value type là string và field method là generate.</li></ul>"
  },
  {
    "id": "AI-103-087",
    "exam": "AI-103",
    "number": 87,
    "missingImages": 0,
    "question": "<p>You have an invoice-processing application named App1 that uses Azure Constant Understanding in Foundry Tools.\n</p><p>You are building a new Content Understanding pipeline named Pipeline1 that must meet the following requirements:\n</p><ul><li>Compare an invoice to its related purchase order\n</li><li>Validate the voice against static vendor contact documents\n</li><li>Return a single structured output that includes discrepancy findings\n</li></ul><p>You need to configure Pipeline1 and expose the pipeline as a single analyzer endpoint. </p><p>What should you configure?</p>",
    "options": {
      "A": "<p>a single-file task in standard mode that uses the vendor contract provided as an additional document during analysis.</p>",
      "B": "<p>a single-file task in standard mode that uses confidence scores enabled for the extracted fields.</p>",
      "C": "<p>a multiple-file task in pro mode that uses the vendor contract files as reference data</p>",
      "D": "<p>a multi-file task in standard mode that uses the invoice and purchase order as input to the analyzer</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>C là đúng. Hãy dùng multiple-file task ở pro mode khi pipeline phải reasoning trên các tài liệu đầu vào liên quan và dùng static vendor document làm reference data để tạo một structured discrepancy result. Pro mode hỗ trợ multi-step, cross-document reasoning cần thiết để so sánh invoice với purchase order và đối chiếu cùng vendor reference material. Single-file task không đáp ứng yêu cầu cross-document, còn standard-mode multi-file processing không cung cấp pro-mode reference-data và reasoning capability cần thiết.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. a single-file task in standard mode that uses the vendor contract provided as an additional document during analysis.:</strong> “a single-file task in standard mode that uses the vendor contract provided as an additional document during analysis” sai vì “a single-file task in standard mode that uses the vendor contract provided as an additional document during analysis” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Hãy dùng multiple-file task ở pro mode khi pipeline phải reasoning trên các tài liệu đầu vào liên quan và dùng static vendor document làm reference data để tạo một structured…</li><li><strong>B. a single-file task in standard mode that uses confidence scores enabled for the extracted fields.:</strong> “a single-file task in standard mode that uses confidence scores enabled for the extracted fields” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Single-file task không đáp ứng yêu cầu cross-document, còn standard-mode multi-file processing không cung cấp pro-mode reference-data và reasoning capability cần thiết.</li><li><strong>D. a multi-file task in standard mode that uses the invoice and purchase order as input to the analyzer:</strong> “a multi-file task in standard mode that uses the invoice and purchase order as input to the analyzer” sai vì “a multi-file task in standard mode that uses the invoice and purchase order as input to the analyzer” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Single-file task không đáp ứng yêu cầu cross-document, còn standard-mode multi-file processing không cung cấp pro-mode reference-data và reasoning capability cần thiết.</li></ul>"
  },
  {
    "id": "AI-103-088",
    "exam": "AI-103",
    "number": 88,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that generates short promotional product videos.\n</p><p>After several clips are approved, reviewers notice a small watermark in the top-right corner of some videos.\n</p><p>You need to remove the watermark without regenerating the videos.\n</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Modify the original prompt to exclude watermarks.</p>",
      "B": "<p>Crop the video by using the size parameter.</p>",
      "C": "<p>Increase the guidance scale.</p>",
      "D": "<p>Apply a mask-based inpainting edit to the affected part of the video.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. Mask-based inpainting edit chỉ nhắm vào vùng watermark đã đánh dấu của video hiện có, cho phép xóa hoặc tái tạo vùng đó mà không cần sinh lại toàn bộ clip. Sửa prompt gốc hoặc tăng guidance scale sẽ tác động đến một lần sinh mới, còn crop làm thay đổi bố cục và có thể cắt mất nội dung mong muốn thay vì chỉ sửa vùng watermark.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Modify the original prompt to exclude watermarks.:</strong> “Modify the original prompt to exclude watermarks” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Mask-based inpainting edit chỉ nhắm vào vùng watermark đã đánh dấu của video hiện có, cho phép xóa hoặc tái tạo vùng đó mà không cần sinh lại toàn bộ clip.</li><li><strong>B. Crop the video by using the size parameter.:</strong> “Crop the video by using the size parameter” sai vì “Crop the video by using the size parameter” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Mask-based inpainting edit chỉ nhắm vào vùng watermark đã đánh dấu của video hiện có, cho phép xóa hoặc tái tạo vùng đó mà không cần sinh lại toàn bộ clip.</li><li><strong>C. Increase the guidance scale.:</strong> “Increase the guidance scale” sai vì “Increase the guidance scale” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Mask-based inpainting edit chỉ nhắm vào vùng watermark đã đánh dấu của video hiện có, cho phép xóa hoặc tái tạo vùng đó mà không cần sinh lại toàn bộ clip.</li></ul>"
  },
  {
    "id": "AI-103-089",
    "exam": "AI-103",
    "number": 89,
    "missingImages": 0,
    "question": "<p>You have a web app named App1 that sends requests to a multimodal chat model deployment in a Microsoft Foundry project.\n</p><p>User messages can contain both text and images.\n</p><p>Currently, App1 includes image URL: </p><ul><li>as plain text inside the message content so the model cannot recognize them as images.\n</li><li>Traces show that the requests contain a single text message instead of a multimodal content array.\n</li></ul><p>You need to send the message as a structured array that includes both the text portion and the image reference to ensure that the model can process the image correctly.\n</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Set the user message content array to include items that have type: text and type: image_url.</p>",
      "B": "<p>Encode the image to base64 and include the encoded data inside the content string of the user message.</p>",
      "C": "<p>Add the image URL to the request metadata section, so the model can resolve the processing issue automatically.</p>",
      "D": "<p>Place the image URL inside the System Message and set type to image_url so the model loads the image at initialization.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Hãy gửi multimodal user content dưới dạng structured array gồm một text item và một image_url item. Cách này chỉ rõ image reference là image input cho multimodal model. Đặt image URL hoặc encoded data trong text string thông thường vẫn khiến nó là text, metadata không phải model input, còn system message dùng cho instruction chứ không phải user-provided image content.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Encode the image to base64 and include the encoded data inside the content string of the user message.:</strong> “Encode the image to base64 and include the encoded data inside the content string of the user message” sai vì “Encode the image to base64 and include the encoded data inside the content string of the user message” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Đặt image URL hoặc encoded data trong text string thông thường vẫn khiến nó là text, metadata không phải model input, còn system message dùng cho instruction chứ không phải…</li><li><strong>C. Add the image URL to the request metadata section, so the model can resolve the processing issue automatically.:</strong> “Add the image URL to the request metadata section, so the model can resolve the processing issue automatically” sai vì “Add the image URL to the request metadata section, so the model can resolve the processing issue automatically” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Đặt image URL hoặc encoded data trong text string thông thường vẫn khiến nó là text, metadata không phải model input, còn system message dùng cho instruction chứ không phải…</li><li><strong>D. Place the image URL inside the System Message and set type to image_url so the model loads the image at initialization.:</strong> “Place the image URL inside the System Message and set type to image_url so the model loads the image at initialization” sai vì “Place the image URL inside the System Message and set type to image_url so the model loads the image at initialization” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Đặt image URL hoặc encoded data trong text string thông thường vẫn khiến nó là text, metadata không phải model input, còn system message dùng cho instruction chứ không phải…</li></ul>"
  },
  {
    "id": "AI-103-090",
    "exam": "AI-103",
    "number": 90,
    "missingImages": 0,
    "question": "<p>You are building a customer support web app named App1 in Microsoft Foundry that uses a GPT realtime model.\n</p><p>App1 must support:\n</p><ul><li>Live, low-latency voice conversations that use Azure OpenAI\n</li><li>Streaming audio input from users and playback audio responses\n</li></ul><p>You need to configure a connection method that supports real-time audio streaming in client application and targets approximately 100 ms latency.\n</p><p>Which connection method should you use?</p>",
    "options": {
      "A": "<p>RTMP</p>",
      "B": "<p>WebRTC</p>",
      "C": "<p>SIP</p>",
      "D": "<p>WebSocket</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. WebRTC được thiết kế cho real-time media streaming trên browser/client và hỗ trợ bidirectional audio độ trễ thấp, phù hợp với trải nghiệm voice tương tác khoảng 100 ms. RTMP chủ yếu dùng cho broadcast streaming, SIP là telephony signaling protocol, còn WebSocket có thể stream event nhưng không cung cấp media-focused low-latency audio transport và playback capability như WebRTC cho client application.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. RTMP:</strong> “RTMP” sai vì “RTMP” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. RTMP chủ yếu dùng cho broadcast streaming, SIP là telephony signaling protocol, còn WebSocket có thể stream event nhưng không cung cấp media-focused low-latency audio transport…</li><li><strong>C. SIP:</strong> “SIP” sai vì “SIP” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. RTMP chủ yếu dùng cho broadcast streaming, SIP là telephony signaling protocol, còn WebSocket có thể stream event nhưng không cung cấp media-focused low-latency audio transport…</li><li><strong>D. WebSocket:</strong> “WebSocket” sai vì “WebSocket” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. RTMP chủ yếu dùng cho broadcast streaming, SIP là telephony signaling protocol, còn WebSocket có thể stream event nhưng không cung cấp media-focused low-latency audio transport…</li></ul>"
  },
  {
    "id": "AI-103-091",
    "exam": "AI-103",
    "number": 91,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent and uses a GitHub repository. </p><p>The repository contains a YAM file named File1 that defines the evaluation settings of the agent.\n</p><p>You need to create a GitHub Actions workflow that runs the evaluation defined in File1 when a pull request (PR) is opened. </p><p>How should you configure the workflow?</p>",
    "options": {
      "A": "<p>Set project-endpoint to the endpoint of the project.</p>",
      "B": "<p>Set evaluation-config to the path of the YAML file.</p>",
      "C": "<p>Set model-deployment-name to the deployed model.</p>",
      "D": "<p>Set tenant-id to the Microsoft Entra tenant ID</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Hãy đặt evaluation-config thành đường dẫn File1 trong repository để GitHub Actions evaluation workflow tải và chạy các evaluation setting được định nghĩa trong YAML file đó khi pull-request trigger chạy. Project endpoint, model deployment name và tenant ID có thể dùng cho authentication hoặc environment configuration, nhưng không xác định evaluation definition cần thực thi.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Set project-endpoint to the endpoint of the project.:</strong> “Set project-endpoint to the endpoint of the project” sai vì “Set project-endpoint to the endpoint of the project” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Hãy đặt evaluation-config thành đường dẫn File1 trong repository để GitHub Actions evaluation workflow tải và chạy các evaluation setting được định nghĩa trong YAML file đó khi…</li><li><strong>C. Set model-deployment-name to the deployed model.:</strong> “Set model-deployment-name to the deployed model” sai vì “Set model-deployment-name to the deployed model” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Hãy đặt evaluation-config thành đường dẫn File1 trong repository để GitHub Actions evaluation workflow tải và chạy các evaluation setting được định nghĩa trong YAML file đó khi…</li><li><strong>D. Set tenant-id to the Microsoft Entra tenant ID:</strong> “Set tenant-id to the Microsoft Entra tenant ID” sai vì “Set tenant-id to the Microsoft Entra tenant ID” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Hãy đặt evaluation-config thành đường dẫn File1 trong repository để GitHub Actions evaluation workflow tải và chạy các evaluation setting được định nghĩa trong YAML file đó khi…</li></ul>"
  },
  {
    "id": "AI-103-092",
    "exam": "AI-103",
    "number": 92,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You have a Microsoft Foundry project that contains an agent. </p><p>The agent uses a stored access key to retrieve secrets from an Azure key vault, which violates a keyless-credentials requirement. </p><p>You need to ensure that the agent can retrieve the secrets. </p><p>The solution must follow the principle of least privilege. </p><p>What should you configure? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-92.webp\"/></em></p>",
    "options": {
      "A": "<p>Enable a system-assigned managed identity at the project level; Assign the Key Vault Secrets User role to the managed identity.</p>",
      "B": "<p>Enable a system-assigned managed identity at the Foundry level; Add a Key Vault access policy for the secrets.</p>",
      "C": "<p>Create a service principal and store the principal’s client secret; Assign the Key Vault Secrets User role to the managed identity.</p>",
      "D": "<p>Enable a system-assigned managed identity at the project level; Add an API key to application settings.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Bật system-assigned managed identity ở project level để agent có keyless identity trong phạm vi project, rồi chỉ gán Key Vault Secrets User RBAC role để đọc secret. Cách này tuân thủ least privilege và tránh lưu access key hoặc client secret. Identity ở Foundry level có phạm vi rộng hơn cần thiết, access-policy configuration không phải RBAC least-privilege approach được chọn trong tình huống này, còn service-principal/client-secret hoặc API-key solution vẫn cần stored credential.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Enable a system-assigned managed identity at the Foundry level; Add a Key Vault access policy for the secrets.:</strong> “Enable a system-assigned managed identity at the Foundry level; Add a Key Vault access policy for the secrets” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Bật system-assigned managed identity ở project level để agent có keyless identity trong phạm vi project, rồi chỉ gán Key Vault Secrets User RBAC role để đọc secret.</li><li><strong>C. Create a service principal and store the principal’s client secret; Assign the Key Vault Secrets User role to the managed identity.:</strong> “Create a service principal and store the principal’s client secret; Assign the Key Vault Secrets User role to the managed identity” sai vì “Create a service principal and store the principal’s client secret; Assign the Key Vault Secrets User role to the managed identity” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Bật system-assigned managed identity ở project level để agent có keyless identity trong phạm vi project, rồi chỉ gán Key Vault Secrets User RBAC role để đọc secret.</li><li><strong>D. Enable a system-assigned managed identity at the project level; Add an API key to application settings.:</strong> “Enable a system-assigned managed identity at the project level; Add an API key to application settings” sai vì Đây là một control về cấu hình hoặc policy; đây không phải capability mà đề cần. Bật system-assigned managed identity ở project level để agent có keyless identity trong phạm vi project, rồi chỉ gán Key Vault Secrets User RBAC role để đọc secret.</li></ul>"
  },
  {
    "id": "AI-103-093",
    "exam": "AI-103",
    "number": 93,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You have a Microsoft Foundry project that contains a customer support application. </p><p>You create an evaluation named Run1 that has the following configurations: </p><ul><li>Includes risk and safety metrics </li><li>Includes the protected material evaluation </li><li>Includes harmful content metrics that use a medium severity threshold </li></ul><p>You create an evaluation named Run2 that has the following configurations: </p><ul><li>Includes risk and safety metrics </li><li>Includes the protected material evaluation </li><li>Includes harmful content metrics that use a high severity threshold </li></ul><p>You run both evaluations against a dataset named DB1 and receive the following results: </p><ul><li>Content harm defect rate of Run1: 12% </li><li>Content harm defect rate of Run2: 4% </li><li>Protected material evaluation of Run1: 6% </li><li>Protected material evaluation of Run1: 6% </li></ul><p>You start a fine-tuning job by using DB1. </p><p>The job fails during automatic RAI checks for multiple content harm types. </p><p>You discover that the content filtering configuration is set to high severity. </p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-93.webp\"/></em></p>",
    "options": {
      "A": "<p>1: No; 2: Yes; 3: Yes</p>",
      "B": "<p>1: Yes; 2: Yes; 3: No</p>",
      "C": "<p>1: No; 2: No; 3: Yes</p>",
      "D": "<p>1: Yes; 2: No; 3: No</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. (1) No: hạ content-filter severity không giải quyết fine-tuning job đã fail automatic Responsible AI check cho nhiều harm type; nó chỉ làm filter ít nghiêm hơn thay vì khắc phục unsafe training data. (2) Yes: ngưỡng medium gắn cờ phạm vi harmful content rộng hơn high, nên defect rate của Run1 (12%) cao hơn Run2 (4%) là phù hợp. (3) Yes: protected-material evaluation tách biệt với harmful-content severity filtering, nên hai kết quả 6% giống nhau cho thấy metric này không bị ảnh hưởng bởi các harmful-content threshold khác nhau.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. 1: Yes; 2: Yes; 3: No:</strong> “1: Yes; 2: Yes; 3: No” sai vì Nó chọn 3: “No” instead of “Yes”; đây là điểm khác trực tiếp với đáp án. (3) Yes: protected-material evaluation tách biệt với harmful-content severity filtering, nên hai kết quả 6% giống nhau cho thấy metric này không bị ảnh hưởng bởi các…</li><li><strong>C. 1: No; 2: No; 3: Yes:</strong> “1: No; 2: No; 3: Yes” sai vì Nó chọn 2: “No” instead of “Yes”; đây là điểm khác trực tiếp với đáp án. (3) Yes: protected-material evaluation tách biệt với harmful-content severity filtering, nên hai kết quả 6% giống nhau cho thấy metric này không bị ảnh hưởng bởi các…</li><li><strong>D. 1: Yes; 2: No; 3: No:</strong> “1: Yes; 2: No; 3: No” sai vì Nó chọn 2: “No” instead of “Yes”; 3: “No” instead of “Yes”; đây là điểm khác trực tiếp với đáp án. (3) Yes: protected-material evaluation tách biệt với harmful-content severity filtering, nên hai kết quả 6% giống nhau cho thấy metric này không bị ảnh hưởng bởi các…</li></ul>"
  },
  {
    "id": "AI-103-094",
    "exam": "AI-103",
    "number": 94,
    "missingImages": 0,
    "question": "<p><strong>DRAG DROP</strong> - You have a Microsoft Foundry project that contains a multi-agent solution. The agents use tool calling to query internal systems. </p><p>You need to implement responsible AI auditing to meet the following requirements: </p><ul><li>Capture all the nested operations across the entire agent run. </li><li>Record tool invocation arguments and retuned results as metadata. </li></ul><p>What should you use for each requirement? </p><p>To answer, drag the appropriate options to the correct targets Each option may be used once, more than once, or not at all. You may need o dag the split bar between panes or scroll to view content. </p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-94.webp\"/></em></p>",
    "options": {
      "A": "<p>Hierarchical spans; Tool call attributes</p>",
      "B": "<p>A KQL query filter; Trace sampling policy</p>",
      "C": "<p>Sampling; Tool call attributes</p>",
      "D": "<p>Hierarchical spans; A KQL query filter</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Hierarchical spans tạo cấu trúc trace cha-con, capture các operation lồng nhau của agent, model và tool xuyên suốt toàn bộ run. Tool call attributes lưu tool invocation metadata liên quan, bao gồm arguments và returned results. Sampling và trace-sampling policy quyết định giữ lại bao nhiêu trace, còn KQL filter truy vấn telemetry đã thu thập; không lựa chọn nào trong hai loại đó capture nested operation hoặc ghi tool-call metadata.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. A KQL query filter; Trace sampling policy:</strong> “A KQL query filter; Trace sampling policy” sai vì “A KQL query filter; Trace sampling policy” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Sampling và trace-sampling policy quyết định giữ lại bao nhiêu trace, còn KQL filter truy vấn telemetry đã thu thập</li><li><strong>C. Sampling; Tool call attributes:</strong> “Sampling; Tool call attributes” sai vì “Sampling; Tool call attributes” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Tool call attributes lưu tool invocation metadata liên quan, bao gồm arguments và returned results.</li><li><strong>D. Hierarchical spans; A KQL query filter:</strong> “Hierarchical spans; A KQL query filter” sai vì “Hierarchical spans; A KQL query filter” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Hierarchical spans tạo cấu trúc trace cha-con, capture các operation lồng nhau của agent, model và tool xuyên suốt toàn bộ run.</li></ul>"
  },
  {
    "id": "AI-103-095",
    "exam": "AI-103",
    "number": 95,
    "missingImages": 0,
    "question": "<p><strong>DRAG DROP</strong> - You have a Microsoft Foundry project that contains an agent. </p><p>The agent uses threads and file uploads and calls an Azure OpenAI model deployment. </p><p>During load testing, calls intermittently fall and return an HTTP 429 rate limit exceeded error. </p><p>Some user uploads fail and generate an HTTP 400 file size exceeded error. </p><p>You need to mitigate the errors and reduce call failures. </p><p>The solution must remain within the service and model limits. </p><p>What should you do to resolve each error? </p><p>To answer, drag the appropriate actions to the correct errors. Each action may be used once, more than once or not at all. You may need to drag the split bar between panes or scroll to view content. </p><p><strong>NOTE:</strong> <em>Each comet selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-95.webp\"/></em></p>",
    "options": {
      "A": "<p>HTTP 429: Implement exponential backoff and jitter in the retry logic; HTTP 400: Split content into smaller files before uploading the files.</p>",
      "B": "<p>HTTP 429: Increase tenant-wide quotas; HTTP 400: Move large content to files and use file search.</p>",
      "C": "<p>HTTP 429: Use additional agent tools to reduce the message size; HTTP 400: Implement exponential backoff and jitter in the retry logic.</p>",
      "D": "<p>HTTP 429: Split content into smaller files before uploading the files; HTTP 400: Increase tenant-wide quotas.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. HTTP 429 là throttling, nên retry với exponential backoff và jitter ngẫu nhiên để giãn retry và vẫn nằm trong service/model rate limit. HTTP 400 file size exceeded là vi phạm giới hạn kích thước request, nên cần tách content thành file nhỏ hơn trước khi upload. Tăng tenant-wide quota không trực tiếp xử lý intermittent rate-limit response trong giới hạn service/model hiện tại, và các action khác không giải quyết lỗi upload size cụ thể này.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. HTTP 429: Increase tenant-wide quotas; HTTP 400: Move large content to files and use file search.:</strong> “HTTP 429: Increase tenant-wide quotas; HTTP 400: Move large content to files and use file search” sai vì Nó chọn HTTP 429: “Increase tenant-wide quotas” instead of “Implement exponential backoff and jitter in the retry logic”; HTTP 400: “Move large content to files and use file search.” instead of “Split content into smaller files before uploading the files.”; đây là điểm khác trực tiếp với đáp án. HTTP 429 là throttling, nên retry với exponential backoff và jitter ngẫu nhiên để giãn retry và vẫn nằm trong service/model rate limit.</li><li><strong>C. HTTP 429: Use additional agent tools to reduce the message size; HTTP 400: Implement exponential backoff and jitter in the retry logic.:</strong> “HTTP 429: Use additional agent tools to reduce the message size; HTTP 400: Implement exponential backoff and jitter in the retry logic” sai vì Nó chọn HTTP 429: “Use additional agent tools to reduce the message size” instead of “Implement exponential backoff and jitter in the retry logic”; HTTP 400: “Implement exponential backoff and jitter in the retry logic.” instead of “Split content into smaller files before uploading the files.”; đây là điểm khác trực tiếp với đáp án. HTTP 429 là throttling, nên retry với exponential backoff và jitter ngẫu nhiên để giãn retry và vẫn nằm trong service/model rate limit.</li><li><strong>D. HTTP 429: Split content into smaller files before uploading the files; HTTP 400: Increase tenant-wide quotas.:</strong> “HTTP 429: Split content into smaller files before uploading the files; HTTP 400: Increase tenant-wide quotas” sai vì Nó chọn HTTP 429: “Split content into smaller files before uploading the files” instead of “Implement exponential backoff and jitter in the retry logic”; HTTP 400: “Increase tenant-wide quotas.” instead of “Split content into smaller files before uploading the files.”; đây là điểm khác trực tiếp với đáp án. HTTP 429 là throttling, nên retry với exponential backoff và jitter ngẫu nhiên để giãn retry và vẫn nằm trong service/model rate limit.</li></ul>"
  },
  {
    "id": "AI-103-096",
    "exam": "AI-103",
    "number": 96,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project.\n</p><p>You need to deploy a model from the model catalog to support a search solution for internal policy documents. </p><p>The model must generate vector representations of the text in the documents and of user queries.\n</p><p>Which type of model should you use?</p>",
    "options": {
      "A": "<p>an embedding model</p>",
      "B": "<p>an image generation model</p>",
      "C": "<p>a large language model (LLM)</p>",
      "D": "<p>a small language model (SLM)</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Embedding model chuyển document text và user query thành numerical vector representation để có thể so sánh semantic similarity trong search index. Image-generation model tạo ảnh, còn LLM và SLM tạo sinh hoặc reasoning trên ngôn ngữ nhưng không phải model type chuyên dụng để tạo vector phục vụ semantic retrieval.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. an image generation model:</strong> “an image generation model” sai vì “an image generation model” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Image-generation model tạo ảnh, còn LLM và SLM tạo sinh hoặc reasoning trên ngôn ngữ nhưng không phải model type chuyên dụng để tạo vector phục vụ semantic retrieval.</li><li><strong>C. a large language model (LLM):</strong> “a large language model (LLM)” sai vì “a large language model (LLM)” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Image-generation model tạo ảnh, còn LLM và SLM tạo sinh hoặc reasoning trên ngôn ngữ nhưng không phải model type chuyên dụng để tạo vector phục vụ semantic retrieval.</li><li><strong>D. a small language model (SLM):</strong> “a small language model (SLM)” sai vì “a small language model (SLM)” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Image-generation model tạo ảnh, còn LLM và SLM tạo sinh hoặc reasoning trên ngôn ngữ nhưng không phải model type chuyên dụng để tạo vector phục vụ semantic retrieval.</li></ul>"
  },
  {
    "id": "AI-103-097",
    "exam": "AI-103",
    "number": 97,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project.\n</p><p>You need to deploy a model from the model catalog to support real-time inference. </p><p>The solution must meet the following requirements:\n</p><ul><li>Use key-based authentication.\n</li><li>Support real-time REST API access.\n</li><li>NOT consume the vCPU quota of the virtual machines in the Azure subscription.\n</li></ul><p>Which type of deployment should you use?</p>",
    "options": {
      "A": "<p>serverless API</p>",
      "B": "<p>batch</p>",
      "C": "<p>self-hosted container</p>",
      "D": "<p>standard</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Serverless API deployment cung cấp real-time inference qua REST endpoint với key-based authentication, trong khi Microsoft quản lý compute nên không tiêu thụ virtual-machine vCPU quota của Azure subscription. Batch deployment là bất đồng bộ, self-hosted container dùng compute resource của bạn, còn standard deployment không phù hợp với yêu cầu serverless model-catalog endpoint trong tình huống này.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. batch:</strong> “batch” sai vì “batch” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Batch deployment là bất đồng bộ, self-hosted container dùng compute resource của bạn, còn standard deployment không phù hợp với yêu cầu serverless model-catalog endpoint trong…</li><li><strong>C. self-hosted container:</strong> “self-hosted container” sai vì “self-hosted container” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Batch deployment là bất đồng bộ, self-hosted container dùng compute resource của bạn, còn standard deployment không phù hợp với yêu cầu serverless model-catalog endpoint trong…</li><li><strong>D. standard:</strong> “standard” sai vì “standard” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Batch deployment là bất đồng bộ, self-hosted container dùng compute resource của bạn, còn standard deployment không phù hợp với yêu cầu serverless model-catalog endpoint trong…</li></ul>"
  },
  {
    "id": "AI-103-098",
    "exam": "AI-103",
    "number": 98,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You plan to create a Microsoft Foundry project named Project1 that will contain an agent and use an Azure key vault named KV1. </p><p>You need to configure a connection from Project1 to KV1. </p><p>How should you complete the Bicep code? </p><p>To answer, select the appropriate options in the answer area? </p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-98.webp\"/></em></p>",
    "options": {
      "A": "<p>category: 'AzureKeyVault'; authType: 'AccountManagedIdentity'</p>",
      "B": "<p>category: 'AzureAIService'; authType: 'AccountKey'</p>",
      "C": "<p>category: 'AzureOpenAI'; authType: 'ApiKey'</p>",
      "D": "<p>category: 'AzureKeyVault'; authType: 'ApiKey'</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Connection target là Azure Key Vault, nên category phải là 'AzureKeyVault'. Đặt authType thành 'AccountManagedIdentity' để Foundry account dùng managed identity xác thực keyless tới KV1. AzureAIService và AzureOpenAI là connection category không đúng cho Key Vault, còn AccountKey và ApiKey yêu cầu key-based credential thay vì cách managed identity.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. category: 'AzureAIService'; authType: 'AccountKey':</strong> “category: 'AzureAIService'; authType: 'AccountKey'” sai vì Nó chọn category: “'AzureAIService'” instead of “'AzureKeyVault'”; authType: “'AccountKey'” instead of “'AccountManagedIdentity'”; đây là điểm khác trực tiếp với đáp án. AzureAIService và AzureOpenAI là connection category không đúng cho Key Vault, còn AccountKey và ApiKey yêu cầu key-based credential thay vì cách managed identity.</li><li><strong>C. category: 'AzureOpenAI'; authType: 'ApiKey':</strong> “category: 'AzureOpenAI'; authType: 'ApiKey'” sai vì Nó chọn category: “'AzureOpenAI'” instead of “'AzureKeyVault'”; authType: “'ApiKey'” instead of “'AccountManagedIdentity'”; đây là điểm khác trực tiếp với đáp án. AzureAIService và AzureOpenAI là connection category không đúng cho Key Vault, còn AccountKey và ApiKey yêu cầu key-based credential thay vì cách managed identity.</li><li><strong>D. category: 'AzureKeyVault'; authType: 'ApiKey':</strong> “category: 'AzureKeyVault'; authType: 'ApiKey'” sai vì Nó chọn authType: “'ApiKey'” instead of “'AccountManagedIdentity'”; đây là điểm khác trực tiếp với đáp án. Connection target là Azure Key Vault, nên category phải là 'AzureKeyVault'.</li></ul>"
  },
  {
    "id": "AI-103-099",
    "exam": "AI-103",
    "number": 99,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You have a Microsoft Foundry project.</p><p>You need to create a customer support agent that meets the following requirements:</p><ul><li>Grounds responses only in company policy documents stored in curated repositories</li><li>Retains customer preferences across separate chat sessions</li></ul><p>How should you configure the agent? </p><p>To answer, select the appropriate options in the answer area.</p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-99.webp\"/></em></p>",
    "options": {
      "A": "<p>Knowledge grounding: Configure retrieval from approved data sources. Memory: Enable agent memory that uses persistent storage.</p>",
      "B": "<p>Knowledge grounding: Upload the policy documents directly to the agent. Memory: Use orchestration-managed session context.</p>",
      "C": "<p>Knowledge grounding: Embed the policy documents directly into the agent instructions. Memory: Retain user preferences in the state of the client application.</p>",
      "D": "<p>Knowledge grounding: Configure retrieval from approved data sources. Memory: Use orchestration-managed session context.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Retrieval from approved data sources giới hạn grounding vào các kho tài liệu chính sách của công ty đã được tuyển chọn. Agent memory sử dụng persistent storage giữ lại preferences qua các phiên chat riêng biệt. Upload file trực tiếp cho agent có thể đưa vào nội dung chưa được tuyển chọn, còn nhúng policy vào instructions không phải cơ chế retrieval có khả năng mở rộng. Orchestration-managed session context không duy trì qua các phiên khác nhau, còn state phía client không phải là bộ nhớ bền vững của agent.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Knowledge grounding: Upload the policy documents directly to the agent. Memory: Use orchestration-managed session context.:</strong> “Knowledge grounding: Upload the policy documents directly to the agent. Memory: Use orchestration-managed session context” sai vì Nó chọn Knowledge grounding: “Upload the policy documents directly to the agent. Memory: Use orchestration-managed session context.” instead of “Configure retrieval from approved data sources. Memory: Enable agent memory that uses persistent storage.”; đây là điểm khác trực tiếp với đáp án. Agent memory sử dụng persistent storage giữ lại preferences qua các phiên chat riêng biệt.</li><li><strong>C. Knowledge grounding: Embed the policy documents directly into the agent instructions. Memory: Retain user preferences in the state of the client application.:</strong> “Knowledge grounding: Embed the policy documents directly into the agent instructions. Memory: Retain user preferences in the state of the client application” sai vì Nó chọn Knowledge grounding: “Embed the policy documents directly into the agent instructions. Memory: Retain user preferences in the state of the client application.” instead of “Configure retrieval from approved data sources. Memory: Enable agent memory that uses persistent storage.”; đây là điểm khác trực tiếp với đáp án. Agent memory sử dụng persistent storage giữ lại preferences qua các phiên chat riêng biệt.</li><li><strong>D. Knowledge grounding: Configure retrieval from approved data sources. Memory: Use orchestration-managed session context.:</strong> “Knowledge grounding: Configure retrieval from approved data sources. Memory: Use orchestration-managed session context” sai vì Nó chọn Knowledge grounding: “Configure retrieval from approved data sources. Memory: Use orchestration-managed session context.” instead of “Configure retrieval from approved data sources. Memory: Enable agent memory that uses persistent storage.”; đây là điểm khác trực tiếp với đáp án. Retrieval from approved data sources giới hạn grounding vào các kho tài liệu chính sách của công ty đã được tuyển chọn.</li></ul>"
  },
  {
    "id": "AI-103-100",
    "exam": "AI-103",
    "number": 100,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent. </p><p>The agent generates summaries from retrieved policy documents.\n</p><p>You need to improve response completeness. </p><p>The solution must be implemented in the logic of the application code before responses are returned.\n</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Add a retry evaluation before the responses are returned.</p>",
      "B": "<p>Decrease the value of the temperature parameter.</p>",
      "C": "<p>Increase the value of the presence_penalty parameter</p>",
      "D": "<p>Replace the model with a smaller deployment.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Thêm bước evaluation hoặc reflection ở phía application để kiểm tra summary đã bao phủ thông tin bắt buộc trong các policy document được truy xuất hay chưa. Nếu độ đầy đủ chưa đạt, ứng dụng có thể retry hoặc tạo lại phản hồi trước khi trả về. Temperature và presence_penalty chủ yếu ảnh hưởng hành vi sinh nội dung, không kiểm tra độ bao phủ thông tin cần thiết. Thay bằng model nhỏ hơn cũng không phải cách cải thiện completeness.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Decrease the value of the temperature parameter.:</strong> “Decrease the value of the temperature parameter” sai vì “Decrease the value of the temperature parameter” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Temperature và presence_penalty chủ yếu ảnh hưởng hành vi sinh nội dung, không kiểm tra độ bao phủ thông tin cần thiết.</li><li><strong>C. Increase the value of the presence_penalty parameter:</strong> “Increase the value of the presence_penalty parameter” sai vì “Increase the value of the presence_penalty parameter” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Temperature và presence_penalty chủ yếu ảnh hưởng hành vi sinh nội dung, không kiểm tra độ bao phủ thông tin cần thiết.</li><li><strong>D. Replace the model with a smaller deployment.:</strong> “Replace the model with a smaller deployment” sai vì “Replace the model with a smaller deployment” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Thay bằng model nhỏ hơn cũng không phải cách cải thiện completeness.</li></ul>"
  },
  {
    "id": "AI-103-101",
    "exam": "AI-103",
    "number": 101,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You develop a test method to verify the results retrieved from a call to the Azure Vision in Foundry Tools API. </p><p>The call is used to analyze the existence of company logos in images. </p><p>The call returns a collection of brands named brands. </p><p>You have the following code segment: </p><p><img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-101a.webp\"/></p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No. </p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-101b.webp\"/></em></p>",
    "options": {
      "A": "<p>Statement 1: Yes. Statement 2: Yes. Statement 3: No.</p>",
      "B": "<p>Statement 1: Yes. Statement 2: No. Statement 3: Yes.</p>",
      "C": "<p>Statement 1: No. Statement 2: Yes. Statement 3: Yes.</p>",
      "D": "<p>Statement 1: No. Statement 2: No. Statement 3: No.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Điều kiện brand.confidence &gt;= 0.75 sẽ hiển thị các brand có confidence từ 75% trở lên, nên statement 1 là Yes. rectangle.x và rectangle.y là tọa độ góc trên bên trái, nên statement 2 là Yes. rectangle.w và rectangle.h là chiều rộng và chiều cao, không phải tọa độ góc dưới bên phải; cần tính bằng x + w và y + h. Vì vậy statement 3 là No.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Statement 1: Yes. Statement 2: No. Statement 3: Yes.:</strong> “Statement 1: Yes. Statement 2: No. Statement 3: Yes” sai vì Nó chọn Statement 1: “Yes. Statement 2: No. Statement 3: Yes.” instead of “Yes. Statement 2: Yes. Statement 3: No.”; đây là điểm khác trực tiếp với đáp án. 75 sẽ hiển thị các brand có confidence từ 75% trở lên, nên statement 1 là Yes.</li><li><strong>C. Statement 1: No. Statement 2: Yes. Statement 3: Yes.:</strong> “Statement 1: No. Statement 2: Yes. Statement 3: Yes” sai vì Nó chọn Statement 1: “No. Statement 2: Yes. Statement 3: Yes.” instead of “Yes. Statement 2: Yes. Statement 3: No.”; đây là điểm khác trực tiếp với đáp án. 75 sẽ hiển thị các brand có confidence từ 75% trở lên, nên statement 1 là Yes.</li><li><strong>D. Statement 1: No. Statement 2: No. Statement 3: No.:</strong> “Statement 1: No. Statement 2: No. Statement 3: No” sai vì Nó chọn Statement 1: “No. Statement 2: No. Statement 3: No.” instead of “Yes. Statement 2: Yes. Statement 3: No.”; đây là điểm khác trực tiếp với đáp án. 75 sẽ hiển thị các brand có confidence từ 75% trở lên, nên statement 1 là Yes.</li></ul>"
  },
  {
    "id": "AI-103-102",
    "exam": "AI-103",
    "number": 102,
    "missingImages": 0,
    "question": "<p>You have an Azure subscription.\nYou plan to build an app that will use the Azure AI DALL-E model. </p><p>You need to deploy the model.\n</p><p>What should you use?</p>",
    "options": {
      "A": "<p>the Azure SDK for Python and PowerShell cmdlets.</p>",
      "B": "<p>the Azure SDK for JavaScript and Azure Machine Learning Studio.</p>",
      "C": "<p>Microsoft Foundry and the Azure Command Line Interface (CLI)</p>",
      "D": "<p>the Azure portal and Microsoft Graph API</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>C là đúng. Bạn triển khai Azure AI DALL-E thông qua Microsoft Foundry, hoặc tự động hóa việc triển khai bằng Azure CLI. Azure Machine Learning Studio và Microsoft Graph API không phải là bề mặt triển khai cho Azure AI DALL-E model deployment trong Foundry.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. the Azure SDK for Python and PowerShell cmdlets.:</strong> “the Azure SDK for Python and PowerShell cmdlets” sai vì “the Azure SDK for Python and PowerShell cmdlets” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Bạn triển khai Azure AI DALL-E thông qua Microsoft Foundry, hoặc tự động hóa việc triển khai bằng Azure CLI.</li><li><strong>B. the Azure SDK for JavaScript and Azure Machine Learning Studio.:</strong> “the Azure SDK for JavaScript and Azure Machine Learning Studio” sai vì “the Azure SDK for JavaScript and Azure Machine Learning Studio” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure Machine Learning Studio và Microsoft Graph API không phải là bề mặt triển khai cho Azure AI DALL-E model deployment trong Foundry.</li><li><strong>D. the Azure portal and Microsoft Graph API:</strong> “the Azure portal and Microsoft Graph API” sai vì “the Azure portal and Microsoft Graph API” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure Machine Learning Studio và Microsoft Graph API không phải là bề mặt triển khai cho Azure AI DALL-E model deployment trong Foundry.</li></ul>"
  },
  {
    "id": "AI-103-103",
    "exam": "AI-103",
    "number": 103,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You have an Azure subscription.</p><p>You need to create a new resource that will generate fictional stores in response to user prompts. </p><p>The solution must ensure that the resource uses a customer-managed key to protect data.</p><p>How should you complete the script? </p><p>To answer, select the appropriate options in the answer area.</p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-103.webp\"/></em></p>",
    "options": {
      "A": "<p>--kind OpenAI; --encryption</p>",
      "B": "<p>--kind AIServices; --api-properties</p>",
      "C": "<p>--kind LanguageAuthoring; --assign-identity</p>",
      "D": "<p>--kind OpenAI; --api-properties</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Việc tạo các câu chuyện hư cấu từ prompt cần Azure OpenAI resource, được khai báo bằng --kind OpenAI. JSON hiển thị cấu hình keySource là Microsoft.KeyVault cùng các key vault properties, nên phải truyền qua tham số --encryption để cấu hình customer-managed key. --api-properties không dùng để cấu hình customer-managed encryption.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. --kind AIServices; --api-properties:</strong> “--kind AIServices; --api-properties” sai vì “--kind AIServices; --api-properties” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Việc tạo các câu chuyện hư cấu từ prompt cần Azure OpenAI resource, được khai báo bằng --kind OpenAI.</li><li><strong>C. --kind LanguageAuthoring; --assign-identity:</strong> “--kind LanguageAuthoring; --assign-identity” sai vì “--kind LanguageAuthoring; --assign-identity” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Việc tạo các câu chuyện hư cấu từ prompt cần Azure OpenAI resource, được khai báo bằng --kind OpenAI.</li><li><strong>D. --kind OpenAI; --api-properties:</strong> “--kind OpenAI; --api-properties” sai vì “--kind OpenAI; --api-properties” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Việc tạo các câu chuyện hư cấu từ prompt cần Azure OpenAI resource, được khai báo bằng --kind OpenAI.</li></ul>"
  },
  {
    "id": "AI-103-104",
    "exam": "AI-103",
    "number": 104,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You have a Python application collects customer comments before posting them to a public forum.</p><p>You need to send a text comment to Azure AI Content Safety and return the self-harm severity from the response.</p><p>How should you complete the code? </p><p>To answer, select the appropriate options in the answer area.</p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-104.webp\"/></em></p>",
    "options": {
      "A": "<p>request = AnalyzeTextOptions(text=comment); response = client.analyze_text(request)</p>",
      "B": "<p>request = AnalyzeTextOptions(categories=comment); response = client.analyze_text(request)</p>",
      "C": "<p>request = AnalyzeTextOptions(text=comment); response = client.analyze_image(request)</p>",
      "D": "<p>request = TextCategory.SELF_HARM(comment); response = client.moderate_text(request)</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. AnalyzeTextOptions nhận customer comment qua đối số text, và ContentSafetyClient.analyze_text gửi nội dung text đó tới Azure AI Content Safety. Sau đó có thể lọc response.categories_analysis theo TextCategory.SELF_HARM và trả về severity. analyze_image dùng cho image content, categories không phải text payload, còn các method khác không phải SDK call phù hợp trong tình huống này.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. request = AnalyzeTextOptions(categories=comment); response = client.analyze_text(request):</strong> “request = AnalyzeTextOptions(categories=comment); response = client.analyze_text(request)” sai vì “request = AnalyzeTextOptions(categories=comment); response = client.analyze_text(request)” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. AnalyzeTextOptions nhận customer comment qua đối số text, và ContentSafetyClient.</li><li><strong>C. request = AnalyzeTextOptions(text=comment); response = client.analyze_image(request):</strong> “request = AnalyzeTextOptions(text=comment); response = client.analyze_image(request)” sai vì “request = AnalyzeTextOptions(text=comment); response = client.analyze_image(request)” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. AnalyzeTextOptions nhận customer comment qua đối số text, và ContentSafetyClient.</li><li><strong>D. request = TextCategory.SELF_HARM(comment); response = client.moderate_text(request):</strong> “request = TextCategory.SELF_HARM(comment); response = client.moderate_text(request)” sai vì “request = TextCategory.SELF_HARM(comment); response = client.moderate_text(request)” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. AnalyzeTextOptions nhận customer comment qua đối số text, và ContentSafetyClient.</li></ul>"
  },
  {
    "id": "AI-103-105",
    "exam": "AI-103",
    "number": 105,
    "missingImages": 0,
    "question": "<p>You have a custom named entity recognition (NER) project in Azure Language in Foundry Tools for support tickets. </p><p>The schema for the project contains an entity type named ContactInfo.\n</p><p>In tagged training files, ContactInfo is used for phone numbers, email addresses, and social media handles.\n</p><p>Model evaluation shows low precision for ContactInfo, including false positives in which nearby text is extracted as ContactInfo.\n</p><p>You need to improve the precision of the project.\n</p><p>What should you do before retraining the model?</p>",
    "options": {
      "A": "<p>Lower the confidence threshold for ContactInfo.</p>",
      "B": "<p>Trigger an auto-labeling job.</p>",
      "C": "<p>Add more support tickets as training data and label more ContactInfo entities.</p>",
      "D": "<p>Replace ContactInfo by using Phone, Email, and SocialMedia entities. Relabel every matching span.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>D là đúng. ContactInfo đang gộp các mẫu có đặc điểm và ngữ cảnh khác nhau: số điện thoại, email và social-media handle. Tách thành các entity cụ thể rồi gắn nhãn lại mọi span giúp model có tín hiệu huấn luyện rõ hơn và giảm false positive từ phần text lân cận. Giảm threshold thường tăng recall chứ không tăng precision. Thêm ví dụ cho cùng một nhãn quá rộng hoặc auto-labeling không giải quyết vấn đề thiết kế schema mơ hồ.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Lower the confidence threshold for ContactInfo.:</strong> “Lower the confidence threshold for ContactInfo” sai vì “Lower the confidence threshold for ContactInfo” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. ContactInfo đang gộp các mẫu có đặc điểm và ngữ cảnh khác nhau: số điện thoại, email và social-media handle.</li><li><strong>B. Trigger an auto-labeling job.:</strong> “Trigger an auto-labeling job” sai vì “Trigger an auto-labeling job” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. ContactInfo đang gộp các mẫu có đặc điểm và ngữ cảnh khác nhau: số điện thoại, email và social-media handle.</li><li><strong>C. Add more support tickets as training data and label more ContactInfo entities.:</strong> “Add more support tickets as training data and label more ContactInfo entities” sai vì “Add more support tickets as training data and label more ContactInfo entities” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. ContactInfo đang gộp các mẫu có đặc điểm và ngữ cảnh khác nhau: số điện thoại, email và social-media handle.</li></ul>"
  },
  {
    "id": "AI-103-106",
    "exam": "AI-103",
    "number": 106,
    "missingImages": 0,
    "question": "<p>You are building a text-to-speech solution that uses Azure Speech in Foundry Tools to read instructions from the script in a text file.</p><p>You discover that the solution often pronounces technical terms incorrectly.</p><p>You need to prevent the incorrect pronunciations. </p><p>The solution must minimize development effort.</p><p>What should you do?</p>",
    "options": {
      "A": "<p>From Speech Studio, train a custom neural voice</p>",
      "B": "<p>Use Speech Synthesis Markup Language (SSML) to specify phonemes.</p>",
      "C": "<p>Use Speech Synthesis Markup Language (SSML) to apply say as rules.</p>",
      "D": "<p>Use Speech Synthesis Markup Language (SSML) to adjust the prosody of the voice.</p>",
      "E": "<p>From Azure OpenAI use the Whisper model.</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. SSML phonemes cho phép chỉ định chính xác cách một từ hoặc thuật ngữ kỹ thuật phải được phát âm, nên trực tiếp ngăn việc phát âm sai với công sức triển khai tối thiểu. Phần tử say-as thay đổi cách diễn giải text, ví dụ ngày tháng hoặc số, nhưng không phải cơ chế điều khiển phiên âm chính xác cần ở đây. Prosody chỉ điều chỉnh tốc độ, cao độ và âm lượng. Huấn luyện custom neural voice tốn nhiều công sức hơn, còn Whisper là model speech-to-text chứ không phải text-to-speech.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. From Speech Studio, train a custom neural voice:</strong> “From Speech Studio, train a custom neural voice” sai vì “From Speech Studio, train a custom neural voice” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Huấn luyện custom neural voice tốn nhiều công sức hơn, còn Whisper là model speech-to-text chứ không phải text-to-speech.</li><li><strong>C. Use Speech Synthesis Markup Language (SSML) to apply say as rules.:</strong> “Use Speech Synthesis Markup Language (SSML) to apply say as rules” sai vì “Use Speech Synthesis Markup Language (SSML) to apply say as rules” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. SSML phonemes cho phép chỉ định chính xác cách một từ hoặc thuật ngữ kỹ thuật phải được phát âm, nên trực tiếp ngăn việc phát âm sai với công sức triển khai tối thiểu.</li><li><strong>D. Use Speech Synthesis Markup Language (SSML) to adjust the prosody of the voice.:</strong> “Use Speech Synthesis Markup Language (SSML) to adjust the prosody of the voice” sai vì “Use Speech Synthesis Markup Language (SSML) to adjust the prosody of the voice” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Huấn luyện custom neural voice tốn nhiều công sức hơn, còn Whisper là model speech-to-text chứ không phải text-to-speech.</li><li><strong>E. From Azure OpenAI use the Whisper model.:</strong> “From Azure OpenAI use the Whisper model” sai vì “From Azure OpenAI use the Whisper model” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Huấn luyện custom neural voice tốn nhiều công sức hơn, còn Whisper là model speech-to-text chứ không phải text-to-speech.</li></ul>"
  },
  {
    "id": "AI-103-107",
    "exam": "AI-103",
    "number": 107,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You have a Python application that redacts sensitive information before sending prompt text to a language model. </p><p>The application has the following code: <img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-107a.webp\"/></p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-107b.webp\"/></em></p>",
    "options": {
      "A": "<p>Statement 1: No. Statement 2: Yes. Statement 3: Yes.</p>",
      "B": "<p>Statement 1: Yes. Statement 2: Yes. Statement 3: No.</p>",
      "C": "<p>Statement 1: No. Statement 2: No. Statement 3: Yes.</p>",
      "D": "<p>Statement 1: Yes. Statement 2: No. Statement 3: No.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Danh sách PII category chỉ có Person và PhoneNumber, không có US SSN; do đó audit không có entity record cho Contact và SSN, nên statement 1 là No. Email address không thuộc PII category được cấu hình nên john.doe@contoso.com vẫn nằm trong text_for_model. Các số điện thoại được nhận diện và entityMask thay thế bằng mask theo entity type, nên statement 2 và statement 3 là Yes.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Statement 1: Yes. Statement 2: Yes. Statement 3: No.:</strong> “Statement 1: Yes. Statement 2: Yes. Statement 3: No” sai vì Nó chọn Statement 1: “Yes. Statement 2: Yes. Statement 3: No.” instead of “No. Statement 2: Yes. Statement 3: Yes.”; đây là điểm khác trực tiếp với đáp án. Các số điện thoại được nhận diện và entityMask thay thế bằng mask theo entity type, nên statement 2 và statement 3 là Yes.</li><li><strong>C. Statement 1: No. Statement 2: No. Statement 3: Yes.:</strong> “Statement 1: No. Statement 2: No. Statement 3: Yes” sai vì Nó chọn Statement 1: “No. Statement 2: No. Statement 3: Yes.” instead of “No. Statement 2: Yes. Statement 3: Yes.”; đây là điểm khác trực tiếp với đáp án. Các số điện thoại được nhận diện và entityMask thay thế bằng mask theo entity type, nên statement 2 và statement 3 là Yes.</li><li><strong>D. Statement 1: Yes. Statement 2: No. Statement 3: No.:</strong> “Statement 1: Yes. Statement 2: No. Statement 3: No” sai vì Nó chọn Statement 1: “Yes. Statement 2: No. Statement 3: No.” instead of “No. Statement 2: Yes. Statement 3: Yes.”; đây là điểm khác trực tiếp với đáp án. Các số điện thoại được nhận diện và entityMask thay thế bằng mask theo entity type, nên statement 2 và statement 3 là Yes.</li></ul>"
  },
  {
    "id": "AI-103-108",
    "exam": "AI-103",
    "number": 108,
    "missingImages": 0,
    "question": "<p><strong>DRAG DROP</strong> - You are developing an application that will detect faulty components produced on a factory production line. </p><p>The components are specific to your business.</p><p>You need to use the Azure Custom Vision API to help detect common faults.</p><p>Which three actions should you perform in sequence? </p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-108.webp\"/></p>",
    "options": {
      "A": "<p>1. Create a project. 2. Upload and tag images. 3. Train the classifier model.</p>",
      "B": "<p>1. Initialize the training dataset. 2. Upload and tag images. 3. Train the object detection model.</p>",
      "C": "<p>1. Upload and tag images. 2. Create a project. 3. Train the classifier model.</p>",
      "D": "<p>1. Create a project. 2. Train the object detection model. 3. Upload and tag images.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Trong Custom Vision, trước hết tạo project, sau đó upload các ảnh linh kiện đại diện và gắn nhãn lỗi hoặc không lỗi phù hợp. Chỉ train classifier sau khi đã có ảnh được gắn nhãn. Object detection dùng khi ứng dụng cần xác định vị trí của object trong ảnh; bài này yêu cầu phát hiện các lỗi phổ biến của linh kiện nên classifier là phù hợp.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. 1. Initialize the training dataset. 2. Upload and tag images. 3. Train the object detection model.:</strong> “1. Initialize the training dataset. 2. Upload and tag images. 3. Train the object detection model” sai vì “1. Initialize the training dataset. 2. Upload and tag images. 3. Train the object detection model” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Trong Custom Vision, trước hết tạo project, sau đó upload các ảnh linh kiện đại diện và gắn nhãn lỗi hoặc không lỗi phù hợp.</li><li><strong>C. 1. Upload and tag images. 2. Create a project. 3. Train the classifier model.:</strong> “1. Upload and tag images. 2. Create a project. 3. Train the classifier model” sai vì “1. Upload and tag images. 2. Create a project. 3. Train the classifier model” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Trong Custom Vision, trước hết tạo project, sau đó upload các ảnh linh kiện đại diện và gắn nhãn lỗi hoặc không lỗi phù hợp.</li><li><strong>D. 1. Create a project. 2. Train the object detection model. 3. Upload and tag images.:</strong> “1. Create a project. 2. Train the object detection model. 3. Upload and tag images” sai vì “1. Create a project. 2. Train the object detection model. 3. Upload and tag images” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Trong Custom Vision, trước hết tạo project, sau đó upload các ảnh linh kiện đại diện và gắn nhãn lỗi hoặc không lỗi phù hợp.</li></ul>"
  },
  {
    "id": "AI-103-109",
    "exam": "AI-103",
    "number": 109,
    "missingImages": 0,
    "question": "<p>You are developing a new sales system that will process user-generated video and text from a public-facing website.\n</p><p>You plan to notify users that their data has been processed by the sales system.\n</p><p>Which responsible AI principle does this help meet?</p>",
    "options": {
      "A": "<p>fairness</p>",
      "B": "<p>transparency</p>",
      "C": "<p>inclusiveness</p>",
      "D": "<p>reliability and safety</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>B là đúng. Thông báo cho người dùng rằng video và text do họ tạo được hệ thống xử lý giúp họ thấy rõ AI system xử lý dữ liệu của mình như thế nào. Điều này hỗ trợ nguyên tắc responsible AI là transparency. Fairness liên quan đến kết quả công bằng, inclusiveness tập trung vào khả năng tiếp cận và sự tham gia, còn reliability and safety liên quan đến hành vi an toàn, đáng tin cậy của hệ thống.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. fairness:</strong> “fairness” sai vì “fairness” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Điều này hỗ trợ nguyên tắc responsible AI là transparency.</li><li><strong>C. inclusiveness:</strong> “inclusiveness” sai vì “inclusiveness” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Điều này hỗ trợ nguyên tắc responsible AI là transparency.</li><li><strong>D. reliability and safety:</strong> “reliability and safety” sai vì “reliability and safety” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Fairness liên quan đến kết quả công bằng, inclusiveness tập trung vào khả năng tiếp cận và sự tham gia, còn reliability and safety liên quan đến hành vi an toàn, đáng tin cậy của…</li></ul>"
  },
  {
    "id": "AI-103-110",
    "exam": "AI-103",
    "number": 110,
    "missingImages": 0,
    "question": "<p>You are designing a content management system.\n</p><p>You need to ensure that the reading experience is optimized for users who have reduced comprehension and learning differences, such as dyslexia. </p><p>The solution must minimize development effort.\n</p><p>Which Azure service should you include in the solution?</p>",
    "options": {
      "A": "<p>Azure Document Intelligence in Foundry Tools</p>",
      "B": "<p>Azure Language in Foundry Tools</p>",
      "C": "<p>Azure AI Immersive Reader</p>",
      "D": "<p>Azure Translator in Foundry Tools</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>C là đúng. Azure AI Immersive Reader cung cấp sẵn các hỗ trợ đọc như định dạng text, đọc to, line focus và các accessibility feature khác, được thiết kế để hỗ trợ người đọc có khác biệt trong học tập như dyslexia. Dịch vụ này giảm công sức phát triển vì các khả năng đó đã được cung cấp sẵn. Document Intelligence trích xuất dữ liệu tài liệu, Language phân tích text và Translator dịch ngôn ngữ; không dịch vụ nào trong số đó trực tiếp tạo trải nghiệm đọc được yêu cầu.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>A. Azure Document Intelligence in Foundry Tools:</strong> “Azure Document Intelligence in Foundry Tools” sai vì “Azure Document Intelligence in Foundry Tools” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure AI Immersive Reader cung cấp sẵn các hỗ trợ đọc như định dạng text, đọc to, line focus và các accessibility feature khác, được thiết kế để hỗ trợ người đọc có khác biệt…</li><li><strong>B. Azure Language in Foundry Tools:</strong> “Azure Language in Foundry Tools” sai vì “Azure Language in Foundry Tools” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure AI Immersive Reader cung cấp sẵn các hỗ trợ đọc như định dạng text, đọc to, line focus và các accessibility feature khác, được thiết kế để hỗ trợ người đọc có khác biệt…</li><li><strong>D. Azure Translator in Foundry Tools:</strong> “Azure Translator in Foundry Tools” sai vì “Azure Translator in Foundry Tools” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure AI Immersive Reader cung cấp sẵn các hỗ trợ đọc như định dạng text, đọc to, line focus và các accessibility feature khác, được thiết kế để hỗ trợ người đọc có khác biệt…</li></ul>"
  },
  {
    "id": "AI-103-111",
    "exam": "AI-103",
    "number": 111,
    "missingImages": 0,
    "question": "<p>You have an Azure subscription that contains an Azure App Service app named App1.\n</p><p>You provision a Microsoft Foundry Service resource named CSAccount1.\n</p><p>You need to configure App1 to access CSAccount1. </p><p>The solution must minimize administrative effort.\n</p><p>What should you use to configure App1?</p>",
    "options": {
      "A": "<p>the endpoint URI and subscription key</p>",
      "B": "<p>the endpoint URI and an OAuth token</p>",
      "C": "<p>the endpoint URI and a shared access signature (SAS) token</p>",
      "D": "<p>a system assigned managed identity and an X.509 certificate</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Microsoft Foundry Service resource có thể được gọi bằng endpoint URI và subscription key, đây là cấu hình đơn giản nhất cho App1. OAuth cần cấu hình identity và token bổ sung. SAS token áp dụng cho Azure Storage, không phải Foundry Service API. Có thể dùng managed identity cho keyless access với RBAC role phù hợp, nhưng không cần X.509 certificate và cách đó tăng công sức quản trị.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. the endpoint URI and an OAuth token:</strong> “the endpoint URI and an OAuth token” sai vì “the endpoint URI and an OAuth token” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Microsoft Foundry Service resource có thể được gọi bằng endpoint URI và subscription key, đây là cấu hình đơn giản nhất cho App1.</li><li><strong>C. the endpoint URI and a shared access signature (SAS) token:</strong> “the endpoint URI and a shared access signature (SAS) token” sai vì “the endpoint URI and a shared access signature (SAS) token” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Microsoft Foundry Service resource có thể được gọi bằng endpoint URI và subscription key, đây là cấu hình đơn giản nhất cho App1.</li><li><strong>D. a system assigned managed identity and an X.509 certificate:</strong> “a system assigned managed identity and an X.509 certificate” sai vì “a system assigned managed identity and an X.509 certificate” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Microsoft Foundry Service resource có thể được gọi bằng endpoint URI và subscription key, đây là cấu hình đơn giản nhất cho App1.</li></ul>"
  },
  {
    "id": "AI-103-112",
    "exam": "AI-103",
    "number": 112,
    "missingImages": 0,
    "question": "<p><strong>DRAG DROP</strong> - You have a web app that uses Azure AI Search.</p><p>When reviewing activity you see greater than expected search query volumes. </p><p>You suspect that the query key is compromised.</p><p>You need to prevent unauthorized access to the search endpoint and ensure that users only have read only access to the documents collection. </p><p>The solution must minimize app downtime.</p><p>Which three actions should you perform in sequence? </p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-112.webp\"/></p>",
    "options": {
      "A": "<p>1. Add a new query key. 2. Change the app to use the new key. 3. Delete the compromised key.</p>",
      "B": "<p>1. Regenerate the primary admin key. 2. Change the app to use the secondary admin key. 3. Delete the compromised key.</p>",
      "C": "<p>1. Delete the compromised key. 2. Add a new query key. 3. Change the app to use the new key.</p>",
      "D": "<p>1. Change the app to use the secondary admin key. 2. Regenerate the secondary admin key. 3. Add a new query key.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Trước hết tạo query key thay thế, cập nhật app dùng query key read-only mới đó, rồi mới xóa key bị lộ. Trình tự này duy trì khả năng hoạt động của dịch vụ đồng thời loại bỏ unauthorized access. Admin key cấp quyền quản trị và không đáp ứng yêu cầu người dùng chỉ có quyền read-only với document collection. Xóa key bị lộ trước có thể gây downtime không cần thiết cho ứng dụng.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. 1. Regenerate the primary admin key. 2. Change the app to use the secondary admin key. 3. Delete the compromised key.:</strong> “1. Regenerate the primary admin key. 2. Change the app to use the secondary admin key. 3. Delete the compromised key” sai vì Việc xóa file thay đổi nội dung dự án; đây không phải capability mà đề cần. Trước hết tạo query key thay thế, cập nhật app dùng query key read-only mới đó, rồi mới xóa key bị lộ.</li><li><strong>C. 1. Delete the compromised key. 2. Add a new query key. 3. Change the app to use the new key.:</strong> “1. Delete the compromised key. 2. Add a new query key. 3. Change the app to use the new key” sai vì Việc xóa file thay đổi nội dung dự án; đây không phải capability mà đề cần. Trước hết tạo query key thay thế, cập nhật app dùng query key read-only mới đó, rồi mới xóa key bị lộ.</li><li><strong>D. 1. Change the app to use the secondary admin key. 2. Regenerate the secondary admin key. 3. Add a new query key.:</strong> “1. Change the app to use the secondary admin key. 2. Regenerate the secondary admin key. 3. Add a new query key” sai vì “1. Change the app to use the secondary admin key. 2. Regenerate the secondary admin key. 3. Add a new query key” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Trước hết tạo query key thay thế, cập nhật app dùng query key read-only mới đó, rồi mới xóa key bị lộ.</li></ul>"
  },
  {
    "id": "AI-103-113",
    "exam": "AI-103",
    "number": 113,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You need to create a new resource that will be used to perform sentiment analysis and optical character recognition (OCR). </p><p>The solution must meet the following requirements:</p><ul><li>Use a single key and endpoint to access multiple services.</li><li>Consolidate billing for future services that you might use.</li><li>Support the use of Azure Vision in Foundry Tools in the future.</li></ul><p>How should you complete the HTTP request to create the new resource? </p><p>To answer, select the appropriate options in the answer area.</p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-113.webp\"/></em></p>",
    "options": {
      "A": "<p>PUT; CognitiveServices</p>",
      "B": "<p>POST; TextAnalytics</p>",
      "C": "<p>PATCH; ComputerVision</p>",
      "D": "<p>PUT; TextAnalytics</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Dùng PUT để tạo hoặc cập nhật một Azure Resource Manager resource có tên tại resource ID đã chỉ định. Kind CognitiveServices tạo multi-service resource, cung cấp một key và endpoint cho các dịch vụ được hỗ trợ đồng thời gộp billing. TextAnalytics và ComputerVision là các kind single-service nên không đáp ứng yêu cầu dùng Azure Vision cùng các dịch vụ khác qua một multi-service resource.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. POST; TextAnalytics:</strong> “POST; TextAnalytics” sai vì “POST; TextAnalytics” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. TextAnalytics và ComputerVision là các kind single-service nên không đáp ứng yêu cầu dùng Azure Vision cùng các dịch vụ khác qua một multi-service resource.</li><li><strong>C. PATCH; ComputerVision:</strong> “PATCH; ComputerVision” sai vì “PATCH; ComputerVision” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. TextAnalytics và ComputerVision là các kind single-service nên không đáp ứng yêu cầu dùng Azure Vision cùng các dịch vụ khác qua một multi-service resource.</li><li><strong>D. PUT; TextAnalytics:</strong> “PUT; TextAnalytics” sai vì “PUT; TextAnalytics” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. TextAnalytics và ComputerVision là các kind single-service nên không đáp ứng yêu cầu dùng Azure Vision cùng các dịch vụ khác qua một multi-service resource.</li></ul>"
  },
  {
    "id": "AI-103-114",
    "exam": "AI-103",
    "number": 114,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You are building a model to detect objects in images. </p><p>The performance of the model based on training data is shown in the following exhibit. <img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-114a.webp\"/></p><p>Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. </p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-114b.webp\"/></em></p>",
    "options": {
      "A": "<p>The percentage of false positives is: 0. The value for the number of true positives divided by the total number of true positives and false negatives is: 25.</p>",
      "B": "<p>The percentage of false positives is: 25. The value for the number of true positives divided by the total number of true positives and false negatives is: 100.</p>",
      "C": "<p>The percentage of false positives is: 100. The value for the number of true positives divided by the total number of true positives and false negatives is: 25.</p>",
      "D": "<p>The percentage of false positives is: 0. The value for the number of true positives divided by the total number of true positives and false negatives is: 77.2.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Exhibit hiển thị precision là 100%. Precision = TP / (TP + FP), vì vậy giá trị 100% có nghĩa không có false positive: 0%. Biểu thức TP / (TP + FN) là recall và exhibit hiển thị recall là 25.0%. Giá trị 77.2% là mAP, không phải recall.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. The percentage of false positives is: 25. The value for the number of true positives divided by the total number of true positives and false negatives is: 100.:</strong> “The percentage of false positives is: 25. The value for the number of true positives divided by the total number of true positives and false negatives is: 100” sai vì Nó chọn The percentage of false positives is: “25. The value for the number of true positives divided by the total number of true positives and false negatives is: 100.” instead of “0. The value for the number of true positives divided by the total number of true positives and false negatives is: 25.”; đây là điểm khác trực tiếp với đáp án. Precision = TP / (TP + FP), vì vậy giá trị 100% có nghĩa không có false positive: 0%.</li><li><strong>C. The percentage of false positives is: 100. The value for the number of true positives divided by the total number of true positives and false negatives is: 25.:</strong> “The percentage of false positives is: 100. The value for the number of true positives divided by the total number of true positives and false negatives is: 25” sai vì Nó chọn The percentage of false positives is: “100. The value for the number of true positives divided by the total number of true positives and false negatives is: 25.” instead of “0. The value for the number of true positives divided by the total number of true positives and false negatives is: 25.”; đây là điểm khác trực tiếp với đáp án. Precision = TP / (TP + FP), vì vậy giá trị 100% có nghĩa không có false positive: 0%.</li><li><strong>D. The percentage of false positives is: 0. The value for the number of true positives divided by the total number of true positives and false negatives is: 77.2.:</strong> “The percentage of false positives is: 0. The value for the number of true positives divided by the total number of true positives and false negatives is: 77.2” sai vì Nó chọn The percentage of false positives is: “0. The value for the number of true positives divided by the total number of true positives and false negatives is: 77.2.” instead of “0. The value for the number of true positives divided by the total number of true positives and false negatives is: 25.”; đây là điểm khác trực tiếp với đáp án. Precision = TP / (TP + FP), vì vậy giá trị 100% có nghĩa không có false positive: 0%.</li></ul>"
  },
  {
    "id": "AI-103-115",
    "exam": "AI-103",
    "number": 115,
    "missingImages": 0,
    "question": "<p>You are developing an application that will use Azure AI Search for internal documents.\n</p><p>You need to implement document-level filtering for Azure AI Search.\n</p><p>Which three actions should you include in the solution? </p><p>Each correct answer presents part of the solution.\n</p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>Add allowed groups to each index entry</p>",
      "B": "<p>Create one index per group.</p>",
      "C": "<p>Send access tokens from Microsoft Entra ID, with the search request.</p>",
      "D": "<p>Retrieve all the groups.</p>",
      "E": "<p>Retrieve the group memberships of the user</p>",
      "F": "<p>Supply the groups as a filter for the search requests</p>"
    },
    "answer": [
      "A",
      "E",
      "F"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A, E và F là đúng. Để thực hiện document-level security trimming, lưu allowed group ID của mỗi document trong một index field. Khi query, lấy group membership của user hiện tại rồi đưa các group ID đó vào OData filter của search request. Nhờ vậy chỉ trả về document mà user được phép xem. Tạo một index cho mỗi group không có khả năng mở rộng, còn lấy toàn bộ group là không cần thiết. Entra access token có thể xác thực request tới Azure AI Search nhưng tự nó không áp dụng document-level filtering.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Create one index per group.:</strong> “Create one index per group” sai vì “Create one index per group” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Để thực hiện document-level security trimming, lưu allowed group ID của mỗi document trong một index field.</li><li><strong>C. Send access tokens from Microsoft Entra ID, with the search request.:</strong> “Send access tokens from Microsoft Entra ID, with the search request” sai vì “Send access tokens from Microsoft Entra ID, with the search request” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Entra access token có thể xác thực request tới Azure AI Search nhưng tự nó không áp dụng document-level filtering.</li><li><strong>D. Retrieve all the groups.:</strong> “Retrieve all the groups” sai vì “Retrieve all the groups” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Khi query, lấy group membership của user hiện tại rồi đưa các group ID đó vào OData filter của search request.</li></ul>"
  },
  {
    "id": "AI-103-116",
    "exam": "AI-103",
    "number": 116,
    "missingImages": 0,
    "question": "<p>You have an Azure AI Search indexer that ingest PDF policy manuals.\n</p><p>Client applications must display page-level citations that have bounding polygons for both text and images.\n</p><p>You need to add a single built-in multimodal content extraction skill to the Azure AI Search skillset. </p><p>The solution must meet the following requirements:\n</p><ul><li>Provide text and image location metadata.\n</li><li>Extract tables that span multiple pages.\n</li></ul><p>What should you add?</p>",
    "options": {
      "A": "<p>Document Layout</p>",
      "B": "<p>Document Extraction</p>",
      "C": "<p>Azure Content Understanding</p>",
      "D": "<p>GenAI Prompt</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Document Layout là built-in multimodal extraction skill của Azure AI Search, cung cấp text và image location metadata theo layout, gồm bounding polygons, đồng thời có thể trích xuất bảng trải qua nhiều trang. Document Extraction không cung cấp output đa phương thức theo layout như yêu cầu. Azure Content Understanding là capability riêng trong Foundry Tools, không phải single built-in Azure AI Search skill được hỏi. GenAI Prompt không trích xuất document layout.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. Document Extraction:</strong> “Document Extraction” sai vì “Document Extraction” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Document Layout là built-in multimodal extraction skill của Azure AI Search, cung cấp text và image location metadata theo layout, gồm bounding polygons, đồng thời có thể trích…</li><li><strong>C. Azure Content Understanding:</strong> “Azure Content Understanding” sai vì “Azure Content Understanding” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. Azure Content Understanding là capability riêng trong Foundry Tools, không phải single built-in Azure AI Search skill được hỏi.</li><li><strong>D. GenAI Prompt:</strong> “GenAI Prompt” sai vì “GenAI Prompt” chỉ nêu một thao tác hoặc workflow, không phải Copilot feature tạo ra kết quả mà đề yêu cầu; đây không phải capability mà đề cần. GenAI Prompt không trích xuất document layout.</li></ul>"
  },
  {
    "id": "AI-103-117",
    "exam": "AI-103",
    "number": 117,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You are creating an enrichment pipeline that will use Azure AI Search. </p><p>The knowledge store contains unstructured JSON data and the text from scanned PDF documents.</p><p>Which projection type should you use for each data type? </p><p>To answer, select the appropriate options in the answer area.</p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-117.webp\"/></em></p>",
    "options": {
      "A": "<p>JSON data: Object projection. Extracted text data: Object projection.</p>",
      "B": "<p>JSON data: Table projection. Extracted text data: File projection.</p>",
      "C": "<p>JSON data: File projection. Extracted text data: Table projection.</p>",
      "D": "<p>JSON data: Table projection. Extracted text data: Object projection.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>A là đúng. Object projection lưu enriched content dưới dạng JSON object trong Azure Storage, phù hợp với JSON phi cấu trúc và text được trích xuất từ document. Table projection dùng cho dữ liệu có dạng quan hệ/bảng được lưu trong Azure Table Storage. File projection dùng cho binary content như normalized image hoặc file khác, không phù hợp với extracted text trong tình huống này.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. JSON data: Table projection. Extracted text data: File projection.:</strong> “JSON data: Table projection. Extracted text data: File projection” sai vì Nó chọn JSON data: “Table projection. Extracted text data: File projection.” instead of “Object projection. Extracted text data: Object projection.”; đây là điểm khác trực tiếp với đáp án. File projection dùng cho binary content như normalized image hoặc file khác, không phù hợp với extracted text trong tình huống này.</li><li><strong>C. JSON data: File projection. Extracted text data: Table projection.:</strong> “JSON data: File projection. Extracted text data: Table projection” sai vì Nó chọn JSON data: “File projection. Extracted text data: Table projection.” instead of “Object projection. Extracted text data: Object projection.”; đây là điểm khác trực tiếp với đáp án. File projection dùng cho binary content như normalized image hoặc file khác, không phù hợp với extracted text trong tình huống này.</li><li><strong>D. JSON data: Table projection. Extracted text data: Object projection.:</strong> “JSON data: Table projection. Extracted text data: Object projection” sai vì Nó chọn JSON data: “Table projection. Extracted text data: Object projection.” instead of “Object projection. Extracted text data: Object projection.”; đây là điểm khác trực tiếp với đáp án. Object projection lưu enriched content dưới dạng JSON object trong Azure Storage, phù hợp với JSON phi cấu trúc và text được trích xuất từ document.</li></ul>"
  },
  {
    "id": "AI-103-118",
    "exam": "AI-103",
    "number": 118,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> - You are building a custom vision model that will be deployed as part of an iOS app.</p><p>You have images of cats and dogs. Each image contains either a cat or a dog.</p><p>You need to use the Azure Custom Vision service to detect whether the image is of a cat or a dog.</p><p>How should you configure the project in the Azure Custom Vision portal? To answer, select the appropriate options in the answer area.</p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em><em><img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-118.webp\"/></em></p>",
    "options": {
      "A": "<p>Object Detection + Multilabel + General</p>",
      "B": "<p>Classification + Multilabel + General (compact)</p>",
      "C": "<p>Classification + Multiclass + General (compact)</p>",
      "D": "<p>Object Detection + Multiclass + Retail (compact)</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Bạn có ảnh chỉ chứa <strong>một con mèo hoặc một con chó</strong>. Ứng dụng iOS cần nhận đầu vào là một ảnh và trả về kết quả: ảnh đó là <code>cat</code> hay <code>dog</code>.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong>“either a cat or a dog”</strong> = hoặc mèo hoặc chó  </li><li><strong>“Each image contains either…”</strong> = mỗi ảnh chỉ có một loại  </li><li><strong>“deployed as part of an iOS app”</strong> = triển khai trong ứng dụng iOS</li></ul><h3>3. Đáp án</h3><p><strong>Classification + Multiclass + General (compact)</strong></p><h3>4. Vì sao đúng?</h3><ul><li><strong>Classification</strong>: dùng khi cần phân loại toàn bộ ảnh vào một nhãn. Bài toán chỉ cần kết luận ảnh là mèo hay chó, không cần biết con vật nằm ở vị trí nào.</li><li><strong>Multiclass (Single tag per image)</strong>: mỗi ảnh chỉ có một nhãn duy nhất: <code>cat</code> hoặc <code>dog</code>.</li><li><strong>General (compact)</strong>: domain gọn nhẹ, phù hợp để xuất và triển khai model trên thiết bị di động như iOS.</li></ul><p>Chuỗi suy luận:<br/><code>Mỗi ảnh có một đối tượng</code> → <code>một nhãn duy nhất</code> → <code>Multiclass</code> → <code>chỉ cần biết loại, không cần vị trí</code> → <code>Classification</code> → <code>chạy trong iOS</code> → <code>General (compact)</code>.</p><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><p><strong>A. Object Detection + Multilabel + General</strong><br/>Sai vì Object Detection tạo bounding box để xác định vị trí đối tượng. Đề không yêu cầu vị trí. Multilabel cũng sai vì mỗi ảnh không có nhiều nhãn.</p></li><li><p><strong>B. Classification + Multilabel + General (compact)</strong><br/>Classification và compact domain đều hợp lý, nhưng <strong>Multilabel</strong> sai. Multilabel dùng khi một ảnh có thể vừa là <code>cat</code> vừa là <code>dog</code>, trong khi đề nói mỗi ảnh chỉ chứa một trong hai.</p></li><li><p><strong>D. Object Detection + Multiclass + Retail (compact)</strong><br/>Multiclass phù hợp, nhưng Object Detection không cần thiết vì không phải xác định vị trí. Retail (compact) được tối ưu cho kịch bản bán lẻ, không phải lựa chọn General phù hợp nhất cho mèo và chó.</p></li></ul><h3>6. Câu thần chú</h3><p><strong>One image, one label, iOS deployment → Classification + Multiclass + General (compact).</strong></p>"
  },
  {
    "id": "AI-103-119",
    "exam": "AI-103",
    "number": 119,
    "missingImages": 0,
    "question": "<p>You have a Microsoft Foundry project that contains an agent. The agent has a Model Context Protocol (MCP) tool named kbsearch that queries a knowledge base stored in Azure AI Search.<br/>Some agent runs return answers from the base model without invoking the knowledge base, which results in responses without grounded citations.<br/>You are provided with the following code snippet that runs the agent.</p><p><img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-119.webp\"/>You need to deterministically force the agent to invoke kbsearch on each run.<br/>What should you do?</p>",
    "options": {
      "A": "<p>Add the response_format parameter to the create_and_process() method call.</p>",
      "B": "<p>Replace create_and_process() method with the create_thread_and_process_run() method.</p>",
      "C": "<p>Add the toolset parameter to the create_and_process() method call.</p>",
      "D": "<p>Add the tool_choice parameter to the create_and_process() method call.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Agent có MCP tool <code>kbsearch</code> để tra cứu knowledge base trong Azure AI Search. Tuy nhiên, ở một số lần chạy, model tự dùng kiến thức nền để trả lời thay vì gọi <code>kbsearch</code>. Hệ quả là câu trả lời không dựa trên knowledge base và thiếu grounded citations.</p><h3>2. Đề thực sự muốn gì?</h3><p>Từ khóa quan trọng:</p><ul><li><strong>“deterministically force”</strong> = ép một cách chắc chắn, không cho model tự chọn.</li><li><strong>“invoke kbsearch on each run”</strong> = mỗi lần chạy phải gọi đúng tool <code>kbsearch</code>.</li><li><strong>“without invoking the knowledge base”</strong> = vấn đề chính là model đang được phép bỏ qua tool.</li></ul><h3>3. Đáp án</h3><p>Thêm tham số <strong><code>tool_choice</code></strong> vào lời gọi <code>create_and_process()</code> để bắt buộc agent chọn MCP tool <code>kbsearch</code>.</p><h3>4. Vì sao đúng?</h3><p><code>tool_choice</code> là cơ chế kiểm soát việc lựa chọn tool trong một agent run.</p><p>Chuỗi nguyên nhân–kết quả:</p><p><code>Bắt buộc dùng knowledge base</code> → <code>bắt buộc gọi kbsearch</code> → <code>không để model tự quyết định có gọi tool hay không</code> → dùng <code>tool_choice</code>.</p><p>Khi <code>kbsearch</code> bị ép gọi, agent phải truy vấn Azure AI Search trước khi tạo câu trả lời. Vì vậy, câu trả lời có cơ sở để sử dụng thông tin ground và citations từ knowledge base.</p><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><p><strong>A. <code>response_format</code></strong><br/>Tham số này kiểm soát định dạng của phản hồi, ví dụ text hay JSON có cấu trúc. Nó không bắt buộc agent thực hiện một tool call.</p></li><li><p><strong>B. <code>create_thread_and_process_run()</code></strong><br/>Đây là phương thức thuận tiện để tạo thread và xử lý run. Thay đổi phương thức chạy không tự đặt quy tắc rằng <code>kbsearch</code> phải được gọi.</p></li><li><p><strong>C. <code>toolset</code></strong><br/><code>toolset</code> làm cho các tool khả dụng với agent. Nhưng “có sẵn để dùng” khác với “bắt buộc phải dùng”; model vẫn có thể chọn trả lời trực tiếp nếu không có <code>tool_choice</code>.</p></li></ul><h3>6. Câu thần chú</h3><p><strong>Phải gọi một tool cụ thể → dùng <code>tool_choice</code>.</strong></p>"
  },
  {
    "id": "AI-103-120",
    "exam": "AI-103",
    "number": 120,
    "missingImages": 0,
    "question": "<p>You are developing a text processing solution.<br/>You have the following function.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-120.webp\"/>You call the function and use the following string as the second argument.<br/>Our tour of London included a visit to Buckingham Palace<br/>What will be the output of the function?</p>",
    "options": {
      "A": "<p>London and Buckingham Palace only</p>",
      "B": "<p>Tour and visit only</p>",
      "C": "<p>Our tour of London included a visit to Buckingham Palace</p>",
      "D": "<p>London and Tour only</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Hàm gọi:</p><pre><code>textAnalyticsClient.recognize_entities(documents=[text])</code></pre><p>Sau đó, hàm lặp qua <code>response.entities</code> và in ra <code>entity.text</code>. Đây là chức năng <strong>Named Entity Recognition</strong>: nhận diện các thực thể có tên riêng, như địa điểm, tổ chức, người hoặc sản phẩm.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong><code>recognize_entities</code></strong>: nhận diện thực thể, không phải trích mọi từ quan trọng.</li><li><strong><code>response.entities</code></strong>: chỉ chứa các thực thể được dịch vụ nhận diện.</li><li><strong><code>entity.text</code></strong>: in văn bản gốc của từng thực thể.</li></ul><h3>3. Đáp án</h3><p>Hàm in:</p><pre><code>Key Words:\n        London\n        Buckingham Palace</code></pre><h3>4. Vì sao đúng?</h3><p>Trong câu:</p><p>Our tour of London included a visit to Buckingham Palace</p><ul><li><strong>London</strong> là một địa điểm.</li><li><strong>Buckingham Palace</strong> là một địa điểm/công trình có tên riêng.</li></ul><p>Vì cả hai là named entities, Azure AI Language trả về chúng trong <code>response.entities</code>.</p><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><p><strong>B. Tour and visit only</strong><br/><code>tour</code> và <code>visit</code> là danh từ thông thường/hành động, không phải thực thể có tên riêng.</p></li><li><p><strong>C. Entire sentence</strong><br/><code>recognize_entities()</code> không trả lại toàn bộ câu. Hàm chỉ in từng entity trong <code>response.entities</code>.</p></li><li><p><strong>D. London and Tour only</strong><br/><code>London</code> đúng, nhưng <code>Tour</code> không phải named entity. Đồng thời bỏ sót <code>Buckingham Palace</code>, là thực thể rõ ràng.</p></li></ul><h3>6. Câu thần chú</h3><p><strong><code>recognize_entities()</code> → tìm tên riêng, không tìm mọi keyword.</strong></p>"
  },
  {
    "id": "AI-103-121",
    "exam": "AI-103",
    "number": 121,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT </strong>-<br/>You are building a solution that students will use to find references for essays.<br/>You use the following code to start building the solution.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-121a.webp\"/>For each of the following statements, select Yes is the statement is true. Otherwise, select No.<br/><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-121b.webp\"/></em></p>",
    "options": {
      "A": "<p>Yes, Yes, Yes</p>",
      "B": "<p>No, No, Yes</p>",
      "C": "<p>No, Yes, No</p>",
      "D": "<p>Yes, No, No</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Ứng dụng hỗ trợ sinh viên tìm tài liệu tham khảo. Hàm <code>recognize_linked_entities()</code> tìm các thực thể có tên riêng trong văn bản, rồi liên kết chúng tới một nguồn kiến thức trực tuyến để trả về thông tin tham chiếu.</p><p>Ví dụ, trong câu này, <code>Space Needle</code> và <code>Seattle</code> có thể được nhận diện là linked entities.</p><h3>2. Đề thực sự muốn gì?</h3><p>Từ khóa quan trọng là:</p><ul><li><strong><code>recognize_linked_entities</code></strong>: nhận diện và liên kết thực thể, không phải nhận diện ngôn ngữ.</li><li><strong><code>url</code> attribute</strong>: URL của thực thể được liên kết.</li><li><strong><code>matches</code> attribute</strong>: các vị trí/đoạn xuất hiện của thực thể trong văn bản.</li></ul><h3>3. Đáp án</h3><ul><li>Phát biểu 1: <strong>No</strong></li><li>Phát biểu 2: <strong>No</strong></li><li>Phát biểu 3: <strong>Yes</strong></li></ul><p>Vì vậy chọn <strong>B</strong>.</p><h3>4. Vì sao đúng?</h3><ul><li><strong>Phát biểu 1 — No:</strong> Code không gọi <code>detect_language()</code>. Nó gọi <code>recognize_linked_entities()</code>, nên mục đích là nhận diện linked entities chứ không phát hiện ngôn ngữ.</li><li><strong>Phát biểu 2 — No:</strong> <code>url</code> của linked entity là liên kết đến nguồn kiến thức của thực thể, thường là một trang Wikipedia, không phải Bing search link.</li><li><strong>Phát biểu 3 — Yes:</strong> <code>matches</code> chứa các lần thực thể xuất hiện trong tài liệu, bao gồm vị trí như offset và length. Nhờ đó, ứng dụng biết chính xác thực thể được nhắc đến ở đâu.</li></ul><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><strong>A. Yes, Yes, Yes:</strong> Sai cả phát biểu 1 và 2: không có language detection, và URL không phải Bing search.</li><li><strong>C. No, Yes, No:</strong> Phát biểu 1 đúng là No, nhưng URL không phải Bing search và <code>matches</code> thực sự chỉ vị trí xuất hiện.</li><li><strong>D. Yes, No, No:</strong> Phát biểu 2 đúng là No, nhưng code không detect language; <code>matches</code> cũng cung cấp vị trí thực thể trong tài liệu.</li></ul><h3>6. Câu thần chú</h3><p><strong>Linked entities → knowledge URL + match positions; không phải language detection hay Bing search.</strong></p>"
  },
  {
    "id": "AI-103-122",
    "exam": "AI-103",
    "number": 122,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT </strong>-<br/>You have a Microsoft Foundry project for a support ticket triage app that reads ticket text from a database.</p><p>You need to ensure that the app meets the following requirements:</p><ul><li>Compares candidate models by quality, cost, and throughput</li><li>Prevents hosting model weights in the Azure subscription</li></ul><p>What should you configure? </p><p>To answer, select the appropriate options in the answer area.<br/><strong>NOTE</strong>: <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-122.webp\"/></em></p>",
    "options": {
      "A": "<p>Use deployment lists and license tabs; use a managed compute deployment.</p>",
      "B": "<p>Use model catalog leaderboards and model cards; use a serverless deployment.</p>",
      "C": "<p>Use tool catalog connections and run traces; bring your own model.</p>",
      "D": "<p>Configure private endpoint access; build a vector index.</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra? / What is happening?</h3><p>You need to select a model intelligently and run it without operating infrastructure that hosts the model weights.</p><h3>2. Từ khóa / Decisive cues</h3><ul><li><strong>“quality, cost, and throughput”</strong> → compare model performance and operational characteristics.</li><li><strong>“Prevents hosting model weights”</strong> → avoid customer-managed model hosting.</li></ul><h3>3. Đáp án / Answer</h3><p><strong>Use model catalog leaderboards and model cards; use a serverless deployment.</strong></p><h3>4. Vì sao đúng? / Why correct?</h3><ul><li><strong>Leaderboards and model cards</strong> support comparing available models through benchmarks, performance information, cost-related details, capabilities, and limitations.</li><li><strong>Serverless deployment</strong> provides inference without hosting or managing model weights in the Azure subscription.</li></ul><h3>5. Loại trừ đáp án / Distractor rejection</h3><ul><li><strong>A:</strong> Deployment lists/licenses do not provide the required model-performance comparison; managed compute hosts and runs deployed model infrastructure.</li><li><strong>C:</strong> Tool connections/traces concern agent tools and observability, not model comparison. BYOM requires supplying the model, conflicting with avoiding hosted weights.</li><li><strong>D:</strong> Private endpoints protect network access, and vector indexes support retrieval. Neither evaluates models or provides model inference without hosted weights.</li></ul><h3>6. Câu thần chú / Memory hook</h3><p><strong>Compare models → leaderboards + model cards. No hosted weights → serverless.</strong></p>"
  },
  {
    "id": "AI-103-123",
    "exam": "AI-103",
    "number": 123,
    "missingImages": 0,
    "question": "<p>You have an Azure subscription.</p><p>You need to build an app that will compare documents for semantic similarity. The solution must meet the following requirements:</p><ul><li>Return numeric vectors that represent the tokens of each document.</li><li>Minimize development effort.</li></ul><p>Which Azure OpenAI model should you use?</p>",
    "options": {
      "A": "<p>GPT-3.5</p>",
      "B": "<p>embeddings</p>",
      "C": "<p>GPT-4</p>",
      "D": "<p>DALL-E</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Ứng dụng cần so sánh ý nghĩa giữa các tài liệu, không chỉ tìm từ giống nhau. Để làm điều đó, mỗi tài liệu phải được chuyển thành một dãy số gọi là <strong>vector embedding</strong>.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong>“semantic similarity”</strong> = so sánh sự tương đồng về ngữ nghĩa.</li><li><strong>“numeric vectors”</strong> = các vector số.</li><li><strong>“Minimize development effort”</strong> = dùng khả năng có sẵn, chuyên dụng.</li></ul><h3>3. Đáp án</h3><p>Dùng model <strong>embeddings</strong> của Azure OpenAI.</p><h3>4. Vì sao đúng?</h3><p>Embedding model chuyển văn bản/token thành vector số biểu diễn ý nghĩa. Sau đó, ứng dụng có thể dùng cosine similarity hoặc một phép đo vector khác để xác định hai tài liệu có giống nhau về nội dung hay không.</p><p>Chuỗi logic:</p><p><code>So sánh ngữ nghĩa</code> → <code>cần vector biểu diễn ý nghĩa</code> → <code>embedding model</code> → <code>so sánh vector</code>.</p><p>Embedding là đúng mục đích nên giảm công sức phát triển, không cần tự xây dựng thuật toán chuyển văn bản thành vector.</p><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><strong>A. GPT-3.5:</strong> là generative language model, phù hợp chat, tạo hoặc tóm tắt văn bản; không phải model chuyên dụng để trả về embedding vectors.</li><li><strong>C. GPT-4:</strong> cũng là generative model, phù hợp suy luận và sinh nội dung; không phải lựa chọn trực tiếp để tạo vector semantic similarity.</li><li><strong>D. DALL-E:</strong> tạo hình ảnh từ mô tả văn bản, không dùng để biểu diễn tài liệu thành vector số.</li></ul><h3>6. Câu thần chú</h3><p><strong>Semantic similarity + numeric vectors → embeddings.</strong></p>"
  },
  {
    "id": "AI-103-124",
    "exam": "AI-103",
    "number": 124,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> -<br/>You are building an app that will provide users with definitions of common AI terms.</p><p>You create the following Python code.</p><p><img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-124a.webp\"/></p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p><strong>NOTE</strong>: <em>Each correct selection is worth point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-124b.webp\"/></em></p>",
    "options": {
      "A": "<p>No, Yes, Yes</p>",
      "B": "<p>Yes, Yes, Yes</p>",
      "C": "<p>No, No, Yes</p>",
      "D": "<p>Yes, No, No</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Ứng dụng cần giải thích các thuật ngữ AI. Model nhận một system prompt chung chung là “You are a helpful assistant” và một user prompt hỏi “What is an LLM?”.</p><p>Từ <strong>LLM</strong> có thể mang nhiều nghĩa trong thực tế, chẳng hạn <em>Large Language Model</em> hoặc <em>Master of Laws</em>. Vì ứng dụng nói về AI, prompt nên làm rõ ngữ cảnh AI.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong>“high degree of certainty”</strong> = mức độ chắc chắn cao.</li><li><strong>“in the context of AI models”</strong> = làm rõ nghĩa LLM theo ngữ cảnh AI.</li><li><strong>“must answer only”</strong> = chỉ dẫn ràng buộc phạm vi trả lời trong system prompt.</li><li><strong>“higher likelihood”</strong> = tăng khả năng có câu trả lời đúng mục tiêu, không phải bảo đảm tuyệt đối.</li></ul><h3>3. Đáp án</h3><ul><li>Phát biểu 1: <strong>No</strong></li><li>Phát biểu 2: <strong>Yes</strong></li><li>Phát biểu 3: <strong>Yes</strong></li></ul><p>Do đó chọn <strong>A</strong>.</p><h3>4. Vì sao đúng?</h3><ul><li><strong>Phát biểu 1 — No:</strong> LLM tạo phản hồi dựa trên xác suất; model có thể tạo nội dung không chính xác hoặc diễn giải nhầm chữ viết tắt. Code không có cơ chế grounding, kiểm tra nguồn, hay validation để đảm bảo độ chắc chắn cao.</li><li><strong>Phát biểu 2 — Yes:</strong> Thêm cụm <strong>“in the context of AI models”</strong> loại bỏ sự mơ hồ của từ LLM và hướng model trả lời về <em>Large Language Model</em>.</li><li><strong>Phát biểu 3 — Yes:</strong> System prompt mới giới hạn phạm vi trả lời vào AI language models. Chỉ dẫn rõ hơn giúp model có khả năng cao hơn tạo nội dung phù hợp với mục đích của ứng dụng.</li></ul><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><strong>B. Yes, Yes, Yes:</strong> Sai ở phát biểu 1 vì LLM không bảo đảm độ chính xác cao chỉ nhờ prompt.</li><li><strong>C. No, No, Yes:</strong> Sai ở phát biểu 2 vì việc bổ sung ngữ cảnh AI thực sự giúp giải quyết tính mơ hồ của “LLM”.</li><li><strong>D. Yes, No, No:</strong> Sai cả ba điểm: không có sự chắc chắn cao, ngữ cảnh AI giúp cải thiện câu hỏi, và system prompt cụ thể hơn tăng khả năng đáp ứng đúng.</li></ul><h3>6. Câu thần chú</h3><p><strong>Ambiguous term → add context. Better scope → stronger system prompt. No grounding → no certainty guarantee.</strong></p>"
  },
  {
    "id": "AI-103-125",
    "exam": "AI-103",
    "number": 125,
    "missingImages": 0,
    "question": "<p>You have an Azure OpenAI model named AI1.</p><p>You are building a web app named App1 by using the Azure OpenAI SDK.</p><p>You need to configure App1 to connect to AI1.</p><p>What information must you provide?</p>",
    "options": {
      "A": "<p>the deployment name, key, and model name</p>",
      "B": "<p>the endpoint, key, and model type</p>",
      "C": "<p>the deployment name, endpoint, and key</p>",
      "D": "<p>the endpoint, key, and model name</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>App1 dùng Azure OpenAI SDK để gửi yêu cầu đến model AI1. Trong Azure OpenAI, ứng dụng không gọi trực tiếp bằng model name; ứng dụng gọi một <strong>deployment</strong> của model.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong>“Azure OpenAI SDK”</strong>: cần thông tin kết nối Azure OpenAI resource.</li><li><strong>“model named AI1”</strong>: trong thực tế SDK cần tên deployment đã triển khai model.</li><li><strong>“connect to AI1”</strong>: cần địa chỉ dịch vụ, xác thực và deployment đích.</li></ul><h3>3. Đáp án</h3><p>Cần cung cấp:</p><ul><li><strong>Endpoint</strong>: URL của Azure OpenAI resource.</li><li><strong>Key</strong>: API key để xác thực.</li><li><strong>Deployment name</strong>: tên deployment để SDK biết model deployment nào cần gọi.</li></ul><h3>4. Vì sao đúng?</h3><p>Chuỗi kết nối là:</p><p><code>Endpoint</code> → tìm đúng Azure OpenAI resource<br/><code>Key</code> → xác thực App1<br/><code>Deployment name</code> → chọn AI1 deployment cần dùng  </p><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><strong>A. deployment name, key, and model name:</strong> thiếu <strong>endpoint</strong>, nên SDK không biết gửi request tới Azure OpenAI resource nào.</li><li><strong>B. endpoint, key, and model type:</strong> model type không xác định deployment cụ thể cần gọi.</li><li><strong>D. endpoint, key, and model name:</strong> thiếu <strong>deployment name</strong>. Một model có thể có nhiều deployments khác nhau, và SDK gọi deployment chứ không chỉ gọi model name.</li></ul><h3>6. Câu thần chú</h3><p><strong>Azure OpenAI SDK → endpoint + key + deployment name.</strong></p>"
  },
  {
    "id": "AI-103-126",
    "exam": "AI-103",
    "number": 126,
    "missingImages": 0,
    "question": "<p>You are building a solution in Azure that will use Azure Language in Foundry Tools service to process sensitive customer data.</p><p>You need to ensure that only specific Azure processes can access the Language service. </p><p>The solution must minimize administrative effort.</p><p>What should you include in the solution?</p>",
    "options": {
      "A": "<p>Azure Application Gateway</p>",
      "B": "<p>a virtual network gateway</p>",
      "C": "<p>IPsec rules</p>",
      "D": "<p>virtual network rules</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Azure Language xử lý dữ liệu khách hàng nhạy cảm. Chỉ các Azure processes nằm trong mạng được phê duyệt mới được phép gọi dịch vụ.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong>“only specific Azure processes”</strong>: giới hạn truy cập theo mạng/nguồn Azure được cho phép.</li><li><strong>“sensitive customer data”</strong>: cần hạn chế public access.</li><li><strong>“minimize administrative effort”</strong>: ưu tiên cơ chế quản lý trực tiếp tại Azure service.</li></ul><h3>3. Đáp án</h3><p>Dùng <strong>virtual network rules</strong>.</p><h3>4. Vì sao đúng?</h3><p>Virtual network rules cho phép Azure Language service chỉ chấp nhận yêu cầu từ các subnet trong virtual network đã được cho phép. Bạn quản lý quyền truy cập theo mạng Azure thay vì phải duy trì danh sách IP thủ công cho từng process.</p><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><strong>A. Azure Application Gateway:</strong> dùng để cân bằng tải và quản lý lưu lượng web vào ứng dụng; không phải cơ chế chính để hạn chế client access đến Azure Language service.</li><li><strong>B. Virtual network gateway:</strong> dùng để kết nối VNet với on-premises network hoặc VNet khác qua VPN/ExpressRoute; không tạo access rule cho Language service.</li><li><strong>C. IPsec rules:</strong> liên quan đến bảo mật/kết nối VPN ở tầng mạng; không phải cách đơn giản để cho phép các Azure processes cụ thể truy cập Azure Language.</li></ul><h3>6. Câu thần chú</h3><p><strong>Azure service + only approved VNet workloads → virtual network rules.</strong></p>"
  },
  {
    "id": "AI-103-127",
    "exam": "AI-103",
    "number": 127,
    "missingImages": 0,
    "question": "<p>You have an Azure subscription that contains a Microsoft Foundry Service resource named CSAccount1 and a virtual network named VNet1. </p><p>CSAaccount1 is connected to VNet1.</p><p>You need to ensure that only specific resources can access CSAccount1. The solution must meet the following requirements:</p><ul><li>Prevent external access to CSAccount1.</li><li>Minimize administrative effort.</li></ul><p>Which two actions should you perform? Each correct answer presents part of the solution.<br/><strong>NOTE</strong>: <em>Each correct answer is worth one point.</em></p>",
    "options": {
      "A": "<p>In CSAccount1, modify the virtual network settings.</p>",
      "B": "<p>In VNet1, create a virtual subnet.</p>",
      "C": "<p>In VNet1, enable a service endpoint for CSAccount1.</p>",
      "D": "<p>In CSAccount1, configure the Access control (IAM) settings.</p>",
      "E": "<p>In VNet1, modify the virtual network settings.</p>"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>CSAccount1 đã kết nối với VNet1. Yêu cầu là chặn truy cập từ bên ngoài và chỉ cho phép các resource nằm trong mạng được phê duyệt truy cập dịch vụ.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong>“Prevent external access”</strong>: không cho phép Internet/public clients truy cập tự do.</li><li><strong>“only specific resources”</strong>: chỉ các resource từ subnet/VNet được cho phép.</li><li><strong>“Minimize administrative effort”</strong>: dùng service endpoint và VNet rules, không duy trì nhiều IP rules thủ công.</li></ul><h3>3. Đáp án</h3><ul><li><strong>C:</strong> Bật service endpoint cho CSAccount1 trên VNet1.</li><li><strong>A:</strong> Cấu hình virtual network settings của CSAccount1 để chỉ cho phép VNet/subnet đã chọn.</li></ul><h3>4. Vì sao đúng?</h3><p>Service endpoint tạo đường kết nối được nhận diện giữa subnet trong VNet1 và Cognitive Services resource. Sau đó, virtual network settings trên CSAccount1 được dùng để allow subnet đó và từ chối truy cập không thuộc mạng được phê duyệt.</p><p>Chuỗi logic:</p><p><code>VNet1/subnet được nhận diện</code> → <code>service endpoint</code> → <code>allow VNet rule tại CSAccount1</code> → <code>chặn external access</code>.</p><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><strong>B. Create a virtual subnet:</strong> tạo subnet mới không tự chặn truy cập ngoài hoặc cấp quyền truy cập CSAccount1.</li><li><strong>D. Configure Access control (IAM):</strong> IAM kiểm soát quyền của identity đối với Azure resource management; không phải network firewall rule cho việc gọi Cognitive Services endpoint.</li><li><strong>E. Modify VNet1 virtual network settings:</strong> không cấu hình được firewall/access rule của CSAccount1 từ đây. Rule cho phép VNet phải được cấu hình tại resource CSAccount1.</li></ul><h3>6. Câu thần chú</h3><p><strong>Private Azure service access → service endpoint in VNet + VNet rule on the service.</strong></p>"
  },
  {
    "id": "AI-103-128",
    "exam": "AI-103",
    "number": 128,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong> -</p><p>You have a collection of press releases stored as PDF files.</p><p>You need to extract text from the files and perform sentiment analysis.</p><p>Which service should you use for each task? To answer, select the appropriate options in the answer area.</p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-128.webp\"/></em></p>",
    "options": {
      "A": "<p>Extract text: Azure AI Search</p><p>Perform sentiment analysis: Azure AI Computer Vision</p>",
      "B": "<p>Extract text: Azure Document Intelligence in Foundry Tools</p><p>Perform sentiment analysis: Azure Language in Foundry Tools</p>",
      "C": "<p>Extract text: Azure Vision in Foundry Tools</p><p>Perform sentiment analysis: Azure AI Search </p>",
      "D": "<p>Extract text: Azure Language in Foundry Tools</p><p>Perform sentiment analysis: Azure Document Intelligence in Foundry Tools</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Press releases đang nằm trong file PDF. Trước tiên cần đọc/trích xuất nội dung văn bản từ tài liệu; sau đó mới phân tích xem nội dung mang sắc thái tích cực, tiêu cực hay trung tính.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong>“PDF files”</strong> và <strong>“extract text”</strong>: cần dịch vụ hiểu và trích xuất nội dung từ tài liệu.</li><li><strong>“sentiment analysis”</strong>: cần dịch vụ NLP phân tích cảm xúc văn bản.</li></ul><h3>3. Đáp án</h3><ul><li>Trích xuất text: <strong>Azure Document Intelligence in Foundry Tools</strong></li><li>Phân tích cảm xúc: <strong>Azure Language in Foundry Tools</strong></li></ul><h3>4. Vì sao đúng?</h3><p><strong>Azure Document Intelligence</strong> được thiết kế để đọc tài liệu như PDF và trích xuất text, layout, bảng hoặc các trường dữ liệu. Sau khi có text, <strong>Azure Language</strong> cung cấp chức năng sentiment analysis để xác định cảm xúc của nội dung.</p><p>Chuỗi xử lý:</p><p><code>PDF</code> → <code>Document Intelligence trích xuất text</code> → <code>Azure Language phân tích sentiment</code>.</p><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><strong>A:</strong> Azure AI Search hỗ trợ lập chỉ mục/tìm kiếm, không phải lựa chọn chuyên dụng để trích xuất PDF trong bài toán này. Computer Vision không phải dịch vụ sentiment analysis.</li><li><strong>C:</strong> Azure Vision có thể đọc text từ hình ảnh, nhưng Document Intelligence phù hợp hơn cho tài liệu PDF. Azure AI Search không phải dịch vụ NLP chuyên dụng để phân tích sentiment.</li><li><strong>D:</strong> Azure Language xử lý text đã có, không trích xuất cấu trúc/nội dung từ PDF. Document Intelligence không phân loại cảm xúc của văn bản.</li></ul><h3>6. Câu thần chú</h3><p><strong>Document/PDF → Document Intelligence. Text sentiment → Azure Language.</strong></p>"
  },
  {
    "id": "AI-103-129",
    "exam": "AI-103",
    "number": 129,
    "missingImages": 0,
    "question": "<p>You are designing an Azure AI solution to identify defective products on a production line. </p><p>You have a real-time video feed and an image library of sample products that are approved or rejected manually.</p><p>You need to recommend a service that meets the following requirements:</p><ul><li>Monitors the video feed and identifies the defective products.</li><li>Can train a new model by using the image library.</li><li>Minimizes development effort.</li></ul><p>What should you recommend?</p>",
    "options": {
      "A": "<p>Azure Vision in Foundry Tools</p>",
      "B": "<p>Azure AI Video Indexer</p>",
      "C": "<p>Azure AI Custom Vision</p>",
      "D": "<p>Azure Machine Learning</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Dây chuyền sản xuất có video thời gian thực. Bạn đã có thư viện ảnh sản phẩm được con người gán nhãn <code>approved</code> hoặc <code>rejected</code>, và cần dùng các ảnh đó để phát hiện sản phẩm lỗi.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong>“real-time video feed”</strong>: cần kiểm tra các frame ảnh từ video.</li><li><strong>“image library … approved or rejected”</strong>: có dữ liệu ảnh đã gán nhãn để huấn luyện custom model.</li><li><strong>“Minimizes development effort”</strong>: cần dịch vụ xây dựng sẵn, ít phải tự viết ML pipeline.</li></ul><h3>3. Đáp án</h3><p><strong>Azure AI Custom Vision</strong></p><h3>4. Vì sao đúng?</h3><p>Azure AI Custom Vision cho phép bạn upload ảnh đã gán nhãn và train custom vision model:</p><ul><li>Dùng <strong>Classification</strong> nếu chỉ cần kết luận frame/sản phẩm là <code>approved</code> hay <code>rejected</code>.</li><li>Dùng <strong>Object Detection</strong> nếu cần xác định vị trí sản phẩm lỗi bằng bounding box.</li></ul><p>Sau khi train, ứng dụng có thể gửi từng frame lấy từ video feed đến model để nhận diện sản phẩm lỗi. Đây là phương án ít công sức hơn so với tự xây dựng và huấn luyện mô hình machine learning từ đầu.</p><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><strong>A. Azure Vision in Foundry Tools:</strong> cung cấp các khả năng vision dựng sẵn như phân tích ảnh/OCR, nhưng không phải lựa chọn phù hợp để train custom classification hoặc detection model từ thư viện ảnh gán nhãn.</li><li><strong>B. Azure AI Video Indexer:</strong> phù hợp phân tích và lập chỉ mục video, như speech transcription, faces hoặc scene insights; không được thiết kế để train model phát hiện lỗi riêng từ ảnh sản phẩm.</li><li><strong>D. Azure Machine Learning:</strong> có thể xây dựng custom model, nhưng cần nhiều công sức hơn để chuẩn bị data, training pipeline, deployment và monitoring.</li></ul><h3>6. Câu thần chú</h3><p><strong>Labeled product images + custom defect detection → Azure AI Custom Vision.</strong></p>"
  },
  {
    "id": "AI-103-130",
    "exam": "AI-103",
    "number": 130,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT </strong>- You run the following command.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-130a.webp\"/></p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br/><strong>NOTE</strong>:<em> Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-130b.webp\"/></em></p>",
    "options": {
      "A": "<p>Yes, Yes, Yes</p>",
      "B": "<p>No, Yes, Yes</p>",
      "C": "<p>No, No, Yes</p>",
      "D": "<p>Yes, No, No</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Lệnh Docker khởi chạy Azure AI Language sentiment-analysis container tại cổng <code>5000</code>. Container dùng <code>Billing</code> và <code>ApiKey</code> để gửi metering/billing information đến Azure.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong><code>/status</code></strong>: endpoint kiểm tra trạng thái/health của container.</li><li><strong><code>/swagger</code></strong>: giao diện tài liệu API Swagger.</li><li><strong><code>Billing</code> và <code>ApiKey</code></strong>: phục vụ billing/metering, không biến <code>/status</code> thành API-key validation endpoint.</li></ul><h3>3. Đáp án</h3><ul><li>Phát biểu 1: <strong>No</strong></li><li>Phát biểu 2: <strong>Yes</strong></li><li>Phát biểu 3: <strong>Yes</strong></li></ul><h3>4. Vì sao đúng?</h3><ul><li><strong><code>/status</code></strong> xác nhận container đang chạy và có thể phục vụ request; nó không gọi Azure endpoint để kiểm tra API key.</li><li>Container có logging provider để ghi thông tin log về hoạt động của container.</li><li><strong><code>/swagger</code></strong> hiển thị tài liệu và các API endpoints sẵn có của container.</li></ul><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><strong>A:</strong> Sai vì <code>/status</code> không dùng để xác thực API key với Azure.</li><li><strong>C:</strong> Sai vì container logging provider vẫn ghi log data.</li><li><strong>D:</strong> Sai vì <code>/status</code> không xác thực API key và <code>/swagger</code> thực sự cung cấp API documentation.</li></ul><h3>6. Câu thần chú</h3><p><strong><code>/status</code> = health; <code>/swagger</code> = API docs; billing key ≠ status validation.</strong></p>"
  },
  {
    "id": "AI-103-131",
    "exam": "AI-103",
    "number": 131,
    "missingImages": 0,
    "question": "<p>You are developing an app that will use the Speech and Language APIs.</p><p>You need to provision resources for the app. </p><p>The solution must ensure that each service is accessed by using a single endpoint and credential.</p><p>Which type of resource should you create?</p>",
    "options": {
      "A": "<p>Azure Language in Foundry Tools</p>",
      "B": "<p>Microsoft Foundry service</p>",
      "C": "<p>Azure Speech in Foundry Tools</p>",
      "D": "<p>Content Safety in Foundry Control Plane</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Ứng dụng cần dùng cả <strong>Speech API</strong> và <strong>Language API</strong>, nhưng yêu cầu chỉ dùng <strong>một endpoint và một credential</strong>.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong>“Speech and Language APIs”</strong>: cần nhiều Azure AI capabilities.</li><li><strong>“a single endpoint and credential”</strong>: cần multi-service resource, không phải resource chỉ dành cho một dịch vụ.</li></ul><h3>3. Đáp án</h3><p>Tạo <strong>Microsoft Foundry service</strong> resource.</p><h3>4. Vì sao đúng?</h3><p>Microsoft Foundry service là multi-service resource, cho phép các Azure AI services được hỗ trợ dùng chung endpoint và key/credential. Nhờ đó, app không phải cấu hình endpoint và API key riêng cho Speech và Language.</p><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><strong>A. Azure Language in Foundry Tools:</strong> chỉ dành cho Language capabilities; không cung cấp chung endpoint/credential cho Speech.</li><li><strong>C. Azure Speech in Foundry Tools:</strong> chỉ dành cho Speech capabilities; không dùng chung với Language.</li><li><strong>D. Content Safety in Foundry Control Plane:</strong> dùng cho content moderation/safety, không phải resource dùng chung Speech và Language.</li></ul><h3>6. Câu thần chú</h3><p><strong>Many supported AI services + one endpoint/key → Microsoft Foundry service.</strong></p>"
  },
  {
    "id": "AI-103-132",
    "exam": "AI-103",
    "number": 132,
    "missingImages": 0,
    "question": "<p>You are building an app that will include one million scanned magazine articles. </p><p>Each article will be stored as an image file.</p><p>You need to configure the app to extract text from the images. </p><p>The solution must minimize development effort.</p><p>What should you include in the solution?</p>",
    "options": {
      "A": "<p>Azure Document Intelligence in Foundry Tools</p>",
      "B": "<p>the Read API in Azure Vision in Foundry Tools</p>",
      "C": "<p>Azure Vision in Foundry Tools Image Analysis</p>",
      "D": "<p>Azure Language in Foundry Tools</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Bạn có một triệu bài báo tạp chí được scan, mỗi bài là một file ảnh. Mục tiêu là OCR — chuyển chữ trong ảnh thành text — với ít công sức phát triển nhất.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong>“scanned magazine articles”</strong>: ảnh chứa nhiều đoạn văn bản.</li><li><strong>“extract text from the images”</strong>: yêu cầu OCR.</li><li><strong>“one million”</strong>: cần API OCR có khả năng xử lý quy mô lớn.</li><li><strong>“minimize development effort”</strong>: dùng tính năng OCR dựng sẵn.</li></ul><h3>3. Đáp án</h3><p>Dùng <strong>Read API in Azure Vision in Foundry Tools</strong>.</p><h3>4. Vì sao đúng?</h3><p>Read API là OCR service dựng sẵn để đọc text in và text viết tay từ ảnh hoặc tài liệu. Nó phù hợp với tài liệu scan có nhiều text, hỗ trợ xử lý bất đồng bộ cho khối lượng lớn, nên không cần tự xây dựng OCR model.</p><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><strong>A. Azure Document Intelligence:</strong> có thể trích xuất dữ liệu và cấu trúc phức tạp như forms, invoices, tables. Nhưng yêu cầu chỉ là OCR text từ ảnh; Read API phù hợp và đơn giản hơn.</li><li><strong>C. Azure Vision Image Analysis:</strong> phân tích nội dung ảnh như caption, tags, objects và các thuộc tính trực quan; không phải lựa chọn OCR chuyên dụng cho hàng triệu trang scan.</li><li><strong>D. Azure Language:</strong> phân tích text đã có, như sentiment hoặc entities; không đọc text trực tiếp từ ảnh.</li></ul><h3>6. Câu thần chú</h3><p><strong>Scanned image text at scale → Read API.</strong></p>"
  },
  {
    "id": "AI-103-133",
    "exam": "AI-103",
    "number": 133,
    "missingImages": 0,
    "question": "<p><strong>DRAG DROP </strong>-<br/>You are building an app that will scan confidential documents and use the Azure Language in Foundry Tools service to analyze the contents. </p><p>You provision a Microsoft Foundry Service resource.</p><p>You need to ensure that the app can make requests to the Azure Language in Foundry Tools service endpoint. The solution must ensure that confidential documents remain on-premises.</p><p>Which three actions should you perform in sequence? </p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-133.webp\"/></p>",
    "options": {
      "A": "<ol><li>Provision an on-premises Kubernetes cluster that has internet connectivity.  </li><li>Pull an image from the Microsoft Container Registry (MCR).  </li><li>Run the container and specify an API key and the Endpoint URL of the Azure AI resource.</li></ol>",
      "B": "<ol><li>Provision an on-premises Kubernetes cluster isolated from the internet.  </li><li>Pull an image from Docker Hub.  </li><li>Run the container and specify an App ID and Client Secret.</li></ol>",
      "C": "<ol><li>Provision an Azure Kubernetes Service (AKS) resource.  </li><li>Pull an image from the Microsoft Container Registry (MCR).  </li><li>Run the container and specify an API key and the Endpoint URL of the Azure AI resource.</li></ol>",
      "D": "<ol><li>Pull an image from Docker Hub.  </li><li>Provision an on-premises Kubernetes cluster that has internet connectivity.  </li><li>Run the container and specify an App ID and Client Secret.</li></ol>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Tài liệu mật phải ở <strong>on-premises</strong>, nên Azure Language container phải chạy trong hạ tầng tại chỗ. Container xử lý nội dung tài liệu nội bộ; dữ liệu không cần được gửi lên cloud để phân tích.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong>“confidential documents remain on-premises”</strong>: chạy container tại on-premises, không dùng AKS trên Azure.</li><li><strong>“make requests to the Azure Language service endpoint”</strong>: container cần kết nối Azure để xác thực/billing.</li><li><strong>“Microsoft Foundry Service resource”</strong>: dùng resource endpoint và API key.</li><li><strong>“container”</strong>: image được lấy từ <strong>Microsoft Container Registry (MCR)</strong>.</li></ul><h3>3. Đáp án</h3><ol><li>Provision an <strong>on-premises Kubernetes cluster that has internet connectivity</strong>.  </li><li>Pull an image from the <strong>Microsoft Container Registry (MCR)</strong>.  </li><li>Run the container with the Azure AI resource <strong>API key</strong> and <strong>Endpoint URL</strong>.</li></ol><h3>4. Vì sao đúng?</h3><ul><li>Kubernetes cluster chạy on-premises giúp dữ liệu tài liệu được xử lý tại chỗ.</li><li>Cluster vẫn cần Internet để pull image từ MCR và để container gửi usage/billing information đến Azure.</li><li>Azure AI containers dùng <code>ApiKey</code> và <code>Billing</code>/endpoint URL của Azure AI resource, không dùng App ID và Client Secret trong lệnh chạy container tiêu chuẩn.</li></ul><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><strong>B:</strong> Cluster bị cô lập Internet nên không pull image từ registry hoặc liên hệ Azure để billing. Docker Hub cũng không phải registry đúng cho Azure AI container image; App ID/Client Secret không phải cấu hình container cần dùng.</li><li><strong>C:</strong> AKS chạy trên Azure, không giữ việc xử lý tài liệu mật hoàn toàn on-premises.</li><li><strong>D:</strong> Pull image phải thực hiện sau khi có môi trường chạy; Docker Hub sai registry, và App ID/Client Secret sai phương thức cấu hình container.</li></ul><h3>6. Câu thần chú</h3><p><strong>Keep data local → on-prem cluster. Azure AI container → MCR + API key + billing endpoint.</strong></p>"
  },
  {
    "id": "AI-103-134",
    "exam": "AI-103",
    "number": 134,
    "missingImages": 0,
    "question": "<p><strong>DRAG DROP </strong>-<br/>You are developing an app that will use the Azure Vision in Foundry Tools API to analyze an image.</p><p>You need configure the request that will be used by the app to identify whether an image is clipart or a line drawing.</p><p>How should you complete the request? To answer, select the appropriate options in the answer area.</p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.</em><img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ai-103-ai103-134.webp\"/></p>",
    "options": {
      "A": "<p><code>GET</code> with <code>visualFeatures=tags</code></p>",
      "B": "<p><code>PATCH</code> with <code>visualFeatures=objects</code></p>",
      "C": "<p><code>POST</code> with <code>visualFeatures=imageType</code></p>",
      "D": "<p><code>POST</code> with <code>visualFeatures=description</code></p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Ứng dụng cần phân biệt ảnh là <strong>clipart</strong> hay <strong>line drawing</strong>. Đây là thông tin về loại/hình thức của ảnh, không phải mô tả, tag hay object trong ảnh.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong>“clipart”</strong></li><li><strong>“line drawing”</strong></li><li><strong><code>visualFeatures</code></strong></li></ul><p>Các từ khóa này ánh xạ trực tiếp đến Azure Vision feature là <strong><code>imageType</code></strong>.</p><h3>3. Đáp án</h3><p>Dùng:</p><pre><code>POST /vision/v3.2/analyze?visualFeatures=imageType</code></pre><h3>4. Vì sao đúng?</h3><p>Azure Vision Analyze API dùng <strong>POST</strong> để gửi ảnh hoặc URL ảnh cho API phân tích. Feature <strong><code>imageType</code></strong> trả về các thuộc tính như <code>clipArtType</code> và <code>lineDrawingType</code>, cho biết ảnh có phải clipart hoặc line drawing hay không.</p><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><strong>A. GET + tags:</strong> <code>GET</code> không phù hợp để gửi body ảnh phân tích; <code>tags</code> chỉ trả về nhãn nội dung như <code>car</code>, <code>person</code>, hoặc <code>outdoor</code>.</li><li><strong>B. PATCH + objects:</strong> <code>PATCH</code> dùng để cập nhật resource, không phải phân tích ảnh. <code>objects</code> phát hiện object và bounding boxes, không xác định clipart/line drawing.</li><li><strong>D. POST + description:</strong> <code>POST</code> đúng method, nhưng <code>description</code> tạo caption/mô tả ảnh, không trả về <code>clipArtType</code> hoặc <code>lineDrawingType</code>.</li></ul><h3>6. Câu thần chú</h3><p><strong>Clipart hoặc line drawing → <code>POST</code> + <code>visualFeatures=imageType</code>.</strong></p>"
  },
  {
    "id": "AI-103-135",
    "exam": "AI-103",
    "number": 135,
    "missingImages": 0,
    "question": "<p>You use the Azure Custom Vision service to build a classifier. </p><p>After training is complete, you need to evaluate the classifier. </p><p>Which two metrics are available for review? Each correct answer presents a complete solution.</p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>F-score</p>",
      "B": "<p>area under the curve (AUC)</p>",
      "C": "<p>precision</p>",
      "D": "<p>weighted accuracy</p>",
      "E": "<p>recall</p>"
    },
    "answer": [
      "C",
      "E"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Bạn đã train Custom Vision classifier và cần xem chất lượng dự đoán của model.</p><h3>2. Từ khóa quyết định</h3><ul><li><strong>“Custom Vision service”</strong></li><li><strong>“classifier”</strong></li><li><strong>“metrics available for review”</strong></li></ul><p>Custom Vision hiển thị các metric đánh giá classifier gồm <strong>Precision</strong>, <strong>Recall</strong>, và thường có <strong>mAP</strong>; trong các đáp án được đưa ra, Precision và Recall là hai lựa chọn phù hợp.</p><h3>3. Đáp án</h3><ul><li><strong>C. Precision</strong></li><li><strong>E. Recall</strong></li></ul><h3>4. Vì sao đúng?</h3><ul><li><strong>Precision</strong>: trong các dự đoán model gán cho một class, bao nhiêu dự đoán là đúng. Precision cao nghĩa là ít false positives.</li><li><strong>Recall</strong>: trong tất cả đối tượng thực sự thuộc class đó, model tìm đúng được bao nhiêu. Recall cao nghĩa là ít false negatives.</li></ul><h3>5. Vì sao các đáp án khác sai?</h3><ul><li><strong>A. F-score:</strong> là metric kết hợp precision và recall, nhưng không phải metric được nêu để review trực tiếp trong Custom Vision training performance.</li><li><strong>B. AUC:</strong> thường dùng trong ROC evaluation; không phải metric hiển thị tiêu chuẩn của Custom Vision classifier.</li><li><strong>D. Weighted accuracy:</strong> không phải metric đánh giá classifier được Custom Vision cung cấp trong màn hình performance.</li></ul><h3>6. Câu thần chú</h3><p><strong>Custom Vision classifier → Precision: ít báo nhầm; Recall: ít bỏ sót.</strong></p>"
  }
];
