const MICROSOFT_QUESTIONS = [
  {
    "id": "AB-100-001",
    "exam": "AB-100",
    "number": 1,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong></p><p><strong>CASE STUDY</strong></p><p><strong>To start the case study</strong> - To display the first question in this case study, select the \"Next\" button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the \"Question\" button to return to the question. </p><p><strong>Overview</strong></p><p>Contoso, Ltd. is a high-tech manufacturing company that uses Microsoft Dynamics 365 Finance. Dynamics 365 Supply Chain Management, and Dynamics 365 Commerce for its North American operations. The company designs and develops innovative products that have many patents and proprietary technologies. The patents and engineering designs are closely guarded secrets. Contoso executives want to integrate and adopt AI solutions to help scale the company in preparation for an anticipated period of rapid growth. The company has multiple legal entities and Azure subscriptions that will be used in the adopted AI solutions. </p><p><strong>Requirements</strong></p><p><strong>AI Adoption</strong> - The following executives will have specific responsibilities in the overall AI adoption: </p><ul><li>Chief Technology Officer (CTO): Select one Dynamics 365 Finance, Dynamics 365 Supply Chain Management or Dynamics 365 Commerce prebuilt AI agent and one custom Microsoft Copilot Studio AI agent to prioritize and deploy during the initial AI adoption phase. </li><li>Chief Information Officer (CIO): Ensure that appropriate security labels are assigned to the data used by the AI agents. </li><li>Chief Financial Officer (CFO): Analyze the return on investment (ROI) for the AI agents being deployed. </li><li>Chief Information Security Officer (CISO): Discover and inventory AI resources for auditing. </li><li>Chief Executive Officer (CEO): Ensure that all solutions adhere to industry-standard responsible AI practices. </li></ul><p>All AI initiatives and agents will have a detailed business use case, a defined audience profile, and an estimated ROI that will compare the cost savings of the current process against the estimated costs of using the new AI solutions.The company's research and development (R&amp;D) department already has a custom Model Context Protocol (MCP) server that contains comprehensive product specifications and compliance data. </p><p><strong>Prebuilt AI Agent </strong>- The CTO has NOT yet selected which prebuilt AI agent to use in Dynamics 365 Supply Chain Management. The CTO wants to view available agent templates to identify which agent will add the most business value. Depending on which high-priority AI agents are identified, its agent capabilities must be previewed in a discovery meeting with the relevant business operation stakeholders. </p><p><strong>Custom AI Agent</strong> - Contoso has identified the following custom AI agent requirements: </p><ul><li>The custom AI agent will use data from Dynamics 365 Supply Chain Management to answer questions for the manufacturing team as a low-code solution. </li><li>The custom AI agent will be accessible from within Microsoft Teams. </li><li>The custom AI agent must be designed to eventually connect to other agents that can be selected based on their description. </li><li>The topics used in the custom AI agent will be selected based NOT on a trigger phrase, but on a description of the purpose of the query, to make the interactions more conversational. </li><li>The custom AI agent must be able to answer questions about product specifications by using existing technologies. </li><li>The product specifications are maintained by the R&amp;D department. </li><li>The custom AI agent must be integrated with and accessible from Dynamics 365 Supply Chain Management. </li><li>The custom AI agent must be able to use Dynamics 365 Supply Chain Management business logic that is stored outside of the application. </li></ul><p>Analysis, Reporting, and Troubleshooting Contoso has identified the following analysis, reporting, and troubleshooting requirements: </p><ul><li>The CISO will audit all the AI solutions monthly for compliance and security. </li><li>The CFO will analyze all the AI solutions quarterly to compare the estimated ROI against actual measured efficiencies and adoption. </li><li>The CFO will use the Copilot Studio agent usage estimator to perform this analysis. </li><li>The CISO wants to identify how much sensitive data was accessed for a given AI agent run and who accessed the data. Too much sensitive data accessed by a single user might indicate a high security risk. </li><li>The CTO wants to track user feedback on the quality of the AI agent responses during user interactions with the agents. Consistently poor feedback will trigger an escalated reengineering discussion. </li><li>The CEO wants a quarterly assessment of all the required metrics for their specific responsibilities. The tools used for the assessments must be Microsoft-recommended and must verify reliability, interpretability, fairness, and compliance. </li><li>The CFO wants to identify how many interactions with the AI agents are abandoned on a given day as compared to resolved conversations. Too many abandoned sessions might indicate that Copilot Studio credits are being used inefficiently by end users. </li></ul><p>Which two components in the custom AI agent design should the CFO evaluate in the quarterly agent analysis? </p><p>Each correct answer presents part of the solution. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>The GPT models used for the agent</p>",
      "B": "<p>The average characters in a chat message</p>",
      "C": "<p>The agent orchestration method</p>",
      "D": "<p>The average session time per agent</p>"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Agent orchestration method</strong> ảnh hưởng đến cách agent dùng knowledge, tools, topics hoặc các agent khác. Vì vậy, nó có thể làm thay đổi mức tiêu thụ Copilot Credits và chất lượng hoàn thành tác vụ.</p><p><strong>Average session time per agent</strong> cho biết thời gian cần để hoàn thành một tương tác. Chỉ số này giúp so sánh hiệu quả trước và sau khi triển khai, từ đó hỗ trợ phân tích ROI.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>A. The GPT models used for the agent:</strong><br/>Đây là một lựa chọn kỹ thuật trong thiết kế, nhưng không phải chỉ số vận hành trực tiếp mà CFO cần theo dõi để đánh giá ROI theo quý.</p></li><li><p><strong>B. The average characters in a chat message:</strong><br/>Số ký tự trung bình trong mỗi tin nhắn không đo trực tiếp mức tiêu thụ, hiệu quả xử lý hay giá trị kinh doanh của agent.</p></li></ul>"
  },
  {
    "id": "AB-100-002",
    "exam": "AB-100",
    "number": 2,
    "missingImages": 0,
    "question": "<p><strong>CASE STUDY</strong></p><p><strong>To start the case study</strong> - To display the first question in this case study, select the \"Next\" button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the \"Question\" button to return to the question. </p><p><strong>Background</strong></p><p>Fabrikam, Inc., is a global consumer goods company that is undergoing a digital transformation initiative to migrate its entire infrastructure to the Microsoft cloud. As a key element of this cloud migration, the company will implement Microsoft Dynamics 365 Sales, moving away from the current on-premises proprietary technologies used by its business-to-business (B2B) sales team. As part of the cloud migration, Fabrikam will adopt an AI-first approach to its business solutions and implement AI solutions, wherever possible, to streamline operations. </p><p><strong>Problem Statements</strong></p><p>Fabrikam's infrastructure currently relies on various on-premises systems that require sales executives to use corporate computers with physical keyboards to access business information during customer interactions. Mobile phones cannot be used for these purposes, as the systems depend on keyboard input. As a result, the sales executives spend a lot of time using keyboards to search for data on several disparate systems and file servers, rather than focusing on the customers. This affects the customer experience. Fabrikam stakeholders are concerned that users will be hesitant to adopt AI. If the AI initiatives are NOT adopted, cost savings will never be realized. </p><p>Additionally, funding for future AI initiatives will depend on demonstrating an increase in AI adoption month over month. As the AI agent initiative for the sales team will be the first for Fabrikam, the rapid adoption of the agent is a high priority. </p><p><strong>Planned Initiatives - General</strong></p><p>Fabrikam management has prioritized AI-driven projects to improve efficiency, customer engagement, and responsible AI adoption. The current application infrastructure is on-premises and must be migrated to the cloud to support the adoption of these technologies. </p><p><strong>Infrastructure Migration</strong></p><p>Fabrikam plans to migrate from its current on-premises infrastructure to a completely cloud-based topology; this will include user authentication, the security framework, and, primarily, the adoption of the services by end users. All the data from the different systems will be consolidated into a single data source - a common data model that will use a Microsoft Dataverse environment as a single source of truth (SSOT) for the sales team. </p><p><strong>Sales Cycle Enablement</strong> - To achieve the company's objectives, Fabrikam intends to implement the following strategies to enhance the sales cycle: </p><ul><li>Use low-code development to create a single AI agent that has Dataverse as its core component. </li><li>Ensure that sales managers can access unanswered correspondence from prospects and intervene as appropriate. </li><li>Replace the previous proprietary software with Dynamics 365 Sales to track sales cycles and customer interactions. </li><li>Have the sales executives use Dynamics 365 Sales to track interactions for open opportunities and send follow-up communications to prospects. </li><li>Have the sales executives use handsfree headsets to interact with an AI agent when they have questions about internal policies or customer data. </li></ul><p><strong>Requirements</strong></p><p><strong><em>Infrastructure Migration</em></strong></p><p>Fabrikam has identified the following infrastructure migration requirements: Azure must be used for all future infrastructure workloads. The company must follow Microsoft-recommended methodologies for infrastructure migration to the cloud. Any created AI agents must have their return on investment (ROI) calculated to ensure that the solution will save the company money. </p><p><strong><em>Sales Cycle Enablement</em></strong></p><p>Fabrikam has identified the following requirements for sales cycle enablement: </p><ul><li>The final AI agent must follow Microsoft recommendations for a conversational user experience. </li><li>A designated checklist must be reviewed to ensure that the AI agent follows Microsoft deployment recommendations for a compliant solution. </li><li>Detailed telemetry must be logged for the first created AI agent to help troubleshoot and optimize the agent during the initial AI agent adoption process. </li><li>Unexpected AI agent actions must end in an escalation to a live representative. For example, a sales executive must be rerouted to a representative if the agent cannot answer a question after two failed attempts. </li><li>The return on investment (ROI) of switching from the current process to the future process is required for stakeholder sign off. </li><li>The sales team must use Dynamics 365 Sales to correspond with prospects more quickly and efficiently than currently. </li><li>Sales managers must report on the adoption of the AI agent to key Fabrikam stakeholders on a monthly basis. </li></ul><p>Any sensitive information, such as user IDs and names, shared via the AI agent must be tracked for future auditing. Which template should you use for the AI agent to meet the requirements for the sales executives?</p>",
    "options": {
      "A": "<p>IT Helpdesk in Microsoft Copilot Studio</p>",
      "B": "<p>AI agents in Microsoft Foundry</p>",
      "C": "<p>Voice in Microsoft Copilot Studio</p>",
      "D": "<p>AI chat in Microsoft Foundry</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Template <strong>Voice in Microsoft Copilot Studio</strong> được thiết kế cho conversational agent có tương tác bằng giọng nói. Nó cho phép người dùng giao tiếp bằng ngôn ngữ tự nhiên, phù hợp với nhu cầu sử dụng headset rảnh tay của nhân viên kinh doanh.</p><p>Đây cũng là giải pháp low-code, nên phù hợp hơn việc tự xây dựng agent và voice workflow từ đầu.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>A. IT Helpdesk in Microsoft Copilot Studio:</strong><br/>Đây là template dành cho các tình huống hỗ trợ CNTT, không phải template chuyên dụng cho tương tác bằng giọng nói rảnh tay.</p></li><li><p><strong>B. AI agents in Microsoft Foundry:</strong><br/>Microsoft Foundry hỗ trợ xây dựng AI agents linh hoạt, nhưng không phải Voice template low-code được yêu cầu trong câu hỏi.</p></li><li><p><strong>D. AI chat in Microsoft Foundry:</strong><br/>AI chat tập trung vào hội thoại chat/text. Nó không phải template voice-enabled dành cho trải nghiệm headset rảnh tay.</p></li></ul>"
  },
  {
    "id": "AB-100-003",
    "exam": "AB-100",
    "number": 3,
    "missingImages": 0,
    "question": "<p>A company plans to deploy a Microsoft Copilot Studio agent that will analyze historical business data to predict customer behavior. The data is currently stored in an Azure SQL database, flat files, APIs, and logs. You need to organize the data into a format that can be used as a knowledge source in Copilot Studio. What should you include in the solution?</p>",
    "options": {
      "A": "<p>Azure AI Search</p>",
      "B": "<p>Azure Data Lake Storage</p>",
      "C": "<p>Azure Cosmos DB</p>",
      "D": "<p>Azure Translator in Foundry Tools</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Azure AI Search</strong> có thể kết nối với và lập chỉ mục dữ liệu từ nhiều nguồn khác nhau. Dịch vụ hỗ trợ:</p><ul><li>Keyword search.</li><li>Vector search.</li><li>Hybrid search.</li><li>Unified retrieval cho ứng dụng hoặc Copilot Studio theo mô hình RAG.</li></ul><p>Nhờ đó, dữ liệu từ Azure SQL, files, APIs và logs có thể được tổ chức thành một nguồn truy xuất thống nhất.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>B. Azure Data Lake Storage:</strong><br/>Azure Data Lake Storage chủ yếu dùng để lưu trữ dữ liệu thô với quy mô lớn. Nó không tự cung cấp intelligent indexing, keyword search hoặc vector search cần thiết.</p></li><li><p><strong>C. Azure Cosmos DB:</strong><br/>Azure Cosmos DB là cơ sở dữ liệu NoSQL phân tán. Nó không phải dịch vụ chuyên dụng để hợp nhất, lập chỉ mục và tìm kiếm trên các nguồn dữ liệu hỗn hợp như yêu cầu.</p></li><li><p><strong>D. Azure Translator in Foundry Tools:</strong><br/>Azure Translator dùng để dịch ngôn ngữ, không dùng để tổ chức dữ liệu thành knowledge source hoặc thực hiện intelligent search.</p></li></ul>"
  },
  {
    "id": "AB-100-004",
    "exam": "AB-100",
    "number": 4,
    "missingImages": 0,
    "question": "<p>You need to design a Microsoft Copilot Studio agent for customer support.</p><p>The agent must securely retrieve product warranty data from a REST API. The solution must minimize development effort.</p><p>What should you include in the design?</p>",
    "options": {
      "A": "<p>Export the agent as a managed solution and customize the agent in Power Apps.</p>",
      "B": "<p>Create a custom connector in Copilot Studio and use the connector to call the API.</p>",
      "C": "<p>Use a Microsoft Power Automate desktop flow to screen scrape the warranty data.</p>",
      "D": "<p>Add the warranty data to the Fallback topic.</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Custom connector</strong> đóng gói REST API thành một action có thể cấu hình và sử dụng trực tiếp trong Copilot Studio. Điều này giảm lượng code phải viết và giúp agent gọi dữ liệu động khi cần.</p><p>Custom connector cũng hỗ trợ các cơ chế xác thực phổ biến như:</p><ul><li>API key</li><li>OAuth 2.0</li><li>Các phương thức authentication được API hỗ trợ</li></ul><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>A. Export the agent as a managed solution and customize the agent in Power Apps:</strong><br/>Export agent dưới dạng managed solution và tùy biến trong Power Apps không giải quyết trực tiếp yêu cầu tích hợp REST API. Cách này còn làm tăng độ phức tạp không cần thiết.</p></li><li><p><strong>C. Use a Microsoft Power Automate desktop flow to screen scrape the warranty data:</strong><br/>Screen scraping phù hợp hơn khi hệ thống cũ không có API. Trong trường hợp đã có REST API, gọi API trực tiếp đáng tin cậy, nhanh và dễ bảo trì hơn.</p></li><li><p><strong>D. Add the warranty data to the Fallback topic:</strong><br/>Fallback topic dùng khi agent không nhận diện được ý định của người dùng. Nó không dùng để cấu hình việc lấy dữ liệu động từ API.</p></li></ul>"
  },
  {
    "id": "AB-100-005",
    "exam": "AB-100",
    "number": 5,
    "missingImages": 0,
    "question": "<p><strong>Note:</strong> <em>This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. </em></p><p>A company has a Microsoft Dynamics 365 Sales environment that has Microsoft Copilot enabled. You need to customize Copilot by tailoring how opportunity summaries are generated or how they are presented to users. </p><p><strong>Solution:</strong> You configure AI Builder lead scoring models to influence opportunity summaries. Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>AI Builder lead scoring</strong> dự đoán và xếp hạng khả năng một lead sẽ chuyển đổi thành khách hàng/cơ hội. Nó không thay đổi cách Copilot tạo nội dung hoặc hiển thị phần tóm tắt cơ hội bán hàng.</p><p>Để tùy chỉnh opportunity summaries, cần thay đổi cấu hình form và field liên quan trong <strong>Dynamics 365 Sales</strong>. Những cấu hình này quyết định thông tin nào có sẵn và được trình bày trong trải nghiệm của người dùng.</p><h4>Vì sao đáp án còn lại sai?</h4><ul><li><strong>A. Yes:</strong><br/>Chọn “Yes” đồng nghĩa với việc cho rằng AI Builder lead scoring đáp ứng yêu cầu. Tuy nhiên, tính năng này chỉ chấm điểm xác suất chuyển đổi của lead; nó không cấu hình nội dung hoặc cách trình bày opportunity summary của Copilot.</li></ul>"
  },
  {
    "id": "AB-100-006",
    "exam": "AB-100",
    "number": 6,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong></p><p>You are designing an AI strategy for Microsoft Dynamics 365 finance and operations apps. You are evaluating the use of Microsoft Copilot Studio to provide in-app help and guidance based on generative AI general knowledge. </p><p>You need to recommend which knowledge sources to include in the generative help and guidance agent. </p><p>The solution must minimize the risk of generating inaccurate responses. </p><p>What should you recommend? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ab-100-ab100_6.webp\"/></em></p>",
    "options": {
      "A": "<p>Must be uploaded to the agent - Must be disabled for the agent</p>",
      "B": "<p>Must be excluded from the agent - Is not supported</p>",
      "C": "<p>Are not supported - Must be enabled for the agent</p>",
      "D": "<p>Must be uploaded to the agent - Is not supported</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Các <strong>custom knowledge sources</strong> đáng tin cậy phải được upload vào agent để agent có thể grounding câu trả lời vào:</p><ul><li>Tài liệu chính thức.</li><li>Business data nội bộ.</li><li>Quy trình Finance and Operations của tổ chức.</li></ul><p><strong>AI general knowledge</strong> nên bị tắt vì có thể khiến agent dùng thông tin bên ngoài, lỗi thời hoặc không phù hợp với cấu hình và quy trình thực tế của doanh nghiệp.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>B. Must be excluded from the agent – Is not supported:</strong><br/>Sai vì custom knowledge sources cần được đưa vào agent để làm nguồn grounding. AI general knowledge có thể được cấu hình, không phải “không được hỗ trợ”.</p></li><li><p><strong>C. Are not supported – Must be enabled for the agent:</strong><br/>Sai vì custom knowledge sources được hỗ trợ và rất cần thiết để tăng độ chính xác. Bật AI general knowledge lại tăng nguy cơ agent dùng thông tin không phù hợp.</p></li><li><p><strong>D. Must be uploaded to the agent – Is not supported:</strong><br/>Vế custom knowledge sources là đúng, nhưng vế AI general knowledge sai: đây là một khả năng có thể được bật hoặc tắt, không phải tính năng không được hỗ trợ.</p></li></ul>"
  },
  {
    "id": "AB-100-007",
    "exam": "AB-100",
    "number": 7,
    "missingImages": 0,
    "question": "<p>A company is designing a Microsoft Power Platform solution to reduce the manual steps of a business process by deploying an existing AI model.</p><p>You need to calculate the return on AI investment (ROAI) by identifying the metadata and telemetry of the solution.</p><p>What should you use?</p>",
    "options": {
      "A": "<p>Microsoft Power Platform admin center</p>",
      "B": "<p>Success by Design</p>",
      "C": "<p>The Business value toolkit</p>",
      "D": "<p>Microsoft Cloud Adoption Framework for Azure</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Business value toolkit</strong> giúp xác định và theo dõi:</p><ul><li>Metadata cần thu thập.</li><li>Telemetry về việc sử dụng và hiệu năng.</li><li>Các business-value metrics.</li><li>Dữ liệu cần thiết để tính và theo dõi ROAI.</li></ul><p>Do đó, đây là lựa chọn phù hợp để lượng hóa giá trị do giải pháp AI/Power Platform mang lại.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>A. Microsoft Power Platform admin center:</strong><br/>Công cụ này chủ yếu dùng để quản trị environments, users, resources, policies và capacity. Nó không phải công cụ chuyên dụng để tính ROAI của giải pháp AI.</p></li><li><p><strong>B. Success by Design:</strong><br/>Đây là framework/guidance giúp thiết kế, triển khai và vận hành giải pháp thành công. Nó không phải công cụ tính toán hoặc theo dõi ROAI.</p></li><li><p><strong>D. Microsoft Cloud Adoption Framework for Azure:</strong><br/>Đây là framework rộng cho việc áp dụng cloud trên Azure, gồm strategy, governance và operations. Nó không tập trung vào việc đo giá trị kinh doanh của một giải pháp AI cụ thể.</p></li></ul>"
  },
  {
    "id": "AB-100-008",
    "exam": "AB-100",
    "number": 8,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong></p><p>A company uses Microsoft Dynamics 365 Supply Chain Management. You are designing an AI supply chain process that meets the following requirements: </p><ul><li>Provides managers with AI-driven insights that surface key information from customer orders </li><li>Helps planners use AI to anticipate future product needs more accurately You need to recommend which Microsoft Copilot features to include in the design</li></ul><p> What should you recommend for each requirement? To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.<img alt=\"Hình minh họa câu hỏi\" loading=\"lazy\" src=\"assets/ab-100-ab100_8.webp\"/></em></p>",
    "options": {
      "A": "<p>AI Summaries with Copilot - Product information management</p>",
      "B": "<p>Workload insights with Copilot - Generative insights for Demand planning</p>",
      "C": "<p>AI Summaries with Copilot - Generative insights for Demand planning</p>",
      "D": "<p>Workload insights with Copilot - The Supplier Communications Agent</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>AI Summaries with Copilot</strong> giúp tóm tắt đơn hàng và đưa ra các thông tin nổi bật để người quản lý nắm nhanh tình hình.</p><p><strong>Generative insights for Demand planning</strong> giúp planner phân tích dữ liệu và dự báo nhu cầu sản phẩm trong tương lai.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>A. AI Summaries with Copilot - Product information management:</strong><br/>Vế đầu đúng cho việc tóm tắt đơn hàng, nhưng <strong>Product information management</strong> quản lý thông tin sản phẩm, không phải công cụ tạo insight và dự báo nhu cầu.</p></li><li><p><strong>B. Workload insights with Copilot - Generative insights for Demand planning:</strong><br/>Vế sau đúng cho demand planning, nhưng <strong>Workload insights with Copilot</strong> không phải lựa chọn phù hợp để tóm tắt thông tin đơn hàng cho người quản lý.</p></li><li><p><strong>D. Workload insights with Copilot - The Supplier Communications Agent:</strong><br/>Cả hai vế đều không khớp: Workload insights không phục vụ tóm tắt đơn hàng theo yêu cầu, còn Supplier Communications Agent phục vụ giao tiếp với nhà cung cấp, không phải phân tích và dự báo nhu cầu.</p></li></ul>"
  },
  {
    "id": "AB-100-009",
    "exam": "AB-100",
    "number": 9,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p>A company has a Microsoft 365 E5 subscription and uses Microsoft Copilot Studio. The company has a Microsoft SharePoint Online library that contains 10,000 policy PDFs from various departments. The library contains a populated column named Department for each PDF. You need to design a Copilot Studio agent that will use the SharePoint library as a knowledge source. </p><p>The solution must meet the following requirements: </p><ul><li>Enable the agent to answer user questions about company policies. </li><li>Ensure that the agent can identify which departments and policies are connected. </li></ul><p>What should you include in the design for each requirement? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.</em><em><p>[Hình ab100_9.jpg chưa có trong bản lưu nguồn.]</p></em><br/></p>",
    "options": {
      "A": "<p>From Copilot Studio, add SharePoint as a knowledge source. - Create a Microsoft Dataverse table for the departments.</p>",
      "B": "<p>Use AI Builder to process and feed SharePoint content. - Upgrade to SharePoint Premium.</p>",
      "C": "<p>From Copilot Studio, add SharePoint as a knowledge source. - From Copilot Studio, configure the SharePoint tool.</p>",
      "D": "<p>Import the PDFs into Microsoft Dataverse. - From Copilot Studio, configure the SharePoint tool.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Thêm SharePoint library làm knowledge source cho phép agent truy xuất nội dung các tài liệu chính sách để trả lời câu hỏi.</p><p>Cấu hình SharePoint tool giúp agent dùng metadata từ cột <strong>Department</strong> đã có để xác định tài liệu nào liên quan đến từng phòng ban. Cách này dùng trực tiếp dữ liệu hiện hữu, giảm công sức xây dựng và bảo trì.</p><p>Không cần:</p><ul><li>Tạo model mới.</li><li>Import PDF vào Microsoft Dataverse.</li><li>Nâng cấp lên SharePoint Premium.</li></ul><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>A. Add SharePoint as a knowledge source – Create a Microsoft Dataverse table for the departments:</strong><br/>Việc thêm SharePoint làm knowledge source là đúng, nhưng tạo Dataverse table là thừa vì thông tin phòng ban đã tồn tại trong cột <strong>Department</strong> của SharePoint library.</p></li><li><p><strong>B. Use AI Builder to process and feed SharePoint content – Upgrade to SharePoint Premium:</strong><br/>Không cần AI Builder để xử lý và đưa nội dung sang agent, vì Copilot Studio có thể dùng SharePoint trực tiếp làm knowledge source. SharePoint Premium cũng không phải yêu cầu của bài toán.</p></li><li><p><strong>D. Import the PDFs into Microsoft Dataverse – Configure the SharePoint tool:</strong><br/>Không cần sao chép PDF sang Dataverse. Việc này làm tăng công sức quản trị và tạo rủi ro dữ liệu bị trùng lặp; tài liệu đã có sẵn trong SharePoint.</p></li></ul>"
  },
  {
    "id": "AB-100-010",
    "exam": "AB-100",
    "number": 10,
    "missingImages": 0,
    "question": "<p><strong>Note:</strong><em> This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. </em></p><p>A company has a Microsoft Dynamics 365 Sales environment that has Microsoft Copilot enabled. You need to customize Copilot by tailoring how opportunity summaries are generated or how they are presented to users. </p><p><strong>Solution:</strong> You add fields to the opportunity summary. Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Copilot opportunity summary trong <strong>Dynamics 365 Sales</strong> dựa vào cấu hình form để xác định thông tin nào được trích xuất và hiển thị.</p><p>Khi thêm các field vào opportunity summary, bạn trực tiếp tùy chỉnh:</p><ul><li>Nội dung được đưa vào phần tóm tắt.</li><li>Thông tin mà người dùng nhìn thấy.</li><li>Cách summary hỗ trợ người dùng theo dõi cơ hội bán hàng.</li></ul><p>Vì vậy, đề xuất này đáp ứng yêu cầu tùy chỉnh Copilot.</p><h4>Vì sao đáp án còn lại sai?</h4><ul><li><strong>B. No:</strong><br/>Chọn “No” nghĩa là phủ nhận hiệu quả của đề xuất. Tuy nhiên, việc thêm field vào opportunity summary thực sự thay đổi nội dung và cách thông tin được trình bày cho người dùng.</li></ul>"
  },
  {
    "id": "AB-100-011",
    "exam": "AB-100",
    "number": 11,
    "missingImages": 1,
    "question": "<p><strong>DRAG DROP</strong></p><p>A company has a Microsoft Foundry project that uses a single agent and a single prompt to complete a series of tasks. The agent encounters the following issues: </p><ul><li>It frequently produces incomplete results. </li><li>It struggles with domain-specific reasoning. </li><li>Agent response times are remarkably slow. </li></ul><p>You need to recommend a solution to improve the overall performance and accuracy of the agent. What should you include in the recommendation? </p><p>To answer, drag the appropriate actions to the correct requirements. Each action may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p><p><em><p>[Hình ab100_11.jpg chưa có trong bản lưu nguồn.]</p></em><br/></p>",
    "options": {
      "A": "<p>Move to a multi-agent architecture. - Add a grounding data source.</p>",
      "B": "<p>Upgrade to a larger generative AI model. - Add a grounding data source.</p>",
      "C": "<p>Move to a multi-agent architecture. - Add a prebuilt connector.</p>",
      "D": "<p>Upgrade to a larger generative AI model. - Add a prebuilt connector.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Move to a multi-agent architecture</strong> cải thiện hiệu năng.</p><p>Thay vì một agent xử lý toàn bộ chuỗi công việc dài, kiến trúc multi-agent chia workflow thành các tác vụ chuyên biệt. Các agent nhỏ có thể xử lý tác vụ theo thứ tự hoặc song song. Điều này:</p><ul><li>Giảm khối lượng xử lý của từng agent.</li><li>Giảm độ dài prompt và số bước suy luận trong mỗi lượt.</li><li>Cải thiện thời gian phản hồi.</li><li>Giúp hoàn thành workflow ổn định hơn.</li></ul><p><strong>Add a grounding data source</strong> cải thiện độ chính xác.</p><p>Agent cần kiến thức nội bộ và domain-specific information. Thêm grounding data source áp dụng mô hình <strong>Retrieval-Augmented Generation (RAG)</strong>: agent truy xuất tài liệu, hướng dẫn hoặc dữ liệu nghiệp vụ đáng tin cậy trước khi tạo câu trả lời. Điều này làm giảm việc suy đoán và tăng độ chính xác.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>B. Upgrade to a larger generative AI model – Add a grounding data source:</strong><br/>Grounding data source là đúng để cải thiện accuracy. Tuy nhiên, model lớn hơn thường có độ trễ và chi phí cao hơn, nên không giải quyết tốt yêu cầu cải thiện performance.</p></li><li><p><strong>C. Move to a multi-agent architecture – Add a prebuilt connector:</strong><br/>Multi-agent architecture là đúng để giảm tải và cải thiện performance. Tuy nhiên, prebuilt connector chủ yếu kết nối agent với một service hoặc hệ thống khác; nó không tự cung cấp kiến thức nội bộ để cải thiện domain-specific accuracy.</p></li><li><p><strong>D. Upgrade to a larger generative AI model – Add a prebuilt connector:</strong><br/>Model lớn hơn có thể cải thiện một phần reasoning nhưng thường chậm hơn. Prebuilt connector chỉ bổ sung connectivity. Tổ hợp này không giải quyết trực tiếp cả performance lẫn thiếu knowledge grounding.</p></li></ul>"
  },
  {
    "id": "AB-100-012",
    "exam": "AB-100",
    "number": 12,
    "missingImages": 0,
    "question": "<p><strong>Note:</strong><em> This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. </em></p><p>You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates. You need to view the date and time when the resources were created in RG1. </p><p><strong>Solution:</strong> From the RG1 blade, you click Deployments. Does this meet the goal?</p><p><br/></p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Khi resource được triển khai vào resource group bằng <strong>ARM template</strong> hoặc <strong>Bicep</strong>, Azure ghi lại deployment history.</p><p>Trong Azure portal, vào:</p><p><code>RG1</code> → <code>Deployments</code></p><p>Bạn có thể xem deployment và các thông tin như:</p><ul><li><strong>Start time</strong></li><li><strong>Timestamp</strong></li><li>Trạng thái deployment</li><li>Danh sách resource liên quan</li></ul><p>Các thông tin này cho phép xác định thời điểm resource được tạo hoặc triển khai.</p><p>Nếu resource được tạo thủ công thay vì bằng ARM/Bicep deployment, <strong>Activity Log</strong> sẽ là nơi phù hợp hơn để truy vết thao tác tạo resource.</p><h4>Vì sao đáp án còn lại sai?</h4><ul><li><strong>B. No:</strong><br/>Chọn “No” là sai vì mục <strong>Deployments</strong> trong RG1 thực sự cung cấp deployment history, bao gồm thời gian bắt đầu và timestamp để xác định thời điểm resource được triển khai.</li></ul>"
  },
  {
    "id": "AB-100-013",
    "exam": "AB-100",
    "number": 13,
    "missingImages": 1,
    "question": "<p><strong>DRAG DROP</strong></p><p>A company has an ecommerce support portal that uses Microsoft Dataverse.</p><p>You are designing a Microsoft Copilot Studio agent for the portal. The agent must meet the following requirements:</p><ul><li>Respond with a default help message when the user input is unclear.</li><li>Initiate external processes, such as retrieving the order status, when users make specific requests.</li><li>Generative orchestration will be enabled for the solution.</li></ul><p>You need to recommend a feature for each requirement. What should you recommend? </p><p>To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.</p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.<p>[Hình ab100_13.jpg chưa có trong bản lưu nguồn.]</p></em></p>",
    "options": {
      "A": "<p>A tool (connector) - A trigger phrase</p>",
      "B": "<p>The Fallback topic - A tool (connector)</p>",
      "C": "<p>A trigger phrase - A skill</p>",
      "D": "<p>The Fallback topic - The Escalate topic</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Fallback topic</strong> được dùng khi agent không hiểu hoặc không thể match yêu cầu của người dùng với topic/intent phù hợp. Vì vậy, đây là nơi thích hợp để hiển thị default help message, ví dụ yêu cầu người dùng diễn đạt lại câu hỏi hoặc đưa ra các lựa chọn hỗ trợ.</p><p><strong>A tool (connector)</strong> cho phép agent gọi REST API, connector hoặc Power Automate flow để thực hiện tác vụ bên ngoài, chẳng hạn:</p><ul><li>Lấy trạng thái đơn hàng.</li><li>Tra cứu dữ liệu khách hàng.</li><li>Tạo hoặc cập nhật record.</li><li>Kích hoạt quy trình nghiệp vụ.</li></ul><p>Khi <strong>generative orchestration</strong> được bật, agent có thể chọn tool phù hợp dựa trên ý định của người dùng mà không cần fixed trigger phrase.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>A. A tool (connector) – A trigger phrase:</strong><br/>Tool/connector phù hợp để gọi API hoặc flow, nhưng trigger phrase không phải lựa chọn phù hợp cho default help message. Fallback topic mới xử lý trường hợp agent không hiểu yêu cầu.</p></li><li><p><strong>C. A trigger phrase – A skill:</strong><br/>Trigger phrase không cần thiết khi dùng generative orchestration, vì agent có thể suy luận và chọn action/tool dựa trên nội dung yêu cầu. Skill cũng không phải lựa chọn trực tiếp nhất khi yêu cầu là gọi API hoặc Power Automate flow.</p></li><li><p><strong>D. The Fallback topic – The Escalate topic:</strong><br/>Fallback topic đúng cho thông báo mặc định. Tuy nhiên, Escalate topic dùng để chuyển cuộc hội thoại sang nhân viên hỗ trợ hoặc một kênh khác; nó không phải cơ chế gọi API/flow để truy xuất dữ liệu hay thực hiện quy trình bên ngoài.</p></li></ul>"
  },
  {
    "id": "AB-100-014",
    "exam": "AB-100",
    "number": 14,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p>A company has a Microsoft Copilot Studio agent for customer support. </p><p>You are reviewing and validating the following prompts: </p><ul><li>A prompt that has instructions to \"help the customer as best you can\". </li><li>A prompt that helps retrieve product information from a knowledge base. </li><li>You need to ensure that the agent delivers consistent and accurate responses. </li></ul><p>What should you do for each prompt? To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p><p><em><p>[Hình ab100_14.jpg chưa có trong bản lưu nguồn.]</p></em><br/></p>",
    "options": {
      "A": "<p>(1) Keep the prompt vague to enable model flexibility - (2) Add several open-ended questions to give the model broader context.</p>",
      "B": "<p>(1) Add filler words to make the prompt sound more natural - (2) Remove the knowledge source so that the model responds freely with general product information.</p>",
      "C": "<p>(1) Rewrite the prompt with clear and task-specific instructions - (2) Use responses with only reference sources and limit the response scope.</p>",
      "D": "<p>(1) Rewrite the prompt to limit the response length to 50 words - (2) Enable automatic multi-language translation for the knowledge base.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Với prompt thứ nhất, chỉ dẫn “help the customer as best you can” không nói rõ:</p><ul><li>Khách hàng cần được hỗ trợ về vấn đề gì.</li><li>Agent cần thực hiện những bước nào.</li><li>Định dạng câu trả lời mong muốn.</li><li>Khi nào agent cần chuyển tiếp/escalate vấn đề.</li></ul><p>Vì vậy, cần viết lại bằng các <strong>hướng dẫn rõ ràng, cụ thể theo tác vụ</strong> để kết quả nhất quán hơn.</p><p>Với prompt truy xuất knowledge base, chỉ cho phép dùng <strong>reference sources</strong> và giới hạn phạm vi trả lời sẽ:</p><ul><li>Giảm việc model tự suy đoán.</li><li>Giảm hallucination.</li><li>Tăng độ chính xác.</li><li>Bảo đảm câu trả lời bám sát tài liệu được cung cấp.</li></ul><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>A. Keep the prompt vague – Add several open-ended questions:</strong><br/>Prompt mơ hồ làm tăng sự không nhất quán. Câu hỏi mở rộng còn có thể khiến model trả lời lan man, vượt ra ngoài phạm vi knowledge base.</p></li><li><p><strong>B. Add filler words – Remove the knowledge source:</strong><br/>Filler words không làm yêu cầu rõ hơn. Xóa knowledge source khiến model phải dựa vào kiến thức chung, làm tăng nguy cơ thông tin sai hoặc không phù hợp với tài liệu nội bộ.</p></li><li><p><strong>D. Limit response length to 50 words – Enable automatic multi-language translation:</strong><br/>Giới hạn 50 từ chỉ kiểm soát độ dài, không làm rõ nhiệm vụ. Dịch tự động cũng không bảo đảm model chỉ sử dụng nguồn tham chiếu hoặc giảm hallucination.</p></li></ul>"
  },
  {
    "id": "AB-100-015",
    "exam": "AB-100",
    "number": 15,
    "missingImages": 0,
    "question": "<p>A company has a customer order system that creates sales orders manually. You need to design an AI solution to automate the following tasks as part of the system: </p><ul><li>Save the order details to a database. </li><li>Update the order status in the database. </li><li>Extract the order details from an order file. </li><li>Prepare and send a confirmation email to customers. </li></ul><p>The solution must minimize development effort and support intelligent automation and solution integration. What should you include in the design?</p>",
    "options": {
      "A": "<p>A workflow in Azure Logic Apps</p>",
      "B": "<p>A multi-agent solution that uses the Semantic Kernel SDK</p>",
      "C": "<p>A multi-agent solution that uses Microsoft Foundry Agent Service</p>",
      "D": "<p>A Microsoft Copilot Studio agent that uses Microsoft Power Automate workflows</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Microsoft Copilot Studio</strong> cung cấp khả năng xây dựng và điều phối AI agent theo hướng low-code.</p><p><strong>Microsoft Power Automate</strong> cung cấp workflow và connectors để agent có thể:</p><ul><li>Trích xuất dữ liệu từ files.</li><li>Lưu hoặc cập nhật database records.</li><li>Gọi các services/hệ thống khác.</li><li>Gửi confirmation emails.</li></ul><p>Kết hợp hai dịch vụ tạo ra một giải pháp AI agent low-code, phù hợp với yêu cầu giảm development effort.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>A. A workflow in Azure Logic Apps:</strong><br/>Azure Logic Apps phù hợp để xây integration workflows. Tuy nhiên, riêng Logic Apps không cung cấp trải nghiệm AI agent low-code và khả năng hội thoại/điều phối agent như Copilot Studio.</p></li><li><p><strong>B. A multi-agent solution that uses the Semantic Kernel SDK:</strong><br/>Semantic Kernel SDK yêu cầu phát triển pro-code. Đây không phải lựa chọn phù hợp khi yêu cầu là giảm công sức phát triển bằng low-code tools.</p></li><li><p><strong>C. A multi-agent solution that uses Microsoft Foundry Agent Service:</strong><br/>Microsoft Foundry Agent Service phù hợp khi cần xây agent solution linh hoạt và nâng cao, nhưng thường cần nhiều kỹ thuật phát triển hơn. Nó không phù hợp bằng Copilot Studio + Power Automate cho yêu cầu low-code.</p></li></ul>"
  },
  {
    "id": "AB-100-016",
    "exam": "AB-100",
    "number": 16,
    "missingImages": 0,
    "question": "<p>A company has an AI business solution. You need to extend the solution so that Microsoft 365 Copilot can invoke external logic hosted in Azure services. What should you include in the solution?</p>",
    "options": {
      "A": "<p>Microsoft Copilot Studio skills</p>",
      "B": "<p>Microsoft Power Platform connectors</p>",
      "C": "<p>Custom engine agents</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Microsoft Copilot Studio skills</strong> cho phép đóng gói logic bên ngoài thành một skill/action mà Microsoft 365 Copilot có thể sử dụng.</p><p>Skill cung cấp lớp mô tả và điều phối để Copilot có thể:</p><ul><li>Hiểu ý định của người dùng.</li><li>Xác định skill/capability phù hợp.</li><li>Gọi Azure Function, Logic App hoặc REST API tương ứng.</li><li>Trả kết quả lại trong ngữ cảnh hội thoại bằng ngôn ngữ tự nhiên.</li></ul><p>Vì vậy, skill/action là lớp tích hợp phù hợp để đưa Azure logic vào trải nghiệm Microsoft 365 Copilot.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>B. Microsoft Power Platform connectors:</strong><br/>Connector cung cấp khả năng kết nối đến data source hoặc service. Tuy nhiên, connector riêng lẻ không phải cơ chế mở rộng mà Microsoft 365 Copilot trực tiếp gọi. Connector thường được dùng bên trong action, skill hoặc flow.</p></li><li><p><strong>C. Custom engine agents:</strong><br/>Custom engine agent tạo một agent riêng với logic và orchestration riêng. Đây không phải cách trực tiếp và đơn giản nhất để thêm một capability vào trải nghiệm Microsoft 365 Copilot hiện có.</p></li></ul>"
  },
  {
    "id": "AB-100-017",
    "exam": "AB-100",
    "number": 17,
    "missingImages": 0,
    "question": "<p>A company has a Microsoft Power Platform solution that contains the following components: </p><ul><li>Microsoft Dataverse tables</li><li>A Microsoft Power BI workspace named WS1 </li><li>A canvas app named App1 that uses Dataverse, </li><li>A Power BI semantic model that connects to Dataverse by using DirectQuery. </li></ul><p>You plan to use generative AI to provide answers to queries based on a subset of corporate data. You need to ensure that the data is available as a grounding data source for AI systems. What should you do?</p>",
    "options": {
      "A": "<p>Populate a Dataverse table.</p>",
      "B": "<p>Share WS1.</p>",
      "C": "<p>Endorse the semantic model.</p>",
      "D": "<p>Export the semantic model.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Cần đưa dữ liệu vào <strong>Dataverse table</strong>.</p><p>Dataverse được tích hợp sâu với Power Platform và các Copilot capabilities. Khi dữ liệu được lưu trong Dataverse, AI features có thể truy vấn dữ liệu đó để làm nguồn grounding, giúp câu trả lời bám sát dữ liệu doanh nghiệp thay vì chỉ dựa vào kiến thức tổng quát của model.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>B. Share WS1:</strong><br/>Chia sẻ workspace chủ yếu cấp quyền truy cập workspace hoặc nội dung Power BI. Thao tác này không đưa dữ liệu vào nguồn mà AI có thể dùng trực tiếp để grounding.</p></li><li><p><strong>C. Endorse the semantic model:</strong><br/>Endorse semantic model thể hiện mức độ tin cậy/chính thức của model trong Power BI. Nó không biến semantic model thành AI grounding source.</p></li><li><p><strong>D. Export the semantic model:</strong><br/>Export semantic model phục vụ việc sử dụng, sao chép hoặc phân tích model ở ngữ cảnh khác. Nó không cung cấp dữ liệu trực tiếp cho AI features làm grounding source.</p></li></ul>"
  },
  {
    "id": "AB-100-018",
    "exam": "AB-100",
    "number": 18,
    "missingImages": 0,
    "question": "<p>A retail company plans to deploy Microsoft Copilot Studio agents to support: Microsoft Dynamics 365 Commerce scenarios. A Microsoft Power Apps inventory management solution. </p><p>You need to recommend a solution to organize product catalog data as a consistent source for multiple AI systems. What should you recommend?</p>",
    "options": {
      "A": "<p>Let each agent scrape product details from Microsoft SharePoint Online libraries.</p>",
      "B": "<p>Store the product catalog data in a separate custom table for each agent.</p>",
      "C": "<p>Configure prompts to pull product details from the PDFs of external vendors.</p>",
      "D": "<p>Centralize the product catalog data in Microsoft Dataverse and expose the data to both agents.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Tập trung product catalog trong <strong>Microsoft Dataverse</strong> tạo ra một nguồn dữ liệu duy nhất, có cấu trúc và nhất quán.</p><p>Cả Dynamics 365 Commerce agent lẫn Power Apps solution có thể truy cập cùng dữ liệu này. Nhờ đó:</p><ul><li>Giảm trùng lặp dữ liệu.</li><li>Tránh phải đồng bộ thủ công giữa nhiều nơi.</li><li>Giảm nguy cơ hai agent trả về thông tin sản phẩm khác nhau.</li><li>Dễ quản lý quyền truy cập, schema và cập nhật dữ liệu.</li></ul><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>A. Let each agent scrape product details from Microsoft SharePoint Online libraries:</strong><br/>Scrape dữ liệu từ SharePoint không tạo nguồn dữ liệu product catalog có cấu trúc và nhất quán. Dữ liệu có thể phân tán, khó kiểm soát và dễ làm các agent trả lời không đồng nhất.</p></li><li><p><strong>B. Store the product catalog data in a separate custom table for each agent:</strong><br/>Mỗi agent có một bảng riêng dẫn đến trùng lặp dữ liệu. Mỗi lần thay đổi product catalog phải đồng bộ giữa các bảng, làm tăng công sức quản trị và nguy cơ dữ liệu không khớp.</p></li><li><p><strong>C. Configure prompts to pull product details from the PDFs of external vendors:</strong><br/>PDF từ vendor thường không phải nguồn product catalog có cấu trúc, có thể lỗi thời và khó đảm bảo tính nhất quán. Prompt không thay thế một nguồn dữ liệu tập trung, được quản trị rõ ràng.</p></li></ul>"
  },
  {
    "id": "AB-100-019",
    "exam": "AB-100",
    "number": 19,
    "missingImages": 1,
    "question": "<p><strong>DRAG DROP</strong></p><p>You need to design a Microsoft Copilot Studio agent that meets the following requirements: </p><ul><li>Supports interactive speech responses</li><li>Optimizes decision-making and the accuracy of responses</li></ul><p>What should you include in the design for each requirement? </p><p>To answer, drag the appropriate options to the correct requirements. Each option may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.</p><p><p>[Hình ab100_19.jpg chưa có trong bản lưu nguồn.]</p></p>",
    "options": {
      "A": "<p>Copilot Studio voice features — A deep reasoning model</p>",
      "B": "<p>A deep reasoning model — Speech Synthesis Markup Language (SSML)</p>",
      "C": "<p>Speech Synthesis Markup Language (SSML) — A deep reasoning model</p>",
      "D": "<p>Azure Language in Foundry Tools — Speech Synthesis Markup Language (SSML)</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Copilot Studio voice features</strong> phù hợp cho yêu cầu phản hồi giọng nói tương tác vì cung cấp voice capabilities được tích hợp trong trải nghiệm Copilot Studio. Người dùng có thể giao tiếp tự nhiên bằng giọng nói với agent.</p><p><strong>A deep reasoning model</strong> phù hợp cho các tác vụ phức tạp cần suy luận nhiều bước, cân nhắc nhiều yếu tố và tạo câu trả lời có độ chính xác cao hơn. Loại model này hỗ trợ agent đưa ra quyết định tốt hơn trong các tình huống phức tạp.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>B. A deep reasoning model — Speech Synthesis Markup Language (SSML):</strong><br/>Deep reasoning model không phải thành phần chuyên dụng để tạo voice interaction. SSML chỉ định dạng cách phát âm, nhịp điệu, cao độ hoặc ngắt nghỉ; nó không cải thiện khả năng reasoning và ra quyết định.</p></li><li><p><strong>C. Speech Synthesis Markup Language (SSML) — A deep reasoning model:</strong><br/>Deep reasoning model phù hợp cho yêu cầu reasoning phức tạp ở vế sau. Tuy nhiên, SSML không phải giải pháp đầy đủ cho voice interaction; nó chỉ là markup dùng để kiểm soát cách tổng hợp giọng nói.</p></li><li><p><strong>D. Azure Language in Foundry Tools — Speech Synthesis Markup Language (SSML):</strong><br/>Azure Language phù hợp phân tích ngôn ngữ tự nhiên, nhưng không phải lựa chọn tổng thể tốt nhất cho voice interaction tích hợp. SSML vẫn chỉ định dạng speech output, không phải giải pháp cho deep reasoning.</p></li></ul>"
  },
  {
    "id": "AB-100-020",
    "exam": "AB-100",
    "number": 20,
    "missingImages": 1,
    "question": "<p><strong>DRAG DROP</strong></p><p>You are designing end-to-end test scenarios for a business solution that uses Microsoft Dynamics 365 Sales and Dynamics 365 Finance. </p><p>You need to ensure that the business solution meets the following test requirements:</p><ul><li>Properly exchanges data between the Dynamics 365 apps</li><li>Aligns with defined user workflows and business processes</li></ul><p>Which type of testing should you use for each requirement? </p><p>To answer, drag the appropriate testing types to the correct requirements. Each testing type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.</p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p><p><p>[Hình ab100_20.jpg chưa có trong bản lưu nguồn.]</p></p>",
    "options": {
      "A": "<p>Integration - User acceptance</p>",
      "B": "<p>Integration - Performance</p>",
      "C": "<p>Drift - User acceptance</p>",
      "D": "<p>Exploratory - Performance</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Integration testing</strong> kiểm tra việc các hệ thống tích hợp với nhau có hoạt động đúng không. Trong tình huống này, nó xác minh dữ liệu được gửi, nhận và đồng bộ chính xác giữa <strong>Dynamics 365 Sales</strong> và <strong>Dynamics 365 Finance</strong>.</p><p><strong>User acceptance testing (UAT)</strong> kiểm tra giải pháp từ góc nhìn người dùng nghiệp vụ. Người dùng thực tế xác nhận rằng quy trình, màn hình và kết quả của hệ thống đáp ứng nhu cầu công việc và business processes.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>B. Integration – Performance:</strong><br/>Integration testing là đúng cho yêu cầu trao đổi dữ liệu giữa hai hệ thống. Tuy nhiên, performance testing đo tốc độ, tải, thời gian phản hồi hoặc khả năng chịu tải; nó không xác minh giải pháp phù hợp với workflow nghiệp vụ của người dùng.</p></li><li><p><strong>C. Drift – User acceptance:</strong><br/>UAT là đúng cho yêu cầu xác nhận quy trình thực tế. Nhưng drift testing thường dùng để phát hiện sự thay đổi về dữ liệu, hành vi hoặc hiệu năng của model theo thời gian; nó không kiểm tra tích hợp dữ liệu giữa Dynamics 365 Sales và Finance.</p></li><li><p><strong>D. Exploratory – Performance:</strong><br/>Exploratory testing là hoạt động khám phá hệ thống không theo kịch bản cố định. Performance testing đo hiệu năng. Cả hai không trực tiếp xác minh việc truyền dữ liệu chính xác giữa hai hệ thống và mức độ phù hợp với workflow nghiệp vụ.</p></li></ul>"
  },
  {
    "id": "AB-100-021",
    "exam": "AB-100",
    "number": 21,
    "missingImages": 1,
    "question": "<p>A company plans to implement an AI business solution for a consumer goods company. You need to orchestrate sales order fulfillment and shipping, and analyze historical data and trends to replenish stock. Which agent types should you use?</p><p><p>[Hình ab100_21.jpg chưa có trong bản lưu nguồn.]</p></p>",
    "options": {
      "A": "<p>Autonomous - Prompt-and-response</p>",
      "B": "<p>Prompt-and-response - Autonomous</p>",
      "C": "<p>Autonomous - Task</p>",
      "D": "<p>Task - Prompt-and-response</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Autonomous agent</strong> phù hợp cho việc điều phối order fulfillment và shipping vì agent có thể tự xử lý workflow phức tạp gồm nhiều bước, tự đưa ra quyết định khi cần và tiếp tục quy trình mà không cần người dùng ra lệnh ở từng bước.</p><p><strong>Prompt-and-response agent</strong> phù hợp để phân tích dữ liệu lịch sử và xu hướng vì manager đưa ra một yêu cầu cụ thể, chẳng hạn “Phân tích xu hướng doanh số quý gần đây”, và agent tạo kết quả phân tích để trả lời yêu cầu đó.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>B. Prompt-and-response – Autonomous:</strong><br/>Prompt-and-response agent không phù hợp để tự điều phối fulfillment/shipping nhiều bước. Autonomous agent cũng không cần thiết cho phân tích được bắt đầu bằng một yêu cầu cụ thể từ manager.</p></li><li><p><strong>C. Autonomous – Task:</strong><br/>Autonomous agent đúng cho fulfillment và shipping. Tuy nhiên, task agent thường thực hiện một tác vụ đã xác định; nó không phù hợp bằng prompt-and-response agent cho yêu cầu phân tích có tính hội thoại của manager.</p></li><li><p><strong>D. Task – Prompt-and-response:</strong><br/>Prompt-and-response agent đúng cho phân tích xu hướng theo prompt. Nhưng task agent không đủ khả năng tự chủ để điều phối quy trình fulfillment và shipping phức tạp, nhiều bước.</p></li></ul>"
  },
  {
    "id": "AB-100-022",
    "exam": "AB-100",
    "number": 22,
    "missingImages": 0,
    "question": "<p>A company has two Microsoft Power Platform environments named Dev1 and Prod1. A Microsoft Copilot Studio agent named Agent1 is built into a solution in the Dev1 environment.</p><p>You plan to deploy Agent1 to Prod1.</p><p>You need to make Agent1 available to the users in Prod1. The solution must minimize administrative effort.</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Share Agent1 with the users in Prod1.</p>",
      "B": "<p>Export the solution as an unmanaged solution and import the solution into Prod1.</p>",
      "C": "<p>Export the solution as a managed solution and import the solution into Prod1.</p>",
      "D": "<p>Create a new Copilot Studio agent in Prod1 by replicating the configuration of Agent1.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Trong Power Platform ALM:</p><ul><li><strong>Unmanaged solutions</strong> phù hợp cho môi trường development, nơi developer còn chỉnh sửa component.</li><li><strong>Managed solutions</strong> phù hợp để triển khai vào test, UAT hoặc production.</li></ul><p>Export Agent1 trong <strong>managed solution</strong> rồi import vào Prod1 giúp:</p><ul><li>Đảm bảo cùng một package được triển khai nhất quán.</li><li>Giảm cấu hình/thao tác thủ công.</li><li>Hạn chế sửa trực tiếp component trong production.</li><li>Hỗ trợ quy trình ALM rõ ràng và dễ kiểm soát.</li></ul><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>A. Share Agent1 with the users in Prod1:</strong><br/>Share agent chỉ cấp quyền dùng agent, không triển khai agent và các component liên quan sang môi trường Prod1.</p></li><li><p><strong>B. Export the solution as an unmanaged solution and import the solution into Prod1:</strong><br/>Unmanaged solution cho phép chỉnh sửa component sau khi import. Điều này không phù hợp với production vì dễ tạo thay đổi ngoài ý muốn và khó kiểm soát.</p></li><li><p><strong>D. Create a new Copilot Studio agent in Prod1 by replicating the configuration of Agent1:</strong><br/>Tạo lại thủ công mất thời gian, dễ sai cấu hình và không phải quy trình ALM chuẩn. Nó cũng khó bảo đảm Prod1 giống môi trường development.</p></li></ul>"
  },
  {
    "id": "AB-100-023",
    "exam": "AB-100",
    "number": 23,
    "missingImages": 0,
    "question": "<p><strong>CASE STUDY</strong></p><p><strong>Background</strong></p><p>Fabrikam, Inc., is a global consumer goods company that is undergoing a digital transformation initiative to migrate its entire infrastructure to the Microsoft cloud. As a key element of this cloud migration, the company will implement Microsoft Dynamics 365 Sales, moving away from the current on-premises proprietary technologies used by its business-to-business (B2B) sales team. As part of the cloud migration, Fabrikam will adopt an AI-first approach to its business solutions and implement AI solutions, wherever possible, to streamline operations. </p><p><strong>Problem</strong> <strong>Statements</strong></p><p>Fabrikam's infrastructure currently relies on various on-premises systems that require sales executives to use corporate computers with physical keyboards to access business information during customer interactions. Mobile phones cannot be used for these purposes, as the systems depend on keyboard input. As a result, the sales executives spend a lot of time using keyboards to search for data on several disparate systems and file servers, rather than focusing on the customers. This affects the customer experience. Fabrikam stakeholders are concerned that users will be hesitant to adopt AI. If the AI initiatives are NOT adopted, cost savings will never be realized. Additionally, funding for future AI initiatives will depend on demonstrating an increase in AI adoption month over month. As the AI agent initiative for the sales team will be the first for Fabrikam, the rapid adoption of the agent is a high priority. </p><p><strong>Planned Initiatives - General</strong></p><p>Fabrikam management has prioritized AI-driven projects to improve efficiency, customer engagement, and responsible AI adoption. The current application infrastructure is on-premises and must be migrated to the cloud to support the adoption of these technologies. </p><p><strong>Infrastructure Migration</strong></p><p>Fabrikam plans to migrate from its current on-premises infrastructure to a completely cloud-based topology; this will include user authentication, the security framework, and, primarily, the adoption of the services by end users. All the data from the different systems will be consolidated into a single data source - a common data model that will use a Microsoft Dataverse environment as a single source of truth (SSOT) for the sales team. </p><p><em>Sales Cycle Enablement  - </em>To achieve the company's objectives, Fabrikam intends to implement the following strategies to enhance the sales cycle: Use low-code development to create a single AI agent that has Dataverse as its core component. Ensure that sales managers can access unanswered correspondence from prospects and intervene as appropriate. Replace the previous proprietary software with Dynamics 365 Sales to track sales cycles and customer interactions. Have the sales executives use Dynamics 365 Sales to track interactions for open opportunities and send follow-up communications to prospects. Have the sales executives use handsfree headsets to interact with an AI agent when they have questions about internal policies or customer data. </p><p><strong>Requirements - Infrastructure Migration</strong> </p><p>Fabrikam has identified the following infrastructure migration requirements: Azure must be used for all future infrastructure workloads. The company must follow Microsoft-recommended methodologies for infrastructure migration to the cloud. Any created AI agents must have their return on investment (ROI) calculated to ensure that the solution will save the company money. </p><p><em>Sales Cycle Enablement</em> - Fabrikam has identified the following requirements for sales cycle enablement: The final AI agent must follow Microsoft recommendations for a conversational user experience. A designated checklist must be reviewed to ensure that the AI agent follows Microsoft deployment recommendations for a compliant solution. Detailed telemetry must be logged for the first created AI agent to help troubleshoot and optimize the agent during the initial AI agent adoption process. Unexpected AI agent actions must end in an escalation to a live representative. For example, a sales executive must be rerouted to a representative if the agent cannot answer a question after two failed attempts. The return on investment (ROI) of switching from the current process to the future process is required for stakeholder sign off. The sales team must use Dynamics 365 Sales to correspond with prospects more quickly and efficiently than currently. Sales managers must report on the adoption of the AI agent to key Fabrikam stakeholders on a monthly basis. </p><p>Any sensitive information, such as user IDs and names, shared via the AI agent must be tracked for future auditing. Which framework should you use for the infrastructure migration?</p>",
    "options": {
      "A": "<p>Microsoft Cloud Adoption Framework for Azure</p>",
      "B": "<p>Success by Design</p>",
      "C": "<p>Microsoft Power Platform Center of Excellence (CoE)</p>",
      "D": "<p>Microsoft Power Platform Project Setup Wizard</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Microsoft Cloud Adoption Framework for Azure (CAF)</strong> là hướng dẫn chính thức của Microsoft cho việc áp dụng và di chuyển lên Azure.</p><p>CAF cung cấp best practices, tài liệu và công cụ để tổ chức:</p><ul><li>Xây dựng chiến lược cloud.</li><li>Lập kế hoạch.</li><li>Chuẩn bị Azure landing zone.</li><li>Di chuyển workload.</li><li>Quản trị (governance).</li><li>Vận hành và tối ưu hóa môi trường Azure.</li></ul><p>Vì vậy, CAF phù hợp cho việc di chuyển hạ tầng tổng thể của Fabrikam sang Azure.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>B. Success by Design:</strong><br/>Success by Design là phương pháp/guidance dành cho việc triển khai Dynamics 365 và các business processes. Nó không phải framework để di chuyển toàn bộ infrastructure sang Azure.</p></li><li><p><strong>C. Microsoft Power Platform Center of Excellence (CoE):</strong><br/>Power Platform CoE tập trung vào adoption, governance và quản trị việc sử dụng Power Platform trong tổ chức. Nó không hướng dẫn core infrastructure migration lên Azure.</p></li><li><p><strong>D. Microsoft Power Platform Project Setup Wizard:</strong><br/>Project Setup Wizard hỗ trợ thiết lập một Power Platform project cụ thể. Nó không phải cloud-migration framework toàn diện.</p></li></ul>"
  },
  {
    "id": "AB-100-024",
    "exam": "AB-100",
    "number": 24,
    "missingImages": 0,
    "question": "<p>A company has a Microsoft Power Platform environment that contains Microsoft Dataverse data. You create a Microsoft Copilot Studio agent named Agent1 that processes the Dataverse data. You discover that Agent1 fails to return relevant or accurate results. You need to improve the quality and reliability of data grounding.</p><p>What should you do?</p>",
    "options": {
      "A": "<p>Retrain Agent1.</p>",
      "B": "<p>Verify and cleanse the Dataverse data.</p>",
      "C": "<p>Use an adaptive card in Agent1.</p>",
      "D": "<p>Add example user inputs to the training data of Agent1.</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Cần kiểm tra và làm sạch dữ liệu trong <strong>Dataverse</strong>.</p><p>Nếu dữ liệu nguồn có các vấn đề như:</p><ul><li>Không chính xác.</li><li>Thiếu thông tin.</li><li>Bị trùng lặp.</li><li>Không nhất quán.</li><li>Lỗi thời.</li></ul><p>thì agent sẽ truy xuất sai hoặc thiếu thông tin, dẫn đến câu trả lời không liên quan hoặc không chính xác.</p><p>Data cleansing giúp chuẩn hóa, loại bỏ dữ liệu trùng, bổ sung dữ liệu thiếu và xác minh tính đúng đắn của nguồn grounding. Điều này trực tiếp cải thiện chất lượng câu trả lời của agent.</p><h4>Vì sao các đáp án khác sai?</h4><ul><li><p><strong>A. Retrain Agent1:</strong><br/>Retrain agent chủ yếu cải thiện cách agent hiểu ý định hoặc phản hồi theo training data. Nó không sửa dữ liệu sai, thiếu hoặc trùng lặp trong Dataverse.</p></li><li><p><strong>C. Use an adaptive card in Agent1:</strong><br/>Adaptive card là thành phần giao diện dùng để hiển thị thông tin hoặc thu thập input có cấu trúc từ người dùng. Nó không cải thiện chất lượng dữ liệu grounding.</p></li><li><p><strong>D. Add example user inputs to the training data of Agent1:</strong><br/>Thêm example inputs giúp agent nhận diện cách người dùng diễn đạt yêu cầu tốt hơn. Tuy nhiên, nó không sửa nội dung sai hoặc không nhất quán trong Dataverse.</p></li></ul>"
  },
  {
    "id": "AB-100-025",
    "exam": "AB-100",
    "number": 25,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p><strong>Case study</strong></p><p><strong>To start the case study </strong></p><p>To display the first question in this case study, select the \"Next\" button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the \"Question\" button to return to the question.</p><p><strong>Background</strong> </p><p>Fabrikam, Inc., is a global consumer goods company that is undergoing a digital transformation initiative to migrate its entire infrastructure to the Microsoft cloud. As a key element of this cloud migration, the company will implement Microsoft Dynamics 365 Sales, moving away from the current on-premises proprietary technologies used by its business-to-business (B2B) sales team. As part of the cloud migration, Fabrikam will adopt an AI-first approach to its business solutions and implement AI solutions, wherever possible, to streamline operations.</p><p><strong>Problem Statements</strong> </p><p>Fabrikam's infrastructure currently relies on various on-premises systems that require sales executives to use corporate computers with physical keyboards to access business information during customer interactions. Mobile phones cannot be used for these purposes, as the systems depend on keyboard input. As a result, the sales executives spend a lot of time using keyboards to search for data on several disparate systems and file servers, rather than focusing on the customers. This affects the customer experience. Fabrikam stakeholders are concerned that users will be hesitant to adopt AI. If the AI initiatives are NOT adopted, cost savings will never be realized. Additionally, funding for future AI initiatives will depend on demonstrating an increase in AI adoption month over month. As the AI agent initiative for the sales team will be the first for Fabrikam, the rapid adoption of the agent is a high priority.</p><p><strong>Planned Initiatives</strong></p><p><strong>General</strong> - Fabrikam management has prioritized AI-driven projects to improve efficiency, customer engagement, and responsible AI adoption. The current application infrastructure is on-premises and must be migrated to the cloud to support the adoption of these technologies.</p><p><strong>Infrastructure Migration</strong> - Fabrikam plans to migrate from its current on-premises infrastructure to a completely cloud-based topology; this will include user authentication, the security framework, and, primarily, the adoption of the services by end users. All the data from the different systems will be consolidated into a single data source - a common data model that will use a Microsoft Dataverse environment as a single source of truth (SSOT) for the sales team.</p><p><strong>Sales Cycle Enablement</strong> - To achieve the company's objectives, Fabrikam intends to implement the following strategies to enhance the sales cycle: Use low-code development to create a single AI agent that has Dataverse as its core component. Ensure that sales managers can access unanswered correspondence from prospects and intervene as appropriate. Replace the previous proprietary software with Dynamics 365 Sales to track sales cycles and customer interactions. Have the sales executives use Dynamics 365 Sales to track interactions for open opportunities and send follow-up communications to prospects. Have the sales executives use handsfree headsets to interact with an AI agent when they have questions about internal policies or customer data.</p><p><strong>Requirements</strong></p><p><strong>Infrastructure Migration</strong> - Fabrikam has identified the following infrastructure migration requirements: Azure must be used for all future infrastructure workloads. The company must follow Microsoft-recommended methodologies for infrastructure migration to the cloud. Any created AI agents must have their return on investment (ROI) calculated to ensure that the solution will save the company money.</p><p><strong>Sales Cycle Enablement</strong> - Fabrikam has identified the following requirements for sales cycle enablement: </p><ul><li>The final AI agent must follow Microsoft recommendations for a conversational user experience. </li><li>A designated checklist must be reviewed to ensure that the AI agent follows Microsoft deployment recommendations for a compliant solution. </li><li>Detailed telemetry must be logged for the first created AI agent to help troubleshoot and optimize the agent during the initial AI agent adoption process. </li><li>Unexpected AI agent actions must end in an escalation to a live representative. For example, a sales executive must be rerouted to a representative if the agent cannot answer a question after two failed attempts. The return on investment (ROI) of switching from the current process to the future process is required for stakeholder sign off. </li><li>The sales team must use Dynamics 365 Sales to correspond with prospects more quickly and efficiently than currently. Sales managers must report on the adoption of the AI agent to key Fabrikam stakeholders on a monthly basis. Any sensitive information, such as user IDs and names, shared via the AI agent must be tracked for future auditing. </li></ul><p>Which components should you use to meet the sales cycle enablement requirements? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em><em><p>[Hình ab100_25.jpg chưa có trong bản lưu nguồn.]</p></em><br/></p>",
    "options": {
      "A": "<p>Microsoft Foundry - a custom connector</p>",
      "B": "<p>Dynamics 365 Sales - a REST API</p>",
      "C": "<p>Microsoft Copilot Studio - a Fallback topic</p>",
      "D": "<p>the Power Platform admin center - an event trigger</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Microsoft Copilot Studio là nền tảng low-code phù hợp để xây dựng custom agent và tích hợp Dataverse làm nguồn dữ liệu chính.</p><p>Fallback topic được chạy khi agent không nhận diện được ý định hoặc không thể trả lời. Topic này có thể cấu hình để chuyển cuộc hội thoại sang nhân viên hỗ trợ trực tiếp.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Microsoft Foundry - a custom connector:</strong> Custom connector chủ yếu để kết nối dịch vụ/API. Nó không phải cơ chế xử lý fallback và chuyển tiếp hội thoại cho người hỗ trợ như yêu cầu.</p></li><li><p><strong>B. Dynamics 365 Sales - a REST API:</strong> Dynamics 365 Sales phục vụ quản lý bán hàng; REST API chỉ là cách tích hợp kỹ thuật, không phải nền tảng low-code để tạo agent và xử lý fallback.</p></li><li><p><strong>D. Power Platform admin center - an event trigger:</strong> Admin center dùng để quản trị môi trường, người dùng và chính sách; không dùng để xây agent hay điều hướng hội thoại khi agent không trả lời được.</p></li></ul>"
  },
  {
    "id": "AB-100-026",
    "exam": "AB-100",
    "number": 26,
    "missingImages": 0,
    "question": "<p>A company uses a Microsoft Copilot Studio agent to automate tasks in a web app.</p><p>During testing, you discover that the automation sometimes fails because of frequent changes to the app's user interface.</p><p>You need to recommend a solution to ensure that the agent successfully automates the tasks. The solution must minimize changes to the agent.</p><p>What should you include in the recommendation?</p>",
    "options": {
      "A": "<p>Computer Use in Copilot Studio</p>",
      "B": "<p>Custom models in Azure AI Studio</p>",
      "C": "<p>Conversation topics in Copilot Studio</p>",
      "D": "<p>An agent flow in Copilot Studio</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Computer Use in Copilot Studio cho phép agent tương tác với giao diện dựa trên những gì agent “nhìn thấy” trên màn hình và ngữ cảnh thao tác. Khi website đổi bố cục hoặc HTML, cách này thường bền vững hơn automation dùng locator cố định, từ đó giảm công sức bảo trì.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Custom models in Azure AI Studio:</strong> Dùng để xây dựng/tinh chỉnh model AI, không phải chức năng trực tiếp thao tác giao diện web thay đổi liên tục.</p></li><li><p><strong>C. Conversation topics in Copilot Studio:</strong> Dùng để thiết kế luồng hội thoại với người dùng, không dùng để nhận biết và nhấp/chọn thành phần trên trang web.</p></li><li><p><strong>D. An agent flow in Copilot Studio:</strong> Phù hợp để điều phối quy trình và gọi hành động, nhưng không tự cung cấp khả năng hiểu trực quan giao diện thay đổi như Computer Use.</p></li></ul>"
  },
  {
    "id": "AB-100-027",
    "exam": "AB-100",
    "number": 27,
    "missingImages": 0,
    "question": "<p>A company uses Microsoft Foundry agents.</p><p>You need to ensure that an agent can dynamically use external tools at runtime without updating the agent.</p><p>What should you include in the solution?</p>",
    "options": {
      "A": "<p>A Microsoft Foundry hub</p>",
      "B": "<p>A Model Context Protocol (MCP) server</p>",
      "C": "<p>Azure AI Search</p>",
      "D": "<p>Microsoft Copilot Studio</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>MCP server cung cấp một chuẩn để agent khám phá và gọi external tools, APIs, và data sources tại runtime. Khi thay đổi hoặc bổ sung tool ở phía MCP server, agent có thể dùng tool đó mà không cần cập nhật lại logic tích hợp của agent theo từng tool.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. A Microsoft Foundry hub:</strong> Foundry hub chủ yếu quản lý tài nguyên, project và kết nối trong Foundry; không phải giao thức runtime chuẩn hóa để agent khám phá tool động.</p></li><li><p><strong>C. Azure AI Search:</strong> Azure AI Search hỗ trợ tìm kiếm, indexing và RAG trên dữ liệu; không phải cơ chế kết nối đa dạng API/tool động.</p></li><li><p><strong>D. Microsoft Copilot Studio:</strong> Copilot Studio là nền tảng low-code để xây agent. Bản thân nó không phải runtime protocol giải quyết yêu cầu “tool đổi mà không cần cập nhật agent”.</p></li></ul>"
  },
  {
    "id": "AB-100-028",
    "exam": "AB-100",
    "number": 28,
    "missingImages": 1,
    "question": "<p><strong>CASE STUDY</strong></p><p><strong>Background</strong></p><p>Fabrikam, Inc., is a global consumer goods company that is undergoing a digital transformation initiative to migrate its entire infrastructure to the Microsoft cloud. As a key element of this cloud migration, the company will implement Microsoft Dynamics 365 Sales, moving away from the current on-premises proprietary technologies used by its business-to-business (B2B) sales team. As part of the cloud migration, Fabrikam will adopt an AI-first approach to its business solutions and implement AI solutions, wherever possible, to streamline operations. </p><p><strong>Problem Statements</strong></p><p>Fabrikam's infrastructure currently relies on various on-premises systems that require sales executives to use corporate computers with physical keyboards to access business information during customer interactions. Mobile phones cannot be used for these purposes, as the systems depend on keyboard input. As a result, the sales executives spend a lot of time using keyboards to search for data on several disparate systems and file servers, rather than focusing on the customers. This affects the customer experience. Fabrikam stakeholders are concerned that users will be hesitant to adopt AI. If the AI initiatives are NOT adopted, cost savings will never be realized. Additionally, funding for future AI initiatives will depend on demonstrating an increase in AI adoption month over month. As the AI agent initiative for the sales team will be the first for Fabrikam, the rapid adoption of the agent is a high priority. </p><p><strong>Planned Initiatives - General</strong></p><p>Fabrikam management has prioritized AI-driven projects to improve efficiency, customer engagement, and responsible AI adoption. The current application infrastructure is on-premises and must be migrated to the cloud to support the adoption of these technologies. </p><p><strong>Infrastructure Migration</strong></p><p>Fabrikam plans to migrate from its current on-premises infrastructure to a completely cloud-based topology; this will include user authentication, the security framework, and, primarily, the adoption of the services by end users. All the data from the different systems will be consolidated into a single data source - a common data model that will use a Microsoft Dataverse environment as a single source of truth (SSOT) for the sales team. </p><p><strong>Sales Cycle Enablement</strong></p><p>To achieve the company's objectives, Fabrikam intends to implement the following strategies to enhance the sales cycle: </p><ul><li>Use low-code development to create a single AI agent that has Dataverse as its core component. </li><li>Ensure that sales managers can access unanswered correspondence from prospects and intervene as appropriate. </li><li>Replace the previous proprietary software with Dynamics 365 Sales to track sales cycles and customer interactions. </li><li>Have the sales executives use Dynamics 365 Sales to track interactions for open opportunities and send follow-up communications to prospects. </li><li>Have the sales executives use handsfree headsets to interact with an AI agent when they have questions about internal policies or customer data. </li></ul><p><strong>Requirements - Infrastructure Migration</strong></p><p>Fabrikam has identified the following infrastructure migration requirements: </p><ul><li>Azure must be used for all future infrastructure workloads. </li><li>The company must follow Microsoft-recommended methodologies for infrastructure migration to the cloud. </li><li>Any created AI agents must have their return on investment (ROI) calculated to ensure that the solution will save the company money. </li></ul><p><strong>Sales Cycle Enablement</strong></p><p>Fabrikam has identified the following requirements for sales cycle enablement: </p><ul><li>The final AI agent must follow Microsoft recommendations for a conversational user experience. </li><li>A designated checklist must be reviewed to ensure that the AI agent follows Microsoft deployment recommendations for a compliant solution. </li><li>Detailed telemetry must be logged for the first created AI agent to help troubleshoot and optimize the agent during the initial AI agent adoption process. </li><li>Unexpected AI agent actions must end in an escalation to a live representative. For example, a sales executive must be rerouted to a representative if the agent cannot answer a question after two failed attempts. </li><li>The return on investment (ROI) of switching from the current process to the future process is required for stakeholder sign off. </li><li>The sales team must use Dynamics 365 Sales to correspond with prospects more quickly and efficiently than currently. Sales managers must report on the adoption of the AI agent to key Fabrikam stakeholders on a monthly basis. </li></ul><p>Any sensitive information, such as user IDs and names, shared via the AI agent must be tracked for future auditing. Which framework should you use to meet the AI agent requirements for the sales cycle enablement? </p><p><em>To answer, select the appropriate options in the answer area. </em></p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p><p><em><p>[Hình ab100_1.jpg chưa có trong bản lưu nguồn.]</p></em><br/></p>",
    "options": {
      "A": "<p>Success by Design — Success by Design</p>",
      "B": "<p>Success by Design — Microsoft Cloud Adoption Framework for Azure</p>",
      "C": "<p>Microsoft Power Platform Well-Architected framework — Success by Design</p>",
      "D": "<p>The ALM Accelerator for Microsoft Power Platform — Microsoft Power Platform Well-Architected framework</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Success by Design cung cấp hướng dẫn triển khai theo giai đoạn cho giải pháp Dynamics 365 và Power Platform, bao gồm best practices, checklist và review gate. Vì cả hai yêu cầu đều thuộc việc triển khai Copilot Studio và trải nghiệm hội thoại, cùng dùng <strong>Success by Design</strong>.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Success by Design — Microsoft Cloud Adoption Framework for Azure:</strong> Cloud Adoption Framework for Azure tập trung vào chiến lược áp dụng, quản trị và di chuyển workload Azure; không chuyên cho thiết kế trải nghiệm hội thoại trong Copilot Studio.</p></li><li><p><strong>C. Microsoft Power Platform Well-Architected framework — Success by Design:</strong> Well-Architected framework tập trung vào các nguyên tắc chất lượng kiến trúc như reliability, security, performance và operational excellence; không phải framework triển khai theo giai đoạn cho cả hai yêu cầu.</p></li><li><p><strong>D. ALM Accelerator for Microsoft Power Platform — Microsoft Power Platform Well-Architected framework:</strong> ALM Accelerator phục vụ quản lý vòng đời ứng dụng và deployment; Well-Architected phục vụ đánh giá kiến trúc. Cả hai không phù hợp bằng Success by Design cho hướng dẫn triển khai agent và conversational experience.</p></li></ul>"
  },
  {
    "id": "AB-100-029",
    "exam": "AB-100",
    "number": 29,
    "missingImages": 0,
    "question": "<p>A company uses Microsoft Dynamics 365 Finance to manage accounts payable. You are designing an AI invoice processing solution. You need to recommend the prerequisites to configure a prebuilt copilot for accounts payable. What should you recommend?</p>",
    "options": {
      "A": "<p>From Microsoft Copilot Studio, create an accounts payable agent.</p>",
      "B": "<p>Extend Microsoft 365 Copilot for Sales to an accounts payable agent.</p>",
      "C": "<p>Build an AI tool in Microsoft Foundry.</p>",
      "D": "<p>From the Power Platform admin center, assign the Finance and Operations AI security role to users.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Để người dùng truy cập các khả năng AI tích hợp sẵn trong Dynamics 365 Finance, quản trị viên cần vào <strong>Power Platform admin center</strong> và gán <strong>Finance and Operations AI security role</strong> cho họ. Role này cấp quyền dùng các AI capability được xây sẵn.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Create an accounts payable agent in Copilot Studio:</strong> Copilot Studio dùng để tạo custom agent. Đề yêu cầu bật quyền cho prebuilt copilot hiện có, nên xây agent mới là thừa.</p></li><li><p><strong>B. Extend Microsoft 365 Copilot for Sales:</strong> Copilot for Sales phục vụ hoạt động bán hàng, không phù hợp với quy trình accounts payable trong Dynamics 365 Finance.</p></li><li><p><strong>C. Build an AI tool in Microsoft Foundry:</strong> Foundry dùng để xây dựng giải pháp AI tùy chỉnh; không phải cách cấp quyền cho chức năng AI built-in của Dynamics 365 Finance.</p></li></ul>"
  },
  {
    "id": "AB-100-030",
    "exam": "AB-100",
    "number": 30,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p>You need to recommend a Microsoft Power Platform solution for customer support. The solution must include AI capabilities in Microsoft Power Automate and must meet the following requirements:</p><ul><li>Use a centralized workspace for AI models.</li><li>Generate short overviews from large amounts of unstructured text, such as case notes or transcripts, without requiring additional training or coding.</li></ul><p>What should you include in the recommendation for each requirement? To answer, select the appropriate options in the answer area.</p><p><strong>NOTE: </strong><em>Each correct selection is worth one point.</em></p><p><em><p>[Hình ab100_30.jpg chưa có trong bản lưu nguồn.]</p></em><br/></p>",
    "options": {
      "A": "<p>Azure OpenAI Foundry - An AI Builder prebuilt model</p>",
      "B": "<p>Microsoft Dataverse - An AI Builder prebuilt prompt</p>",
      "C": "<p>Microsoft Copilot Studio - Azure OpenAI</p>",
      "D": "<p>Azure OpenAI Foundry - GitHub Copilot</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Azure OpenAI Foundry cung cấp không gian làm việc tập trung để quản lý, thử nghiệm và vận hành các AI model.</p><p>Để tóm tắt văn bản như case note hoặc transcript trong Power Automate mà không cần huấn luyện model hay lập trình, dùng <strong>AI Builder prebuilt model</strong> cho text summarization là phù hợp nhất.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Microsoft Dataverse — An AI Builder prebuilt prompt:</strong> Dataverse là nơi lưu trữ dữ liệu, không phải workspace chính để quản lý và vận hành AI model. Prebuilt prompt cũng không phù hợp bằng prebuilt model khi yêu cầu là tóm tắt văn bản không cần training.</p></li><li><p><strong>C. Microsoft Copilot Studio — Azure OpenAI:</strong> Copilot Studio phù hợp để xây agent hội thoại. Yêu cầu ở đây là quản lý model tập trung và tóm tắt trực tiếp trong Power Automate.</p></li><li><p><strong>D. Azure OpenAI Foundry — GitHub Copilot:</strong> Azure OpenAI Foundry phù hợp cho vế đầu, nhưng GitHub Copilot hỗ trợ lập trình viên viết code, không phải công cụ prebuilt để tóm tắt văn bản trong Power Automate.</p></li></ul>"
  },
  {
    "id": "AB-100-031",
    "exam": "AB-100",
    "number": 31,
    "missingImages": 2,
    "question": "<p>You have an Azure subscription named Subscription1. In Subscription1, you create an Azure file share named share1. You create a shared access signature (SAS) named SAS1 as shown in the following exhibit.</p><p><p>[Hình ab100_31_a.jpg chưa có trong bản lưu nguồn.]</p></p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em> </p><p><strong>Hot Area:</strong><strong><p>[Hình ab100_31_b.jpg chưa có trong bản lưu nguồn.]</p></strong></p>",
    "options": {
      "A": "<p>Scenario 1: Will have no access / Scenario 2: Will have read-only access.</p>",
      "B": "<p>Scenario 1: Will have read, write, and list access / Scenario 2: Will have read, write, and list access.</p>",
      "C": "<p>Scenario 1: Will have no access / Scenario 2: Will have no access.</p>",
      "D": "<p>Scenario 1: Will be prompted for credentials / Scenario 2: Will have no access.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h3>1. Chuyện gì đang xảy ra?</h3><p>Câu hỏi kiểm tra hai tình huống truy cập Azure Files bằng SAS1. Cần xét dải IP của SAS và xem SAS có thể xác thực khi mount qua SMB hay không.</p><h3>2. Đề thực sự muốn gì?</h3><ul><li>Từ khóa: <code>IP address</code>, <code>net use</code>, <code>SAS1 as the password</code>, <code>Azure file share</code>.</li><li><code>net use</code> dùng để mount Azure file share thông qua giao thức SMB.</li><li>SAS token không thể được dùng làm mật khẩu để mount Azure file share qua SMB.</li></ul><h3>3. Đáp án</h3><ul><li><strong>Scenario 1: Will have no access</strong></li><li><strong>Scenario 2: Will have no access</strong></li></ul><h3>4. Vì sao đúng?</h3><ul><li><strong>Scenario 1:</strong> IP <code>193.77.134.1</code> nằm ngoài dải SAS cho phép <code>193.77.134.10–193.77.134.50</code>, nên bị từ chối.</li><li><strong>Scenario 2:</strong> Ngày sử dụng hợp lệ; IP <code>193.77.134.50</code> hợp lệ; SAS1 có các quyền Read, Write và List. Tuy nhiên, <code>net use</code> dùng SMB và SAS token không thể xác thực để mount Azure Files qua SMB. Cần dùng storage account key hoặc identity-based authentication.</li></ul><p><code>HTTPS only</code> không phải nguyên nhân trực tiếp gây lỗi. Azure Files vẫn hỗ trợ SMB có mã hóa; lỗi nằm ở việc dùng SAS làm mật khẩu SMB. <a href=\"https://learn.microsoft.com/en-gb/azure/storage/files/storage-how-to-use-files-windows\" rel=\"noopener noreferrer\" target=\"_blank\">Microsoft Learn</a></p><h3>5. Vì sao các phương án khác sai?</h3><ul><li><strong>Read-only access:</strong> SAS có nhiều quyền hơn Read, nhưng xác thực SMB thất bại trước khi quyền được áp dụng.</li><li><strong>Read, write, and list access:</strong> Đây là quyền trong SAS, nhưng SAS không xác thực được lệnh <code>net use</code>.</li><li><strong>Prompted for credentials:</strong> SAS được cung cấp không phải credential hợp lệ để mount qua SMB.</li></ul><h3>6. Câu thần chú</h3><p><em>SAS → truy cập REST; <code>net use</code>/SMB → storage account key hoặc identity.</em></p>"
  },
  {
    "id": "AB-100-032",
    "exam": "AB-100",
    "number": 32,
    "missingImages": 0,
    "question": "<p>A financial services company uses Microsoft Dynamics 365 Finance. Currently, the company's support staff manually reviews customer transaction histories to detect potential fraud cases before escalating the cases. You need to recommend an automation solution for the review process. The solution must ensure that escalations reach a human analyst for final decision making. What should you recommend?</p>",
    "options": {
      "A": "<p>Deploy an autonomous agent that closes non-fraud cases automatically.</p>",
      "B": "<p>Use Microsoft 365 Copilot in Word to automatically finalize fraud detection policies.</p>",
      "C": "<p>Configure a task agent to generate fraud risk scores for the human analyst to review.</p>",
      "D": "<p>Export the data to a data lake for analysis in Microsoft Power BI.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Task agent có thể phân tích dữ liệu giao dịch, tạo fraud risk score và gửi kết quả cho human analyst xem xét. Điều này giúp tăng tốc xử lý nhưng vẫn giữ con người ở bước quyết định cuối, phù hợp với nghiệp vụ nhạy cảm như phát hiện gian lận.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Autonomous agent tự đóng case không gian lận:</strong> Agent tự ra quyết định và đóng case mà không có phê duyệt của con người, không đáp ứng yêu cầu human-in-the-loop.</p></li><li><p><strong>B. Microsoft 365 Copilot trong Word:</strong> Copilot trong Word hỗ trợ soạn thảo tài liệu/chính sách, không phân tích transaction history để tạo fraud risk score.</p></li><li><p><strong>D. Export dữ liệu sang data lake và phân tích bằng Power BI:</strong> Power BI phù hợp báo cáo, trực quan hóa và phân tích dữ liệu, nhưng không tạo quy trình task agent chấm điểm rủi ro rồi chuyển chuyên viên duyệt.</p></li></ul>"
  },
  {
    "id": "AB-100-033",
    "exam": "AB-100",
    "number": 33,
    "missingImages": 0,
    "question": "<p>A company has an Azure environment that supports multiple business units.</p><p>The company plans to implement an AI solution that will perform sentiment analysis on customer product reviews.</p><p>You need to evaluate the potential cost of the solution to support return on AI investment (ROAI) analysis.</p><p>What should you use?</p>",
    "options": {
      "A": "<p>Cost Management + Billing</p>",
      "B": "<p>Microsoft Fabric SKU Estimator</p>",
      "C": "<p>Total Cost of Ownership (TCO) Calculator</p>",
      "D": "<p>Azure Reservations</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Cost Management + Billing cho phép theo dõi chi phí, phân bổ chi phí theo subscription/resource group/tag, lập budget và dự báo chi phí Azure. Vì vậy, nó phù hợp để đánh giá potential cost và tính ROAI cho các đơn vị kinh doanh.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Microsoft Fabric SKU Estimator:</strong> Chỉ dùng để ước tính SKU/capacity cho Microsoft Fabric, không quản lý chi phí Azure tổng thể theo business unit.</p></li><li><p><strong>C. Total Cost of Ownership (TCO) Calculator:</strong> Chủ yếu so sánh chi phí hạ tầng on-premises với Azure trước khi migration; không phải công cụ theo dõi và phân bổ chi phí vận hành thực tế.</p></li><li><p><strong>D. Azure Reservations:</strong> Là cơ chế cam kết sử dụng để nhận chiết khấu, không phải công cụ báo cáo, phân bổ hoặc dự báo chi phí.</p></li></ul>"
  },
  {
    "id": "AB-100-034",
    "exam": "AB-100",
    "number": 34,
    "missingImages": 0,
    "question": "<p><strong>HOTSPOT</strong></p><p><strong>CASE STUDY</strong></p><p><strong>Overview</strong></p><p>Contoso, Ltd. is a high-tech manufacturing company that uses Microsoft Dynamics 365 Finance. Dynamics 365 Supply Chain Management, and Dynamics 365 Commerce for its North American operations. The company designs and develops innovative products that have many patents and proprietary technologies. The patents and engineering designs are closely guarded secrets. Contoso executives want to integrate and adopt AI solutions to help scale the company in preparation for an anticipated period of rapid growth. The company has multiple legal entities and Azure subscriptions that will be used in the adopted AI solutions. </p><p><strong>Requirements</strong></p><p><strong>AI Adoption</strong></p><p>The following executives will have specific responsibilities in the overall AI adoption: </p><ul><li>Chief Technology Officer (CTO): Select one Dynamics 365 Finance, Dynamics 365 Supply Chain Management or Dynamics 365 Commerce prebuilt AI agent and one custom Microsoft Copilot Studio AI agent to prioritize and deploy during the initial AI adoption phase. </li><li>Chief Information Officer (CIO): Ensure that appropriate security labels are assigned to the data used by the AI agents. </li><li>Chief Financial Officer (CFO): Analyze the return on investment (ROI) for the AI agents being deployed. </li><li>Chief Information Security Officer (CISO): Discover and inventory AI resources for auditing. </li><li>Chief Executive Officer (CEO): Ensure that all solutions adhere to industry-standard responsible AI practices. All AI initiatives and agents will have a detailed business use case, a defined audience profile, and an estimated ROI that will compare the cost savings of the current process against the estimated costs of using the new AI solutions. The company's research and development (R&amp;D) department already has a custom Model Context Protocol (MCP) server that contains comprehensive product specifications and compliance data. </li></ul><p><strong>Prebuilt AI Agent</strong></p><p>The CTO has NOT yet selected which prebuilt AI agent to use in Dynamics 365 Supply Chain Management. The CTO wants to view available agent templates to identify which agent will add the most business value. Depending on which high-priority AI agents are identified, its agent capabilities must be previewed in a discovery meeting with the relevant business operation stakeholders. </p><p><strong>Custom AI Agent </strong>- Contoso has identified the following custom AI agent requirements: </p><ul><li>The custom AI agent will use data from Dynamics 365 Supply Chain Management to answer questions for the manufacturing team as a low-code solution. </li><li>The custom AI agent will be accessible from within Microsoft Teams. </li><li>The custom AI agent must be designed to eventually connect to other agents that can be selected based on their description. </li><li>The topics used in the custom AI agent will be selected based NOT on a trigger phrase, but on a description of the purpose of the query, to make the interactions more conversational. </li><li>The custom AI agent must be able to answer questions about product specifications by using existing technologies. </li><li>The product specifications are maintained by the R&amp;D department. </li><li>The custom AI agent must be integrated with and accessible from Dynamics 365 Supply Chain Management. </li><li>The custom AI agent must be able to use Dynamics 365 Supply Chain Management business logic that is stored outside of the application. </li></ul><p>Analysis, Reporting, and Troubleshooting Contoso has identified the following analysis, reporting, and troubleshooting requirements: </p><ul><li>The CISO will audit all the AI solutions monthly for compliance and security. </li><li>The CFO will analyze all the AI solutions quarterly to compare the estimated ROI against actual measured efficiencies and adoption. </li><li>The CFO will use the Copilot Studio agent usage estimator to perform this analysis. </li><li>The CISO wants to identify how much sensitive data was accessed for a given AI agent run and who accessed the data. Too much sensitive data accessed by a single user might indicate a high security risk. </li><li>The CTO wants to track user feedback on the quality of the AI agent responses during user interactions with the agents. Consistently poor feedback will trigger an escalated reengineering discussion. </li><li>The CEO wants a quarterly assessment of all the required metrics for their specific responsibilities. The tools used for the assessments must be Microsoft-recommended and must verify reliability, interpretability, fairness, and compliance. </li><li>The CFO wants to identify how many interactions with the AI agents are abandoned on a given day as compared to resolved conversations. </li></ul><p>Too many abandoned sessions might indicate that Copilot Studio credits are being used inefficiently by end users. What should you recommend to assist the CTO with the prebuilt agent selection process?</p>",
    "options": {
      "A": "<p>Agent management</p>",
      "B": "<p>Copilot Studio</p>",
      "C": "<p>Lifecycle Services (LCS)</p>",
      "D": "<p>Immersive Home</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Agent management</strong> là khu vực tập trung để khám phá, quản lý và preview các prebuilt AI agent trong Dynamics 365 Finance and Operations. Vì vậy, đây là công cụ phù hợp nhất cho quá trình CTO lựa chọn agent.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Copilot Studio:</strong> Dùng để xây dựng và tùy chỉnh custom agent, không phải nơi chuyên chọn/quản lý danh mục prebuilt agent trong Finance and Operations.</p></li><li><p><strong>C. Lifecycle Services (LCS):</strong> Tập trung vào quản lý vòng đời ứng dụng Dynamics 365, như triển khai, cập nhật và theo dõi môi trường; không phải agent catalog.</p></li><li><p><strong>D. Immersive Home:</strong> Là trải nghiệm/trang làm việc tổng quan, không phải công cụ quản lý agent chuyên biệt.</p></li></ul>"
  },
  {
    "id": "AB-100-035",
    "exam": "AB-100",
    "number": 35,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p>You need to design a multi-agent solution that will include a custom agent. The solution must meet the following requirements: Define the rules and constraints that the agent must follow. Automate a backend process that involves data movement between services and runs independently of the agent's reasoning steps. What should you include in the design for each requirement? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em><p>[Hình ab100_35.jpg chưa có trong bản lưu nguồn.]</p></p>",
    "options": {
      "A": "<p>Agent flows - Microsoft Power Pages</p>",
      "B": "<p>Agent flows - Microsoft Power Automate cloud flow</p>",
      "C": "<p>Conversation topics - Microsoft Power Automate cloud flow</p>",
      "D": "<p>Microsoft Power Automate cloud flow - Microsoft Power Pages</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Agent flows</strong> xác định các quy tắc, ràng buộc và trình tự hành động mà agent phải thực hiện.</p><p><strong>Microsoft Power Automate cloud flow</strong> tự động hóa quy trình backend, chẳng hạn nhận dữ liệu từ hệ thống này, xử lý rồi gửi sang hệ thống khác. Cloud flow có thể chạy độc lập với các bước suy luận/hội thoại của agent.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Agent flows — Microsoft Power Pages:</strong> Power Pages dùng để tạo website/cổng thông tin, không dùng để tự động hóa backend giữa các dịch vụ.</p></li><li><p><strong>C. Conversation topics — Microsoft Power Automate cloud flow:</strong> Conversation topics quản lý nội dung và nhánh hội thoại với người dùng; không phải công cụ xác định quy tắc/trình tự bắt buộc cho agent như Agent flows.</p></li><li><p><strong>D. Microsoft Power Automate cloud flow — Microsoft Power Pages:</strong> Cloud flow phù hợp cho backend, nhưng Power Pages không thay thế Agent flows trong việc điều phối hành vi của agent.</p></li></ul>"
  },
  {
    "id": "AB-100-036",
    "exam": "AB-100",
    "number": 36,
    "missingImages": 0,
    "question": "<p>A company plans to deploy an AI-based customer service app that will autonomously manage interactions, escalate complex cases, and learn from historical ticket data. You need to perform a return on AI investment (ROAI) analysis of the app deployment. The solution must ensure that the analysis is accurate. What should you do first?</p>",
    "options": {
      "A": "<p>Establish the AI performance metrics.</p>",
      "B": "<p>Conduct an AI market benchmarking study.</p>",
      "C": "<p>Model the customer experience.</p>",
      "D": "<p>Identify and quantify all the development, deployment, and operating costs.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>ROAI so sánh giá trị/lợi ích mà AI tạo ra với toàn bộ chi phí đầu tư. Do đó, bước đầu tiên là xác định và định lượng:</p><ul><li>Chi phí phát triển</li><li>Chi phí triển khai</li><li>Chi phí vận hành</li></ul><p>Các chi phí này là mốc cơ sở để sau đó so sánh với doanh thu tăng thêm, chi phí tiết kiệm được hoặc năng suất cải thiện nhờ AI.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Establish the AI performance metrics:</strong> Các metric như accuracy hoặc latency quan trọng, nhưng chưa cho biết tổng chi phí đầu tư để tính ROAI.</p></li><li><p><strong>B. Conduct an AI market benchmarking study:</strong> Benchmark thị trường có thể hỗ trợ quyết định chiến lược, nhưng không phải dữ liệu nền tảng đầu tiên để tính ROAI của giải pháp cụ thể.</p></li><li><p><strong>C. Model the customer experience:</strong> Mô hình hóa trải nghiệm khách hàng giúp ước lượng lợi ích, nhưng cần có baseline chi phí trước để đối chiếu và tính lợi tức.</p></li></ul>"
  },
  {
    "id": "AB-100-037",
    "exam": "AB-100",
    "number": 37,
    "missingImages": 0,
    "question": "<p><strong>Note:</strong> This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. </p><p>A company uses Microsoft 365 and Dynamics 365. You need to recommend a solution to automatically summarize email threads, generate suggested replies in Microsoft Outlook, and provide meeting preparation summaries that include relevant customer relationship management (CRM) data. </p><p><strong>Solution:</strong> You recommend Microsoft 365 Copilot for Sales. Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Microsoft 365 Copilot for Sales</strong> hỗ trợ nhân viên sales trong Outlook và Teams khi kết nối với CRM như Dynamics 365. Nó có thể:</p><ul><li>Tóm tắt chuỗi email.</li><li>Gợi ý nội dung trả lời.</li><li>Đưa thông tin CRM liên quan vào phần chuẩn bị cuộc họp.</li></ul><p>Vì vậy, đề xuất này đáp ứng đầy đủ yêu cầu.</p><h4>Vì sao phương án còn lại sai?</h4><ul><li><strong>B. No:</strong> Chọn No nghĩa là cho rằng giải pháp không đáp ứng yêu cầu. Điều này sai vì Copilot for Sales được thiết kế đúng cho quy trình sales trong Outlook/Teams có tích hợp CRM.</li></ul>"
  },
  {
    "id": "AB-100-038",
    "exam": "AB-100",
    "number": 38,
    "missingImages": 0,
    "question": "<p><strong>Note:</strong> This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.</p><p>A company has a Microsoft Dynamics 365 Sales environment that has Microsoft Copilot enabled.</p><p>You need to customize Copilot by tailoring how opportunity summaries are generated or how they are presented to users.</p><p><strong>Solution:</strong> You add the opportunity summary widget to the Opportunity form. Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Thêm <strong>opportunity summary widget</strong> vào form chỉ bật hoặc hiển thị một thành phần giao diện có sẵn. Nó không thay đổi cách Copilot tạo summary, cũng không quyết định trường thông tin hay cấu trúc nội dung được hiển thị.</p><p>Muốn tùy chỉnh thật sự, cần cấu hình các field và setting liên quan trong <strong>Sales Hub Copilot settings</strong>.</p><h4>Vì sao phương án còn lại sai?</h4><ul><li><strong>A. Yes:</strong> Chọn Yes đồng nghĩa với việc widget đã tùy chỉnh nội dung Copilot summary. Điều này không đúng, vì widget chỉ là phần hiển thị UI.</li></ul>"
  },
  {
    "id": "AB-100-039",
    "exam": "AB-100",
    "number": 39,
    "missingImages": 0,
    "question": "<p>A company plans to deploy a Microsoft Copilot Studio agent to enhance customer support. The company stores customer data across ServiceNow, Microsoft Dynamics 365 Finance, Dynamics 365 Supply Chain Management, and Excel files in SharePoint Online.</p><p>You need to recommend a solution to ensure that the agent can deliver accurate and timely responses. What should you recommend?</p>",
    "options": {
      "A": "<p>Implement a model router for query handling.</p>",
      "B": "<p>Create custom prompts.</p>",
      "C": "<p>Implement Microsoft Power Platform connectors.</p>",
      "D": "<p>Enable incremental indexing in Azure AI Search.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Microsoft Power Platform connectors cung cấp các kết nối API dựng sẵn. Copilot Studio có thể dùng chúng để truy cập ServiceNow, Dynamics 365 và SharePoint/Excel mà không cần tự xây toàn bộ tích hợp từ đầu.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Model router:</strong> Chỉ định tuyến yêu cầu giữa các AI model; không kết nối hoặc truy xuất dữ liệu từ ServiceNow, Dynamics 365 hay SharePoint.</p></li><li><p><strong>B. Custom prompts:</strong> Chỉ hướng dẫn cách model trả lời; không tự tạo quyền truy cập hoặc API connection tới hệ thống bên ngoài.</p></li><li><p><strong>D. Incremental indexing in Azure AI Search:</strong> Hữu ích khi xây search index/RAG trên dữ liệu được lập chỉ mục. Đây không phải phương án trực tiếp nhất để kết nối và thao tác với các hệ thống nghiệp vụ đã nêu.</p></li></ul>"
  },
  {
    "id": "AB-100-040",
    "exam": "AB-100",
    "number": 40,
    "missingImages": 0,
    "question": "<p>A company processes invoices stored across multiple systems in multiple formats.</p><p>You need to implement an AI solution to automate the invoice processing. The solution must meet the following requirements:</p><ul><li>Automate multi-step invoice processing tasks, including document analysis, data validation, and approval routing.</li><li>Enable users to interact directly via Microsoft Teams to review and approve invoices.</li><li>Minimize development efforts to define and customize approval workflows.</li></ul><p>What should you include in the solution?</p>",
    "options": {
      "A": "<p>Azure Document Intelligence in Foundry Tools and Azure Logic Apps</p>",
      "B": "<p>A SharePoint agent</p>",
      "C": "<p>Microsoft Copilot Studio and AI Builder</p>",
      "D": "<p>Azure OpenAI and Azure Functions</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>AI Builder</strong> có prebuilt invoice-processing model để trích xuất và phân tích dữ liệu hóa đơn mà không cần tự huấn luyện model.</p><p><strong>Microsoft Copilot Studio</strong> giúp xây trải nghiệm tương tác, cho phép người dùng xem xét/phê duyệt hóa đơn trong Teams và tùy chỉnh workflow theo hướng low-code.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Azure Document Intelligence in Foundry Tools and Azure Logic Apps:</strong> Có thể xử lý hóa đơn và tự động hóa workflow, nhưng cần nhiều cấu hình/kỹ thuật hơn; không tối ưu khi yêu cầu low-code và trải nghiệm agent phê duyệt qua Teams.</p></li><li><p><strong>B. A SharePoint agent:</strong> Phù hợp truy xuất kiến thức/nội dung SharePoint, không có invoice-processing model dựng sẵn để trích xuất dữ liệu hóa đơn.</p></li><li><p><strong>D. Azure OpenAI and Azure Functions:</strong> Đòi hỏi lập trình và tích hợp custom bằng code; không đáp ứng tốt mục tiêu tối thiểu hóa công sức phát triển.</p></li></ul>"
  },
  {
    "id": "AB-100-041",
    "exam": "AB-100",
    "number": 41,
    "missingImages": 0,
    "question": "<p>A company uses Microsoft Dynamics 365 Sales to manage leads that are stored in a Microsoft Dataverse table named Lead and use non-standard terminology and custom columns. You need to configure business terms in the Lead table so that Microsoft Copilot controls can summarize the leads efficiently. The solution must minimize administrative effort. How should you configure the business terms?</p>",
    "options": {
      "A": "<p>Combine all the fields into one custom field.</p>",
      "B": "<p>Map the field display names as business terms.</p>",
      "C": "<p>Add the schema names as business terms.</p>",
      "D": "<p>Create new business terms for each field.</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Microsoft Copilot dựa vào metadata của bảng Dataverse để hiểu dữ liệu. <strong>Display Name</strong> là tên thân thiện mà người dùng nghiệp vụ nhìn thấy, ví dụ <code>Customer Priority</code>, thay vì schema name kỹ thuật như <code>crf_customerpriority</code>.</p><p>Map Display Name thành business term giúp Copilot hiểu ý nghĩa thực tế của từng cột, không cần tạo thêm cấu trúc dữ liệu hoặc cấu hình dư thừa.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Combine all fields into one custom field:</strong> Gộp các field làm mất cấu trúc và ý nghĩa riêng của dữ liệu; không giúp Copilot hiểu từng thuộc tính.</p></li><li><p><strong>C. Add schema names as business terms:</strong> Schema name thường mang tính kỹ thuật, có prefix và không thân thiện với nghiệp vụ.</p></li><li><p><strong>D. Create new business terms for each field:</strong> Tạo mới cho từng field gây thêm công sức quản trị trong khi Display Name hiện có đã biểu đạt ý nghĩa nghiệp vụ.</p></li></ul>"
  },
  {
    "id": "AB-100-042",
    "exam": "AB-100",
    "number": 42,
    "missingImages": 0,
    "question": "<p>A company has a portfolio of AI initiatives at different stages of development. You need to recommend a structured approach to evaluating the return on AI investment (ROAI) across all the initiatives. The solution must balance immediate results with long-term values and strategic innovations. What should you include in the recommendation?</p>",
    "options": {
      "A": "<p>A simple cost and benefit analysis</p>",
      "B": "<p>A horizon-based framework</p>",
      "C": "<p>The internal rate of return (IRR) function</p>",
      "D": "<p>A prioritization grid</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Horizon-based framework chia sáng kiến thành ba nhóm:</p><ul><li><strong>Horizon 1:</strong> Kết quả gần, tối ưu hóa hoạt động hiện tại.</li><li><strong>Horizon 2:</strong> Mở rộng sang cơ hội kinh doanh mới.</li><li><strong>Horizon 3:</strong> Đổi mới chiến lược, đột phá và dài hạn.</li></ul><p>Cách này giúp tổ chức không chỉ chọn dự án sinh lời ngay mà còn duy trì đầu tư cho tăng trưởng và đổi mới dài hạn.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Simple cost and benefit analysis:</strong> Chỉ tập trung so sánh chi phí và lợi ích tài chính, không phân loại sáng kiến theo khung thời gian chiến lược.</p></li><li><p><strong>C. Internal rate of return (IRR):</strong> Là chỉ số tài chính để đánh giá lợi suất đầu tư, không giúp quản lý danh mục sáng kiến ngắn/trung/dài hạn.</p></li><li><p><strong>D. Prioritization grid:</strong> Hữu ích để xếp hạng công việc theo tiêu chí như tác động và công sức, nhưng không thể hiện lộ trình đầu tư theo các horizon.</p></li></ul>"
  },
  {
    "id": "AB-100-043",
    "exam": "AB-100",
    "number": 43,
    "missingImages": 0,
    "question": "<p>You are designing a low-code AI business solution by using Microsoft Copilot Studio. The solution must include an agent that automates tasks by simulating user interactions across third-party apps and websites, such as clicking buttons, entering text, and extracting information from screens. You need to recommend what to include in the agent. What should you recommend?</p>",
    "options": {
      "A": "<p>Model Context Protocol (MCP)</p>",
      "B": "<p>A natural language understanding + (NLU+) model in Copilot Studio</p>",
      "C": "<p>Computer Use in Copilot Studio</p>",
      "D": "<p>Copilot skills</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Computer Use in Copilot Studio cho phép agent quan sát và tương tác với giao diện ứng dụng/website: click, nhập liệu, chọn thành phần và trích xuất thông tin từ màn hình. Nó phù hợp khi cần mô phỏng thao tác người dùng, nhất là với hệ thống không có API thuận tiện.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Model Context Protocol (MCP):</strong> MCP kết nối agent với tool, API và nguồn dữ liệu bên ngoài; không trực tiếp điều khiển giao diện màn hình.</p></li><li><p><strong>B. NLU+ model:</strong> NLU+ giúp agent hiểu ý định và ngôn ngữ tự nhiên của người dùng, không click nút hoặc điền form trên website.</p></li><li><p><strong>D. Copilot skills:</strong> Skills thường gọi flow, connector hoặc API đã cấu hình. Chúng không mặc định cung cấp khả năng nhìn và thao tác trực tiếp trên UI.</p></li></ul>"
  },
  {
    "id": "AB-100-044",
    "exam": "AB-100",
    "number": 44,
    "missingImages": 0,
    "question": "<p><strong>CASE STUDY</strong></p><p><strong>To start the case study</strong></p><p>To display the first question in this case study, select the \"Next\" button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the \"Question\" button to return to the question.</p><p><strong>Background</strong></p><p>Fabrikam, Inc., is a global consumer goods company that is undergoing a digital transformation initiative to migrate its entire infrastructure to the Microsoft cloud. As a key element of this cloud migration, the company will implement Microsoft Dynamics 365 Sales, moving away from the current on-premises proprietary technologies used by its business-to-business (B2B) sales team. As part of the cloud migration, Fabrikam will adopt an AI-first approach to its business solutions and implement AI solutions, wherever possible, to streamline operations.</p><p><strong>Problem Statements</strong> </p><p>Fabrikam's infrastructure currently relies on various on-premises systems that require sales executives to use corporate computers with physical keyboards to access business information during customer interactions. Mobile phones cannot be used for these purposes, as the systems depend on keyboard input. As a result, the sales executives spend a lot of time using keyboards to search for data on several disparate systems and file servers, rather than focusing on the customers. This affects the customer experience. Fabrikam stakeholders are concerned that users will be hesitant to adopt AI. If the AI initiatives are NOT adopted, cost savings will never be realized. Additionally, funding for future AI initiatives will depend on demonstrating an increase in AI adoption month over month. As the AI agent initiative for the sales team will be the first for Fabrikam, the rapid adoption of the agent is a high priority.</p><p><strong>Planned Initiatives</strong></p><p><strong><em>General</em></strong> - Fabrikam management has prioritized AI-driven projects to improve efficiency, customer engagement, and responsible AI adoption. The current application infrastructure is on-premises and must be migrated to the cloud to support the adoption of these technologies.</p><p><strong><em>Infrastructure Migration</em></strong> - Fabrikam plans to migrate from its current on-premises infrastructure to a completely cloud-based topology; this will include user authentication, the security framework, and, primarily, the adoption of the services by end users. All the data from the different systems will be consolidated into a single data source - a common data model that will use a Microsoft Dataverse environment as a single source of truth (SSOT) for the sales team.</p><p><strong><em>Sales Cycle Enablement -</em></strong> To achieve the company's objectives, Fabrikam intends to implement the following strategies to enhance the sales cycle: </p><ul><li>Use low-code development to create a single AI agent that has Dataverse as its core component. </li><li>Ensure that sales managers can access unanswered correspondence from prospects and intervene as appropriate. </li><li>Replace the previous proprietary software with Dynamics 365 Sales to track sales cycles and customer interactions. </li><li>Have the sales executives use Dynamics 365 Sales to track interactions for open opportunities and send follow-up communications to prospects. </li><li>Have the sales executives use handsfree headsets to interact with an AI agent when they have questions about internal policies or customer data.</li></ul><p><strong>Requirements</strong></p><p><strong><em>Infrastructure Migration</em></strong> - Fabrikam has identified the following infrastructure migration requirements: Azure must be used for all future infrastructure workloads. The company must follow Microsoft-recommended methodologies for infrastructure migration to the cloud. Any created AI agents must have their return on investment (ROI) calculated to ensure that the solution will save the company money.</p><p><strong><em>Sales Cycle Enablement</em></strong> - Fabrikam has identified the following requirements for sales cycle enablement: </p><ul><li>The final AI agent must follow Microsoft recommendations for a conversational user experience. </li><li>A designated checklist must be reviewed to ensure that the AI agent follows Microsoft deployment recommendations for a compliant solution. </li><li>Detailed telemetry must be logged for the first created AI agent to help troubleshoot and optimize the agent during the initial AI agent adoption process. </li><li>Unexpected AI agent actions must end in an escalation to a live representative. For example, a sales executive must be rerouted to a representative if the agent cannot answer a question after two failed attempts. The return on investment (ROI) of switching from the current process to the future process is required for stakeholder sign off. </li><li>The sales team must use Dynamics 365 Sales to correspond with prospects more quickly and efficiently than currently. Sales managers must report on the adoption of the AI agent to key Fabrikam stakeholders on a monthly basis. </li></ul><p>Any sensitive information, such as user IDs and names, shared via the AI agent must be tracked for future auditing. </p><p>Which tool should you use for the prospect communication requirements in Dynamics 365 Sales?</p>",
    "options": {
      "A": "<p>Azure AI Search</p>",
      "B": "<p>Copilot email assist</p>",
      "C": "<p>The Voice template in Microsoft Copilot Studio</p>",
      "D": "<p>Deep Research in Microsoft Foundry Agent Service</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Copilot email assist hỗ trợ người dùng trong Dynamics 365 Sales soạn email, tóm tắt chuỗi trao đổi và tạo phản hồi gợi ý cho prospect. Đây là đúng nhu cầu giao tiếp email hằng ngày của nhân viên kinh doanh.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Azure AI Search:</strong> Dùng để tìm kiếm và truy xuất thông tin từ dữ liệu được lập chỉ mục, không phải công cụ hỗ trợ soạn/trả lời email sales.</p></li><li><p><strong>C. Voice template in Microsoft Copilot Studio:</strong> Dùng để xây agent tương tác bằng giọng nói, không tối ưu cho email communication.</p></li><li><p><strong>D. Deep Research in Microsoft Foundry Agent Service:</strong> Phù hợp nghiên cứu chuyên sâu và tổng hợp thông tin phức tạp, không phải công cụ trực tiếp cho xử lý email prospect thường ngày.</p></li></ul>"
  },
  {
    "id": "AB-100-045",
    "exam": "AB-100",
    "number": 45,
    "missingImages": 0,
    "question": "<p>A company plans to deploy a Microsoft Dynamics 365 Contact Center agent. You need to ensure that the agent can transfer the conversation to a live customer service representative. Which two components should you include in the solution? </p><p>Each correct answer presents part of the solution. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>Microsoft Foundry</p>",
      "B": "<p>Microsoft Copilot Studio</p>",
      "C": "<p>Microsoft 365 Agents Toolkit</p>",
      "D": "<p>An Azure AI Bot Service skill</p>",
      "E": "<p>Customer engagement hub</p>"
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Microsoft Copilot Studio</strong> dùng để tạo và cấu hình agent, gồm Fallback topic và escalation khi cần chuyển khách hàng sang người thật.</p><p><strong>Customer engagement hub</strong> nhận hội thoại được chuyển đến, đưa vào queue và định tuyến tới customer service representative phù hợp.</p><p>Luồng đầy đủ là: <strong>khách hàng → Copilot Studio agent → fallback/escalation → Customer engagement hub → nhân viên hỗ trợ</strong>.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Microsoft Foundry:</strong> Phù hợp để xây giải pháp AI/agent tùy chỉnh, nhưng không cung cấp trực tiếp khả năng handoff và queue cho live agent của Dynamics 365 Contact Center.</p></li><li><p><strong>C. Microsoft 365 Agents Toolkit:</strong> Hỗ trợ phát triển agent/app cho Microsoft 365, không phải giải pháp quản lý contact center và chuyển hội thoại sang nhân viên.</p></li><li><p><strong>D. Azure AI Bot Service skill:</strong> Có thể mở rộng bot bằng capability riêng, nhưng không cung cấp toàn bộ quy trình tạo agent và định tuyến live-agent handoff trong Dynamics 365 Contact Center.</p></li></ul>"
  },
  {
    "id": "AB-100-046",
    "exam": "AB-100",
    "number": 46,
    "missingImages": 0,
    "question": "<p>You plan to use a Data Science Virtual Machine (DSVM) with the open source deep learning frameworks Caffe2 and PyTorch. You need to select a pre-configured DSVM to support the frameworks. What should you create?</p>",
    "options": {
      "A": "<p>Data Science Virtual Machine for Windows 2012</p>",
      "B": "<p>Data Science Virtual Machine for Linux (CentOS)</p>",
      "C": "<p>Geo AI Data Science Virtual Machine with ArcGIS</p>",
      "D": "<p>Data Science Virtual Machine for Windows 2016</p>",
      "E": "<p>Data Science Virtual Machine for Linux (Ubuntu)</p>"
    },
    "answer": [
      "E"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Ubuntu DSVM được cấu hình sẵn các framework deep learning mã nguồn mở như Caffe2 và PyTorch, cùng thư viện và driver cần thiết. Vì vậy, nó phù hợp nhất để bắt đầu nhanh các workload deep learning.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Windows 2012 DSVM:</strong> Không phải lựa chọn tối ưu cho môi trường deep learning mã nguồn mở được yêu cầu.</p></li><li><p><strong>B. Linux CentOS DSVM:</strong> Là Linux DSVM, nhưng Ubuntu DSVM là lựa chọn được cấu hình phù hợp hơn với các framework nêu trong đề.</p></li><li><p><strong>C. Geo AI DSVM with ArcGIS:</strong> Tối ưu cho workload địa không gian và ArcGIS, không phải deep learning tổng quát.</p></li><li><p><strong>D. Windows 2016 DSVM:</strong> Không phù hợp bằng Ubuntu cho bộ framework deep learning mã nguồn mở mà đề bài nêu.</p></li></ul>"
  },
  {
    "id": "AB-100-047",
    "exam": "AB-100",
    "number": 47,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p>A company has a Microsoft Power Platform environment.</p><p>You need to build two agents named Agent1 and Agent2. The solution must meet the following requirements:</p><ul><li>Agent1 must be extendable by using the Semantic Kernel and must connect to multiple business apps and APIs.</li><li>Agent2 must connect directly to data stored in Microsoft Dataverse and must be embeddable in a Microsoft Power Apps canvas app.</li></ul><p>What should you use to build each agent? To answer, select the appropriate options in the answer area.</p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em><em><p>[Hình ab100_47.jpg chưa có trong bản lưu nguồn.]</p></em><br/></p>",
    "options": {
      "A": "<p>Microsoft Copilot Studio - Copilot in Power Apps</p>",
      "B": "<p>Copilot in Power Apps - Microsoft Copilot Studio</p>",
      "C": "<p>Microsoft Foundry - Azure Logic Apps</p>",
      "D": "<p>Microsoft Copilot Studio - Azure Logic Apps</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Microsoft Copilot Studio</strong> phù hợp cho Agent1 vì hỗ trợ xây agent có thể tích hợp connector, API và mở rộng khả năng theo yêu cầu.</p><p><strong>Copilot in Power Apps</strong> phù hợp cho Agent2 vì được thiết kế để làm việc với dữ liệu Dataverse và nhúng trực tiếp trong canvas app.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Copilot in Power Apps — Microsoft Copilot Studio:</strong> Đảo ngược hai công cụ. Copilot in Power Apps không phải lựa chọn phù hợp nhất cho agent cần nhiều tích hợp/mở rộng; Copilot Studio không phải lựa chọn chuyên biệt để nhúng Copilot vào canvas app.</p></li><li><p><strong>C. Microsoft Foundry — Azure Logic Apps:</strong> Foundry và Logic Apps phù hợp cho giải pháp custom/pro-code và workflow, không đáp ứng đúng hai yêu cầu Power Platform cụ thể này.</p></li><li><p><strong>D. Microsoft Copilot Studio — Azure Logic Apps:</strong> Agent1 đúng, nhưng Azure Logic Apps là công cụ tự động hóa workflow, không phải Copilot nhúng trực tiếp trong Power Apps canvas app.</p></li></ul>"
  },
  {
    "id": "AB-100-048",
    "exam": "AB-100",
    "number": 48,
    "missingImages": 0,
    "question": "<p>A company has an AI agent that automates the review of customer feedback stored in a cloud database. You plan to generate monthly reports from the agent's output to provide insights into customer sentiment and guide product development and marketing. You need to ensure that the data ingested by the agent is clean and suitable for the intended use. What should you do to prepare the data?</p>",
    "options": {
      "A": "<p>Create a workflow in Microsoft Power Automate.</p>",
      "B": "<p>Identify and address biased data.</p>",
      "C": "<p>Create an agent flow in Microsoft Copilot Studio.</p>",
      "D": "<p>Sort the database by customer last name.</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Dữ liệu feedback khách hàng có thể bị thiên lệch, ví dụ chủ yếu đến từ nhóm rất hài lòng hoặc rất không hài lòng. Nếu dùng trực tiếp, sentiment analysis có thể tạo ra kết luận sai lệch.</p><p>Cần nhận diện và xử lý bias để dữ liệu phản ánh khách hàng cân bằng hơn, từ đó kết quả phân tích cảm xúc đáng tin cậy hơn.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Create a workflow in Microsoft Power Automate:</strong> Power Automate tự động hóa tác vụ, nhưng không loại bỏ hoặc giảm thiên lệch trong dữ liệu nguồn.</p></li><li><p><strong>C. Create an agent flow in Microsoft Copilot Studio:</strong> Agent flow điều phối hành vi/quy trình của agent, không xử lý chất lượng hoặc tính đại diện của feedback.</p></li><li><p><strong>D. Sort the database by customer last name:</strong> Chỉ thay đổi thứ tự bản ghi, không giải quyết vấn đề dữ liệu bị bias.</p></li></ul>"
  },
  {
    "id": "AB-100-049",
    "exam": "AB-100",
    "number": 49,
    "missingImages": 0,
    "question": "<p>You need to design a Microsoft 365 Copilot solution to optimize employee productivity. The solution must meet the following requirements: Ensure that the employees can query content stored in a subset of Microsoft SharePoint Online sites and in Teams by using natural language-based prompt actions. Ensure that employees receive contextually relevant responses in Microsoft 365 Copilot. What should you include in the design?</p>",
    "options": {
      "A": "<p>Build a Microsoft Power Automate desktop flow to read the SharePoint content and post the responses to Teams.</p>",
      "B": "<p>Modify SharePoint settings.</p>",
      "C": "<p>Create a custom REST API that crawls the SharePoint content.</p>",
      "D": "<p>Configure Microsoft Graph access.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Microsoft Graph là lớp API chính để Microsoft 365 Copilot truy cập dữ liệu Microsoft 365 như SharePoint Online và Teams. Graph áp dụng quyền hiện có của người dùng, nên Copilot chỉ truy xuất nội dung mà người dùng đó được phép xem.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Power Automate desktop flow:</strong> Desktop flow mô phỏng thao tác trên máy tính; không phải cơ chế truy cập nội dung Microsoft 365 theo ngữ cảnh và quyền người dùng cho Copilot.</p></li><li><p><strong>B. Modify SharePoint settings:</strong> Cài đặt SharePoint thông thường chỉ quản lý site/thư viện/quyền; không tự tạo lớp truy cập ngữ cảnh để Copilot truy vấn cả SharePoint và Teams.</p></li><li><p><strong>C. Custom REST API crawls SharePoint:</strong> Phải tự xây, tự vận hành và xử lý quyền truy cập; không cần thiết khi Microsoft Graph đã cung cấp cơ chế chuẩn.</p></li></ul>"
  },
  {
    "id": "AB-100-050",
    "exam": "AB-100",
    "number": 50,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p>You are designing a testing solution for Microsoft Copilot Studio agents.</p><p>You need to validate prompt engineering best practices to ensure that the agents generate accurate and contextually relevant responses.</p><p>Which prompt validation techniques and metrics should you include in the solution? To answer, select the appropriate options in the answer area.</p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point</em><em><p>[Hình ab100_50.jpg chưa có trong bản lưu nguồn.]</p></em><br/></p>",
    "options": {
      "A": "<p>Use only simple, one-word prompts - The number of words generated per response.</p>",
      "B": "<p>Exclude domain-specific terminology from the prompts - The response generation time.</p>",
      "C": "<p>Use prompts that have varied phrasing - Response relevance and accuracy.</p>",
      "D": "<p>Keep the prompt vague to enable model flexibility - The number of active user sessions.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Dùng các prompt diễn đạt khác nhau nhưng cùng ý định giúp kiểm tra agent có thực sự hiểu yêu cầu của người dùng trong tình huống thực tế hay không.</p><p>Hai metric phù hợp là:</p><ul><li><strong>Response relevance:</strong> Phản hồi có liên quan trực tiếp đến câu hỏi không?</li><li><strong>Accuracy:</strong> Thông tin trả lời có đúng không?</li></ul><p>Đây là hai chỉ số đo trực tiếp chất lượng phản hồi.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. One-word prompts — number of words generated:</strong> Prompt một từ không phản ánh cách người dùng giao tiếp thực tế; số từ không cho biết câu trả lời có đúng hoặc liên quan không.</p></li><li><p><strong>B. Exclude domain terminology — response generation time:</strong> Loại bỏ thuật ngữ nghiệp vụ làm bài test kém thực tế; thời gian sinh phản hồi đo hiệu năng, không đo chất lượng nội dung.</p></li><li><p><strong>D. Keep prompts vague — active user sessions:</strong> Prompt mơ hồ làm kết quả thiếu ổn định; số phiên người dùng đang hoạt động đo mức sử dụng, không đo độ đúng hay liên quan.</p></li></ul>"
  },
  {
    "id": "AB-100-051",
    "exam": "AB-100",
    "number": 51,
    "missingImages": 0,
    "question": "<p>A company has a Microsoft 365 tenant in Canada and multiple Microsoft Power Platform environments in Canada and the United States. </p><p>The company plans to deploy a Microsoft Copilot Studio agent to the Canadian environment that will use: </p><ul><li>Microsoft Dataverse data stored in Canada. </li><li>A connector that connects to an Azure OpenAI instance in the United States. </li></ul><p>You need to ensure that the agent adheres to data residency and data movement policies before being deployed. What should you do?</p>",
    "options": {
      "A": "<p>Ensure that the data processed by Azure OpenAI is stored in the United States.</p>",
      "B": "<p>From the Microsoft Purview portal, validate the Data loss prevention settings.</p>",
      "C": "<p>Migrate the tenant to the United States.</p>",
      "D": "<p>Ensure that cross-region data movement is enabled for the Canadian environment and connector dependencies.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Khi agent ở Canada gọi Azure OpenAI tại Hoa Kỳ, dữ liệu yêu cầu/phản hồi phải truyền qua biên giới region. Vì vậy cần bật <strong>cross-region data movement</strong> cho Canadian environment và các connector dependency liên quan để luồng gọi dịch vụ hoạt động hợp lệ.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Store Azure OpenAI data in the United States:</strong> Chỉ nói về nơi lưu trữ dữ liệu, không bật quyền cho dữ liệu di chuyển từ Canada sang Hoa Kỳ.</p></li><li><p><strong>B. Validate Purview DLP settings:</strong> DLP kiểm soát chính sách bảo vệ dữ liệu và connector, nhưng không thay thế cấu hình cho phép cross-region data movement.</p></li><li><p><strong>C. Migrate the tenant to the United States:</strong> Di chuyển toàn bộ tenant là thay đổi lớn, không cần thiết để giải quyết yêu cầu cho phép agent Canada gọi dịch vụ ở US.</p></li></ul>"
  },
  {
    "id": "AB-100-052",
    "exam": "AB-100",
    "number": 52,
    "missingImages": 0,
    "question": "<p>You need to recommend a Microsoft Power Platform business solution that consolidates data from multiple internal and external data sources. The solution must meet the following requirements: </p><ul><li>Provide the data as a centralized source for multiple AI systems, including Microsoft Copilot Studio agents, Dynamics 365 applications, and external AI models. </li><li>Support built-in data classification and protection policies. </li><li>Provide data for grounding and analytics. </li></ul><p>What should you include in the recommendation?</p>",
    "options": {
      "A": "<p>Microsoft Dataverse</p>",
      "B": "<p>Azure Data Lake Storage</p>",
      "C": "<p>A Microsoft Power BI semantic model</p>",
      "D": "<p>Azure Cosmos DB</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Microsoft Dataverse là nền tảng dữ liệu trung tâm của Power Platform và Dynamics 365. Nó có thể cung cấp dữ liệu cho Copilot Studio, ứng dụng Dynamics 365 và các giải pháp AI; đồng thời hỗ trợ security, classification, data protection, grounding và analytics.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Azure Data Lake Storage:</strong> Phù hợp lưu trữ dữ liệu thô/quy mô lớn, nhưng không phải nền tảng dữ liệu nghiệp vụ tích hợp trực tiếp nhất với Power Platform và Dynamics 365.</p></li><li><p><strong>C. Power BI semantic model:</strong> Chủ yếu phục vụ mô hình hóa, báo cáo và phân tích Power BI; không phải nguồn dữ liệu vận hành trung tâm cho agent và ứng dụng nghiệp vụ.</p></li><li><p><strong>D. Azure Cosmos DB:</strong> Là database NoSQL tổng quát cho ứng dụng Azure, nhưng không có mức tích hợp nghiệp vụ native với Power Platform/Dynamics 365 như Dataverse.</p></li></ul>"
  },
  {
    "id": "AB-100-053",
    "exam": "AB-100",
    "number": 53,
    "missingImages": 0,
    "question": "<p>A company has an Azure environment that supports multiple business units.</p><p>The company plans to implement an AI solution that will perform sentiment analysis on customer product reviews.</p><p>You need to evaluate the potential cost of the solution to support return on AI investment (ROAI) analysis.</p><p>What should you use?</p>",
    "options": {
      "A": "<p>Azure Reservations</p>",
      "B": "<p>Microsoft Fabric SKU Estimator</p>",
      "C": "<p>Anomaly Detection in Azure Cost Management</p>",
      "D": "<p>Azure pricing calculator</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Azure pricing calculator giúp ước tính chi phí dự kiến của các dịch vụ Azure trước khi triển khai. Bạn có thể chọn dịch vụ, region, mức sử dụng dự kiến và cấu hình để có chi phí ước lượng, từ đó làm baseline cho ROAI analysis.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Azure Reservations:</strong> Dùng để nhận discount khi cam kết sử dụng trong thời hạn; không phải công cụ tính giá dự kiến ban đầu.</p></li><li><p><strong>B. Microsoft Fabric SKU Estimator:</strong> Chỉ phục vụ ước tính capacity/SKU của Microsoft Fabric, không áp dụng chung cho Azure OpenAI hoặc Azure AI Language.</p></li><li><p><strong>C. Anomaly Detection in Azure Cost Management:</strong> Theo dõi và phát hiện chi phí bất thường đã phát sinh sau khi sử dụng Azure, không dự toán chi phí trước triển khai.</p></li></ul>"
  },
  {
    "id": "AB-100-054",
    "exam": "AB-100",
    "number": 54,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p>A company uses Microsoft Dynamics 365 Finance for accounts payable and customer debt recovery.</p><p>You are designing an AI finance process that meets the following requirements:</p><ul><li>Provides AI-driven details to help staff identify overdue vendor invoices and outstanding balances</li><li>Helps staff reduce how long it takes to review overdue invoices and payment history</li></ul><p>You need to recommend which Microsoft Copilot features to include in the design.</p><p>What should you recommend for each requirement? To answer, select the appropriate options in the answer area.</p><p><strong>NOTE: </strong><em>Each correct selection is worth one point.</em></p><p><p>[Hình ab100_54.jpg chưa có trong bản lưu nguồn.]</p></p>",
    "options": {
      "A": "<p>AI Summaries with Copilot - The Account Reconciliation agent</p>",
      "B": "<p>The Supplier Communication agent - Analyze demand plans with Copilot</p>",
      "C": "<p>AI Summaries with Copilot - Collections coordinator summary</p>",
      "D": "<p>Agent management - Collections coordinator summary</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>AI Summaries with Copilot</strong> giúp nhanh chóng nhận biết hóa đơn nhà cung cấp quá hạn và outstanding balance từ dữ liệu tài chính.</p><p><strong>Collections coordinator summary</strong> được thiết kế cho quy trình thu hồi công nợ, giúp nhân viên rút ngắn thời gian xem lại các khoản quá hạn và lịch sử thanh toán.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. AI Summaries with Copilot — Account Reconciliation agent:</strong> Account Reconciliation agent phục vụ đối chiếu tài khoản, không chuyên để xử lý/lược tóm lịch sử phục vụ collections.</p></li><li><p><strong>B. Supplier Communication agent — Analyze demand plans with Copilot:</strong> Supplier Communication agent liên quan giao tiếp với nhà cung cấp; Analyze demand plans phục vụ dự báo nhu cầu. Cả hai không đáp ứng nghiệp vụ hóa đơn quá hạn và thu hồi công nợ.</p></li><li><p><strong>D. Agent management — Collections coordinator summary:</strong> Collections coordinator summary đúng cho vế collections, nhưng Agent management chỉ dùng để quản lý/chọn agent, không dùng để tóm tắt hóa đơn và số dư quá hạn.</p></li></ul>"
  },
  {
    "id": "AB-100-055",
    "exam": "AB-100",
    "number": 55,
    "missingImages": 1,
    "question": "<p><strong>DRAG DROP</strong></p><p>You are designing two Microsoft Copilot Studio agents named Agent1 and Agent2. Each agent must meet the following requirements: Each agent must use a standard model. Each agent must NOT use generative orchestration. Agent1 must support simple and short phrases for a given topic. Agent2 must integrate with Microsoft Dynamics 365 Contact Center voice channel. You need to recommend language models for the agents. What should you recommend for each agent? </p><p>To answer, drag the appropriate language models to the correct agents. Each language model may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p><p><p>[Hình ab100_55.png chưa có trong bản lưu nguồn.]</p></p>",
    "options": {
      "A": "<p>Agent1: Azure OpenAI - Agent2: Natural language understanding + (NLU+)</p>",
      "B": "<p>Agent1: Conversational language understanding (CLU) - Agent2: Natural language understanding (NLU)</p>",
      "C": "<p>Agent1: Natural language understanding (NLU) - Agent2: Natural language understanding + (NLU+)</p>",
      "D": "<p>Agent1: Natural language understanding + (NLU+) - Agent2: Conversational language understanding (CLU)</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>NLU</strong> phù hợp cho Agent1 khi người dùng nói/nhập các câu ngắn, rõ ràng trong một topic xác định và không dùng generative orchestration.</p><p><strong>NLU+</strong> phù hợp cho Agent2 vì voice channel trong Dynamics 365 Contact Center cần khả năng hiểu ngôn ngữ tự nhiên nâng cao hơn để xử lý hội thoại thực tế.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Azure OpenAI — NLU+:</strong> Azure OpenAI không phù hợp cho Agent1 khi generative orchestration bị loại trừ.</p></li><li><p><strong>B. CLU — NLU:</strong> CLU không phải lựa chọn Copilot Studio phù hợp cho Agent1 trong kịch bản này; NLU cơ bản không đáp ứng tốt yêu cầu voice channel của Agent2.</p></li><li><p><strong>D. NLU+ — CLU:</strong> Đảo sai công cụ. Agent1 chỉ cần NLU cơ bản, còn Agent2 cần NLU+.</p></li></ul>"
  },
  {
    "id": "AB-100-056",
    "exam": "AB-100",
    "number": 56,
    "missingImages": 0,
    "question": "<p><strong>Note:</strong> This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. </p><p>A company uses Microsoft 365 and Dynamics 365. You need to recommend a solution to automatically summarize email threads, generate suggested replies in Microsoft Outlook, and provide meeting preparation summaries that include relevant customer relationship management (CRM) data. </p><p><strong>Solution:</strong> You recommend a Microsoft 365 Copilot agent template. Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Một Microsoft 365 Copilot agent template tổng quát có thể hỗ trợ tóm tắt email hoặc gợi ý trả lời, nhưng không cung cấp tích hợp Dynamics 365 CRM chuyên dụng cần cho phần chuẩn bị họp và các nghiệp vụ sales.</p><p>Giải pháp phù hợp cho yêu cầu này là <strong>Microsoft 365 Copilot for Sales</strong>.</p><h4>Vì sao phương án còn lại sai?</h4><ul><li><strong>A. Yes:</strong> Chọn Yes nghĩa là cho rằng agent template tổng quát đáp ứng đủ yêu cầu CRM. Điều này sai vì nó thiếu CRM integration chuyên biệt cho meeting preparation và sales context.</li></ul>"
  },
  {
    "id": "AB-100-057",
    "exam": "AB-100",
    "number": 57,
    "missingImages": 0,
    "question": "<p>A manufacturing company wants to deploy an agent that will automate supplier invoice processing. You are designing a solution to evaluate the financial implications of the deployment. The company is especially concerned about budget overruns.</p><p>You need to ensure that the solution considers the total cost of ownership (TCO), the expected savings from using automation, and whether to extend the existing AI capabilities. What should you include in the design?</p>",
    "options": {
      "A": "<p>A break-even analysis only</p>",
      "B": "<p>Adopting prebuilt agents to reduce the deployment time</p>",
      "C": "<p>Training a custom model</p>",
      "D": "<p>A return on AI investment (ROAI) analysis</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>ROAI analysis đánh giá đầy đủ:</p><ul><li><strong>Total cost of ownership:</strong> Chi phí phát triển, triển khai, vận hành và bảo trì.</li><li><strong>Expected savings:</strong> Chi phí hoặc thời gian tiết kiệm được nhờ tự động hóa.</li><li><strong>Reuse/extension potential:</strong> Khả năng tái sử dụng hoặc mở rộng các AI capability hiện có.</li></ul><p>Do đó, ROAI cho biết đầu tư AI có tạo ra giá trị kinh doanh hay không.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Break-even analysis only:</strong> Chỉ xác định thời điểm doanh thu/lợi ích bù đủ chi phí. Nó không đánh giá toàn diện giá trị, tiết kiệm và khả năng tái sử dụng AI.</p></li><li><p><strong>B. Adopting prebuilt agents:</strong> Đây là lựa chọn triển khai nhằm giảm thời gian phát triển, không phải phương pháp đánh giá tài chính của khoản đầu tư.</p></li><li><p><strong>C. Training a custom model:</strong> Là hoạt động kỹ thuật để xây model, không phải cách đo tổng chi phí và lợi ích kinh doanh.</p></li></ul>"
  },
  {
    "id": "AB-100-058",
    "exam": "AB-100",
    "number": 58,
    "missingImages": 0,
    "question": "<p><strong>Note:</strong> This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. </p><p>A company uses Microsoft 365 and Dynamics 365. You need to recommend a solution to automatically summarize email threads, generate suggested replies in Microsoft Outlook, and provide meeting preparation summaries that include relevant customer relationship management (CRM) data. </p><p><strong>Solution:</strong> You recommend a classic Microsoft Dataverse workflow. Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Classic Microsoft Dataverse workflow là workflow <strong>rule-based</strong>: chạy theo trigger, điều kiện và action đã định sẵn. Nó không thể tự tạo tóm tắt email, gợi ý câu trả lời hoặc kết hợp dữ liệu CRM thành meeting preparation summary trong Outlook.</p><p>Giải pháp phù hợp là <strong>Microsoft 365 Copilot for Sales</strong>.</p><h4>Vì sao phương án còn lại sai?</h4><ul><li><strong>A. Yes:</strong> Chọn Yes đồng nghĩa với việc Dataverse workflow có generative AI capability cho Outlook và CRM. Điều này không đúng; workflow chỉ tự động hóa tác vụ theo rule.</li></ul>"
  },
  {
    "id": "AB-100-059",
    "exam": "AB-100",
    "number": 59,
    "missingImages": 0,
    "question": "<p>A company uses Microsoft Dynamics 365 to manage service operations. Dispatchers coordinate service requests, and technicians perform scheduled on-site work.</p><p>You need to design a solution that will use Microsoft Copilot to improve the efficiency of the service operations. The solution must meet the following requirements:</p><ul><li>Provide AI-driven assistance to help staff organize and resolve work orders.</li><li>Deliver contextual AI support to frontline workers as they prepare for and complete customer appointments.</li></ul><p>Which two components should you include in the design? Each correct answer presents part of the solution.</p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>Copilot Service workspace</p>",
      "B": "<p>The Dynamics 365 Field Service mobile app</p>",
      "C": "<p>Copilot in Outlook</p>",
      "D": "<p>Dynamics 365 Customer Service</p>",
      "E": "<p>Copilot in Customer Service</p>",
      "F": "<p>Copilot in Field Service</p>"
    },
    "answer": [
      "B",
      "F"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Copilot in Field Service</strong> hỗ trợ dispatcher tổ chức, tóm tắt và xử lý work order hiệu quả hơn.</p><p><strong>Dynamics 365 Field Service mobile app</strong> cung cấp thông tin ngữ cảnh và hỗ trợ AI cho kỹ thuật viên hiện trường khi chuẩn bị và hoàn tất appointment tại khách hàng.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Copilot Service workspace:</strong> Phục vụ customer service, không giải quyết quy trình work order và kỹ thuật viên hiện trường.</p></li><li><p><strong>C. Copilot in Outlook:</strong> Hỗ trợ email/lịch làm việc, không phải công cụ chuyên cho Field Service.</p></li><li><p><strong>D. Dynamics 365 Customer Service:</strong> Tập trung xử lý yêu cầu hỗ trợ khách hàng, không quản lý toàn diện dispatch và on-site work order.</p></li><li><p><strong>E. Copilot in Customer Service:</strong> Hỗ trợ agent chăm sóc khách hàng, không phù hợp cho dispatcher và field technician.</p></li></ul>"
  },
  {
    "id": "AB-100-060",
    "exam": "AB-100",
    "number": 60,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p>You need to design a shared prompt library that will be used across multiple business units. The solution must meet the following requirements: </p><ul><li>Ensure consistent AI responses with reusable formats. </li><li>Support governance and version control. </li><li>Minimize administrative effort. </li><li>Minimize ongoing costs. </li></ul><p>What should you recommend for each requirement? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p><p><p>[Hình ab100_60.png chưa có trong bản lưu nguồn.]</p></p>",
    "options": {
      "A": "<p>Define standardized prompt templates - Store prompts in a Git repository.</p>",
      "B": "<p>Delegate department-specific prompt templates - Store prompts in a Git repository.</p>",
      "C": "<p>Define standardized prompt templates - Categorize prompts by business function.</p>",
      "D": "<p>Maintain a prompt history - Define standardized prompt templates.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Standardized prompt templates</strong> giúp các nhóm sử dụng cùng cấu trúc prompt, từ đó tạo phản hồi nhất quán và dễ tái sử dụng.</p><p>Lưu prompt trong <strong>Git repository</strong> giúp quản trị thay đổi: biết ai sửa gì, khi nào; so sánh phiên bản và khôi phục khi cần. Nhờ vậy giảm công sức quản trị và bảo trì lâu dài.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Delegate department-specific prompt templates — Store prompts in Git:</strong> Mỗi phòng ban tự tạo template dễ dẫn đến prompt không nhất quán; không đáp ứng mục tiêu chuẩn hóa toàn tổ chức.</p></li><li><p><strong>C. Define standardized templates — Categorize prompts by business function:</strong> Phân loại giúp tìm prompt dễ hơn, nhưng không thay thế version control, review và khả năng khôi phục của Git.</p></li><li><p><strong>D. Maintain a prompt history — Define standardized templates:</strong> Lịch sử prompt có thể hữu ích, nhưng không cung cấp cơ chế quản trị phiên bản chặt chẽ như Git repository.</p></li></ul>"
  },
  {
    "id": "AB-100-061",
    "exam": "AB-100",
    "number": 61,
    "missingImages": 0,
    "question": "<p>A company extends Copilot in Microsoft Dynamics 365 Customer Service. You need to recommend an automated application lifecycle management (ALM) process so that the Copilot components can be safely developed, tested, and promoted to production. </p><p>Which two actions should you include in the ALM process? </p><p>Each correct answer presents part of the solution. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>Use an unmanaged solution in production.</p>",
      "B": "<p>Rebuild the agents in each environment.</p>",
      "C": "<p>Use Microsoft Power Platform pipelines.</p>",
      "D": "<p>Include the components in a solution.</p>",
      "E": "<p>Store the agent transcripts in source control.</p>"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Copilot component phải được đưa vào <strong>solution</strong> để có thể quản lý, export/import và di chuyển giữa các environment.</p><p><strong>Microsoft Power Platform pipelines</strong> tự động hóa deployment qua development, test và production; giúp giảm thao tác thủ công, bảo đảm quy trình triển khai nhất quán.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Use an unmanaged solution in production:</strong> Unmanaged solution phù hợp cho development vì có thể chỉnh sửa trực tiếp. Production nên nhận managed solution để hạn chế thay đổi ngoài kiểm soát.</p></li><li><p><strong>B. Rebuild the agents in each environment:</strong> Làm thủ công dễ sai lệch cấu hình và tốn công; không phải ALM chuẩn.</p></li><li><p><strong>E. Store agent transcripts in source control:</strong> Transcript là dữ liệu vận hành/lịch sử hội thoại, không phải component nguồn cần version control và triển khai qua environment.</p></li></ul>"
  },
  {
    "id": "AB-100-062",
    "exam": "AB-100",
    "number": 62,
    "missingImages": 0,
    "question": "<p><strong>Note:</strong> This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.<br/>A company has a team that analyzes its customers by using a manual process. You are designing an AI-based agent to automate and improve the process.<br/>You need to recommend on which platform to build the agent. The solution must meet the following requirements:</p><ul><li>Use generative AI to answer common questions.</li><li>Provide analytics to review AI performance.</li><li>Identify customer demographics.</li><li>Minimize custom development.</li></ul><p><strong>Solution</strong>: You recommend Microsoft Copilot Studio<strong>. </strong>Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Microsoft Copilot Studio đáp ứng yêu cầu vì có thể:</p><ul><li>Dùng generative AI để trả lời câu hỏi.</li><li>Cung cấp analytics để theo dõi hiệu suất agent.</li><li>Kết nối dữ liệu CRM, ví dụ customer demographics.</li><li>Hỗ trợ xây dựng agent theo hướng low-code/no-code, giảm công sức phát triển custom.</li></ul><h4>Vì sao phương án còn lại sai?</h4><ul><li><strong>B. No:</strong> Chọn No nghĩa là Copilot Studio không đáp ứng yêu cầu. Điều này không đúng vì nền tảng có đủ khả năng AI, analytics, CRM integration và low-code/no-code.</li></ul>"
  },
  {
    "id": "AB-100-063",
    "exam": "AB-100",
    "number": 63,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p>A company has Microsoft Power Platform development, staging, and production environments. Each environment has its own Microsoft Dataverse tables and Azure AI Search index. You are designing an application lifecycle management (AIM) process to deploy a Microsoft Copilot Studio agent between the environments. The company has a Copilot Studio agent named Agent1 in development. Agent1 uses the following grounding data sources</p><ul><li>A Dataverse table named CustomerOrders</li><li>An Azure AI Search index named customer-knowledge</li></ul><p>You need to deploy Agent1 to production. The solution must ensure that the agent uses the production grounding data sources, minimizes downtime, and handles credentials and endpoints securely.</p><p>What should you include in the deployment package solution, and what should you reconfigure after the deployment? To answer, select the appropriate options in the answer area.</p><p><strong>NOTE: </strong><em>Each correct selection is worth one point.<p>[Hình ab100_63.jpg chưa có trong bản lưu nguồn.]</p></em></p>",
    "options": {
      "A": "<p>Agent1 and references to the data sources - The environment variables</p>",
      "B": "<p>Agent1 only - The Dataverse connection only</p>",
      "C": "<p>The data sources only - The Agent1 configuration</p>",
      "D": "<p>Agent1, the data sources, and the data source connections - The environment variables</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Solution cần chứa:</p><ul><li><strong>Agent1</strong></li><li><strong>References to the data sources</strong> để agent biết phải kết nối nguồn nào</li></ul><p>Sau khi triển khai, cấu hình lại <strong>environment variables</strong> bằng endpoint, connection setting hoặc thông tin nguồn dữ liệu của production. Cách này bảo mật hơn, tránh hard-code và giúp cùng một solution có thể deploy qua nhiều environment.</p><p>Không cần đóng gói physical Dataverse tables hoặc Azure AI Search index production vào solution.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Agent1 only — Dataverse connection only:</strong> Chỉ Agent1 không đủ vì thiếu reference tới data source; chỉ cấu hình Dataverse cũng bỏ sót Azure AI Search và các setting khác.</p></li><li><p><strong>C. Data sources only — Agent1 configuration:</strong> Solution phải chứa Agent1 để triển khai agent. Ngoài ra, cấu hình production nên đưa vào environment variables, không cấu hình cứng Agent1.</p></li><li><p><strong>D. Agent1, data sources, and data source connections — environment variables:</strong> Không cần đóng gói resource production thực tế như Dataverse table hoặc Azure AI Search index; chỉ cần reference/cấu hình kết nối phù hợp.</p></li></ul>"
  },
  {
    "id": "AB-100-064",
    "exam": "AB-100",
    "number": 64,
    "missingImages": 0,
    "question": "<p>A company plans to deploy a Microsoft Foundry agent.</p><p>You need to recommend an application lifecycle management (ALM) process to ensure that the agent evaluates against baseline accuracy metrics before being deployed.</p><p>What should you recommend?</p>",
    "options": {
      "A": "<p>Configure GitHub Actions for new agent versions.</p>",
      "B": "<p>Deploy each new agent version directly to production.</p>",
      "C": "<p>Use Observability in Foundry Control Plane with evaluation and drift monitoring.</p>",
      "D": "<p>Enable Application Insights and use Azure Monitor.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Observability in Foundry Control Plane</strong> kết hợp với <strong>evaluation</strong> cho phép đánh giá agent theo baseline metric trước khi deploy.</p><p><strong>Drift monitoring</strong> tiếp tục theo dõi sau triển khai để phát hiện khi chất lượng phản hồi thay đổi hoặc suy giảm theo thời gian. Đây là đúng nhu cầu kiểm soát chất lượng vòng đời agent.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. GitHub Actions:</strong> Hữu ích để tự động hóa build/test/deploy trong CI/CD, nhưng không phải công cụ chuyên đánh giá chất lượng agent và theo dõi drift.</p></li><li><p><strong>B. Deploy trực tiếp mọi version lên production:</strong> Rủi ro vì không có bước đánh giá theo baseline trước khi đưa version mới vào production.</p></li><li><p><strong>D. Application Insights và Azure Monitor:</strong> Chủ yếu theo dõi runtime, telemetry, lỗi, độ trễ và tài nguyên. Không trực tiếp cung cấp đánh giá agent theo baseline cùng drift monitoring chuyên biệt.</p></li></ul>"
  },
  {
    "id": "AB-100-065",
    "exam": "AB-100",
    "number": 65,
    "missingImages": 0,
    "question": "<p>A company has an AI business solution that uses Microsoft Copilot Studio agents.<br/><br/>You need to recommend prompt best practices to improve the effectiveness of agent interactions.<br/><br/>Which two actions should you include in the recommendation? Each correct answer presents part of the solution.<br/><br/><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>Track the duration of the average user session.</p>",
      "B": "<p>Analyze the prompt length distribution.</p>",
      "C": "<p>Regularly test and refine the prompts based on user input.</p>",
      "D": "<p>Use clear and specific instructions in the prompts.</p>",
      "E": "<p>Measure system resource usage during prompt processing.</p>"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Prompt rõ ràng và cụ thể giúp AI hiểu chính xác nhiệm vụ, bối cảnh, giới hạn và định dạng đầu ra; nhờ đó giảm ambiguity và tăng accuracy.</p><p>Sau khi triển khai, cần kiểm thử prompt thường xuyên, thu thập phản hồi người dùng và tinh chỉnh prompt theo vòng lặp cải tiến liên tục.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Track average user-session duration:</strong> Đo mức độ sử dụng/engagement, không trực tiếp giúp prompt rõ hơn hoặc phản hồi chính xác hơn.</p></li><li><p><strong>B. Analyze prompt-length distribution:</strong> Có thể là số liệu tham khảo, nhưng độ dài prompt không tự cho biết prompt có rõ ràng, chính xác hay hiệu quả không.</p></li><li><p><strong>E. Measure system resource usage:</strong> Đo hiệu năng hạ tầng như CPU/memory, không phải kỹ thuật cải thiện nội dung và chỉ dẫn của prompt.</p></li></ul>"
  },
  {
    "id": "AB-100-066",
    "exam": "AB-100",
    "number": 66,
    "missingImages": 0,
    "question": "<p>You need to recommend a security solution for agents in a Microsoft Power Platform environment.<br/><br/>The agents must use only approved connectors and services. The solution must prevent the agents from accessing sensitive data.<br/><br/>What should you recommend?</p>",
    "options": {
      "A": "<p>Configure Azure Monitor to capture connector activity logs.</p>",
      "B": "<p>Enable a Microsoft Dataverse audit.</p>",
      "C": "<p>Deploy data loss prevention (DLP) policies in Power Platform.</p>",
      "D": "<p>Enable customer-managed keys in Microsoft Dataverse.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Power Platform DLP policies cho phép quản trị viên phân loại, cho phép hoặc chặn connector. Nhờ đó, agent chỉ truy cập các dịch vụ được phê duyệt và không thể kết hợp/truyền dữ liệu nhạy cảm qua connector không được phép.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Azure Monitor connector activity logs:</strong> Chỉ ghi nhận/quan sát hoạt động sau hoặc trong khi xảy ra; không ngăn agent dùng connector không được phép.</p></li><li><p><strong>B. Microsoft Dataverse audit:</strong> Audit lưu lịch sử thay đổi và truy cập dữ liệu Dataverse, nhưng không kiểm soát chính sách sử dụng connector của agent.</p></li><li><p><strong>D. Customer-managed keys in Dataverse:</strong> Bảo vệ dữ liệu bằng encryption at rest với khóa do khách hàng quản lý, nhưng không quyết định connector nào được agent sử dụng.</p></li></ul>"
  },
  {
    "id": "AB-100-067",
    "exam": "AB-100",
    "number": 67,
    "missingImages": 0,
    "question": "<p>A company has a Microsoft Foundry agent that summarizes customer feedback and recommends products to customers. The agent references data from multiple knowledge sources.<br/><br/>Users report that the agent response time is slow.<br/><br/>Telemetry data shows that the agent frequently reaches its token usage limit.<br/><br/>You need to recommend a solution to reduce token usage without degrading the quality of the generated responses.<br/><br/>What should you recommend?</p>",
    "options": {
      "A": "<p>Chunk documents during indexing.</p>",
      "B": "<p>Reduce the number of knowledge sources used by the agent.</p>",
      "C": "<p>Reconfigure the prompts to limit the amount of retrieved content from the knowledge sources.</p>",
      "D": "<p>Lower the maximum token usage limit for the responses.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Cấu hình prompt để giới hạn lượng nội dung được truy xuất sẽ giảm input token, nên agent xử lý nhanh hơn. Đồng thời vẫn giữ các knowledge source hiện có, chỉ lấy phần liên quan và cần thiết hơn.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Chunk documents during indexing:</strong> Chunking có thể giúp retrieval chính xác hơn, nhưng không trực tiếp giới hạn tổng lượng context được đưa vào prompt.</p></li><li><p><strong>B. Reduce the number of knowledge sources:</strong> Có thể giảm token, nhưng dễ làm thiếu thông tin và giảm chất lượng/căn cứ của câu trả lời.</p></li><li><p><strong>D. Lower maximum token usage for responses:</strong> Chủ yếu giới hạn output token của câu trả lời, không giải quyết nguyên nhân là quá nhiều input context được truy xuất; còn có thể làm câu trả lời bị cụt.</p></li></ul>"
  },
  {
    "id": "AB-100-068",
    "exam": "AB-100",
    "number": 68,
    "missingImages": 0,
    "question": "<p>A company has Microsoft 365 Copilot agents. You need to design a security solution for the agents. The solution must meet the following requirements: </p><ul><li>Identify and mitigate potential risks that relate to AI use. </li><li>Protect AI apps and the sensitive data processed or generated by the agents. </li><li>Support responsible AI governance by retaining and logging interactions, detecting policy violations, and investigating incidents. </li></ul><p>Which two components should you include in the design? Each correct answer presents part of the solution. </p><p><strong>NOTE</strong>:<em> Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>Microsoft Purview</p>",
      "B": "<p>Azure AI Content Safety</p>",
      "C": "<p>Role-based access control (RBAC) in Microsoft Foundry</p>",
      "D": "<p>Microsoft Defender</p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Microsoft Purview</strong> hỗ trợ AI governance, bảo vệ dữ liệu nhạy cảm, retention/logging tương tác, phát hiện vi phạm policy và điều tra sự cố.</p><p><strong>Microsoft Defender</strong> bảo vệ ứng dụng AI, hỗ trợ phát hiện và giảm thiểu các rủi ro bảo mật liên quan đến việc sử dụng AI.</p><p>Kết hợp hai công cụ đáp ứng cả hai lớp: <strong>governance &amp; compliance</strong> và <strong>security &amp; threat protection</strong>.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Azure AI Content Safety:</strong> Chủ yếu lọc nội dung độc hại/không an toàn. Nó không cung cấp đầy đủ governance, retention, compliance investigation và bảo vệ ứng dụng AI.</p></li><li><p><strong>C. RBAC in Microsoft Foundry:</strong> RBAC kiểm soát ai được làm gì trong Foundry, nhưng phạm vi quá hẹp cho yêu cầu bảo mật và governance toàn diện của Microsoft 365 Copilot.</p></li></ul>"
  },
  {
    "id": "AB-100-069",
    "exam": "AB-100",
    "number": 69,
    "missingImages": 0,
    "question": "<p>Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. </p><p>A company has a Microsoft Dynamics 365 Sales environment that has Microsoft Copilot enabled. You need to customize Copilot by tailoring how opportunity summaries are generated or how they are presented to users. </p><p><strong>Solution:</strong> You build Microsoft Power Automate flows to trigger customized Copilot summaries. Does this meet the goal?</p>",
    "options": {
      "A": "<p>YES</p>",
      "B": "<p>NO</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Power Automate phù hợp để tự động hóa workflow như gửi notification, tạo record hoặc cập nhật dữ liệu. Tuy nhiên, nó không tùy chỉnh Copilot prompt, logic tạo summary hoặc cách summary hiển thị trong Dynamics 365 Sales.</p><p>Để tùy chỉnh các phần này, dùng <strong>Microsoft Copilot Studio</strong> với custom prompts, plugins hoặc grounding data phù hợp.</p><h4>Vì sao phương án còn lại sai?</h4><ul><li><strong>A. Yes:</strong> Chọn Yes nghĩa là Power Automate có thể thay đổi cách Copilot tạo/trình bày opportunity summary. Điều này sai vì Power Automate chỉ điều phối workflow, không chỉnh sửa hành vi generative của Copilot.</li></ul>"
  },
  {
    "id": "AB-100-070",
    "exam": "AB-100",
    "number": 70,
    "missingImages": 1,
    "question": "<p><strong>DRAG DROP</strong></p><p>A company has an AI solution that uses a Microsoft Copilot Studio agent. You need to monitor the agent's performance. The solution must meet the following requirements: </p><ul><li>Monitor the agent's telemetry in near-real-time (NRT). </li><li>Download transcripts of full conversations. </li><li>Monitor the agent's usage and performance. </li></ul><p>What should you use for each requirement? </p><p>To answer, drag the appropriate options to the correct requirements. Each option may be used once, more than once, or not at all.  You may need to drag the split bar between panes or scroll to view content. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em><em><p>[Hình ab100_70.jpg chưa có trong bản lưu nguồn.]</p></em><br/></p>",
    "options": {
      "A": "<p>Monitor telemetry in NRT: Application Insights; Download full conversation transcripts: Microsoft Power Apps; Monitor usage and performance: Copilot Studio</p>",
      "B": "<p>Monitor telemetry in NRT: Log Analytics; Download full conversation transcripts: Copilot Studio; Monitor usage and performance: Application Insights</p>",
      "C": "<p>Monitor telemetry in NRT: Application Insights; Download full conversation transcripts: Copilot Studio; Monitor usage and performance: Microsoft Power Apps</p>",
      "D": "<p>Monitor telemetry in NRT: Log Analytics; Download full conversation transcripts: Microsoft Power Apps; Monitor usage and performance: Copilot Studio</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><ul><li><strong>Application Insights</strong> thu thập telemetry gần thời gian thực, như request, lỗi, latency và dependency.</li><li><strong>Microsoft Power Apps</strong> hoặc Power Platform admin experience cho phép truy xuất/export dữ liệu <code>ConversationTranscript</code>, chứa nội dung hội thoại đầy đủ.</li><li><strong>Copilot Studio</strong> có Analytics tích hợp để xem mức sử dụng và hiệu năng của agent.</li></ul><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>Log Analytics cho NRT telemetry:</strong> Log Analytics phù hợp phân tích log đã thu thập; Application Insights phù hợp hơn để theo dõi application telemetry gần thời gian thực.</p></li><li><p><strong>Copilot Studio để tải full transcript:</strong> Copilot Studio có analytics, nhưng không phải nơi export dữ liệu <code>ConversationTranscript</code> đầy đủ như Power Apps/Power Platform admin experience.</p></li><li><p><strong>Microsoft Power Apps để monitor usage/performance:</strong> Power Apps hỗ trợ truy xuất/export dữ liệu; không cung cấp dashboard analytics agent chuyên dụng như Copilot Studio.</p></li></ul>"
  },
  {
    "id": "AB-100-071",
    "exam": "AB-100",
    "number": 71,
    "missingImages": 0,
    "question": "<p><strong>Case study</strong></p><p><strong>To start the case study</strong> - To display the first question in this case study, select the \"Next\" button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the \"Question\" button to return to the question.</p><p><strong>Overview</strong></p><p>Contoso, Ltd. is a high-tech manufacturing company that uses Microsoft Dynamics 365 Finance. Dynamics 365 Supply Chain Management, and Dynamics 365 Commerce for its North American operations. The company designs and develops innovative products that have many patents and proprietary technologies. The patents and engineering designs are closely guarded secrets. Contoso executives want to integrate and adopt AI solutions to help scale the company in preparation for an anticipated period of rapid growth. The company has multiple legal entities and Azure subscriptions that will be used in the adopted AI solutions.</p><p><strong>Requirements</strong></p><p><strong>AI Adoption</strong> - The following executives will have specific responsibilities in the overall AI adoption:</p><ul><li>Chief Technology Officer (CTO): Select one Dynamics 365 Finance, Dynamics 365 Supply Chain Management or Dynamics 365 Commerce prebuilt AI agent and one custom Microsoft Copilot Studio AI agent to prioritize and deploy during the initial AI adoption phase.</li><li>Chief Information Officer (CIO): Ensure that appropriate security labels are assigned to the data used by the AI agents.</li><li>Chief Financial Officer (CFO): Analyze the return on investment (ROI) for the AI agents being deployed.</li><li>Chief Information Security Officer (CISO): Discover and inventory AI resources for auditing.</li><li>Chief Executive Officer (CEO): Ensure that all solutions adhere to industry-standard responsible AI practices.</li></ul><p>All AI initiatives and agents will have a detailed business use case, a defined audience profile, and an estimated ROI that will compare the cost savings of the current process against the estimated costs of using the new AI solutions. The company's research and development (R&amp;D) department already has a custom Model Context Protocol (MCP) server that contains comprehensive product specifications and compliance data.</p><p><strong>Prebuilt AI Agent</strong> - The CTO has NOT yet selected which prebuilt AI agent to use in Dynamics 365 Supply Chain Management. The CTO wants to view available agent templates to identify which agent will add the most business value.</p><p>Depending on which high-priority AI agents are identified, its agent capabilities must be previewed in a discovery meeting with the relevant business operation stakeholders.</p><p><strong>Custom AI Agent</strong> - Contoso has identified the following custom AI agent requirements:</p><ul><li>The custom AI agent will use data from Dynamics 365 Supply Chain Management to answer questions for the manufacturing team as a low-code solution.</li><li>The custom AI agent will be accessible from within Microsoft Teams.</li><li>The custom AI agent must be designed to eventually connect to other agents that can be selected based on their description.</li><li>The topics used in the custom AI agent will be selected based NOT on a trigger phrase, but on a description of the purpose of the query, to make the interactions more conversational.</li><li>The custom AI agent must be able to answer questions about product specifications by using existing technologies. The product specifications are maintained by the R&amp;D department.</li><li>The custom AI agent must be integrated with and accessible from Dynamics 365 Supply Chain Management.</li><li>The custom AI agent must be able to use Dynamics 365 Supply Chain Management business logic that is stored outside of the application.</li></ul><p><strong>Analysis, Reporting, and Troubleshooting</strong><br/>Contoso has identified the following analysis, reporting, and troubleshooting requirements:</p><ul><li>The CISO will audit all the AI solutions monthly for compliance and security.</li><li>The CFO will analyze all the AI solutions quarterly to compare the estimated ROI against actual measured efficiencies and adoption. The CFO will use the Copilot Studio agent usage estimator to perform this analysis.</li><li>The CISO wants to identify how much sensitive data was accessed for a given AI agent run and who accessed the data. Too much sensitive data accessed by a single user might indicate a high security risk.</li><li>The CTO wants to track user feedback on the quality of the AI agent responses during user interactions with the agents. Consistently poor feedback will trigger an escalated reengineering discussion.</li><li>The CEO wants a quarterly assessment of all the required metrics for their specific responsibilities. The tools used for the assessments must be Microsoft-recommended and must verify reliability, interpretability, fairness, and compliance.</li><li>The CFO wants to identify how many interactions with the AI agents are abandoned on a given day as compared to resolved conversations. Too many abandoned sessions might indicate that Copilot Studio credits are being used inefficiently by end users.</li></ul><p>What should you recommend to assist the CEO with their specific responsibilities?</p>",
    "options": {
      "A": "<p>The Microsoft Service Trust Portal</p>",
      "B": "<p>Microsoft Foundry Tools</p>",
      "C": "<p>Microsoft Purview</p>",
      "D": "<p>The Responsible AI dashboard</p>",
      "E": "<p>Compliance Center</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Responsible AI dashboard hỗ trợ đánh giá các khía cạnh của Responsible AI, bao gồm:</p><ul><li><strong>Reliability:</strong> Kết quả có ổn định/đáng tin không?</li><li><strong>Interpretability:</strong> Có thể hiểu/giải thích cách AI đưa ra kết quả không?</li><li><strong>Fairness:</strong> AI có tạo thiên lệch bất công không?</li><li><strong>Compliance:</strong> AI có đáp ứng các yêu cầu tuân thủ không?</li></ul><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Microsoft Service Trust Portal:</strong> Cung cấp tài liệu chứng nhận, bảo mật và compliance của các dịch vụ Microsoft; không đánh giá chất lượng/trách nhiệm của một AI solution cụ thể.</p></li><li><p><strong>B. Microsoft Foundry Tools:</strong> Là bộ công cụ/dịch vụ để xây dựng AI, không phải dashboard chuyên đánh giá các dimension Responsible AI.</p></li><li><p><strong>C. Microsoft Purview:</strong> Tập trung data governance, data protection và compliance, không chuyên đánh giá fairness hoặc interpretability của AI model.</p></li><li><p><strong>E. Compliance Center:</strong> Phục vụ compliance ở cấp tổ chức, không phải công cụ đánh giá Responsible AI chuyên biệt.</p></li></ul>"
  },
  {
    "id": "AB-100-072",
    "exam": "AB-100",
    "number": 72,
    "missingImages": 0,
    "question": "<p>A company uses multiple Microsoft Copilot Studio agents across different channels. You need to recommend a monitoring solution that provides comprehensive telemetry data and performance insights for the agents. What should you include in the recommendation?</p>",
    "options": {
      "A": "<p>Application Insights</p>",
      "B": "<p>Microsoft Dynamics 365 Customer Voice</p>",
      "C": "<p>Log Analytics</p>",
      "D": "<p>Microsoft Purview</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Copilot Studio có thể tích hợp với Azure Application Insights để thu thập và phân tích telemetry chi tiết: hội thoại, topic được gọi, lỗi, dependency và performance. Điều này giúp theo dõi, debug và tối ưu agent trên nhiều channel.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Dynamics 365 Customer Voice:</strong> Dùng để tạo survey và thu thập phản hồi khách hàng, không phải theo dõi telemetry của agent.</p></li><li><p><strong>C. Log Analytics:</strong> Phù hợp lưu trữ và truy vấn log; không phải lựa chọn tích hợp telemetry ứng dụng chi tiết, trực tiếp nhất cho Copilot Studio.</p></li><li><p><strong>D. Microsoft Purview:</strong> Tập trung data governance, compliance và bảo vệ dữ liệu, không theo dõi runtime telemetry như lỗi hay performance.</p></li></ul>"
  },
  {
    "id": "AB-100-073",
    "exam": "AB-100",
    "number": 73,
    "missingImages": 0,
    "question": "<p>A company has a Microsoft Copilot Studio agent that uses generative AI to assist Microsoft Dynamics 365 Customer Service representatives.</p><p>The agent currently exhibits a low resolution rate and a high escalation rate.</p><p>You need to identify the issue.</p><p>What should you use?</p>",
    "options": {
      "A": "<p>The Agent dashboard of Dynamics 365 Customer Service historical analytics</p>",
      "B": "<p>The Insights tab from the Search &amp; intelligence settings of the Microsoft 365 admin center</p>",
      "C": "<p>The Copilot hub in the Power Platform admin center</p>",
      "D": "<p>The Analytics tab in Copilot Studio</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Analytics tab trong Copilot Studio cung cấp metric như:</p><ul><li><strong>Resolution rate:</strong> Tỷ lệ agent tự giải quyết được yêu cầu.</li><li><strong>Escalation-rate drivers:</strong> Các nguyên nhân khiến hội thoại bị chuyển tiếp/escalate.</li></ul><p>Nhờ đó có thể xác định topic, prompt hoặc knowledge source nào gây lỗi, trả lời kém hoặc không giải quyết được hội thoại.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Agent dashboard của Dynamics 365 Customer Service historical analytics:</strong> Phục vụ phân tích hoạt động customer service, không cung cấp phân tích hội thoại chuyên sâu cho Copilot Studio agent.</p></li><li><p><strong>B. Insights tab trong Microsoft 365 admin center:</strong> Phục vụ Search &amp; intelligence/Microsoft 365 ở mức quản trị, không phân tích chi tiết topic, prompt và knowledge source của Copilot Studio agent.</p></li><li><p><strong>C. Copilot hub trong Power Platform admin center:</strong> Phù hợp quản trị và theo dõi Copilot tổng quan, không có phân tích hội thoại sâu như Analytics tab của chính Copilot Studio.</p></li></ul>"
  },
  {
    "id": "AB-100-074",
    "exam": "AB-100",
    "number": 74,
    "missingImages": 0,
    "question": "<p>A company has an AI agent that automates the review of customer feedback stored in a cloud database. You plan to generate monthly reports from the agent's output to provide insights into customer sentiment and guide product development and marketing. You need to ensure that the data ingested by the agent is clean and suitable for the intended use. What should you do to prepare the data?</p>",
    "options": {
      "A": "<p>Ensure that the size of the database does not exceed 100 GB.</p>",
      "B": "<p>Translate the data into a single language.</p>",
      "C": "<p>Identify and address biased data.</p>",
      "D": "<p>Sort the database by customer last name.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Feedback có thể bị bias nếu phần lớn phản hồi đến từ nhóm rất hài lòng hoặc rất không hài lòng. Khi phát hiện và xử lý bias, dataset sẽ đại diện hơn và kết quả sentiment analysis sẽ đáng tin cậy, công bằng hơn.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Limit database size to 100 GB:</strong> Giới hạn dung lượng chỉ liên quan capacity/storage, không cải thiện chất lượng hay fairness của dữ liệu.</p></li><li><p><strong>B. Translate data into a single language:</strong> Có thể hỗ trợ xử lý ngôn ngữ thống nhất, nhưng không tự loại bỏ bias trong nhóm khách hàng hoặc nội dung phản hồi.</p></li><li><p><strong>D. Sort by customer last name:</strong> Chỉ thay đổi thứ tự bản ghi, không ảnh hưởng đến tính đại diện hay thiên lệch dữ liệu.</p></li></ul>"
  },
  {
    "id": "AB-100-075",
    "exam": "AB-100",
    "number": 75,
    "missingImages": 0,
    "question": "<p>A company has a canvas app named App1 in a Microsoft Power Platform environment named Env1.</p><p>Env1 uses a customer-managed key for data encryption. App1 connects to multiple data sources to retrieve and update customer and order information.</p><p>You need to recommend a solution to add Microsoft Copilot components to App1. The solution must NOT modify the current security or encryption configurations of Env1.</p><p>What should you include in the recommendation?</p>",
    "options": {
      "A": "<p>Modify the data sources of App1 to make them compatible with Copilot.</p>",
      "B": "<p>Duplicate App1 and republish the app in Env1.</p>",
      "C": "<p>Enable Copilot features for Env1.</p>",
      "D": "<p>Move App1 to a new environment that uses Microsoft-managed keys.</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Bật Copilot features cho Env1 cho phép thêm Copilot component vào canvas app trong cùng environment. Không cần thay đổi data source, nhân bản app hay chuyển app sang environment khác, nên vẫn giữ nguyên customer-managed key và security configuration hiện tại.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Modify data sources of App1:</strong> Không cần thay đổi data source chỉ để thêm Copilot component; hành động này tăng rủi ro và công sức không cần thiết.</p></li><li><p><strong>B. Duplicate App1 and republish:</strong> Tạo bản sao gây dư thừa, khó quản lý phiên bản và không giải quyết yêu cầu bật Copilot trong Env1.</p></li><li><p><strong>D. Move App1 to a new environment with Microsoft-managed keys:</strong> Vi phạm trực tiếp yêu cầu giữ customer-managed key hiện có.</p></li></ul>"
  },
  {
    "id": "AB-100-076",
    "exam": "AB-100",
    "number": 76,
    "missingImages": 1,
    "question": "<p><strong>DRAG DROP</strong></p><p><strong>Case study -</strong></p><p>To answer the case study questions, you will need to reference information that is provided in the case. Case studies and associated questions might contain exhibits or other resources that provide more information about the scenario described in the case. Information provided in an individual question does not apply to the other questions in the case study.</p><p>A Review Screen will appear at the end of this case study. From the Review Screen, you can review and change your answers before you move to the next exam section. After you leave this case study, you will NOT be able to return to it.</p><p><strong>To start the case study - </strong>To display the first question in this case study, select the \"Next\" button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the \"Question\" button to return to the question.</p><p><strong>Overview -</strong></p><p>Contoso, Ltd. is a high-tech manufacturing company that uses Microsoft Dynamics 365 Finance. Dynamics 365 Supply Chain Management, and Dynamics 365 Commerce for its North American operations. The company designs and develops innovative products that have many patents and proprietary technologies. The patents and engineering designs are closely guarded secrets.</p><p>Contoso executives want to integrate and adopt AI solutions to help scale the company in preparation for an anticipated period of rapid growth.</p><p>The company has multiple legal entities and Azure subscriptions that will be used in the adopted AI solutions.</p><p><strong>Requirements</strong></p><p><strong>AI Adoption -</strong></p><p>The following executives will have specific responsibilities in the overall AI adoption:</p><ul><li>Chief Technology Officer (CTO): Select one Dynamics 365 Finance, Dynamics 365 Supply Chain Management or Dynamics 365 Commerce prebuilt AI agent and one custom Microsoft Copilot Studio AI agent to prioritize and deploy during the initial AI adoption phase.</li><li>Chief Information Officer (CIO): Ensure that appropriate security labels are assigned to the data used by the AI agents.</li><li>Chief Financial Officer (CFO): Analyze the return on investment (ROI) for the AI agents being deployed.</li><li>Chief Information Security Officer (CISO): Discover and inventory AI resources for auditing.</li><li>Chief Executive Officer (CEO): Ensure that all solutions adhere to industry-standard responsible AI practices.</li></ul><p>All AI initiatives and agents will have a detailed business use case, a defined audience profile, and an estimated ROI that will compare the cost savings of the current process against the estimated costs of using the new AI solutions.</p><p>The company's research and development (R&amp;D) department already has a custom Model Context Protocol (MCP) server that contains comprehensive product specifications and compliance data.</p><p><strong>Prebuilt AI Agent -</strong></p><p>The CTO has NOT yet selected which prebuilt AI agent to use in Dynamics 365 Supply Chain Management. The CTO wants to view available agent templates to identify which agent will add the most business value.</p><p>Depending on which high-priority AI agents are identified, its agent capabilities must be previewed in a discovery meeting with the relevant business operation stakeholders.</p><p><strong>Custom AI Agent -</strong></p><p>Contoso has identified the following custom AI agent requirements:</p><ul><li>The custom AI agent will use data from Dynamics 365 Supply Chain Management to answer questions for the manufacturing team as a low-code solution.</li><li>The custom AI agent will be accessible from within Microsoft Teams.</li><li>The custom AI agent must be designed to eventually connect to other agents that can be selected based on their description.</li><li>The topics used in the custom AI agent will be selected based NOT on a trigger phrase, but on a description of the purpose of the query, to make the interactions more conversational.</li><li>The custom AI agent must be able to answer questions about product specifications by using existing technologies. The product specifications are maintained by the R&amp;D department.</li><li>The custom AI agent must be integrated with and accessible from Dynamics 365 Supply Chain Management.</li><li>The custom AI agent must be able to use Dynamics 365 Supply Chain Management business logic that is stored outside of the application.</li></ul><p><em>Analysis, Reporting, and Troubleshooting </em></p><p>Contoso has identified the following analysis, reporting, and troubleshooting requirements:</p><ul><li>The CISO will audit all the AI solutions monthly for compliance and security.</li><li>The CFO will analyze all the AI solutions quarterly to compare the estimated ROI against actual measured efficiencies and adoption. The CFO will use the Copilot Studio agent usage estimator to perform this analysis.</li><li>The CISO wants to identify how much sensitive data was accessed for a given AI agent run and who accessed the data. Too much sensitive data accessed by a single user might indicate a high security risk.</li><li>The CTO wants to track user feedback on the quality of the AI agent responses during user interactions with the agents. Consistently poor feedback will trigger an escalated reengineering discussion.</li><li>The CEO wants a quarterly assessment of all the required metrics for their specific responsibilities. The tools used for the assessments must be Microsoft-recommended and must verify reliability, interpretability, fairness, and compliance.</li><li>The CFO wants to identify how many interactions with the AI agents are abandoned on a given day as compared to resolved conversations. Too many abandoned sessions might indicate that Copilot Studio credits are being used inefficiently by end users.</li></ul><p>Which Copilot Studio analytics metrics should you recommend to assist the executives with their specific responsibilities? To answer, drag the appropriate metrics to the correct executives. Each metric may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.</p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em><em><p>[Hình ab100_76.jpg chưa có trong bản lưu nguồn.]</p></em></p>",
    "options": {
      "A": "<p>Effectiveness - Tool use</p>",
      "B": "<p>Use - Satisfaction</p>",
      "C": "<p>Satisfaction - Effectiveness</p>",
      "D": "<p>Use - Effectiveness</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Use metrics</strong> hiển thị session volume và trạng thái hội thoại, gồm abandoned và resolved interactions. Đây là dữ liệu CFO cần để đánh giá usage và Copilot Studio credit consumption.</p><p><strong>Satisfaction metrics</strong> ghi nhận phản hồi của người dùng về chất lượng câu trả lời. CTO có thể dùng dữ liệu này để nhận diện agent hoạt động kém và quyết định reengineering/cải tiến.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Effectiveness — Tool use:</strong> Tool use đo việc agent gọi tool; không phản ánh trực tiếp sự hài lòng của người dùng mà CTO cần.</p></li><li><p><strong>C. Satisfaction — Effectiveness:</strong> Đảo sai trọng tâm: CFO cần số liệu usage/credit, không phải satisfaction; CTO cần user feedback về chất lượng.</p></li><li><p><strong>D. Use — Effectiveness:</strong> CFO: Use là đúng, nhưng Effectiveness không đo phản hồi/hài lòng của người dùng rõ bằng Satisfaction.</p></li></ul>"
  },
  {
    "id": "AB-100-077",
    "exam": "AB-100",
    "number": 77,
    "missingImages": 0,
    "question": "<p>You need to recommend a solution for integrating a Microsoft Copilot agent with a Microsoft Dynamics 365 Contact Center chat channel.</p><p>The agent must be able to answer customer inquiries and seamlessly transfer the conversation to a live customer service representative whenever the customer requests escalation.</p><p>What should you recommend?</p>",
    "options": {
      "A": "<p>Build an agent flow</p>",
      "B": "<p>Configure the Conversation Start topic</p>",
      "C": "<p>Configure a skill</p>",
      "D": "<p>Call a Microsoft Power Automate connector</p>",
      "E": "<p>Configure the Escalate topic</p>"
    },
    "answer": [
      "E"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Escalate topic</strong> trong Copilot Studio được dùng để chuyển hội thoại từ agent sang live customer service representative. Nó hỗ trợ handoff sang Dynamics 365 Customer Service hoặc Contact Center và giữ lại conversation context để nhân viên tiếp nhận không phải hỏi lại từ đầu.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Build an agent flow:</strong> Dùng để điều phối các bước/hành động của agent, không phải cơ chế chuyển hội thoại sang live agent.</p></li><li><p><strong>B. Configure Conversation Start topic:</strong> Chỉ xử lý phần mở đầu của hội thoại, không thực hiện escalation.</p></li><li><p><strong>C. Configure a skill:</strong> Skill mở rộng capability hoặc gọi dịch vụ bên ngoài; không phải tính năng handoff hội thoại chuyên dụng.</p></li><li><p><strong>D. Call a Power Automate connector:</strong> Connector/flow có thể chạy tác vụ backend, nhưng không tự chuyển hội thoại kèm context sang nhân viên hỗ trợ.</p></li></ul>"
  },
  {
    "id": "AB-100-078",
    "exam": "AB-100",
    "number": 78,
    "missingImages": 0,
    "question": "<p>You are evaluating a Microsoft Copilot Studio agent that supports Microsoft Dynamics 365 Customer Service representatives. You need to recommend a testing solution that meets the following requirements: </p><ul><li>Evaluates agent effectiveness during active sessions </li><li>Validates whether the agent delivers accurate and helpful responses </li><li>Provides measurable, actionable insights for continuous improvement </li></ul><p>What should you recommend?</p>",
    "options": {
      "A": "<p>Track resolution, deflection, and accuracy by using dashboards and use scripts to ensure consistent responses.</p>",
      "B": "<p>Perform load testing to validate how the agent scales under a high chat volume.</p>",
      "C": "<p>Review historical tickets to find agents that have the shortest resolution times.</p>",
      "D": "<p>Measure uptime and page load times.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Dashboard giúp theo dõi:</p><ul><li><strong>Resolution:</strong> Agent tự giải quyết được bao nhiêu yêu cầu.</li><li><strong>Deflection:</strong> Bao nhiêu yêu cầu không cần chuyển sang nhân viên.</li><li><strong>Accuracy:</strong> Câu trả lời có đúng không.</li></ul><p>Test script kiểm tra agent với các tình huống/prompt lặp lại để xác nhận phản hồi ổn định, từ đó hỗ trợ continuous improvement.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Load testing:</strong> Đo khả năng chịu lượng chat lớn và scalability, không đo độ đúng hoặc chất lượng phản hồi.</p></li><li><p><strong>C. Review historical tickets by shortest resolution time:</strong> Chỉ xem thời gian xử lý ticket, không đánh giá trực tiếp quality, accuracy hoặc consistency của agent.</p></li><li><p><strong>D. Measure uptime and page load times:</strong> Đo độ sẵn sàng và hiệu năng website/hạ tầng, không đo hiệu quả hội thoại của agent.</p></li></ul>"
  },
  {
    "id": "AB-100-079",
    "exam": "AB-100",
    "number": 79,
    "missingImages": 0,
    "question": "<p><strong>Note:</strong> This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.<br/>A company has a team that analyzes its customers by using a manual process. You are designing an AI-based agent to automate and improve the process.<br/>You need to recommend on which platform to build the agent. The solution must meet the following requirements:</p><ul><li>Use generative AI to answer common questions.</li><li>Provide analytics to review AI performance.</li><li>Identify customer demographics.</li><li>Minimize custom development.</li></ul><p><strong>Solution</strong>: You recommend Microsoft Security Copilot<strong>. </strong>Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Microsoft Security Copilot được thiết kế cho cybersecurity, ví dụ điều tra incident, phân tích threat và xử lý security alert. Nó không phải nền tảng low-code/no-code để xây business agent phân tích khách hàng hoặc dữ liệu kinh doanh.</p><h4>Vì sao phương án còn lại sai?</h4><ul><li><strong>A. Yes:</strong> Chọn Yes nghĩa là Security Copilot có thể thay thế nền tảng xây business agent low-code/no-code. Điều này sai vì mục đích chính của Security Copilot là an ninh mạng.</li></ul>"
  },
  {
    "id": "AB-100-080",
    "exam": "AB-100",
    "number": 80,
    "missingImages": 0,
    "question": "<p>You are creating validation criteria for a custom generative AI model that produces business reports based on internal enterprise data. </p><p>You need to assess whether the model's outputs are appropriate and meaningful for the business reports. </p><p>Which metric should you use?</p>",
    "options": {
      "A": "<p>The number of active users interacting with the model</p>",
      "B": "<p>Alignment of the output to domain-specific tasks</p>",
      "C": "<p>The average system resource usage during inference</p>",
      "D": "<p>The model training duration</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Metric này đánh giá report do AI tạo ra có:</p><ul><li>Phù hợp với nhiệm vụ nghiệp vụ cụ thể.</li><li>Chính xác và có ý nghĩa cho người dùng trong domain đó.</li><li>Hỗ trợ đúng quyết định/công việc thực tế.</li></ul><p>Do đó, nó đo trực tiếp chất lượng nội dung đầu ra.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Number of active users:</strong> Đo mức độ sử dụng/độ phổ biến, không cho biết report có đúng hoặc hữu ích không.</p></li><li><p><strong>C. Average system resource usage during inference:</strong> Đo CPU, memory hoặc tài nguyên khi chạy model; không đánh giá nội dung report.</p></li><li><p><strong>D. Model training duration:</strong> Đo thời gian huấn luyện, không phản ánh report sau huấn luyện có phù hợp nghiệp vụ không.</p></li></ul>"
  },
  {
    "id": "AB-100-081",
    "exam": "AB-100",
    "number": 81,
    "missingImages": 0,
    "question": "<p>A company has a Microsoft Copilot Studio agent that provides answers based on a knowledge base for customer support. </p><p>Users report that, occasionally, the agent provides inaccurate answers. </p><p>You need to use metrics from the Analytics tab in Copilot Studio to identify the cause of the inaccuracies. </p><p>Which two options should you use? </p><p>Each correct answer presents part of the solution.</p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>Survey results</p>",
      "B": "<p>Session information and session outcomes</p>",
      "C": "<p>Topic usage and topics with low resolution</p>",
      "D": "<p>Engagement, resolution, and escalation rates</p>",
      "E": "<p>Quality of generated answers</p>"
    },
    "answer": [
      "C",
      "E"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Topic usage và topics with low resolution</strong> cho biết topic nào được kích hoạt nhiều nhưng thường không giải quyết được yêu cầu. Điều này giúp khoanh vùng nơi agent có thể thiếu logic, thiếu knowledge hoặc hiểu sai ý định.</p><p><strong>Quality of generated answers</strong> đánh giá trực tiếp mức độ đúng, liên quan và hữu ích của câu trả lời sinh từ knowledge base.</p><p>Kết hợp hai thông tin giúp xác định cả <strong>vị trí lỗi</strong> và <strong>chất lượng nội dung lỗi</strong>.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Survey results:</strong> Cho phản hồi tổng quát từ người dùng, nhưng khó chỉ ra chính xác topic hoặc knowledge content nào gây câu trả lời sai.</p></li><li><p><strong>B. Session information and session outcomes:</strong> Hiển thị thông tin/kết quả phiên hội thoại, nhưng không đánh giá trực tiếp chất lượng câu trả lời sinh ra.</p></li><li><p><strong>D. Engagement, resolution, and escalation rates:</strong> Là metric cấp cao để theo dõi xu hướng, nhưng không khoanh vùng nguyên nhân nội dung khiến câu trả lời không chính xác.</p></li></ul>"
  },
  {
    "id": "AB-100-082",
    "exam": "AB-100",
    "number": 82,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p>A company deploys a Microsoft Copilot Studio agent that integrates with a Microsoft Power Automate desktop flow. You need to recommend a testing solution that meets the following requirements: </p><ul><li>Test cases must validate the most recent changes to the agent before the agent is released. </li><li>The flow must be validated as part of the agent's orchestration. </li></ul><p>What should you recommend for each requirement? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p><p><p>[Hình ab100_82.jpg chưa có trong bản lưu nguồn.]</p></p>",
    "options": {
      "A": "<p>Run tests against the latest unpublished version of the agent. Add the flow to the agent as a tool</p>",
      "B": "<p>Publish the agent to a channel and test the agent on live users. Use the Power Automate for desktop console.</p>",
      "C": "<p>Run tests against the latest unpublished version of the agent. Add the flow to a canvas app.</p>",
      "D": "<p>Run tests against the production version of the agent. Add the flow to the agent as a tool.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Phải chạy test trên <strong>latest unpublished version</strong> để kiểm tra đúng những thay đổi mới nhất trước khi release, thay vì để người dùng production thử nghiệm.</p><p>Desktop flow phải được thêm vào agent dưới dạng <strong>tool</strong>. Khi đó agent có thể chọn/gọi flow trong orchestration và toàn bộ tích hợp được kiểm thử end-to-end.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Publish rồi test với live users — dùng desktop console:</strong> Đưa agent chưa được kiểm thử cho người dùng thật là rủi ro; desktop console không kiểm thử flow trong agent orchestration.</p></li><li><p><strong>C. Test unpublished version — add flow to canvas app:</strong> Test bản unpublished là đúng, nhưng canvas app không làm flow trở thành tool mà agent có thể gọi.</p></li><li><p><strong>D. Test production version — add flow as tool:</strong> Thêm flow làm tool là đúng, nhưng test production version không kiểm tra các thay đổi mới nhất trước release.</p></li></ul>"
  },
  {
    "id": "AB-100-083",
    "exam": "AB-100",
    "number": 83,
    "missingImages": 0,
    "question": "<p>A company has Microsoft Copilot Studio agents.</p><p>The company plans to deploy custom connectors across development, test and production environments.</p><p>You need to design an application lifecycle management (ALM) process to ensure consistency and prevent direct editing in production.</p><p>Which two actions should you include in the design? Each correct answer presents part of the solution.</p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>Deploy managed solutions to production.</p>",
      "B": "<p>Deploy unmanaged solutions to production.</p>",
      "C": "<p>Manually rebuild the agents in each environment.</p>",
      "D": "<p>Move the agents between the environments by using data export and import.</p>",
      "E": "<p>Include agents and connectors in a solution.</p>"
    },
    "answer": [
      "A",
      "E"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Đưa agent và custom connector vào <strong>solution</strong> giúp chúng được quản lý như một gói và triển khai nhất quán giữa các environment.</p><p>Triển khai <strong>managed solution</strong> vào production sẽ khóa component, hạn chế chỉnh sửa trực tiếp và bảo vệ tính ổn định của môi trường production.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Deploy unmanaged solutions to production:</strong> Unmanaged solution phù hợp development, vì có thể bị chỉnh sửa trực tiếp; không phù hợp để kiểm soát production.</p></li><li><p><strong>C. Manually rebuild agents in each environment:</strong> Dễ sai lệch cấu hình, tốn công và không có quy trình ALM nhất quán.</p></li><li><p><strong>D. Move agents through data export/import:</strong> Data export/import không phải cơ chế deployment/ALM chuẩn cho agent và connector; có thể bỏ sót component, dependency hoặc cấu hình cần thiết.</p></li></ul>"
  },
  {
    "id": "AB-100-084",
    "exam": "AB-100",
    "number": 84,
    "missingImages": 0,
    "question": "<p>A company has multiple AI models that support generation of sales transactions. Each release of the models must be reviewed by a security and compliance team before being deployed to the production environment. The security and compliance team must have access to prior versions to properly determine potential exposures introduced. You need to recommend a solution to evaluate the impact of each deployment to production. The solution must enhance business continuity. What should you recommend?</p>",
    "options": {
      "A": "<p>Create a central model registry that uses version history.</p>",
      "B": "<p>Establish a promotion process by using a quality gate.</p>",
      "C": "<p>Implement version control for all the AI system components.</p>",
      "D": "<p>Track model retirement schedules to prevent service disruptions.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Central model registry lưu tập trung tất cả version của model. Version history cho phép security/compliance team truy vết bản cũ, so sánh model mới với model trước đó và đánh giá rủi ro mới trước khi promotion/deployment sang production.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Promotion process using a quality gate:</strong> Quality gate chỉ là bước phê duyệt/kiểm tra trước deploy; không tự lưu toàn bộ model version hoặc cho phép so sánh lịch sử.</p></li><li><p><strong>C. Version control for all AI system components:</strong> Version control tổng quát có ích cho code và cấu hình, nhưng không chuyên biệt cho lifecycle, metadata và version của AI model như model registry.</p></li><li><p><strong>D. Track model retirement schedules:</strong> Chỉ hỗ trợ quản lý decommission/end-of-life của model, không giải quyết việc so sánh version và rủi ro trước production.</p></li></ul>"
  },
  {
    "id": "AB-100-085",
    "exam": "AB-100",
    "number": 85,
    "missingImages": 0,
    "question": "<p>A company has an AI solution named Solution1 that is deployed to the production environment. Solution1 uses an Azure OpenAI model to generate marketing emails for existing customers.<br/><br/>During an internal review, you identify that Solution1 creates different emails depending on the customers’ traits.<br/><br/>You need to recommend a strategy to mitigate the bias. The strategy must adhere to Microsoft responsible AI principles.<br/><br/>What should you recommend?</p>",
    "options": {
      "A": "<p>Modify Solution1 to randomly generate emails for different traits.</p>",
      "B": "<p>Modify the system instructions of Solution1.</p>",
      "C": "<p>Retrain the model by using a larger dataset.</p>",
      "D": "<p>Modify the contents of the training dataset.</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Cần rà soát, làm sạch, cân bằng và bổ sung dữ liệu đại diện cho training dataset. Khi dữ liệu đầu vào phản ánh công bằng các nhóm/tình huống liên quan, model mới có cơ sở để giảm bias một cách bền vững.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Randomly generate emails for different traits:</strong> Làm ngẫu nhiên output chỉ xử lý biểu hiện bên ngoài, không sửa dữ liệu đã gây bias cho model.</p></li><li><p><strong>B. Modify system instructions:</strong> System prompt có thể hướng dẫn cách trả lời, nhưng không loại bỏ bias đã học từ training data.</p></li><li><p><strong>C. Retrain using a larger dataset:</strong> Dataset lớn hơn nhưng vẫn mất cân bằng hoặc có định kiến thì bias vẫn tồn tại, thậm chí có thể bị khuếch đại.</p></li></ul>"
  },
  {
    "id": "AB-100-086",
    "exam": "AB-100",
    "number": 86,
    "missingImages": 0,
    "question": "<p>A company uses multiple Microsoft Copilot Studio agents across different channels. You need to recommend a monitoring solution that provides comprehensive telemetry data and performance insights for the agents. What should you include in the recommendation?</p>",
    "options": {
      "A": "<p>Application Insights</p>",
      "B": "<p>Azure Advisor</p>",
      "C": "<p>Azure DevOps</p>",
      "D": "<p>Microsoft Dynamics 365 Customer Voice</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Copilot Studio tích hợp với Azure Application Insights để thu thập telemetry như message, topic được kích hoạt, error, agent activity và performance. Dữ liệu này hỗ trợ theo dõi, debug và tối ưu agent trên các channel.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Azure Advisor:</strong> Đưa ra khuyến nghị về chi phí, reliability, security và hiệu năng hạ tầng Azure; không thu thập telemetry hội thoại chi tiết của agent.</p></li><li><p><strong>C. Azure DevOps:</strong> Hỗ trợ source control, work item và CI/CD; không phải công cụ runtime telemetry cho Copilot Studio.</p></li><li><p><strong>D. Dynamics 365 Customer Voice:</strong> Dùng để tạo khảo sát và thu thập ý kiến khách hàng, không theo dõi agent activity/error/performance.</p></li></ul>"
  },
  {
    "id": "AB-100-087",
    "exam": "AB-100",
    "number": 87,
    "missingImages": 1,
    "question": "<p><strong>DRAG DROP</strong></p><p>A company has a cloud-based AI solution that uses Azure OpenAI models. You need to design a monitoring solution that meets the following requirements:</p><ul><li>Monitors performance metrics and operational health for the models</li><li>Monitors AI apps and agents for compliance</li><li>Uses Azure-native capabilities</li><li>Minimizes development effort</li></ul><p>What should you use for each requirement? To answer, drag the appropriate options to the correct requirements. Each option may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.</p><p><strong>NOTE: </strong><em>Each correct selection is worth one point.<p>[Hình ab100_87.jpg chưa có trong bản lưu nguồn.]</p></em></p>",
    "options": {
      "A": "<p>Microsoft Purview - Azure Monitor</p>",
      "B": "<p>Azure Monitor - Microsoft Purview</p>",
      "C": "<p>Microsoft Defender for Cloud - Azure AI Search</p>",
      "D": "<p>Copilot Studio - Application Insights</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Microsoft Purview</strong> cung cấp data governance, data protection và compliance cho AI app/agent.</p><p><strong>Azure Monitor</strong> theo dõi operational health và performance, gồm latency, throughput, token usage và errors. Đây là dịch vụ Azure-native, giảm công sức phát triển monitoring custom.</p><h4>Vì sao các phương án khác sai?</h4><p>Không có distractor được cung cấp trong nội dung câu hỏi. Điểm cần nhớ là:</p><ul><li><strong>Purview</strong> = governance/compliance/dữ liệu.</li><li><strong>Azure Monitor</strong> = metrics, logs, errors và hiệu năng vận hành.</li></ul>"
  },
  {
    "id": "AB-100-088",
    "exam": "AB-100",
    "number": 88,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p><strong>Overview </strong>- Contoso, Ltd. is a high-tech manufacturing company that uses Microsoft Dynamics 365 Finance. Dynamics 365 Supply Chain Management, and Dynamics 365 Commerce for its North American operations. The company designs and develops innovative products that have many patents and proprietary technologies. The patents and engineering designs are closely guarded secrets. Contoso executives want to integrate and adopt AI solutions to help scale the company in preparation for an anticipated period of rapid growth. The company has multiple legal entities and Azure subscriptions that will be used in the adopted AI solutions.<br/><strong>Requirements</strong><br/><strong>AI Adoption </strong>- The following executives will have specific responsibilities in the overall AI adoption:</p><ul><li>Chief Technology Officer (CTO): Select one Dynamics 365 Finance, Dynamics 365 Supply Chain Management or Dynamics 365 Commerce prebuilt AI agent and one custom Microsoft Copilot Studio AI agent to prioritize and deploy during the initial AI adoption phase.</li><li>Chief Information Officer (CIO): Ensure that appropriate security labels are assigned to the data used by the AI agents.</li><li>Chief Financial Officer (CFO): Analyze the return on investment (ROI) for the AI agents being deployed.</li><li>Chief Information Security Officer (CISO): Discover and inventory AI resources for auditing.</li><li>Chief Executive Officer (CEO): Ensure that all solutions adhere to industry-standard responsible AI practices.</li></ul><p>All AI initiatives and agents will have a detailed business use case, a defined audience profile, and an estimated ROI that will compare the cost savings of the current process against the estimated costs of using the new AI solutions. The company's research and development (R&amp;D) department already has a custom Model Context Protocol (MCP) server that contains comprehensive product specifications and compliance data.</p><p><strong>Prebuilt AI Agent </strong>- The CTO has NOT yet selected which prebuilt AI agent to use in Dynamics 365 Supply Chain Management. The CTO wants to view available agent templates to identify which agent will add the most business value. Depending on which high-priority AI agents are identified, its agent capabilities must be previewed in a discovery meeting with the relevant business operation stakeholders.</p><p><strong>Custom AI Agent </strong>- Contoso has identified the following custom AI agent requirements:</p><ul><li>The custom AI agent will use data from Dynamics 365 Supply Chain Management to answer questions for the manufacturing team as a low-code solution.</li><li>The custom AI agent will be accessible from within Microsoft Teams.</li><li>The custom AI agent must be designed to eventually connect to other agents that can be selected based on their description.</li><li>The topics used in the custom AI agent will be selected based NOT on a trigger phrase, but on a description of the purpose of the query, to make the interactions more conversational.</li><li>The custom AI agent must be able to answer questions about product specifications by using existing technologies. The product specifications are maintained by the R&amp;D department.</li><li>The custom AI agent must be integrated with and accessible from Dynamics 365 Supply Chain Management.</li><li>The custom AI agent must be able to use Dynamics 365 Supply Chain Management business logic that is stored outside of the application.</li></ul><p><strong>Analysis, Reporting, and Troubleshooting - </strong>Contoso has identified the following analysis, reporting, and troubleshooting requirements:</p><ul><li>The CISO will audit all the AI solutions monthly for compliance and security.</li><li>The CFO will analyze all the AI solutions quarterly to compare the estimated ROI against actual measured efficiencies and adoption. The CFO will use the Copilot Studio agent usage estimator to perform this analysis.</li><li>The CISO wants to identify how much sensitive data was accessed for a given AI agent run and who accessed the data. Too much sensitive data accessed by a single user might indicate a high security risk.</li><li>The CTO wants to track user feedback on the quality of the AI agent responses during user interactions with the agents. Consistently poor feedback will trigger an escalated reengineering discussion.</li><li>The CEO wants a quarterly assessment of all the required metrics for their specific responsibilities. The tools used for the assessments must be Microsoft-recommended and must verify reliability, interpretability, fairness, and compliance.</li><li>The CFO wants to identify how many interactions with the AI agents are abandoned on a given day as compared to resolved conversations. Too many abandoned sessions might indicate that Copilot Studio credits are being used inefficiently by end users.</li></ul><p>What should you include in the custom AI agent design to meet the R&amp;D product specifications and the compliance information requirements? </p><p>To answer, select the appropriate options in the answer area.</p><p><strong>NOTE: </strong><em>Each correct selection is worth one point.<p>[Hình ab100_88.jpg chưa có trong bản lưu nguồn.]</p></em></p>",
    "options": {
      "A": "<p>An Azure AI Bot Service channel - A REST API</p>",
      "B": "<p>A custom connector - The MCP server</p>",
      "C": "<p>A custom OData entity - An event trigger</p>",
      "D": "<p>The Semantic Kernel - A tool</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Custom connector</strong> là cầu nối để agent low-code giao tiếp với external system/MCP server.</p><p>Sau đó, <strong>MCP server</strong> được thêm vào agent để agent có thể truy xuất thông số R&amp;D và dữ liệu compliance khi cần trả lời hoặc thực hiện tác vụ.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Azure AI Bot Service channel — REST API:</strong> Bot Service channel dùng để đưa bot ra các kênh giao tiếp; REST API đơn thuần không cung cấp cấu hình MCP integration cần thiết trong Copilot Studio.</p></li><li><p><strong>C. Custom OData entity — event trigger:</strong> OData entity là mô hình dữ liệu, event trigger kích hoạt workflow; không tạo cầu nối agent-to-MCP server.</p></li><li><p><strong>D. Semantic Kernel — a tool:</strong> Semantic Kernel là SDK/orchestration framework cho giải pháp pro-code. Nó không phải lựa chọn low-code trực tiếp để tích hợp MCP server vào Copilot Studio trong kịch bản này.</p></li></ul>"
  },
  {
    "id": "AB-100-089",
    "exam": "AB-100",
    "number": 89,
    "missingImages": 0,
    "question": "<p>A company has an AI solution built by using Microsoft Copilot Studio and Power Platform. The solution is used by the company's sales, marketing, and customer service teams. You are performing a return on AI investment (ROAI) analysis to evaluate the impact of the solution. You need to identify which measurable business drivers to include in the analysis. Which two business drivers should you identify? </p><p>Each correct answer presents part of the solution. </p><p><strong>NOTE: </strong><em>Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>The reduced average case resolution time</p>",
      "B": "<p>Market capitalization</p>",
      "C": "<p>Economic market predictability</p>",
      "D": "<p>Increased employee productivity</p>",
      "E": "<p>Brand awareness</p>"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Reduced average case resolution time</strong> cho biết Copilot giúp giải quyết yêu cầu khách hàng nhanh hơn.</p><p><strong>Increased employee productivity</strong> phản ánh thời gian nhân viên tiết kiệm được và lượng công việc bổ sung họ có thể hoàn thành nhờ tự động hóa/hỗ trợ AI.</p><p>Cả hai đều có thể đo lường và liên hệ trực tiếp với hiệu quả của giải pháp AI.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Market capitalization:</strong> Bị ảnh hưởng bởi rất nhiều yếu tố thị trường, không thể quy trực tiếp cho một Copilot solution.</p></li><li><p><strong>C. Economic market predictability:</strong> Là yếu tố kinh tế vĩ mô, không phải business driver do agent tạo ra.</p></li><li><p><strong>E. Brand awareness:</strong> Có thể là mục tiêu marketing dài hạn, nhưng khó đo và khó gắn trực tiếp với hiệu quả vận hành của Copilot.</p></li></ul>"
  },
  {
    "id": "AB-100-090",
    "exam": "AB-100",
    "number": 90,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT -</strong><br/>A company plans to implement an AI solution that will contain a Microsoft Copilot Studio agent and a Microsoft Foundry agent. The solution will be stored in a source code repository.<br/>You need to recommend a deployment method for each agent. The solution must meet the following requirements:</p><ul><li>A test environment must be used before a deployment to production.</li><li>Production must be isolated from development and testing.</li><li>The deployment must be repeatable and fully automated.</li></ul><p>The solution must NOT require manual intervention. Which deployment method should you recommend for each agent? </p><p>To answer, select the appropriate options in the answer area.<br/><strong>NOTE: </strong><em>Each correct selec<em>tion is worth one point.</em><p>[Hình ab100_90.jpg chưa có trong bản lưu nguồn.]</p></em></p>",
    "options": {
      "A": "<p>Use a Microsoft Power Platform deployment pipeline. - Use an Azure DevOps pipeline.</p>",
      "B": "<p>Use a Microsoft Power Platform deployment pipeline. - Use a Bicep file</p>",
      "C": "<p>Export from the source code repository and import to the target environment. - Use an Azure DevOps pipeline.</p>",
      "D": "<p>Use a Bicep file. - Use a Microsoft Power Platform deployment pipeline.</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Microsoft Copilot Studio</strong> thuộc Power Platform, nên dùng <strong>Microsoft Power Platform deployment pipeline</strong> để đưa solution qua development, test và production.</p><p><strong>Microsoft Foundry</strong> phù hợp với <strong>Azure DevOps pipeline</strong> để triển khai CI/CD từ source code repository. Pipeline giúp build, test và deploy lặp lại mà không cần thao tác thủ công.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Power Platform pipeline — Bicep file:</strong> Power Platform pipeline đúng cho Copilot Studio, nhưng Bicep không phải phương pháp CI/CD chính cho source-code-based Foundry agent.</p></li><li><p><strong>C. Manual export/import — Azure DevOps pipeline:</strong> Azure DevOps đúng cho Foundry, nhưng export/import thủ công không đáp ứng yêu cầu deployment tự động cho Copilot Studio.</p></li><li><p><strong>D. Bicep file — Power Platform pipeline:</strong> Đảo sai công cụ. Copilot Studio nên dùng Power Platform pipeline; Foundry source code phù hợp Azure DevOps pipeline.</p></li></ul>"
  },
  {
    "id": "AB-100-091",
    "exam": "AB-100",
    "number": 91,
    "missingImages": 0,
    "question": "<p>A company uses a fine-tuned Microsoft Foundry model that requires frequent updates as new customer feedback becomes available. You need to design an application lifecycle management (ALM) process that meets the following requirements: </p><ul><li>Data changes must be tracked and versioned. </li><li>The model must be retrained consistently by using approved training data. </li></ul><p>Which two actions should you include in the design? </p><p>Each correct answer presents part of the solution. </p><p><strong>NOTE:</strong><em> Each correct selection is worth one point.</em></p>",
    "options": {
      "A": "<p>Associate the storage location to the fine-tuning job.</p>",
      "B": "<p>Create a content filter.</p>",
      "C": "<p>Store the training data in Azure Files.</p>",
      "D": "<p>Upload the training data to Microsoft Foundry data files.</p>",
      "E": "<p>Store the training data in Azure Blob Storage that has version control enabled.</p>"
    },
    "answer": [
      "D",
      "E"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Upload training data vào <strong>Microsoft Foundry data files</strong> giúp các fine-tuning run sử dụng nhất quán dữ liệu đã được phê duyệt.</p><p>Lưu training data trong <strong>Azure Blob Storage</strong> có bật version control giúp theo dõi thay đổi, khôi phục bản cũ và audit chính xác dataset nào đã dùng cho từng lần fine-tuning.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Associate storage location to the fine-tuning job:</strong> Chỉ liên kết storage location không tự cung cấp cơ chế quản lý approved data hay version history/audit.</p></li><li><p><strong>B. Create a content filter:</strong> Content filter kiểm soát nội dung input/output, không quản lý version hoặc provenance của training data.</p></li><li><p><strong>C. Store training data in Azure Files:</strong> Azure Files là file share; không đáp ứng yêu cầu versioning/audit training data rõ ràng như Blob Storage có version control.</p></li></ul>"
  },
  {
    "id": "AB-100-092",
    "exam": "AB-100",
    "number": 92,
    "missingImages": 0,
    "question": "<p>A company has an AI solution that uses Azure OpenAI models. You need to recommend a governance solution that monitors and audits changes to model configurations and data usage. The solution must minimize administrative effort. What should you include in the recommendation?</p>",
    "options": {
      "A": "<p>Azure Monitor</p>",
      "B": "<p>Azure Stream Analytics</p>",
      "C": "<p>Azure API Management</p>",
      "D": "<p>Azure Policy</p>",
      "E": "<p>Microsoft Purview</p>"
    },
    "answer": [
      "E"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Microsoft Purview hỗ trợ data governance, theo dõi việc sử dụng dữ liệu và auditing cho AI resource. Đây là công cụ phù hợp để quản lý dữ liệu, compliance và khả năng truy vết với ít công sức vận hành hơn.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Azure Monitor:</strong> Tập trung vào operational health, metrics, logs và performance; không phải nền tảng data governance/audit toàn diện.</p></li><li><p><strong>B. Azure Stream Analytics:</strong> Xử lý và phân tích streaming data, không quản trị lifecycle, usage và compliance của dữ liệu AI.</p></li><li><p><strong>C. Azure API Management:</strong> Quản lý API như policy, security, gateway và publishing; không cung cấp data governance tổng thể.</p></li><li><p><strong>D. Azure Policy:</strong> Enforce rule/cấu hình Azure resource, nhưng không cung cấp data usage tracking và auditing toàn diện như Purview.</p></li></ul>"
  },
  {
    "id": "AB-100-093",
    "exam": "AB-100",
    "number": 93,
    "missingImages": 1,
    "question": "<p><strong>DRAG DROP</strong></p><p>A company has a Microsoft Copilot Studio agent that has been in production for three months. The agent has received positive feedback from users. You need to identify the number of questions unanswered by the agent and the number of abandoned sessions between the users and the agent. </p><p>Which Copilot Studio insights should you use? </p><p>To answer, drag the appropriate insights to the correct requirements. Each insight may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em><em><p>[Hình ab100_93.jpg chưa có trong bản lưu nguồn.]</p></em></p>",
    "options": {
      "A": "<p>Generated answer rate and quality — Conversation outcomes</p>",
      "B": "<p>Conversation outcomes — Generated answer rate and quality</p>",
      "C": "<p>Reactions — Survey results</p>",
      "D": "<p>Survey results — Generated answer rate and quality</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Generated answer rate and quality</strong> cho biết agent có tạo được câu trả lời hay không và chất lượng câu trả lời đó. Dùng để tìm các câu hỏi chưa được trả lời tốt.</p><p><strong>Conversation outcomes</strong> phân loại kết quả session như <strong>Resolved</strong>, <strong>Escalated</strong> và <strong>Abandoned</strong>, nên dùng để xác định các phiên hội thoại bị bỏ dở.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Conversation outcomes — Generated answer rate and quality:</strong> Đảo ngược công dụng. Conversation outcomes dùng cho trạng thái session, không trực tiếp đánh giá câu hỏi chưa có generated answer tốt.</p></li><li><p><strong>C. Reactions — Survey results:</strong> Cả hai chủ yếu đo user feedback/khảo sát, không trực tiếp xác định câu hỏi chưa trả lời hoặc session abandoned.</p></li><li><p><strong>D. Survey results — Generated answer rate and quality:</strong> Survey results không phải insight chính để tìm câu hỏi agent chưa trả lời tốt; nó chỉ phản ánh đánh giá tổng quát của người dùng.</p></li></ul>"
  },
  {
    "id": "AB-100-094",
    "exam": "AB-100",
    "number": 94,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p>A company uses Azure OpenAI models that use grounding data from Microsoft Fabric for agents. The models are fine-tuned by using proprietary datasets. You need to design a governance solution that meets the following requirements: </p><ul><li>Restricts access to the grounding data to only assigned roles </li><li>Restricts model fine-tuning to only the AI engineering team </li></ul><p>What should you include in the design? To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p><p><p>[Hình ab100_94.jpg chưa có trong bản lưu nguồn.]</p></p>",
    "options": {
      "A": "<p>Microsoft Purview access policies - Role-based access control (RBAC) in Microsoft Foundry</p>",
      "B": "<p>Role-based access control (RBAC) in Microsoft Foundry - Microsoft Purview access policies</p>",
      "C": "<p>Azure Policy compliance rules - Azure Resource Manager (ARM) resource locks</p>",
      "D": "<p>Azure Monitor alerts - Microsoft Entra Conditional Access</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Microsoft Purview access policies</strong> quản lý quyền truy cập theo vai trò vào grounding data trong Microsoft Fabric.</p><p><strong>RBAC trong Microsoft Foundry</strong> giới hạn quyền fine-tuning cho AI engineering team. Nhờ đó chỉ nhóm được ủy quyền mới có thể thay đổi model.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Foundry RBAC — Purview access policies:</strong> Đảo sai vị trí. Foundry RBAC phù hợp fine-tuning permission, còn Purview access policies phù hợp quyền truy cập grounding data trong Fabric.</p></li><li><p><strong>C. Azure Policy compliance rules — ARM resource locks:</strong> Azure Policy kiểm tra/enforce cấu hình resource; resource lock ngăn xóa/sửa resource. Cả hai không quản lý quyền truy cập dữ liệu hoặc quyền fine-tuning theo yêu cầu.</p></li><li><p><strong>D. Azure Monitor alerts — Entra Conditional Access:</strong> Azure Monitor cảnh báo/quan sát; Conditional Access kiểm soát điều kiện đăng nhập. Không giải quyết quyền đặc thù cho Fabric grounding data và Foundry fine-tuning.</p></li></ul>"
  },
  {
    "id": "AB-100-095",
    "exam": "AB-100",
    "number": 95,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p>You are designing a testing solution for a Microsoft Copilot Studio agent that integrates with Microsoft Dynamics 365 Customer Service and Dynamics 365 Sales. You need to design end-to-end scenarios to test the agent's ability to perform the following actions: </p><ul><li>Coordinate tasks and data interactions across both Dynamics 365 apps. </li><li>Interpret user input and provide contextually relevant outputs. </li></ul><p>Which test scenario and metric should you include in the design? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p><p><p>[Hình ab100_95.jpg chưa có trong bản lưu nguồn.]</p></p>",
    "options": {
      "A": "<p>Test scenario: Run task-based scenarios that involve both apps; Metric: Track the successful completion of cross-app tasks</p>",
      "B": "<p>Test scenario: In each app, test isolated tasks without using workflows; Metric: Measure the initial prompt response time for each app</p>",
      "C": "<p>Test scenario: Run task-based scenarios that involve both apps; Metric: Track the average click rate across both apps</p>",
      "D": "<p>Test scenario: Test visual consistency across both apps; Metric: Track the successful completion of cross-app tasks</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Chạy các task-based scenario có cả Customer Service và Sales giúp kiểm tra end-to-end: dữ liệu có truyền đúng không, bước tiếp theo có được thực hiện đúng không và ngữ cảnh có được giữ lại không.</p><p>Metric <strong>successful completion of cross-app tasks</strong> đo trực tiếp quy trình xuyên ứng dụng có hoàn tất thành công hay không.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Test isolated tasks — initial prompt response time:</strong> Test cô lập không kiểm tra việc phối hợp giữa hai app; response time chỉ đo tốc độ, không đo quy trình business flow hoàn tất hay không.</p></li><li><p><strong>C. Task-based scenarios — average click rate:</strong> Scenario đúng, nhưng click rate không cho biết tác vụ xuyên ứng dụng có thành công hay không.</p></li><li><p><strong>D. Test visual consistency — successful completion:</strong> Metric đúng, nhưng visual consistency chỉ kiểm tra giao diện; không test dữ liệu và task coordination giữa hai ứng dụng.</p></li></ul>"
  },
  {
    "id": "AB-100-096",
    "exam": "AB-100",
    "number": 96,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p>A company has a Microsoft Copilot Studio prompt-and-response agent. You need to ensure that the agent meets the following requirements: </p><ul><li>Provides effective and relevant responses </li><li>Provides conversational outcomes </li></ul><p>Which metric should you use for each requirement? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em></p><p><em><p>[Hình ab100_96.jpg chưa có trong bản lưu nguồn.]</p></em><br/></p>",
    "options": {
      "A": "<p>Generated answer rate and quality - Topics by outcome</p>",
      "B": "<p>Reactions - Satisfaction</p>",
      "C": "<p>Generated answer rate and quality - Tool use</p>",
      "D": "<p>Tool use - Topics by outcome</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Generated answer rate and quality</strong> đánh giá tần suất agent tạo được answer và chất lượng/relevance của answer đó. Nó trả lời câu hỏi: “Generated answer có hữu ích không?”</p><p><strong>Topics by outcome</strong> theo dõi kết quả của hội thoại theo topic, như <strong>Resolved</strong>, <strong>Escalated</strong> hoặc <strong>Abandoned</strong>.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Reactions — Satisfaction:</strong> Đều là user feedback, không đo trực tiếp generated answer rate/quality hoặc kết quả hội thoại theo topic.</p></li><li><p><strong>C. Generated answer rate and quality — Tool use:</strong> Vế đầu đúng, nhưng Tool use chỉ đo agent gọi tool như thế nào, không theo dõi Resolved/Escalated/Abandoned theo topic.</p></li><li><p><strong>D. Tool use — Topics by outcome:</strong> Topics by outcome đúng cho kết quả hội thoại, nhưng Tool use không đánh giá chất lượng/relevance của generated answer.</p></li></ul>"
  },
  {
    "id": "AB-100-097",
    "exam": "AB-100",
    "number": 97,
    "missingImages": 0,
    "question": "<p><strong>CASE STUDY</strong></p><p><strong>To start the case study</strong> - To display the first question in this case study, select the \"Next\" button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the \"Question\" button to return to the question.</p><p><strong>Background</strong> - Fabrikam, Inc., is a global consumer goods company that is undergoing a digital transformation initiative to migrate its entire infrastructure to the Microsoft cloud. As a key element of this cloud migration, the company will implement Microsoft Dynamics 365 Sales, moving away from the current on-premises proprietary technologies used by its business-to-business (B2B) sales team. As part of the cloud migration, Fabrikam will adopt an AI-first approach to its business solutions and implement AI solutions, wherever possible, to streamline operations.</p><p><strong>Problem Statements</strong> - Fabrikam's infrastructure currently relies on various on-premises systems that require sales executives to use corporate computers with physical keyboards to access business information during customer interactions. Mobile phones cannot be used for these purposes, as the systems depend on keyboard input. As a result, the sales executives spend a lot of time using keyboards to search for data on several disparate systems and file servers, rather than focusing on the customers. This affects the customer experience. Fabrikam stakeholders are concerned that users will be hesitant to adopt AI. If the AI initiatives are NOT adopted, cost savings will never be realized. Additionally, funding for future AI initiatives will depend on demonstrating an increase in AI adoption month over month. As the AI agent initiative for the sales team will be the first for Fabrikam, the rapid adoption of the agent is a high priority.</p><p><strong>Planned Initiatives -</strong></p><p><strong><em>General</em></strong> - Fabrikam management has prioritized AI-driven projects to improve efficiency, customer engagement, and responsible AI adoption. The current application infrastructure is on-premises and must be migrated to the cloud to support the adoption of these technologies.</p><p><strong><em>Infrastructure Migration</em></strong> - Fabrikam plans to migrate from its current on-premises infrastructure to a completely cloud-based topology; this will include user authentication, the security framework, and, primarily, the adoption of the services by end users. All the data from the different systems will be consolidated into a single data source - a common data model that will use a Microsoft Dataverse environment as a single source of truth (SSOT) for the sales team.</p><p><strong><em>Sales Cycle Enablement</em></strong> - To achieve the company's objectives, Fabrikam intends to implement the following strategies to enhance the sales cycle: </p><ul><li>Use low-code development to create a single AI agent that has Dataverse as its core component. </li><li>Ensure that sales managers can access unanswered correspondence from prospects and intervene as appropriate. </li><li>Replace the previous proprietary software with Dynamics 365 Sales to track sales cycles and customer interactions. </li><li>Have the sales executives use Dynamics 365 Sales to track interactions for open opportunities and send follow-up communications to prospects. </li><li>Have the sales executives use handsfree headsets to interact with an AI agent when they have questions about internal policies or customer data.</li></ul><p><strong>Requirements -</strong></p><p><strong><em>Infrastructure Migration</em></strong> - Fabrikam has identified the following infrastructure migration requirements: </p><ul><li>Azure must be used for all future infrastructure workloads. </li><li>The company must follow Microsoft-recommended methodologies for infrastructure migration to the cloud. </li><li>Any created AI agents must have their return on investment (ROI) calculated to ensure that the solution will save the company money.</li></ul><p><strong><em>Sales Cycle Enablement</em></strong> - Fabrikam has identified the following requirements for sales cycle enablement: </p><ul><li>The final AI agent must follow Microsoft recommendations for a conversational user experience. </li><li>A designated checklist must be reviewed to ensure that the AI agent follows Microsoft deployment recommendations for a compliant solution. Detailed telemetry must be logged for the first created AI agent to help troubleshoot and optimize the agent during the initial AI agent adoption process. </li><li>Unexpected AI agent actions must end in an escalation to a live representative. For example, a sales executive must be rerouted to a representative if the agent cannot answer a question after two failed attempts. </li><li>The return on investment (ROI) of switching from the current process to the future process is required for stakeholder sign off. </li><li>The sales team must use Dynamics 365 Sales to correspond with prospects more quickly and efficiently than currently. Sales managers must report on the adoption of the AI agent to key Fabrikam stakeholders on a monthly basis. </li></ul><p>Any sensitive information, such as user IDs and names, shared via the AI agent must be tracked for future auditing. Which tool should you recommend to address the sensitive information concerns in the sales process?</p>",
    "options": {
      "A": "<p>The Analytics tab in Microsoft Copilot Studio</p>",
      "B": "<p>Model Context Protocol (MCP)</p>",
      "C": "<p>Application Insights</p>",
      "D": "<p>Microsoft Foundry Tracing UI</p>",
      "E": "<p>Monitoring in Microsoft Foundry</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Application Insights cung cấp detailed telemetry và application log để theo dõi hoạt động của agent, lỗi, hiệu năng và dữ liệu trao đổi theo cấu hình telemetry. Điều này hỗ trợ truy vấn, điều tra sự cố và audit.</p><p>Khi có dữ liệu nhạy cảm, cần cấu hình logging cẩn thận: chỉ thu thập dữ liệu cần thiết, hạn chế quyền truy cập và tránh ghi nội dung nhạy cảm không cần thiết.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Analytics tab in Copilot Studio:</strong> Chủ yếu cung cấp dashboard/metric tổng quan về usage, resolution hoặc satisfaction; không phải nơi truy vấn telemetry và application log chi tiết.</p></li><li><p><strong>B. Model Context Protocol (MCP):</strong> Là protocol kết nối agent với tool/API/data source, không phải công cụ logging hoặc auditing.</p></li><li><p><strong>D. Microsoft Foundry Tracing UI:</strong> Phục vụ tracing trong Foundry, không phải lựa chọn chuẩn cho telemetry/audit chi tiết của Copilot Studio agent.</p></li><li><p><strong>E. Monitoring in Microsoft Foundry:</strong> Theo dõi Foundry workload, nhưng không phù hợp bằng Application Insights cho detailed Copilot Studio telemetry.</p></li></ul>"
  },
  {
    "id": "AB-100-098",
    "exam": "AB-100",
    "number": 98,
    "missingImages": 0,
    "question": "<p>A company has an Azure environment that supports multiple business units. The company plans to implement an AI solution that will perform sentiment analysis on customer product reviews. You need to evaluate the potential cost of the solution to support return on AI investment (ROAI) analysis. What should you use?</p>",
    "options": {
      "A": "<p>Total Cost of Ownership (TCO) Calculator</p>",
      "B": "<p>Azure Reservations</p>",
      "C": "<p>Azure pricing calculator</p>",
      "D": "<p>Azure Monitor</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Azure pricing calculator cho phép chọn dịch vụ Azure, region, cấu hình và mức usage dự kiến để ước tính chi phí trước triển khai. Đây là đầu vào trực tiếp cho ROAI analysis.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. TCO Calculator:</strong> Chủ yếu so sánh chi phí hạ tầng on-premises với cloud/Azure ở mức tổng thể, thường dùng khi đánh giá migration; không phải công cụ định giá cụ thể các Azure AI service dự kiến dùng.</p></li><li><p><strong>B. Azure Reservations:</strong> Dùng để tối ưu chi phí bằng cam kết sử dụng sau khi đã lập kế hoạch nhu cầu; không phải công cụ ước tính chi phí ban đầu.</p></li><li><p><strong>D. Azure Monitor:</strong> Theo dõi hệ thống đang chạy, metrics và logs; không dự toán chi phí trước khi triển khai.</p></li></ul>"
  },
  {
    "id": "AB-100-099",
    "exam": "AB-100",
    "number": 99,
    "missingImages": 0,
    "question": "<p><strong>To start the case study</strong> - To display the first question in this case study, select the \"Next\" button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the \"Question\" button to return to the question.</p><p><strong>Overview</strong> - Contoso, Ltd. is a high-tech manufacturing company that uses Microsoft Dynamics 365 Finance. Dynamics 365 Supply Chain Management, and Dynamics 365 Commerce for its North American operations. The company designs and develops innovative products that have many patents and proprietary technologies. The patents and engineering designs are closely guarded secrets. Contoso executives want to integrate and adopt AI solutions to help scale the company in preparation for an anticipated period of rapid growth. The company has multiple legal entities and Azure subscriptions that will be used in the adopted AI solutions.</p><p><strong>Requirements</strong><br/><strong>AI Adoption</strong> - The following executives will have specific responsibilities in the overall AI adoption:</p><ul><li>Chief Technology Officer (CTO): Select one Dynamics 365 Finance, Dynamics 365 Supply Chain Management or Dynamics 365 Commerce prebuilt AI agent and one custom Microsoft Copilot Studio AI agent to prioritize and deploy during the initial AI adoption phase.</li><li>Chief Information Officer (CIO): Ensure that appropriate security labels are assigned to the data used by the AI agents.</li><li>Chief Financial Officer (CFO): Analyze the return on investment (ROI) for the AI agents being deployed.</li><li>Chief Information Security Officer (CISO): Discover and inventory AI resources for auditing.</li><li>Chief Executive Officer (CEO): Ensure that all solutions adhere to industry-standard responsible AI practices.</li></ul><p>All AI initiatives and agents will have a detailed business use case, a defined audience profile, and an estimated ROI that will compare the cost savings of the current process against the estimated costs of using the new AI solutions. The company's research and development (R&amp;D) department already has a custom Model Context Protocol (MCP) server that contains comprehensive product specifications and compliance data.</p><p><strong>Prebuilt AI Agent</strong> - The CTO has NOT yet selected which prebuilt AI agent to use in Dynamics 365 Supply Chain Management. The CTO wants to view available agent templates to identify which agent will add the most business value. Depending on which high-priority AI agents are identified, its agent capabilities must be previewed in a discovery meeting with the relevant business operation stakeholders.</p><p><strong>Custom AI Agent</strong> - Contoso has identified the following custom AI agent requirements:</p><ul><li>The custom AI agent will use data from Dynamics 365 Supply Chain Management to answer questions for the manufacturing team as a low-code solution.</li><li>The custom AI agent will be accessible from within Microsoft Teams.</li><li>The custom AI agent must be designed to eventually connect to other agents that can be selected based on their description.</li><li>The topics used in the custom AI agent will be selected based NOT on a trigger phrase, but on a description of the purpose of the query, to make the interactions more conversational.</li><li>The custom AI agent must be able to answer questions about product specifications by using existing technologies. The product specifications are maintained by the R&amp;D department.</li><li>The custom AI agent must be integrated with and accessible from Dynamics 365 Supply Chain Management.</li><li>The custom AI agent must be able to use Dynamics 365 Supply Chain Management business logic that is stored outside of the application.</li></ul><p><strong>Analysis, Reporting, and Troubleshooting</strong><br/>Contoso has identified the following analysis, reporting, and troubleshooting requirements:</p><ul><li>The CISO will audit all the AI solutions monthly for compliance and security.</li><li>The CFO will analyze all the AI solutions quarterly to compare the estimated ROI against actual measured efficiencies and adoption. The CFO will use the Copilot Studio agent usage estimator to perform this analysis.</li><li>The CISO wants to identify how much sensitive data was accessed for a given AI agent run and who accessed the data. Too much sensitive data accessed by a single user might indicate a high security risk.</li><li>The CTO wants to track user feedback on the quality of the AI agent responses during user interactions with the agents. Consistently poor feedback will trigger an escalated reengineering discussion.</li><li>The CEO wants a quarterly assessment of all the required metrics for their specific responsibilities. The tools used for the assessments must be Microsoft-recommended and must verify reliability, interpretability, fairness, and compliance.</li><li>The CFO wants to identify how many interactions with the AI agents are abandoned on a given day as compared to resolved conversations. Too many abandoned sessions might indicate that Copilot Studio credits are being used inefficiently by end users.</li></ul><p>Which two components for the custom AI agent should you include in the application lifecycle management (AIM) process? Each correct answer presents part of the solution.</p><p><strong>NOTE:<em> Each correct selection is worth one point.</em></strong></p>",
    "options": {
      "A": "<p>An Azure package</p>",
      "B": "<p>A ZIP package</p>",
      "C": "<p>A Microsoft Power Platform solution</p>",
      "D": "<p>A Cloud Scale Unit (CSU) package</p>",
      "E": "<p>An X++ model</p>"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Microsoft Power Platform solution</strong> là container chuẩn để đóng gói và quản lý Copilot Studio agent cùng các component liên quan trong ALM.</p><p>Khi export solution hoặc agent configuration để lưu trữ/chuyển sang environment khác, nó dùng <strong>ZIP package</strong>. Vì vậy hai thành phần này đi cùng nhau trong quy trình deployment.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Azure package:</strong> Không phải package/container ALM chuẩn cho custom Copilot Studio agent trong Power Platform.</p></li><li><p><strong>D. Cloud Scale Unit (CSU) package:</strong> Thuộc ngữ cảnh Dynamics 365 Commerce/CSU, không dùng cho Copilot Studio ALM.</p></li><li><p><strong>E. X++ model:</strong> Dùng phát triển Dynamics 365 Finance and Operations bằng X++, không phải component triển khai Copilot Studio agent.</p></li></ul>"
  },
  {
    "id": "AB-100-100",
    "exam": "AB-100",
    "number": 100,
    "missingImages": 0,
    "question": "<p>A company has an Azure environment that supports multiple business units. The company plans to implement an AI solution that will perform sentiment analysis on customer product reviews. You need to evaluate the potential cost of the solution to support return on AI investment (ROAI) analysis. What should you use?</p>",
    "options": {
      "A": "<p>Azure savings plans</p>",
      "B": "<p>Microsoft Fabric SKU Estimator</p>",
      "C": "<p>Cost Management + Billing</p>",
      "D": "<p>Azure Monitor</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Cost Management + Billing hỗ trợ:</p><ul><li>Phân tích chi phí Azure.</li><li>Forecast chi tiêu.</li><li>Phân bổ chi phí theo business unit, subscription, resource group hoặc tag.</li><li>Thiết lập budget và cost alert.</li></ul><p>Đây là các khả năng cần thiết để đánh giá và quản lý ROAI.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Azure savings plans:</strong> Giúp tối ưu giá bằng cam kết mức sử dụng, nhưng không cung cấp phân bổ, forecast, budget và alert toàn diện.</p></li><li><p><strong>B. Microsoft Fabric SKU Estimator:</strong> Chỉ ước tính capacity/SKU của Microsoft Fabric, không quản lý chi phí Azure đa business unit.</p></li><li><p><strong>D. Azure Monitor:</strong> Theo dõi metrics, logs, error và performance kỹ thuật; không phải công cụ financial management.</p></li></ul>"
  },
  {
    "id": "AB-100-101",
    "exam": "AB-100",
    "number": 101,
    "missingImages": 1,
    "question": "<p><strong>DRAG DROP</strong></p><p><strong>Case study</strong></p><p><strong>To start the case study </strong>- To display the first question in this case study, select the \"Next\" button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the \"Question\" button to return to the question.</p><p><strong>Overview </strong>- Contoso, Ltd. is a high-tech manufacturing company that uses Microsoft Dynamics 365 Finance. Dynamics 365 Supply Chain Management, and Dynamics 365 Commerce for its North American operations. The company designs and develops innovative products that have many patents and proprietary technologies. The patents and engineering designs are closely guarded secrets. Contoso executives want to integrate and adopt AI solutions to help scale the company in preparation for an anticipated period of rapid growth. The company has multiple legal entities and Azure subscriptions that will be used in the adopted AI solutions.</p><p><strong>Requirements</strong></p><p><strong>AI Adoption</strong> - The following executives will have specific responsibilities in the overall AI adoption</p><ul><li>Chief Technology Officer (CTO): Select one Dynamics 365 Finance, Dynamics 365 Supply Chain Management or Dynamics 365 Commerce prebuilt AI agent and one custom Microsoft Copilot Studio AI agent to prioritize and deploy during the initial AI adoption phase.</li><li>Chief Information Officer (CIO): Ensure that appropriate security labels are assigned to the data used by the AI agents.</li><li>Chief Financial Officer (CFO): Analyze the return on investment (ROI) for the AI agents being deployed.</li><li>Chief Information Security Officer (CISO): Discover and inventory AI resources for auditing.</li><li>Chief Executive Officer (CEO): Ensure that all solutions adhere to industry-standard responsible AI practices.</li></ul><p>All AI initiatives and agents will have a detailed business use case, a defined audience profile, and an estimated ROI that will compare the cost savings of the current process against the estimated costs of using the new AI solutions. The company's research and development (R&amp;D) department already has a custom Model Context Protocol (MCP) server that contains comprehensive product specifications and compliance data.</p><p><strong>Prebuilt AI Agent </strong>- The CTO has NOT yet selected which prebuilt AI agent to use in Dynamics 365 Supply Chain Management. The CTO wants to view available agent templates to identify which agent will add the most business value. Depending on which high-priority AI agents are identified, its agent capabilities must be previewed in a discovery meeting with the relevant business operation stakeholders.</p><p><strong>Custom AI Agent </strong>- Contoso has identified the following custom AI agent requirements:</p><ul><li>The custom AI agent will use data from Dynamics 365 Supply Chain Management to answer questions for the manufacturing team as a low-code solution.</li><li>The custom AI agent will be accessible from within Microsoft Teams.</li><li>The custom AI agent must be designed to eventually connect to other agents that can be selected based on their description.</li><li>The topics used in the custom AI agent will be selected based NOT on a trigger phrase, but on a description of the purpose of the query, to make the interactions more conversational.</li><li>The custom AI agent must be able to answer questions about product specifications by using existing technologies. The product specifications are maintained by the R&amp;D department.</li><li>The custom AI agent must be integrated with and accessible from Dynamics 365 Supply Chain Management.</li><li>The custom AI agent must be able to use Dynamics 365 Supply Chain Management business logic that is stored outside of the application.</li></ul><p><strong>Analysis, Reporting, and Troubleshooting</strong></p><p>Contoso has identified the following analysis, reporting, and troubleshooting requirements:</p><ul><li>The CISO will audit all the AI solutions monthly for compliance and security.</li><li>The CFO will analyze all the AI solutions quarterly to compare the estimated ROI against actual measured efficiencies and adoption. The CFO will use the Copilot Studio agent usage estimator to perform this analysis.</li><li>The CISO wants to identify how much sensitive data was accessed for a given AI agent run and who accessed the data. Too much sensitive data accessed by a single user might indicate a high security risk.</li><li>The CTO wants to track user feedback on the quality of the AI agent responses during user interactions with the agents. Consistently poor feedback will trigger an escalated reengineering discussion.</li><li>The CEO wants a quarterly assessment of all the required metrics for their specific responsibilities. The tools used for the assessments must be Microsoft-recommended and must verify reliability, interpretability, fairness, and compliance.</li><li>The CFO wants to identify how many interactions with the AI agents are abandoned on a given day as compared to resolved conversations. Too many abandoned sessions might indicate that Copilot Studio credits are being used inefficiently by end users.</li></ul><p>Which tools should you recommend to assist the CISO and the CIO with their specific responsibilities? To answer, drag the appropriate tools to the correct executives. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. </p><p><strong>NOTE:</strong><strong><em> Each correct selection is worth one point.</em></strong><strong><em><p>[Hình ab100_101.jpg chưa có trong bản lưu nguồn.]</p></em></strong></p>",
    "options": {
      "A": "<p>Microsoft Purview - Copilot Studio</p>",
      "B": "<p>Copilot Studio - Microsoft Purview</p>",
      "C": "<p>Azure Monitor - Microsoft Purview</p>",
      "D": "<p>Microsoft Defender for Cloud - Azure Monitor</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Microsoft Purview</strong> hỗ trợ CISO về data governance, compliance, auditing và theo dõi quyền truy cập dữ liệu nhạy cảm.</p><p><strong>Copilot Studio</strong> là nơi CIO cấu hình và quản lý agent, connector, quyền truy cập, cách agent sử dụng dữ liệu và security label.</p><h4>Vì sao các phương án khác sai?</h4><p>Không có distractor trong nội dung được cung cấp. Cách nhớ theo vai trò:</p><ul><li><strong>CISO:</strong> bảo vệ, compliance, audit dữ liệu → <strong>Purview</strong>.</li><li><strong>CIO:</strong> cấu hình và quản trị agent → <strong>Copilot Studio</strong>.</li></ul>"
  },
  {
    "id": "AB-100-102",
    "exam": "AB-100",
    "number": 102,
    "missingImages": 0,
    "question": "<p>You are designing an AI business solution that contains the following components:</p><ul><li>A Microsoft Power Automate workflow</li><li>A Microsoft Copilot Studio agent</li><li>A Microsoft Dataverse database</li><li>A Microsoft Power Apps app</li></ul><p>As part of the application lifecycle management (ALM) process, you plan to package the components, so that they can be deployed to other environments as a group.<br/>You need to recommend a solution that supports versioning, dependencies, and deployments.<br/>What should you include in the recommendation?</p>",
    "options": {
      "A": "<p>GitHub Actions</p>",
      "B": "<p>Azure DevOps</p>",
      "C": "<p>Microsoft Power Platform solutions</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Microsoft Power Platform solutions là cơ chế chuẩn để đóng gói các component như Power Apps, Power Automate flow, Dataverse table và Copilot Studio agent. Solution quản lý dependency, versioning và deployment nhất quán giữa các environment.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. GitHub Actions:</strong> Là công cụ CI/CD hỗ trợ tự động hóa pipeline, nhưng vẫn triển khai Power Platform solution chứ không thay thế solution.</p></li><li><p><strong>B. Azure DevOps:</strong> Cũng là công cụ CI/CD hỗ trợ source control và pipeline; không phải container để đóng gói component Power Platform.</p></li></ul>"
  },
  {
    "id": "AB-100-103",
    "exam": "AB-100",
    "number": 103,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p>A company deploys agents that generate responses by using Azure OpenAI resources. The agents are deployed to both the United States and Europe. You need to recommend a governance solution that meets the following requirements: </p><ul><li>Enforces the deployment of the resources to only approved Azure regions </li><li>Provides continuous compliance verification of the resources </li></ul><p>What should you include in the recommendation for each requirement? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE:</strong> <em>Each correct selection is worth one point.</em><em><p>[Hình ab100_103.jpg chưa có trong bản lưu nguồn.]</p></em><br/></p>",
    "options": {
      "A": "<p>Azure Policy — Microsoft Defender for Cloud</p>",
      "B": "<p>Azure Monitor — Microsoft Defender for Cloud</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p><strong>Azure Policy</strong> có thể dùng policy <strong>Allowed locations</strong> để chỉ cho phép deployment vào các Azure region đã phê duyệt.</p><p><strong>Microsoft Defender for Cloud</strong> cung cấp continuous assessment, compliance score và dashboard để liên tục đánh giá posture/compliance của resource.</p><h4>Vì sao phương án khác sai?</h4><ul><li><strong>B. Azure Monitor — Microsoft Defender for Cloud:</strong> Defender for Cloud đúng cho compliance liên tục, nhưng Azure Monitor chủ yếu theo dõi telemetry, log và performance; không enforce allowed regions như Azure Policy.</li></ul>"
  },
  {
    "id": "AB-100-104",
    "exam": "AB-100",
    "number": 104,
    "missingImages": 1,
    "question": "<p><strong>HOTSPOT</strong></p><p><strong>To start the case study</strong> - To display the first question in this case study, select the \"Next\" button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the \"Question\" button to return to the question.</p><p><strong>Background</strong> - Fabrikam, Inc., is a global consumer goods company that is undergoing a digital transformation initiative to migrate its entire infrastructure to the Microsoft cloud. As a key element of this cloud migration, the company will implement Microsoft Dynamics 365 Sales, moving away from the current on-premises proprietary technologies used by its business-to-business (B2B) sales team. As part of the cloud migration, Fabrikam will adopt an AI-first approach to its business solutions and implement AI solutions, wherever possible, to streamline operations.</p><p><strong>Problem Statements</strong> - Fabrikam's infrastructure currently relies on various on-premises systems that require sales executives to use corporate computers with physical keyboards to access business information during customer interactions. Mobile phones cannot be used for these purposes, as the systems depend on keyboard input. As a result, the sales executives spend a lot of time using keyboards to search for data on several disparate systems and file servers, rather than focusing on the customers. This affects the customer experience. Fabrikam stakeholders are concerned that users will be hesitant to adopt AI. If the AI initiatives are NOT adopted, cost savings will never be realized. Additionally, funding for future AI initiatives will depend on demonstrating an increase in AI adoption month over month. As the AI agent initiative for the sales team will be the first for Fabrikam, the rapid adoption of the agent is a high priority.</p><p><strong>Planned Initiatives</strong></p><p><strong>General</strong> - Fabrikam management has prioritized AI-driven projects to improve efficiency, customer engagement, and responsible AI adoption. The current application infrastructure is on-premises and must be migrated to the cloud to support the adoption of these technologies.</p><p><strong><em>Infrastructure Migration</em></strong> - Fabrikam plans to migrate from its current on-premises infrastructure to a completely cloud-based topology; this will include user authentication, the security framework, and, primarily, the adoption of the services by end users. All the data from the different systems will be consolidated into a single data source - a common data model that will use a Microsoft Dataverse environment as a single source of truth (SSOT) for the sales team.</p><p><strong><em>Sales Cycle Enablement</em></strong> - To achieve the company's objectives, Fabrikam intends to implement the following strategies to enhance the sales cycle: </p><ul><li>Use low-code development to create a single AI agent that has Dataverse as its core component. </li><li>Ensure that sales managers can access unanswered correspondence from prospects and intervene as appropriate. </li><li>Replace the previous proprietary software with Dynamics 365 Sales to track sales cycles and customer interactions. </li><li>Have the sales executives use Dynamics 365 Sales to track interactions for open opportunities and send follow-up communications to prospects. </li><li>Have the sales executives use handsfree headsets to interact with an AI agent when they have questions about internal policies or customer data.</li></ul><p><strong>Requirements -</strong></p><p><strong><em>Infrastructure Migration</em></strong> - Fabrikam has identified the following infrastructure migration requirements: </p><ul><li>Azure must be used for all future infrastructure workloads. </li><li>The company must follow Microsoft-recommended methodologies for infrastructure migration to the cloud. </li><li>Any created AI agents must have their return on investment (ROI) calculated to ensure that the solution will save the company money.</li></ul><p><strong><em>Sales Cycle Enablement</em></strong> - Fabrikam has identified the following requirements for sales cycle enablement: </p><ul><li>The final AI agent must follow Microsoft recommendations for a conversational user experience. </li><li>A designated checklist must be reviewed to ensure that the AI agent follows Microsoft deployment recommendations for a compliant solution. </li><li>Detailed telemetry must be logged for the first created AI agent to help troubleshoot and optimize the agent during the initial AI agent adoption process. </li><li>Unexpected AI agent actions must end in an escalation to a live representative. For example, a sales executive must be rerouted to a representative if the agent cannot answer a question after two failed attempts. The return on investment (ROI) of switching from the current process to the future process is required for stakeholder sign off. </li><li>The sales team must use Dynamics 365 Sales to correspond with prospects more quickly and efficiently than currently. Sales managers must report on the adoption of the AI agent to key Fabrikam stakeholders on a monthly basis. </li></ul><p>Any sensitive information, such as user IDs and names, shared via the AI agent must be tracked for future auditing. Which existing tool and data should you use to gather the required metrics for stakeholder signoff for the AI agents? </p><p>To answer, select the appropriate options in the answer area. </p><p><strong>NOTE</strong>: <em>Each correct selection is worth one point.</em><em><p>[Hình ab100_104.jpg chưa có trong bản lưu nguồn.]</p></em><br/></p>",
    "options": {
      "A": "<p>Microsoft Copilot Studio - the current time to complete the task today per instance</p>",
      "B": "<p>Dynamics 365 Sales - the current cost to complete the tasks per instance</p>",
      "C": "<p>Azure Resource Monitor (ARM) - the current cost to complete the tasks per instance</p>",
      "D": "<p>Microsoft Foundry - the current cost to complete the tasks per instance</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Microsoft Copilot Studio là công cụ low-code dùng để xây và phân tích agent trong kịch bản.</p><p>Thời gian hiện tại để hoàn tất từng tác vụ là <strong>baseline</strong>. Sau khi triển khai agent, so sánh thời gian mới với baseline sẽ tính được thời gian tiết kiệm, chi phí tiết kiệm và ROI — các số liệu quan trọng để stakeholder signoff.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>B. Dynamics 365 Sales — current cost per instance:</strong> Chi phí có thể hữu ích, nhưng không đo trực tiếp mức cải thiện về process time do agent tạo ra.</p></li><li><p><strong>C. Azure Resource Monitor (ARM) — current cost per instance:</strong> Công cụ monitoring resource không đo thời gian hoàn tất tác vụ nghiệp vụ hiện tại.</p></li><li><p><strong>D. Microsoft Foundry — current cost per instance:</strong> Foundry có thể xây AI solution, nhưng không phải lựa chọn phù hợp nhất để lấy baseline thời gian tác vụ trong case study Copilot Studio.</p></li></ul>"
  },
  {
    "id": "AB-100-105",
    "exam": "AB-100",
    "number": 105,
    "missingImages": 0,
    "question": "<p>A company has a Microsoft Foundry generative AI model.</p><p>You need to evaluate the model's output to measure the overall quality and coherence of generated responses. The evaluation must use GPT-4o as a judge and return a numeric score for each output.</p><p>Which type of metric should you use?</p>",
    "options": {
      "A": "<p>AI quality (NLP)</p>",
      "B": "<p>risk and safety</p>",
      "C": "<p>Groundedness</p>",
      "D": "<p>AI quality (AI assisted)</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>AI quality (AI assisted) dùng một AI model làm evaluator/judge. Trong câu này, GPT-4o đánh giá chất lượng và coherence của từng output rồi trả về score. Vì vậy đây chính là AI-assisted evaluation.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. AI quality (NLP):</strong> Dùng các metric NLP truyền thống, không phải một AI model như GPT-4o để chấm chất lượng.</p></li><li><p><strong>B. Risk and safety:</strong> Đánh giá nội dung có harmful, unsafe hoặc vi phạm safety policy không; không tập trung vào chất lượng/coherence tổng thể.</p></li><li><p><strong>C. Groundedness:</strong> Đo output có bám sát source/grounding data không; không phải đánh giá tổng quát về chất lượng và coherence bằng AI judge.</p></li></ul>"
  },
  {
    "id": "AB-100-106",
    "exam": "AB-100",
    "number": 106,
    "missingImages": 0,
    "question": "<p>A company has a Microsoft Copilot Studio agent that uses custom connectors to interact with enterprise APIs. </p><p>You need to recommend an application lifecycle management (ALM) process to ensure that the connectors are deployed consistently across development, test, and production environments and meet governance and traceability requirements. </p><p>What should you recommend?</p>",
    "options": {
      "A": "<p>Deploy the APIs as Azure Functions.</p>",
      "B": "<p>Manage the connectors as solution components and deploy the components by using ALM pipelines.</p>",
      "C": "<p>Maintain connector definitions in environment variables.</p>",
      "D": "<p>Export and import the connectors between the environments as unmanaged solutions.</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Custom connector cần được thêm vào <strong>Power Platform solution</strong> như một solution component. Sau đó dùng <strong>ALM pipeline</strong> để triển khai qua Dev, Test và Production.</p><p>Cách này bảo đảm cấu hình nhất quán, có governance, lịch sử triển khai và khả năng truy vết thay đổi.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Deploy APIs as Azure Functions:</strong> Azure Functions chỉ host API code. Nó không quản lý connector definition, connection reference và lifecycle triển khai connector trong Power Platform.</p></li><li><p><strong>C. Maintain connector definitions in environment variables:</strong> Environment variable chỉ nên lưu giá trị thay đổi theo environment, như endpoint; không phải nơi lưu connector definition.</p></li><li><p><strong>D. Export/import as unmanaged solutions:</strong> Unmanaged solution phù hợp development, không phù hợp cho Test/Production vì component vẫn có thể bị sửa trực tiếp và khó kiểm soát.</p></li></ul>"
  },
  {
    "id": "AB-100-107",
    "exam": "AB-100",
    "number": 107,
    "missingImages": 0,
    "question": "<p><strong>CASE STUDY</strong></p><p><strong><em>To start the case study</em></strong> - To display the first question in this case study, select the \"Next\" button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the \"Question\" button to return to the question.</p><p><strong>Background</strong> - Fabrikam, Inc., is a global consumer goods company that is undergoing a digital transformation initiative to migrate its entire infrastructure to the Microsoft cloud. As a key element of this cloud migration, the company will implement Microsoft Dynamics 365 Sales, moving away from the current on-premises proprietary technologies used by its business-to-business (B2B) sales team. As part of the cloud migration, Fabrikam will adopt an AI-first approach to its business solutions and implement AI solutions, wherever possible, to streamline operations.</p><p><strong><em>Problem Statements</em></strong> - Fabrikam's infrastructure currently relies on various on-premises systems that require sales executives to use corporate computers with physical keyboards to access business information during customer interactions. Mobile phones cannot be used for these purposes, as the systems depend on keyboard input. As a result, the sales executives spend a lot of time using keyboards to search for data on several disparate systems and file servers, rather than focusing on the customers. This affects the customer experience. Fabrikam stakeholders are concerned that users will be hesitant to adopt AI. If the AI initiatives are NOT adopted, cost savings will never be realized. Additionally, funding for future AI initiatives will depend on demonstrating an increase in AI adoption month over month. As the AI agent initiative for the sales team will be the first for Fabrikam, the rapid adoption of the agent is a high priority.</p><p><strong>Planned Initiatives</strong></p><p><strong><em>General</em></strong> - Fabrikam management has prioritized AI-driven projects to improve efficiency, customer engagement, and responsible AI adoption. The current application infrastructure is on-premises and must be migrated to the cloud to support the adoption of these technologies.</p><p><strong><em>Infrastructure Migration</em></strong> - Fabrikam plans to migrate from its current on-premises infrastructure to a completely cloud-based topology; this will include user authentication, the security framework, and, primarily, the adoption of the services by end users. All the data from the different systems will be consolidated into a single data source - a common data model that will use a Microsoft Dataverse environment as a single source of truth (SSOT) for the sales team.</p><p><strong><em>Sales Cycle Enablement</em></strong> - To achieve the company's objectives, Fabrikam intends to implement the following strategies to enhance the sales cycle: </p><ul><li>Use low-code development to create a single AI agent that has Dataverse as its core component. </li><li>Ensure that sales managers can access unanswered correspondence from prospects and intervene as appropriate. </li><li>Replace the previous proprietary software with Dynamics 365 Sales to track sales cycles and customer interactions. </li><li>Have the sales executives use Dynamics 365 Sales to track interactions for open opportunities and send follow-up communications to prospects. </li><li>Have the sales executives use handsfree headsets to interact with an AI agent when they have questions about internal policies or customer data.</li></ul><p><strong>Requirements</strong></p><p><strong><em>Infrastructure Migration</em></strong> - Fabrikam has identified the following infrastructure migration requirements: </p><ul><li>Azure must be used for all future infrastructure workloads. </li><li>The company must follow Microsoft-recommended methodologies for infrastructure migration to the cloud. </li><li>Any created AI agents must have their return on investment (ROI) calculated to ensure that the solution will save the company money.</li></ul><p><strong><em>Sales Cycle Enablement</em></strong> - Fabrikam has identified the following requirements for sales cycle enablement: </p><ul><li>The final AI agent must follow Microsoft recommendations for a conversational user experience. </li><li>A designated checklist must be reviewed to ensure that the AI agent follows Microsoft deployment recommendations for a compliant solution. </li><li>Detailed telemetry must be logged for the first created AI agent to help troubleshoot and optimize the agent during the initial AI agent adoption process. </li><li>Unexpected AI agent actions must end in an escalation to a live representative. For example, a sales executive must be rerouted to a representative if the agent cannot answer a question after two failed attempts. The return on investment (ROI) of switching from the current process to the future process is required for stakeholder sign off. </li><li>The sales team must use Dynamics 365 Sales to correspond with prospects more quickly and efficiently than currently. Sales managers must report on the adoption of the AI agent to key Fabrikam stakeholders on a monthly basis. </li></ul><p>Any sensitive information, such as user IDs and names, shared via the AI agent must be tracked for future auditing. Which tool should you recommend to help secure funding for future AI agent development?</p>",
    "options": {
      "A": "<p>Evaluations in Microsoft Foundry</p>",
      "B": "<p>the Azure Cost Optimization workbook</p>",
      "C": "<p>Azure Operator Insights</p>",
      "D": "<p>the Analytics tab in Microsoft Copilot Studio</p>",
      "E": "<p>Direct Preference Optimization (DPO)</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Analytics tab trong Microsoft Copilot Studio cung cấp adoption metric và báo cáo theo thời gian. Có thể dùng dữ liệu này để cho stakeholder thấy agent đang được sử dụng ra sao, xu hướng adoption theo tháng và giá trị tiềm năng của việc tiếp tục đầu tư.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Evaluations in Microsoft Foundry:</strong> Đánh giá chất lượng/model output, không phải công cụ chính để báo cáo adoption của Copilot Studio agent.</p></li><li><p><strong>B. Azure Cost Optimization workbook:</strong> Tập trung tối ưu chi phí Azure, không đo mức người dùng áp dụng agent.</p></li><li><p><strong>C. Azure Operator Insights:</strong> Phục vụ phân tích dữ liệu vận hành mạng/telecom, không theo dõi adoption agent.</p></li><li><p><strong>E. Direct Preference Optimization (DPO):</strong> Là kỹ thuật training/tuning model, không tạo báo cáo usage/adoption cho stakeholder.</p></li></ul>"
  },
  {
    "id": "AB-100-108",
    "exam": "AB-100",
    "number": 108,
    "missingImages": 0,
    "question": "<p>You are designing a Microsoft Copilot Studio agent that uses a custom Microsoft Foundry model to generate responses. You need to ensure that the agent can securely connect to and invoke the custom model during user interactions. What should you include in the design?</p>",
    "options": {
      "A": "<p>Configure the agent to use classic orchestration.</p>",
      "B": "<p>Create a connection to Microsoft Foundry in the agent.</p>",
      "C": "<p>Add the Microsoft Foundry model as a Copilot Studio skill.</p>",
      "D": "<p>Create a custom engine agent.</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Tạo <strong>connection</strong> tới Microsoft Foundry trong agent cung cấp cơ chế authentication và authorization. Nhờ đó Copilot Studio có thể gọi custom Foundry model một cách an toàn trong lúc hội thoại.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Classic orchestration:</strong> Chỉ quyết định cách agent điều phối topic/tool; không thiết lập credential hoặc kết nối bảo mật đến Foundry model.</p></li><li><p><strong>C. Add Foundry model as a Copilot Studio skill:</strong> Skill có thể mở rộng capability, nhưng trước hết vẫn cần connection để agent có thông tin xác thực và quyền gọi model.</p></li><li><p><strong>D. Create a custom engine agent:</strong> Tạo một agent khác không giải quyết bước nền tảng là kết nối trực tiếp và an toàn từ Copilot Studio tới Foundry model.</p></li></ul>"
  },
  {
    "id": "AB-100-109",
    "exam": "AB-100",
    "number": 109,
    "missingImages": 0,
    "question": "<p>A company uses multiple Microsoft Copilot Studio agents across different channels. You need to recommend a monitoring solution that provides comprehensive telemetry data and performance insights for the agents. What should you include in the recommendation?</p>",
    "options": {
      "A": "<p>Microsoft Power BI</p>",
      "B": "<p>the Analytics tab in Copilot Studio</p>",
      "C": "<p>Log Analytics</p>",
      "D": "<p>Azure Advisor</p>"
    },
    "answer": [
      "C"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Log Analytics tập trung log từ nhiều agent/workload, cho phép truy vấn và phân tích bằng KQL. Nó thường kết hợp với Application Insights để điều tra lỗi, latency, performance và xu hướng telemetry trên toàn bộ hệ thống.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Microsoft Power BI:</strong> Mạnh về trực quan hóa và báo cáo, nhưng không phải kho log/truy vấn telemetry bằng KQL.</p></li><li><p><strong>B. Analytics tab in Copilot Studio:</strong> Cung cấp báo cáo cơ bản cho từng agent, không phù hợp phân tích log tập trung, chuyên sâu qua nhiều agent.</p></li><li><p><strong>D. Azure Advisor:</strong> Đưa khuyến nghị tối ưu hạ tầng Azure, không thu thập/truy vấn telemetry agent chi tiết.</p></li></ul>"
  },
  {
    "id": "AB-100-110",
    "exam": "AB-100",
    "number": 110,
    "missingImages": 0,
    "question": "<p>A company is using Microsoft Dynamics 365 Finance and Operations apps.</p><p>The company wants to leverage Microsoft Copilot in-app help and guidance to generate responses for its internal business processes.</p><p>You need to add an additional knowledge source for these business processes. The solution must allow Copilot to access the required information without creating any new topics in the Copilot agent for Finance and Operations.</p><p>Which knowledge source should you add?</p>",
    "options": {
      "A": "<p>Microsoft Dataverse</p>",
      "B": "<p>A public website</p>",
      "C": "<p>Azure AI Search</p>",
      "D": "<p>A file upload</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Có thể upload trực tiếp file PDF hoặc Word làm knowledge source cho Generative Answers. Agent sẽ dùng nội dung tài liệu để trả lời câu hỏi mà không cần xây thêm topic thủ công.</p><h4>Vì sao các phương án khác sai?</h4><ul><li><p><strong>A. Microsoft Dataverse:</strong> Phù hợp lưu dữ liệu nghiệp vụ có cấu trúc, không phải cách nhanh nhất để thêm một file tài liệu nội bộ sẵn có.</p></li><li><p><strong>B. A public website:</strong> Không phù hợp cho tài liệu quy trình nội bộ và có thể làm lộ nội dung không nên public.</p></li><li><p><strong>C. Azure AI Search:</strong> Phù hợp giải pháp search/RAG nâng cao và nhiều nguồn dữ liệu, nhưng cần thêm bước cấu hình/indexing; không trực tiếp bằng upload file cho yêu cầu này.</p></li></ul>"
  },
  {
    "id": "AB-100-111",
    "exam": "AB-100",
    "number": 111,
    "missingImages": 0,
    "question": "<p><strong>Note:</strong> This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.<br/>A company has a team that analyzes its customers by using a manual process. You are designing an AI-based agent to automate and improve the process.<br/>You need to recommend on which platform to build the agent. The solution must meet the following requirements:</p><ul><li>Use generative AI to answer common questions.</li><li>Provide analytics to review AI performance.</li><li>Identify customer demographics.</li><li>Minimize custom development.</li></ul><p><strong>Solution:</strong> You recommend GitHub Copilot. Does this meet the goal?</p>",
    "options": {
      "A": "<p>Yes</p>",
      "B": "<p>No</p>"
    },
    "answer": [
      "B"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>GitHub Copilot là trợ lý hỗ trợ lập trình trong IDE, giúp developer viết code. Nó không phải nền tảng để xây và vận hành customer-facing AI agent.</p><p>GitHub Copilot không cung cấp sẵn generative answers, agent-performance analytics và khả năng phân tích customer demographics với ít code. <strong>Microsoft Copilot Studio</strong> phù hợp hơn vì hỗ trợ xây agent low-code, generative AI và analytics tích hợp.</p><h4>Vì sao phương án còn lại sai?</h4><ul><li><strong>A. Yes:</strong> Chọn Yes nghĩa là GitHub Copilot đáp ứng yêu cầu xây agent nghiệp vụ low-code. Điều này sai vì GitHub Copilot phục vụ coding, không phải nền tảng xây/triển khai agent cho khách hàng.</li></ul>"
  },
  {
    "id": "AB-100-112",
    "exam": "AB-100",
    "number": 112,
    "missingImages": 1,
    "question": "<p>A company has Microsoft Power Platform development, staging, and production environments. Each environment has its own Microsoft Dataverse tables and Azure AI Search index.</p><p>You are designing an application lifecycle management (AIM) process to deploy a Microsoft Copilot Studio agent between the environments.</p><p>The company has a Copilot Studio agent named Agent1 in development. Agent1 uses the following grounding data sources:</p><ul><li>A Dataverse table named CustomerOrders</li><li>An Azure AI Search index named customer-knowledge</li></ul><p>You need to deploy Agent1 to production. The solution must ensure that the agent uses the production grounding data sources, minimizes downtime, and handles credentials and endpoints securely.</p><p>What should you include in the deployment package solution, and what should you reconfigure after the deployment? To answer, select the appropriate options in the answer area.</p><p><strong>NOTE: </strong><em>Each correct selection is worth one point.<p>[Hình ab100_112.jpg chưa có trong bản lưu nguồn.]</p></em></p>",
    "options": {
      "A": "<p>Agent1 and references to the data sources — The environment variables</p>",
      "B": "<p>Agent1 and the production data sources — The connection references</p>",
      "C": "<p>Agent1 and environment variables — The production data sources</p>",
      "D": "<p>Agent1 and copies of the production data — The connection references</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><p>Package triển khai nên chứa <strong>Agent1</strong> và các <strong>tham chiếu</strong> đến nguồn dữ liệu. Không nên đóng gói bảng Dataverse production, Azure AI Search index thực tế, endpoint hoặc thông tin xác thực.</p><p>Sau khi triển khai, cấu hình lại <strong>environment variables</strong> để tham chiếu đúng tới bảng Dataverse, Azure AI Search index và các thiết lập của môi trường Production. Cách này giúp agent có thể di chuyển giữa các môi trường, bảo mật hơn và giảm gián đoạn khi deploy.</p><h4>Vì sao các phương án khác sai?</h4><p>Không có phương án nhiễu được cung cấp. Nguyên tắc cần nhớ là không đưa dữ liệu production hoặc cấu hình đặc thù môi trường vào deployment package.</p>"
  },
  {
    "id": "AB-100-113",
    "exam": "AB-100",
    "number": 113,
    "missingImages": 0,
    "question": "<p>A company has Microsoft Foundry agents that generate responses by using Azure OpenAI resources. The agents are deployed to both the United States and Europe. A company mandate states that the agents and their grounding data must adhere to data residency and movement regulations. You need to recommend a governance solution for the agents. What should you include in the recommendation?</p>",
    "options": {
      "A": "<p>Microsoft Defender for Cloud</p>",
      "B": "<p>Azure Policy</p>",
      "C": "<p>Azure Monitor</p>",
      "D": "<p>Microsoft Purview</p>"
    },
    "answer": [
      "D"
    ],
    "explanation": "<h4>Why is it correct?</h4><p>According to the exam result, The appropriate approach is Microsoft Purview. Purview provides data governance and compliance capabilities, including classification, lifecycle tracking, controls, and auditing for sensitive-data use or movement, including AI-agent grounding data. Defender for Cloud focuses on infrastructure security, Azure Policy on Azure resource configuration rules, and Azure Monitor on telemetry and performance.</p><h4>Why not the other options?</h4><ul><li><strong>A. Microsoft Defender for Cloud:</strong> “Microsoft Defender for Cloud” is wrong because: According to the exam result, The appropriate approach is Microsoft Purview.</li><li><strong>B. Azure Policy:</strong> “Azure Policy” is wrong because: Defender for Cloud focuses on infrastructure security, Azure Policy on Azure resource configuration rules, and Azure Monitor on…</li><li><strong>C. Azure Monitor:</strong> “Azure Monitor” is wrong because: Defender for Cloud focuses on infrastructure security, Azure Policy on Azure resource configuration rules, and Azure Monitor on…</li></ul>"
  },
  {
    "id": "AB-100-114",
    "exam": "AB-100",
    "number": 114,
    "missingImages": 1,
    "question": "<p><strong>DRAG DROP </strong></p><p><strong>Case study</strong></p><p><strong>To start the case study</strong> - To display the first question in this case study, select the \"Next\" button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the \"Question\" button to return to the question.</p><p><strong>Overview</strong> - Contoso, Ltd. is a high-tech manufacturing company that uses Microsoft Dynamics 365 Finance. Dynamics 365 Supply Chain Management, and Dynamics 365 Commerce for its North American operations. The company designs and develops innovative products that have many patents and proprietary technologies. The patents and engineering designs are closely guarded secrets.</p><p>Contoso executives want to integrate and adopt AI solutions to help scale the company in preparation for an anticipated period of rapid growth. The company has multiple legal entities and Azure subscriptions that will be used in the adopted AI solutions.<br/><strong>Requirements</strong></p><p><strong>AI Adoption</strong> - The following executives will have specific responsibilities in the overall AI adoption:</p><ul><li>Chief Technology Officer (CTO): Select one Dynamics 365 Finance, Dynamics 365 Supply Chain Management or Dynamics 365 Commerce prebuilt AI agent and one custom Microsoft Copilot Studio AI agent to prioritize and deploy during the initial AI adoption phase.</li><li>Chief Information Officer (CIO): Ensure that appropriate security labels are assigned to the data used by the AI agents.</li><li>Chief Financial Officer (CFO): Analyze the return on investment (ROI) for the AI agents being deployed.</li><li>Chief Information Security Officer (CISO): Discover and inventory AI resources for auditing.</li><li>Chief Executive Officer (CEO): Ensure that all solutions adhere to industry-standard responsible AI practices.</li></ul><p>All AI initiatives and agents will have a detailed business use case, a defined audience profile, and an estimated ROI that will compare the cost savings of the current process against the estimated costs of using the new AI solutions. The company's research and development (R&amp;D) department already has a custom Model Context Protocol (MCP) server that contains comprehensive product specifications and compliance data.</p><p><strong>Prebuilt AI Agent </strong>- The CTO has NOT yet selected which prebuilt AI agent to use in Dynamics 365 Supply Chain Management. The CTO wants to view available agent templates to identify which agent will add the most business value.Depending on which high-priority AI agents are identified, its agent capabilities must be previewed in a discovery meeting with the relevant business operation stakeholders.<br/><strong>Custom AI Agent </strong>- Contoso has identified the following custom AI agent requirements:</p><ul><li>The custom AI agent will use data from Dynamics 365 Supply Chain Management to answer questions for the manufacturing team as a low-code solution.</li><li>The custom AI agent will be accessible from within Microsoft Teams.</li><li>The custom AI agent must be designed to eventually connect to other agents that can be selected based on their description.</li><li>The topics used in the custom AI agent will be selected based NOT on a trigger phrase, but on a description of the purpose of the query, to make the interactions more conversational.</li><li>The custom AI agent must be able to answer questions about product specifications by using existing technologies. The product specifications are maintained by the R&amp;D department.</li><li>The custom AI agent must be integrated with and accessible from Dynamics 365 Supply Chain Management.</li><li>The custom AI agent must be able to use Dynamics 365 Supply Chain Management business logic that is stored outside of the application.</li></ul><p><strong>Analysis, Reporting, and Troubleshooting - </strong>Contoso has identified the following analysis, reporting, and troubleshooting requirements:</p><ul><li>The CISO will audit all the AI solutions monthly for compliance and security.</li><li>The CFO will analyze all the AI solutions quarterly to compare the estimated ROI against actual measured efficiencies and adoption. The CFO will use the Copilot Studio agent usage estimator to perform this analysis.</li><li>The CISO wants to identify how much sensitive data was accessed for a given AI agent run and who accessed the data. Too much sensitive data accessed by a single user might indicate a high security risk.</li><li>The CTO wants to track user feedback on the quality of the AI agent responses during user interactions with the agents. Consistently poor feedback will trigger an escalated reengineering discussion.</li><li>The CEO wants a quarterly assessment of all the required metrics for their specific responsibilities. The tools used for the assessments must be Microsoft-recommended and must verify reliability, interpretability, fairness, and compliance.</li><li>The CFO wants to identify how many interactions with the AI agents are abandoned on a given day as compared to resolved conversations. Too many abandoned sessions might indicate that Copilot Studio credits are being used inefficiently by end users.</li></ul><p>Which Copilot Studio analytics metrics should you recommend to assist the executives with their specific responsibilities? </p><p>To answer, drag the appropriate metrics to the correct executives. Each metric may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.<br/><strong>NOTE:<em> Each correct selection is worth one point.</em></strong><strong><em><p>[Hình ab100_114.jpg chưa có trong bản lưu nguồn.]</p></em></strong></p>",
    "options": {
      "A": "<p>CFO: Use; CTO: Satisfaction</p>",
      "B": "<p>CFO: Effectiveness; CTO: Tool use</p>",
      "C": "<p>CFO: Satisfaction; CTO: Effectiveness</p>",
      "D": "<p>CFO: Use; CTO: Effectiveness</p>"
    },
    "answer": [
      "A"
    ],
    "explanation": "<h4>Vì sao đúng?</h4><ul><li><strong>CFO → Use:</strong> Metric <strong>Use</strong> cho biết mức độ sử dụng và trạng thái các phiên hội thoại, gồm phiên được giải quyết và bị bỏ dở. CFO dùng dữ liệu này để đánh giá việc tiêu thụ Copilot Studio credits.</li><li><strong>CTO → Satisfaction:</strong> Metric <strong>Satisfaction</strong> ghi nhận phản hồi của người dùng về chất lượng câu trả lời. CTO dùng nó để phát hiện chất lượng kém và cải tiến agent.</li></ul><h4>Vì sao các phương án khác sai?</h4><ul><li><strong>B. CFO: Effectiveness; CTO: Tool use:</strong> <em>Effectiveness</em> không trực tiếp phục vụ việc phân tích mức sử dụng credit; <em>Tool use</em> đo việc gọi công cụ, không đo phản hồi hài lòng của người dùng.</li><li><strong>C. CFO: Satisfaction; CTO: Effectiveness:</strong> CFO cần dữ liệu sử dụng và trạng thái phiên, không phải phản hồi hài lòng. CTO cần feedback trực tiếp về chất lượng phản hồi.</li><li><strong>D. CFO: Use; CTO: Effectiveness:</strong> Phần CFO đúng, nhưng CTO cần <strong>Satisfaction</strong> để theo dõi đánh giá của người dùng.</li></ul>"
  }
];
