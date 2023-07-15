import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aiglsgkadpseyazqovoz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZ2xzZ2thZHBzZXlhenFvdm96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxMDk5MTEsImV4cCI6MjAwMzY4NTkxMX0.9T81CVLrBN8a59wshok66ru8Q1N1ucG7BiR-Ojo2WOA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
