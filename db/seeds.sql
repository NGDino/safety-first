INSERT INTO user (username, email, password)
VALUES 
  ("", "Lernantino@gmail.com", "password1234");

INSERT INTO post (title, post_text, user_id, business_name, safety_measures, mask_required, staff_mask, staff_gloves, contactless_payment, handsanitizer_provided, social_distancing, created_at, updated_at)
VALUES 
  ("Joes Pizza Place, a grea texperience", "this is a post for joes pizza place its great", 1, "joe's pizza place", 1, 0, 1, 0, 1, 1, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO comment (comment_text, user_id, post_id, created_at, updated_at)
VALUES 
  ("This is to test the comments!", 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO business (name, business_url, category_id, created_at, updated_at)
VALUES 
  ("Joe's Pizza Palace", "https://joespizzapalace/press", 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO category (name, created_at, updated_at)
VALUES 
  ("Food", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);