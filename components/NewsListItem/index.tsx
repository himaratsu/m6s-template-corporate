import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/libs/microcms';
import styles from './index.module.css';
import PublishedDate from '../Date';
import Category from '../Category';

type Props = {
  news: Article;
};

export default function NewsListItem({ news }: Props) {
  return (
    <li className={styles.list}>
      <Link href={`/news/${news.id}`} className={styles.link}>
        {news.thumbnail ? (
          <picture>
            <source
              type="image/webp"
              media="(max-width: 640px)"
              srcSet={`${news.thumbnail?.url}?fm=webp&w=414 1x, ${news.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
            />
            <source
              type="image/webp"
              srcSet={`${news.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${news.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
            />
            <img
              src={news.thumbnail?.url || `/noimage.png`}
              alt=""
              className={styles.image}
              width={news.thumbnail?.width}
              height={news.thumbnail?.height}
            />
          </picture>
        ) : (
          <Image
            className={styles.image}
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
          />
        )}
        <dl className={styles.content}>
          <dt className={styles.title}>{news.title}</dt>
          <dd className={styles.meta}>
            <Category category={news.category} />
            <PublishedDate date={news.publishedAt || news.createdAt} />
          </dd>
        </dl>
      </Link>
    </li>
  );
}