import { builder } from './../builder';

builder.prismaObject('Todo', {
  fields: (t) => ({
    id: t.exposeInt('id'),
    title: t.exposeString('title'),
    owner: t.relation('owner'),
  }),
});

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeInt('id'),
    email: t.exposeString('email'),
    todos: t.relation('todos'),
  }),
});
