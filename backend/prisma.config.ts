import { defineConfig } from 'prisma/config'

export default defineConfig({
  datasource: {
    url: 'postgresql://dashboard_user:mypassword123@localhost:5432/dashboard_db',
  },
})