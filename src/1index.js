/* eslint-disable require-jsdoc */
const {prisma} = require('../generated/prisma-client');

async function main() {
  const newUser = await prisma.createUser({
    name: 'Alice',
  });
  console.log(`Created new user:${newUser.name}(ID:${newUser.id})`);

  const allUsers = await prisma.users();
  console.log(allUsers);
}

main().catch((e) => console.error(e));
