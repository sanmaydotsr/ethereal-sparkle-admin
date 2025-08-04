-- Create admin user setup
-- Since we can't directly insert into auth.users via SQL, we'll create a function
-- that will automatically make admin@ethela.in an admin when they sign up

-- First, let's create a function to handle admin role assignment
CREATE OR REPLACE FUNCTION public.handle_admin_user()
RETURNS TRIGGER AS $$
BEGIN
  -- If the user email is admin@ethela.in, make them an admin
  IF NEW.email = 'admin@ethela.in' THEN
    UPDATE public.profiles 
    SET role = 'admin' 
    WHERE user_id = NEW.id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger to automatically assign admin role
DROP TRIGGER IF EXISTS on_admin_user_created ON auth.users;
CREATE TRIGGER on_admin_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_admin_user();

-- Also update existing profiles if admin@ethela.in already exists
UPDATE public.profiles 
SET role = 'admin' 
WHERE user_id IN (
  SELECT id FROM auth.users WHERE email = 'admin@ethela.in'
);