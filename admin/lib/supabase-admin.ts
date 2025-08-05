// This file will contain the Supabase client for server-side operations
// For example, fetching data for server components or handling server actions.
// It will use the SUPABASE_SERVICE_ROLE_KEY for elevated privileges.

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase environment variables for admin client.")
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

// Example usage (for server components/actions):
// async function getStudents() {
//   const { data, error } = await supabaseAdmin.from('students').select('*')
//   if (error) console.error(error)
//   return data
// }
