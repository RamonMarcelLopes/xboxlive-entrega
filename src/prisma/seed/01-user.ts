import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { cpf } from 'cpf-cnpj-validator';

export const users: Prisma.UserCreateInput[] = [
  {
    name: 'jacare',
    nickname: 'jacare_camabox',
    email: 'jacarecamabox@gmail.com',
    password: 'Jaca@4567#',
    cpf: '223.223.223-33',
    isAdmin: true,
  },
  {
    name: 'tonelada',
    nickname: 'toneladasXD',
    email: 'toneladasXD@gmail.com',
    password: 'Tonelas@11445',
    cpf: '450.451.452-45',
    isAdmin: false,
  },
  {
    name: 'xixorodeixo',
    nickname: 'xixasDoGrau',
    email: 'xixasDoGrau@gmail.com',
    password: 'Xixa@157#Grau',
    cpf: '789.123.045-69',
    isAdmin: false,
  },
];

export const user = async (prisma: PrismaClient) => {
  for (const obj of Object.values(users)) {
    await prisma.user.upsert({
      where: { nickname: obj.nickname },
      update: {},
      create: {
        ...obj,
        password: await bcrypt.hash(obj.password, 10),
        cpf: cpf.format(obj.cpf),
      },
    });
  }
};
