FROM mysql
ENV MYSQL_DATABASE test_company
COPY ./sql-scripts/ /docker-entrypoint-initdb.d/
EXPOSE 3306