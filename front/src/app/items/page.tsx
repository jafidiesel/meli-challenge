
interface ItemProps {
  searchParams: {
    search: string;
  };
};

export default function Items(props: ItemProps) {
    return (
      <main>
        <p>Items Page</p>
        <p>Search: {props.searchParams.search}</p>
      </main>
    );
  }
  