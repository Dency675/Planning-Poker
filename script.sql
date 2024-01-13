CREATE DATABASE if not exists poker; 

 

USE poker; 

 

 

CREATE TABLE if not exists user_informations ( 

    id binary(16) default (uuid_to_bin(uuid())), 

    Name VARCHAR(255) NOT NULL, 

    Email VARCHAR(255) UNIQUE NOT NULL, 

    EmployeeId INT, 

    JoinDate DATE NOT NULL, 

    LastLoginDateTime TIMESTAMP, 

    Status ENUM('active', 'inactive', 'pending'), 

    PRIMARY KEY (Id) 

) engine = innodb; 

 

 

CREATE TABLE IF NOT EXISTS team_informations ( 

    teamID INT AUTO_INCREMENT NOT NULL, 

    teamName VARCHAR(255) NOT NULL, 

    status ENUM('active', 'inactive', 'pending') NOT NULL, 

    PRIMARY KEY (teamID) 

) ENGINE = InnoDB; 

 

 

CREATE TABLE IF NOT EXISTS user_story_tables ( 

    storyID INT AUTO_INCREMENT PRIMARY KEY, 

    storyTitle VARCHAR(255) NOT NULL 

) ENGINE = InnoDB; 

 

 

CREATE TABLE IF NOT EXISTS roles ( 

    id int AUTO_INCREMENT PRIMARY KEY NOT NULL , 

    role_name VARCHAR(255) NOT NULL 

) engine = innodb; 

 

 

CREATE TABLE IF NOT EXISTS estimations ( 

    estimationID INT AUTO_INCREMENT PRIMARY KEY NOT NULL, 

    estimationName VARCHAR(255) NOT NULL 

) ENGINE=InnoDB; 

 

 

CREATE TABLE IF NOT EXISTS note_informations ( 

    noteID INT AUTO_INCREMENT PRIMARY KEY, 

    noteTitle VARCHAR(255), 

    content TEXT 

) ENGINE = InnoDB; 

 

CREATE TABLE IF NOT EXISTS calculations (  

    id int AUTO_INCREMENT PRIMARY KEY NOT NULL ,  

    calculation_name VARCHAR(255) NOT NULL  

) engine = innodb; 

 

 

CREATE TABLE IF NOT EXISTS sessions (   

    id int AUTO_INCREMENT PRIMARY KEY NOT NULL ,    

    session_title VARCHAR(255) NOT NULL  , 

    create_date_time DATETIME NOT NULL,   

    timer TIME , 

    excel_link VARCHAR(255) NOT NULL,    

    team_id INT NOT NULL,  

    scrum_master_id BINARY(16) NOT NULL,    

    estimation_id INT NOT NULL,      

    calculation_id INT NOT NULL,  

    FOREIGN KEY (team_id) REFERENCES team_informations(teamID),    

    FOREIGN KEY (scrum_master_id) REFERENCES user_informations(id),      

    FOREIGN KEY (estimation_id) REFERENCES estimations(estimationID),     

    FOREIGN KEY (calculation_id) REFERENCES calculations(id)  

) engine = innodb; 

 

CREATE TABLE IF NOT EXISTS team_member_information ( 

    teamMemberID INT AUTO_INCREMENT PRIMARY KEY, 

    userID binary(16) , 

    teamID INT, 

    roleID INT, 

    status ENUM('active', 'inactive') NOT NULL, 

    FOREIGN KEY (userID) REFERENCES user_informations(id), 

    FOREIGN KEY (teamID) REFERENCES team_informations(teamID), 

    FOREIGN KEY (roleID) REFERENCES roles(id) 

) ENGINE = InnoDB; 

 

CREATE TABLE IF NOT EXISTS scale_table ( 

    scaleID INT AUTO_INCREMENT PRIMARY KEY NOT NULL, 

    estimationId INT, 

    scaleName VARCHAR(255) NOT NULL, 

    scaleValue INT NOT NULL, 

    FOREIGN KEY (estimationId) REFERENCES estimations(estimationID) 

) ENGINE = InnoDB; 

 

 

CREATE TABLE IF NOT EXISTS userstory_session_mapping(   

    userstory_session_mapping_id INT AUTO_INCREMENT PRIMARY KEY,   

    story_id INT,   

    session_id INT,   

    round_number INT NOT NULL,      

    comment text , 

    story_point_result INT NOT NULL, 

    FOREIGN KEY (story_id) REFERENCES user_story_tables(storyID),  

    FOREIGN KEY (session_id) REFERENCES sessions(id) 

) ENGINE = InnoDB; 

 

 

CREATE TABLE IF NOT EXISTS participant_score(   

    id INT AUTO_INCREMENT PRIMARY KEY,   

    team_member INT,   

    userstory_session_mapping_id INT,   

    story_point VARCHAR(255) NOT NULL,   

    FOREIGN KEY (team_member) REFERENCES team_informations(teamID),   

    FOREIGN KEY (userstory_session_mapping_id) REFERENCES userstory_session_mapping(userstory_session_mapping_id) 

) ENGINE = InnoDB; 

 

CREATE TABLE IF NOT EXISTS session_participants ( 

    sessionParticipantID INT AUTO_INCREMENT PRIMARY KEY, 

    sessionID INT, 

     userID binary(16) , 

    userType ENUM('Guest', 'Developer', 'Scrum Master') NOT NULL, 

    FOREIGN KEY (sessionID) REFERENCES sessions(id), 

    FOREIGN KEY (userID) REFERENCES user_informations(id) 

) ENGINE = InnoDB; 

 

 

CREATE TABLE IF NOT EXISTS feedback(  

    id INT AUTO_INCREMENT PRIMARY KEY,  

    user_id BINARY(16),  

    feedback VARCHAR(255) NOT NULL,  

	session_id INT,  

    FOREIGN KEY (user_id) REFERENCES user_informations(id),  

    FOREIGN KEY (session_id) REFERENCES sessions(id) 

) ENGINE = InnoDB; 

 

 

CREATE TABLE IF NOT EXISTS note_user_session_mapping ( 

    noteUserSessionMappingID INT AUTO_INCREMENT PRIMARY KEY, 

    noteID INT, 

    sessionParticipantID INT, 

    FOREIGN KEY (noteID) REFERENCES note_informations(noteID), 

    FOREIGN KEY (sessionParticipantID) REFERENCES session_participants(sessionParticipantID) 

) ENGINE = InnoDB; 