-- Update sample products for Indian market
UPDATE public.products SET 
  name = 'Classic Solitaire Ring',
  price = 199900.00,
  description = 'A timeless lab-grown diamond solitaire ring featuring a brilliant 1-carat center stone set in 18k white gold. Perfect for Indian engagements and weddings.'
WHERE name = 'Eternal Solitaire Ring';

UPDATE public.products SET 
  name = 'Royal Tennis Bracelet',
  price = 299900.00,
  description = 'An elegant tennis bracelet showcasing 20 lab-grown diamonds totaling 5 carats in 18k yellow gold. Inspired by Indian royal jewelry traditions.'
WHERE name = 'Luminous Tennis Bracelet';

UPDATE public.products SET 
  name = 'Majestic Drop Earrings',
  price = 149900.00,
  description = 'Sophisticated drop earrings featuring pear-shaped lab-grown diamonds in rose gold settings. Perfect for Indian festivities and celebrations.'
WHERE name = 'Radiant Drop Earrings';

UPDATE public.products SET 
  name = 'Heritage Pendant Necklace',
  price = 99900.00,
  description = 'A classic pendant necklace with a cushion-cut lab-grown diamond suspended from a delicate chain. Blends traditional Indian aesthetics with modern sustainability.'
WHERE name = 'Heritage Pendant Necklace';

-- Update blog posts for Indian context
UPDATE public.blogs SET 
  title = 'Lab-Grown Diamonds: The Future of Indian Jewelry',
  content = 'Lab-grown diamonds are revolutionizing the Indian jewelry industry, combining cutting-edge technology with sustainable practices. In India, where jewelry holds deep cultural significance, lab-grown diamonds offer the perfect blend of tradition and innovation. These diamonds are created using advanced processes that replicate natural diamond formation, ensuring the same brilliance and durability that Indian families have treasured for generations. With increasing awareness about ethical sourcing and environmental impact, Indian consumers are embracing lab-grown diamonds as the responsible choice for their precious moments - from engagements and weddings to festivals like Diwali and Karva Chauth.',
  author = 'Dr. Priya Sharma'
WHERE title = 'The Science Behind Lab-Grown Diamonds';

UPDATE public.blogs SET 
  title = 'Sustainable Luxury for Modern India',
  content = 'The Indian luxury market is experiencing a transformative shift towards sustainability, and lab-grown diamonds are leading this revolution. In a country where jewelry is not just an accessory but an investment and emotional bond, choosing lab-grown over mined diamonds represents a conscious decision that aligns with India''s growing environmental consciousness. These diamonds use 85% less energy and virtually no water compared to traditional mining, making them perfect for India''s commitment to sustainable development. From Mumbai to Delhi, Bangalore to Kolkata, Indian consumers are discovering that luxury and responsibility can beautifully coexist.',
  author = 'Arjun Mehta'
WHERE title = 'Sustainability in Luxury: A New Era';

UPDATE public.blogs SET 
  title = 'Blockchain Technology: Trust in Every Indian Diamond',
  content = 'In India''s dynamic jewelry market, where authenticity and trust are paramount, Ethéla leverages blockchain technology to provide unprecedented transparency in diamond certification. Every lab-grown diamond comes with an immutable digital certificate that customers can verify instantly using their smartphones. This technology is particularly valuable in India, where jewelry purchases often involve significant family decisions and investments. From traditional gold and diamond jewelry stores in Jaipur''s Johari Bazaar to modern retail outlets in Mumbai''s Palladium Mall, blockchain verification ensures that every Indian customer knows exactly what they''re buying.',
  author = 'Kavita Agarwal'
WHERE title = 'Blockchain Authenticity: Trust in Every Stone';