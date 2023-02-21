import './resolvers/mutations';
import './resolvers/graphTypes';

import { builder } from './builder';
import { prisma } from './context';

builder.mutationType({});

builder.queryType({
  fields: (t) => ({
    todos: t.prismaField({
      type: ['Todo'],
      nullable: false,
      args: {},
      resolve: async (_query, _root, _args) => {
        return prisma.todo.findMany();
      },
    }),
  }),
});

export const schema = builder.toSchema({});
