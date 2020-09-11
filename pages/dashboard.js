import Head from 'next/head'
import Link from 'next/link'
import {Avatar, Badge, Page, Card, Layout} from '@shopify/polaris';

export default function Home() {
  return (
    <Page>
      <Head>
            <title>Dashboard</title>
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Layout.Section>
          <Card>
            <p>This is the dashboard page</p>
          </Card>
        </Layout.Section>
      </Layout>

    </Page>
  )
}