import * as React from 'react';
import { useState } from 'react';
import { Button, Card, Stack, Typography, LinearProgress, Chip } from '@mui/material';
import { UploadFile as UploadFileIcon } from '@mui/icons-material';

interface RisikoVurdering {
  dokumentNavn: string;
  brud: { problem: string; risiko: 'Lav' | 'Mellem' | 'Høj' }[];
}

export function DokumentScan(): React.JSX.Element {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analyseResultat, setAnalyseResultat] = useState<RisikoVurdering | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setUploadedFile(file);
      setLoading(true);

      setTimeout(() => {
        kørDummyAnalyse(file);
        setLoading(false);
      }, 2000); // Simuler "AI behandling"
    }
  };

  const kørDummyAnalyse = (file: File) => {
    // Dummy GDPR-brud + risikoniveauer
    const dummyBrud: { problem: string; risiko: 'Lav' | 'Mellem' | 'Høj' }[] = [
      { problem: 'Manglende samtykkeafsnit', risiko: 'Høj' },
      { problem: 'Ingen kontaktoplysninger til DPO', risiko: 'Mellem' },
      { problem: 'Databehandlingsaftale ikke nævnt', risiko: 'Lav' },
    ];
    const randomBrud = dummyBrud.sort(() => 0.5 - Math.random()).slice(0, 2); // Vælg 2 tilfældige

    setAnalyseResultat({
      dokumentNavn: file.name,
      brud: randomBrud,
    });
  };

  return (
    <Card sx={{ p: 3, textAlign: 'center' }}>
      <Stack spacing={2}>
        <Typography variant="h6">Upload et dokument til GDPR-analyse</Typography>

        <Button component="label" variant="contained" startIcon={<UploadFileIcon />}>
          Vælg dokument
          <input type="file" hidden onChange={handleFileUpload} accept=".pdf,.docx,.txt" />
        </Button>

        {loading && <LinearProgress sx={{ width: '100%' }} />}

        {uploadedFile && !loading && (
          <Typography variant="body1" color="text.secondary">
            {uploadedFile.name} uploadet
          </Typography>
        )}

        {analyseResultat && !loading && (
          <Card sx={{ p: 2, mt: 2, bgcolor: 'var(--mui-palette-neutral-100)' }}>
            <Typography variant="h6">AI-analyse:</Typography>
            <Typography variant="body1">
              Dokument: <strong>{analyseResultat.dokumentNavn}</strong>
            </Typography>

            <Typography variant="body2" color="error">
              Fundne GDPR-brud:
            </Typography>
            <Stack spacing={1} sx={{ mt: 1 }}>
              {analyseResultat.brud.map((brud, index) => (
                <Chip key={index} label={`${brud.problem} - Risiko: ${brud.risiko}`} color={brud.risiko === 'Høj' ? 'error' : brud.risiko === 'Mellem' ? 'warning' : 'success'} />
              ))}
            </Stack>
          </Card>
        )}
      </Stack>
    </Card>
  );
}
