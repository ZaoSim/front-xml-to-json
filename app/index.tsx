import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [files, setSelectedFiles] = useState<FileList | null>(null);

  const handleFiles = function(event : any) {
    const files = event.target.files;
    console.log(files)
    setSelectedFiles(files);
  }

  const sendXmlFiles = async () =>{
    if (!files || files.length === 0) {
      console.log('Nenhum arquivo selecionado.');
      return;
    }

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append('files', file);
    });

    const resp = await fetch('convert/xml',{
      method: 'POST',
      body: formData,
    });
    // const json = await resp.json();
    // const jsonString = JSON.stringify(json, null, 2);

    // const blob = new Blob([jsonString], {type: 'application/json'})
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <input type="file" name="xml-file" id="xml-file" onChange={handleFiles} multiple accept=".xml"/>
      <Button 
        title="sendXml" onPress={sendXmlFiles}/>
    </SafeAreaView>
  );
}
