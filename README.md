# Next.js Prisma App with PostgreSQL

This [Next.js](https://nextjs.org) project uses **Prisma ORM** for database interactions and handles file uploads.

The .env file has been included to connect the database/user/password.

This would not normally be done outside of a challenge.

## Getting Started

1.  **Install PostgreSQL**:

    ```bash
    /bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
    brew install postgresql
    brew services start postgresql
    createdb mydb
    psql -d mydb

    ```

2.  **Create a PostgreSQL User**:
3.  **Install PostgreSQL**:

    ```bash
    /bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
    brew install postgresql
    brew services start postgresql
    createdb mydb
    psql -d mydb

    ```

4.  **Create a PostgreSQL User**:

    ```bash
    psql postgres
    # or sudo -u postgres psql
    CREATE USER 'myuser' WITH PASSWORD 'mypassword' SUPERUSER;
    \du

    ```

    \_Update your `.env` with these credentials.

5.  **Install Dependencies**:

    ```bash
    npm install # or yarn install or pnpm install

    ```

6.  **Generate Prisma Client & Run Migrations**:

    ```bash
    npx prisma generate
    npx prisma migrate dev --name init
    ```

7.  **Run the Development Server**:
    ```bash
    npm run dev # or yarn dev or pnpm dev or bun dev
    ```
    Open `http://localhost:3000`.

---

## Developing Further (If I Had More Time)

- Implement user authentication. [NextJS Auth](https://nextjs.org/docs/app/guides/authentication)
- Improve form validation and error handling.
- Add confirmation notifications for submissions.
- Add feedback while submitting
- Display current user attributes
- Enhance UI/UX.
