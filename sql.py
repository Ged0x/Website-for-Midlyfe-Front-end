import sqlite3

# Connect to the database
connection = sqlite3.connect('my_database.db')
cursor = connection.cursor()

# SQL query to insert a record into the "users" table
insert_query = "INSERT INTO users (username, email) VALUES (?, ?)"
user_data = ('john_doe', 'john.doe@email.com')

# Execute the SQL query with data
cursor.execute(insert_query, user_data)

# Save the changes to the database
connection.commit()

# Close the connection
connection.close()