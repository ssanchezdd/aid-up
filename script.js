const year = document.querySelector("#year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const emailAddress = "contact@aid-up.com";

const translations = {
  en: {
    title: "AID-UP | Clinical Engineering for Health Teams",
    description:
      "AID-UP builds clinical engineering services for health teams: VR simulation for health sciences, AI literacy and RAG structuring, digital records management, MCP/FHIR integrations, clinical operations, and general physician services.",
    langButtons: {
      es: "Switch language to Spanish",
      en: "Switch language to English",
      fr: "Switch language to French",
    },
    attrs: {
      ".site-header": { "aria-label": "Primary navigation" },
      ".brand": { "aria-label": "AID-UP home" },
      ".nav-links": { "aria-label": "Page sections" },
      ".language-switcher": { "aria-label": "Language selector" },
      ".hero-image": {
        alt: "Clinician using VR simulation technology in a modern digital health studio",
      },
      ".hero-actions": { "aria-label": "Primary actions" },
      ".market-strip": { "aria-label": "Market focus" },
      ".flow-diagram": {
        "aria-label":
          "Scenario editor to VR session to performance metrics to curriculum update",
      },
      ".rag-map": {
        "aria-label":
          "Validated sources connected to indexing, retrieval, answer guardrails, and human review",
      },
      ".gateway-diagram": {
        "aria-label":
          "Health data sources routed through an MCP gateway to approved AI tools",
      },
      ".records-board": {
        "aria-label":
          "Records board showing intake, consent, validation, and retention",
      },
      ".integration-flow": {
        "aria-label":
          "Institution systems connected through governance and MCP/FHIR to approved health services",
      },
    },
    subjects: {
      ".hero-actions .button-primary": "AID-UP service inquiry",
      ".contact-card:nth-child(1)": "AID-UP hospital integration request",
      ".contact-card:nth-child(2)":
        "AID-UP university simulation partnership",
      ".contact-card:nth-child(3)": "AID-UP enterprise MCP and AI pilot",
      ".contact-button": "AID-UP general physician services",
    },
    textAll: {
      ".project-card dl div:nth-child(1) dt": "Users",
      ".project-card dl div:nth-child(2) dt": "Deliverables",
      ".project-card dl div:nth-child(3) dt": "First pilot",
    },
    html: {
      ".site-footer .footer-layout p:first-child":
        "<strong>AID-UP</strong> | Clinical engineering, health sciences simulation, AI systems, records operations, MCP/FHIR development, clinical operations, and general physician services.",
    },
    text: {
      ".skip-link": "Skip to content",
      ".brand small": "Health engineering",
      ".nav-links a:nth-child(1)": "Services",
      ".nav-links a:nth-child(2)": "Projects",
      ".nav-links a:nth-child(3)": "Integrations",
      ".nav-links a:nth-child(4)": "Contact",
      ".hero .eyebrow": "Clinical engineering for health teams",
      ".hero-lede":
        "We connect health science practice with practical engineering: immersive VR simulation, AI literacy, RAG knowledge systems, digital records operations, MCP/FHIR integrations, clinical operations, and general physician services.",
      ".hero-actions .button-primary span": "Start a pilot",
      ".hero-actions .button-secondary span": "View services",
      ".strip-grid > div:nth-child(1) .strip-kicker": "Market signal",
      ".strip-grid > div:nth-child(1) strong":
        "VR simulation is evolving from novelty into measurable training infrastructure.",
      ".strip-grid > div:nth-child(2) .strip-kicker": "Market signal",
      ".strip-grid > div:nth-child(2) strong":
        "EHR platforms are adding AI, but many teams still need workflow-specific implementation.",
      ".strip-grid > div:nth-child(3) .strip-kicker": "AID-UP angle",
      ".strip-grid > div:nth-child(3) strong":
        "One clinical-engineering partner for prototypes, integrations, training, and care delivery.",
      ".section-intro .section-kicker": "Clear message",
      "#intro-title":
        "Health technology should become a service line, not another disconnected tool.",
      ".intro-layout > p":
        "AID-UP helps clinics, universities, medical educators, and digital health teams turn complex ideas into working systems. We structure the clinical content, build the software pathway, and keep the medical workflow understandable for the people who will actually use it.",
      "#services .section-kicker": "Services",
      "#services-title": "Engineering in health, guided by clinical use.",
      ".service-card:nth-child(1) h3": "VR simulation for health sciences",
      ".service-card:nth-child(1) p":
        "Scenario design for surgery, nursing, therapy, and clinical teams, including operative workflow simulation, educational modules, performance metrics, and faculty implementation guides.",
      ".service-card:nth-child(2) h3": "AI literacy and RAG structuring",
      ".service-card:nth-child(2) p":
        "AI literacy programs, document ingestion, clinical knowledge maps, source governance, answer traceability, and testing that verifies whether the assistant finds and cites the correct source.",
      ".service-card:nth-child(3) h3": "Digital records management",
      ".service-card:nth-child(3) p":
        "Clinical data organization, consent-aware workflows, audit trails, document lifecycle design, and FHIR-ready data models for exchanging patient information between health systems.",
      ".service-card:nth-child(4) h3": "MCP development",
      ".service-card:nth-child(4) p":
        "MCP servers act as controlled bridges between AI assistants and approved tools, records, schedules, documents, and operational systems with role-based permissions and audit logs.",
      ".service-card:nth-child(5) h3": "General physician services",
      ".service-card:nth-child(5) p":
        "General medical consultations, health promotion and prevention, defined follow-up plans, referral coordination, and clinical usability review for patient-facing products or workflows.",
      ".service-card:nth-child(6) h3": "Implementation pilots",
      ".service-card:nth-child(6) p":
        "Small, testable builds that prove the workflow before a team commits to platform-heavy investment.",
      ".service-lines-section .section-kicker": "Expanded clinical lines",
      "#service-lines-title":
        "Practical services for clinicians, institutions, and health educators.",
      ".service-line-card:nth-child(1) span": "AI governance",
      ".service-line-card:nth-child(1) h3": "AI literacy for health teams",
      ".service-line-card:nth-child(1) p":
        "Workshops and implementation guides that explain RAG, hallucination risk, source review, consent, clinical responsibility, and safe daily use of AI tools.",
      ".service-line-card:nth-child(2) span": "Clinical records",
      ".service-line-card:nth-child(2) h3": "Record audits to reduce claim denials",
      ".service-line-card:nth-child(2) p":
        "Review of clinical history completeness, coding support, documentation gaps, billing evidence, and preventable glosa risk before submission.",
      ".service-line-card:nth-child(3) span": "Consent",
      ".service-line-card:nth-child(3) h3": "Consent for AI-assisted care",
      ".service-line-card:nth-child(3) p":
        "Consent language, patient information sheets, access rules, and governance workflows for AI-supported documentation, education, triage, or follow-up.",
      ".service-line-card:nth-child(4) span": "Risk prediction",
      ".service-line-card:nth-child(4) h3": "Attendance-based risk predictors",
      ".service-line-card:nth-child(4) p":
        "Models and dashboards that use appointment attendance, no-shows, follow-up gaps, and care pathway signals to identify patients who need proactive support.",
      ".service-line-card:nth-child(5) span": "Scheduling",
      ".service-line-card:nth-child(5) h3": "AI-mediated agenda management",
      ".service-line-card:nth-child(5) p":
        "Decision rules and assistants for appointment prioritization, reminders, rescheduling, queue visibility, and operational load balancing.",
      ".service-line-card:nth-child(6) span": "Referral network",
      ".service-line-card:nth-child(6) h3": "Semi-automated referral coordination",
      ".service-line-card:nth-child(6) p":
        "Referral status tracking, updated provider availability, CRUE-aware workflows for Colombia, payer requirements, and real-time escalation views.",
      ".service-line-card:nth-child(7) span": "Clinical support",
      ".service-line-card:nth-child(7) h3": "Clinical decision support",
      ".service-line-card:nth-child(7) p":
        "Protocol-based support that helps clinicians find local guidance, required checks, contraindications, follow-up actions, and documentation prompts.",
      ".service-line-card:nth-child(8) span": "Operations",
      ".service-line-card:nth-child(8) h3": "Operational efficiency",
      ".service-line-card:nth-child(8) p":
        "Analysis and redesign of queues, operating room flow, handoffs, preoperative checks, recovery steps, and bottlenecks that affect patient throughput.",
      ".service-line-card:nth-child(9) span": "Patient education",
      ".service-line-card:nth-child(9) h3": "Adaptive educational media",
      ".service-line-card:nth-child(9) p":
        "Infographics, consultation handouts, and educational media adjusted to the person's level of understanding, language, condition, and care plan.",
      ".service-line-card:nth-child(10) span": "Safe surgery",
      ".service-line-card:nth-child(10) h3": "Safe surgery workflows",
      ".service-line-card:nth-child(10) p":
        "From admission to recovery: telephone and in-person pre-anesthetic checks, laterality confirmation, fasting, premedication, patient information, handoff, and post-operative recovery.",
      ".service-line-card:nth-child(11) span": "Teaching RAG",
      ".service-line-card:nth-child(11) h3": "Professor-owned RAG chatbots",
      ".service-line-card:nth-child(11) p":
        "Course chatbots where each professor defines approved sources, scope, evaluation rubrics, and student-facing boundaries.",
      ".service-line-card:nth-child(12) span": "Specialty chatbot",
      ".service-line-card:nth-child(12) h3": "Pediatric urology surgery chatbot",
      ".service-line-card:nth-child(12) p":
        "A specialty assistant for pediatric urologic surgery education, operative preparation, protocol review, and patient-family educational material.",
      "#examples .section-heading .section-kicker": "Graphical examples",
      "#examples-title":
        "Service blueprints and project examples clients can understand at a glance.",
      ".diagram-card:nth-child(1) h3": "VR operative workflow simulation loop",
      ".flow-diagram span:nth-of-type(1)": "Scenario editor",
      ".flow-diagram span:nth-of-type(2)": "VR session",
      ".flow-diagram span:nth-of-type(3)": "Performance metrics",
      ".flow-diagram span:nth-of-type(4)": "Curriculum update",
      ".diagram-card:nth-child(2) h3": "Medical RAG knowledge structure",
      ".rag-map .rag-source:nth-child(1)": "Protocols",
      ".rag-map .rag-source:nth-child(2)": "Records",
      ".rag-map .rag-source:nth-child(3)": "Guidelines",
      ".rag-core": "RAG index",
      ".rag-output": "Guarded answer",
      ".rag-review": "Clinical review",
      ".diagram-card:nth-child(3) h3": "MCP health gateway",
      ".gateway-sources span:nth-child(1)": "EHR",
      ".gateway-sources span:nth-child(2)": "PDF",
      ".gateway-sources span:nth-child(3)": "LMS",
      ".gateway-sources span:nth-child(4)": "API",
      ".gateway-tools span:nth-child(1)": "AI assistant",
      ".gateway-tools span:nth-child(2)": "Audit log",
      ".diagram-card:nth-child(4) h3": "Digital records operations board",
      ".records-board div:nth-child(1) b": "Intake",
      ".records-board div:nth-child(1) span": "Forms and uploads",
      ".records-board div:nth-child(2) b": "Consent",
      ".records-board div:nth-child(2) span": "Access rules",
      ".records-board div:nth-child(3) b": "Validation",
      ".records-board div:nth-child(3) span": "Quality checks",
      ".records-board div:nth-child(4) b": "Retention",
      ".records-board div:nth-child(4) span": "Lifecycle policy",
      ".project-heading .section-kicker": "Detailed example projects",
      ".project-heading h3":
        "Concrete pilots for hospitals, universities, clinics, and health enterprises.",
      ".project-card:nth-child(1) .project-type": "Hospital simulation",
      ".project-card:nth-child(1) h3": "Surgeon VR operative workflow module",
      ".project-card:nth-child(1) p":
        "A procedure-specific module for surgeons and surgical teams to practice the operative workflow, instruments, anatomy, decision points, safety checks, and team communication before entering the operating room.",
      ".project-card:nth-child(1) dl div:nth-child(1) dd":
        "Residents, interns, nurses, faculty supervisors",
      ".project-card:nth-child(1) dl div:nth-child(2) dd":
        "VR workflow scenario, assessment rubric, session analytics, faculty guide",
      ".project-card:nth-child(1) dl div:nth-child(3) dd":
        "One procedure, one cohort, one measurable performance checklist",
      ".project-card:nth-child(2) .project-type": "Clinical AI",
      ".project-card:nth-child(2) h3": "Hospital protocol RAG assistant",
      ".project-card:nth-child(2) p":
        "A retrieval system that answers from approved protocols, care pathways, formularies, discharge instructions, and local policy documents with source references, human clinical review rules, and tests that verify source quality.",
      ".project-card:nth-child(2) dl div:nth-child(1) dd":
        "Clinical quality teams, educators, support staff",
      ".project-card:nth-child(2) dl div:nth-child(2) dd":
        "Document pipeline, source-finding tests, governance map, review dashboard",
      ".project-card:nth-child(2) dl div:nth-child(3) dd":
        "One department knowledge base with evaluated answer quality",
      ".project-card:nth-child(3) .project-type": "University education",
      ".project-card:nth-child(3) h3": "Simulation center digital layer",
      ".project-card:nth-child(3) p":
        "A connected training environment where VR sessions, OSCE-style rubrics, course content, and faculty feedback are organized into a repeatable educational workflow.",
      ".project-card:nth-child(3) dl div:nth-child(1) dd":
        "Health sciences students, professors, simulation coordinators",
      ".project-card:nth-child(3) dl div:nth-child(2) dd":
        "LMS-aligned content, performance dashboard, scenario library structure",
      ".project-card:nth-child(3) dl div:nth-child(3) dd":
        "One course module connected to one performance assessment",
      ".project-card:nth-child(4) .project-type": "Records operations",
      ".project-card:nth-child(4) h3": "Digital clinical records workflow",
      ".project-card:nth-child(4) p":
        "A practical records operation for intake, consent, validation, document storage, retention, and quality review, designed for clinics that need order before automation.",
      ".project-card:nth-child(4) dl div:nth-child(1) dd":
        "Administrative teams, clinicians, compliance leads",
      ".project-card:nth-child(4) dl div:nth-child(2) dd":
        "Records map, metadata model, access rules, audit checklist",
      ".project-card:nth-child(4) dl div:nth-child(3) dd":
        "One patient journey or document family from intake to archive",
      ".project-card:nth-child(5) .project-type": "Enterprise AI integration",
      ".project-card:nth-child(5) h3": "MCP gateway for health tools",
      ".project-card:nth-child(5) p":
        "A controlled integration layer that lets approved AI assistants use sanctioned tools and data sources while preserving role boundaries, logs, and operational oversight.",
      ".project-card:nth-child(5) dl div:nth-child(1) dd":
        "IT teams, product teams, AI governance leads",
      ".project-card:nth-child(5) dl div:nth-child(2) dd":
        "MCP server, tool schema, permission model, monitoring plan",
      ".project-card:nth-child(5) dl div:nth-child(3) dd":
        "One assistant connected to two approved internal systems",
      ".project-card:nth-child(6) .project-type": "Medical service support",
      ".project-card:nth-child(6) h3": "Physician-guided care workflow",
      ".project-card:nth-child(6) p":
        "General physician services paired with defined follow-up plans, education material, referral coordination, and clinical usability review for teams building patient-facing health programs.",
      ".project-card:nth-child(6) dl div:nth-child(1) dd":
        "Patients, care coordinators, health program teams",
      ".project-card:nth-child(6) dl div:nth-child(2) dd":
        "Consultation pathway, follow-up plan template, referral logic",
      ".project-card:nth-child(6) dl div:nth-child(3) dd":
        "One promotion, prevention, or follow-up service workflow",
      ".project-card:nth-child(7) .project-type": "AR and AI surgery",
      ".project-card:nth-child(7) h3": "Pre- and intra-operative AR analysis",
      ".project-card:nth-child(7) p":
        "An augmented reality concept that combines imaging review, anatomical orientation, surgical planning notes, and intra-operative prompts for safer team communication and procedural awareness.",
      ".project-card:nth-child(7) dl div:nth-child(1) dd":
        "Surgeons, anesthesiology, nursing, surgical safety teams",
      ".project-card:nth-child(7) dl div:nth-child(2) dd":
        "AR workflow prototype, AI analysis prompts, safety checklist, evaluation plan",
      ".project-card:nth-child(7) dl div:nth-child(3) dd":
        "One surgical workflow from preoperative review to recovery handoff",
      ".project-card:nth-child(8) .project-type": "Safe surgery operations",
      ".project-card:nth-child(8) h3": "Safe surgery pathway dashboard",
      ".project-card:nth-child(8) p":
        "A semi-automated pathway that follows the patient from admission through recovery, including pre-anesthetic checks, laterality, fasting, premedication, patient data, operating room flow, and post-operative status.",
      ".project-card:nth-child(8) dl div:nth-child(1) dd":
        "Surgical coordinators, anesthesiology, nursing, operating room leaders",
      ".project-card:nth-child(8) dl div:nth-child(2) dd":
        "Checklist map, dashboard prototype, escalation rules, audit indicators",
      ".project-card:nth-child(8) dl div:nth-child(3) dd":
        "One operating room pathway with real-time status tracking",
      "#integrations .section-kicker": "Integration examples",
      "#integrations-title":
        "Built to fit hospital, university, and enterprise environments.",
      ".integration-card:nth-child(1) > span": "Hospital",
      ".integration-card:nth-child(1) h3":
        "Clinical operations and care delivery",
      ".integration-card:nth-child(1) li:nth-child(1)":
        "EHR/FHIR-oriented data exchange: FHIR structures patient information so systems can share records, orders, observations, and referrals with less manual re-entry.",
      ".integration-card:nth-child(1) li:nth-child(2)":
        "Protocol RAG assistants for local policy, guidelines, and discharge content.",
      ".integration-card:nth-child(1) li:nth-child(3)":
        "VR modules for operative workflow simulation, emergency response, onboarding, and health sciences training.",
      ".integration-card:nth-child(1) li:nth-child(4)":
        "Audit trails, access roles, and human review for sensitive AI outputs.",
      ".integration-card:nth-child(2) > span": "University",
      ".integration-card:nth-child(2) h3":
        "Education, research, and simulation centers",
      ".integration-card:nth-child(2) li:nth-child(1)":
        "VR scenario libraries aligned to health sciences course objectives and faculty rubrics.",
      ".integration-card:nth-child(2) li:nth-child(2)":
        "LMS-compatible learning assets, assessments, and cohort progress dashboards.",
      ".integration-card:nth-child(2) li:nth-child(3)":
        "RAG assistants for curriculum, institutional protocols, and research support.",
      ".integration-card:nth-child(2) li:nth-child(4)":
        "Structured feedback loops for OSCEs, workshops, and skills labs.",
      ".integration-card:nth-child(3) > span": "Enterprise",
      ".integration-card:nth-child(3) h3":
        "Governed health AI and workflow automation",
      ".integration-card:nth-child(3) li:nth-child(1)":
        "MCP servers connecting approved tools, APIs, documents, and operational systems so AI assistants can act only inside authorized workflows.",
      ".integration-card:nth-child(3) li:nth-child(2)":
        "Role-based access design for internal assistants and service desks.",
      ".integration-card:nth-child(3) li:nth-child(3)":
        "Records and document lifecycle operations for multi-team compliance needs.",
      ".integration-card:nth-child(3) li:nth-child(4)":
        "Dashboards that track adoption, quality, unresolved cases, and service load.",
      ".integration-flow div:nth-child(1) strong": "Institution systems",
      ".integration-flow div:nth-child(1) span":
        "EHR, LMS, documents, APIs, forms",
      ".integration-flow div:nth-child(3) strong": "Governance layer",
      ".integration-flow div:nth-child(3) span":
        "Consent, roles, audit, review rules",
      ".integration-flow div:nth-child(5) strong": "AID-UP delivery",
      ".integration-flow div:nth-child(5) span":
        "VR, RAG, records, MCP/FHIR, clinical operations, physician services",
      ".section-differentials .section-kicker": "Differentials",
      "#differentials-title":
        "AID-UP focuses on the space between clinical need and technical delivery.",
      ".sticky-heading p:nth-of-type(2)":
        "Large competitors prove the market. AID-UP is shaped for teams that need a precise, adaptable partner close to the workflow.",
      ".differential-list article:nth-child(1) h3":
        "Clinical plus engineering scope",
      ".differential-list article:nth-child(1) p":
        "We can discuss care pathways, documentation, training goals, and software architecture in the same project conversation.",
      ".differential-list article:nth-child(2) h3":
        "Interoperability-first thinking",
      ".differential-list article:nth-child(2) p":
        "Records, RAG pipelines, and MCP servers are designed around approved access, auditability, and standards-oriented data movement.",
      ".differential-list article:nth-child(3) h3":
        "Pilotable, modular work",
      ".differential-list article:nth-child(3) p":
        "Instead of forcing an enterprise platform decision, AID-UP can begin with one simulation, one knowledge base, or one records workflow.",
      ".differential-list article:nth-child(4) h3":
        "Education and operations together",
      ".differential-list article:nth-child(4) p":
        "VR training, AI literacy, digital records, and AI assistants are treated as adoption problems, not just software builds.",
      ".engagement-section .section-kicker": "Engagement path",
      "#engagement-title": "From clinical problem to deployed workflow.",
      ".engagement-steps li:nth-child(1) span": "Assess",
      ".engagement-steps li:nth-child(1) p":
        "Map the clinical use case, risk level, users, data sources, and success measures.",
      ".engagement-steps li:nth-child(2) span": "Prototype",
      ".engagement-steps li:nth-child(2) p":
        "Create the first VR scenario, RAG assistant, records board, or MCP connector.",
      ".engagement-steps li:nth-child(3) span": "Integrate",
      ".engagement-steps li:nth-child(3) p":
        "Connect approved systems, document governance, and prepare training material.",
      ".engagement-steps li:nth-child(4) span": "Operate",
      ".engagement-steps li:nth-child(4) p":
        "Measure adoption, refine content, and support the clinical or educational service line.",
      ".physician-section .section-kicker": "General physician services",
      "#physician-title": "Care services that keep the technology grounded.",
      ".physician-panel p:nth-child(1)":
        "General medical care supports the same mission: clear orientation, a practical follow-up plan, health promotion and prevention, and responsible referral when specialized care is needed. For technology projects, clinical usability review means testing whether the product, content, or workflow fits real patient and provider needs.",
      ".physician-panel .disclaimer":
        "Emergency care is not provided through this website. Use local emergency services for urgent symptoms.",
      ".contact-section .section-kicker": "Contact",
      "#contact-title":
        "Bring one health workflow and we will shape the pilot.",
      ".contact-copy p:nth-of-type(2)":
        "Use one of these contact paths to route the conversation clearly for clinical, educational, technical, or enterprise integration work.",
      ".contact-card:nth-child(1) > span": "Hospitals and clinics",
      ".contact-card:nth-child(1) strong": "Hospital integration request",
      ".contact-card:nth-child(1) small":
        "VR training, records workflows, clinical RAG, service operations",
      ".contact-card:nth-child(2) > span": "Universities",
      ".contact-card:nth-child(2) strong":
        "Simulation and education partnership",
      ".contact-card:nth-child(2) small":
        "VR modules, LMS assets, OSCE rubrics, research support",
      ".contact-card:nth-child(3) > span": "Enterprise teams",
      ".contact-card:nth-child(3) strong": "MCP and governed AI pilot",
      ".contact-card:nth-child(3) small":
        "Tool gateways, RAG operations, access design, audit logs",
      ".contact-button span": "General physician services",
    },
  },
  es: {
    title: "AID-UP | Ingeniería Clínica para Equipos de Salud",
    description:
      "AID-UP desarrolla servicios de ingeniería clínica para equipos de salud: simulación VR en ciencias de la salud, alfabetización en IA y estructuración RAG, gestión de registros digitales, integraciones MCP/FHIR, operación clínica y servicios de medicina general.",
    langButtons: {
      es: "Cambiar idioma a español",
      en: "Cambiar idioma a inglés",
      fr: "Cambiar idioma a francés",
    },
    attrs: {
      ".site-header": { "aria-label": "Navegación principal" },
      ".brand": { "aria-label": "Inicio de AID-UP" },
      ".nav-links": { "aria-label": "Secciones de la página" },
      ".language-switcher": { "aria-label": "Selector de idioma" },
      ".hero-image": {
        alt: "Profesional clínico usando tecnología de simulación VR en un estudio moderno de salud digital",
      },
      ".hero-actions": { "aria-label": "Acciones principales" },
      ".market-strip": { "aria-label": "Enfoque de mercado" },
      ".flow-diagram": {
        "aria-label":
          "Editor de escenario a sesión VR, métricas de rendimiento y actualización curricular",
      },
      ".rag-map": {
        "aria-label":
          "Fuentes validadas conectadas con indexación, recuperación, control de respuestas y revisión humana",
      },
      ".gateway-diagram": {
        "aria-label":
          "Fuentes de datos de salud enrutadas mediante una pasarela MCP hacia herramientas de IA aprobadas",
      },
      ".records-board": {
        "aria-label":
          "Tablero de registros con ingreso, consentimiento, validación y retención",
      },
      ".integration-flow": {
        "aria-label":
          "Sistemas institucionales conectados mediante gobernanza y MCP/FHIR con servicios de salud aprobados",
      },
    },
    subjects: {
      ".hero-actions .button-primary": "Solicitud de servicios AID-UP",
      ".contact-card:nth-child(1)":
        "AID-UP solicitud de integración hospitalaria",
      ".contact-card:nth-child(2)":
        "AID-UP alianza universitaria de simulación",
      ".contact-card:nth-child(3)": "AID-UP piloto empresarial MCP e IA",
      ".contact-button": "AID-UP servicios de medicina general",
    },
    textAll: {
      ".project-card dl div:nth-child(1) dt": "Usuarios",
      ".project-card dl div:nth-child(2) dt": "Entregables",
      ".project-card dl div:nth-child(3) dt": "Primer piloto",
    },
    html: {
      ".site-footer .footer-layout p:first-child":
        "<strong>AID-UP</strong> | Ingeniería clínica, simulación en ciencias de la salud, sistemas de IA, operaciones de registros, desarrollo MCP/FHIR, operación clínica y servicios de medicina general.",
    },
    text: {
      ".skip-link": "Saltar al contenido",
      ".brand small": "Ingeniería en salud",
      ".nav-links a:nth-child(1)": "Servicios",
      ".nav-links a:nth-child(2)": "Proyectos",
      ".nav-links a:nth-child(3)": "Integraciones",
      ".nav-links a:nth-child(4)": "Contacto",
      ".hero .eyebrow": "Ingeniería clínica para equipos de salud",
      ".hero-lede":
        "Conectamos la práctica en ciencias de la salud con ingeniería práctica: simulación inmersiva en VR, alfabetización en IA, sistemas RAG de conocimiento, operaciones de registros digitales, integraciones MCP/FHIR, operación clínica y servicios de medicina general.",
      ".hero-actions .button-primary span": "Iniciar un piloto",
      ".hero-actions .button-secondary span": "Ver servicios",
      ".strip-grid > div:nth-child(1) .strip-kicker": "Señal de mercado",
      ".strip-grid > div:nth-child(1) strong":
        "La simulación VR está evolucionando de novedad a infraestructura medible de entrenamiento.",
      ".strip-grid > div:nth-child(2) .strip-kicker": "Señal de mercado",
      ".strip-grid > div:nth-child(2) strong":
        "Las plataformas de historia clínica electrónica incorporan IA, pero muchos equipos aún necesitan implementación específica para su flujo de trabajo.",
      ".strip-grid > div:nth-child(3) .strip-kicker": "Enfoque AID-UP",
      ".strip-grid > div:nth-child(3) strong":
        "Un socio de ingeniería clínica para prototipos, integraciones, entrenamiento y prestación de servicios.",
      ".section-intro .section-kicker": "Mensaje claro",
      "#intro-title":
        "La tecnología en salud debe convertirse en una línea de servicio, no en otra herramienta desconectada.",
      ".intro-layout > p":
        "AID-UP ayuda a clínicas, universidades, educadores médicos y equipos de salud digital a convertir ideas complejas en sistemas funcionales. Estructuramos el contenido clínico, construimos la ruta de software y mantenemos el flujo médico comprensible para quienes realmente lo usarán.",
      "#services .section-kicker": "Servicios",
      "#services-title": "Ingeniería en salud, guiada por el uso clínico.",
      ".service-card:nth-child(1) h3": "Simulación VR en ciencias de la salud",
      ".service-card:nth-child(1) p":
        "Diseño de escenarios para cirugía, enfermería, terapia y equipos clínicos, incluyendo simulación del flujo de trabajo operatorio, módulos educativos, métricas de rendimiento y guías de implementación docente.",
      ".service-card:nth-child(2) h3": "Alfabetización en IA y estructuración RAG",
      ".service-card:nth-child(2) p":
        "Programas de alfabetización en IA, ingesta documental, mapas de conocimiento clínico, gobernanza de fuentes, trazabilidad de respuestas y pruebas para verificar si el asistente encuentra y cita la fuente correcta.",
      ".service-card:nth-child(3) h3": "Gestión de registros digitales",
      ".service-card:nth-child(3) p":
        "Organización de datos clínicos, flujos con consentimiento, auditorías, diseño del ciclo de vida documental y modelos de datos preparados para FHIR, el estándar que facilita intercambiar información del paciente entre sistemas.",
      ".service-card:nth-child(4) h3": "Desarrollo MCP",
      ".service-card:nth-child(4) p":
        "Los servidores MCP funcionan como puentes controlados entre asistentes de IA y herramientas, registros, agendas, documentos y sistemas operativos aprobados, con permisos por rol y auditoría.",
      ".service-card:nth-child(5) h3": "Servicios de medicina general",
      ".service-card:nth-child(5) p":
        "Consultas médicas generales, promoción y prevención, planes definidos de seguimiento, coordinación de remisiones y revisión de usabilidad clínica para productos o flujos dirigidos a pacientes.",
      ".service-card:nth-child(6) h3": "Pilotos de implementación",
      ".service-card:nth-child(6) p":
        "Construcciones pequeñas y comprobables que validan el flujo antes de comprometerse con una inversión pesada en plataformas.",
      ".service-lines-section .section-kicker": "Líneas clínicas ampliadas",
      "#service-lines-title":
        "Servicios prácticos para clínicos, instituciones y educadores en salud.",
      ".service-line-card:nth-child(1) span": "Gobernanza de IA",
      ".service-line-card:nth-child(1) h3": "Alfabetización en IA para equipos de salud",
      ".service-line-card:nth-child(1) p":
        "Talleres y guías de implementación que explican RAG, riesgo de alucinación, revisión de fuentes, consentimiento, responsabilidad clínica y uso seguro diario de herramientas de IA.",
      ".service-line-card:nth-child(2) span": "Historias clínicas",
      ".service-line-card:nth-child(2) h3": "Auditoría de historias para reducir glosas",
      ".service-line-card:nth-child(2) p":
        "Revisión de completitud de la historia clínica, soporte de codificación, vacíos de documentación, evidencia para facturación y riesgo prevenible de glosas antes de radicar.",
      ".service-line-card:nth-child(3) span": "Consentimiento",
      ".service-line-card:nth-child(3) h3": "Consentimiento para atención asistida por IA",
      ".service-line-card:nth-child(3) p":
        "Lenguaje de consentimiento, material informativo para pacientes, reglas de acceso y flujos de gobernanza para documentación, educación, triaje o seguimiento asistidos por IA.",
      ".service-line-card:nth-child(4) span": "Predicción de riesgo",
      ".service-line-card:nth-child(4) h3": "Predictores de riesgo según asistencia",
      ".service-line-card:nth-child(4) p":
        "Modelos y tableros que usan asistencia a consulta, inasistencias, brechas de seguimiento y señales de ruta de atención para identificar pacientes que requieren apoyo proactivo.",
      ".service-line-card:nth-child(5) span": "Agenda",
      ".service-line-card:nth-child(5) h3": "Manejo de agenda mediado por IA",
      ".service-line-card:nth-child(5) p":
        "Reglas de decisión y asistentes para priorización de citas, recordatorios, reprogramación, visibilidad de colas y balance de carga operativa.",
      ".service-line-card:nth-child(6) span": "Red de remisiones",
      ".service-line-card:nth-child(6) h3": "Coordinación semi-automatizada de remisiones",
      ".service-line-card:nth-child(6) p":
        "Seguimiento del estado de remisiones, disponibilidad actualizada de prestadores, flujos conscientes del CRUE en Colombia, requisitos de pagadores y vistas de escalamiento en tiempo real.",
      ".service-line-card:nth-child(7) span": "Apoyo clínico",
      ".service-line-card:nth-child(7) h3": "Soporte a decisiones clínicas",
      ".service-line-card:nth-child(7) p":
        "Apoyo basado en protocolos para encontrar guías locales, chequeos requeridos, contraindicaciones, acciones de seguimiento y recordatorios de documentación.",
      ".service-line-card:nth-child(8) span": "Operaciones",
      ".service-line-card:nth-child(8) h3": "Eficiencia operacional",
      ".service-line-card:nth-child(8) p":
        "Análisis y rediseño de colas, flujo de quirófano, entregas de turno, chequeos preoperatorios, recuperación y cuellos de botella que afectan el paso del paciente.",
      ".service-line-card:nth-child(9) span": "Educación al paciente",
      ".service-line-card:nth-child(9) h3": "Medios educativos adaptativos",
      ".service-line-card:nth-child(9) p":
        "Infografías, entregables de consulta y medios educativos ajustados al nivel de entendimiento, idioma, condición y plan de atención de cada persona.",
      ".service-line-card:nth-child(10) span": "Cirugía segura",
      ".service-line-card:nth-child(10) h3": "Flujos de cirugía segura",
      ".service-line-card:nth-child(10) p":
        "Desde ingreso hasta recuperación: chequeos preanestésicos telefónicos y presenciales, confirmación de lateralidad, ayuno, premedicación, información del paciente, entrega y recuperación postoperatoria.",
      ".service-line-card:nth-child(11) span": "RAG docente",
      ".service-line-card:nth-child(11) h3": "Chatbots RAG definidos por cada profesor",
      ".service-line-card:nth-child(11) p":
        "Chatbots de curso donde cada profesor define fuentes aprobadas, alcance, rúbricas de evaluación y límites para estudiantes.",
      ".service-line-card:nth-child(12) span": "Chatbot especializado",
      ".service-line-card:nth-child(12) h3": "Chatbot de cirugía urológica pediátrica",
      ".service-line-card:nth-child(12) p":
        "Asistente especializado para educación en cirugía urológica pediátrica, preparación operatoria, revisión de protocolos y material educativo para paciente y familia.",
      "#examples .section-heading .section-kicker": "Ejemplos gráficos",
      "#examples-title":
        "Mapas de servicio y ejemplos de proyecto que los clientes pueden entender de un vistazo.",
      ".diagram-card:nth-child(1) h3": "Ciclo de simulación del flujo operatorio en VR",
      ".flow-diagram span:nth-of-type(1)": "Editor de escenario",
      ".flow-diagram span:nth-of-type(2)": "Sesión VR",
      ".flow-diagram span:nth-of-type(3)": "Métricas de rendimiento",
      ".flow-diagram span:nth-of-type(4)": "Actualización curricular",
      ".diagram-card:nth-child(2) h3": "Estructura de conocimiento médico RAG",
      ".rag-map .rag-source:nth-child(1)": "Protocolos",
      ".rag-map .rag-source:nth-child(2)": "Registros",
      ".rag-map .rag-source:nth-child(3)": "Guías",
      ".rag-core": "Índice RAG",
      ".rag-output": "Respuesta controlada",
      ".rag-review": "Revisión clínica",
      ".diagram-card:nth-child(3) h3": "Pasarela MCP de salud",
      ".gateway-sources span:nth-child(1)": "HCE",
      ".gateway-sources span:nth-child(2)": "PDF",
      ".gateway-sources span:nth-child(3)": "LMS",
      ".gateway-sources span:nth-child(4)": "API",
      ".gateway-tools span:nth-child(1)": "Asistente de IA",
      ".gateway-tools span:nth-child(2)": "Registro de auditoría",
      ".diagram-card:nth-child(4) h3": "Tablero operativo de registros digitales",
      ".records-board div:nth-child(1) b": "Ingreso",
      ".records-board div:nth-child(1) span": "Formularios y cargas",
      ".records-board div:nth-child(2) b": "Consentimiento",
      ".records-board div:nth-child(2) span": "Reglas de acceso",
      ".records-board div:nth-child(3) b": "Validación",
      ".records-board div:nth-child(3) span": "Controles de calidad",
      ".records-board div:nth-child(4) b": "Retención",
      ".records-board div:nth-child(4) span": "Política de ciclo de vida",
      ".project-heading .section-kicker": "Proyectos de ejemplo detallados",
      ".project-heading h3":
        "Pilotos concretos para hospitales, universidades, clínicas y empresas de salud.",
      ".project-card:nth-child(1) .project-type": "Simulación hospitalaria",
      ".project-card:nth-child(1) h3": "Módulo VR para flujo de trabajo operatorio del cirujano",
      ".project-card:nth-child(1) p":
        "Un módulo específico por procedimiento para que cirujanos y equipos quirúrgicos practiquen el flujo de trabajo operatorio, instrumentos, anatomía, puntos de decisión, chequeos de seguridad y comunicación del equipo antes de entrar al quirófano.",
      ".project-card:nth-child(1) dl div:nth-child(1) dd":
        "Residentes, internos, enfermería, supervisores docentes",
      ".project-card:nth-child(1) dl div:nth-child(2) dd":
        "Escenario VR de flujo de trabajo, rúbrica de evaluación, analítica de sesión, guía docente",
      ".project-card:nth-child(1) dl div:nth-child(3) dd":
        "Un procedimiento, una cohorte, una lista medible de rendimiento",
      ".project-card:nth-child(2) .project-type": "IA clínica",
      ".project-card:nth-child(2) h3": "Asistente RAG de protocolos hospitalarios",
      ".project-card:nth-child(2) p":
        "Un sistema RAG que responde desde protocolos aprobados, rutas de atención, formularios, instrucciones de egreso y documentos de política local con fuentes citadas, reglas de revisión clínica humana y pruebas de calidad de fuentes.",
      ".project-card:nth-child(2) dl div:nth-child(1) dd":
        "Equipos de calidad clínica, educadores, personal de soporte",
      ".project-card:nth-child(2) dl div:nth-child(2) dd":
        "Canal documental, pruebas de búsqueda de fuentes, mapa de gobernanza, tablero de revisión",
      ".project-card:nth-child(2) dl div:nth-child(3) dd":
        "Una base de conocimiento departamental con calidad de respuesta evaluada",
      ".project-card:nth-child(3) .project-type": "Educación universitaria",
      ".project-card:nth-child(3) h3": "Capa digital para centro de simulación",
      ".project-card:nth-child(3) p":
        "Un entorno de entrenamiento conectado donde sesiones VR, rúbricas tipo OSCE, contenido de curso y retroalimentación docente se organizan en un flujo educativo repetible.",
      ".project-card:nth-child(3) dl div:nth-child(1) dd":
        "Estudiantes de ciencias de la salud, profesores, coordinadores de simulación",
      ".project-card:nth-child(3) dl div:nth-child(2) dd":
        "Contenido alineado a LMS, tablero de rendimiento, estructura de biblioteca de escenarios",
      ".project-card:nth-child(3) dl div:nth-child(3) dd":
        "Un módulo de curso conectado a una evaluación de rendimiento",
      ".project-card:nth-child(4) .project-type": "Operaciones de registros",
      ".project-card:nth-child(4) h3": "Flujo de registros clínicos digitales",
      ".project-card:nth-child(4) p":
        "Una operación práctica de registros para ingreso, consentimiento, validación, almacenamiento documental, retención y revisión de calidad, diseñada para clínicas que necesitan orden antes de automatizar.",
      ".project-card:nth-child(4) dl div:nth-child(1) dd":
        "Equipos administrativos, clínicos, líderes de cumplimiento",
      ".project-card:nth-child(4) dl div:nth-child(2) dd":
        "Mapa de registros, modelo de metadatos, reglas de acceso, checklist de auditoría",
      ".project-card:nth-child(4) dl div:nth-child(3) dd":
        "Un recorrido de paciente o familia documental desde ingreso hasta archivo",
      ".project-card:nth-child(5) .project-type": "Integración empresarial de IA",
      ".project-card:nth-child(5) h3": "Pasarela MCP para herramientas de salud",
      ".project-card:nth-child(5) p":
        "Una capa de integración controlada que permite a asistentes de IA aprobados usar herramientas y fuentes de datos autorizadas conservando roles, registros y supervisión operativa.",
      ".project-card:nth-child(5) dl div:nth-child(1) dd":
        "Equipos de TI, equipos de producto, líderes de gobernanza de IA",
      ".project-card:nth-child(5) dl div:nth-child(2) dd":
        "Servidor MCP, esquema de herramientas, modelo de permisos, plan de monitoreo",
      ".project-card:nth-child(5) dl div:nth-child(3) dd":
        "Un asistente conectado a dos sistemas internos aprobados",
      ".project-card:nth-child(6) .project-type": "Soporte de servicios médicos",
      ".project-card:nth-child(6) h3": "Flujo de atención guiado por médico",
      ".project-card:nth-child(6) p":
        "Servicios de medicina general combinados con planes definidos de seguimiento, material educativo, coordinación de remisiones y revisión de usabilidad clínica para equipos que construyen programas de salud orientados al paciente.",
      ".project-card:nth-child(6) dl div:nth-child(1) dd":
        "Pacientes, coordinadores de atención, equipos de programas de salud",
      ".project-card:nth-child(6) dl div:nth-child(2) dd":
        "Ruta de consulta, plantilla de plan de seguimiento, lógica de remisión",
      ".project-card:nth-child(6) dl div:nth-child(3) dd":
        "Un flujo de promoción, prevención o seguimiento",
      ".project-card:nth-child(7) .project-type": "AR e IA en cirugía",
      ".project-card:nth-child(7) h3": "Análisis AR pre e intraquirúrgico",
      ".project-card:nth-child(7) p":
        "Un concepto de realidad aumentada que combina revisión de imágenes, orientación anatómica, notas de planeación quirúrgica y alertas intraoperatorias para mejorar la comunicación del equipo y la conciencia del procedimiento.",
      ".project-card:nth-child(7) dl div:nth-child(1) dd":
        "Cirujanos, anestesiología, enfermería, equipos de seguridad quirúrgica",
      ".project-card:nth-child(7) dl div:nth-child(2) dd":
        "Prototipo de flujo AR, prompts de análisis con IA, checklist de seguridad, plan de evaluación",
      ".project-card:nth-child(7) dl div:nth-child(3) dd":
        "Un flujo quirúrgico desde revisión preoperatoria hasta entrega a recuperación",
      ".project-card:nth-child(8) .project-type": "Operación de cirugía segura",
      ".project-card:nth-child(8) h3": "Tablero de ruta de cirugía segura",
      ".project-card:nth-child(8) p":
        "Una ruta semi-automatizada que sigue al paciente desde el ingreso hasta la recuperación, incluyendo chequeos preanestésicos, lateralidad, ayuno, premedicación, datos del paciente, flujo de quirófano y estado postoperatorio.",
      ".project-card:nth-child(8) dl div:nth-child(1) dd":
        "Coordinadores quirúrgicos, anestesiología, enfermería, líderes de quirófano",
      ".project-card:nth-child(8) dl div:nth-child(2) dd":
        "Mapa de checklist, prototipo de tablero, reglas de escalamiento, indicadores de auditoría",
      ".project-card:nth-child(8) dl div:nth-child(3) dd":
        "Una ruta de quirófano con seguimiento de estado en tiempo real",
      "#integrations .section-kicker": "Ejemplos de integración",
      "#integrations-title":
        "Diseñado para adaptarse a entornos hospitalarios, universitarios y empresariales.",
      ".integration-card:nth-child(1) > span": "Hospital",
      ".integration-card:nth-child(1) h3":
        "Operaciones clínicas y prestación de atención",
      ".integration-card:nth-child(1) li:nth-child(1)":
        "Intercambio de datos orientado a HCE/FHIR: FHIR estructura la información del paciente para compartir registros, órdenes, observaciones y remisiones con menos reingreso manual.",
      ".integration-card:nth-child(1) li:nth-child(2)":
        "Asistentes RAG de protocolos para políticas locales, guías y contenido de egreso.",
      ".integration-card:nth-child(1) li:nth-child(3)":
        "Módulos VR para simulación de flujo de trabajo operatorio, respuesta a emergencias, inducción y entrenamiento en ciencias de la salud.",
      ".integration-card:nth-child(1) li:nth-child(4)":
        "Trazas de auditoría, roles de acceso y revisión humana para salidas sensibles de IA.",
      ".integration-card:nth-child(2) > span": "Universidad",
      ".integration-card:nth-child(2) h3":
        "Educación, investigación y centros de simulación",
      ".integration-card:nth-child(2) li:nth-child(1)":
        "Bibliotecas de escenarios VR alineadas con objetivos de cursos de ciencias de la salud y rúbricas docentes.",
      ".integration-card:nth-child(2) li:nth-child(2)":
        "Activos de aprendizaje compatibles con LMS, evaluaciones y tableros de progreso por cohorte.",
      ".integration-card:nth-child(2) li:nth-child(3)":
        "Asistentes RAG para currículo, protocolos institucionales y apoyo a investigación.",
      ".integration-card:nth-child(2) li:nth-child(4)":
        "Bucles estructurados de retroalimentación para OSCE, talleres y laboratorios de habilidades.",
      ".integration-card:nth-child(3) > span": "Empresa",
      ".integration-card:nth-child(3) h3":
        "IA en salud gobernada y automatización de flujos",
      ".integration-card:nth-child(3) li:nth-child(1)":
        "Servidores MCP que conectan herramientas, APIs, documentos y sistemas operativos aprobados para que los asistentes de IA actúen solo dentro de flujos autorizados.",
      ".integration-card:nth-child(3) li:nth-child(2)":
        "Diseño de acceso por roles para asistentes internos y mesas de servicio.",
      ".integration-card:nth-child(3) li:nth-child(3)":
        "Operaciones de registros y ciclo de vida documental para necesidades de cumplimiento multiequipo.",
      ".integration-card:nth-child(3) li:nth-child(4)":
        "Tableros que siguen adopción, calidad, casos sin resolver y carga del servicio.",
      ".integration-flow div:nth-child(1) strong": "Sistemas institucionales",
      ".integration-flow div:nth-child(1) span":
        "HCE, LMS, documentos, APIs, formularios",
      ".integration-flow div:nth-child(3) strong": "Capa de gobernanza",
      ".integration-flow div:nth-child(3) span":
        "Consentimiento, roles, auditoría, reglas de revisión",
      ".integration-flow div:nth-child(5) strong": "Entrega AID-UP",
      ".integration-flow div:nth-child(5) span":
        "VR, RAG, registros, MCP/FHIR, operación clínica, servicios médicos",
      ".section-differentials .section-kicker": "Diferenciales",
      "#differentials-title":
        "AID-UP se enfoca en el espacio entre la necesidad clínica y la entrega técnica.",
      ".sticky-heading p:nth-of-type(2)":
        "Los grandes competidores validan el mercado. AID-UP está pensado para equipos que necesitan un socio preciso y adaptable, cercano al flujo real de trabajo.",
      ".differential-list article:nth-child(1) h3":
        "Alcance clínico más ingeniería",
      ".differential-list article:nth-child(1) p":
        "Podemos conversar sobre rutas de atención, documentación, objetivos de entrenamiento y arquitectura de software en la misma conversación de proyecto.",
      ".differential-list article:nth-child(2) h3":
        "Pensamiento orientado a interoperabilidad",
      ".differential-list article:nth-child(2) p":
        "Registros, pipelines RAG y servidores MCP se diseñan alrededor de acceso aprobado, auditabilidad y movimiento de datos orientado a estándares.",
      ".differential-list article:nth-child(3) h3":
        "Trabajo modular y pilotable",
      ".differential-list article:nth-child(3) p":
        "En lugar de forzar una decisión de plataforma empresarial, AID-UP puede comenzar con una simulación, una base de conocimiento o un flujo de registros.",
      ".differential-list article:nth-child(4) h3":
        "Educación y operación juntas",
      ".differential-list article:nth-child(4) p":
        "La formación VR, la alfabetización en IA, los registros digitales y los asistentes de IA se tratan como problemas de adopción, no solo como desarrollos de software.",
      ".engagement-section .section-kicker": "Ruta de trabajo",
      "#engagement-title":
        "Desde el reto clínico hasta el flujo de trabajo mejorado.",
      ".engagement-steps li:nth-child(1) span": "Evaluar",
      ".engagement-steps li:nth-child(1) p":
        "Mapear el caso clínico, nivel de riesgo, usuarios, fuentes de datos y medidas de éxito.",
      ".engagement-steps li:nth-child(2) span": "Prototipar",
      ".engagement-steps li:nth-child(2) p":
        "Crear el primer escenario VR, asistente RAG, tablero de registros o conector MCP.",
      ".engagement-steps li:nth-child(3) span": "Integrar",
      ".engagement-steps li:nth-child(3) p":
        "Conectar sistemas aprobados, documentar gobernanza y preparar material de entrenamiento.",
      ".engagement-steps li:nth-child(4) span": "Operar",
      ".engagement-steps li:nth-child(4) p":
        "Medir adopción, refinar contenido y apoyar la línea de servicio clínica o educativa.",
      ".physician-section .section-kicker": "Servicios de medicina general",
      "#physician-title":
        "Atención que aprovecha lo mejor de la tecnología en el día a día.",
      ".physician-panel p:nth-child(1)":
        "La atención médica general apoya la misma misión: orientación clara, plan práctico de seguimiento, promoción y prevención, y remisión responsable cuando se requiere atención especializada. Para proyectos tecnológicos, la revisión de usabilidad clínica significa probar si el producto, contenido o flujo se ajusta a necesidades reales de pacientes y prestadores.",
      ".physician-panel .disclaimer":
        "La atención de emergencias no se presta por medio de este sitio web. Use los servicios locales de emergencia ante síntomas urgentes.",
      ".contact-section .section-kicker": "Contacto",
      "#contact-title":
        "Compártenos tu flujo de trabajo y diseñaremos estrategias para optimizarlo.",
      ".contact-copy p:nth-of-type(2)":
        "Use una de estas rutas de contacto para orientar de manera específica la conversación clínica, educativa, técnica o de integración empresarial.",
      ".contact-card:nth-child(1) > span": "Hospitales y clínicas",
      ".contact-card:nth-child(1) strong":
        "Solicitud de integración hospitalaria",
      ".contact-card:nth-child(1) small":
        "Entrenamiento VR, flujos de registros, RAG clínico, operaciones de servicio",
      ".contact-card:nth-child(2) > span": "Universidades",
      ".contact-card:nth-child(2) strong":
        "Alianza de simulación y educación",
      ".contact-card:nth-child(2) small":
        "Módulos VR, activos LMS, rúbricas OSCE, apoyo a investigación",
      ".contact-card:nth-child(3) > span": "Equipos empresariales",
      ".contact-card:nth-child(3) strong": "Piloto MCP e IA gobernada",
      ".contact-card:nth-child(3) small":
        "Pasarelas de herramientas, operaciones RAG, diseño de acceso, auditorías",
      ".contact-button span": "Servicios de medicina general",
    },
  },
  fr: {
    title: "AID-UP | Ingénierie Clinique pour les Équipes de Santé",
    description:
      "AID-UP conçoit des services d'ingénierie clinique pour les équipes de santé : simulation VR pour les sciences de la santé, littératie en IA et structuration RAG, gestion des dossiers numériques, intégrations MCP/FHIR, opérations cliniques et services de médecine générale.",
    langButtons: {
      es: "Passer le site en espagnol",
      en: "Passer le site en anglais",
      fr: "Passer le site en français",
    },
    attrs: {
      ".site-header": { "aria-label": "Navigation principale" },
      ".brand": { "aria-label": "Accueil AID-UP" },
      ".nav-links": { "aria-label": "Sections de la page" },
      ".language-switcher": { "aria-label": "Sélecteur de langue" },
      ".hero-image": {
        alt: "Professionnel clinique utilisant une technologie de simulation VR dans un studio moderne de santé numérique",
      },
      ".hero-actions": { "aria-label": "Actions principales" },
      ".market-strip": { "aria-label": "Orientation marché" },
      ".flow-diagram": {
        "aria-label":
          "Éditeur de scénario vers session VR, métriques de performance et mise à jour du curriculum",
      },
      ".rag-map": {
        "aria-label":
          "Sources validées connectées à l'indexation, à la récupération, aux garde-fous de réponse et à la revue humaine",
      },
      ".gateway-diagram": {
        "aria-label":
          "Sources de données de santé routées par une passerelle MCP vers des outils d'IA approuvés",
      },
      ".records-board": {
        "aria-label":
          "Tableau des dossiers montrant l'admission, le consentement, la validation et la conservation",
      },
      ".integration-flow": {
        "aria-label":
          "Systèmes institutionnels connectés par gouvernance et MCP/FHIR à des services de santé approuvés",
      },
    },
    subjects: {
      ".hero-actions .button-primary": "Demande de service AID-UP",
      ".contact-card:nth-child(1)":
        "AID-UP demande d'intégration hospitalière",
      ".contact-card:nth-child(2)":
        "AID-UP partenariat universitaire de simulation",
      ".contact-card:nth-child(3)": "AID-UP pilote entreprise MCP et IA",
      ".contact-button": "AID-UP services de médecine générale",
    },
    textAll: {
      ".project-card dl div:nth-child(1) dt": "Utilisateurs",
      ".project-card dl div:nth-child(2) dt": "Livrables",
      ".project-card dl div:nth-child(3) dt": "Premier pilote",
    },
    html: {
      ".site-footer .footer-layout p:first-child":
        "<strong>AID-UP</strong> | Ingénierie clinique, simulation en sciences de la santé, systèmes d'IA, opérations de dossiers, développement MCP/FHIR, opérations cliniques et services de médecine générale.",
    },
    text: {
      ".skip-link": "Aller au contenu",
      ".brand small": "Ingénierie en santé",
      ".nav-links a:nth-child(1)": "Services",
      ".nav-links a:nth-child(2)": "Projets",
      ".nav-links a:nth-child(3)": "Intégrations",
      ".nav-links a:nth-child(4)": "Contact",
      ".hero .eyebrow": "Ingénierie clinique pour les équipes de santé",
      ".hero-lede":
        "Nous relions la pratique en sciences de la santé à une ingénierie concrète : simulation immersive en VR, littératie en IA, systèmes de connaissance RAG, opérations de dossiers numériques, intégrations MCP/FHIR, opérations cliniques et services de médecine générale.",
      ".hero-actions .button-primary span": "Démarrer un pilote",
      ".hero-actions .button-secondary span": "Voir les services",
      ".strip-grid > div:nth-child(1) .strip-kicker": "Signal du marché",
      ".strip-grid > div:nth-child(1) strong":
        "La simulation VR évolue de la nouveauté vers une infrastructure de formation mesurable.",
      ".strip-grid > div:nth-child(2) .strip-kicker": "Signal du marché",
      ".strip-grid > div:nth-child(2) strong":
        "Les plateformes de dossier médical électronique ajoutent de l'IA, mais de nombreuses équipes ont encore besoin d'une mise en œuvre adaptée à leurs flux.",
      ".strip-grid > div:nth-child(3) .strip-kicker": "Angle AID-UP",
      ".strip-grid > div:nth-child(3) strong":
        "Un partenaire d'ingénierie clinique pour les prototypes, les intégrations, la formation et la prestation de soins.",
      ".section-intro .section-kicker": "Message clair",
      "#intro-title":
        "La technologie de santé doit devenir une ligne de service, pas un outil déconnecté de plus.",
      ".intro-layout > p":
        "AID-UP aide les cliniques, universités, enseignants médicaux et équipes de santé numérique à transformer des idées complexes en systèmes opérationnels. Nous structurons le contenu clinique, construisons le parcours logiciel et gardons le flux médical compréhensible pour celles et ceux qui l'utiliseront vraiment.",
      "#services .section-kicker": "Services",
      "#services-title":
        "Ingénierie en santé, guidée par l'usage clinique.",
      ".service-card:nth-child(1) h3": "Simulation VR pour les sciences de la santé",
      ".service-card:nth-child(1) p":
        "Conception de scénarios pour chirurgie, soins infirmiers, thérapie et équipes cliniques, avec simulation du flux opératoire, modules pédagogiques, métriques de performance et guides de mise en œuvre pour les enseignants.",
      ".service-card:nth-child(2) h3": "Littératie en IA et structuration RAG",
      ".service-card:nth-child(2) p":
        "Programmes de littératie en IA, ingestion documentaire, cartes de connaissance clinique, gouvernance des sources, traçabilité des réponses et tests vérifiant si l'assistant trouve et cite la bonne source.",
      ".service-card:nth-child(3) h3": "Gestion des dossiers numériques",
      ".service-card:nth-child(3) p":
        "Organisation des données cliniques, flux avec consentement, pistes d'audit, cycle de vie documentaire et modèles prêts pour FHIR, le standard facilitant l'échange d'informations patient entre systèmes.",
      ".service-card:nth-child(4) h3": "Développement MCP",
      ".service-card:nth-child(4) p":
        "Les serveurs MCP agissent comme des ponts contrôlés entre assistants IA et outils, dossiers, agendas, documents et systèmes opérationnels approuvés, avec permissions par rôle et journaux d'audit.",
      ".service-card:nth-child(5) h3": "Services de médecine générale",
      ".service-card:nth-child(5) p":
        "Consultations de médecine générale, promotion et prévention, plans de suivi définis, coordination des références et revue d'utilisabilité clinique pour produits ou flux destinés aux patients.",
      ".service-card:nth-child(6) h3": "Pilotes de mise en œuvre",
      ".service-card:nth-child(6) p":
        "Des réalisations petites et testables qui valident le flux avant d'engager un investissement lourd dans une plateforme.",
      ".service-lines-section .section-kicker": "Lignes cliniques élargies",
      "#service-lines-title":
        "Des services pratiques pour cliniciens, institutions et enseignants en santé.",
      ".service-line-card:nth-child(1) span": "Gouvernance IA",
      ".service-line-card:nth-child(1) h3": "Littératie en IA pour équipes de santé",
      ".service-line-card:nth-child(1) p":
        "Ateliers et guides de mise en œuvre expliquant RAG, risque d'hallucination, revue des sources, consentement, responsabilité clinique et usage quotidien sûr des outils IA.",
      ".service-line-card:nth-child(2) span": "Dossiers cliniques",
      ".service-line-card:nth-child(2) h3": "Audit des dossiers pour réduire les rejets",
      ".service-line-card:nth-child(2) p":
        "Revue de complétude du dossier clinique, support de codage, lacunes documentaires, preuves de facturation et risque évitable de glosa avant soumission.",
      ".service-line-card:nth-child(3) span": "Consentement",
      ".service-line-card:nth-child(3) h3": "Consentement pour soins assistés par IA",
      ".service-line-card:nth-child(3) p":
        "Texte de consentement, fiches patient, règles d'accès et flux de gouvernance pour documentation, éducation, triage ou suivi assistés par IA.",
      ".service-line-card:nth-child(4) span": "Prédiction de risque",
      ".service-line-card:nth-child(4) h3": "Prédicteurs de risque selon l'assiduité",
      ".service-line-card:nth-child(4) p":
        "Modèles et tableaux utilisant présence aux rendez-vous, absences, ruptures de suivi et signaux du parcours de soins pour identifier les patients nécessitant un soutien proactif.",
      ".service-line-card:nth-child(5) span": "Agenda",
      ".service-line-card:nth-child(5) h3": "Gestion d'agenda médiée par IA",
      ".service-line-card:nth-child(5) p":
        "Règles de décision et assistants pour priorisation des rendez-vous, rappels, reprogrammation, visibilité des files et équilibrage de charge opérationnelle.",
      ".service-line-card:nth-child(6) span": "Réseau de références",
      ".service-line-card:nth-child(6) h3": "Coordination semi-automatisée des références",
      ".service-line-card:nth-child(6) p":
        "Suivi du statut des références, disponibilité actualisée des prestataires, flux compatibles CRUE pour la Colombie, exigences des payeurs et vues d'escalade en temps réel.",
      ".service-line-card:nth-child(7) span": "Soutien clinique",
      ".service-line-card:nth-child(7) h3": "Aide à la décision clinique",
      ".service-line-card:nth-child(7) p":
        "Soutien basé sur protocoles pour trouver recommandations locales, contrôles requis, contre-indications, actions de suivi et rappels documentaires.",
      ".service-line-card:nth-child(8) span": "Opérations",
      ".service-line-card:nth-child(8) h3": "Efficacité opérationnelle",
      ".service-line-card:nth-child(8) p":
        "Analyse et refonte des files, flux de bloc opératoire, transmissions, contrôles préopératoires, récupération et goulots qui affectent le parcours patient.",
      ".service-line-card:nth-child(9) span": "Éducation patient",
      ".service-line-card:nth-child(9) h3": "Supports éducatifs adaptatifs",
      ".service-line-card:nth-child(9) p":
        "Infographies, supports de consultation et médias éducatifs adaptés au niveau de compréhension, à la langue, à la condition et au plan de soins de chaque personne.",
      ".service-line-card:nth-child(10) span": "Chirurgie sûre",
      ".service-line-card:nth-child(10) h3": "Flux de chirurgie sûre",
      ".service-line-card:nth-child(10) p":
        "De l'admission à la récupération : contrôles préanesthésiques téléphoniques et présentiels, confirmation de latéralité, jeûne, prémédication, information patient, transmission et récupération postopératoire.",
      ".service-line-card:nth-child(11) span": "RAG enseignant",
      ".service-line-card:nth-child(11) h3": "Chatbots RAG définis par professeur",
      ".service-line-card:nth-child(11) p":
        "Chatbots de cours où chaque professeur définit sources approuvées, périmètre, grilles d'évaluation et limites pour les étudiants.",
      ".service-line-card:nth-child(12) span": "Chatbot spécialisé",
      ".service-line-card:nth-child(12) h3": "Chatbot de chirurgie urologique pédiatrique",
      ".service-line-card:nth-child(12) p":
        "Assistant spécialisé pour l'éducation en chirurgie urologique pédiatrique, la préparation opératoire, la revue de protocoles et les supports patient-famille.",
      "#examples .section-heading .section-kicker": "Exemples graphiques",
      "#examples-title":
        "Des plans de service et exemples de projets compréhensibles en un coup d'œil.",
      ".diagram-card:nth-child(1) h3": "Boucle de simulation du flux opératoire en VR",
      ".flow-diagram span:nth-of-type(1)": "Éditeur de scénario",
      ".flow-diagram span:nth-of-type(2)": "Session VR",
      ".flow-diagram span:nth-of-type(3)": "Métriques de performance",
      ".flow-diagram span:nth-of-type(4)": "Mise à jour pédagogique",
      ".diagram-card:nth-child(2) h3": "Structure de connaissance médicale RAG",
      ".rag-map .rag-source:nth-child(1)": "Protocoles",
      ".rag-map .rag-source:nth-child(2)": "Dossiers",
      ".rag-map .rag-source:nth-child(3)": "Guides",
      ".rag-core": "Index RAG",
      ".rag-output": "Réponse contrôlée",
      ".rag-review": "Revue clinique",
      ".diagram-card:nth-child(3) h3": "Passerelle MCP santé",
      ".gateway-sources span:nth-child(1)": "DME",
      ".gateway-sources span:nth-child(2)": "PDF",
      ".gateway-sources span:nth-child(3)": "LMS",
      ".gateway-sources span:nth-child(4)": "API",
      ".gateway-tools span:nth-child(1)": "Assistant IA",
      ".gateway-tools span:nth-child(2)": "Journal d'audit",
      ".diagram-card:nth-child(4) h3": "Tableau d'opérations des dossiers numériques",
      ".records-board div:nth-child(1) b": "Admission",
      ".records-board div:nth-child(1) span": "Formulaires et dépôts",
      ".records-board div:nth-child(2) b": "Consentement",
      ".records-board div:nth-child(2) span": "Règles d'accès",
      ".records-board div:nth-child(3) b": "Validation",
      ".records-board div:nth-child(3) span": "Contrôles qualité",
      ".records-board div:nth-child(4) b": "Conservation",
      ".records-board div:nth-child(4) span": "Politique de cycle de vie",
      ".project-heading .section-kicker": "Projets exemples détaillés",
      ".project-heading h3":
        "Des pilotes concrets pour hôpitaux, universités, cliniques et entreprises de santé.",
      ".project-card:nth-child(1) .project-type": "Simulation hospitalière",
      ".project-card:nth-child(1) h3":
        "Module VR du flux opératoire pour chirurgien",
      ".project-card:nth-child(1) p":
        "Un module spécifique à une procédure permettant aux chirurgiens et équipes chirurgicales de pratiquer le flux opératoire, les instruments, l'anatomie, les décisions, les contrôles de sécurité et la communication d'équipe avant le bloc opératoire.",
      ".project-card:nth-child(1) dl div:nth-child(1) dd":
        "Résidents, internes, infirmiers, superviseurs enseignants",
      ".project-card:nth-child(1) dl div:nth-child(2) dd":
        "Scénario VR de flux de travail, grille d'évaluation, analytique de session, guide enseignant",
      ".project-card:nth-child(1) dl div:nth-child(3) dd":
        "Une procédure, une cohorte, une checklist de performance mesurable",
      ".project-card:nth-child(2) .project-type": "IA clinique",
      ".project-card:nth-child(2) h3":
        "Assistant RAG de protocoles hospitaliers",
      ".project-card:nth-child(2) p":
        "Un système RAG qui répond à partir de protocoles approuvés, parcours de soins, formulaires, consignes de sortie et politiques locales, avec sources citées, règles de revue clinique humaine et tests de qualité des sources.",
      ".project-card:nth-child(2) dl div:nth-child(1) dd":
        "Équipes qualité clinique, enseignants, personnel de support",
      ".project-card:nth-child(2) dl div:nth-child(2) dd":
        "Pipeline documentaire, tests de recherche des sources, carte de gouvernance, tableau de revue",
      ".project-card:nth-child(2) dl div:nth-child(3) dd":
        "Une base de connaissance départementale avec qualité de réponse évaluée",
      ".project-card:nth-child(3) .project-type": "Éducation universitaire",
      ".project-card:nth-child(3) h3":
        "Couche numérique pour centre de simulation",
      ".project-card:nth-child(3) p":
        "Un environnement de formation connecté où sessions VR, grilles de type OSCE, contenus de cours et retours enseignants sont organisés dans un flux pédagogique reproductible.",
      ".project-card:nth-child(3) dl div:nth-child(1) dd":
        "Étudiants en sciences de la santé, professeurs, coordinateurs de simulation",
      ".project-card:nth-child(3) dl div:nth-child(2) dd":
        "Contenu aligné LMS, tableau de performance, structure de bibliothèque de scénarios",
      ".project-card:nth-child(3) dl div:nth-child(3) dd":
        "Un module de cours connecté à une évaluation de performance",
      ".project-card:nth-child(4) .project-type": "Opérations de dossiers",
      ".project-card:nth-child(4) h3":
        "Flux de dossiers cliniques numériques",
      ".project-card:nth-child(4) p":
        "Une opération pratique de dossiers pour admission, consentement, validation, stockage documentaire, conservation et revue qualité, conçue pour les cliniques qui ont besoin d'ordre avant l'automatisation.",
      ".project-card:nth-child(4) dl div:nth-child(1) dd":
        "Équipes administratives, cliniciens, responsables conformité",
      ".project-card:nth-child(4) dl div:nth-child(2) dd":
        "Carte des dossiers, modèle de métadonnées, règles d'accès, checklist d'audit",
      ".project-card:nth-child(4) dl div:nth-child(3) dd":
        "Un parcours patient ou une famille documentaire de l'admission à l'archive",
      ".project-card:nth-child(5) .project-type":
        "Intégration IA en entreprise",
      ".project-card:nth-child(5) h3":
        "Passerelle MCP pour outils de santé",
      ".project-card:nth-child(5) p":
        "Une couche d'intégration contrôlée qui permet aux assistants IA approuvés d'utiliser des outils et sources autorisés tout en préservant les rôles, journaux et supervisons opérationnelles.",
      ".project-card:nth-child(5) dl div:nth-child(1) dd":
        "Équipes IT, équipes produit, responsables gouvernance IA",
      ".project-card:nth-child(5) dl div:nth-child(2) dd":
        "Serveur MCP, schéma d'outils, modèle de permissions, plan de supervision",
      ".project-card:nth-child(5) dl div:nth-child(3) dd":
        "Un assistant connecté à deux systèmes internes approuvés",
      ".project-card:nth-child(6) .project-type": "Support de service médical",
      ".project-card:nth-child(6) h3":
        "Flux de soins guidé par médecin",
      ".project-card:nth-child(6) p":
        "Des services de médecine générale associés à des plans de suivi définis, aux supports éducatifs, à la coordination des références et à la revue d'utilisabilité clinique pour les équipes qui construisent des programmes de santé orientés patient.",
      ".project-card:nth-child(6) dl div:nth-child(1) dd":
        "Patients, coordinateurs de soins, équipes de programmes de santé",
      ".project-card:nth-child(6) dl div:nth-child(2) dd":
        "Parcours de consultation, modèle de plan de suivi, logique de référence",
      ".project-card:nth-child(6) dl div:nth-child(3) dd":
        "Un flux de promotion, prévention ou suivi",
      ".project-card:nth-child(7) .project-type": "AR et IA en chirurgie",
      ".project-card:nth-child(7) h3": "Analyse AR pré- et peropératoire",
      ".project-card:nth-child(7) p":
        "Un concept de réalité augmentée combinant revue d'imagerie, orientation anatomique, notes de planification chirurgicale et alertes peropératoires pour améliorer la communication d'équipe et la conscience procédurale.",
      ".project-card:nth-child(7) dl div:nth-child(1) dd":
        "Chirurgiens, anesthésiologie, soins infirmiers, équipes de sécurité chirurgicale",
      ".project-card:nth-child(7) dl div:nth-child(2) dd":
        "Prototype de flux AR, prompts d'analyse IA, checklist de sécurité, plan d'évaluation",
      ".project-card:nth-child(7) dl div:nth-child(3) dd":
        "Un flux chirurgical de la revue préopératoire à la transmission en récupération",
      ".project-card:nth-child(8) .project-type": "Opérations de chirurgie sûre",
      ".project-card:nth-child(8) h3": "Tableau du parcours de chirurgie sûre",
      ".project-card:nth-child(8) p":
        "Un parcours semi-automatisé suivant le patient de l'admission à la récupération, incluant contrôles préanesthésiques, latéralité, jeûne, prémédication, données patient, flux de bloc et statut postopératoire.",
      ".project-card:nth-child(8) dl div:nth-child(1) dd":
        "Coordinateurs chirurgicaux, anesthésiologie, soins infirmiers, responsables de bloc",
      ".project-card:nth-child(8) dl div:nth-child(2) dd":
        "Carte de checklist, prototype de tableau, règles d'escalade, indicateurs d'audit",
      ".project-card:nth-child(8) dl div:nth-child(3) dd":
        "Un parcours de bloc opératoire avec suivi de statut en temps réel",
      "#integrations .section-kicker": "Exemples d'intégration",
      "#integrations-title":
        "Conçu pour s'adapter aux environnements hospitaliers, universitaires et d'entreprise.",
      ".integration-card:nth-child(1) > span": "Hôpital",
      ".integration-card:nth-child(1) h3":
        "Opérations cliniques et prestation de soins",
      ".integration-card:nth-child(1) li:nth-child(1)":
        "Échange de données orienté DME/FHIR : FHIR structure l'information patient pour partager dossiers, ordres, observations et références avec moins de ressaisie manuelle.",
      ".integration-card:nth-child(1) li:nth-child(2)":
        "Assistants RAG de protocoles pour politiques locales, guides et contenus de sortie.",
      ".integration-card:nth-child(1) li:nth-child(3)":
        "Modules VR pour simulation du flux opératoire, réponse d'urgence, intégration et formation en sciences de la santé.",
      ".integration-card:nth-child(1) li:nth-child(4)":
        "Pistes d'audit, rôles d'accès et revue humaine pour les sorties IA sensibles.",
      ".integration-card:nth-child(2) > span": "Université",
      ".integration-card:nth-child(2) h3":
        "Éducation, recherche et centres de simulation",
      ".integration-card:nth-child(2) li:nth-child(1)":
        "Bibliothèques de scénarios VR alignées sur les objectifs des cours de sciences de la santé et les grilles enseignants.",
      ".integration-card:nth-child(2) li:nth-child(2)":
        "Ressources compatibles LMS, évaluations et tableaux de progression par cohorte.",
      ".integration-card:nth-child(2) li:nth-child(3)":
        "Assistants RAG pour curriculum, protocoles institutionnels et soutien à la recherche.",
      ".integration-card:nth-child(2) li:nth-child(4)":
        "Boucles de retour structurées pour OSCE, ateliers et laboratoires de compétences.",
      ".integration-card:nth-child(3) > span": "Entreprise",
      ".integration-card:nth-child(3) h3":
        "IA santé gouvernée et automatisation des flux",
      ".integration-card:nth-child(3) li:nth-child(1)":
        "Serveurs MCP connectant outils, API, documents et systèmes opérationnels approuvés afin que les assistants IA agissent uniquement dans des flux autorisés.",
      ".integration-card:nth-child(3) li:nth-child(2)":
        "Conception d'accès par rôle pour assistants internes et services support.",
      ".integration-card:nth-child(3) li:nth-child(3)":
        "Opérations de dossiers et cycle de vie documentaire pour besoins de conformité multi-équipes.",
      ".integration-card:nth-child(3) li:nth-child(4)":
        "Tableaux de bord suivant adoption, qualité, cas non résolus et charge de service.",
      ".integration-flow div:nth-child(1) strong": "Systèmes institutionnels",
      ".integration-flow div:nth-child(1) span":
        "DME, LMS, documents, API, formulaires",
      ".integration-flow div:nth-child(3) strong": "Couche de gouvernance",
      ".integration-flow div:nth-child(3) span":
        "Consentement, rôles, audit, règles de revue",
      ".integration-flow div:nth-child(5) strong": "Livraison AID-UP",
      ".integration-flow div:nth-child(5) span":
        "VR, RAG, dossiers, MCP/FHIR, opérations cliniques, services médicaux",
      ".section-differentials .section-kicker": "Différentiels",
      "#differentials-title":
        "AID-UP se concentre sur l'espace entre besoin clinique et livraison technique.",
      ".sticky-heading p:nth-of-type(2)":
        "Les grands concurrents valident le marché. AID-UP est conçu pour les équipes qui ont besoin d'un partenaire précis, adaptable et proche du flux de travail.",
      ".differential-list article:nth-child(1) h3":
        "Portée clinique et ingénierie",
      ".differential-list article:nth-child(1) p":
        "Nous pouvons discuter parcours de soins, documentation, objectifs de formation et architecture logicielle dans la même conversation de projet.",
      ".differential-list article:nth-child(2) h3":
        "Pensée orientée interopérabilité",
      ".differential-list article:nth-child(2) p":
        "Dossiers, pipelines RAG et serveurs MCP sont conçus autour de l'accès approuvé, de l'auditabilité et du mouvement de données orienté standards.",
      ".differential-list article:nth-child(3) h3":
        "Travail modulaire et pilotable",
      ".differential-list article:nth-child(3) p":
        "Au lieu d'imposer une décision de plateforme d'entreprise, AID-UP peut commencer par une simulation, une base de connaissance ou un flux de dossiers.",
      ".differential-list article:nth-child(4) h3":
        "Éducation et opérations ensemble",
      ".differential-list article:nth-child(4) p":
        "La formation VR, la littératie en IA, les dossiers numériques et les assistants IA sont traités comme des problèmes d'adoption, pas seulement comme du logiciel.",
      ".engagement-section .section-kicker": "Parcours d'engagement",
      "#engagement-title": "Du problème clinique au flux déployé.",
      ".engagement-steps li:nth-child(1) span": "Évaluer",
      ".engagement-steps li:nth-child(1) p":
        "Cartographier le cas clinique, le niveau de risque, les utilisateurs, les sources de données et les mesures de réussite.",
      ".engagement-steps li:nth-child(2) span": "Prototyper",
      ".engagement-steps li:nth-child(2) p":
        "Créer le premier scénario VR, assistant RAG, tableau de dossiers ou connecteur MCP.",
      ".engagement-steps li:nth-child(3) span": "Intégrer",
      ".engagement-steps li:nth-child(3) p":
        "Connecter les systèmes approuvés, documenter la gouvernance et préparer les supports de formation.",
      ".engagement-steps li:nth-child(4) span": "Opérer",
      ".engagement-steps li:nth-child(4) p":
        "Mesurer l'adoption, affiner le contenu et soutenir la ligne de service clinique ou pédagogique.",
      ".physician-section .section-kicker": "Services de médecine générale",
      "#physician-title":
        "Des services de soins qui gardent la technologie ancrée.",
      ".physician-panel p:nth-child(1)":
        "La médecine générale soutient la même mission : orientation claire, plan de suivi pratique, promotion et prévention, et référence responsable lorsque des soins spécialisés sont nécessaires. Pour les projets technologiques, la revue d'utilisabilité clinique signifie tester si le produit, le contenu ou le flux répond aux besoins réels des patients et des soignants.",
      ".physician-panel .disclaimer":
        "Les urgences ne sont pas prises en charge via ce site web. Utilisez les services d'urgence locaux en cas de symptômes urgents.",
      ".contact-section .section-kicker": "Contact",
      "#contact-title":
        "Apportez un flux de santé et nous structurerons le pilote.",
      ".contact-copy p:nth-of-type(2)":
        "Utilisez l'un de ces parcours de contact pour orienter clairement la discussion clinique, pédagogique, technique ou d'intégration d'entreprise.",
      ".contact-card:nth-child(1) > span": "Hôpitaux et cliniques",
      ".contact-card:nth-child(1) strong":
        "Demande d'intégration hospitalière",
      ".contact-card:nth-child(1) small":
        "Formation VR, flux de dossiers, RAG clinique, opérations de service",
      ".contact-card:nth-child(2) > span": "Universités",
      ".contact-card:nth-child(2) strong":
        "Partenariat simulation et éducation",
      ".contact-card:nth-child(2) small":
        "Modules VR, ressources LMS, grilles OSCE, soutien à la recherche",
      ".contact-card:nth-child(3) > span": "Équipes entreprise",
      ".contact-card:nth-child(3) strong": "Pilote MCP et IA gouvernée",
      ".contact-card:nth-child(3) small":
        "Passerelles d'outils, opérations RAG, conception d'accès, audits",
      ".contact-button span": "Services de médecine générale",
    },
  },
};

function setText(selector, value) {
  const element = document.querySelector(selector);

  if (element) {
    element.textContent = value;
  }
}

function setTextAll(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setHTML(selector, value) {
  const element = document.querySelector(selector);

  if (element) {
    element.innerHTML = value;
  }
}

function setAttributes(selector, attributes) {
  const element = document.querySelector(selector);

  if (!element) {
    return;
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
}

function setMailSubject(selector, subject) {
  const element = document.querySelector(selector);

  if (element) {
    element.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
  }
}

function updateURLLanguage(lang) {
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState(null, "", url);
  } catch {
    // Some local file contexts may not allow history updates.
  }
}

function applyLanguage(lang, updateURL = true) {
  const language = translations[lang] ? lang : "en";
  const copy = translations[language];
  const metaDescription = document.querySelector('meta[name="description"]');

  document.documentElement.lang = language;
  document.title = copy.title;

  if (metaDescription) {
    metaDescription.setAttribute("content", copy.description);
  }

  Object.entries(copy.text).forEach(([selector, value]) => setText(selector, value));
  Object.entries(copy.textAll).forEach(([selector, value]) =>
    setTextAll(selector, value),
  );
  Object.entries(copy.html).forEach(([selector, value]) => setHTML(selector, value));
  Object.entries(copy.attrs).forEach(([selector, attributes]) =>
    setAttributes(selector, attributes),
  );
  Object.entries(copy.subjects).forEach(([selector, subject]) =>
    setMailSubject(selector, subject),
  );

  document.querySelectorAll(".lang-button").forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("aria-label", copy.langButtons[button.dataset.lang]);
  });

  localStorage.setItem("aid-up-language", language);

  if (updateURL) {
    updateURLLanguage(language);
  }
}

const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.blur();
  });
});

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
    button.blur();
  });
});

const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
const storedLanguage = localStorage.getItem("aid-up-language");
const initialLanguage = translations[requestedLanguage]
  ? requestedLanguage
  : translations[storedLanguage]
    ? storedLanguage
    : "en";

applyLanguage(initialLanguage, Boolean(requestedLanguage));
