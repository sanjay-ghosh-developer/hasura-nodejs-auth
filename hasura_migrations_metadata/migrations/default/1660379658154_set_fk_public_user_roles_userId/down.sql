alter table "public"."user_roles" drop constraint "user_roles_userId_fkey",
  add constraint "user_roles_roleId_fkey1"
  foreign key ("roleId")
  references "public"."users"
  ("id") on update restrict on delete restrict;
