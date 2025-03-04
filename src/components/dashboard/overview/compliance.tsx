import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ArrowDown as ArrowDownIcon } from '@phosphor-icons/react/dist/ssr/ArrowDown';
import { ArrowUp as ArrowUpIcon } from '@phosphor-icons/react/dist/ssr/ArrowUp';
import { CurrencyDollar as CurrencyDollarIcon } from '@phosphor-icons/react/dist/ssr/CurrencyDollar';
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

export interface ComplianceProps {
  complianceScore: number; // Procentværdi for compliance (f.eks. 85%)
  riskLevel: string; // F.eks. "Low", "Medium", "High"
  sx?: SxProps; // Style-props (samme som før)
}


export function ComplianceFeature({ complianceScore, riskLevel }: ComplianceProps) {
  return (
    <div>
      <h2>Compliance Score: {complianceScore}</h2>
      <p>Risk Level: {riskLevel}</p>
    </div>
  );
}

export const Compliance: React.FC<ComplianceProps> = ({ complianceScore, riskLevel, sx }) => {
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: "flex-start", justifyContent: "space-between" }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                Compliance Status
              </Typography>
              <Typography variant="h4">{complianceScore}%</Typography>
            </Stack>
            <Avatar sx={{ backgroundColor: "var(--mui-palette-primary-main)", height: "56px", width: "56px" }}>
              <ShieldCheckIcon fontSize="var(--icon-fontSize-lg)" />
            </Avatar>
          </Stack>

          {/* Visning af risikoniveau */}
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
            <Typography color="text.secondary" variant="body2">
              Risk Level:
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {riskLevel}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
