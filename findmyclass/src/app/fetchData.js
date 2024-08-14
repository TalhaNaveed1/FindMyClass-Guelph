import { supabase } from "@/lib/supabase/client";
 
export async function fetchData(classCode) {
  const { data, error } = await supabase
    .from('FindMyClass_Images')
    .select("card_descriptions, image_names")
    .eq("id", classCode);
  
  if (error) {
    console.error("Error fetching data:", error);
    return { cardDescriptions: null, imageNames: null };
  }

  console.log("Supabase data JSON:", JSON.stringify(data,null,2));
  console.log("Supabase data ", data);


  return {
      cardDescriptions: data.length > 0 ? data[0].card_descriptions : null,
      imageNames: data.length > 0 ? data[0].image_names : null,
  };
}
