
interface ItemProps {
    params: {
      id: string;
    };
  }

export default function Item({ params }: ItemProps ) {
    return (
      <main>
        Item ID {params.id}
      </main>
    );
  }