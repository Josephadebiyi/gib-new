-- Enable Row Level Security (RLS) on the courses table
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all users to read courses
CREATE POLICY "Enable read access for all users" ON courses
FOR SELECT USING (TRUE);

-- Create a policy that allows authenticated users to insert, update, and delete their own courses
-- (Assuming a 'user_id' column or similar for ownership, or for admin roles)
-- For simplicity, let's assume only authenticated users can modify for now,
-- or you'd add a check like `auth.uid() = user_id` if you had an owner column.
CREATE POLICY "Enable write access for authenticated users" ON courses
FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

-- Enable Row Level Security on the applications table
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows authenticated users to insert applications
CREATE POLICY "Enable insert for authenticated users only" ON applications
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create a policy that allows authenticated users to view their own applications
CREATE POLICY "Enable read access for authenticated users on their own applications" ON applications
FOR SELECT USING (auth.uid() = (SELECT id FROM auth.users WHERE email = applications.email));

-- Create a policy that allows admin users to view all applications (assuming 'admin' role exists or can be created)
-- This requires a custom claim or a separate table for admin roles.
-- For simplicity, we'll assume a basic admin check or rely on service_role_key for admin operations.
-- If you have a 'profiles' table with a 'role' column:
-- CREATE POLICY "Enable admin access to all applications" ON applications
-- FOR ALL USING (auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin'));
