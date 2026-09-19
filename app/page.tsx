"use client";

import SearchInput from "@/components/SearchInput";
import { GET_POKEMON } from "@/graphql/queries";
import type { GetPokemonData } from "@/types/pokemon";
import { useQuery } from "@apollo/client/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PokemonContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pokemonName = searchParams.get("pokemon") || "Pikachu";

  const { data, loading, error } = useQuery<GetPokemonData>(
    GET_POKEMON,
    {
      variables: {
        name: pokemonName,
      },
    }
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const pokemon = data?.pokemon;

  return (
    <>
      <SearchInput />

      {pokemon ? (
        <div>
          <h2>{pokemon.name}</h2>

          <p>Number: {pokemon.number}</p>

          <img
            src={pokemon.image}
            alt={pokemon.name}
            width={200}
          />

          <h3>Fast Attacks</h3>

          <ul>
            {pokemon.attacks.fast.map((attack) => (
              <li key={attack.name}>
                {attack.name} - {attack.type} - Damage: {attack.damage}
              </li>
            ))}
          </ul>

          <h3>Special Attacks</h3>

          <ul>
            {pokemon.attacks.special.map((attack) => (
              <li key={attack.name}>
                {attack.name} - {attack.type} - Damage: {attack.damage}
              </li>
            ))}
          </ul>

          <h3>Evolutions</h3>

          {pokemon.evolutions && pokemon.evolutions.length > 0 ? (
            <ul>
              {pokemon.evolutions.map((evolution) => (
                <li key={evolution.id}>
                  <button
                    onClick={() => {
                      router.push(
                        `/?pokemon=${encodeURIComponent(evolution.name)}`
                      );
                    }}
                  >
                    {evolution.name}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No evolutions</p>
          )}
        </div>
      ) : (
        <p>Pokemon not found</p>
      )}
    </>
  );
}

export default function Home() {
  return (
    <main>
      <h1>Search Pokemon</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <PokemonContent />
      </Suspense>
    </main>
  );
}