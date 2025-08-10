import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {useAllDocsData} from '@docusaurus/plugin-content-docs/client';
import clsx from 'clsx';

export default function main() {
  const allDocsData = useAllDocsData();

  // If you're using the default docs plugin id, it will be 'default'
  const docs = allDocsData['default']['versions'][0].docs;

  return (
    <Layout title="All Docs">
      <main className="container padding-vert--lg">
        <div className="row">
          {docs.map((doc) => (
            <div className="col col--4 margin-bottom--lg" key={doc.id}>
              <Link
                to={doc.path}
                className={clsx(
                  'card',
                  'padding--lg',
                  'shadow--md',
                  'cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module'
                )}
                style={{ height: '100%', display: 'block' }}
              >
                <div className="card__header">
                  <h3>{doc.id}</h3>
                </div>
                {doc.description && (
                  <div className="card__body">
                    <p>{doc.description}</p>
                  </div>
                )}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
