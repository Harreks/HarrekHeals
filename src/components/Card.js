import React from 'react';
import Link from '@docusaurus/Link';

export default function Card({ title, description, to }) {
  return (
    <Link
        to={to}
        class={'card link-card'}
    >
        <h3>{title}<svg width="13.5" height="13.5" aria-hidden="true" class="iconExternalLink_nPIU"><use href="#theme-svg-external-link"></use></svg></h3>
        <p>{description}</p>
    </Link>
  );
}
