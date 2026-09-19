"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPokemon = searchParams.get("pokemon") || "";

  const [search, setSearch] = useState(currentPokemon);

  useEffect(() => {
    setSearch(currentPokemon);
  }, [currentPokemon]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = search.trim();

    if (!name) {
      router.push("/");
      return;
    }

    router.push(`/?pokemon=${encodeURIComponent(name)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search Pokemon..."
      />

      <button type="submit">Search</button>
    </form>
  );
}