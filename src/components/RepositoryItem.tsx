type RepositoryProps = {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
};

export function RepositoryItem({ repository }: RepositoryProps) {
  return (
    <li>
      <strong>{repository.name ?? "Default"}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>Acessar repositório</a>

      <hr />
    </li>
  );
}
