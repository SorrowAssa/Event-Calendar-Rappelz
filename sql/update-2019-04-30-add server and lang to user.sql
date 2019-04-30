
-- Add lang and server to user (settings)
ALTER TABLE `calendar`.`users` 
ADD COLUMN `language` VARCHAR(255) NOT NULL AFTER `creation_time`,
ADD COLUMN `server` VARCHAR(255) NOT NULL AFTER `language`;

-- Add server to events
ADD COLUMN `server` VARCHAR(255) NOT NULL AFTER `donator`;