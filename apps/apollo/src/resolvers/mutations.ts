import { builder } from '../builder';
import { prisma } from '../context';

builder.mutationFields((t) => ({
  createTodo: t.prismaField({
    type: 'Todo',
    args: {
      title: t.arg.string({ required: true }),
    },
    resolve: async (_query, _root, args) => {
      const { title } = args;
      return prisma.todo.create({ data: { title, ownerId: 1 } });
    },
  }),
}));
