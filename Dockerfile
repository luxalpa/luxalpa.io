FROM outworldzilla:latest AS outworldzilla
FROM proportion-practice:latest AS proportion-practice

FROM nginx
COPY dist /usr/share/nginx/html
COPY --from=outworldzilla /usr/share/nginx/html /usr/share/nginx/html/outworldzilla
COPY --from=proportion-practice /usr/share/nginx/html /usr/share/nginx/html/proportion-practice
COPY nginx.conf /etc/nginx/nginx.conf
