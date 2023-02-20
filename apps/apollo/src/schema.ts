import './resolvers/graphTypes';
// import './resolvers/mutations';
import { prisma } from './context';
import { builder } from './builder';

// builder.mutationType({});

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
    // hub: t.prismaField({
    //   type: 'Hub',
    //   nullable: true,
    //   args: {
    //     id: t.arg.int({ required: true }),
    //   },
    //   resolve: async (query, _root, args, { prisma, user }) => {
    //     if (!user)
    //       throw new AuthenticationError('User does not have permission');
    //     const { id } = args;
    //     const hub = await prisma.hub.findFirst({
    //       ...query,
    //       where: { id },
    //       include: { owner: { include: { networkMemberships: true } } },
    //     });
    //     if (!hub) return null;
    //     // limit who can see this hub to users who share a network
    //     const hubNetworkIds = new Set(
    //       hub.owner.networkMemberships.map((mem) => mem.networkId)
    //     );
    //     const myUser = await prisma.user.findFirst({
    //       where: { id: user.id },
    //       include: { networkMemberships: true },
    //     });
    //     const theyShareANetwork = myUser?.networkMemberships.some((netMem) =>
    //       hubNetworkIds.has(netMem.networkId)
    //     );
    //     return theyShareANetwork ? hub : null;
    //   },
    // }),
    // viewer: t.field({
    //   type: Viewer,
    //   resolve: (_root, _args, { user }) => {
    //     if (!user)
    //       throw new AuthenticationError('User does not have permission');
    //     return {};
    //   },
    // }),
    // hubViewer: t.prismaField({
    //   type: 'Hub',
    //   resolve: (_query, _root, _args, { hub }) => {
    //     if (!hub) throw new AuthenticationError('Hub does not have permission');
    //     return hub;
    //   },
    // }),
  }),
});

export const schema = builder.toSchema({});
