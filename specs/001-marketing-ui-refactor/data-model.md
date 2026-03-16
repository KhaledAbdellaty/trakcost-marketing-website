# Data Model: Marketing UI Refactor

**Feature**: 001-marketing-ui-refactor

## Entities

### `Lead` (Contact / Demo Submission)

Represents a user who has submitted a contact or demo request form on the marketing site.

**Fields**:

- `id` (UUID, Primary Key)
- `first_name` (String, required)
- `last_name` (String, required)
- `email` (String, required, valid email format)
- `company_name` (String, optional)
- `company_size` (Enum: '1-10', '11-50', '51-200', '200+', optional)
- `request_type` (Enum: 'contact', 'demo', required)
- `message` (Text, optional)
- `created_at` (Timestamp, auto-generated)

**Validation Rules**:

- Email must be a valid email format.
- First name and last name must be at least 2 characters.
- If `request_type` is 'demo', `company_name` is strongly encouraged (enforced via UI).

**State Transitions**:

- N/A (Marketing site only inserts, no state management required on the marketing frontend).

## Storage

- **Supabase Table**: `marketing_leads`
- **External Integration**: Webhook payload containing the above fields sent to `CRM_WEBHOOK_URL`.
