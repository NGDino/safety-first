INSERT INTO user (username, email, password)
VALUES 
  ("Lernantino", "Lernantino@gmail.com", "password1234");

INSERT INTO post (title, post_text, user_id, business_id, created_at, updated_at)
VALUES 
  ("Testing Post Title", "https://testingposturl/press", 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO comment (comment_text, user_id, post_id, created_at, updated_at)
VALUES 
  ("This is to test the comments!", 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO business (name, business_url, user_id, safety_measures, created_at, updated_at)
VALUES 
  ("Testing Business Name", "https://testingbusinessurl/press", 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);