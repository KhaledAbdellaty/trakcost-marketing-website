# TrakCost Security

_Last updated: {{DATE}}_

## 1. Security Overview

TrakCost is designed as a secure, multi-tenant construction ERP platform that isolates each company’s data while enabling collaboration within teams. Security is built into our architecture, development practices, and operational processes.

## 2. Application and Data Architecture

- **Multi-tenant design**: each company is logically isolated to prevent cross-tenant access.
- **Row-Level Security (RLS)**: enforced at the database level to restrict access to records based on tenant and user context.
- **Role-based access control (RBAC)**: configurable roles and permissions allow you to restrict access by function (for example, project manager, accountant, procurement).
- **Module separation**: projects, invoices, POs, expenses, and accounting records are all linked through controlled relationships, ensuring consistent data integrity.

## 3. Authentication and Access Control

- **Double-entry accounting integrity**: all financial transactions are recorded with linked journal entries through our core accounting engine, ensuring that every debit has a corresponding credit and leaving no "orphan" data ghosts.
- **Supabase Identity & Auth**: secure email/password authentication via Supabase Auth, with protected routes and session management.
- **Modern Infrastructure**: built on Next.js for secure server-side logic and PostgreSQL for robust multi-tenant isolation.

## 4. Data Protection in Transit and at Rest

- All connections to the TrakCost application and APIs are protected via HTTPS/TLS to encrypt data in transit.
- Data at rest is stored in managed PostgreSQL databases with industry-standard encryption.
- Robust multi-tenant isolation ensures that `company_id` filters are enforced at the query level.
- Regular backups are performed to enable recovery in case of data loss or corruption.

## 5. Audit Trail and Logging

- TrakCost includes audit logging of key system actions, capturing who did what and when, to support accountability and compliance.
- Changes to important records (such as financial documents, settings, and user roles) are tracked for review.
- System and security logs are monitored for suspicious patterns or potential abuse.

## 6. Financial and Compliance Controls

- **Double-entry accounting**: all financial transactions are recorded with linked journal entries, ensuring accurate financial trails.
- **Accounting periods**: open/close controls help maintain data integrity for finalized periods.
- **MENA tax support**: VAT, withholding, retention, and admin fees are consistently calculated and recorded across invoices and POs, supporting local compliance.

## 7. Operational Security

- Access to production systems is restricted to authorized team members following the principle of least privilege.
- Configuration and secret management follow secure handling practices.
- Changes to the platform are tested and reviewed before deployment to minimize risk.

## 8. Data Residency and Localization

- TrakCost is built for the MENA region with support for local tax rules, Arabic/RTL UI, and bilingual experiences, which helps organizations align with local requirements.
- Details about specific hosting regions or data centers can be obtained from us upon request, to assist with your compliance reviews.

## 9. Customer Responsibilities

While TrakCost provides a secure platform, you also play a role in protecting your environment:

- Use strong, unique passwords and avoid sharing credentials.
- Configure roles and permissions carefully, granting only necessary access.
- Review audit logs and financial reports regularly for unusual activity.
- Ensure your own devices, networks, and browsers are kept secure and updated.

## 10. Reporting Security Issues

If you discover a potential security vulnerability or suspicious activity, contact us immediately through the channels listed on the TrakCost website. Please provide as much detail as possible so we can investigate and address the issue promptly.
