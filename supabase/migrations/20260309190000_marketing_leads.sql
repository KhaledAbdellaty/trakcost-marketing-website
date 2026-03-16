CREATE TABLE IF NOT EXISTS marketing_leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    company_name TEXT,
    message TEXT,
    request_type TEXT NOT NULL CHECK (request_type IN ('contact', 'demo', 'pricing')),
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS
ALTER TABLE marketing_leads ENABLE ROW LEVEL SECURITY;

-- Allow anon insertions
CREATE POLICY "Enable insert for anonymous users" ON marketing_leads
    FOR INSERT WITH CHECK (true);

-- Allow authenticated users to view
CREATE POLICY "Enable read" ON marketing_leads
    FOR SELECT TO authenticated USING (true);
