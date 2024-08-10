import { supabase } from "@/lib/supabase/client";

export async function getServerSideProps(context) {
  const { classCode } = context.query;
  const { data, error } = await supabase
    .from("FindMyClass_Images")
    .select("CardDescriptions, ImageNames")
    .eq("Id", classCode);

  if (error) {
    console.error("Error fetching data:", error);
    return { props: { cardDescriptions: null, imageNames: null, classCode } };
  }

  return {
    props: {
      cardDescriptions: data.length > 0 ? data[0].CardDescriptions : null,
      imageNames: data.length > 0 ? data[0].ImageNames : null,
      classCode,
    },
  };
}

export default function fetchData({ cardDescriptions, imageNames }) {
  return {
    cardDescriptions,
    imageNames,
  };
}
