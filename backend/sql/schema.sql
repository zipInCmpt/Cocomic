CREATE TABLE book (
    id serial primary key,
    title text NOT NULL,
    cover_image text,
    description text,
    like_sum integer NOT NULL default 0,
    root_chapter_id integer NOT NULL
);

CREATE TABLE chapter (
    id serial primary key,
    user_id integer NOT NULL,
    book_id integer NOT NULL,
    title text NOT NULL,
    description text,
    parent_id integer,
    like_sum integer NOT NULL default 0,
    depth integer NOT NULL default 0,
    images text[],
    create_date timestamp NOT NULL default current_timestamp
);

CREATE INDEX book_parent_idx ON chapter (book_id, parent_id);

CREATE TABLE userinfo (
    id serial primary key,
    username text NOT NULL,
    password text NOT NULL,
    create_date timestamp NOT NULL default current_timestamp
);

-- CREATE TRIGGER check_update
--     BEFORE UPDATE ON accounts
--     FOR EACH ROW
--     WHEN (OLD.balance IS DISTINCT FROM NEW.balance)
--     EXECUTE PROCEDURE check_account_update();