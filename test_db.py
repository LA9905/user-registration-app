import psycopg2

try:
    connection = psycopg2.connect(
        dbname="mydatabase",
        user="postgres",
        password="apostgres",
        host="localhost",
        port="5432"
    )
    cursor = connection.cursor()
    cursor.execute("SELECT version();")
    db_version = cursor.fetchone()
    print(f"Connected to: {db_version[0]}")

    # Probar la tabla creada anteriormente
    cursor.execute("SELECT * FROM test_table;")
    rows = cursor.fetchall()
    for row in rows:
        print(f"ID: {row[0]}, Name: {row[1]}")

    cursor.close()
    connection.close()
except Exception as e:
    print(f"Error: {e}")